import { useLayoutEffect } from 'react';

import { useConstantState } from '../context/ConstantContext';
import { useWidgetState } from '../context/WidgetStateContext';
import { clearWidgetSessionCache } from '../libs/storage/widgetSessionCache';

declare global {
  interface Window {
    sbWidget: {
      open: () => void;
      close: () => void;
      clearCache: () => void;
    };
  }
}

/**
 * The useAssignGlobalFunction hook adds the sendbirdWidget object to the global window object.
 * The sendbirdWidget object contains open, close, and clearCache methods,
 * allowing control of the widget state and cache clearing from a non-React environment.
 */
export function useAssignGlobalFunction() {
  const { applicationId: appId, botId } = useConstantState();
  const { setIsOpen } = useWidgetState();

  useLayoutEffect(() => {
    window.sbWidget = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      clearCache: () => clearWidgetSessionCache({ appId, botId }),
    };
  });
}
