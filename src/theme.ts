interface CommonTheme {
  bgColor: {
    messageInput: string;
    incomingMessage: string;
    suggestedReply: string;
    hover: {
      incomingMessage: string;
      suggestedReply: string;
    };
  };
  textColor: {
    incomingMessage: string;
    outgoingMessage: string;
    sentTime: string;
    chatBottom: string;
    sourceInfo: string;
  };
}
interface Theme {
  light: CommonTheme;
  dark: CommonTheme;
}

export function getTheme(): Theme {
  return {
    light: {
      bgColor: {
        messageInput: 'var(--sendbird-light-background-100)',
        incomingMessage: 'var(--sendbird-light-background-100)',
        suggestedReply: 'var(--sendbird-light-background-50)',
        hover: {
          incomingMessage: 'var(--sendbird-light-background-200)',
          suggestedReply: 'var(--sendbird-light-background-100)',
        },
      },
      textColor: {
        incomingMessage: 'var(--sendbird-dark-onlight-01)',
        outgoingMessage: 'var(--sendbird-light-ondark-01)',
        sentTime: 'var(--sendbird-dark-onlight-03)',
        chatBottom: 'var(--sendbird-light-ondark-01)',
        sourceInfo: 'var(--sendbird-light-ondark-01)',
      },
    },
    dark: {
      bgColor: {
        messageInput: 'var(--sendbird-dark-background-500)',
        incomingMessage: 'var(--sendbird-dark-background-500)',
        suggestedReply: 'var(--sendbird-dark-background-600)',
        hover: {
          incomingMessage: 'var(--sendbird-dark-background-400)',
          suggestedReply: 'var(--sendbird-dark-background-500)',
        },
      },
      textColor: {
        incomingMessage: 'var(--sendbird-dark-ondark-01)',
        outgoingMessage: 'var(--sendbird-light-onlight-01)',
        sentTime: 'var(--sendbird-dark-ondark-03)',
        chatBottom: 'var(--sendbird-light-ondark-01)',
        sourceInfo: 'var(--sendbird-light-ondark-01)',
      },
    },
  };
}
