import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increased duration to allow for the full animation sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 2s for animation + 1.5s for viewing the completed animation

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}