import { FileMessage, SendingStatus } from '@sendbird/chat/message';
import { useMemo, useRef } from 'react';
import styled from 'styled-components';

import OutgoingContainer from './OutgoingContainer';

type Props = {
  message: FileMessage;
};

const Img = styled.img(({ theme }) => ({
  backgroundColor: theme.textColor.outgoingMessage,
  borderRadius: 12,
  width: 280,
  height: 200,
  borderWidth: 1,
  objectFit: 'cover',
}));

export const OutgoingFileMessage = ({ message }: Props) => {
  const localUrl = useRef<null | string>(null);

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
      <Img alt={message.name} src={fileUrl} />
    </OutgoingContainer>
  );
};
