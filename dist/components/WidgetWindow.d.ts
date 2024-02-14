import { type Props as ChatWidgetProps } from './ChatAiWidget';
interface WidgetProps {
    isOpen: boolean;
}
declare const WidgetWindow: ({ isOpen, ...props }: WidgetProps & ChatWidgetProps) => import("react/jsx-runtime").JSX.Element;
export default WidgetWindow;
