import { UserMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 6px;
  flex-wrap: wrap-reverse;
  gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

const BodyContainer = styled.div`
  font-size: 11px;
  width: fit-content;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;

const BodyComponent = styled.div`
  color: #808080;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 12px;
  border-radius: 16px;
  white-space: pre-wrap;
`;

const TextComponent = styled.div`
  white-space: pre-line;
`;

type Props = {
  message: string;
};

export default function AdminMessage(props: Props) {
  const { message } = props;

  return (
    <Root>
      <BodyContainer>
        <BodyComponent>
          <TextComponent>{message}</TextComponent>
        </BodyComponent>
      </BodyContainer>
    </Root>
  );
}
