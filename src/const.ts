import {uuid} from './utils';

export const USER_ID = uuid();
export const NICKNAME = "Jake Sully";
// get your app_id -> https://dashboard.sendbird.com/auth/signin
export const WEB_DEMO_APP_ID = import.meta.env.VITE_WEB_DEMO_APP_ID;
export const WIDGET_DEMO_APP_ID = import.meta.env.VITE_WIDGET_DEMO_APP_ID;

export const HASHED_KEY_QUERY_PARAMETER_NAME = 'hashed_key'; // bot userId
export const IS_WIDGET_PARAMETER_NAME = 'is_widget';

export interface DemoConstant {
  name: string;
  appId: string;
  apiHost: string;
  wsHost: string;
  suggestedReplies: SuggestedReply[];
  createGroupChannelParams: CreateGroupChannelParams;
  startingPageContent: StartingPageContent;
  infoBox: string;
}

export interface SuggestedReply {
  title: string;
  text: string;
  buttonText: string;
  link: string;
}

export const DEMO_CONSTANTS = {
  webDemo: {
    name: 'webDemo',
    appId: WEB_DEMO_APP_ID,
    apiHost: `https://api-${WEB_DEMO_APP_ID}.sendbird.com`,
    wsHost: `wss://ws-${WEB_DEMO_APP_ID}.sendbird.com`,
    suggestedReplies: [
      {
        title: 'Yes, it was helpful!',
        text: 'Thanks for your feedback! You can also build your own AI chatbot in Sendbird.',
        buttonText: 'Try free trial',
        link: 'https://dashboard.sendbird.com/auth/signup',
      },
      {
        title: 'No, I need more help.',
        text: 'I\'m sorry, we couldn\'t help you. Let us know how we can improve by talking to one of our teammates.',
        buttonText: 'Talk to an expert',
        link: 'https://sendbird.com/contact-sales',
      },
    ],
    createGroupChannelParams: {
      name: 'Clark the Assistant',
      coverUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ix' +
        'lib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    startingPageContent: {
      headerOne: 'Meet Clark',
      headerTwo: 'Your very own AI Assistant',
    },
    infoBox: 'In this demo, the AI-generated responses may lack complete accuracy.',
  },
  widgetDemo: {
    name: 'widgetDemo',
    appId: WIDGET_DEMO_APP_ID,
    apiHost: `https://api-${WIDGET_DEMO_APP_ID}.sendbird.com`,
    wsHost: `wss://ws-${WIDGET_DEMO_APP_ID}.sendbird.com`,
    suggestedReplies: [
      {
        title: 'Yes, it was helpful!',
        text: 'Thanks for your feedback! You can also build your own AI chatbot in Sendbird.',
        buttonText: 'Try free trial',
        link: 'https://dashboard.sendbird.com/auth/signup',
      },
      {
        title: 'No, I need more help.',
        text: 'I\'m sorry to hear that we weren\'t able to assist you. You might find additional help on our community site.',
        buttonText: 'Visit our Community',
        link: 'https://community.sendbird.com/',
      },
    ],
    createGroupChannelParams: {
      name: 'Docs AI Assistant',
      coverUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ix' +
        'lib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    startingPageContent: {
      headerOne: 'I\'m Docs AI Assistant',
      headerTwo: 'Ask us anything about Sendbird Docs!',
    },
    infoBox: 'In this beta version, the AI-generated responses may lack complete accuracy.',
  },
};

export const INITIAL_DEMO_STATE: DemoConstant = {
  name: 'webDemo',
  appId: WEB_DEMO_APP_ID,
  apiHost: `https://api-${WEB_DEMO_APP_ID}.sendbird.com`,
  wsHost: `wss://ws-${WEB_DEMO_APP_ID}.sendbird.com`,
  suggestedReplies: [
    {
      title: 'Yes, it was helpful! 👍',
      text: 'Thanks for your feedback! You can also build your own AI chatbot in Sendbird.',
      buttonText: 'Try free trial',
      link: 'https://dashboard.sendbird.com/auth/signup',
    },
    {
      title: 'No, I need more help. 💬',
      text: 'I\'m sorry, we couldn\'t help you. Let us know how we can improve by talking to one of our teammates.',
      buttonText: 'Talk to an expert',
      link: 'https://sendbird.com/contact-sales',
    },
  ],
  createGroupChannelParams: {
    name: 'Clark the Assistant',
    coverUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ix' +
      'lib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  startingPageContent: {
    headerOne: 'Meet Clark',
    headerTwo: 'Your very own AI Assistant',
  },
  infoBox: 'In this demo, the AI-generated responses may lack complete accuracy.',
};

export interface CreateGroupChannelParams {
  name: string;
  coverUrl: string;
}

export const LOCAL_MESSAGE_CUSTOM_TYPE = {
  linkSuggestion: 'linkSuggestion',
  confirmation: 'confirmation',
};

export interface StartingPageContent {
  headerOne: string;
  headerTwo: string;
}

export const SPECIAL_MESSAGE_LIST = [
  'How can I assist you',
  'How can I help you',
  'Can you clarify',
  'That\'s not a question I can answer unfortunately',
  'Try again',
  'I couldn\'t find the answer to your question',
  'Can you try again?',
  'I\'m sorry, I couldn\'t understand your question',
  'That\'s not a valid question',
  'Is there a specific question you have',
  'I\'m here to help you with any questions you have',
];
