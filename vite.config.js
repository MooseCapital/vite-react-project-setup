import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [react(),splitVendorChunkPlugin()],
  base: "/"
})
