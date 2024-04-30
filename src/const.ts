import SendbirdChat, { SessionHandler } from '@sendbird/chat';
import { type SendbirdGroupChat } from '@sendbird/chat/groupChannel';
import { type SendbirdOpenChat } from '@sendbird/chat/openChannel';
import { type StringSet } from '@sendbird/uikit-react/types/ui/Label/stringSet';
import React from 'react';

import { ReactComponent as RefreshIcon } from './icons/refresh-icon.svg';
import { SendbirdChatAICallbacks } from './interfaces';
import { noop } from './utils';

// Most of browsers use a 32-bit signed integer as the maximum value for z-index
export const MAX_Z_INDEX = 2147483647;

export const DEFAULT_CONSTANT: Constant = {
  botNickName: 'Khan Academy Support Bot',
  userNickName: 'User',
  betaMark: false,
  customBetaMarkText: 'BETA',
  suggestedMessageContent: {
    replyContents: [],
    messageFilterList: [],
  },
  firstMessageData: [
    // {
    //   data: {
    //     suggested_replies: [
    //       'What can I learn from Pre-K 8th grade?',
    //       'Tell me about Math',
    //     ],
    //   },
    //   message: "Hi~ I'm Khan Academy Support ChatBot. Ask me anything!",
    // },
  ],
  createGroupChannelParams: {
    name: 'Sendbird AI Chatbot',
    coverUrl:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ix' +
      'lib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  chatBottomContent: {
    text: '',
  },
  messageBottomContent: {
    text: 'AI-generated response powered by OpenAI',
    infoIconText:
      'This response is generated by AI and may lack complete accuracy.',
  },
  replacementTextList: [['the Text extracts', 'ChatBot Knowledge Base']],
  instantConnect: true,
  customRefreshComponent: {
    icon: RefreshIcon,
    width: '16px',
    height: '16px',
    onClick: noop,
  },
  enableSourceMessage: false,
  enableEmojiFeedback: true,
  enableMention: true,
  enableMobileView: true,
};

type ConfigureSession = (
  sdk: SendbirdChat | SendbirdGroupChat | SendbirdOpenChat
) => SessionHandler;

type MessageData = {
  suggested_replies?: string[];
};

type FirstMessageItem = {
  data: MessageData;
  message: string;
};
type MatchString = string;
type ReplaceString = string;

export interface Constant {
  botNickName: string;
  userNickName: string;
  betaMark: boolean;
  customBetaMarkText: string;
  suggestedMessageContent: SuggestedMessageContent;
  createGroupChannelParams: CreateGroupChannelParams;
  chatBottomContent: ChatBottomContent;
  messageBottomContent: MessageBottomContent;
  replacementTextList: [MatchString, ReplaceString][];
  instantConnect: boolean;
  customRefreshComponent: CustomRefreshComponent;
  enableSourceMessage: boolean;
  enableEmojiFeedback: boolean;
  enableMention: boolean;
  enableMobileView: boolean;
  firstMessageData: FirstMessageItem[];
  apiHost: string;
  wsHost: string;
  userId?: string;
  configureSession?: ConfigureSession;
  stringSet?: Partial<StringSet>;
  customUserAgentParam?: Record<any, any>;
  autoOpen?: boolean;
  renderWidgetToggleButton?: (props: {
    onClick: () => void;
    isOpen: boolean;
  }) => React.ReactElement;
  serviceName: string;
  callbacks?: SendbirdChatAICallbacks;
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

export const LOCAL_MESSAGE_CUSTOM_TYPE = {
  linkSuggestion: 'linkSuggestion',
  confirmation: 'confirmation',
};

export interface BackGroundContent {
  Component: React.FC;
  height: string;
}

export interface StringPageLogoContent {
  Component: React.FC;
  width: string;
}

export interface ChatBottomContent {
  text: string;
  backgroundColor?: string;
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

export const elementIds = {
  widgetWindow: 'aichatbot-widget-window',
  widgetToggleButton: 'aichatbot-widget-button',
  closeIcon: 'aichatbot-widget-close-icon',
  refreshIcon: 'aichatbot-widget-refresh-icon',
  uikitModal: 'sendbird-modal-root',
};

export const widgetServiceName = {
  default: 'genai-chatbot-widget',
  self: {
    default: 'genai-self-service',
    wordpress: 'genai-wordpress-self-service',
    shopify: 'genai-shopify-self-service',
  },
  plugin: {
    wordpress: 'genai-wordpress-plugin',
    shopify: 'genai-shopify-plugin',
  },
} as const;
