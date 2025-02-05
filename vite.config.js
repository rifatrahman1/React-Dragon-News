import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import daisyui from 'daisyui' // ✅ Proper import

export default defineConfig({
  plugins: [react(), tailwindcss(),  require('daisyui')], // ✅ Fix here
})