import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
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
