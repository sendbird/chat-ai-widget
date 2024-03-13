import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    cssInjectedByJsPlugin(),
    VitePWA({
      injectRegister: 'auto'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        globals: {
          'react-code-blocks': 'ReactCodeBlocks',
        }
      },
      external: [
        'react-code-blocks',
      ],
    },
  },
})
