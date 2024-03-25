import { useEffect, useRef } from 'react';

import { isIOSMobile } from '../utils';

const INPUT_ELEMENT_SELECTOR = '.sendbird-message-input';
const SEND_BUTTON_SELECTOR = '.sendbird-message-input--send';

function useAutoDismissMobileKeyboardHandler(): void {
  const addedButtons = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleDismissKeyboard = (): void => {
      setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          // blur the active element(send button) to dismiss the keyboard on mobile
          document.activeElement.blur();
        }
      }, 200);
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Enter' && isIOSMobile) {
        handleDismissKeyboard();
      }
    };

    const observerCallback = (mutations: MutationRecord[]): void => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              (node as Element).matches(SEND_BUTTON_SELECTOR)
            ) {
              (node as HTMLElement).removeEventListener(
                'click',
                handleDismissKeyboard
              );
              (node as HTMLElement).addEventListener(
                'click',
                handleDismissKeyboard
              );
              // Store added node for later removal
              addedButtons.current.push(node as HTMLElement);
            }
          });
        }
      });
    };

    const observerRef = new MutationObserver(observerCallback);
    const config = { childList: true, subtree: true };

    const inputElement = document.querySelector<HTMLInputElement>(
      INPUT_ELEMENT_SELECTOR
    );
    if (inputElement) {
      observerRef.observe(inputElement, config);
      inputElement.removeEventListener('keydown', handleKeyDown);
      inputElement.addEventListener('keydown', handleKeyDown);
    } else {
      console.warn('Input element not found for mutation observer');
    }

    return () => {
      observerRef.disconnect();
      addedButtons.current.forEach((button) =>
        button.removeEventListener('click', handleDismissKeyboard)
      );
      if (inputElement) {
        inputElement.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);
}

export default useAutoDismissMobileKeyboardHandler;
