import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import { StartingPageAnimatorProps } from './CustomChannelComponent';
import supportChatMessageImage from '../icons/sendbird-support-chat.png';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.div<StartingPageAnimatorProps>`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
`;

const Sender = styled.div<StartingPageAnimatorProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: ${(props: StartingPageAnimatorProps) =>
    props.isStartingPage ? '#FFFFFF' : 'rgba(0, 0, 0, 0.5)'};
  transition: color 0.5s;
  transition-timing-function: ease;
  margin: 0 0 4px 12px;
`;

interface BodyContainerProps {
  maxWidth?: string;
}

const BodyContainer = styled.div<BodyContainerProps>`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.88);
  max-width: calc(100% - 96px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SentTime = styled.div`
  width: fit-content;
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  line-height: 1;
  margin-bottom: 6px;
`;

const BodyComponent = styled.div`
  background-color: rgb(238, 238, 238);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  padding: 8px 12px;
  gap: 12px;
  border-radius: 16px;
  white-space: pre-wrap;
`;

const TextComponent = styled.div`
  white-space: pre-line;
`;

type Props = {
  message: UserMessage;
  messageCount: number;
  zIndex?: number;
  bodyStyle?: object;
};

const ImageContainer = styled.div``;

export default function SupportChatMessageWithBodyInput(props: Props) {
  const { message, messageCount, zIndex } = props;

  return (
    <Root
      style={{ zIndex: messageCount === 1 && zIndex ? zIndex : 0 }}
      isStartingPage
    >
      <ImageContainer>
        <img
          src={supportChatMessageImage}
          alt="supportChatProfileImage"
          style={{
            height: '28px',
          }}
        />
      </ImageContainer>
      <BodyContainer>
        <Sender isStartingPage={messageCount === 1}>
          {message.sender.nickname}
        </Sender>
        <BodyComponent>
          <TextComponent>{message.message}</TextComponent>
        </BodyComponent>
      </BodyContainer>
      <SentTime>{formatCreatedAtToAMPM(message.createdAt)}</SentTime>
    </Root>
  );
}
