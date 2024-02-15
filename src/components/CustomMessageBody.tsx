import DOMPurify from 'dompurify';
import styled, { css } from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { categoryColors } from '../utils/category';

const Root = styled.div<{
  botCategory?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 16px;
  ${({ botCategory }) =>
    botCategory &&
    css`
      background-color: ${categoryColors[botCategory][
        '--sendbird-light-background-50-0'
      ]};
      &:hover {
        background-color: ${categoryColors[botCategory][
          '--sendbird-light-background-50-0'
        ]};
      }
    `};

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
  const sanitizedMessage = DOMPurify.sanitize(message);
  const { botCategory } = useConstantState();

  return (
    <Root botCategory={botCategory}>
      <Text>{sanitizedMessage}</Text>
    </Root>
  );
}
