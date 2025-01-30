import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return {
    server: {
      port: process.env.VITE_PORT,
      watch: {
        usePolling: true,
      }
    },
    plugins: [react({
     include: "**/*.jsx",
    })],
  }
})