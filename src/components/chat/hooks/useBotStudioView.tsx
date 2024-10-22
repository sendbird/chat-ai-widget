import { css } from '@linaria/core';
import { isSameDay } from 'date-fns';

import { useConstantState } from '../../../context/ConstantContext';
import { DateSeparator } from '../../../foundation/components/DateSeparator';
import { parseTextMessage, Token } from '../../../utils';
import { messageExtension } from '../../../utils/messageExtension';
import { getBotWelcomeMessages, shouldFilterOutMessage } from '../../../utils/messages';
import BotMessageWithBodyInput from '../../BotMessageWithBodyInput';
import ParsedBotMessageBody from '../../ParsedBotMessageBody';
import SuggestedRepliesContainer from '../../SuggestedRepliesContainer';
import { useChatContext } from '../context/ChatProvider';

export const useBotStudioView = () => {
  const { botStudioEditProps = {}, botId, replacementTextList, stringSet, dateLocale } = useConstantState();
  const { dataSource, handlers } = useChatContext();
  const { suggestedRepliesDirection, welcomeMessages = [] } = botStudioEditProps;
  const { messages } = dataSource;

  const originalWMs = getBotWelcomeMessages(messages, botId);

  const firstUserMsg = messages[originalWMs.length + 1];
  const firstOriginalWM = originalWMs[0] ?? firstUserMsg;

  return {
    /**
     * Returns a list of messages filtered according to business requirements.
     */
    filteredMessages: messages.filter((it) => {
      // Removes messages based on hardcoded rules.
      if (shouldFilterOutMessage(it)) return false;
      // If live edit is required, removes welcome messages.
      if (welcomeMessages.length > 0) return !messageExtension.isBotWelcomeMsg(it, botId);
      return true;
    }),
    /**
     * Determines whether to display the DateSeparator in the data list by comparing it with the welcome messages from Bot Studio.
     */
    shouldShowOriginalDate: (index: number) => {
      if (index > 0) return true;
      if (welcomeMessages.length === 0) return true;
      return firstUserMsg && !isSameDay(firstUserMsg.createdAt, firstOriginalWM?.createdAt);
    },
    /**
     * Renders the list of welcome messages from Bot Studio.
     */
    renderBotStudioWelcomeMessages: () => {
      if (welcomeMessages.length === 0) return null;

      return (
        <>
          <DateSeparator
            className={dateSeparatorMargin}
            date={firstOriginalWM?.createdAt}
            formatString={stringSet.DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR}
            locale={dateLocale}
          />
          {welcomeMessages.map((msg, index) => {
            if ('message' in msg) {
              const text = msg.message;
              const tokens: Token[] = parseTextMessage(text, replacementTextList);

              const noUserInputs = originalWMs.length === messages.length;
              const isLastMessage = index === welcomeMessages.length - 1;

              return (
                <div key={index} style={{ padding: '0 16px', marginBottom: 16 }}>
                  <BotMessageWithBodyInput
                    chainTop={index === 0}
                    chainBottom={index === welcomeMessages.length - 1}
                    bodyComponent={<ParsedBotMessageBody text={text} tokens={tokens} />}
                    createdAt={firstOriginalWM?.createdAt}
                  />

                  {noUserInputs && isLastMessage && (
                    <SuggestedRepliesContainer
                      replies={msg.suggestedReplies}
                      type={suggestedRepliesDirection}
                      sendUserMessage={(params) => {
                        dataSource
                          .sendUserMessage(params, handlers.onAfterSendMessage)
                          .then(handlers.onAfterSendMessage);
                      }}
                    />
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
    },
  };
};

const dateSeparatorMargin = css`
  margin: 8px 0;
  padding: 0 16px;
`;
