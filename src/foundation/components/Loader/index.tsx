import { cx } from '@linaria/core';
import { styled } from '@linaria/react';

import { useLocalProps } from '../../hooks/useLocalProps';
import { resolveSize } from '../../resolveSize';
import { SBUFoundationProps } from '../../types';
import { Icon } from '../Icon';

type Props = SBUFoundationProps<{
  size?: string | number;
}>;
export const Loader = ({ className, children, size = 26, testId = 'sendbird-loader' }: Props) => {
  const localProps = useLocalProps({ testId });
  return (
    <Container className={cx(className, 'sendbird-loader')} size={size} {...localProps}>
      {children ?? <Icon type={'spinner'} size={size} />}
    </Container>
  );
};

const Container = styled.div<{ size: string | number }>`
  display: inline-block;
  animation: 1s infinite linear;
  animation-name: rotate;

  width: ${resolveSize};
  height: ${resolveSize};

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
