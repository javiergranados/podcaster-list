/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.(ts|tsx)'],
    setupFiles: './tests/setup.ts',
  },
  resolve: {
    alias: {
      '@/': new URL('./app/', import.meta.url).pathname,
      '@ui': new URL('./components/', import.meta.url).pathname,
      '@skeletons': new URL('./skeletons/', import.meta.url).pathname,
      '@lib': new URL('./lib/', import.meta.url).pathname,
      '@hooks': new URL('./hooks/', import.meta.url).pathname,
    },
  },
})
