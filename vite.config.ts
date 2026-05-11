import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['bootstrap', 'react-bootstrap'],
          map: ['leaflet', 'react-leaflet'],
          motion: ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
