export interface WidgetButtonProps {
    isOpen: boolean;
    accentColor: string;
    imageUrl?: string;
    onClick?: () => void;
    className?: string;
    animated?: boolean;
}
export declare const WidgetButton: ({ isOpen, imageUrl, accentColor, onClick, className, animated, }: WidgetButtonProps) => import("react/jsx-runtime").JSX.Element;
