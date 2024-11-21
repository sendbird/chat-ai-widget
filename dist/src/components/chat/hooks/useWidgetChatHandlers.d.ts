import { FileMessageCreateParams, UserMessageCreateParams } from '@sendbird/chat/message';

export interface WidgetChatHandlers {
    onBeforeSendMessage: <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => Promise<T>;
    onAfterSendMessage: () => void;
}
export declare const useWidgetChatHandlers: (params: {
    onScrollToBottom: () => void;
}) => {
    onBeforeSendMessage: <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => Promise<(T & {
        metaArrays: import('@sendbird/chat/message').MessageMetaArray[] | undefined;
        data: string;
    }) | (T & {
        metaArrays: import('@sendbird/chat/message').MessageMetaArray[] | undefined;
    })>;
    onAfterSendMessage: () => void;
};
