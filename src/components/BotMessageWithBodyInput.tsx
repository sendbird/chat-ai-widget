import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { StartingPageAnimatorProps } from './CustomChannelComponent';
import botMessageImage from '../icons/bot-message-image.png';
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
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;

const SentTime = styled.div`
  width: fit-content;
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  line-height: 1;
  margin-bottom: 6px;
`;

type Props = {
  botUser: User;
  message: UserMessage;
  bodyComponent: ReactNode;
  messageCount: number;
  zIndex?: number;
  bodyStyle?: object;
};

const ImageContainer = styled.div``;

export default function BotMessageWithBodyInput(props: Props) {
  const { botUser, message, bodyComponent, messageCount, zIndex, bodyStyle } =
    props;

  return (
    <Root
      style={{ zIndex: messageCount === 1 && zIndex ? zIndex : 0 }}
      isStartingPage
    >
      <ImageContainer>
        <img
          src={botMessageImage}
          alt="botProfileImage"
          style={{
            height: '28px',
          }}
        />
      </ImageContainer>
      <BodyContainer style={bodyStyle ?? {}}>
        <Sender isStartingPage={messageCount === 1}>{botUser.nickname}</Sender>
        {bodyComponent}
      </BodyContainer>
      <SentTime>{formatCreatedAtToAMPM(message.createdAt)}</SentTime>
    </Root>
  );
}
