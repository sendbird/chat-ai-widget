import { cx } from '@linaria/atomic';
import { styled } from '@linaria/react';
import { format } from 'date-fns/format';
import type { Locale } from 'date-fns/locale';

import { dateSeparatorContainer, dateSeparatorLabel } from './css';
import { bgColors, themedColorVars } from '../../colors/css';
import { useLocalProps } from '../../hooks/useLocalProps';
import { SBUFoundationProps } from '../../types';
import { Label } from '../Label';

type Props = SBUFoundationProps<{
  /** date or timestamp */
  date?: Date | number;
  /** locale for date-fns */
  locale?: Locale;
  /** format string for date-fns */
  formatString?: string;

  separatorColor?: keyof typeof bgColors | string;
}>;
export const DateSeparator = ({
  className,
  children,
  locale,
  date = Date.now(),
  formatString = 'MMMM dd, yyyy',
  separatorColor,
  testId = 'sendbird-date-separator',
}: Props) => {
  const localProps = useLocalProps({ testId });
  const colorClassName = separatorColor ? bgColors[separatorColor as keyof typeof bgColors] : bgColors.onbackground4;

  return (
    <div className={cx('sendbird-separator', dateSeparatorContainer, themedColorVars, className)} {...localProps}>
      <Separator className={colorClassName} color={separatorColor && !colorClassName ? separatorColor : undefined} />
      <div className={dateSeparatorLabel}>
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

const Separator = styled.div<{ color?: string }>`
  border: none;
  height: 1px;
  display: inline-block;
  width: 100%;
  ${({ color }) => (color ? `background-color: ${color};` : '')}
`;
