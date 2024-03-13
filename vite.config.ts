import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: ['TMDB', 'SA', 'IPIFY', 'IPLOCATION', 'API']
})
