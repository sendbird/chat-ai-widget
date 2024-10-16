import { styled } from '@linaria/react';
import { UserMessage } from '@sendbird/chat/message';

import { BodyContainer, BodyComponent } from './MessageComponent';
import MyMessageStatus from './MyMessageStatus';
import { useConstantState } from '../context/ConstantContext';

const Root = styled.div<{ enableEmojiFeedback: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  gap: 4px;
`;

type Props = {
  message: UserMessage;
};

export default function CurrentUserMessage(props: Props) {
  const { enableEmojiFeedback, dateLocale } = useConstantState();
  const { message } = props;

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
      <MyMessageStatus message={message} dateLocale={dateLocale} />
      <BodyContainer>
        <BodyComponent>
          <div className="sendbird-word">{message.message}</div>
        </BodyComponent>
      </BodyContainer>
    </Root>
  );
}
