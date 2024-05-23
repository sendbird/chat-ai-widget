import { resolvePath } from '../../utils';

type APIResponse = {
  bot_style: {
    color: {
      theme: 'light' | 'dark';
      accent_color: string;
      bot_message_color: string;
    };
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
  createUserAndChannel: boolean;
};

type Response = {
  botStyle: {
    theme: 'light' | 'dark';
    accentColor: string;
    botMessageBGColor: string;
    /** @deprecated We no longer use the autoOpen value from the dashboard. **/
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
