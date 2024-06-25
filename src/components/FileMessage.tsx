import '../css/index.css';
import { FileMessage as ChatFileMessage } from '@sendbird/chat/message';
import { useState } from 'react';

import useLongPress from '@uikit/hooks/useLongPress';
import FileViewer from '@uikit/modules/GroupChannel/components/FileViewer';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';
import { isImageMessage, isSentMessage, isVideoMessage } from '@uikit/utils';

import { noop } from '../utils';

// import { FileViewerComponent } from '@sendbird/uikit-react/ui/FileViewer';
// import {downloadFileWithUrl, noop} from '../utils';
// import {createPortal} from 'react-dom';

type Props = {
  message: ChatFileMessage;
};

export default function FileMessage(props: Props) {
  const { message } = props;
  const { scrollToBottom } = useGroupChannelContext();
  const [showFileViewer, setShowFileViewer] = useState(false);

  // const root = document.getElementById('aichatbot-widget-window');

  const onClickHandler = useLongPress({
    onLongPress: noop,
    onClick: () => {
      if (isSentMessage(message)) {
        setShowFileViewer(true);
      }
    },
  });

  /**
   * Currently only video and image file messages will be sent.
   * TODO: In the future, we may support other file types. When we do, we need to update the logic.
   */
  return (
    <div className="sendbird-ai-widget-file-message-root">
      {/*Please keep the commented code for referencing in the future when adding file viewer*/}
      {/*
      {root &&
        showPreview &&
        createPortal(
          <FileViewerComponent
            profileUrl={message.sender?.profileUrl}
            nickname={message.sender?.nickname}
            name={message.name}
            type={message.type}
            url={message?.url}
            isByMe={false}
            disableDelete={(message.threadInfo?.replyCount || 0) > 0}
            onClose={() => setShowPreview(false)}
            onDelete={noop}
            onDownloadClick={() => downloadFileWithUrl(message.url)}
          />,
          root!
        )}
        */}
      {isVideoMessage(message) && (
        <video controls className="sendbird-ai-widget-file-message">
          <source src={message.url} type={message.type} />
          <track kind="captions" />
        </video>
      )}
      {isImageMessage(message) && (
        <img
          className="sendbird-ai-widget-file-message"
          src={message.url}
          alt={''}
          onLoad={() => {
            scrollToBottom();
          }}
          {...onClickHandler}
        />
      )}
      {showFileViewer && (
        <FileViewer
          message={message}
          onCancel={() => setShowFileViewer(false)}
        />
      )}
    </div>
  );
}
