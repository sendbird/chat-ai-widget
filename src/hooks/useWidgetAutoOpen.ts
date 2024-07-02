import { useEffect, useRef } from 'react';

import { useConstantState } from '../context/ConstantContext';
import { useWidgetSetting } from '../context/WidgetSettingContext';
import { useWidgetState } from '../context/WidgetStateContext';

export function useWidgetAutoOpen() {
  const { isMobileView } = useConstantState();
  const { isOpen, setIsOpen } = useWidgetState();
  const { botStyle } = useWidgetSetting();

  const timer = useRef<ReturnType<typeof setTimeout>>();

  if (isOpen && timer.current) {
    clearTimeout(timer.current);
    timer.current = undefined;
  }

  useEffect(() => {
    if (botStyle.autoOpen) {
      timer.current = setTimeout(() => {
        if (!isMobileView) setIsOpen(true);
      }, 100);
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = undefined;
      }
    };
  }, [botStyle.autoOpen]);
}
