import { resolve } from 'node:path';
import * as path from 'node:path';

import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: false,
    },
  },
  plugins: [
    react(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react', '@wyw-in-js/babel-preset'],
      },
    }),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    }),
    dts(),
    visualizer({
      filename: './dist/report.html',
      brotliSize: true,
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
