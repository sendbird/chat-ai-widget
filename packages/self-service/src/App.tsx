import '@sendbird/chat-ai-widget/dist/style.css';
import './index.css';
import { ChatAiWidget } from '@sendbird/chat-ai-widget';

import { uuid } from './utils';

type ChatbotConfig = Window &
  typeof globalThis & {
    chatbotConfig: string[];
  };
// Available props are defined in the ChatAiWidget component
type ChatbotProps = Record<never, never>;

const USER_ID = uuid();
const APP_ID = (window as ChatbotConfig).chatbotConfig?.[0];
const BOT_ID = (window as ChatbotConfig).chatbotConfig?.[1];
const chatbotConfigs =
  ((window as ChatbotConfig).chatbotConfig?.[2] as ChatbotProps) ?? {};

function App() {
  return (
    <ChatAiWidget
      applicationId={APP_ID}
      botId={BOT_ID}
      userId={USER_ID}
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
