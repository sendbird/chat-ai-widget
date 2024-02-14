import '@sendbird/chat-ai-widget/dist/style.css';
import { ChatAiWidget } from '@sendbird/chat-ai-widget';

import { uuid } from './utils';

type ChatbotConfig = Window &
  typeof globalThis & {
    chatbotConfig: {
      appId: string;
      botId: string;
    };
  };

const USER_ID = uuid();
const APP_ID = (window as ChatbotConfig).chatbotConfig?.appId;
const BOT_ID = (window as ChatbotConfig).chatbotConfig?.botId;

function App() {
  return (
    <ChatAiWidget
      applicationId={APP_ID}
      botId={BOT_ID}
      userId={USER_ID}
      instantConnect={true}
      betaMark={false}
    />
  );
}

export default App;
