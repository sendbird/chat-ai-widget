import { Member } from '@sendbird/chat/groupChannel';
import { RefObject } from 'react';

import Message from '@uikit/modules/GroupChannel/components/Message';
import { EveryMessage } from '@uikit/types';

import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import { WelcomeUserMessage } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { parseTextMessage, Token } from '../utils';

type Props = {
  lastMessageRef: RefObject<HTMLDivElement>;
  messageToReplace: EveryMessage;
  welcomeMessages: WelcomeUserMessage[];
  botUser: Member | undefined;
  messageCount: number | undefined;
  isLastMessage: boolean;
};

export default function InjectedWelcomeMessage(props: Props) {
  const {
    lastMessageRef,
    messageToReplace: message,
    welcomeMessages,
    botUser,
    messageCount,
    isLastMessage,
  } = props;
  const lastWelcomeMessageIndex = welcomeMessages.length - 1;
  const { replacementTextList } = useConstantState();
  return (
    <Message {...props} message={message}>
      {welcomeMessages.map((welcomeMsg, index) => {
        const text = welcomeMsg.message;
        const tokens: Token[] = parseTextMessage(text, replacementTextList);
        const suggestedReplies = welcomeMsg.suggestedReplies;
        // TODO: support file message in the future.
        if ('message' in welcomeMsg) {
          const text = welcomeMsg.message;
          return (
            <div ref={lastMessageRef} key={index}>
              <BotMessageWithBodyInput
                chainTop={index === 0}
                chainBottom={index === lastWelcomeMessageIndex}
                botUser={botUser}
                bodyComponent={
                  <ParsedBotMessageBody text={text} tokens={tokens} />
                }
                createdAt={message.createdAt}
                messageCount={messageCount}
              />
              {isLastMessage && suggestedReplies && suggestedReplies.length && (
                <DynamicRepliesPanel replyOptions={suggestedReplies} />
              )}
            </div>
          );
        }
      })}
    </Message>
  );
}
