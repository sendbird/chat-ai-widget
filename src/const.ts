import SendbirdChat, { SessionHandler } from '@sendbird/chat';
import { type SendbirdGroupChat } from '@sendbird/chat/groupChannel';
import { type SendbirdOpenChat } from '@sendbird/chat/openChannel';
import React from 'react';

import { ReactComponent as StartingPageLogo } from './icons/icon-widget-chatbot.svg';
import { ReactComponent as RefreshIcon } from './icons/refresh-icon.svg';
import { ReactComponent as StartingPageBackground } from './icons/starting-page-bg-image-svg.svg';
import { noop, uuid } from './utils';

const USER_ID = uuid();
// get your app_id -> https://dashboard.sendbird.com/auth/signin

export const DEFAULT_CONSTANT: Constant = {
  botNickName: 'Khan Academy Support Bot',
  userId: USER_ID,
  userNickName: 'User',
  betaMark: true,
  customBetaMarkText: 'BETA',
  suggestedMessageContent: {
    replyContents: [
      {
        title: 'Yes, it was helpful! 👍',
        text: 'Thanks for your feedback! You can also build your own AI chatbot in Sendbird.',
        buttonText: 'Try free trial',
        link: 'https://dashboard.sendbird.com/auth/signup',
      },
      {
        title: 'No, I need more help. 💬',
        text: "I'm sorry, we couldn't help you. Let us know how we can improve by talking to one of our teammates.",
        buttonText: 'Talk to an expert',
        link: 'https://sendbird.com/contact-sales',
      },
    ],
    messageFilterList: [
      'Can you please clarify?',
      'How can I assist you',
      'How can I help you',
      'Can you clarify',
      "That's not a question I can answer unfortunately",
      'Try again',
      "I couldn't find the answer to your question",
      'Can you try again?',
      'I apologize for any confusion',
      "I'm sorry, I couldn't understand your question",
      "That's not a valid question",
      'Is there a specific question you have',
      "I'm here to help you with any questions you have",
      'Ask away',
    ],
  },
  createGroupChannelParams: {
    name: 'Sendbird AI Chatbot',
    coverUrl:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ix' +
      'lib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  startingPageContent: {
    headerContent: {
      headerOne: '',
      headerTwo: 'Ask me anything!',
    },
    messageContent: {
      header: '',
      body: '',
    },
    logoContent: {
      Component: StartingPageLogo,
      width: '30px',
    },
    backGroundContent: {
      Component: StartingPageBackground,
      height: '240px',
    },
  },
  chatBottomContent: {
    text: 'Sendbird AI ChatBot',
    backgroundColor:
      'linear-gradient(273.73deg, #4DCD90 -0.83%, #6210CC 48.04%, #6210CC 75.45%)',
  },
  messageBottomContent: {
    text: 'AI-generated response powered by OpenAI',
    infoIconText:
      'In this beta version, the AI-generated responses may lack complete accuracy.',
  },
  replacementTextList: [['the Text extracts', 'ChatBot Knowledge Base']],
  instantConnect: false,
  customRefreshComponent: {
    icon: RefreshIcon,
    width: '16px',
    height: '16px',
    style: {
      position: 'relative',
      // FIXME: This is a hack to make the refresh icon appear next to the expand & close icons in the widget window
      right: '60px',
    },
    onClick: noop,
  },
  enableSourceMessage: true,
};

type ConfigureSession = (
  sdk: SendbirdChat | SendbirdGroupChat | SendbirdOpenChat
) => SessionHandler;

export interface Constant {
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
  replacementTextList: string[][];
  instantConnect: boolean;
  customRefreshComponent: CustomRefreshComponent;
  configureSession: ConfigureSession;
  enableSourceMessage: boolean;
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
