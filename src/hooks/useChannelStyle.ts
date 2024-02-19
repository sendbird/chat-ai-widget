// import { useQuery } from "@tanstack/react-query";

// import { useConstantState } from "../context/ConstantContext";

export const useChannelStyle = () => {
  // const { applicationId: appId, botId } = useConstantState();
  // const { data } = useQuery({
  //   queryKey: ['getChannelStyle', appId, botId],
  //   queryFn: async () => {
  //     const response = await fetch(`/api/bots/${botId}/${appId}/bot_style`);
  //     const data = response.json().bot_style;
  //     return {
  //       autoOpen: data.auto_open,
  //       theme: data.color.theme,
  //       accentColor: data.color.accent_color,
  //       botMessageBGColor: data.color.bot_message_color,
  //     }
  //   },
  // })
  return {
    theme: 'light',
    accentColor: '#de360b',
    botMessageBGColor: '#ECECEC',
  };
};
