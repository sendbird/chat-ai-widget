/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom environment for browser-like testing
    include: ['src/**/*.test.ts'], // Specify the test files pattern
  },
});
