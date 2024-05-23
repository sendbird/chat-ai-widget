import { resolvePath } from '../../utils';

type APIResponse = {
  bot_style: {
    color: {
      theme: 'light' | 'dark';
      accent_color: string;
      bot_message_color: string;
    };
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
  createUserAndChannel: boolean;
};

type Response = {
  botStyle: {
    theme: 'light' | 'dark';
    accentColor: string;
    botMessageBGColor: string;
    autoOpen: boolean;
  };
  user?: {
    expireAt: number;
    userId: string;
    sessionToken: string;
  };
  channel?: {
    channelUrl: string;
  };
};

export async function getWidgetSetting({
  host,
  botId,
  appId,
  createUserAndChannel,
}: Params): Promise<Response> {
  const params = new URLSearchParams({
    create_user_and_channel: createUserAndChannel ? 'True' : 'False',
  }).toString();

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
