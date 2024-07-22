import { cx } from '@linaria/core';

import { placeholderBody } from './css';
import { PlaceHolderProps } from './types';
import { Icon, IconType } from '../Icon';
import { Label } from '../Label';

export interface PlaceholderCommonProps extends PlaceHolderProps {
  icon: IconType;
  label?: string;
}
const PlaceholderCommon = ({ iconSize = 64, icon, className, label, children }: PlaceholderCommonProps) => {
  return (
    <div className={cx(placeholderBody, className)}>
      <Icon type={icon} size={iconSize} color={'onbackground3'} />
      <Label type={'body1'} color={'onbackground2'}>
        {label}
      </Label>
      {children}
    </div>
  );
};

export default PlaceholderCommon;
