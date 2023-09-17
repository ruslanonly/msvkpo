import { PluginOption, defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const plugins: PluginOption[] = [
  react(),
  tsconfigPaths()
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  css: {
    preprocessorOptions: {
      math: 'parens-division',
    }
  }
})
