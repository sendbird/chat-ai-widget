import { cx } from '@linaria/core';
import { useTheme } from 'styled-components';

import { typingDot, typingDotContainer } from './css';
import { useLocalProps } from '../../hooks/useLocalProps';
import { SBUFoundationProps } from '../../types';

export const TypingBubble = ({ className, testId }: SBUFoundationProps) => {
  const theme = useTheme();
  const localProps = useLocalProps({ testId });
  return (
    <div
      className={cx(typingDotContainer, className)}
      style={{ background: theme.bgColor.incomingMessage }}
      {...localProps}
    >
      {[0, 1, 2].map((it) => (
        <span key={it} className={typingDot} style={{ background: theme.textColor.incomingMessage }} />
      ))}
    </div>
  );
};
