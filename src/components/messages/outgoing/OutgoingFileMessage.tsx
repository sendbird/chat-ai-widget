import { FileMessage, SendingStatus } from '@sendbird/chat/message';
import { useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';

import OutgoingContainer from './OutgoingContainer';

type Props = {
  message: FileMessage;
};
export const OutgoingFileMessage = ({ message }: Props) => {
  const localUrl = useRef<null | string>(null);
  const theme = useTheme();

  const fileUrl = useMemo(() => {
    if (
      message.sendingStatus !== SendingStatus.SUCCEEDED &&
      message.messageParams &&
      message.messageParams.file instanceof Blob
    ) {
      localUrl.current = URL.createObjectURL(message.messageParams.file);
      return localUrl.current;
    } else {
      if (localUrl.current) URL.revokeObjectURL(localUrl.current);
      return message.url;
    }
  }, [message.sendingStatus]);
  return (
    <OutgoingContainer message={message}>
      <img
        alt={message.name}
        style={{
          backgroundColor: theme.bgColor.outgoingMessage,
          borderRadius: 12,
          width: '100%',
          height: 200,
          borderWidth: 1,
          objectFit: 'cover',
        }}
        src={fileUrl}
      />
    </OutgoingContainer>
  );
};
