import MessageFeedbackFailedModal from '@sendbird/uikit-react/src/ui/MessageFeedbackFailedModal';

import { elementIds } from '../../const';

interface Props {
  message: string;
  onClose: () => void;
}

// TODO: Remove UIKit
export const AlertModal = ({ message, onClose }: Props) => {
  return <MessageFeedbackFailedModal text={message} rootElementId={elementIds.widgetWindow} onCancel={onClose} />;
};
