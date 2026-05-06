import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/My_Portfolio/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['react-icons'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons/fi'],
  },
});
