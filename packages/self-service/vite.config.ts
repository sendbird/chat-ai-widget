import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

import { getWidgetVersion } from './scripts/getWidgetVersion';

const version = getWidgetVersion();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
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
});
