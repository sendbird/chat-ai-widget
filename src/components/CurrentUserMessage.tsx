import { UserMessage } from '@sendbird/chat/message';
import styled, { css } from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { boldifyMessage, formatCreatedAtToAMPM } from '../utils';
import { categoryColors } from '../utils/category';

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-bottom: 16px;
  flex-wrap: wrap-reverse;
  gap: 4px;
  padding-left: 16px;
  padding-right: 16px;
`;

const BodyContainer = styled.div`
  max-width: calc(100% - 90px); // 600px;
  font-size: 14px;
  width: fit-content;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: normal;
`;

const SentTime = styled.div`
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  line-height: 1;
  margin-bottom: 6px;
`;

const BodyComponent = styled.div<{
  botCategory?: string;
}>`
  ${({ botCategory }) =>
    botCategory &&
    css`
      background-color: ${categoryColors[botCategory][
        '--sendbird-light-primary-300'
      ]};
      &:hover {
        background-color: ${categoryColors[botCategory][
          '--sendbird-light-primary-300'
        ]};
      }
    `};

  //background-color: var(--sendbird-light-primary-300);
  //&:hover {
  //  background-color: var(--sendbird-light-primary-300);
  //}
  color: rgba(255, 255, 255, 0.88);
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
  message: UserMessage;
};

export default function CurrentUserMessage(props: Props) {
  const { message } = props;
  const { botCategory } = useConstantState();

  return (
    <Root>
      <SentTime>
        <div>{formatCreatedAtToAMPM(message.createdAt)}</div>
      </SentTime>
      <BodyContainer>
        <BodyComponent botCategory={botCategory}>
          <TextComponent>
            <div
              dangerouslySetInnerHTML={{
                __html: boldifyMessage(message.message),
              }}
            />
          </TextComponent>
        </BodyComponent>
      </BodyContainer>
    </Root>
  );
}
