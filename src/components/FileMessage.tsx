import '../css/index.css';
import { FileMessage as ChatFileMessage } from '@sendbird/chat/message';
import { useState } from 'react';

import { isImageMessage, isVideoMessage } from '@uikit/utils';

import { useChatContext } from './chat/context/ChatProvider';
import { FileViewer } from './ui/FileViewer';

type Props = {
  message: ChatFileMessage;
};

export default function FileMessage(props: Props) {
  const { message } = props;
  const { scrollSource } = useChatContext();
  const [showFileViewer, setShowFileViewer] = useState(false);

  // const root = document.getElementById('aichatbot-widget-window');

  /**
   * Currently only video and image file messages will be sent.
   * TODO: In the future, we may support other file types. When we do, we need to update the logic.
   */
  return (
    <div className="sendbird-ai-widget-file-message-root">
      {isVideoMessage(message) && (
        <video controls className="sendbird-ai-widget-file-message">
          <source src={message.url} type={message.type} />
          <track kind="captions" />
        </video>
      )}
      {isImageMessage(message) && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <img
          className="sendbird-ai-widget-file-message"
          src={message.url}
          alt={''}
          onLoad={() => scrollSource.scrollPubSub.publish('scrollToBottom', {})}
          onClick={() => setShowFileViewer(true)}
        />
      )}
      {showFileViewer && <FileViewer message={message} onClose={() => setShowFileViewer(false)} />}
    </div>
  );
}
