import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark theme
    return true;
  });

  const updateTheme = useCallback((dark: boolean) => {
    // Simply add or remove the dark class
    document.documentElement.classList[dark ? 'add' : 'remove']('dark');
  }, []);

  useEffect(() => {
    // Apply theme immediately
    updateTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark, updateTheme]);

  return { isDark, setIsDark };
}
