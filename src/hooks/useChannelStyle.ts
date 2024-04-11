import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import useWidgetLocalStorage, {
  type WidgetLocalStorageValue,
  saveToLocalStorage,
} from './useWidgetLocalStorage';
import { useConstantState } from '../context/ConstantContext';
import { isPastTime } from '../utils';

const DEFAULT_CHANNEL_STYLE = {
  theme: 'dark',
  accentColor: '#742DDD',
  botMessageBGColor: '#EEEEEE',
};

interface BotStyleResponse {
  bot_style: {
    auto_open: boolean;
    color: {
      accent_color: string;
      bot_message_color: string;
      theme: 'light' | 'dark';
    };
  };
  user?: {
    expire_at: number;
    user_id: string;
    session_token: string;
  };
  channel?: {
    channel_url: string;
  };
}

export function isUserAndChannelCreationNeeded(
  userAndChannelInfo: WidgetLocalStorageValue
) {
  const isInfoMissing = userAndChannelInfo?.userId == null;
  const isInfoExpired =
    userAndChannelInfo != null && isPastTime(userAndChannelInfo.expireAt);

  return isInfoMissing || isInfoExpired;
}

export const useChannelStyle = () => {
  const {
    applicationId: appId,
    botId,
    userId,
    configureSession,
  } = useConstantState();
  const manualChannelCreationNeeded =
    userId != null && configureSession != null;
  const userAndChannelInfoFromStorage = useWidgetLocalStorage();

  const newUserAndChannelCreationNeeded =
    !manualChannelCreationNeeded &&
    isUserAndChannelCreationNeeded(userAndChannelInfoFromStorage);

  const { data, isPending, isLoading, isFetching } = useQuery({
    enabled: !!appId && !!botId,
    queryKey: ['getChannelStyle', appId, botId],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api-${appId}.sendbirdtest.com/v3/bots/${botId}/${appId}/widget_setting?create_user_and_channel=${
            newUserAndChannelCreationNeeded ? 'True' : 'False'
          }`
        );
        if (!response.ok) {
          throw new Error(
            (await response.json()).message || 'Something went wrong'
          );
        }
        const data = await (response.json() as unknown as BotStyleResponse);
        const { bot_style, user, channel } = data;

        if (user != null && channel != null) {
          saveToLocalStorage({
            expireAt: user.expire_at,
            userId: user.user_id,
            sessionToken: user.session_token,
            channelUrl: channel.channel_url,
          });
        }
        return {
          autoOpen: bot_style.auto_open,
          theme: bot_style.color.theme,
          accentColor: bot_style.color.accent_color,
          botMessageBGColor: bot_style.color.bot_message_color,
        };
      } catch (error) {
        console.error(error);
        return {
          ...DEFAULT_CHANNEL_STYLE,
          isError: true,
          errorMessage: (error as Error)?.message,
        };
      }
    },
  });
  const fetching = isPending || isLoading || isFetching;
  return useMemo(() => {
    if (data == null) return { ...DEFAULT_CHANNEL_STYLE, isFetching: fetching };
    return { ...data, isFetching: fetching };
  }, [data != null, fetching]);
};
