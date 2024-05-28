/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom environment for browser-like testing
    include: ['test/**/*.test.ts'], // Specify the test files pattern
  },
});
