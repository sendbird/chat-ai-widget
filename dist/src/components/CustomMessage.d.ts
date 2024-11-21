import { BaseMessage } from '@sendbird/chat/message';

type Props = {
    message: BaseMessage;
    activeSpinnerId: number;
    chainTop?: boolean;
    chainBottom?: boolean;
};
export default function CustomMessage(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
