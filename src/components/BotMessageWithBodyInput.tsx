import { User } from '@sendbird/chat';
import { ReactNode } from 'react';
import styled from 'styled-components';

import Avatar from '@uikit/ui/Avatar';
import Label, { LabelColors, LabelTypography } from '@uikit/ui/Label';

import BotProfileImage from './BotProfileImage';
import { SentTime, BodyContainer } from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.span`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
`;

const Sender = styled.div`
  padding: 0 0 4px 12px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 246px;
`;

const Content = styled.div`
  display: flex;
  align-items: end;
`;

type Props = {
  botUser?: User;
  createdAt?: number;
  messageData?: string;
  bodyComponent: ReactNode;
  chainTop?: boolean;
  chainBottom?: boolean;
  messageCount?: number;
  zIndex?: number;
  messageFeedback?: ReactNode;
};

const ImageContainer = styled.div``;

const EmptyImageContainer = styled.div`
  width: 28px;
`;

export default function BotMessageWithBodyInput(props: Props) {
  const { botStudioEditProps } = useConstantState();

  const {
    botUser,
    createdAt,
    bodyComponent,
    messageCount,
    zIndex,
    chainTop,
    chainBottom,
    messageFeedback,
  } = props;

  const nonChainedMessage = chainTop == null && chainBottom == null;
  const displayProfileImage = nonChainedMessage || chainBottom;
  const displaySender = nonChainedMessage || chainTop;
  const { profileUrl, nickname } = botStudioEditProps?.botInfo ?? {};
  const botProfileUrl = profileUrl ?? botUser?.profileUrl;
  const botNickname = nickname ?? botUser?.nickname;

  return (
    <Root style={{ zIndex: messageCount === 1 && zIndex ? zIndex : 0 }}>
      {displayProfileImage ? (
        <ImageContainer>
          {botProfileUrl != null && botProfileUrl != '' ? (
            <Avatar
              src={botProfileUrl}
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
      <BodyContainer>
        {displaySender && (
          <Sender>
            <Label
              type={LabelTypography.CAPTION_2}
              color={LabelColors.ONBACKGROUND_2}
            >
              {botNickname}
            </Label>
          </Sender>
        )}
        <Content>
          {bodyComponent}
          {!!createdAt && (
            <SentTime>{formatCreatedAtToAMPM(createdAt)}</SentTime>
          )}
        </Content>
        {displayProfileImage && messageFeedback}
      </BodyContainer>
    </Root>
  );
}
