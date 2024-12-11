import { expect, Page } from '@playwright/test';

import { getWidgetSessionCache } from './localStorageUtils';
import { deleteChannel, deleteUser } from './requestUtils';
import { AppId, BotId, TestUrl, WidgetComponentIds } from '../const';

export async function assertScreenshot(page: Page, screenshotName: string, browserName: string) {
  const name = `${screenshotName}.${browserName}.${process.platform}.png`; // Include the browser and OS architecture info in the filename
  await expect(page.locator(WidgetComponentIds.WIDGET)).toHaveScreenshot(name, {
    omitBackground: false,
    maxDiffPixelRatio: 0.01, // Need this because Sendbird logo is slightly differently rendered in CI.
  });
}

export async function loadWidget(page: Page, testUrl = TestUrl) {
  await page.goto(testUrl);
  const widgetWindow = page.locator(WidgetComponentIds.WIDGET_BUTTON);
  await widgetWindow.waitFor({ state: 'visible' });

  await page.click(WidgetComponentIds.WIDGET_BUTTON);
  // NOTE: below fails sometimes in CI.
  const replies = page.locator(WidgetComponentIds.SUGGESTED_REPLIES_OPTIONS);
  await replies.waitFor({ state: 'visible' });
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

export async function deleteTestResources(page: Page) {
  if (AppId && BotId) {
    const cachedSession = await getWidgetSessionCache(page, {
      appId: AppId,
      botId: BotId,
    });
    if (cachedSession) {
      try {
        await deleteChannel(cachedSession.channelUrl);
        await deleteUser(cachedSession.userId);
      } catch (e) {
        console.error('## deleteTestResources failed: ', e);
      }
    }
  }
}
