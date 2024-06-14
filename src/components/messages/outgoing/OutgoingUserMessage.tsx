import { UserMessage } from '@sendbird/chat/message';

import OutgoingContainer from './OutgoingContainer';

type Props = {
  message: UserMessage;
};
export const OutgoingUserMessage = ({ message }: Props) => {
  return (
    <OutgoingContainer message={message}>
      <div className="sendbird-word">{message.message}</div>
    </OutgoingContainer>
  );
};
