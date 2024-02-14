/// <reference types="react" />
import { type Constant } from '../const';
interface ConstantContextProps extends Constant {
    applicationId: string | null;
    botId: string | null;
}
type ProviderProps = React.PropsWithChildren<ConstantContextProps>;
export declare const ConstantStateProvider: (props: ProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useConstantState: () => ConstantContextProps;
export {};
