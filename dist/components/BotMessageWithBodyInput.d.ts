import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';
type Props = {
    botUser: User;
    message: UserMessage;
    bodyComponent: ReactNode;
    chainTop: boolean;
    chainBottom: boolean;
    messageCount?: number;
    zIndex?: number;
    bodyStyle?: object;
    isBotWelcomeMessage?: boolean;
    isFormMessage?: boolean;
    newLineSentTime?: boolean;
    marginBottom?: string;
};
export default function BotMessageWithBodyInput(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
