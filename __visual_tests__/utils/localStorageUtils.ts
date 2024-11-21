import { Page } from '@playwright/test';

export const WIDGET_SESSION_PREFIX = '@sendbird/chat-ai-widget';
export const getKey = (appId: string, botId: string) => {
  return `${WIDGET_SESSION_PREFIX}/${appId}/${botId}`;
};

export type WidgetSessionCache = {
  userId: string;
  channelUrl: string;
};

export async function getWidgetSessionCache(
  page: Page,
  { appId, botId }: { appId: string; botId: string },
): Promise<WidgetSessionCache | null> {
  const value = await page.evaluate(
    ({ key }) => (localStorage.getItem(key)),
    { key: getKey(appId, botId) },
  );
  if (value) {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  } else {
    return null;
  }
}
