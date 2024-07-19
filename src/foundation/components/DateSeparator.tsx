import { cx, css } from '@linaria/atomic';
import { styled } from '@linaria/react';
import { format } from 'date-fns/format';
import type { Locale } from 'date-fns/locale';

import { Label } from './Label';
import { bgColors, themedColorVars } from '../colors/css';
import { useLocalProps } from '../hooks/useLocalProps';
import { SBUFoundationProps } from '../types';

type Props = {
  locale?: Locale;
  date?: Date;
  formatString?: string;

  separatorColor?: keyof typeof bgColors | string;
};

const Separator = styled.div<{ color?: string }>`
  border: none;
  height: 1px;
  display: inline-block;
  width: 100%;
  ${({ color }) => (color ? `background-color: ${color};` : '')}
`;

const center = css`
  margin: 0 16px;
  display: flex;
  white-space: nowrap;
`;

export const DateSeparator = ({
  className,
  children,
  locale,
  date = new Date(),
  formatString = 'MMMM dd, yyyy',
  separatorColor,
  ...props
}: SBUFoundationProps<Props>) => {
  const localProps = useLocalProps(props);
  const colorClassName = separatorColor ? bgColors[separatorColor as keyof typeof bgColors] : bgColors.onbackground4;

  return (
    <div className={cx('sendbird-separator', themedColorVars, className)} {...localProps}>
      <Separator className={colorClassName} color={separatorColor && !colorClassName ? separatorColor : undefined} />
      <div className={center}>
        {children ?? (
          <Label type={'caption2'} color={'onbackground2'}>
            {format(date, formatString, { locale })}
          </Label>
        )}
      </div>
      <Separator className={colorClassName} color={separatorColor && !colorClassName ? separatorColor : undefined} />
    </div>
  );
};
