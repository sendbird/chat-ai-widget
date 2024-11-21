/**
 * If the updated last message was sent by the current user, indicate a typing bubble for the sent message.
 * If the updated last message is pending or failed and was sent by the current user, or if it was sent by the bot, deactivate the typing bubble.
 */
export declare const useTypingTargetMessageId: () => number;
