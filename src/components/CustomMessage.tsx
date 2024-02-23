import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useMemo } from 'react';
// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';

import AdminMessage from './AdminMessage';
import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import CurrentUserMessage from './CurrentUserMessage';
import CustomMessageBody from './CustomMessageBody';
import CancelOrderMessage from './CustomView/CancelOrderMessage';
import CurrentBalanceMessage from './CustomView/CurrentBalanceMessage';
import OrderDetailsMessage from './CustomView/OrderDetailsMessage';
import OrderHistoryMessage from './CustomView/OrderHistoryMessage';
import RecommendItemsMessage from './CustomView/RecommendItemsMessage';
import SendingMoneyConfirmedMessage from './CustomView/SendingMoneyConfirmedMessage';
import SendingMoneyMessage from './CustomView/SendingMoneyMessage';
import TransactionHistoryMessage from './CustomView/TransactionHistoryMessage';
import FormMessage from './FormMessage';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import PendingMessage from './PendingMessage';
import SuggestedReplyMessageBody from './SuggestedReplyMessageBody';
import UserMessageWithBodyInput from './UserMessageWithBodyInput';
import { LOCAL_MESSAGE_CUSTOM_TYPE } from '../const';
import { useConstantState } from '../context/ConstantContext';
import {
  isNotLocalMessageCustomType,
  MessageTextParser,
  replaceTextExtractsMultiple,
  replaceUrl,
  scrollUtil,
  Token,
} from '../utils';
import {
  isFormMessage,
  isCurrentBalanceMessage,
  isSendingMoneyMessage,
  isSendingMoneyConfirmedMessage,
  isTransactionHistoryMessage,
  type FunctionCallMessage,
  type MessageMeta,
  isOrderHistoryMessage,
  isOrderDetailsMessage,
  isCancelOrderMessage,
  isRecommendItemsMessage,
} from '../utils/messages';

type Props = {
  message: EveryMessage;
  activeSpinnerId: number;
  botUser: User;
  lastMessageRef: React.RefObject<HTMLDivElement>;
  chainTop?: boolean;
  chainBottom?: boolean;
  isBotWelcomeMessage: boolean;
};

export default function CustomMessage(props: Props) {
  const {
    message,
    activeSpinnerId,
    botUser,
    lastMessageRef,
    chainTop,
    chainBottom,
    isBotWelcomeMessage,
  } = props;
  const { replacementTextList, userId } = useConstantState();

  const { allMessages } = useChannelContext();

  const messageMeta = useMemo(() => {
    let messageMeta: MessageMeta | null;
    try {
      messageMeta = message?.data ? JSON.parse(message.data) : null;
    } catch (error) {
      messageMeta = null;
    }
    return messageMeta;
  }, [message?.data]);

  const functionCallMessage: FunctionCallMessage = useMemo(() => {
    if (
      messageMeta &&
      messageMeta.function_calls?.[0] &&
      messageMeta.function_calls[0]?.response_text !== ''
    ) {
      return JSON.parse(messageMeta.function_calls[0].response_text);
    }
    return null;
  }, [messageMeta]);

  // admin message
  if (message.messageType === 'admin') {
    return <div>{<AdminMessage message={message} />}</div>;
  }

  if (isFormMessage(message)) {
    const forms = message.extendedMessagePayload.forms;
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        bodyComponent={<FormMessage form={forms[0]} message={message} />}
        bodyStyle={{ maxWidth: '320px', width: 'calc(100% - 98px)' }}
        messageCount={allMessages.length}
        chainTop={chainTop}
        chainBottom={chainBottom}
        isBotWelcomeMessage={isBotWelcomeMessage}
        isFormMessage={true}
      />
    );
  }

  if (isSendingMoneyMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={<SendingMoneyMessage message={functionCallMessage} />}
        chainTop={chainTop}
        chainBottom={chainBottom}
      />
    );
  }

  if (isSendingMoneyConfirmedMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={
          <SendingMoneyConfirmedMessage message={functionCallMessage} />
        }
        chainTop={chainTop}
        chainBottom={chainBottom}
      />
    );
  }

  if (isCurrentBalanceMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={<CurrentBalanceMessage message={functionCallMessage} />}
        chainTop={chainTop}
        chainBottom={chainBottom}
      />
    );
  }

  if (isTransactionHistoryMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={
          <TransactionHistoryMessage message={functionCallMessage} />
        }
        chainTop={chainTop}
        chainBottom={chainBottom}
      />
    );
  }

  if (isOrderHistoryMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={<OrderHistoryMessage message={functionCallMessage} />}
        chainTop={chainTop}
        chainBottom={chainBottom}
      />
    );
  }

  if (isOrderDetailsMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={<OrderDetailsMessage message={functionCallMessage} />}
        chainTop={chainTop}
        chainBottom={chainBottom}
      />
    );
  }

  if (isCancelOrderMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={<CancelOrderMessage message={functionCallMessage} />}
        chainTop={chainTop}
        chainBottom={chainBottom}
      />
    );
  }

  if (isRecommendItemsMessage(functionCallMessage)) {
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={<RecommendItemsMessage message={functionCallMessage} />}
        chainTop={chainTop}
        chainBottom={chainBottom}
        newLineSentTime={true}
      />
    );
  }

  // Sent by current user
  if ((message as UserMessage).sender?.userId === userId) {
    if (activeSpinnerId !== message.messageId) {
      scrollUtil();
    }
    return (
      <div>
        {<CurrentUserMessage message={message as UserMessage} />}
        {activeSpinnerId === message.messageId && (
          <PendingMessage botProfileUrl={botUser?.profileUrl} />
        )}
      </div>
    );
  }

  // Sent by other users
  if ((message as UserMessage).sender?.userId !== botUser.userId) {
    return (
      <div ref={lastMessageRef}>
        {
          <UserMessageWithBodyInput
            message={message as UserMessage}
            user={message?.sender}
            chainTop={chainTop}
            chainBottom={chainBottom}
            bodyComponent={
              <CustomMessageBody message={(message as UserMessage).message} />
            }
          />
        }
      </div>
    );
  }

  // Sent by bot
  // for static suggested replies
  if (!isNotLocalMessageCustomType(message.customType)) {
    if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
      return (
        <BotMessageWithBodyInput
          botUser={botUser}
          message={message}
          bodyComponent={
            <SuggestedReplyMessageBody message={message as UserMessage} />
          }
          bodyStyle={{ maxWidth: '320px', width: 'calc(100% - 98px)' }}
          messageCount={allMessages.length}
          chainTop={chainTop}
          chainBottom={chainBottom}
          isBotWelcomeMessage={isBotWelcomeMessage}
        />
      );
    }
  }

  // Normal message
  const tokens: Token[] = MessageTextParser((message as UserMessage).message);
  tokens.forEach((token: Token) => {
    if (token.type === 'String') {
      token.value = replaceUrl(token.value);
      token.value = replaceTextExtractsMultiple(
        token.value,
        replacementTextList
      );
    }
  });

  return (
    <div ref={lastMessageRef}>
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={
          <ParsedBotMessageBody
            message={message as UserMessage}
            tokens={tokens}
          />
        }
        chainTop={chainTop}
        chainBottom={chainBottom}
        isBotWelcomeMessage={isBotWelcomeMessage}
      />
    </div>
  );
}
