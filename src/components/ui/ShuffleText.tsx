'use client';

import { useState, useEffect, useRef } from 'react';

interface ShuffleTextProps {
  text: string;
  isActive: boolean;
  speed?: number;
  className?: string;
}

/** Shuffle text effect - characters cycle through random letters then reveal */
export function ShuffleText({
  text,
  isActive,
  speed = 55,
  className = '',
}: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const hasAnimated = useRef(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    let frame = 0;
    const totalChars = text.replace(/\s/g, '').length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            const charIndex = text.slice(0, index).replace(/\s/g, '').length;
            const isShuffling =
              frame <= totalChars
                ? charIndex < frame + 1
                : charIndex >= frame - totalChars;
            return isShuffling
              ? chars[Math.floor(Math.random() * chars.length)]
              : text[index];
          })
          .join('')
      );
      frame += 1;
      if (frame > totalChars + totalChars + 5) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isActive, text, speed]);

  return <span className={className}>{!isActive ? text : displayText}</span>;
}
