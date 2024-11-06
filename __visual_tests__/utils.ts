import {expect, Page} from "@playwright/test";

import {WidgetComponentIds} from "./const";

export async function assertScreenshot(page: Page, screenshotName: string) {
  await expect(page.locator(WidgetComponentIds.WIDGET)).toHaveScreenshot(
    `${screenshotName}.png`,
    {
      omitBackground: false,
      // threshold: 0.1, // Keep this in case you need it. It is for letting tests with little difference in pixels to pass.
    });
}

export async function loadWidget(page: Page) {
  await page.click(WidgetComponentIds.WIDGET_BUTTON);
  await page.waitForTimeout(2500);
}

export async function sendTextMessage(page: Page, text: string, waitTime = 1000) {
  const input = page.locator(WidgetComponentIds.MESSAGE_INPUT);
  await input.fill(text);
  await input.press('Enter');
  await page.waitForTimeout(waitTime);
}

export async function clickNthChip(page: Page, nth: number) {
  const chipContainer = page.locator(WidgetComponentIds.CHIPS_CONTAINER);
  await chipContainer.locator(':scope > *').nth(nth).click();
}
