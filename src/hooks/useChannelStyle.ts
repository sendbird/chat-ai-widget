// import { useQuery } from "@tanstack/react-query";

export const useChannelStyle = () => {
  // const { data } = useQuery({
  //   queryKey: ['getChannelStyle'],
  //   queryFn: async () => {
  //     // const response = await fetch('/api/bot-style');
  //     // const data = response.json().bot_style;
  //     await delay(500);
  //     return {
  //       theme: data.theme,
  //       accentColor: data?.accent_color,
  //       botMessageBGColor: data?.bot_message_color,
  //     }
  //   },
  // })
  return {
    theme: 'light',
    accentColor: '#de360b',
    botMessageBGColor: '#ECECEC',
  };
};
