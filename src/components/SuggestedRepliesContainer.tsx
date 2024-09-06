import type { UserMessageCreateParams } from '@sendbird/chat/message';

import SuggestedReplies from '@uikit/modules/GroupChannel/components/SuggestedReplies';

interface Props {
  replies?: string[];
  type?: 'horizontal' | 'vertical';
  sendUserMessage?: (params: UserMessageCreateParams) => void;
}

const SuggestedRepliesContainer = ({ replies = [], type = 'vertical', sendUserMessage }: Props) => {
  if (replies.length <= 0) return null;
  return (
    <div style={{ marginTop: 8 }}>
      <SuggestedReplies
        replyOptions={replies}
        onSendMessage={({ message }) => sendUserMessage?.({ message })}
        type={type}
      />
    </div>
  );
};

export default SuggestedRepliesContainer;
