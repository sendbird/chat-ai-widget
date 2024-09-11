import { FileMessage } from '@sendbird/chat/message';

import { FileViewerView } from '@uikit/modules/GroupChannel/components/FileViewer/FileViewerView';

interface Props {
  message: FileMessage;
  onClose: () => void;
}
// TODO: Remove UIKit
export const FileViewer = ({ message, onClose }: Props) => {
  return <FileViewerView message={message} onCancel={onClose} />;
};
