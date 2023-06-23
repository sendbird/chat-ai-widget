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
  data: string;
}

export default function CustomMessageBody(props: Props) {
  const { message, data } = props;
  let extraStr = '';

  if (data) {
    const obj: object = JSON.parse(data);
    const sourceUrl: string = obj['source_url'];
    if (sourceUrl) {
      const anchor = `<a href="${sourceUrl}" target="_blank">${sourceUrl}</a>`;
      extraStr = ` I can answer your questions based on ${anchor}. Ask away!`;
    }
  }
  
  return <Root>
    <Text dangerouslySetInnerHTML={{ __html: message + '.' + extraStr }}/>
  </Root>;
}