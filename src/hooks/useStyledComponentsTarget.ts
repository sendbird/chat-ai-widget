import { useLayoutEffect, useRef, useState } from 'react';
import { version } from 'styled-components/package.json';

function isSCTarget(node: Node): node is HTMLStyleElement {
  return node instanceof HTMLStyleElement && node.getAttribute('data-styled-version') === version;
}

/**
 * This hook observes mutations in the document's head
 * When styled-components, which has already been initialized, is re-added to the head, for example `document.head.innerHTML += ''`, the styles may not render correctly.
 * Therefore, the target is moved to the body tag.
 * Similarly, the issue could also rise in below cases and the hook handles them accordingly:
 * - If <head> is removed, switch to <body>.
 * - If styles are removed from <head>, switch to <body>.
 * This is a short-term solution, and in the long run, we plan to remove styled-components altogether.
 * */
export function useStyledComponentsTarget() {
  const [target, setTarget] = useState(document.head);

  useLayoutEffect(() => {
    const observer = new MutationObserver((mutations) => {
      // Case 1: Detect if <head> is removed
      if (!document.head) {
        console.warn('document.head was removed, switching to <body>');
        setTarget(document.body);
        return;
      }
      mutations.forEach((mutation) => {
        // Case 2: Detect if styles are added to <head>
        if (mutation.target === document.head && mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (isSCTarget(node)) {
              console.warn('Styled Components styles re-injected, switching to <body>');
              setTarget(document.body);
              return;
            }
          }
        }
        // Case 3: Detect if styles are removed from <head>
        if (mutation.target === document.head && mutation.removedNodes.length > 0) {
          for (const node of mutation.removedNodes) {
            if (isSCTarget(node)) {
              console.warn('Styled Components styles removed, switching to <body>');
              setTarget(document.body);
              return;
            }
          }
        }
      });
    });

    observer.observe(document.head, { childList: true });

    return () => observer.disconnect();
  }, []);

  return target;
}
