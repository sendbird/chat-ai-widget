import styled from "styled-components";
import { ReactComponent as InfoIcon } from '../icons/info-icon.svg';
import {useState} from "react";
import {createPortal} from "react-dom";
import {usePopperTooltip} from "react-popper-tooltip";
import 'react-popper-tooltip/dist/styles.css';

const Text = styled.div`
  color: rgba(0, 0, 0, 0.5);
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
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

const InfoIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  cursor: pointer;
`;


const InfoBox = styled.div`
  padding: 8px 12px;
  //width: calc(100% - 140px);

  max-width: 260px;
  width: 100%;
  background: rgb(0, 0, 0, 0.8);
  border-radius: 8px;
  color: white;
  margin-top: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 600px) {
    max-width: 400px;
  }
`;

export default function BotMessageBottom() {
  const placement = 'auto';

  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
  } = usePopperTooltip({
    placement,
  });

  const [showInfoBox, setShowInfoBox] = useState<boolean>(false);

  return <>
    <BottomComponent ref={setTriggerRef}>
      <Delimiter/>
      <TextContainer>
        <Text>AI-generated response powered by OpenAI</Text>
        <InfoIconButton
          onMouseEnter={() => setShowInfoBox(true)}
          onMouseLeave={() => setShowInfoBox(false)}
        >
          <InfoIcon height={'28px'} width={'28px'}/>
        </InfoIconButton>
      </TextContainer>
    </BottomComponent>
    {
      showInfoBox && createPortal(
        <div
          ref={setTooltipRef}
          {...getTooltipProps( )}
        >
          <InfoBox>In this beta version, the AI-generated responses may lack complete accuracy.</InfoBox>
          {/*<div {...getArrowProps({ className: 'tooltip-arrow' })} />*/}
        </div>,
        document.getElementById('sb_chat_root_for_z_index') as HTMLDivElement
      )
    }
  </>
}