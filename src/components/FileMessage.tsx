import '../css/index.css';
import { FileMessage as ChatFileMessage } from '@sendbird/chat/message';
import { useState } from 'react';

import FileViewer from '@uikit/modules/GroupChannel/components/FileViewer';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';
import Avatar from '@uikit/ui/Avatar';
import { isImageMessage, isVideoMessage } from '@uikit/utils';

import BotProfileImage from './BotProfileImage';

type Props = {
  message: ChatFileMessage;
  profileUrl: string;
};

export default function FileMessage(props: Props) {
  const { message, profileUrl } = props;
  const { scrollToBottom } = useGroupChannelContext();
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
          onLoad={() => {
            scrollToBottom();
          }}
          onClick={() => setShowFileViewer(true)}
        />
      )}
      {showFileViewer && (
        <FileViewer
          message={message}
          onCancel={() => setShowFileViewer(false)}
          profile={
            profileUrl != '' ? (
              <Avatar
                src={profileUrl}
                alt="botProfileImage"
                height="32px"
                width="32px"
              />
            ) : (
              <BotProfileImage
                width={32}
                height={32}
                iconWidth={18}
                iconHeight={18}
              />
            )
          }
        />
      )}
    </div>
  );
}
