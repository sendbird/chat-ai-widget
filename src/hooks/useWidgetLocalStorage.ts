import { useState, useEffect } from 'react';

import { useConstantState } from '../context/ConstantContext';
import { localStorageHelper } from '../utils';

const CHAT_AI_WIDGET_LOCAL_STORAGE_KEY_PREFIX = '@sendbird/chat-ai-widget';
const getLocalStorageKey = (appId: string | null, botId: string | null) => {
  if (!appId || !botId) {
    throw new Error('appId and botId is required to save to storage');
  }
  return `${CHAT_AI_WIDGET_LOCAL_STORAGE_KEY_PREFIX}/${appId}/${botId}`;
};

/**
 * Call this function if the bot has been deleted.
 * Otherwise, users may join channels where the bot does not exist.
 * */
export function clearCache(params: { appId: string; botId: string }) {
  const localStorageKey = getLocalStorageKey(params.appId, params.botId);
  localStorageHelper().deleteItem(localStorageKey);
}

export function saveToLocalStorage(
  key: {
    appId: string;
    botId: string;
  },
  value: WidgetLocalStorageValue
) {
  const localStorageKey = getLocalStorageKey(key.appId, key.botId);
  const stringifiedValue = JSON.stringify(value);
  localStorageHelper().setItem(localStorageKey, stringifiedValue);
  window.dispatchEvent(
    new CustomEvent('localStorageChange', {
      detail: {
        key: localStorageKey,
        value: stringifiedValue,
      },
    })
  );
}

// FIXME: The userId is fragmented and managed in three different places.
//  Integration is needed in the future to manage all cases in one place.
//  - widget: ConstantContext, WidgetLocalStorage
//  - uikit: SendbirdStateContext
export type WidgetLocalStorageValue = {
  userId: string | null;
  channelUrl: string | null;
  expireAt: number;
  sessionToken?: string;
};

const DEFAULT_VALUE = {
  userId: null,
  channelUrl: null,
  expireAt: 0,
};

function parseValue(value: string | null) {
  return value != null && value !== '' ? JSON.parse(value) : null;
}

function useWidgetLocalStorage(): WidgetLocalStorageValue {
  const { applicationId: appId, botId } = useConstantState();
  const key = getLocalStorageKey(appId, botId);
  const [value, setValue] = useState(
    () => parseValue(localStorageHelper().getItem(key)) || DEFAULT_VALUE
  );

  useEffect(() => {
    const handleCustomStorageChange = (event: any) => {
      if (event.detail.key === key) {
        const storedValue = parseValue(event.detail.value);
        setValue(storedValue);
      }
    };

    // The 'localStorageChange' event is a CustomEvent,
    // distinct from the standard 'storage' event, which is only triggered by changes in other tabs.
    // This custom event allows us to detect localStorage changes within the same tab in real-time.
    window.addEventListener('localStorageChange', handleCustomStorageChange);

    return () => {
      window.removeEventListener(
        'localStorageChange',
        handleCustomStorageChange
      );
    };
  }, []);

  return value;
}

export default useWidgetLocalStorage;
