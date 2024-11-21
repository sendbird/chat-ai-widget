type UserMessageCreateParams = {
    /** The message text of the message. */
    message: string;
    /** The translation target languages. */
    translationTargetLanguages?: string[];
    /** The poll id of the message. */
    pollId?: number;
};
/**
 * @private
 * @description This hook must be used within a ChatContext!
 */
export declare const useSendUserMessage: () => {
    sendUserMessage: (params: UserMessageCreateParams) => Promise<import('@sendbird/chat/message').UserMessage>;
};
export {};
