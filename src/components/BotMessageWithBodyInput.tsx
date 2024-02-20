import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import Avatar from '@sendbird/uikit-react/ui/Avatar';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { ReactNode } from 'react';
import styled from 'styled-components';

import BotProfileImage from './BotProfileImage';
import { ReactionContainer } from './ReactionContainer';
import { useConstantState } from '../context/ConstantContext';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
`;

const Sender = styled(Label)`
  margin: 0 0 4px 12px;
  text-align: left;
`;

interface BodyContainerProps {
  maxWidth?: string;
}

const BodyContainer = styled.div<BodyContainerProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.textColor.incomingMessage};
  max-width: calc(100% - 96px);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;

const SentTime = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.textColor.sentTime};
  font-size: 12px;
  line-height: 1;
  margin-bottom: 6px;
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
  } = props;

  const nonChainedMessage = chainTop == null && chainBottom == null;
  const displayProfileImage = nonChainedMessage || chainBottom;
  const displaySender = nonChainedMessage || chainTop;

  return (
    <Root style={{ zIndex: messageCount === 1 && zIndex ? zIndex : 0 }}>
      {displayProfileImage ? (
        <ImageContainer>
          {botUser?.profileUrl != null && botUser.profileUrl != '' ? (
            <Avatar
              src={botUser.profileUrl}
              alt="botProfileImage"
              height="28px"
              width="28px"
            />
          ) : (
            <BotProfileImage
              width={28}
              height={28}
              iconWidth={16}
              iconHeight={16}
            />
          )}
        </ImageContainer>
      ) : (
        <EmptyImageContainer />
      )}
      <BodyContainer style={bodyStyle ?? {}}>
        {displaySender && (
          <Sender
            type={LabelTypography.CAPTION_2}
            color={LabelColors.ONBACKGROUND_2}
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
      <SentTime>{formatCreatedAtToAMPM(message.createdAt)}</SentTime>
    </Root>
  );
}
