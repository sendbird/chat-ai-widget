import { SendbirdChatWith, SendbirdError, SendbirdErrorCode } from '@sendbird/chat';
import { GroupChannel, GroupChannelModule } from '@sendbird/chat/groupChannel';
import { useGroupChannelMessages } from '@sendbird/uikit-tools';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { useMessageListScroll } from '@uikit/modules/GroupChannel/context/hooks/useMessageListScroll';

import { useWidgetChatHandlers, WidgetChatHandlers } from './useWidgetChatHandlers';
import { useConstantState } from '../../../context/ConstantContext';
import { useWidgetSetting } from '../../../context/WidgetSettingContext';
import { Placeholder } from '../../../foundation/components/Placeholder';
import { clearWidgetSessionCache } from '../../../libs/storage/widgetSessionCache';

export interface WidgetStringSet {
  ERR_CHANNEL_FETCH: string;
}

export interface ChatContextType {
  sdk: SendbirdChatWith<[GroupChannelModule]> | null;
  channel: GroupChannel | null;
  dataSource: ReturnType<typeof useGroupChannelMessages>;
  scrollSource: ReturnType<typeof useMessageListScroll>;

  stringSet: WidgetStringSet;
  handlers: WidgetChatHandlers;
}

const ChatContext = createContext<ChatContextType | null>(null);

export interface ChatContainerProps {
  sdk: SendbirdChatWith<[GroupChannelModule]> | null;
  channelUrl: string;
  stringSet: WidgetStringSet;
}

export const ChatContainer = (props: PropsWithChildren<ChatContainerProps>) => {
  const { sdk, channelUrl, stringSet, children } = props;
  const { applicationId: appId, botId } = useConstantState();
  const { resetSession } = useWidgetSetting();

  const [channel, setChannel] = useState<GroupChannel | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const scrollSource = useMessageListScroll('smooth');
  const onScrollToBottom = () => scrollSource.scrollPubSub.publish('scrollToBottom', {});
  const handlers = useWidgetChatHandlers({ onScrollToBottom });

  // NOTE: sdk and channel are nullable, but useGroupChannelMessages can handle it even if types are not.
  const dataSource = useGroupChannelMessages(sdk as SendbirdChatWith<[GroupChannelModule]>, channel as GroupChannel, {
    shouldCountNewMessages: () => false,
    onChannelDeleted: () => clearWidgetSessionCache({ appId, botId }),
    onMessagesReceived: onScrollToBottom,
    onMessagesUpdated: onScrollToBottom,
  });

  useEffect(() => {
    if (!sdk?.groupChannel) return;

    setChannel(null);
    setErrorMessage(null);

    sdk.groupChannel
      .getChannel(channelUrl)
      .then(setChannel)
      .catch((error: SendbirdError) => {
        if (error.code === SendbirdErrorCode.NOT_FOUND_IN_DATABASE) {
          resetSession();
        } else {
          setErrorMessage(stringSet.ERR_CHANNEL_FETCH);
        }
      });
  }, [sdk, channelUrl]);

  if (errorMessage) return <Placeholder type={'error'} label={errorMessage} />;

  return (
    <ChatProvider channel={channel} dataSource={dataSource} scrollSource={scrollSource} handlers={handlers} {...props}>
      {children}
    </ChatProvider>
  );
};

interface ChatProviderProps extends ChatContainerProps {
  channel: GroupChannel | null;
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
