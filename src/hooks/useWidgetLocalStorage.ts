import { useState, useEffect } from 'react';

import { localStorageHelper } from '../utils';

export const CHAT_AI_WIDGET_LOCAL_STORAGE_KEY = '@sendbird/chat-ai-widget';

function parseValue(value: string | null) {
  return value != null && value !== '' ? JSON.parse(value) : null;
}
function useWidgetLocalStorage() {
  const key = CHAT_AI_WIDGET_LOCAL_STORAGE_KEY;
  const [value, setValue] = useState(() =>
    parseValue(localStorageHelper().getItem(key))
  );
  useEffect(() => {
    const handleStorageChange = () => {
      const storedValue = parseValue(localStorageHelper().getItem(key));
      setValue(storedValue);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return value;
}

export default useWidgetLocalStorage;
