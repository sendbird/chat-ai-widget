import styled from 'styled-components';

import { getColorBasedOnSaturation } from '../colors';
import { ReactComponent as Icon } from '../icons/bot-profile-image-small.svg';

interface ImageProps {
  width: number;
  height: number;
  iconWidth: number;
  iconHeight: number;
}
const StyledBotImage = styled.span<ImageProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: ${({ theme }) => theme.accentColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}`;

const ChatBotIcon = styled(Icon)`
  path {
    fill: ${({ theme }) => getColorBasedOnSaturation(theme.accentColor)};
  }
`;
const StyledBotIcon = styled(ChatBotIcon).attrs(({ width, height }) => ({
  width,
  height,
}))``;

function BotProfileImage(props: ImageProps) {
  return (
    <StyledBotImage {...props}>
      <StyledBotIcon width={props.iconWidth} height={props.iconHeight} />
    </StyledBotImage>
  );
}

export default BotProfileImage;
