import styled from 'styled-components';

interface FallbackUserMessageProps {
  text: string;
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
`;

const Label = styled.div`
  color: ${({ theme }) => theme.textColor.placeholder};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export default function FallbackUserMessage({ text }: FallbackUserMessageProps) {
  return (
    <Container>
      <Label>{text}</Label>
    </Container>
  );
}
