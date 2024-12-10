import SendbirdChat from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';

import { mockUserMessage } from './const';

const chat = SendbirdChat.init({
  appId: '',
  modules: [],
});

export function getMockedUserMessage(msg = ''): UserMessage {
  return chat.message.buildMessageFromSerializedData({
    ...mockUserMessage,
    message: msg,
  }) as UserMessage;
}
