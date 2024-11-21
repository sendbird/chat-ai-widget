import { ReactNode } from 'react';

type Props = {
    createdAt?: number;
    messageData?: string;
    bodyComponent: ReactNode;
    chainTop?: boolean;
    chainBottom?: boolean;
    messageFeedback?: ReactNode;
    wideContainer?: boolean;
};
export default function BotMessageWithBodyInput(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
