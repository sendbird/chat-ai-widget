import ChatAiWidget from './components/ChatAiWidget'; //import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import { Constant } from './const';

interface Props extends Partial<Constant> {
  applicationId?: string;
  botId?: string;
  hashedKey?: string;
}

const App = (props: Props) => {
  return (
    <ChatAiWidget
      applicationId={props.applicationId}
      botId={props.botId}
      botNickName={props.botNickName}
      userId={props.userId}
      userNickName={props.userNickName}
      betaMark={props.betaMark}
      customBetaMarkText={props.customBetaMarkText}
      suggestedMessageContent={props.suggestedMessageContent}
      createGroupChannelParams={props.createGroupChannelParams}
      startingPageContent={props.startingPageContent}
      chatBottomContent={props.chatBottomContent}
      messageBottomContent={props.messageBottomContent}
      replacementTextList={props.replacementTextList}
      hashedKey={props.hashedKey}
      instantConnect={props.instantConnect}
      customRefreshComponent={props.customRefreshComponent}
      configureSession={props.configureSession}
      enableSourceMessage={props.enableSourceMessage}
    />
  );
};

export default App;
