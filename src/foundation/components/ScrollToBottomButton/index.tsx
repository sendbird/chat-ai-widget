import { cx } from '@linaria/core';

import { buttonContainer } from './css';
import { useLocalProps } from '../../hooks/useLocalProps';
import { SBUFoundationProps } from '../../types';
import { Icon } from '../Icon';

type Props = SBUFoundationProps<{
  onClick: () => void;
}>;
export const ScrollToBottomButton = ({ className, onClick, testId = 'sendbird-scroll-to-bottom-button' }: Props) => {
  const localProps = useLocalProps({ testId });

  return (
    <button className={cx(buttonContainer, className)} onClick={onClick} tabIndex={0} {...localProps}>
      <Icon size={24} type={'chevron-down'} color={'primary'} />
    </button>
  );
};
