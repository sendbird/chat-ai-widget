import '../css/index.css';
import { FileMessage as ChatFileMessage } from '@sendbird/chat/message';
import { match } from 'ts-pattern';

import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';
import { isVideoMessage } from '@uikit/utils';
// import { FileViewerComponent } from '@sendbird/uikit-react/ui/FileViewer';
// import {downloadFileWithUrl, noop} from '../utils';
// import {createPortal} from 'react-dom';

type Props = {
  message: ChatFileMessage;
};

export default function FileMessage(props: Props) {
  const { message } = props;
  const { scrollToBottom } = useGroupChannelContext();

  // const root = document.getElementById('aichatbot-widget-window');

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
      {match(message)
        .when(isVideoMessage, () => (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video controls className="sendbird-ai-widget-file-message">
            <source src={message.url} type={message.type} />
          </video>
        ))
        .otherwise(() => (
          <img
            className="sendbird-ai-widget-file-message"
            src={message.url}
            alt={''}
            onLoad={() => {
              scrollToBottom();
            }}
          />
        ))}
    </div>
  );
}
