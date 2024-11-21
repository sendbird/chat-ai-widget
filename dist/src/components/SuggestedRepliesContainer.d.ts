import { UserMessageCreateParams } from '@sendbird/chat/message';

interface Props {
    replies?: string[];
    type?: 'horizontal' | 'vertical';
    sendUserMessage?: (params: UserMessageCreateParams) => void;
}
declare const SuggestedRepliesContainer: ({ replies, type, sendUserMessage }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default SuggestedRepliesContainer;
