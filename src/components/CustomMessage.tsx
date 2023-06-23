import {EveryMessage} from 'SendbirdUIKitGlobal';
import {LOCAL_MESSAGE_CUSTOM_TYPE} from "../const";
import BotMessageWithBodyInput from "./BotMessageWithBodyInput";
import {UserMessage} from "@sendbird/chat/message";
import PendingMessage from "./PendingMessage";
import {
  isNotLocalMessageCustomType,
  MessageTextParser,
  replaceTextExtracts,
  replaceUrl,
  Token
} from "../utils";
import SuggestedReplyMessageBody from "./SuggestedReplyMessageBody";
import ParsedBotMessageBody from "./ParsedBotMessageBody";
import {User} from "@sendbird/chat";
import CustomMessageBody from "./CustomMessageBody";
import CurrentUserMessage from "./CurrentUserMessage";
import {useChannelContext} from "@sendbird/uikit-react/Channel/context";
import {StartingPageAnimatorProps} from "./CustomChannelComponent";
import styled from "styled-components";

type Props = {
  message: EveryMessage;
  activeSpinnerId: number;
  botUser: User;
}

const StartingBlock = styled.div`
  height: ${(props: StartingPageAnimatorProps) => (props.isStartingPage ? '125px' : '0')};
  width: 100%;
  transition: height 0.5s ease;
`;

export default function CustomMessage(props: Props) {
  const {
    message,
    activeSpinnerId,
    botUser,
  } = props;

  const {allMessages} = useChannelContext();
  const firstMessage: UserMessage = allMessages[0] as UserMessage;
  const firstMessageId = firstMessage?.messageId ?? -1;

  // Sent by current user
  if ((message as UserMessage).sender.userId !== botUser.userId) {
    return <div>
      {
        <CurrentUserMessage message={message}/>
      }
      {
        activeSpinnerId === message.messageId &&
        <PendingMessage/>
      }
    </div>;
  }

  if (message.messageId === firstMessageId) {
    return <div>
      <StartingBlock isStartingPage={allMessages.length === 1}/>
      <BotMessageWithBodyInput
        message={message}
        bodyComponent={
          <CustomMessageBody message={(message as UserMessage).message} data={message.data}/>
        }
        messageCount={allMessages.length}
        zIndex={30}
        bodyStyle={{ maxWidth: '255px', width: 'calc(100% - 98px)' }}
      />
    </div>;
  }

  // Sent by bot
  // suggested message
  if (!isNotLocalMessageCustomType(message.customType)) {
    if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
      return <BotMessageWithBodyInput
        message={message}
        bodyComponent={<SuggestedReplyMessageBody message={message}/>}
        bodyStyle={{ maxWidth: '320px', width: 'calc(100% - 98px)' }}
      />;
    }
  }

  // Normal message
  const tokens: Token[] = MessageTextParser((message as UserMessage).message);
  tokens.forEach((token: Token) => {
    if (token.type === 'String') {
      token.value = replaceUrl(token.value);
      token.value = replaceTextExtracts(token.value, "the Text extracts", "ChatBot Knowledge Base");
    }
  });

  return <div>
    <BotMessageWithBodyInput
      botUser={botUser}
      message={message}
      bodyComponent={<ParsedBotMessageBody
        message={message}
        tokens={tokens}
      />}
    />
  </div>;
}