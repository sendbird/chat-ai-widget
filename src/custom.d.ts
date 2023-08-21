declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '@sendbird/chat-ai-widget' {
  import ChatAiWidget = require('@sendbird/chat-ai-widget');
  const ChatAiWidget: ChatAiWidget.ChatAiWidget;
  const Chat: ChatAiWidget.Chat;
  export { ChatAiWidget, Chat };
}
