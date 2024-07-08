import { useRef, useEffect } from 'react';

export function useThrottle<T extends (...args: any[]) => any>(func: T, delay: number): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const functionArgsRef = useRef<any[]>([]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (functionArgsRef.current.length > 0) {
        func(...functionArgsRef.current);
        functionArgsRef.current = [];
        timeoutRef.current = null;
      }
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [func, delay]);

  return ((...args: any[]) => {
    functionArgsRef.current = args;
  }) as T;
}
