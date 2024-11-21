import { BaseMessage } from '@sendbird/chat/message';

declare function BotMessageFeedback({ message }: {
    message: BaseMessage;
}): import("react/jsx-runtime").JSX.Element;
export default BotMessageFeedback;
