import { SendbirdChatWith, User } from '@sendbird/chat';
import { GroupChannel, GroupChannelModule } from '@sendbird/chat/groupChannel';
import { useGroupChannelMessages } from '@sendbird/uikit-tools';
import { PropsWithChildren } from 'react';
import { useMessageListScroll } from '../../../../packages/uikit/src/modules/GroupChannel/context/hooks/useMessageListScroll';
import { WidgetChatHandlers } from '../hooks/useWidgetChatHandlers';

export interface WidgetStringSet {
    ERR_CHANNEL_FETCH: string;
}
export interface ChatContextType {
    sdk: SendbirdChatWith<[GroupChannelModule]> | null;
    channel: GroupChannel | null;
    botUser?: User;
    dataSource: ReturnType<typeof useGroupChannelMessages>;
    scrollSource: ReturnType<typeof useMessageListScroll>;
    stringSet: WidgetStringSet;
    handlers: WidgetChatHandlers;
}
export interface ChatContainerProps {
    sdk: SendbirdChatWith<[GroupChannelModule]> | null;
    channelUrl: string;
    stringSet: WidgetStringSet;
}
export declare const ChatContainer: (props: PropsWithChildren<ChatContainerProps>) => import("react/jsx-runtime").JSX.Element;
interface ChatProviderProps extends ChatContainerProps {
    channel: GroupChannel | null;
    botUser?: User;
    dataSource: ReturnType<typeof useGroupChannelMessages>;
    scrollSource: ReturnType<typeof useMessageListScroll>;
    handlers: WidgetChatHandlers;
}
export declare const ChatProvider: (props: PropsWithChildren<ChatProviderProps>) => import("react/jsx-runtime").JSX.Element;
export declare const useChatContext: () => ChatContextType;
export {};
