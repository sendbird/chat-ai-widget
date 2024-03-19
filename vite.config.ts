import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import dts from 'vite-plugin-dts'

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
  ],
  // to point to correct path for gh-pages
  base: '/chat-ai-widget',
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'ChatAiWidget',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  },
})
