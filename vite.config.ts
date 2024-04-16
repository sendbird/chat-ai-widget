import { resolve } from 'node:path';
import * as path from 'node:path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';
import { terser } from 'rollup-plugin-terser';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: false,
    },
  },
  plugins: [
    react(),
    svgr(),
    dts(),
    visualizer({
      filename: './dist/report.html',
      open: true,
      brotliSize: true,
    }),
    pluginPurgeCss({
      variables: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@uikit',
        replacement: path.resolve(__dirname, 'packages/uikit/src'),
      },
    ],
  },
  // to point to correct path for gh-pages
  base: '/chat-ai-widget',
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'ChatAiWidget',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      plugins: [terser()],
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
