import { User } from '@sendbird/chat';
import React from 'react';
import { EveryMessage } from 'SendbirdUIKitGlobal';
type Props = {
    message: EveryMessage;
    activeSpinnerId: number;
    botUser: User;
    lastMessageRef: React.RefObject<HTMLDivElement>;
    chainTop?: boolean;
    chainBottom?: boolean;
    isBotWelcomeMessage: boolean;
};
export default function CustomMessage(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
