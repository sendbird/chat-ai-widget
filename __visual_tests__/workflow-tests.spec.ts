import { test } from '@playwright/test';

import { TestUrl, WidgetComponentIds } from './const';
import { assertScreenshot, clickNthChip, deleteTestResources, loadWidget, sendTextMessage } from './utils/testUtils';

test.beforeEach(async ({ page }) => {
  await page.goto(TestUrl);

  const widgetWindow = page.locator(WidgetComponentIds.WIDGET_BUTTON);
  await widgetWindow.waitFor({ state: 'visible' });
});

test.afterEach(async ({ page }) => {
  await deleteTestResources(page);
  /**
   * Optional: Playwright automatically handles page closure at the end of a test,
   * but explicitly closing it ensures no lingering resources remain.
   */
  await page.close();
});

/**
 * 100
 * Workflow - Form message
 * Steps:
 * 1. Send the trigger message: "Give me a food order form"
 * 2. Submit form without filling the required fields.
 * 3. Submit form with at least one invalid value.
 * 4. Submit form with valid values.
 */
test('100', async ({ page, browserName }) => {
  await loadWidget(page);

  // 1
  await sendTextMessage(page, 'Give me a food order form', 0);
  const widgetWindow = page.locator(WidgetComponentIds.FORM);
  await widgetWindow.waitFor({ state: 'visible' });
  await assertScreenshot(page, '100-1', browserName);

  // 2
  let submitButton = page.locator(WidgetComponentIds.BUTTON);
  await submitButton.click();
  await assertScreenshot(page, '100-2', browserName);

  // 3
  const inputs = page.locator(WidgetComponentIds.INPUT);
  await inputs.nth(0).fill('guy ordering food');
  await inputs.nth(2).fill('not a number');
  await inputs.nth(3).fill('not.a.valid.email.com');
  await inputs.nth(4).fill('123_456_7890');
  await clickNthChip(page, 4);
  submitButton = page.locator(WidgetComponentIds.BUTTON);
  await page.waitForTimeout(1000);
  await assertScreenshot(page, '100-3', browserName);

  // 4
  await inputs.nth(2).fill('2');
  await inputs.nth(3).fill('guy.ordering.food@food.com');
  await inputs.nth(4).fill('123-456-7890');
  await submitButton.click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, '100-4', browserName);
});

/**
 * 101
 * Workflow - Function calls: user message
 * Steps:
 * 1. Send the trigger message: "Tell me about one cat breed"
 */
test('101', async ({ page, browserName }) => {
  await loadWidget(page);
  // 1
  await sendTextMessage(page, 'Tell me about one cat breed', 2000);
  await assertScreenshot(page, '101-1', browserName);
});

/**
 * 102
 * Workflow - File message
 * Steps:
 * 1. Send the trigger message: "Give me a travel agency poster"
 */
test('102', async ({ page, browserName }) => {
  await loadWidget(page);
  // 1
  await sendTextMessage(page, 'Give me a travel agency poster', 5000);
  await assertScreenshot(page, '102-1', browserName);
});

/**
 * 103
 * Workflow - Suggested replies with 'Back' enabled
 * Steps:
 * 1. Send the trigger message: "Suggested replies"
 * 2. Click "Text"
 * 3. Click "Back"
 * 4. Click "File"
 * 5. Click "Back"
 * 6. Click "Link to workflow: form message"
 */
test('103', async ({ page, browserName }) => {
  await loadWidget(page);
  // 1
  await sendTextMessage(page, 'Suggested replies', 2000);
  await assertScreenshot(page, '103-1', browserName);

  // 2
  let options = page.locator(WidgetComponentIds.SUGGESTED_REPLIES_OPTIONS);
  await options.nth(0).click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, '103-2', browserName);

  // 3
  options = page.locator(WidgetComponentIds.SUGGESTED_REPLIES_OPTIONS);
  await options.nth(0).click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, '103-3', browserName);

  // 4
  options = page.locator(WidgetComponentIds.SUGGESTED_REPLIES_OPTIONS);
  await options.nth(1).click();
  await page.waitForTimeout(4000); // Time takes long for file message to be rendered and then scrolled to bottom in CI browsers.
  await assertScreenshot(page, '103-4', browserName);

  // 5
  options = page.locator(WidgetComponentIds.SUGGESTED_REPLIES_OPTIONS);
  await options.nth(0).click();
  options = page.locator(WidgetComponentIds.SUGGESTED_REPLIES_OPTIONS);
  // Expecting three options.
  await options.nth(2).waitFor({ state: 'visible' });
  await assertScreenshot(page, '103-5', browserName);

  // 6
  options = page.locator(WidgetComponentIds.SUGGESTED_REPLIES_OPTIONS);
  await options.nth(2).click();
  await page.waitForTimeout(1000);
  await assertScreenshot(page, '103-6', browserName);
});
