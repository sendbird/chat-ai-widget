import { css, cx } from '@linaria/core';

import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { ChatMessageList } from './ChatMessageList';
import { useConstantState } from '../../../context/ConstantContext';
import { themedColors, themedColorVars } from '../../../foundation/colors/css';
import { PoweredByBanner } from '../../ui/PoweredByBanner';
import { useChatContext } from '../context/ChatProvider';

export const ChatUI = () => {
  // const { botInfo, welcomeMessages, suggestedRepliesDirection } = botStudioEditProps ?? {};

  const { channel } = useChatContext();
  const { botId, botStudioEditProps } = useConstantState();

  const { profileUrl, nickname } = botStudioEditProps?.botInfo ?? {};
  const botUser = channel?.members.find((member) => member.userId === botId);

  return (
    <div className={cx(container, themedColorVars)}>
      <ChatHeader
        profileUrl={profileUrl ?? botUser?.profileUrl}
        nickname={nickname ?? botUser?.nickname}
        channelName={channel?.name}
      />
      <ChatMessageList />
      <ChatInput />
      <PoweredByBanner />
    </div>
  );
};

const container = css`
  font-family: var(--sendbird-font-family-default);
  background-color: ${themedColors.bg1};
  display: flex;
  flex-direction: column;
  flex: 1;
`;
