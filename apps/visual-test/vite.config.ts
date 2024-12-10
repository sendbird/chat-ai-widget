import path from 'path';

import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react', '@wyw-in-js/babel-preset'],
      },
    }) as PluginOption,
  ],
  resolve: {
    alias: {
      '@uikit/utils': path.resolve(__dirname, '../../packages/uikit/src/utils'),
      '@uikit/ui': path.resolve(__dirname, '../../packages/uikit/src/ui'),
      '@uikit/modules': path.resolve(__dirname, '../../packages/uikit/src/modules'),
    },
  },
  define: {
    'import.meta.env.MODE': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  server: {
    port: 5273,
  },
});
