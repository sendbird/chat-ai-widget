import { css } from '@linaria/core';
import { SendableMessage } from '@sendbird/chat/lib/__definition';
import { SendingStatus } from '@sendbird/chat/message';
import { Locale } from 'date-fns';
import { useTheme } from 'styled-components';

import { DefaultSentTime } from './MessageComponent';
import { Icon } from '../foundation/components/Icon';
import { Loader } from '../foundation/components/Loader';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';

interface MyMessageStatusProps {
  message: SendableMessage;
  dateLocale: Locale;
}

export default function MyMessageStatus(props: MyMessageStatusProps) {
  const { message, dateLocale } = props;
  const theme = useTheme();

  switch (message.sendingStatus) {
    case SendingStatus.PENDING:
      return (
        <Loader className={sendbirdLoader} size={16}>
          <Icon type={'spinner'} color={theme.bgColor.outgoingMessage} size={16} />
        </Loader>
      );
    case SendingStatus.FAILED:
      return (
        <div
          className={sendbirdLoader}
        >
          <Icon type={'error'} color={'error'} size={16} />
        </div>
      );
    default:
      return <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>;
  }
}

const sendbirdLoader = css`
  margin-bottom: 2px;
  width: 16px;
  height: 16px;
`;
