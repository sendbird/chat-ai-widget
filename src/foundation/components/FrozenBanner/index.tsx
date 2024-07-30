import { cx } from '@linaria/core';
import React from 'react';

import { frozenBannerContainer } from './css';
import { useLocalProps } from '../../hooks/useLocalProps';
import { SBUFoundationProps } from '../../types';
import { Label } from '../Label';

type Props = SBUFoundationProps<{
  label?: string;
}>;
export const FrozenBanner = ({
  className,
  label = 'Channel frozen',
  testId = 'sendbird-frozen-banner',
}: Props): React.ReactElement => {
  const localProps = useLocalProps({ testId });
  return (
    <div {...localProps} className={cx(frozenBannerContainer, className)}>
      <Label type={'caption2'}>{label}</Label>
    </div>
  );
};

export default FrozenBanner;
