import { FileMessage } from '@sendbird/chat/message';

import { FileViewerView } from '@sendbird/uikit-react/src/modules/GroupChannel/components/FileViewer/FileViewerView';

interface Props {
  message: FileMessage;
  onClose: () => void;
}
// TODO: Remove UIKit
export const FileViewer = ({ message, onClose }: Props) => {
  return <FileViewerView message={message} onCancel={onClose} />;
};
