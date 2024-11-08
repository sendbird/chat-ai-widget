import { type Props as ChatWidgetProps } from './ChatAiWidget';
declare const Chat: ({ apiHost, applicationId, botId, hashedKey, isOpen, ...constantProps }: ChatWidgetProps & {
    isOpen: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default Chat;
