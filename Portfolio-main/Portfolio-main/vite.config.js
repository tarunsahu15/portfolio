import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : "https://portfolio-fsro.vercel.app/Portfolio/",
  css:{
    modules:{
      localsConvention: "camelCase"
    }
  }
})
