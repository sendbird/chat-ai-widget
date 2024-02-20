import { useQuery } from '@tanstack/react-query';

const DEFAULT_CHANNEL_STYLE = {
  autoOpen: false,
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
        const data = (response.json() as unknown as BotStyleResponse).bot_style;
        return {
          autoOpen: data.auto_open,
          theme: data.color.theme,
          accentColor: data.color.accent_color,
          botMessageBGColor: data.color.bot_message_color,
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
