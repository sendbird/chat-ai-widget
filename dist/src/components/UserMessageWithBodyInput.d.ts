import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { Locale } from 'date-fns';
import { ReactNode } from 'react';

type Props = {
    user: User;
    message: UserMessage;
    bodyComponent: ReactNode;
    chainTop?: boolean;
    chainBottom?: boolean;
    isFormMessage?: boolean;
    locale?: Locale;
};
export default function UserMessageWithBodyInput(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
