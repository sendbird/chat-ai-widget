import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';
type Props = {
    user: User;
    message: UserMessage;
    bodyComponent: ReactNode;
    chainTop: boolean;
    chainBottom: boolean;
    bodyStyle?: object;
    isBotWelcomeMessage?: boolean;
    isFormMessage?: boolean;
};
export default function UserMessageWithBodyInput(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
