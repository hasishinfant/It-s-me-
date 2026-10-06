import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three') || id.includes('@react-three')) {
            return 'three-vendor';
          }
          if (id.includes('framer-motion') || id.includes('gsap') || id.includes('lenis')) {
            return 'animation-vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
