import { PluginOption, defineConfig, splitVendorChunkPlugin  } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const plugins: PluginOption[] = [
  react(),
  tsconfigPaths(),
  splitVendorChunkPlugin()
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
