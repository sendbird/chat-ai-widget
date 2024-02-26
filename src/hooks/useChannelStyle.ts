import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const DEFAULT_CHANNEL_STYLE = {
  autoOpen: true,
  theme: 'light',
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
}
export const useChannelStyle = ({
  appId,
  botId,
}: {
  appId: string;
  botId: string;
}) => {
  const { data, isFetching } = useQuery({
    enabled: !!appId && !!botId,
    queryKey: ['getChannelStyle', appId, botId],
    retry: 0,
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api-${appId}.sendbird.com/v3/bots/${botId}/${appId}/bot_style`
        );
        // TODO: Remove this when the API is available on every server regions
        if (response.status === 404) {
          return DEFAULT_CHANNEL_STYLE;
        }
        if (!response.ok) {
          throw new Error(
            (await response.json()).message || 'Something went wrong'
          );
        }
        const data = await (response.json() as unknown as BotStyleResponse);
        const { bot_style } = data;
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
  return useMemo(() => {
    if (data == null) return { ...DEFAULT_CHANNEL_STYLE, isFetching };
    return { ...data, isFetching };
  }, [data != null, isFetching]);
};
