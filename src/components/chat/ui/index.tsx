import { css, cx } from '@linaria/core';

import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { ChatMessageList } from './ChatMessageList';
import { themedColors, themedColorVars } from '../../../foundation/colors/css';
import { PoweredByBanner } from '../../ui/PoweredByBanner';

type Props = {
  fullscreen: boolean;
};
export const ChatUI = ({ fullscreen }: Props) => {
  return (
    <div className={cx(container, themedColorVars)}>
      <ChatHeader fullscreen={fullscreen} />
      <ChatMessageList />
      <ChatInput />
      <PoweredByBanner />
    </div>
  );
};

const container = css`
  font-family: var(--sendbird-font-family-default);
  height: 100%;
  width: 100%;
  background-color: ${themedColors.bg1};
  display: flex;
  flex-direction: column;
  flex: 1;
`;
