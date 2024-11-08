import { User } from '@sendbird/chat';
import {
  type GroupChannel,
  type SendbirdGroupChat,
} from "@sendbird/chat/groupChannel";
import * as sendbirdSelectors from "@sendbird/uikit-react/sendbirdSelectors";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { useSbConnectionState } from "../context/SBConnectionContext";

type APIResponse = {
  bot?: {
    reply_to_file?: boolean;
  };
  bot_style: {
    color: {
      theme: "light" | "dark";
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

export function useCreateGroupChannel(
  applicationId: string,
  botId: string
): [string | null, string | null, string | null, boolean] {
  const [channel, setChannel] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [creating, setCreating] = useState<boolean>(false);
  const { setSbConnectionStatus, firstMessage } = useSbConnectionState();

  const headers = {
    "Content-Type": "application/json",
  };

  async function createGroupChannelWithWidgetSettingsAPI() {
    const response = await axios.get(
      `https://api-${applicationId}.sendbird.com/v3/bots/${botId}/${applicationId?.toUpperCase()}/widget_setting`,
      {
        params: {
          create_user_and_channel: "True",
        },
        headers,
      }
    );

    const json = response.data as unknown as APIResponse;
    return {
      bot: {
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

  const createAndSetNewChannel = useCallback(async () => {
    if (!applicationId || !botId) {
      return;
    }

    try {
      setCreating(true);

      const botAndChannelData = await createGroupChannelWithWidgetSettingsAPI();

      if (!botAndChannelData.channel?.channelUrl) {
        throw new Error(
          `Channel not created: ${botAndChannelData.channel?.channelUrl}`
        );
      }

      if (!botAndChannelData.user?.userId) {
        throw new Error(
          `UserId not created: ${botAndChannelData.user?.userId}`
        );
      }

      setUserId(botAndChannelData.user.userId);
      setChannel(botAndChannelData.channel.channelUrl);
      setSessionToken(botAndChannelData.user?.sessionToken);
    } catch (error) {
      console.error(error);
    } finally {
      setCreating(false);
      setSbConnectionStatus("CONNECTED");
    }
    // we dont want to watchout for change of whole objects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botId, firstMessage]);

  useEffect(() => {
    // console.log('## useCreateGroupChannel: ', currentUser, botUser, sb);
    if (botId) {
      // fixme: dont need to move this to an outer function,
      // it causes scope snapshot issues
      // this case is okay because there are only setters inside createAndSetNewChannel
      createAndSetNewChannel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botId, firstMessage]);

  return [channel, userId, sessionToken, creating];
}
