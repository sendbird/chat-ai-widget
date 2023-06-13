import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 16px;
  background-color: #eeeeee;
  &:hover {
    background-color: #e0e0e0;
  }
  //max-width: 600px;
`;

const Text = styled.div`
  width: 100%;
  text-align: left;
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.43;
`;

interface Props {
  message: string;
}

export default function CustomMessageBody(props: Props) {
  const { message } = props;

  return <Root>
    <Text>{message}</Text>
  </Root>;
}