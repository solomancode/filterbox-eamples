import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

console.log(process.cwd())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "src/**.css"
  ],
  build: {
    outDir: "../docs/"
  }
})
