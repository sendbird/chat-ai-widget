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
  // https://github.com/rajinwonderland/react-code-blocks/issues/75
  // https://github.com/vitejs/vite/discussions/5912#discussioncomment-2908994
  // for code-blocks
  // optimizeDeps: {
  //   esbuildOptions: {
  //     define: {
  //       global: 'globalThis',
  //       // resolve nodejs global to browser globalThis(window)
  //     },
  //   },
  // },
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
        'react-code-blocks',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-code-blocks': 'ReactCodeBlocks',
        }
      }
    }
  },
})
