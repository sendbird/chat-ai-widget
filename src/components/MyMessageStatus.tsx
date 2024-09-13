import { SendableMessage } from '@sendbird/chat/lib/__definition';
import { SendingStatus } from '@sendbird/chat/message';
import { Locale } from 'date-fns';

import { DefaultSentTime } from './MessageComponent';
import { Icon } from '../foundation/components/Icon';
import { Loader } from '../foundation/components/Loader';
import { CommonTheme } from '../theme';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';

interface MyMessageStatusProps {
  message: SendableMessage;
  dateLocale: Locale;
  theme: CommonTheme;
}

export default function MyMessageStatus(props: MyMessageStatusProps) {
  const { message, dateLocale, theme } = props;
  switch (message.sendingStatus) {
    case SendingStatus.PENDING:
      return (
        <Loader size={16} className="sendbird-loader">
          <Icon type={'spinner'} color={theme.bgColor.outgoingMessage} size={16} />
        </Loader>
      );
    case SendingStatus.FAILED:
      return (
        <Loader size={16} className="sendbird-loader no-animation">
          <Icon type={'error'} color={'error'} size={16} />
        </Loader>
      );
    default:
      return <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>;
  }
}
