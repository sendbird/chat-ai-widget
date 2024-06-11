import ReactDOM from 'react-dom';
import styled from 'styled-components';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { useConstantState } from '../../context/ConstantContext';
import SendbirdLogo from '../../icons/sendbird-logo.svg';
import { hideChatBottomBanner } from '../../utils';

export function PoweredByBanner() {
  const store = useSendbirdStateContext();
  const sdk = store.stores.sdkStore.sdk;

  if (hideChatBottomBanner(sdk)) {
    return null;
  }

  const inputElement = document.querySelector(
    '.sendbird-message-input-wrapper'
  );

  return inputElement ? ReactDOM.createPortal(<Banner />, inputElement) : null;
}

const InnerContainer = styled.div<{ chatBottomBackgroundColor?: string }>`
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, chatBottomBackgroundColor }) =>
    chatBottomBackgroundColor || theme.bgColor.bottomBanner};
  color: ${({ theme }) => theme.textColor.bottomBanner.poweredBy};
  flex-wrap: wrap;
  font-size: 13px;

  svg {
    path {
      fill: ${({ theme }) => theme.textColor.bottomBanner.logo};
    }
  }
`;

const Highlighter = styled.a`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// link: https://dashboard.sendbird.com/auth/signup
function Banner() {
  const { chatBottomContent } = useConstantState();

  return (
    <InnerContainer
      chatBottomBackgroundColor={chatBottomContent.backgroundColor}
    >
      {chatBottomContent?.text}&nbsp;&nbsp;&nbsp;Powered by&nbsp;
      <Highlighter
        aria-label="Learn more about Sendbird Chatbot"
        href="https://sendbird.com/products/ai-chatbot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SendbirdLogo width={'75px'} />
      </Highlighter>
    </InnerContainer>
  );
}
