import ChatAiWidget from './components/ChatAiWidget'; //import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import { Constant } from './const';

interface Props extends Partial<Constant> {
  applicationId?: string;
  botId?: string;
  hashedKey?: string;
  autoOpen?: boolean;
}

const App = (props: Props) => {
  return (
    <ChatAiWidget
      // applicationId={'125B2432-BB0A-4650-95E2-80810404D526'}
      // botCategory={'ecommerce'}
      // botId={'fintech-demo-bot'}
      applicationId={props.applicationId}
      botCategory={props.botCategory}
      botId={props.botId}
      botNickName={props.botNickName}
      userId={props.userId}
      userNickName={props.userNickName}
      betaMark={props.betaMark}
      customBetaMarkText={props.customBetaMarkText}
      suggestedMessageContent={props.suggestedMessageContent}
      firstMessageData={props.firstMessageData}
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
      enableEmojiFeedback={props.enableEmojiFeedback}
      enableMention={props.enableMention}
      autoOpen={props.autoOpen}
      inputValue={props.inputValue}
    />
  );
};

export default App;
