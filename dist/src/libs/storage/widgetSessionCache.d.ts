export type WidgetSessionCache = {
    strategy: 'auto' | 'manual';
    userId: string;
    channelUrl: string;
    expireAt: number;
    sessionToken?: string;
};
export declare function getWidgetSessionCache(params: {
    appId: string;
    botId: string;
}): WidgetSessionCache | null;
export declare function saveWidgetSessionCache(params: {
    appId: string;
    botId: string;
    data: WidgetSessionCache;
}): void;
/**
 * Call this function if the bot has been deleted.
 * Otherwise, users may join channels where the bot does not exist.
 * */
export declare function clearWidgetSessionCache(params: {
    appId: string;
    botId: string;
}): void;
/**
 * @deprecated Use `clearWidgetSessionCache` instead.
 * */
export declare const clearCache: typeof clearWidgetSessionCache;
