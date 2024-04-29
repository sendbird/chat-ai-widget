import '../css/index.css';
import { FileMessage as ChatFileMessage } from '@sendbird/chat/message';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';
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
    <div className='sendbird-ai-widget-file-message-root'>
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
      <img
        className='sendbird-ai-widget-file-message-image'
        src={message.url}
        alt={''}
        onLoad={() => {
          scrollToBottom();
        }}
      />
    </div>
  );
}
