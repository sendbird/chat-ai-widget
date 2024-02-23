import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import Avatar from '@sendbird/uikit-react/ui/Avatar';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { ReactionContainer } from './ReactionContainer';
import { useConstantState } from '../context/ConstantContext';
import botMessageImage from '../icons/bot-message-image.png';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
  flex-wrap: wrap;
  position: relative;
`;

const Sender = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.5);
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
  margin-right: 4px;
  margin-left: 8px;
`;

const SentTime = styled.div`
  width: fit-content;
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  line-height: 1;
  margin-bottom: 2px;
`;

type Props = {
  botUser: User;
  message: UserMessage;
  bodyComponent: ReactNode;
  chainTop: boolean;
  chainBottom: boolean;
  messageCount?: number;
  zIndex?: number;
  bodyStyle?: object;
  isBotWelcomeMessage?: boolean;
  isFormMessage?: boolean;
  newLineSentTime?: boolean;
};

const ImageContainer = styled.div``;

const EmptyImageContainer = styled.div`
  width: 28px;
`;

export default function BotMessageWithBodyInput(props: Props) {
  const { enableEmojiFeedback } = useConstantState();
  const {
    botUser,
    message,
    bodyComponent,
    messageCount,
    zIndex,
    bodyStyle,
    chainTop,
    chainBottom,
    isBotWelcomeMessage,
    isFormMessage = false,
    newLineSentTime = false,
  } = props;

  const nonChainedMessage = chainTop == null && chainBottom == null;
  const displayProfileImage = nonChainedMessage || chainBottom;
  const displaySender = nonChainedMessage || chainTop;

  return (
    <Root style={{ zIndex: messageCount === 1 && zIndex ? zIndex : 0 }}>
      {displayProfileImage ? (
        <ImageContainer>
          <Avatar
            src={botUser?.profileUrl || botMessageImage}
            alt="botProfileImage"
            height="28px"
            width="28px"
          />
        </ImageContainer>
      ) : (
        <EmptyImageContainer />
      )}
      <BodyContainer style={bodyStyle ?? {}}>
        {displaySender && (
          <Sender
            style={{
              textAlign: 'left',
            }}
          >
            {botUser.nickname}
          </Sender>
        )}
        {bodyComponent}
        {enableEmojiFeedback &&
          displayProfileImage &&
          !isBotWelcomeMessage &&
          !isFormMessage && <ReactionContainer message={message} />}
      </BodyContainer>
      {newLineSentTime ? (
        <div
          style={{
            paddingLeft: '40px',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '4px',
          }}
        >
          <SentTime>{formatCreatedAtToAMPM(message.createdAt)}</SentTime>
        </div>
      ) : (
        <SentTime>{formatCreatedAtToAMPM(message.createdAt)}</SentTime>
      )}
    </Root>
  );
}
