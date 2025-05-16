import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    
    if (!cursor || !cursorDot) return;
    
    const onMouseMove = (e: MouseEvent) => {
      // Check if mobile device and exit if it is
      if (window.innerWidth < 1024) return;
      
      // Position the custom cursor
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      
      // Position the cursor dot with minimal delay
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
    };
    
    const onMouseDown = () => {
      // Scale down the cursor on click
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };
    
    const onMouseUp = () => {
      // Reset cursor size
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };
    
    const onMouseEnterLink = () => {
      // Expand cursor when hovering over links
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.border = '1px solid rgba(49, 151, 149, 0.6)';
      cursor.style.backgroundColor = 'rgba(49, 151, 149, 0.1)';
    };
    
    const onMouseLeaveLink = () => {
      // Reset cursor on link leave
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.border = '2px solid rgba(49, 151, 149, 0.6)';
      cursor.style.backgroundColor = 'transparent';
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // Add event listeners for all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);
  
  return null; // No visible component, just effects
};

export default CustomCursor;