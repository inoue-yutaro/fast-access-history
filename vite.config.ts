import { defineConfig, resolveConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        contents: resolve(__dirname, 'src/contents/index.tsx'),
        background: resolve(__dirname, 'src/background/index.ts'),
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    react(),
    copy({
      verbose: true,
      hook: 'writeBundle',
      targets: [
        {
          src: 'public/manifest.json',
          dest: 'dist'
        },
        {
          src: 'src/contents/contents.css',
          dest: 'dist'
        }
      ]
    })
  ],
})
