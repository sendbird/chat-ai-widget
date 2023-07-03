import styled from 'styled-components';

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
  background: ${(props) =>
    props.chatBottomBackgroundColor ||
    'linear-gradient(273.73deg, #4DCD90 -0.83%, #6210CC 48.04%, #6210CC 75.45%)'};
  color: rgba(255, 255, 255, 0.88);
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
export default function ChatBottom({
  chatBottomText,
  chatBottomBackgroundColor,
}: {
  chatBottomText: string;
  chatBottomBackgroundColor: string;
}) {
  return (
    <Container>
      <InnerContainer chatBottomBackgroundColor={chatBottomBackgroundColor}>
        {chatBottomText}&nbsp;&nbsp;&nbsp;Powered by&nbsp;
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
