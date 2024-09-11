import { styled } from '@linaria/react';
import { useTheme } from 'styled-components';

import { useChatContext } from './chat/context/ChatProvider';
import { getColorBasedOnSaturation } from '../colors';
import { useConstantState } from '../context/ConstantContext';
import BotProfileIcon from '../icons/bot-profile-image-small.svg';

const Container = styled.span<{ backgroundColor: string; size: number }>`
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

type Props = {
  size: number;
};

function BotProfileImage({ size }: Props) {
  const theme = useTheme();

  const { botStudioEditProps } = useConstantState();
  const { botUser } = useChatContext();
  const { botInfo } = botStudioEditProps ?? {};
  const profileUrl = botInfo?.profileUrl ?? botUser?.profileUrl;

  if (profileUrl) {
    return <img src={profileUrl} style={{ borderRadius: '50%', width: size, height: size }} alt={'bot profile'} />;
  }

  return (
    <Container size={size} backgroundColor={theme.accentColor}>
      <Icon fill={getColorBasedOnSaturation(theme.accentColor)} />
    </Container>
  );
}

export default BotProfileImage;
