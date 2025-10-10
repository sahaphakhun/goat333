import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    allowedHosts: [
      'goat111-production.up.railway.app',
      'goat111-staging.up.railway.app',
      'goat333-production.up.railway.app',
      'www.kaodee39.site',
      'localhost',
      '127.0.0.1'
    ]
  }
})
