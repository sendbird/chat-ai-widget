import { styled } from '@linaria/react';
import { useTheme } from 'styled-components';

import { useChatContext } from './chat/context/ChatProvider';
import { getColorBasedOnSaturation } from '../colors';
import { useConstantState } from '../context/ConstantContext';
import { themedColors } from '../foundation/colors/css';
import BotProfileIcon from '../icons/bot-profile-image-small.svg';

function isMaybeFavicon(url: string) {
  if (url.length < 4) return false;
  const fileName = url.substring(url.lastIndexOf('/') + 1);
  return /fav_|favicon|\.ico/.test(fileName);
}

const FaviconContainer = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${themedColors.bg2};
`;

const FaviconImage = styled.img<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  box-sizing: border-box;
  object-fit: contain;
  padding: 19%;
`;

const IconContainer = styled.span<{ backgroundColor: string; size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ backgroundColor }) => backgroundColor};
  box-sizing: border-box;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}`;

const Icon = styled(BotProfileIcon)<{ fill: string }>`
  path {
    fill: ${({ fill }) => fill};
  }
`;

function BotProfileImage({ size }: { size: number }) {
  const theme = useTheme();

  const { botStudioEditProps } = useConstantState();
  const { botUser } = useChatContext();
  const { botInfo } = botStudioEditProps ?? {};

  const profileUrl = botInfo?.profileUrl ?? botUser?.profileUrl;

  if (profileUrl) {
    if (isMaybeFavicon(profileUrl)) {
      return (
        <FaviconContainer size={size}>
          <FaviconImage size={size} src={profileUrl} alt={'bot profile'} />
        </FaviconContainer>
      );
    }

    return <img src={profileUrl} style={{ borderRadius: '50%', width: size, height: size }} alt={'bot profile'} />;
  }

  return (
    <IconContainer size={size} backgroundColor={theme.accentColor}>
      <Icon fill={getColorBasedOnSaturation(theme.accentColor)} />
    </IconContainer>
  );
}

export default BotProfileImage;
