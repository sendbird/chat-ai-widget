import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
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

const NameContainer = styled.div`
  @font-face {
    font-family: 'ES Peak';
    font-weight: 600;
    src: url('https://static1.squarespace.com/static/659384103b38c97cdaf368bd/t/659653494f761c0096299168/1704350545083/ESPeak-Medium.woff2') format('woff2');
  }
  font-family: "ES Peak", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  background: linear-gradient(99deg, #4165FF 2.41%, #8896FF 35.96%, #EA94F2 66.09%, #CED0FF 81.74%, #3E62FF 94.41%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  return (
    <Container>
      <InnerContainer
        chatBottomBackgroundColor={chatBottomContent?.backgroundColor}
      >
        <NameContainer>{chatBottomContent?.text}</NameContainer>&nbsp;&nbsp;&nbsp;Powered by&nbsp;
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
