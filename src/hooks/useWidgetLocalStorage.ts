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
  userId: string;
  channelUrl: string;
  expireAt: number;
  sessionToken?: string;
};

function parseValue(value: string | null) {
  return value != null && value !== '' ? JSON.parse(value) : null;
}

function useWidgetLocalStorage() {
  const key = CHAT_AI_WIDGET_LOCAL_STORAGE_KEY;
  const [value, setValue] = useState(() =>
    parseValue(localStorageHelper().getItem(key))
  );

  useEffect(() => {
    const handleCustomStorageChange = (event: any) => {
      if (event.detail.key === key) {
        const storedValue = parseValue(event.detail.value);
        setValue(storedValue);
      }
    };

    window.addEventListener('localStorageChange', handleCustomStorageChange);

    return () => {
      window.removeEventListener(
        'localStorageChange',
        handleCustomStorageChange
      );
    };
  }, []);

  return (value ?? {}) as WidgetLocalStorageValue;
}

export default useWidgetLocalStorage;
