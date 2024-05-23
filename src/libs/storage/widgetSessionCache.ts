import { localStorageHelper } from '../../utils';

// const DEFAULT_VALUE = { userId: null, channelUrl: null, expireAt: 0 };
const WIDGET_SESSION_PREFIX = '@sendbird/chat-ai-widget';
const getKey = (appId: string, botId: string) => {
  return `${WIDGET_SESSION_PREFIX}/${appId}/${botId}`;
};

export type WidgetSessionCache = {
  userId: string;
  channelUrl: string;
  expireAt: number;
  sessionToken?: string;
  strategy?: 'auto' | 'manual'; // default: auto
};

export function getWidgetSessionCache(params: {
  appId: string;
  botId: string;
}): WidgetSessionCache | null {
  const key = getKey(params.appId, params.botId);
  const value = localStorageHelper().getItem(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export function saveWidgetSessionCache(params: {
  appId: string;
  botId: string;
  data: WidgetSessionCache;
}) {
  const key = getKey(params.appId, params.botId);
  const value = JSON.stringify(params.data);
  localStorageHelper().setItem(key, value);
}

/**
 * Call this function if the bot has been deleted.
 * Otherwise, users may join channels where the bot does not exist.
 * */
export function clearWidgetSessionCache(params: {
  appId: string;
  botId: string;
}) {
  const localStorageKey = getKey(params.appId, params.botId);
  localStorageHelper().deleteItem(localStorageKey);
}

/**
 * @deprecated Use `clearWidgetSessionCache` instead.
 * */
export const clearCache = clearWidgetSessionCache;
