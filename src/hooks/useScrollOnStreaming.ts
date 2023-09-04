import { useEffect } from 'react';

import { useThrottle } from '../hooks/useThrottle';

interface Params {
  isLastBotMessage: boolean;
  lastMessageRef: React.RefObject<HTMLDivElement>;
  bottomBuffer: number;
}
export function useScrollOnStreaming({
  isLastBotMessage,
  lastMessageRef,
  bottomBuffer,
}: Params) {
  const throttledScrollIntoView = useThrottle((element: HTMLDivElement) => {
    element.scrollIntoView({ block: 'end', behavior: 'smooth' });
    if (bottomBuffer > 0) {
      element.style.scrollMarginBottom = `${bottomBuffer}px`;
    }
  }, 0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach(() => {
        try {
          if (lastMessageRef?.current) {
            throttledScrollIntoView(lastMessageRef.current);
          }
        } catch (e) {
          console.error(e);
        }
      });
    });
    if (isLastBotMessage && lastMessageRef?.current) {
      const targetNode = lastMessageRef?.current;
      // create mutation observer
      observer.observe(targetNode);
    }
    return () => {
      observer.disconnect();
    };
  }, [isLastBotMessage, bottomBuffer]);
}
