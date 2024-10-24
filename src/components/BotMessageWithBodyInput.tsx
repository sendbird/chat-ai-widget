import { ReactNode } from 'react';
import styled from 'styled-components';

import BotProfileImage from './BotProfileImage';
import { useChatContext } from './chat/context/ChatProvider';
import { DefaultSentTime, FullBodyContainer, WideSentTime } from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { Label } from '../foundation/components/Label';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';

const Root = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
  flex: 1;
  display: flex;
  align-items: end;
  gap: 4px;
`;

const EmptyImageContainer = styled.div`
  width: 28px;
`;

type Props = {
  createdAt?: number;
  messageData?: string;
  bodyComponent: ReactNode;
  chainTop?: boolean;
  chainBottom?: boolean;
  messageFeedback?: ReactNode;
  wideContainer?: boolean;
};

// TODO: When changing the layout, it should be modified to apply flexibly.
const HEIGHTS = {
  FEEDBACK: 40,
  TIMESTAMP: 18,
};

export default function BotMessageWithBodyInput(props: Props) {
  const { botUser } = useChatContext();
  const { botStudioEditProps, dateLocale } = useConstantState();

  const { createdAt, bodyComponent, chainTop, chainBottom, messageFeedback, wideContainer = false } = props;

  const profilePaddingBottom = (messageFeedback ? HEIGHTS.FEEDBACK : 0) + (wideContainer ? HEIGHTS.TIMESTAMP : 0);

  const nonChainedMessage = chainTop == null && chainBottom == null;
  const displaySender = nonChainedMessage || chainTop;
  const displayProfileImage = nonChainedMessage || chainBottom;
  const { nickname } = botStudioEditProps?.botInfo ?? {};
  const botNickname = nickname ?? botUser?.nickname;

  return (
    <Root>
      {displayProfileImage ? (
        <div style={{ paddingBottom: profilePaddingBottom }}>
          <BotProfileImage size={28} />
        </div>
      ) : (
        <EmptyImageContainer />
      )}
      <FullBodyContainer>
        {displaySender && (
          <Sender>
            <Label type={'caption2'} color={'onbackground2'}>
              {botNickname}
            </Label>
          </Sender>
        )}
        <Content>
          {bodyComponent}
          {!wideContainer && !!createdAt && (
            <DefaultSentTime>{formatCreatedAtToAMPM(createdAt, dateLocale)}</DefaultSentTime>
          )}
        </Content>
        {wideContainer && !!createdAt && <WideSentTime>{formatCreatedAtToAMPM(createdAt, dateLocale)}</WideSentTime>}
        {displayProfileImage && messageFeedback}
      </FullBodyContainer>
    </Root>
  );
}
