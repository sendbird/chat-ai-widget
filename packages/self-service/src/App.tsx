import '@sendbird/chat-ai-widget/dist/style.css';
import './index.css';
import {
  ChatAiWidget,
  ChatAiWidgetConfigs,
} from '@sendbird/chat-ai-widget';

type ChatbotConfig = Window &
  typeof globalThis & {
    chatbotConfig: string[];
  };

const APP_ID = (window as ChatbotConfig).chatbotConfig?.[0];
const BOT_ID = (window as ChatbotConfig).chatbotConfig?.[1];
const chatbotConfigs =
  // Available configs are defined in the ChatAiWidget component
  ((window as ChatbotConfig)
    .chatbotConfig?.[2] as unknown as ChatAiWidgetConfigs) ?? {};

function App() {
  return (
    <ChatAiWidget
      applicationId={APP_ID}
      botId={BOT_ID}
      instantConnect={true}
      betaMark={false}
      enableEmojiFeedback={false}
      enableMention={false}
      customUserAgentParam={{
        'chat-ai-widget-deployed': 'True',
      }}
      {...chatbotConfigs}
    />
  );
}

export default App;
