import { SendableMessage } from '@sendbird/chat/lib/__definition';
import { Locale } from 'date-fns';

interface MyMessageStatusProps {
    message: SendableMessage;
    dateLocale: Locale;
}
export default function MyMessageStatus(props: MyMessageStatusProps): import("react/jsx-runtime").JSX.Element;
export {};
