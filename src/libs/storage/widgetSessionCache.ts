import { localStorageHelper } from '../../utils';

const WIDGET_SESSION_PREFIX = '@sendbird/chat-ai-widget';
const getKey = (appId: string, botId: string) => {
  return `${WIDGET_SESSION_PREFIX}/${appId}/${botId}`;
};

export type WidgetSessionCache = {
  strategy: 'auto' | 'manual';
  userId: string;
  channelUrl: string;
  expireAt: number;
  sessionToken?: string;
};

export function getWidgetSessionCache(params: { appId: string; botId: string }): WidgetSessionCache | null {
  const key = getKey(params.appId, params.botId);
  const value = localStorageHelper().getItem(key);
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

export function saveWidgetSessionCache(params: { appId: string; botId: string; data: WidgetSessionCache }) {
  const key = getKey(params.appId, params.botId);
  const value = JSON.stringify(params.data);
  localStorageHelper().setItem(key, value);
}

/**
 * Call this function if the bot has been deleted.
 * Otherwise, users may join channels where the bot does not exist.
 * */
export function clearWidgetSessionCache(params: { appId: string; botId: string }) {
  const localStorageKey = getKey(params.appId, params.botId);
  localStorageHelper().deleteItem(localStorageKey);
}

/**
 * @deprecated Use `clearWidgetSessionCache` instead.
 * */
export const clearCache = clearWidgetSessionCache;
