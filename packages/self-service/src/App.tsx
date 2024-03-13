import '@sendbird/chat-ai-widget/dist/style.css';
import { ChatAiWidget } from '@sendbird/chat-ai-widget';

import useServiceWorker from './hooks/useServiceWorker';
import { uuid } from './utils';

type ChatbotConfig = Window &
  typeof globalThis & {
    chatbotConfig: string[];
  };

const USER_ID = uuid();
const APP_ID = (window as ChatbotConfig).chatbotConfig?.[0];
const BOT_ID = (window as ChatbotConfig).chatbotConfig?.[1];

function App() {
  useServiceWorker();

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
    />
  );
}

export default App;
