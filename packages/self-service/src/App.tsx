import '@sendbird/chat-ai-widget/dist/style.css';
import './index.css';
import {
  ChatAiWidget,
  // Remove below line once 1.3.5 released
  // eslint-disable-next-line import/named
  ChatAiWidgetConfigs,
} from '@sendbird/chat-ai-widget';

import { uuid } from './utils';

type ChatbotConfig = Window &
  typeof globalThis & {
    chatbotConfig: string[];
  };

const USER_ID = uuid();
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
