import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { getWidgetVersion } from './scripts/widget-version.js';

const version = getWidgetVersion();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), cssInjectedByJsPlugin()],
  build: {
    outDir: `./dist/${version}`,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `output.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
})
