import { SessionHandler } from '@sendbird/chat';
import React from 'react';

import { StringSet } from '@uikit/ui/Label/stringSet';

import type { ToggleButtonProps } from './components/WidgetToggleButton';
import { BotStyle } from './context/WidgetSettingContext';
import RefreshIcon from './icons/refresh-icon.svg';
import { SendbirdChatAICallbacks } from './types';
import { noop } from './utils';

// Most of browsers use a 32-bit signed integer as the maximum value for z-index
export const MAX_Z_INDEX = 2147483647;
// .sendbird-modal-root will be on top of the widget window
export const WIDGET_WINDOW_Z_INDEX = MAX_Z_INDEX - 1;

export const DEFAULT_CONSTANT = {
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
    // name: 'Sendbird AI Chatbot',
    // coverUrl:
    //   'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ix' +
    //   'lib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
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
  /**
   * width, and height values here are only placeholder due to required, but they are meaningless
   * as ConstantStateProvider is overwriting them based on isMobile state.
   */
  customRefreshComponent: {
    icon: RefreshIcon as React.ComponentType<any>,
    onClick: noop,
    style: {},
    width: '16px',
    height: '16px',
  },
  enableSourceMessage: false,
  enableEmojiFeedback: true,
  enableMention: true,
  enableResetHistoryOnConnect: false,
} satisfies Partial<Constant>;

type ConfigureSession = () => SessionHandler;

type MessageData = {
  suggested_replies?: string[];
};

type FirstMessageItem = {
  data: MessageData;
  message: string;
};
type MatchString = string;
type ReplaceString = string;

export interface WidgetStyles extends Omit<Partial<BotStyle>, 'autoOpen'> {
  /**
   * @deprecated Use `accentColor` instead.
   * */
  primaryColor?: string; // Color for messages sent by me, suggested replies, etc.
}

export interface WelcomeUserMessage {
  message: string;
  suggestedReplies?: string[];
}

// TODO: support this later.
// export interface WelcomeFileMessage {
//   file?: File | Blob | FileUrlInfo;
//   suggestedReplies?: string[];
// }

// export interface FileUrlInfo {
//   url?: string;
//   name?: string;
//   size?: number;
//   type?: string; // mime type
// }

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

export interface OnWidgetOpenStateChangeParams {
  value: boolean;
}

export interface Constant extends Required<ConstantProps> {
  /**
   * @public User nickname to be used in the widget.
   */
  userNickName: string;
  /**
   * @public Customizable refresh component.
   */
  customRefreshComponent: CustomRefreshComponent;
  /**
   * @public Whether to display the source of the knowledge data.
   */
  enableSourceMessage: boolean;
  /**
   * @public Whether to enable feedback icons at the bottom of the message bubble.
   */
  enableEmojiFeedback: boolean;
  /**
   * @public Whether to enable mention feature via `@{userName}` signature.
   */
  enableMention: boolean;
  /**
   * @public String set to be used in the widget.
   */
  stringSet: StringSet;
  /**
   * @public Device type to be used in the widget.
   */
  deviceType?: 'desktop' | 'mobile';
  /**
   * @public Whether to open the widget automatically.
   */
  autoOpen?: boolean;
  /**
   * @private Whether to show the beta mark.
   */
  betaMark: boolean;
  /**
   * @private Custom text to be shown as the beta mark.
   */
  customBetaMarkText: string;
  /**
   * @private Suggested message content.
   */
  suggestedMessageContent: SuggestedMessageContent;
  /**
   * @private Group channel creation parameters.
   */
  createGroupChannelParams: CreateGroupChannelParams;
  /**
   * @private Chat bottom content.
   */
  chatBottomContent: ChatBottomContent;
  /**
   * @private Message bottom content which will be displayed at the bottom of the message bubble.
   */
  messageBottomContent: MessageBottomContent;
  /**
   * @private Replacement text list to be replaced in the message.
   */
  replacementTextList: [MatchString, ReplaceString][];
  /**
   * @private First message data to be sent when the widget is opened.
   */
  firstMessageData: FirstMessageItem[];
  /**
   * @private Custom API host.
   */
  apiHost: string;
  /**
   * @private Custom WS host.
   */
  wsHost: string;
  /**
   * @private User ID to be used in the widget.
   */
  userId?: string;
  /**
   * @private Session configuration function. Must be used with `userId`.
   */
  configureSession?: ConfigureSession;
  /**
   * @private Custom user agent parameters.
   */
  customUserAgentParam?: Record<any, any>;
  /**
   * @private Custom widget toggle button renderer.
   */
  renderWidgetToggleButton?: (props: ToggleButtonProps) => React.ReactElement;
  /**
   * @private Service name to be used in the widget.
   */
  serviceName: string;
  /**
   * @private Callbacks to be used in the widget.
   */
  callbacks?: SendbirdChatAICallbacks;
  /**
   * @private Bot studio edit properties to be used in Sendbird Dashboard.
   */
  botStudioEditProps?: BotStudioEditProps;
  /**
   * @private Widget open state.
   */
  widgetOpenState?: boolean;
  /**
   * @private Callback to be called when the widget open state changes.
   */
  onWidgetOpenStateChange?: (params: OnWidgetOpenStateChangeParams) => void;
}

export interface ConstantProps {
  /**
   * Reset chat history when chat is connected.
   * */
  enableResetHistoryOnConnect?: boolean;
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
  name?: string;
  coverUrl?: string;
}

export const LOCAL_MESSAGE_CUSTOM_TYPE = {
  linkSuggestion: 'linkSuggestion',
  confirmation: 'confirmation',
};

export interface ChatBottomContent {
  text: string;
  backgroundColor?: string;
}
export interface MessageBottomContent {
  text: string;
  infoIconText: string;
}

type CustomRefreshProps = {
  width?: string;
  height?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  id?: string;
};

export interface CustomRefreshComponent extends CustomRefreshProps {
  icon: React.ComponentType<CustomRefreshProps>;
}

export const elementIds = {
  widgetWindow: 'aichatbot-widget-window',
  widgetToggleButton: 'aichatbot-widget-button',
  collapseIcon: 'aichatbot-widget-collapse-icon',
  expandIcon: 'aichatbot-widget-expand-icon',
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

export const widgetStringSet = {
  messageInputDisabledPlaceholder: 'Waiting for the bot’s reply…',
};
