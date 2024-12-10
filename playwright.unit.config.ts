import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './__visual_unit_tests__',
  fullyParallel: true,
  retries: 0,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ],
  reporter: [
    ['junit', { outputFile: 'results.xml' }],
    ['html']
  ],
  webServer: {
    command: 'yarn workspace @sendbird/visual-unit-test dev',
    url: 'http://localhost:5273/',
    reuseExistingServer: !process.env.CI,
  },
});

