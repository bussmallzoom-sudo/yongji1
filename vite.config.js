import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Vite 與 Tailwind CSS v4 設定
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
