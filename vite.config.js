import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/Jason-Portfolio/',
  plugins: [tailwindcss(),react(),svgr()],

})
