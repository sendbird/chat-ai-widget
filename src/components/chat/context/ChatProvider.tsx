import { SendbirdChatWith, User } from '@sendbird/chat';
import { GroupChannel, GroupChannelModule } from '@sendbird/chat/groupChannel';
import { useGroupChannelMessages } from '@sendbird/uikit-tools';
import { createContext, PropsWithChildren, useContext } from 'react';

import { useMessageListScroll } from '@uikit/modules/GroupChannel/context/hooks/useMessageListScroll';

import { useChannels } from '../../../context/ChannelsContext';
import { useConstantState } from '../../../context/ConstantContext';
import { clearWidgetSessionCache } from '../../../libs/storage/widgetSessionCache';
import { useWidgetChatHandlers, WidgetChatHandlers } from '../hooks/useWidgetChatHandlers';

export interface WidgetStringSet {
  ERR_CHANNEL_FETCH: string;
}

export interface ChatContextType {
  sdk: SendbirdChatWith<[GroupChannelModule]> | null;
  channel: GroupChannel;
  botUser?: User;
  dataSource: ReturnType<typeof useGroupChannelMessages>;
  scrollSource: ReturnType<typeof useMessageListScroll>;

  stringSet: WidgetStringSet;
  handlers: WidgetChatHandlers;
}

const ChatContext = createContext<ChatContextType | null>(null);

export interface ChatContainerProps {
  sdk: SendbirdChatWith<[GroupChannelModule]> | null;
  stringSet: WidgetStringSet;
}

export const ChatContainer = (props: PropsWithChildren<ChatContainerProps>) => {
  const { sdk, children } = props;
  const { applicationId: appId, botId } = useConstantState();
  const { currentChannel } = useChannels();

  const scrollSource = useMessageListScroll('smooth');
  const onScrollToBottom = () => setTimeout(() => scrollSource.scrollPubSub.publish('scrollToBottom', {}), 25);
  const handlers = useWidgetChatHandlers({ onScrollToBottom });

  // NOTE: sdk and channel are nullable, but useGroupChannelMessages can handle it even if types are not.
  const dataSource = useGroupChannelMessages(
    sdk as SendbirdChatWith<[GroupChannelModule]>,
    currentChannel as GroupChannel,
    {
      shouldCountNewMessages: () => false,
      onChannelDeleted: () => clearWidgetSessionCache({ appId, botId }),
      onMessagesReceived: onScrollToBottom,
      onMessagesUpdated: onScrollToBottom,
    },
  );

  // FIXME: Is this ok?
  if (!currentChannel) return null;

  return (
    <ChatProvider
      channel={currentChannel}
      botUser={currentChannel?.members.find((it) => it.userId === botId)}
      dataSource={dataSource}
      scrollSource={scrollSource}
      handlers={handlers}
      {...props}
    >
      {children}
    </ChatProvider>
  );
};

interface ChatProviderProps extends ChatContainerProps {
  channel: GroupChannel;
  botUser?: User;
  dataSource: ReturnType<typeof useGroupChannelMessages>;
  scrollSource: ReturnType<typeof useMessageListScroll>;
  handlers: WidgetChatHandlers;
}

export const ChatProvider = (props: PropsWithChildren<ChatProviderProps>) => {
  return <ChatContext.Provider value={props}>{props.children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChatContext must be used within ChatProvider');
  return context;
};
