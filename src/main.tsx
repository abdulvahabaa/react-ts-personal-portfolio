import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Apply initial theme before render to prevent flash
const savedTheme = localStorage.getItem('theme');
// Default to dark theme if no saved preference
const isDark = savedTheme ? savedTheme === 'dark' : true;

if (isDark) {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
