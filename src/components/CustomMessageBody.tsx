import DOMPurify from 'dompurify';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Text = styled.span`
  width: 100%;
  text-align: left;
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.43;

  padding: 8px 12px;
  gap: 8px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
  &:hover {
    background-color: ${({ theme }) => theme.bgColor.hover.incomingMessage};
  }
`;

interface Props {
  message: string;
}

export default function CustomMessageBody(props: Props) {
  const { message } = props;
  const sanitizedMessage = DOMPurify.sanitize(message);

  return (
    <Root>
      <Text className="sendbird-word">{sanitizedMessage}</Text>
    </Root>
  );
}
