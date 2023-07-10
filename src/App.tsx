import ChatAiWidget from './components/ChatAiWidget'; //import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import { Constant } from './const';

interface Props extends Partial<Constant> {
  applicationId: string;
  botId: string;
}

const App = (props: Props) => {
  return (
    <ChatAiWidget
      applicationId={props.applicationId}
      botId={props.botId}
      botNickName={props.botNickName}
      betaMark={props.betaMark}
      suggestedMessageContent={props.suggestedMessageContent}
      createGroupChannelParams={props.createGroupChannelParams}
      startingPageContent={props.startingPageContent}
      chatBottomContent={props.chatBottomContent}
      messageBottomContent={props.messageBottomContent}
      replacementTextList={props.replacementTextList}
    />
  );
};

export default App;
