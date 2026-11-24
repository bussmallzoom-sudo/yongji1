import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Vite 與 Tailwind CSS v4 設定（支援透過 VITE_BASE 切換 GitHub Pages 子路徑）
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [vue(), tailwindcss()],
})
