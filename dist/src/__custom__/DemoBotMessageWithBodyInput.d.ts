import { BaseMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';

type Props = {
    message: BaseMessage;
    createdAt?: number;
    messageData?: string;
    bodyComponent: ReactNode;
    chainTop?: boolean;
    chainBottom?: boolean;
    messageFeedback?: ReactNode;
    wideContainer?: boolean;
};
export default function DemoBotMessageWithBodyInput(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
