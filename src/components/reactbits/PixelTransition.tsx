import React, { useRef, useEffect, useState, CSSProperties } from "react";
import { gsap } from "gsap";
import "../reactbits/PixelTransition.css";

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  className = "",
  style = {},
  // aspectRatio = "100%",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const defaultRef = useRef<HTMLDivElement | null>(null); // Tambah ref untuk gambar pertama
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  // Saat mount, langsung tampilkan secondContent (teks 'Muka Gua!')
  useEffect(() => {
    animatePixels(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel");
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    const defaultEl = defaultRef.current;
    if (!pixelGridEl || !activeEl || !defaultEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
      ".pixelated-image-card__pixel"
    );
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: "none" });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    // Balik logika: gambar muncul saat hover (activate true)
    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
      onStart: () => {
        if (activate) {
          defaultEl.style.display = "block"; // gambar muncul saat hover
          activeEl.style.display = "none";
        } else {
          defaultEl.style.display = "none";
          activeEl.style.display = "block"; // kata-kata muncul saat tidak hover
        }
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      if (activate) {
        defaultEl.style.display = "block";
        activeEl.style.display = "none";
      } else {
        defaultEl.style.display = "none";
        activeEl.style.display = "block";
      }
    });

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });
  };

  const handleMouseEnter = (): void => {
    if (!isActive) animatePixels(true);
  };
  const handleMouseLeave = (): void => {
    if (isActive) animatePixels(false);
  };
  const handleClick = (): void => {
    animatePixels(!isActive);
  };

  return (
    <div
      ref={containerRef}
      className={`pixelated-image-card ${className}`}
      style={{ minHeight: 300, ...style }} // tambahkan minHeight agar parent selalu punya tinggi
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
    >
      <div className="pixelated-image-card__default" ref={defaultRef}>{firstContent}</div>
      <div className="pixelated-image-card__active" ref={activeRef}>
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
};

export default PixelTransition;
