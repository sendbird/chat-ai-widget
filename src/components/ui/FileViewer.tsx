import { FileMessage } from '@sendbird/chat/message';

import { FileViewerView } from '@uikit/modules/GroupChannel/components/FileViewer/FileViewerView';

import { useChatContext } from '../chat/context/ChatProvider';

interface Props {
  message: FileMessage;
  onClose: () => void;
}
// TODO: Remove UIKit
export const FileViewer = ({ message, onClose }: Props) => {
  const { dataSource } = useChatContext();
  return (
    <FileViewerView
      message={message}
      deleteMessage={(message: any) => dataSource.deleteMessage(message)}
      onCancel={onClose}
    />
  );
};
