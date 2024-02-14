/// <reference types="react" />
interface ContextProps {
    hashedKey: string | null;
}
type ProviderProps = React.PropsWithChildren<ContextProps>;
export declare const HashedKeyProvider: (props: ProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useHashedKey: () => ContextProps;
export default HashedKeyProvider;
