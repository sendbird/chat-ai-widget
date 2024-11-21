import { default as React } from 'react';

/**
 * Controls the open state of the widget.
 */
interface OpenState {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}
/**
 * Controls the visible state of the widget.
 */
interface VisibleState {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}
/**
 * Controls the expand state of the widget.
 */
interface ExpandState {
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
}
export declare const WidgetStateProvider: ({ children }: React.PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useWidgetState: () => OpenState & VisibleState & ExpandState;
export {};
