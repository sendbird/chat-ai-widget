import ChatAiWidget from './components/ChatAiWidget'; //import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import { Constant } from './const';

export interface MessageDataFunctionCallProps {
  name: string;
  response_text: string;
  status_code: number;
}
export type MessageDataFunctionCall = (props: MessageDataFunctionCallProps) => void;
export type MessageDataFunctionCalls = Record<string, MessageDataFunctionCall>;

interface Props extends Partial<Constant> {
  applicationId?: string;
  botId?: string;
  autoOpen?: boolean;
  renderWidgetToggleButton?: (props: {
    onClick: () => void;
    accentColor: string;
    isOpen: boolean;
  }) => React.ReactElement;
  messageDataFunctionCalls?: MessageDataFunctionCalls;
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
      enableMobileView={props.enableMobileView}
      customUserAgentParam={props.customUserAgentParam}
      autoOpen={props.autoOpen}
      renderWidgetToggleButton={props.renderWidgetToggleButton}
      serviceName={props.serviceName}
      messageDataFunctionCalls={props.messageDataFunctionCalls}
    />
  );
};

export default App;
