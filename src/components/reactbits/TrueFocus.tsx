import { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import "../reactbits/TrueFocus.css";

// Utility: Convert tailwind color class (e.g. 'text-primary-400') to CSS color value
function tailwindClassToColor(className: string): string | undefined {
    // Only support 'text-' and 'border-' classes for now
    if (!className) return undefined;
    // e.g. text-primary-400 => primary.400
    const match = className.match(/(?:text|border)-([a-zA-Z0-9]+)-(\d{3})/);
    if (!match) return undefined;
    const [, color, shade] = match;
    // Try to get from CSS variable (tailwind 3+)
    // e.g. var(--tw-color-primary-400)
    return `var(--tw-color-${color}-${shade}, #38B2AC)`; // fallback to teal if not found
}

interface TrueFocusProps {
    sentence?: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
    className?: string; // tambahkan className di sini
}

interface FocusRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
    sentence = "True Focus",
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
    className = "", // tambahkan className di sini
}) => {
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const containerRef: RefObject<HTMLDivElement> = useRef(null);
    const wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]> = useRef([]);
    const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

    // Convert tailwind class to CSS color if needed
    let resolvedBorderColor = borderColor;
    if (borderColor && borderColor.startsWith("text-")) {
        const cssColor = tailwindClassToColor(borderColor);
        if (cssColor) resolvedBorderColor = cssColor;
    }

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, (animationDuration + pauseBetweenAnimations) * 1000);

            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        if (currentIndex === null || currentIndex === -1) return;

        if (!wordRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex, words.length]);

    // Handlers for manual mode (hover)
    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex ?? 0);
        }
    };

    return (
        <div className={`focus-container ${className}`} ref={containerRef}>
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={index}
                        ref={(el) => (wordRefs.current[index] = el)}
                        className={`focus-word ${manualMode ? "manual" : ""} ${isActive && !manualMode ? "active" : ""
                            }`}
                        style={{
                            filter:
                                manualMode
                                    ? isActive
                                        ? `blur(0px)`
                                        : `blur(${blurAmount}px)`
                                    : isActive
                                        ? `blur(0px)`
                                        : `blur(${blurAmount}px)`,
                            transition: `filter ${animationDuration}s ease`,
                            "--border-color": resolvedBorderColor,
                            "--glow-color": glowColor,
                        } as React.CSSProperties}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {word}
                    </span>
                );
            })}

            <motion.div
                className="focus-frame"
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0,
                }}
                transition={{
                    duration: animationDuration,
                }}
                style={{
                    "--border-color": resolvedBorderColor,
                    "--glow-color": glowColor,
                } as React.CSSProperties}
            >
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;