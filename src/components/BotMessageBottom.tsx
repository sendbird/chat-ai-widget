import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';

const Text = styled.div`
  color: ${({ theme }) => theme.textColor.incomingMessage};
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

const BottomComponent = styled.div`
  width: 100%;
  position: relative;
`;

const TextContainer = styled.div`
  //border-radius: 0 0 16px 16px;
  display: flex;
  justify-content: flex-start;
  gap: 7.5px;
  align-items: center;
  width: 100%;
  padding: 12px 0 4px;
`;

const Delimiter = styled.div`
  position: absolute;
  width: calc(100% + 24px);
  transform: translateX(-12px);
  border-top: 1px solid var(--sendbird-light-onlight-04);
`;

export default function BotMessageBottom() {
  const { messageBottomContent } = useConstantState();
  // const [showInfoBox, setShowInfoBox] = useState<boolean>(true);

  return (
    <>
      <BottomComponent>
        <Delimiter />
        <TextContainer>
          <Text>{messageBottomContent.text}</Text>
          {/* <InfoIconButton
            onMouseEnter={() => setShowInfoBox(true)}
            onMouseLeave={() => setShowInfoBox(false)}
          >
          </InfoIconButton> */}
        </TextContainer>
      </BottomComponent>
    </>
  );
}
