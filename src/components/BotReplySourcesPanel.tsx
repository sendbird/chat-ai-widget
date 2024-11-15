import { BaseMessage } from '@sendbird/chat/message';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { elementIds } from '../const';

interface BotReplySource {
  title: string;
  url: string;
}

interface BotReplySourcesPanelProps {
  message: BaseMessage;
}

interface RootProps {
  isExpanded: boolean;
}

interface BotReplySourceContainerProps {
  hasDelimiter: boolean;
}

const Title = styled.div`
  padding: 8px 0 8px;
  font-size: 16px;
  font-weight: 500;
`;

const Root = styled.div<RootProps>`
  display: flex;
  position: absolute; // Set the Panel component's position to absolute relative to the aichatbot-widget-window component.
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  padding: 8px 24px 40px;
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};

  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${({ isExpanded }) => (isExpanded ? '0%' : '100%')});
`;

const ShadowBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BotReplySourcesButton = styled.button`
  padding: 4px 8px;
  margin: 8px 0 0 36px;
`;

const BotReplySourceContainer = styled.div<BotReplySourceContainerProps>`
  display: flex;
  font-size: 14px;
  padding: 8px 0;
  border-top: ${({ hasDelimiter }) => (hasDelimiter ? '1px solid' : undefined)};
`;

function BotReplySource({ source, index }: { source: BotReplySource; index: number }) {
  const { title, url } = source;
  return (
    <BotReplySourceContainer hasDelimiter={index > 0}>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </BotReplySourceContainer>
  );
}

export default function BotReplySourcesPanel({ message }: BotReplySourcesPanelProps) {
  const [isBotReplySourcePanelVisible, setIsBotReplySourcePanelVisible] = useState(false);
  const [isBotReplySourcePanelExpanded, setIsBotReplySourcePanelExpanded] = useState(false);

  let botReplySources: BotReplySource[] = message?.extendedMessagePayload?.['bot_reply_sources'] as BotReplySource[];
  botReplySources = [
    {
      title: 'Sendbird docs',
      url: 'https://sendbird.com/docs',
    },
    {
      title: 'About cat',
      url: 'https://www.britannica.com/animal/cat',
    },
    {
      title: 'QWER',
      url: 'https://namu.wiki/w/QWER',
    },
  ];

  function openBotReplySourcesPanel() {
    setIsBotReplySourcePanelVisible(true);
  }
  function handleAnimationEnd() {
    if (!isBotReplySourcePanelExpanded) {
      setIsBotReplySourcePanelVisible(false); // Remove panel from DOM after slide-out animation
    }
  }

  useEffect(() => {
    if (isBotReplySourcePanelVisible) {
      setIsBotReplySourcePanelExpanded(true);
    }
  }, [isBotReplySourcePanelVisible]);
  const widgetWindow = document.getElementById(elementIds.widgetWindow);

  return (
    <>
      {botReplySources && <BotReplySourcesButton onClick={openBotReplySourcesPanel}>Source Info</BotReplySourcesButton>}
      {botReplySources &&
        widgetWindow &&
        isBotReplySourcePanelVisible &&
        createPortal(
          <div>
            <ShadowBackground onClick={() => setIsBotReplySourcePanelExpanded(false)} />
            <Root isExpanded={isBotReplySourcePanelExpanded} onTransitionEnd={handleAnimationEnd}>
              <Title>Bot reply sources</Title>
              {botReplySources.map((source, i) => (
                <BotReplySource key={i} source={source} index={i} />
              ))}
            </Root>
          </div>,
          widgetWindow,
        )}
    </>
  );
}
