import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "http://localhost:5050",
        changeOrigin: true,
        secure: false,
      },
      "/transfer": {
        target: "http://localhost:5050",
        changeOrigin: true,
        secure: false,
      },
      "/transaction": {
        target: "http://localhost:5050",
        changeOrigin: true,
        secure: false,
      },
      "/main": {
        target: "http://localhost:5050",
        changeOrigin: true,
        secure: false,
      }
    },
  },
})
