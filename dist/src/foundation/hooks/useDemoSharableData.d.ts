export declare const CHAT_LOAD_TIME_KEY = "load-time";
export declare const NUM_OF_MESSAGES_KEY = "chat-ai-widget_num-of-messages";
export declare const MEMBER_IDS_KEY = "chat-ai-widget_member-ids";
export declare const BOT_ID = "bot-id";
export declare function useBotId(id: string): void;
export declare function useChatWindowLoadTime(): void;
export declare function useNumOfMessages(botUserId: string): void;
export declare function useResetStorageData(): () => void;
export declare function useCurrentChannelMemberIds(): void;
