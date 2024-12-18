import path from 'node:path';

import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
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
  ],
  // to point to correct path for gh-pages
  base: '/chat-ai-widget',
  resolve: {
    alias: [
      {
        find: '@uikit',
        replacement: path.resolve(__dirname, 'packages/uikit/src'),
      },
    ],
  },
});
