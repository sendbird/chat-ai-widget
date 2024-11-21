type Params = {
    host: string;
    botId: string;
    appId: string;
    createUserAndChannel?: boolean;
    createChannel?: boolean;
    userId?: string;
    locale?: string;
};
type Response = {
    bot: {
        replyToFile: boolean;
    };
    botStyle: {
        theme: 'light' | 'dark';
        accentColor: string;
        botMessageBGColor: string;
        toggleButtonUrl?: string;
        autoOpen: boolean;
    };
    user?: ResponseUser;
    channel?: ResponseChannel;
};
type ResponseUser = {
    expireAt: number;
    userId: string;
    sessionToken: string;
};
type ResponseChannel = {
    channelUrl: string;
};
export declare function getWidgetSetting({ host, botId, appId, createUserAndChannel, createChannel, userId, locale, }: Params): Promise<Response>;
export declare const widgetSettingHandler: (strategy: 'auto' | 'manual', useCachedSession: boolean, params: Omit<Params, 'createChannel' | 'createUserAndChannel'>) => {
    onError: (callback?: ((error: Error) => void) | undefined) => any;
    onGetBotConfigs: (callback: (bot: Response['bot']) => void) => any;
    onGetBotStyle: (callback: (botStyle: Response['botStyle']) => void) => any;
    onAutoNonCached: (callback: (response: {
        user: ResponseUser;
        channel: ResponseChannel;
    }) => void) => any;
    onAutoCached: (callback: (response: {
        channel?: ResponseChannel;
    }) => void) => any;
    onManualCached: (callback: (response: {
        channel?: ResponseChannel;
    }) => void) => any;
    onManualNonCached: (callback: (response?: {
        channel: ResponseChannel;
    }) => void) => any;
    get: () => Promise<void>;
};
export {};
