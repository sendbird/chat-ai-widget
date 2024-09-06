import { SBUFoundationProps } from '../types';

function deundefined<T extends { [key: string]: any }>(object: T): T {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null) {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as T);
}

type Params = Pick<SBUFoundationProps, 'testId'>;
export function useLocalProps<T extends Params>(props: T) {
  const { testId } = props;
  return deundefined({ 'data-testid': testId });
  // return useMemo(() => deundefined({ 'data-testid': testId }), [testId]);
}
