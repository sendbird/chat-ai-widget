import { SBUFoundationProps } from '../types';

type Params = Pick<SBUFoundationProps, 'testId'>;
export declare function useLocalProps<T extends Params>(props: T): {
    'data-testid': string | undefined;
};
export {};
