import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lottie')) return 'lottie';
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('react-github-calendar') || id.includes('react-activity-calendar'))
              return 'github-calendar';
            if (id.includes('react-icons') || id.includes('lucide-react')) return 'icons';
            if (id.includes('@vercel/analytics')) return 'analytics';
            if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
      onwarn(warning, warn) {
        if (warning.code === 'EVAL' && warning.id?.includes('lottie')) return;
        warn(warning);
      },
    },
  },
});
