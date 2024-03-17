import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import { ReactComponent as SendbirdLogo } from '../icons/sendbird-logo-widget.svg';

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
  color: white;
  flex-wrap: wrap;
  font-size: 13px;
`;

const Highlighter = styled.a`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// link: https://dashboard.sendbird.com/auth/signup
export default function ChatBottom() {
  const { chatBottomContent, applicationId, botId } = useConstantState();
  const { theme } = useChannelStyle({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    appId: applicationId!,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    botId: botId!,
  });

  return (
    <Container>
      <InnerContainer
        chatBottomBackgroundColor={
          chatBottomContent?.backgroundColor ?? theme === 'light'
        }
      >
        {chatBottomContent?.text}&nbsp;&nbsp;Powered by&nbsp;
        <Highlighter
          href="https://sendbird.com/products/chatgpt-integration"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SendbirdLogo width={'75px'} />
        </Highlighter>
      </InnerContainer>
    </Container>
  );
}
