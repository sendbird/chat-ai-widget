import { SendbirdChatWith, SendbirdError, SendbirdErrorCode } from '@sendbird/chat';
import { GroupChannel, GroupChannelModule } from '@sendbird/chat/groupChannel';
import { useGroupChannelMessages } from '@sendbird/uikit-tools';
import { createContext, MutableRefObject, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { useMessageListScroll } from '@uikit/modules/GroupChannel/context/hooks/useMessageListScroll';

import { Placeholder } from '../../foundation/components/Placeholder';

export interface WidgetStringSet {
  ERR_NOT_FOUND_CHANNEL: string;
  ERR_SOMETHING_WENT_WRONG: string;
}

export interface ChatContextType {
  channel: GroupChannel;

  dataSource: ReturnType<typeof useGroupChannelMessages>;

  stringSet: WidgetStringSet;

  scrollRef: MutableRefObject<HTMLDivElement | null>;
}

const ChatContext = createContext<ChatContextType | null>(null);

export interface ChatContainerProps {
  sdk: SendbirdChatWith<[GroupChannelModule]>;
  channelUrl: string;
  stringSet: WidgetStringSet;
}
export const ChatContainer = (props: PropsWithChildren<ChatContainerProps>) => {
  const { sdk, channelUrl, stringSet, children } = props;

  const [channel, setChannel] = useState<GroupChannel | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setChannel(null);
    setErrorMessage(null);

    sdk.groupChannel
      .getChannel(channelUrl)
      .then((channel) => {
        setChannel(channel);
      })
      .catch((error: SendbirdError) => {
        if (error.code === SendbirdErrorCode.NOT_FOUND_IN_DATABASE) {
          setErrorMessage(stringSet.ERR_NOT_FOUND_CHANNEL);
        } else {
          setErrorMessage(stringSet.ERR_SOMETHING_WENT_WRONG);
        }
      });
  }, [sdk, channelUrl]);

  if (errorMessage) return <Placeholder type={'error'} label={errorMessage} />;
  if (!channel) return <Placeholder type={'loading'} />;

  return (
    <ChatProvider channel={channel} {...props}>
      {children}
    </ChatProvider>
  );
};

interface ChatProviderProps extends ChatContainerProps {
  channel: GroupChannel;
}
export const ChatProvider = ({ sdk, channel, stringSet, children }: PropsWithChildren<ChatProviderProps>) => {
  const { scrollRef } = useMessageListScroll('smooth');
  const dataSource = useGroupChannelMessages(sdk, channel, {
    shouldCountNewMessages: () => false,
  });

  return (
    <ChatContext.Provider
      value={{
        channel,
        dataSource,

        stringSet,

        scrollRef,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChatContext must be used within ChatProvider');
  return context;
};
