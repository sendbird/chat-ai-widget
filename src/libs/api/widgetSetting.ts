import { resolvePath } from '../../utils';

type APIResponse = {
  bot_style: {
    color: {
      theme: 'light' | 'dark';
      accent_color: string;
      bot_message_color: string;
    };
    toggle_button_url?: string | null;
    /** @deprecated We no longer use the autoOpen value from the dashboard. **/
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
};

type Response = {
  botStyle: {
    theme: 'light' | 'dark';
    accentColor: string;
    botMessageBGColor: string;
    toggleButtonUrl?: string;
    /** @deprecated We no longer use the autoOpen value from the dashboard. **/
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
}: Params): Promise<Response> {
  // const headers = sessionToken ? { 'Session-Key': sessionToken } : undefined;
  const params = asQueryParams({
    create_user_and_channel: asBoolString(createUserAndChannel),
    create_channel: asBoolString(createChannel),
    user_id: userId,
  });
  const path = resolvePath(
    host,
    `/v3/bots/${botId}/${appId}/widget_setting?${params}`
  );

  const response = await fetch(path);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Something went wrong');
  }

  const json = result as APIResponse;
  return {
    botStyle: {
      theme: json.bot_style.color.theme,
      accentColor: json.bot_style.color.accent_color,
      botMessageBGColor: json.bot_style.color.bot_message_color,
      toggleButtonUrl: json.bot_style.toggle_button_url ?? undefined,
      /**
       * NOTE: autoOpen can no longer be configured from the dashboard, so customers will no longer be able to disable autoOpen.
       *  Therefore, set it to false and remove it so that it is not used.
       * */
      autoOpen: false, //json.bot_style.auto_open,
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
  params: Omit<Params, 'createChannel' | 'createUserAndChannel'>
) => {
  type Callbacks = {
    BotStyle: (botStyle: Response['botStyle']) => void;
    AutoNonCached: (response: {
      user: ResponseUser;
      channel: ResponseChannel;
    }) => void;
    AutoCached: (response: { channel?: ResponseChannel }) => void;
    ManualNonCached: (response?: { channel: ResponseChannel }) => void;
    ManualCached: (response: { channel?: ResponseChannel }) => void;
  };

  const callbacks: {
    onGetBotStyle: Callbacks['BotStyle'];
    onAutoNonCached: Callbacks['AutoNonCached'];
    onAutoCached: Callbacks['AutoCached'];
    onManualNonCached: Callbacks['ManualNonCached'];
    onManualCached: Callbacks['ManualCached'];
  } = {
    onGetBotStyle: () => {
      /* empty */
    },
    onAutoNonCached: () => {
      /* empty */
    },
    onAutoCached: () => {
      /* empty */
    },
    onManualNonCached: () => {
      /* empty */
    },
    onManualCached: () => {
      /* empty */
    },
  };

  const handlers = {
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
      const response = await getWidgetSetting({
        host: params.host,
        appId: params.appId,
        botId: params.botId,
        ...getParamsByStrategy(strategy, useCachedSession, params),
      });

      callbacks.onGetBotStyle(response.botStyle);
      if (strategy === 'auto') handleAutoStrategy(response);
      if (strategy === 'manual') handleManualStrategy(response);
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
  params: Omit<Params, 'createChannel' | 'createUserAndChannel'>
) {
  if (strategy === 'auto') {
    if (useCachedSession) {
      return { userId: params.userId };
    } else {
      return { createUserAndChannel: true };
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
