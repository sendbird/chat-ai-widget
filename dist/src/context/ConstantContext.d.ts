import { PropsWithChildren } from 'react';
import { StringSet } from '../../packages/uikit/src/ui/Label/stringSet';
import { Constant } from '../const';

interface ConstantContextProps extends Omit<Partial<Constant>, 'stringSet'> {
    applicationId: string;
    botId: string;
    stringSet?: Partial<StringSet>;
}
interface ConstantContextValue extends Constant {
    applicationId: string;
    botId: string;
    isMobileView: boolean;
}
export declare const ConstantStateProvider: (props: PropsWithChildren<ConstantContextProps>) => import("react/jsx-runtime").JSX.Element;
export declare const useConstantState: () => ConstantContextValue;
export {};
