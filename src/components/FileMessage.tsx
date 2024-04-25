import { FileMessage as ChatFileMessage } from '@sendbird/chat/message';
import styled from 'styled-components';
import { useState } from 'react';
import { useGroupChannelContext } from '@sendbird/uikit-react/GroupChannel/context';
// import { FileViewerComponent } from '@sendbird/uikit-react/ui/FileViewer';
// import {MouseEvent, useState} from 'react';
// import {downloadFileWithUrl, noop} from '../utils';
// import {createPortal} from 'react-dom';
import ImageRenderer from '@sendbird/uikit-react/ui/ImageRenderer';

const Root = styled.div`
  width: 100%;
`;

const Image = styled.img`
  border-radius: 16px;
  width: 100%;
`;

type Props = {
  message: ChatFileMessage;
};

export default function FileMessage(props: Props) {
  const { message } = props;
  const {
    scrollToBottom,
  } = useGroupChannelContext();

  // const [showPreview, setShowPreview] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);

  // const root = document.getElementById('aichatbot-widget-window');

  return (
    <Root>
      {/*{root &&*/}
      {/*  showPreview &&*/}
      {/*  createPortal(*/}
      {/*    <FileViewerComponent*/}
      {/*      profileUrl={message.sender?.profileUrl}*/}
      {/*      nickname={message.sender?.nickname}*/}
      {/*      name={message.name}*/}
      {/*      type={message.type}*/}
      {/*      url={message?.url}*/}
      {/*      isByMe={false}*/}
      {/*      disableDelete={(message.threadInfo?.replyCount || 0) > 0}*/}
      {/*      onClose={() => setShowPreview(false)}*/}
      {/*      onDelete={noop}*/}
      {/*      onDownloadClick={() => downloadFileWithUrl(message.url)}*/}
      {/*    />,*/}
      {/*    root!*/}
      {/*  )}*/}
      {/*<ImageRenderer*/}
      {/*  url={message.url}*/}
      {/*  width={'360px'}*/}
      {/*  height={'270px'}*/}
      {/*/>*/}
      <Image src={message.url} alt={''} onLoad={() => scrollToBottom()} />
    </Root>
  );
}
