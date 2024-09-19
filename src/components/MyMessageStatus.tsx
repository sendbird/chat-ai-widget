import { css } from '@linaria/core';
import { SendableMessage } from '@sendbird/chat/lib/__definition';
import { SendingStatus } from '@sendbird/chat/message';
import { Locale } from 'date-fns';
import { useTheme } from 'styled-components';

import { DefaultSentTime } from './MessageComponent';
import { Icon } from '../foundation/components/Icon';
import { Container } from '../foundation/components/Loader';
import { useLocalProps } from '../foundation/hooks/useLocalProps';
import { CommonTheme } from '../theme';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';


interface MyMessageStatusProps {
  message: SendableMessage;
  dateLocale: Locale;
  theme: CommonTheme;
}

export default function MyMessageStatus(props: MyMessageStatusProps) {
  const { message, dateLocale } = props;
  const theme = useTheme();
  const localProps = useLocalProps({ testId: 'sendbird-loader' });

  switch (message.sendingStatus) {
    case SendingStatus.PENDING:
      return (
        <Container className={sendbirdLoader} size={16} {...localProps}>
          <Icon type={'spinner'} color={theme.bgColor.outgoingMessage} size={16} />
        </Container>
      );
    case SendingStatus.FAILED:
      return (
        <Container className={sendbirdLoader} size={16} {...localProps} style={{ animation: 'unset' }}>
          <Icon type={'error'} color={'error'} size={16} />
        </Container>
      );
    default:
      return <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>;
  }
}

const sendbirdLoader = css`
  margin-bottom: 2px;
`;
