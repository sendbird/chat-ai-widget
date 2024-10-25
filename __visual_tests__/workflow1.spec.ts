import {test, expect, Page} from '@playwright/test';

const TEST_URL = 'http://localhost:5173/chat-ai-widget/?app_id=833E2DC4-DFA2-4508-A283-6E5C7BFCF18A&bot_id=onboarding_bot&disable_timestamps=true';

export async function assertScreenshot(page: Page, screenshotName: string) {
  await expect(page.locator('#aichatbot-widget-window')).toHaveScreenshot(
    `${screenshotName}.png`,
    {
      omitBackground: false,
      // threshold: 0.1, // Keep this in case you need it. It is for letting tests with little difference in pixels to pass.
    });
}

test.beforeEach(async ({ page }) => {
  await page.goto(TEST_URL);
});

/**
 * 100
 * Test workflow1
 * Scenario:
 * 1. Trigger workflow1
 * 2. Get form message response
 * 3. Submit without filling the form
 * 4. Fill form message and then submit
 * 5. Go back
 * 6. Get text message response
 * Verify after each step
 */
test('100', async ({ page, browserName }) => {
  await page.click('#aichatbot-widget-button');
  await page.waitForTimeout(2500);
  const input = page.locator('#sendbird-message-input-text-field');

  // 1
  await input.fill('trigger workflow1');
  await assertScreenshot(page, `100-1.${browserName}`);
  await input.press('Enter');
  await page.waitForTimeout(1000);
  await assertScreenshot(page, `100-2.${browserName}`);

  // 2
  let options = page.locator('.sendbird-suggested-replies__option');
  await options.first().click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, `100-3.${browserName}`);

  // 3
  let submitButton = page.locator('button.sendbird-button--primary');
  await submitButton.click();
  await assertScreenshot(page, `100-4.${browserName}`);

  // 4
  const inputs = page.locator('.sendbird-input__input');
  await inputs.nth(0).fill('guy ordering food');
  await inputs.nth(2).fill('2');
  await inputs.nth(3).fill('guy.ordering.food@food.com');
  await inputs.nth(4).fill('123-456-7890');
  const chipContainer = page.locator('.sendbird-form-chip__container');
  await chipContainer.locator(':scope > *').nth(5).click();
  submitButton = page.locator('button.sendbird-button--primary');
  await submitButton.click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, `100-5.${browserName}`);

  // 5
  options = page.locator('.sendbird-suggested-replies__option');
  await options.first().click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, `100-6.${browserName}`);

  // 6
  options = page.locator('.sendbird-suggested-replies__option');
  await options.nth(1).click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, `100-7.${browserName}`);
});
