import { Page } from '@playwright/test';

export const WIDGET_SESSION_PREFIX = '@sendbird/chat-ai-widget';
export const getKey = (appId: string, botId: string) => {
  return `${WIDGET_SESSION_PREFIX}/${appId}/${botId}`;
};

export type WidgetSessionCache = {
  strategy: 'auto' | 'manual';
  userId: string;
  channelUrl: string;
  expireAt: number;
  sessionToken?: string;
};

export async function getWidgetSessionCache(
  page: Page,
  { appId, botId }: { appId: string; botId: string },
): Promise<WidgetSessionCache | null> {
  const value = await page.evaluate(
    ({ key }) => (localStorage.getItem(key)),
    { key: getKey(appId, botId) },
  );
  try {
    if (value) {
      // For cache of users before the update, there is no 'strategy'.
      // Therefore, 'auto' is set as the default value.
      return { strategy: 'auto', ...JSON.parse(value) };
    }
    return null;
  } catch {
    return null;
  }
}
