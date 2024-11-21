import { BaseMessage } from '@sendbird/chat/message';

export declare const getMessageGrouping: (curr: BaseMessage, prev?: BaseMessage, next?: BaseMessage) => [boolean, boolean];
export declare function getBotWelcomeMessages(messages: BaseMessage[], botUserId: string | null): BaseMessage[];
export declare function isSentBy(message: BaseMessage, userId?: string | null): boolean;
export declare function isSentByDemoBot(message: BaseMessage): boolean;
export declare function jsonParseSafely(messageData: string): any;
export declare function getSenderUserIdFromMessage(message?: BaseMessage | null): string | undefined;
export declare function shouldFilterOutMessage(message: BaseMessage): boolean;
