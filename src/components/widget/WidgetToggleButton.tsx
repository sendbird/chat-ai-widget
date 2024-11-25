import styled from 'styled-components';

import { MAX_Z_INDEX } from '../../const';
import { useConstantState } from '../../context/ConstantContext';
import { useWidgetSetting } from '../../context/WidgetSettingContext';
import { useWidgetState } from '../../context/WidgetStateContext';
import { WidgetButton, WidgetButtonProps } from '../ui/WidgetButton';

const FloatingWidgetButton = styled(WidgetButton)`
  && {
    position: fixed;
    z-index: ${MAX_Z_INDEX};
    bottom: 24px;
    right: unset;
    inset-inline-end: 24px;
  }
`;

export default function WidgetToggleButton() {
  const { botStyle } = useWidgetSetting();
  const { dir, renderWidgetToggleButton } = useConstantState();
  const { isOpen, setIsOpen } = useWidgetState();

  const toggleButtonProps: WidgetButtonProps = {
    dir,
    isOpen,
    onClick: () => setIsOpen(!isOpen),
    accentColor: botStyle.accentColor,
    imageUrl: botStyle.toggleButtonUrl,
  };

  if (typeof renderWidgetToggleButton === 'function') {
    return renderWidgetToggleButton(toggleButtonProps);
  }

  return <FloatingWidgetButton {...toggleButtonProps} />;
}
