import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  // Detect touch device only once (during initial render)
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor] = useState(!isTouchDevice); // initialized correctly

  useEffect(() => {
    if (isTouchDevice) return; // Touch devices → do nothing

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  if (!showCursor) return null;

  return (
    <>
      {/* Blob Effect — Reduced Size */}
      <div
        className="fixed pointer-events-none opacity-30 dark:opacity-30 transition-all duration-300 ease-out z-10"
        style={{
          left: position.x - 150,
          top: position.y - 150,
          width: '300px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, rgba(29, 78, 216, 0.5) 25%, rgba(29, 78, 216, 0.3) 50%, rgba(29, 78, 216, 0.15) 75%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          transform: 'scale(1.0)',
        }}
      />

      {/* Outer Ring — Reduced Size */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-600 rounded-full pointer-events-none transition-all duration-150 mix-blend-difference ease-out z-50"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />

      {/* Inner Dot — Reduced Size */}
      <div
        className="fixed w-4 h-4 bg-blue-600 rounded-full pointer-events-none transition-all duration-150 mix-blend-difference ease-out z-50"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      />
    </>
  );
}
