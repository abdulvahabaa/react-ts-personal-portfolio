import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Check for touch devices only once
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setShowCursor(false);
      return;
    }

    setShowCursor(true); // Desktop: show cursor
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!showCursor) return null;

  return (
    <>
      {/* Blob Effect */}
      <div
        className="fixed pointer-events-none opacity-30 dark:opacity-30 transition-all duration-300 ease-out z-10"
        style={{
          left: position.x - 300,
          top: position.y - 300,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, rgba(29, 78, 216, 0.5) 25%, rgba(29, 78, 216, 0.3) 50%, rgba(29, 78, 216, 0.15) 75%, transparent 100%)",
          borderRadius: "50% 40% 60% 30%",
          filter: "blur(60px)",
          transform: "scale(1.2)",
        }}
      />

      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 w-16 h-16 border-2 border-blue-600 rounded-full pointer-events-none transition-all duration-150 mix-blend-difference ease-out z-50"
        style={{
          transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed w-8 h-8 bg-blue-600 rounded-full pointer-events-none transition-all duration-150 mix-blend-difference ease-out z-50"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
    </>
  );
}
