import useWidgetLocalStorage from './useWidgetLocalStorage';
import { useWidgetOpen } from '../context/WidgetOpenContext';

export function openWidget() {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isOpen, setIsOpen } = useWidgetOpen();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { channelUrl } = useWidgetLocalStorage();
    if (channelUrl && !isOpen) {
      setIsOpen(true);
    }
  } catch (e) {
    console.error('openWidget failed: ', e);
  }
}
