import '@sendbird/chat-ai-widget/dist/style.css';
import { ChatWindow as ChatAiWidget } from '@sendbird/chat-ai-widget';
import './index.css';

import { DEMO_CONSTANTS, DemoConstant } from './const';
import { useGetHashedKey } from './hooks/useGetHashedKey';

function App() {
  const [hashedKey, isWidget]: [string, boolean | null] = useGetHashedKey(); // show loading if not there.
  // @fixme -> initialState is DEMO_CONSTANTS.webDemo when isWidget is null
  // this is unexpected behavior. should be fixed.
  const initialState: DemoConstant = isWidget
    ? DEMO_CONSTANTS.widgetDemo
    : DEMO_CONSTANTS.webDemo;

  if (isWidget === null) return null;

  return (
    <div style={{ height: '100vh' }}>
      <ChatAiWidget
        applicationId={initialState.appId}
        botId={hashedKey}
        botNickName={initialState.botNickName}
        suggestedMessageContent={initialState.suggestedMessageContent}
        createGroupChannelParams={initialState.createGroupChannelParams}
        replacementTextList={initialState.replacementTextList}
        messageBottomContent={initialState.messageBottomContent}
        customBetaMarkText={initialState.customBetaMarkText}
        betaMark={initialState.betaMark}
        customRefreshComponent={initialState.customRefreshComponent}
        chatBottomContent={initialState.chatBottomContent}
        enableSourceMessage={initialState.enableSourceMessage}
        enableMention={initialState.enableMention}
        enableEmojiFeedback={initialState.enableEmojiFeedback}
        instantConnect={true}
      />
    </div>
  );
}

export default App;
