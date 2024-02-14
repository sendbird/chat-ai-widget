/// <reference types="react" />
type ConnectionStatus = 'INIT' | 'CONNECTING' | 'CONNECTED';
interface ConstantContextProps {
    sbConnectionStatus: ConnectionStatus;
    setSbConnectionStatus: (status: ConnectionStatus) => void;
    firstMessage: string | null;
    setFirstMessage: (message: string | null) => void;
}
export declare const SBConnectionStateContext: import("react").Context<ConstantContextProps>;
type ProviderProps = React.PropsWithChildren<ConstantContextProps>;
declare const SBConnectionStateProvider: (props: ProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useSbConnectionState: () => ConstantContextProps;
export default SBConnectionStateProvider;
