import { User } from '@sendbird/chat';
import type { GroupChannel } from '@sendbird/chat/groupChannel';
import { RefObject } from 'react';

import { useConstantState } from '../../context/ConstantContext';
import { parseTextMessage, Token } from '../../utils';
import BotMessageWithBodyInput from '../BotMessageWithBodyInput';
import ParsedBotMessageBody from '../ParsedBotMessageBody';
import SuggestedRepliesContainer from '../SuggestedRepliesContainer';

interface WelcomeMessagesProps {
  channel: GroupChannel;
  botUser: User;
  messageCount: number;
  lastMessageRef: RefObject<HTMLDivElement>;
  showSuggestedReplies: boolean;
  timestamp?: number;
}

export default function WelcomeMessages(props: WelcomeMessagesProps) {
  const { replacementTextList, botStudioEditProps } = useConstantState();
  const { welcomeMessages, suggestedRepliesDirection } = botStudioEditProps ?? {};

  const { botUser, messageCount, lastMessageRef, showSuggestedReplies } = props;

  const isWelcomeMessagesGiven = welcomeMessages && welcomeMessages.length > 0;
  if (!isWelcomeMessagesGiven) return <></>;

  return (
    <>
      {welcomeMessages.map((welcomeMsg, index) => {
        const lastWelcomeMessageIndex = welcomeMessages.length - 1;
        const suggestedReplies = welcomeMsg.suggestedReplies;
        if ('message' in welcomeMsg) {
          const text = welcomeMsg.message;
          const tokens: Token[] = parseTextMessage(text, replacementTextList);
          return (
            <div ref={lastMessageRef} key={index}>
              <BotMessageWithBodyInput
                chainTop={index === 0}
                chainBottom={index === lastWelcomeMessageIndex}
                messageCount={messageCount}
                botUser={botUser}
                bodyComponent={<ParsedBotMessageBody text={text} tokens={tokens} />}
              />
              {showSuggestedReplies && (
                <SuggestedRepliesContainer replies={suggestedReplies} type={suggestedRepliesDirection} />
              )}
            </div>
          );
        } else {
          // TODO: support file message in the future.
          return <></>;
        }
      })}
    </>
  );
}
