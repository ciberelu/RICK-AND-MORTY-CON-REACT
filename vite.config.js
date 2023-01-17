import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ciberelu.github.io/RICK-AND-MORTY-CON-REACT/",
  plugins: [react()],
})
