import { ReactNode } from 'react';

export type SBUFoundationProps<T = NonNullable<unknown>> = T & {
  className?: string;
  children?: ReactNode;
  testId?: string;
};
