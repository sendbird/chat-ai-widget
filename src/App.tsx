import ChatAiWidget, { ChatAiWidgetProps } from './components/widget/ChatAiWidget';

const App = (props: ChatAiWidgetProps) => {
  return (
    <ChatAiWidget
      {...props}
      applicationId={'B13D7DE1-7F2B-4343-A896-E812E2BBC67A'}
      botId={'onboarding_bot'}
      apiHost={'https://api-no2.sendbirdtest.com'}
      wsHost={'wss://ws-no2.sendbirdtest.com'}
    />
  );
};

export default App;
