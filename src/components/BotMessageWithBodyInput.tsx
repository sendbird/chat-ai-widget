import { User } from '@sendbird/chat';
import { ReactNode } from 'react';
import styled from 'styled-components';

import Avatar from '@uikit/ui/Avatar';
import Label, { LabelColors, LabelTypography } from '@uikit/ui/Label';

import BotProfileImage from './BotProfileImage';
import {
  BodyContainer,
  DefaultSentTime,
  WideSentTime,
} from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 6px;
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
  gap: 4px;
`;

const EmptyImageContainer = styled.div`
  width: 28px;
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
  wideContainer?: boolean;
};

// TODO: When changing the layout, it should be modified to apply flexibly.
const HEIGHTS = {
  FEEDBACK: 40,
  TIMESTAMP: 18,
};

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
    wideContainer = false,
  } = props;

  const profilePaddingBottom =
    (messageFeedback ? HEIGHTS.FEEDBACK : 0) +
    (wideContainer ? HEIGHTS.TIMESTAMP : 0);

  const nonChainedMessage = chainTop == null && chainBottom == null;
  const displayProfileImage = nonChainedMessage || chainBottom;
  const displaySender = nonChainedMessage || chainTop;
  const { profileUrl, nickname } = botStudioEditProps?.botInfo ?? {};
  const botProfileUrl = profileUrl ?? botUser?.profileUrl;
  const botNickname = nickname ?? botUser?.nickname;

  return (
    <Root style={{ zIndex: messageCount === 1 && zIndex ? zIndex : 0 }}>
      {displayProfileImage ? (
        <div style={{ paddingBottom: profilePaddingBottom }}>
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
        </div>
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
          {!wideContainer && !!createdAt && (
            <DefaultSentTime>
              {formatCreatedAtToAMPM(createdAt)}
            </DefaultSentTime>
          )}
        </Content>
        {wideContainer && !!createdAt && (
          <WideSentTime>{formatCreatedAtToAMPM(createdAt)}</WideSentTime>
        )}
        {displayProfileImage && messageFeedback}
      </BodyContainer>
    </Root>
  );
}
