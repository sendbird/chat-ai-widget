import {expect, Page} from "@playwright/test";

import {WidgetComponentIds} from "./const";

export async function assertScreenshot(page: Page, screenshotName: string, browserName: string) {
  const name = `${screenshotName}.${browserName}.${process.platform}.png`; // Include the browser and OS architecture info in the filename
  await expect(page.locator(WidgetComponentIds.WIDGET)).toHaveScreenshot(
    name,
    {
      omitBackground: false,
      maxDiffPixelRatio: 0.01, // Need this because Sendbird logo is slightly differently rendered in CI.
    }
  );
}

export async function loadWidget(page: Page) {
  await page.click(WidgetComponentIds.WIDGET_BUTTON);
  // NOTE: below fails sometimes in CI.
  // const widgetWindow = page.locator(WidgetComponentIds.MESSAGE_INPUT);
  // await widgetWindow.waitFor({ state: 'visible' });
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
