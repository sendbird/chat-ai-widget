import styled from "styled-components";
import React from 'react';
import {StartingPageAnimatorProps} from "./CustomChannelComponent";
import {useEffect} from "react";
import {StartingPageContent} from "../const";
import botMessageImage from '../icons/bot-message-image.png';
import {useImageLoadingState} from "../context/ImageLoadingStateContext";

const BackgroundContainer = styled.div<StartingPageAnimatorProps>`
  position: absolute;
`;

const TitleContainer = styled.div`
  width: calc(100% - 64px);
  position: absolute;
  padding: 32px;
`;

const Root = styled.div<StartingPageAnimatorProps>`
  position: relative;
  top: ${(props: StartingPageAnimatorProps) => (props.isStartingPage ? '0' : '-300px')};
  opacity: ${(props: StartingPageAnimatorProps) => (props.isStartingPage ? '1' : '0')};
  z-index: 20;
  width: 100%;
  transition: ${(props: StartingPageAnimatorProps) => (props.isStartingPage ? 'none' : 'all 0.5s ease')};
`;


const HeaderOne = styled.div`
  //font-weight: 600;
  //font-size: 24px;
  //line-height: 36px;
  color: #FFFFFF;
  opacity: 0.8;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  font-family: 'Gellix', sans-serif;
`;

const HeaderTwo = styled.div`
  font-weight: 700;
  //font-size: 27px;
  margin-top: 2px;
  font-family: 'Gellix', sans-serif;
  color: #FFFFFF;
  //margin-top: 8px;
  font-size: 32px;
  line-height: 40px;
`;

export const BetaLogo = styled.div`
  padding: 4px;
  background: #C8D9FA;
  border-radius: 2px;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #30308F;
  font-family: 'SF Pro Display', sans-serif;
  letter-spacing: 0.8px;
`;

export const HeaderOneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 0 0;
`;


const StartMessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-right: 12px;
  margin-bottom: 6px;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
`;

const StartMessageBodyContainer = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.88);
  max-width: 255px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  width: 90%;
`;

const StartMessageHeader = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.5);
  transition: color 0.5s ease 0s;
  margin: 0px 0px 4px 12px;
`;

const StartMessageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 16px;
  background-color: rgb(238, 238, 238);
`;

const StartMessageBodyContent = styled.div`
  width: 100%;
  text-align: left;
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.43;
`;

interface Props {
    isStartingPage: boolean;
    startingPageContent: StartingPageContent;
    betaMark: boolean;
}

export function StartingPage(props: Props) {
    const { isStartingPage, startingPageContent, betaMark } = props;
    // console.log('## isWebDemo: ', isWebDemo);
    const { setShowImageLoading } = useImageLoadingState();

    useEffect(() => {
        setShowImageLoading(false);
        // setTimeout(() => {
        //   setShowImageLoading(false);
        // }, 500);
    }, []);

    return (
        <Root isStartingPage={isStartingPage}>
            <BackgroundContainer isStartingPage>
                <startingPageContent.backGroundContent.Component height={startingPageContent.backGroundContent.height}/>
                <StartMessageContainer>
                    <div style={{
                        paddingLeft: '12px',
                    }}>
                        <img src={botMessageImage} alt="botProfileImage" style={{
                            height: '28px',
                        }}/>
                    </div>
                    <StartMessageBodyContainer>
                        <StartMessageHeader>{startingPageContent.messageContent.header}</StartMessageHeader>
                        <StartMessageBody>
                            <StartMessageBodyContent>{startingPageContent.messageContent.body}
                            </StartMessageBodyContent>
                        </StartMessageBody>
                    </StartMessageBodyContainer>
                </StartMessageContainer>
            </BackgroundContainer>
            <TitleContainer>
                <startingPageContent.logoContent.Component width={startingPageContent.logoContent.width}/>
                <HeaderOneContainer style={{ alignItems: 'flex-end' }}>
                    <HeaderOne>{startingPageContent.headerContent.headerOne}</HeaderOne>
                    {
                        betaMark && <BetaLogo style={{ marginBottom: '3px' }}>{ 'BETA' }</BetaLogo>
                    }
                </HeaderOneContainer>
                <HeaderTwo>{startingPageContent.headerContent.headerTwo}</HeaderTwo>
            </TitleContainer>
        </Root>
    );
}