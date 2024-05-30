import { useEffect, useRef } from 'react';

import { useConstantState } from '../context/ConstantContext';
import { useWidgetState } from '../context/WidgetStateContext';

export function useWidgetAutoOpen() {
  const { isOpen, setIsOpen } = useWidgetState();
  const { autoOpen } = useConstantState();

  const timer = useRef<ReturnType<typeof setTimeout>>();

  if (isOpen && timer.current) {
    clearTimeout(timer.current);
    timer.current = undefined;
  }

  useEffect(() => {
    if (autoOpen) timer.current = setTimeout(() => setIsOpen(true), 100);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = undefined;
      }
    };
  }, [autoOpen]);
}
