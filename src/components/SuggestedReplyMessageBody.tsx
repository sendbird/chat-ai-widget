import styled from 'styled-components';

import { SuggestedReply } from '../const';

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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  height: 32px;
  background: var(--sendbird-light-primary-300);
  border-radius: 16px;
  color: white;
  cursor: pointer;
  margin: 4px 0;
  text-decoration: none;
  width: 100%;
`;

const Text = styled.div`
  text-align: left;
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.43;
  width: 100%;
  max-width: 600px;
`;

type Props = {
  data: SuggestedReply;
};

export default function SuggestedReplyMessageBody(props: Props) {
  const { data } = props;
  if (data.text && data.link && data.buttonText) {
    return (
      <Root>
        <Text>{data.text}</Text>
        <ButtonContainer>
          <LinkButton href={data.link} id={data.buttonText} target="_blank">
            {data.buttonText}
          </LinkButton>
        </ButtonContainer>
      </Root>
    );
  } else {
    return null;
  }
}
