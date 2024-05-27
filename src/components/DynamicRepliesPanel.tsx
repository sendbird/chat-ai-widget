import SuggestedReplies from '@uikit/modules/GroupChannel/components/SuggestedReplies';

import { useSendMessage } from '../hooks/useSendMessage';

interface Props {
  replyOptions: string[];
  type?: 'horizontal' | 'vertical';
}

const DynamicRepliesPanel = (props: Props) => {
  const { replyOptions, type = 'vertical' } = props;
  const hasQuickReplies = replyOptions && replyOptions.length > 0;
  const sendMessage = useSendMessage();

  const onSendMessage = ({ message }: { message: string }) => {
    sendMessage(message);
  };

  if (!hasQuickReplies) {
    return <></>;
  }

  return (
    <SuggestedReplies
      replyOptions={replyOptions}
      onSendMessage={onSendMessage}
      type={type}
    />
  );
};

export default DynamicRepliesPanel;
