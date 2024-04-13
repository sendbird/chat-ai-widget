import { useState, useEffect } from 'react';

import { localStorageHelper } from '../utils';

export const CHAT_AI_WIDGET_LOCAL_STORAGE_KEY = '@sendbird/chat-ai-widget';

export function saveToLocalStorage(value: WidgetLocalStorageValue) {
  const stringifiedValue = JSON.stringify(value);
  localStorageHelper().setItem(
    CHAT_AI_WIDGET_LOCAL_STORAGE_KEY,
    stringifiedValue
  );
  window.dispatchEvent(
    new CustomEvent('localStorageChange', {
      detail: {
        key: CHAT_AI_WIDGET_LOCAL_STORAGE_KEY,
        value: stringifiedValue,
      },
    })
  );
}

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
  const key = CHAT_AI_WIDGET_LOCAL_STORAGE_KEY;
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
