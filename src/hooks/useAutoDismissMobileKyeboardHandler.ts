import { useEffect, useRef } from 'react';

import { isIOSMobile } from '../utils';

const INPUT_ELEMENT_SELECTOR = '.sendbird-message-input';
const SEND_BUTTON_SELECTOR = '.sendbird-message-input--send';

function useAutoDismissMobileKeyboardHandler(): void {
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const handleDismissKeyboard = (): void => {
      setTimeout(() => {
        const inputElement = document.querySelector(INPUT_ELEMENT_SELECTOR);
        if (
          document.activeElement instanceof HTMLElement &&
          inputElement instanceof HTMLElement
        ) {
          document.activeElement.blur(); // blur the active element to dismiss the keyboard on mobile
          inputElement.blur(); // ensure the input element is also blurred
        }
      }, 200);
    };

    const observerCallback = (mutations: MutationRecord[]): void => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes) as HTMLElement[];
          // Why we're searching the button in this way?
          // Because the send button is not rendered in the DOM tree until the user starts typing
          const sendButton = addedNodes.find(
            (node) =>
              node.nodeType === Node.ELEMENT_NODE &&
              node.matches(SEND_BUTTON_SELECTOR)
          );

          if (sendButton instanceof HTMLElement) {
            sendButton.addEventListener('click', handleDismissKeyboard);
          }
        }
      }
    };

    observerRef.current = new MutationObserver(observerCallback);
    const config = { childList: true, subtree: true };

    const inputElement = document.querySelector<HTMLInputElement>(
      INPUT_ELEMENT_SELECTOR
    );
    if (inputElement) {
      observerRef.current.observe(inputElement, config);
      inputElement.addEventListener('keydown', (event: KeyboardEvent) => {
        if (
          event.key === 'Enter' &&
          // Pressing Enter key on Android keyboard does't trigger the sending message event but carriage return event is fired instead
          isIOSMobile
        ) {
          handleDismissKeyboard();
        }
      });
    } else {
      console.warn('Input element not found for mutation observer');
    }

    return () => {
      observerRef.current?.disconnect();
      if (inputElement) {
        // Clean up event listener when the component is unmounted
        inputElement.removeEventListener('keydown', handleDismissKeyboard);
      }
    };
  }, []);
}

export default useAutoDismissMobileKeyboardHandler;
