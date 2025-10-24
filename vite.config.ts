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
    projects: [
      {
        extends: true,
        test: {
          include: ['test/**/*.{test,spec}.{ts,tsx,js,jsx}'],
          exclude: ['test/components/**/*.{test,spec}.{ts,tsx,js,jsx}'],
          environment: 'node',
        },
      },
      {
        extends: true,
        test: {
          include: ['test/components/**/*.{test,spec}.{ts,tsx,js,jsx}'],
          environment: 'happy-dom',
        },
      },
    ],
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
