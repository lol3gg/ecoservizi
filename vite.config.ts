import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages usa /ecoservizi/ — in dev resta /
  base: mode === 'production' ? '/ecoservizi/' : '/',
}))
