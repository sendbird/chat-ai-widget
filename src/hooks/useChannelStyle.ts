import { useQuery } from '@tanstack/react-query';

const DEFAULT_CHANNEL_STYLE = {
  autoOpen: false,
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
  const { data } = useQuery({
    enabled: appId != null && botId != null,
    queryKey: ['getChannelStyle', appId, botId],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api-${appId}.sendbird.com/v3/bots/${botId}/${appId}/bot_style`
        );
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
        return DEFAULT_CHANNEL_STYLE;
      }
    },
  });
  if (data == null) {
    return DEFAULT_CHANNEL_STYLE;
  }
  return data;
};
