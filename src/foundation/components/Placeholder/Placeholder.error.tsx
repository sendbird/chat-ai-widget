import { css } from '@linaria/core';
import React from 'react';

import PlaceholderCommon, { PlaceholderCommonProps } from './PlaceholderCommon';
import { Icon } from '../Icon';
import { Label } from '../Label';

type Props = Omit<PlaceholderCommonProps, 'icon'> & {
  action?: () => void;
  actionLabel?: string;
};

const PlaceholderError = ({ label = 'Something went wrong', action, actionLabel = 'Retry', ...props }: Props) => {
  return (
    <PlaceholderCommon icon={'error'} label={label} {...props}>
      {action && <RetryButton onClick={action} label={actionLabel} />}
    </PlaceholderCommon>
  );
};

const RetryButton = ({ label, onClick }: { label: string; onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button className={buttonContainer} tabIndex={0} onClick={onClick}>
      <Icon type={'refresh'} size={20} />
      <Label type={'button1'} color={'primary'}>
        {label}
      </Label>
    </button>
  );
};

const buttonContainer = css`
  all: unset;
  display: flex;
  cursor: pointer;
  gap: 4px;
`;

export default PlaceholderError;
