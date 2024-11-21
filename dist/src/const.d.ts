import { default as SendbirdChat, SessionHandler } from '@sendbird/chat';
import { SendbirdGroupChat } from '@sendbird/chat/groupChannel';
import { SendbirdOpenChat } from '@sendbird/chat/openChannel';
import { Locale } from 'date-fns';
import { default as React } from 'react';
import { StringSet } from '../packages/uikit/src/ui/Label/stringSet';
import { ToggleButtonProps } from './components/widget/WidgetToggleButton';
import { BotStyle } from './context/WidgetSettingContext';
import { FunctionCallAdapter, SendbirdChatAICallbacks, WidgetCarouselItem } from './types';
import { noop } from './utils';

export declare const MAX_Z_INDEX = 2147483647;
export declare const WIDGET_WINDOW_Z_INDEX: number;
export declare const DEFAULT_CONSTANT: {
    userNickName: string;
    betaMark: false;
    customBetaMarkText: string;
    firstMessageData: never[];
    createGroupChannelParams: {};
    chatBottomContent: {
        text: string;
    };
    messageBottomContent: {
        text: string;
        infoIconText: string;
    };
    replacementTextList: [string, string][];
    /**
     * width, and height values here are only placeholder due to required, but they are meaningless
     * as ConstantStateProvider is overwriting them based on isMobile state.
     */
    customRefreshComponent: {
        icon: React.ComponentType<any>;
        onClick: typeof noop;
        style: {};
        width: string;
        height: string;
    };
    enableSourceMessage: false;
    enableEmojiFeedback: true;
    enableMention: true;
    enableResetHistoryOnConnect: false;
    enableWidgetExpandButton: false;
    dateLocale: Locale;
    enableHideWidgetForDeactivatedUser: false;
    messageInputControls: {
        blockWhileBotResponding: number;
    };
    tools: {
        functionCall: {
            carouselAdapter({ response }: import('./types').FunctionCallAdapterParams): {
                title: string;
                url: string;
                featured_image: string;
            }[];
        };
    };
};
type ConfigureSession = (sdk: SendbirdChat | SendbirdGroupChat | SendbirdOpenChat) => SessionHandler;
type MatchString = string;
type ReplaceString = string;
export interface WidgetStyles extends Omit<Partial<BotStyle>, 'autoOpen'> {
    /**
     * @deprecated Use `accentColor` instead.
     * */
    primaryColor?: string;
}
export interface WelcomeUserMessage {
    message: string;
    suggestedReplies?: string[];
}
export interface BotInfo {
    profileUrl?: string;
    nickname?: string;
}
export interface BotStudioEditProps {
    botInfo?: BotInfo;
    aiAttributes?: Record<string, unknown>;
    welcomeMessages?: WelcomeUserMessage[];
    styles?: WidgetStyles;
    suggestedRepliesDirection?: 'horizontal' | 'vertical';
}
export interface MessageInputControls {
    /**
     * If undefined, false, or 0 is given, message input will not be blocked.
     * If true or non-zero numeric value is given, message input will be blocked.
     * If true is given, there will not be a force unblock (unblocks IFF reply is received).
     * If numeric value is given, it will be used as timeout to force unblock the input.
     * Default value is 10000 (force unblock after 10 seconds).
     */
    blockWhileBotResponding?: boolean | number;
}
export interface OnWidgetOpenStateChangeParams {
    value: boolean;
}
export type ExternalChatMessage = {
    id: string;
    value: string;
};
export interface Constant extends ConstantFeatureFlags, ConstantAIFeatures {
    /**
     * @public
     * @description User nickname to be used in the widget.
     */
    userNickName: string;
    /**
     * @public
     * @description Customizable refresh component.
     */
    customRefreshComponent: CustomRefreshComponent;
    /**
     * @public
     * @description String set to be used in the widget.
     */
    stringSet: StringSet;
    /**
     * @public
     * @description Device type to be used in the widget.
     */
    deviceType?: 'desktop' | 'mobile';
    /**
     * @public
     * @description User ID to be used in the widget connect. Must be used with `sessionToken` and `configureSession`.
     */
    userId?: string;
    /**
     * @public
     * @description Session token to be used in the widget connect. Must be used with `userId` and `configureSession`.
     */
    sessionToken?: string;
    /**
     * @public
     * @description Session configuration function. Must be used with `userId` and `sessionToken`.
     */
    configureSession?: ConfigureSession;
    /**
     * @public
     * @description Whether to open the widget automatically. (only works in desktop)
     */
    autoOpen?: boolean;
    /**
     * @public
     * @description Sets the locale for the chatbot.
     */
    locale?: string;
    /**
     * @public
     * @description Locale value to be applied to string values of message timestamp and date separator.
     */
    dateLocale: Locale;
    /**
     * @public
     * @description Message input state controlling properties.
     */
    messageInputControls?: MessageInputControls;
    /**
     * @private
     * @description Whether to show the beta mark.
     */
    betaMark: boolean;
    /**
     * @private
     * @description Custom text to be shown as the beta mark.
     */
    customBetaMarkText: string;
    /**
     * @private
     * @description Group channel creation parameters.
     */
    createGroupChannelParams: CreateGroupChannelParams;
    /**
     * @private
     * @description Chat bottom content.
     */
    chatBottomContent: ChatBottomContent;
    /**
     * @private
     * @description Message bottom content which will be displayed at the bottom of the message bubble.
     */
    messageBottomContent: MessageBottomContent;
    /**
     * @private
     * @description Replacement text list to be replaced in the message.
     */
    replacementTextList: [MatchString, ReplaceString][];
    /**
     * @private
     * @description First message data to be sent when the widget is opened.
     */
    firstMessageData: {
        data: {
            suggested_replies?: string[];
        };
        message: string;
    }[];
    /**
     * @private
     * @description Custom API host.
     */
    apiHost: string;
    /**
     * @private
     * @description Custom WS host.
     */
    wsHost: string;
    /**
     * @private
     * @description Custom user agent parameters.
     */
    customUserAgentParam?: Record<any, any>;
    /**
     * @private
     * @description Custom widget toggle button renderer.
     */
    renderWidgetToggleButton?: (props: ToggleButtonProps) => React.ReactElement;
    /**
     * @private
     * @description Service name to be used in the widget.
     */
    serviceName: string;
    /**
     * @private
     * @description Callbacks to be used in the widget.
     */
    callbacks?: SendbirdChatAICallbacks;
    /**
     * @private
     * @description Bot studio edit properties to be used in Sendbird Dashboard.
     */
    botStudioEditProps?: BotStudioEditProps;
    /**
     * @private
     * @description Widget open state.
     */
    widgetOpenState?: boolean;
    /**
     * @private
     * @description Callback to be called when the widget open state changes.
     */
    onWidgetOpenStateChange?: (params: OnWidgetOpenStateChangeParams) => void;
    /**
     * @private
     * @description Determines whether to use the local cache of the Chat SDK.
     */
    localCacheEnabled?: boolean;
    /**
     * @private
     * @description Custom Properties for Interactive Demo (fintech | ecommerce | healthcare)
     */
    customizedDemoCategory?: CustomizedDemoCategory;
    /**
     * @private
     * @description Custom Properties for Interactive Demo
     */
    externalInputChatMessage: ExternalChatMessage | null;
}
interface ConstantAIFeatures {
    /**
     * @public
     * @description tools to be used in the widget.
     * */
    tools: {
        functionCall: {
            carouselAdapter?: FunctionCallAdapter<WidgetCarouselItem[]>;
        };
    };
}
interface ConstantFeatureFlags {
    /**
     * @public
     * @description Whether to display the source of the knowledge data.
     */
    enableSourceMessage: boolean;
    /**
     * @public
     * @description Whether to enable feedback icons at the bottom of the message bubble.
     */
    enableEmojiFeedback: boolean;
    /**
     * @public
     * @description Whether to enable mention feature via `@{userName}` signature.
     */
    enableMention: boolean;
    /**
     * @public
     * @description Reset chat history when chat is connected.
     * */
    enableResetHistoryOnConnect: boolean;
    /**
     * @public
     * @description Hide widget for deactivated user.
     * */
    enableHideWidgetForDeactivatedUser: boolean;
    /**
     * @public
     * @description Enable widget expand button.
     * */
    enableWidgetExpandButton: boolean;
}
export interface CreateGroupChannelParams {
    name?: string;
    coverUrl?: string;
}
export interface ChatBottomContent {
    text: string;
    backgroundColor?: string;
}
export interface MessageBottomContent {
    text: string;
    infoIconText: string;
}
type CustomRefreshProps = {
    width?: string | number;
    height?: string | number;
    onClick?: () => void;
    style?: React.CSSProperties;
    id?: string;
};
export interface CustomRefreshComponent extends CustomRefreshProps {
    icon: React.ComponentType<CustomRefreshProps>;
}
export declare const elementIds: {
    widgetWindow: string;
    widgetToggleButton: string;
    collapseIcon: string;
    expandIcon: string;
    closeIcon: string;
    refreshIcon: string;
};
export declare const widgetServiceName: {
    readonly default: "genai-chatbot-widget";
    readonly playground: "genai-widget-playground";
    readonly self: {
        readonly default: "genai-self-service";
        readonly wordpress: "genai-wordpress-self-service";
        readonly shopify: "genai-shopify-self-service";
    };
    readonly plugin: {
        readonly wordpress: "genai-wordpress-plugin";
        readonly shopify: "genai-shopify-plugin";
    };
};
export declare const widgetStringSet: {
    messageInputDisabledPlaceholder: string;
    formVersionInvalidFallbackMessage: string;
};
export declare const customizedDemoCategories: readonly ["fintech", "ecommerce", "healthcare"];
export type CustomizedDemoCategory = (typeof customizedDemoCategories)[number];
type CustomizedDemoSettings = {
    [key: string]: {
        name: string;
        botId: string;
        color: {
            userMessageBackground: string;
            botUserMessageBackground: string;
            messageListBackground: string;
            headerBackground?: string;
            chatInputBackground?: string;
        };
        profileUrl: string;
    };
};
export declare const customizedDemoSettings: CustomizedDemoSettings;
export declare const customizedDemoBotInfos: {
    id: string;
    name: string;
    profileUrl: string;
}[];
export declare const customizedDemoBotIds: string[];
export {};
