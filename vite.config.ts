import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'html'],
      // enabled: true,
    },
    // reporters: ['junit', 'json', 'html', 'verbose'],
    // outputFile: {
    //   junit: './test-report.xml',
    //   json: './test-report.json',
    // },
  },
})
