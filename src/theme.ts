import { getColorBasedOnSaturation, generateColorVariants } from './colors';
interface CommonTheme {
  bgColor: {
    chatBottom: string;
    messageInput: string;
    incomingMessage: string;
    outgoingMessage: string;
    suggestedReply: string;
    bottomBanner: string;
    loadingScreen: string;
    hover: {
      incomingMessage: string;
      outgoingMessage: string;
      suggestedReply: string;
    };
  };
  textColor: {
    incomingMessage: string;
    outgoingMessage: string;
    sentTime: string;
    sourceInfo: string;
    suggestedReply: string;
    bottomBanner: {
      poweredBy: string;
      logo: string;
    };
  };
  accentColor: string;
}
interface Theme {
  light: CommonTheme;
  dark: CommonTheme;
}

export function getTheme({
  accentColor,
  botMessageBGColor,
}: {
  accentColor?: string;
  botMessageBGColor?: string;
}): Theme {
  return {
    light: {
      bgColor: {
        chatBottom: 'var(--sendbird-light-background-50)',
        messageInput: 'var(--sendbird-light-background-100)',
        incomingMessage:
          botMessageBGColor ?? 'var(--sendbird-dark-background-100)',
        outgoingMessage: accentColor ?? 'var(--sendbird-light-primary-300)',
        suggestedReply: 'var(--sendbird-light-background-50)',
        bottomBanner: 'var(--sendbird-light-background-50)',
        loadingScreen: 'var(--sendbird-light-background-50)',
        hover: {
          // Give 1 level darker color for hover
          incomingMessage: botMessageBGColor
            ? generateColorVariants(botMessageBGColor)[400]
            : 'var(--sendbird-light-background-200)',
          outgoingMessage: accentColor
            ? generateColorVariants(accentColor)[400]
            : 'var(--sendbird-light-primary-400)',
          suggestedReply: 'var(--sendbird-light-background-100)',
        },
      },
      textColor: {
        incomingMessage: botMessageBGColor
          ? getColorBasedOnSaturation(botMessageBGColor)
          : 'var(--sendbird-dark-onlight-01)',
        outgoingMessage: accentColor
          ? getColorBasedOnSaturation(accentColor)
          : 'var(--sendbird-light-ondark-01)',
        sentTime: 'var(--sendbird-dark-onlight-03)',
        sourceInfo: 'var(--sendbird-light-ondark-01)',
        suggestedReply: accentColor ?? 'var(--sendbird-light-primary-300)',
        bottomBanner: {
          poweredBy: '#5E5E5E',
          logo: '#0D0D0D',
        },
      },
      accentColor: accentColor ?? 'var(--sendbird-light-primary-300)',
    },
    dark: {
      bgColor: {
        chatBottom: 'var(--sendbird-dark-background-600)',
        messageInput: 'var(--sendbird-dark-background-500)',
        incomingMessage:
          botMessageBGColor ?? 'var(--sendbird-dark-background-500)',
        outgoingMessage: accentColor ?? 'var(--sendbird-dark-primary-200)',
        suggestedReply: 'var(--sendbird-dark-background-600)',
        bottomBanner: 'var(--sendbird-dark-background-600)',
        loadingScreen: 'var(--sendbird-dark-background-600)',
        hover: {
          // Give 1 level lighter color for hover
          incomingMessage: botMessageBGColor
            ? generateColorVariants(botMessageBGColor)[200]
            : 'var(--sendbird-dark-background-400)',
          // Give 1 level darker color for hover
          outgoingMessage: accentColor
            ? generateColorVariants(accentColor)[400]
            : 'var(--sendbird-dark-primary-300)',
          suggestedReply: 'var(--sendbird-dark-background-500)',
        },
      },
      textColor: {
        outgoingMessage: accentColor
          ? getColorBasedOnSaturation(accentColor)
          : 'var(--sendbird-dark-onlight-01)',
        incomingMessage: botMessageBGColor
          ? getColorBasedOnSaturation(botMessageBGColor)
          : 'var(--sendbird-dark-ondark-01)',
        sentTime: 'var(--sendbird-dark-ondark-03)',
        sourceInfo: 'var(--sendbird-light-ondark-01)',
        suggestedReply: accentColor ?? 'var(--sendbird-dark-primary-200)',
        bottomBanner: {
          poweredBy: 'var(--sendbird-dark-background-200)',
          logo: 'var(--sendbird-dark-background-50)',
        },
      },
      accentColor: accentColor ?? 'var(--sendbird-dark-primary-200)',
    },
  };
}
