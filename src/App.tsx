import ChatAiWidget from './components/ChatAiWidget'; //import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import { Constant } from './const';

interface Props extends Partial<Constant> {
  applicationId?: string;
  botId?: string;
  autoOpen?: boolean;
  renderWidgetToggleButton?: (props: {
    onClick: () => void;
    accentColor: string;
    isOpen: boolean;
  }) => React.ReactElement;
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
      firstMessageData={props.firstMessageData}
      createGroupChannelParams={props.createGroupChannelParams}
      chatBottomContent={props.chatBottomContent}
      messageBottomContent={props.messageBottomContent}
      replacementTextList={props.replacementTextList}
      instantConnect={props.instantConnect}
      customRefreshComponent={props.customRefreshComponent}
      configureSession={props.configureSession}
      stringSet={props.stringSet}
      enableSourceMessage={props.enableSourceMessage}
      enableEmojiFeedback={props.enableEmojiFeedback}
      enableMention={props.enableMention}
      customUserAgentParam={props.customUserAgentParam}
      autoOpen={props.autoOpen}
      renderWidgetToggleButton={props.renderWidgetToggleButton}
    />
  );
};

export default App;
