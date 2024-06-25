import { useEffect, useRef } from 'react';

import { useWidgetSetting } from '../context/WidgetSettingContext';
import { useWidgetState } from '../context/WidgetStateContext';

export function useWidgetAutoOpen() {
  const { isOpen, setIsOpen } = useWidgetState();
  const { botStyle } = useWidgetSetting();

  const timer = useRef<ReturnType<typeof setTimeout>>();

  if (isOpen && timer.current) {
    clearTimeout(timer.current);
    timer.current = undefined;
  }

  useEffect(() => {
    if (botStyle.autoOpen) {
      timer.current = setTimeout(() => setIsOpen(true), 100);
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = undefined;
      }
    };
  }, [botStyle.autoOpen]);
}
