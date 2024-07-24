import { SendbirdChatWith, SendbirdError, SendbirdErrorCode } from '@sendbird/chat';
import { GroupChannel, GroupChannelModule } from '@sendbird/chat/groupChannel';
import { FileMessageCreateParams, UserMessageCreateParams } from '@sendbird/chat/message';
import { useGroupChannelMessages } from '@sendbird/uikit-tools';
import { createContext, MutableRefObject, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { useMessageListScroll } from '@uikit/modules/GroupChannel/context/hooks/useMessageListScroll';

import { useWidgetSetting } from '../../../context/WidgetSettingContext';
import { Placeholder } from '../../../foundation/components/Placeholder';

export interface WidgetStringSet {
  ERR_SOMETHING_WENT_WRONG: string;
}

export interface WidgetChatHandlers {
  onBeforeSendMessage?: <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => T;
}

export interface ChatContextType {
  sdk: SendbirdChatWith<[GroupChannelModule]> | null;
  channel: GroupChannel | null;
  dataSource: ReturnType<typeof useGroupChannelMessages>;

  stringSet: WidgetStringSet;
  handlers: WidgetChatHandlers;

  scrollRef: MutableRefObject<HTMLDivElement | null>;
}

const ChatContext = createContext<ChatContextType | null>(null);

export interface ChatContainerProps {
  sdk: SendbirdChatWith<[GroupChannelModule]> | null;
  channelUrl: string;
  stringSet: WidgetStringSet;
  handlers: WidgetChatHandlers;
}

export const ChatContainer = (props: PropsWithChildren<ChatContainerProps>) => {
  const { sdk, channelUrl, stringSet, children } = props;

  const { resetSession } = useWidgetSetting();
  const [channel, setChannel] = useState<GroupChannel | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // NOTE: sdk and channel are nullable, but useGroupChannelMessages can handle it even if types are not.
  const dataSource = useGroupChannelMessages(sdk as SendbirdChatWith<[GroupChannelModule]>, channel as GroupChannel, {
    shouldCountNewMessages: () => false,
  });

  useEffect(() => {
    if (!sdk?.groupChannel) {
      return;
    }

    setChannel(null);
    setErrorMessage(null);

    sdk.groupChannel
      .getChannel(channelUrl)
      .then((channel) => {
        setChannel(channel);
      })
      .catch((error: SendbirdError) => {
        if (error.code === SendbirdErrorCode.NOT_FOUND_IN_DATABASE) {
          resetSession();
        } else {
          setErrorMessage(stringSet.ERR_SOMETHING_WENT_WRONG);
        }
      });
  }, [sdk, channelUrl]);

  if (errorMessage) return <Placeholder type={'error'} label={errorMessage} />;

  return (
    <ChatProvider channel={channel} dataSource={dataSource} {...props}>
      {children}
    </ChatProvider>
  );
};

interface ChatProviderProps extends ChatContainerProps {
  channel: GroupChannel | null;
  dataSource: ReturnType<typeof useGroupChannelMessages>;
}

export const ChatProvider = (props: PropsWithChildren<ChatProviderProps>) => {
  const { scrollRef } = useMessageListScroll('smooth');
  return <ChatContext.Provider value={{ ...props, scrollRef }}>{props.children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChatContext must be used within ChatProvider');
  return context;
};
