import { SendbirdChatWith } from '@sendbird/chat';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';
import { default as React } from 'react';

interface WidgetSession {
    strategy: 'auto' | 'manual';
    userId: string;
    expireAt: number;
    channelUrl?: string;
    sessionToken?: string;
}
export interface BotStyle {
    theme: 'light' | 'dark';
    accentColor: string;
    botMessageBGColor: string;
    toggleButtonUrl?: string;
    autoOpen: boolean;
}
export interface BotConfigs {
    replyToFile: boolean;
}
type Context = {
    initialized: boolean;
    botStyle: BotStyle;
    botConfigs: BotConfigs;
    widgetSession: WidgetSession | null;
    initManualSession: (sdk: SendbirdChatWith<[GroupChannelModule]>) => void;
    resetSession: () => Promise<void>;
};
export declare const WidgetSettingProvider: ({ children }: React.PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useWidgetSetting: () => Context;
export declare const useWidgetSession: () => WidgetSession;
export {};
