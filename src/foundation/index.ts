import { css } from '@linaria/core';

export type SBUFoundationProps<T = NonNullable<unknown>> = T & {
  testId?: string;
};

function deundefined<T extends { [key: string]: any }>(object: T): T {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null) {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as T);
}

export function useLocalProps<T extends SBUFoundationProps>(props: T) {
  const { testId } = props;
  return deundefined({ 'data-testid': testId });
  // return useMemo(() => deundefined({ 'data-testid': testId }), [testId]);
}

export const sbcss = css;
