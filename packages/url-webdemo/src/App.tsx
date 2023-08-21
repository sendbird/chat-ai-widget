import '@sendbird/chat-ai-widget/dist/style.css';
import { Chat as ChatAiWidget } from '@sendbird/chat-ai-widget';

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
        // TODO: remove this after 1.0.8 is released
        isOpen={true}
        applicationId={initialState.appId}
        botId={hashedKey}
        botNickName={initialState.botNickName}
        suggestedMessageContent={initialState.suggestedMessageContent}
        createGroupChannelParams={initialState.createGroupChannelParams}
        startingPageContent={initialState.startingPageContent}
        replacementTextList={initialState.replacementTextList}
        messageBottomContent={initialState.messageBottomContent}
        customBetaMarkText={isWidget ? 'BETA' : 'DEMO'}
        instantConnect={true}
        customRefreshComponent={initialState.customRefreshComponent}
      />
    </div>
  );
}

export default App;
