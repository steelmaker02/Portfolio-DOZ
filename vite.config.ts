import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/Portfolio-DOZ/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      external: ['fsevents'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lottie-react')) {
              return 'lottie';
            }
            if (id.includes('framer-motion')) {
              return 'framer';
            }
            return 'vendor';
          }
        }
      }
    },
  },

  server: {
    port: 3000,
    open: true,
  }
});