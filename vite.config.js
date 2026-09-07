import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Permite que el harness asigne un puerto libre vía la env var PORT
    // cuando 5173 esté ocupado; si no está seteada, usa el default de Vite.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    strictPort: false,
  },
})
