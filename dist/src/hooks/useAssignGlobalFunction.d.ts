declare global {
    interface Window {
        sbWidget: {
            open: () => void;
            close: () => void;
            clearCache: () => void;
        };
    }
}
/**
 * The useAssignGlobalFunction hook adds the sendbirdWidget object to the global window object.
 * The sendbirdWidget object contains open, close, and clearCache methods,
 * allowing control of the widget state and cache clearing from a non-React environment.
 */
export declare function useAssignGlobalFunction(): void;
