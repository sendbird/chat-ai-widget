import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import SendbirdLogo from '../icons/sendbird-logo-widget.svg';

const Container = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div<{ chatBottomBackgroundColor: string }>`
  padding: 0 4px;
  width: calc(100% - 8px);
  min-height: 40px;
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
export default function ChatBottom() {
  const { chatBottomContent } = useConstantState();
  const { theme } = useChannelStyle();

  return (
    <Container>
      <InnerContainer
        chatBottomBackgroundColor={
          chatBottomContent?.backgroundColor ?? theme === 'light'
        }
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
    </Container>
  );
}
