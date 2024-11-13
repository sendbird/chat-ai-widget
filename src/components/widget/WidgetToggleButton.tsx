import styled from 'styled-components';

import { FLOATING_STYLES } from '../../const';
import { useConstantState } from '../../context/ConstantContext';
import { useWidgetSetting } from '../../context/WidgetSettingContext';
import { useWidgetState } from '../../context/WidgetStateContext';
import { WidgetButton, WidgetButtonProps } from '../ui/WidgetButton';

const FloatingWidgetButton = styled(WidgetButton)`
  && {
    position: fixed;
    z-index: ${FLOATING_STYLES.WIDGET_BUTTON.zIndex};
    bottom: ${FLOATING_STYLES.WIDGET_BUTTON.bottom};
    right: ${FLOATING_STYLES.WIDGET_BUTTON.right};
  }
`;

export type ToggleButtonProps = Omit<WidgetButtonProps, 'imageUrl'>;
export default function WidgetToggleButton() {
  const { botStyle } = useWidgetSetting();
  const { renderWidgetToggleButton } = useConstantState();
  const { isOpen, setIsOpen } = useWidgetState();

  const toggleButtonProps: ToggleButtonProps = {
    isOpen,
    onClick: () => setIsOpen(!isOpen),
    accentColor: botStyle.accentColor,
  };

  if (typeof renderWidgetToggleButton === 'function') {
    return renderWidgetToggleButton(toggleButtonProps);
  }

  return <FloatingWidgetButton {...toggleButtonProps} imageUrl={botStyle.toggleButtonUrl} />;
}
