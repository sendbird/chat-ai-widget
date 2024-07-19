import { styled } from '@linaria/atomic';
import { cx } from '@linaria/core';

import { placeholderBody } from './css';
import { PlaceHolderProps } from './types';
import { Icon } from '../Icon';
import { Label } from '../Label';

const PlaceholderIcon = styled(Icon)`
  margin-bottom: 10px;
`;

export interface PlaceholderCommonProps extends PlaceHolderProps {
  icon: keyof typeof Icon.t;
  message?: string;
}
const PlaceholderCommon = ({ iconSize = 64, icon, className, message }: PlaceholderCommonProps) => {
  return (
    <div className={cx(placeholderBody, className)}>
      <PlaceholderIcon type={icon} size={iconSize} color={'onbackground3'} />
      <Label type={'body1'} color={'onbackground2'}>
        {message}
      </Label>
    </div>
  );
};

export default PlaceholderCommon;
