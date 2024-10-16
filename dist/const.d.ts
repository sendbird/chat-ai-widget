import SendbirdChat, { SessionHandler } from '@sendbird/chat';
import { type SendbirdGroupChat } from '@sendbird/chat/groupChannel';
import { type SendbirdOpenChat } from '@sendbird/chat/openChannel';
import React from 'react';
export declare const DEFAULT_CONSTANT: Constant;
export declare const ECOMMERCE_AGENT_ID = "luke";
type ConfigureSession = (sdk: SendbirdChat | SendbirdGroupChat | SendbirdOpenChat) => SessionHandler;
type MessageData = {
    suggested_replies?: string[];
};
type FirstMessageItem = {
    data: MessageData;
    message: string;
};
export interface Constant {
    apiHost?: string;
    botCategory: string;
    botNickName: string;
    userId: string;
    userNickName: string;
    betaMark: boolean;
    customBetaMarkText: string;
    suggestedMessageContent: SuggestedMessageContent;
    createGroupChannelParams: CreateGroupChannelParams;
    startingPageContent: StartingPageContent;
    chatBottomContent: ChatBottomContent;
    messageBottomContent: MessageBottomContent;
    replacementTextList: [string, string][];
    instantConnect: boolean;
    customRefreshComponent: CustomRefreshComponent;
    configureSession: ConfigureSession;
    enableSourceMessage: boolean;
    enableEmojiFeedback: boolean;
    enableMention: boolean;
    firstMessageData: FirstMessageItem[];
    inputValue?: {
        id: string;
        value: string;
    };
}
export interface SuggestedReply {
    title: string;
    text: string;
    buttonText: string;
    link: string;
}
export interface SuggestedMessageContent {
    replyContents: SuggestedReply[];
    messageFilterList: string[];
}
export interface CreateGroupChannelParams {
    name: string;
    coverUrl: string;
}
export declare const LOCAL_MESSAGE_CUSTOM_TYPE: {
    linkSuggestion: string;
    confirmation: string;
};
export interface StartingPageContent {
    headerContent: StartingPageHeaderContent;
    messageContent: StartingMessageContent;
    logoContent: StringPageLogoContent;
    backGroundContent: BackGroundContent;
}
export interface BackGroundContent {
    Component: React.FC;
    height: string;
}
export interface StringPageLogoContent {
    Component: React.FC;
    width: string;
}
export interface StartingPageHeaderContent {
    headerOne: string;
    headerTwo: string;
}
export interface ChatBottomContent {
    text: string;
    backgroundColor: string;
}
export interface StartingMessageContent {
    header: string;
    body: string;
}
export interface MessageBottomContent {
    text: string;
    infoIconText: string;
}
export interface CustomRefreshComponent {
    icon: React.FC;
    width: string;
    height: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}
export {};
