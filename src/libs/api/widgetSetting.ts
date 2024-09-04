import { SendbirdError } from '@sendbird/chat';

import { noop, resolvePath } from '../../utils';

type APIResponse = {
  bot?: {
    reply_to_file?: boolean;
  };
  bot_style: {
    color: {
      theme: 'light' | 'dark';
      accent_color: string;
      bot_message_color: string;
    };
    toggle_button_url?: string | null;
    auto_open: boolean;
  };
  user?: {
    expire_at: number;
    user_id: string;
    session_token: string;
  };
  channel?: {
    channel_url: string;
  };
};

type Params = {
  host: string;
  botId: string;
  appId: string;
  createUserAndChannel?: boolean;
  createChannel?: boolean;
  userId?: string;
  // sessionToken?: string;
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

export async function getWidgetSetting({
  host,
  botId,
  appId,
  createUserAndChannel,
  createChannel,
  userId,
  locale,
}: Params): Promise<Response> {
  // const headers = sessionToken ? { 'Session-Key': sessionToken } : undefined;
  const params = asQueryParams({
    create_user_and_channel: asBoolString(createUserAndChannel),
    create_channel: asBoolString(createChannel),
    user_id: userId,
    locale,
  });
  const path = resolvePath(host, `/v3/bots/${botId}/${appId}/widget_setting?${params}`);

  const response = await fetch(path);
  const result = await response.json();
  if (!response.ok) {
    throw new SendbirdError(result);
  }

  const json = result as APIResponse;
  return {
    bot: {
      // FIXME(file-support): default set to false
      replyToFile: json.bot?.reply_to_file ?? false,
    },
    botStyle: {
      theme: json.bot_style.color.theme,
      accentColor: json.bot_style.color.accent_color,
      botMessageBGColor: json.bot_style.color.bot_message_color,
      toggleButtonUrl: json.bot_style.toggle_button_url ?? undefined,
      autoOpen: json.bot_style.auto_open,
    },
    user: json.user
      ? {
          expireAt: json.user.expire_at,
          userId: json.user.user_id,
          sessionToken: json.user.session_token,
        }
      : undefined,
    channel: json.channel
      ? {
          channelUrl: json.channel.channel_url,
        }
      : undefined,
  };
}

function asBoolString(value?: boolean | null): 'True' | 'False' | undefined {
  if (value === undefined || value === null) return undefined;
  return value ? 'True' : 'False';
}

function asQueryParams(obj: object) {
  return Object.entries(obj)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

export const widgetSettingHandler = (
  strategy: 'auto' | 'manual',
  useCachedSession: boolean,
  params: Omit<Params, 'createChannel' | 'createUserAndChannel'>,
) => {
  type Callbacks = {
    BotConfigs: (bot: Response['bot']) => void;
    BotStyle: (botStyle: Response['botStyle']) => void;
    AutoNonCached: (response: { user: ResponseUser; channel: ResponseChannel }) => void;
    AutoCached: (response: { channel?: ResponseChannel }) => void;
    ManualNonCached: (response?: { channel: ResponseChannel }) => void;
    ManualCached: (response: { channel?: ResponseChannel }) => void;
    Error: (error: Error) => void;
  };

  const callbacks: {
    onError: Callbacks['Error'];
    onGetBotConfigs: Callbacks['BotConfigs'];
    onGetBotStyle: Callbacks['BotStyle'];
    onAutoNonCached: Callbacks['AutoNonCached'];
    onAutoCached: Callbacks['AutoCached'];
    onManualNonCached: Callbacks['ManualNonCached'];
    onManualCached: Callbacks['ManualCached'];
  } = {
    onError: noop,
    onGetBotConfigs: noop,
    onGetBotStyle: noop,
    onAutoNonCached: noop,
    onAutoCached: noop,
    onManualNonCached: noop,
    onManualCached: noop,
  };

  const handlers = {
    onError: (callback?: Callbacks['Error']) => {
      if (callback) callbacks.onError = callback;
      return handlers;
    },
    onGetBotConfigs: (callback: Callbacks['BotConfigs']) => {
      callbacks.onGetBotConfigs = callback;
      return handlers;
    },
    onGetBotStyle: (callback: Callbacks['BotStyle']) => {
      callbacks.onGetBotStyle = callback;
      return handlers;
    },
    onAutoNonCached: (callback: Callbacks['AutoNonCached']) => {
      callbacks.onAutoNonCached = callback;
      return handlers;
    },
    onAutoCached: (callback: Callbacks['AutoCached']) => {
      callbacks.onAutoCached = callback;
      return handlers;
    },
    onManualCached: (callback: Callbacks['ManualCached']) => {
      callbacks.onManualCached = callback;
      return handlers;
    },
    onManualNonCached: (callback: Callbacks['ManualNonCached']) => {
      callbacks.onManualNonCached = callback;
      return handlers;
    },
    get: async () => {
      try {
        const response = await getWidgetSetting({
          host: params.host,
          appId: params.appId,
          botId: params.botId,
          ...getParamsByStrategy(strategy, useCachedSession, params),
        });

        callbacks.onGetBotConfigs(response.bot);
        callbacks.onGetBotStyle(response.botStyle);
        if (strategy === 'auto') handleAutoStrategy(response);
        if (strategy === 'manual') handleManualStrategy(response);
      } catch (error) {
        if (error instanceof Error) callbacks.onError(error);
      }
    },
  };

  function handleAutoStrategy(response: Response) {
    if (useCachedSession) {
      callbacks.onAutoCached({ channel: response.channel });
    } else {
      if (response.channel && response.user) {
        callbacks.onAutoNonCached({
          channel: response.channel,
          user: response.user,
        });
      }
    }
  }

  function handleManualStrategy(response: Response) {
    if (useCachedSession) {
      callbacks.onManualCached({ channel: response.channel });
    } else {
      if (response.channel) {
        callbacks.onManualNonCached({ channel: response.channel });
      } else {
        // Legacy manual
        callbacks.onManualNonCached();
      }
    }
  }

  return handlers;
};

function getParamsByStrategy(
  strategy: 'auto' | 'manual',
  useCachedSession: boolean,
  params: Omit<Params, 'createChannel' | 'createUserAndChannel'>,
) {
  if (strategy === 'auto') {
    if (useCachedSession) {
      return { userId: params.userId };
    } else {
      return { createUserAndChannel: true, locale: params.locale };
    }
  } else {
    if (useCachedSession) {
      return {};
      // return { userId: params.userId };
    } else {
      return {};
      // return {
      //   createChannel: true,
      //   userId: params.userId,
      //   sessionToken: params.sessionToken,
      // };
    }
  }
}
