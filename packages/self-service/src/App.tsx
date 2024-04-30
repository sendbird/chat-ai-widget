import '@sendbird/chat-ai-widget/dist/style.css';
import './index.css';
import {
  ChatAiWidget,
  ChatAiWidgetConfigs,
} from '@sendbird/chat-ai-widget';

type AppId = string;
type BotId = string;
type ChatbotWindow = typeof window & {
  // Available configs are defined in the ChatAiWidget component
  chatbotConfig?: [AppId, BotId, ChatAiWidgetConfigs];
};

const [appId, botId, configs] = (window as ChatbotWindow).chatbotConfig ?? [];

function App() {
  const { serviceName, ...restConfigs } = configs ?? {};
  return (
    <ChatAiWidget
      applicationId={appId}
      botId={botId}
      instantConnect={true}
      betaMark={false}
      enableEmojiFeedback={false}
      enableMention={false}
      customUserAgentParam={{ 'chat-ai-widget-deployed': 'True' }}
      serviceName={serviceName ?? 'genai-self-service'}
      {...restConfigs}
    />
  );
}

export default App;
