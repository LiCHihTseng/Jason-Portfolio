import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/Jason-Portfolio/',
  plugins: [tailwindcss(),react(),svgr()],
  build: {
    // 把不常變動的第三方函式庫切成獨立 chunk,頁面 chunk 才不會每次都要重新解析
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          gsap: ['gsap', '@gsap/react'],
          motion: ['framer-motion'],
          lottie: ['lottie-react'],
        },
      },
    },
  },
})
