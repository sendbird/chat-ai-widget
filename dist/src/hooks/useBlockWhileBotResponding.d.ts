import { User } from '@sendbird/chat';
import { BaseMessage } from '@sendbird/chat/message';

interface UseDisableInputUntilReplyProps {
    lastMessage?: BaseMessage | null;
    botUser?: User;
}
/**
 * When current user sends a message, message input is disabled until bot reply is received and finished streaming.
 */
export declare const useBlockWhileBotResponding: ({ lastMessage, botUser }: UseDisableInputUntilReplyProps) => boolean;
export {};
