import { useLayoutEffect, useState } from 'react';
import { version } from 'styled-components/package.json';

const StyledId = 'sendbird-css-inject-id';

function isSCTarget(node: Node): node is HTMLStyleElement {
  return node instanceof HTMLStyleElement && node.getAttribute('data-styled-version') === version;
}

/**
 * This hook observes mutations in the document's head
 * When styled-components, which has already been initialized, is re-added to the head, for example `document.head.innerHTML += ''`, the styles may not render correctly.
 * Therefore, the target is moved to the body tag.
 * Similarly, the issue could also rise in below cases and the hook handles them accordingly:
 * - If styles are removed from <head>, re-add to head if head exists or switch to <body>.
 * This is a short-term solution, and in the long run, we plan to remove styled-components altogether.
 * */
export function useStyledComponentsTarget() {
  const [target, setTarget] = useState(document.head);

  useLayoutEffect(() => {
    const handleRemovedStyle = (styleElement: HTMLElement) => {
      if (styleElement && styleElement.parentElement !== document.body) {
        if (document.head) {
          console.warn('[useStyledComponentsTarget]: Head exists, re-adding style element ${StyledId} to <head>.');
          document.head.appendChild(styleElement);
          setTarget(document.head);
        } else {
          console.warn('[useStyledComponentsTarget]: Head missing, moving style element ${StyledId} to <body>.');
          document.body.appendChild(styleElement);
          setTarget(document.body);
        }
      }
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Handle added nodes
        Array.from(mutation.addedNodes).forEach((node) => {
          if (isSCTarget(node)) {
            console.warn('[useStyledComponentsTarget]: Styled Components styles re-injected, switching to <body>');
            setTarget(document.body);
          }
        });

        // Handle removed nodes
        Array.from(mutation.removedNodes).forEach((node) => {
          if (isSCTarget(node)) {
            console.warn('[useStyledComponentsTarget]: Styled Components styles removed, switching to <body>');
            setTarget(document.body);
          } else if (node instanceof HTMLElement && node.id === StyledId) {
            handleRemovedStyle(node);
          }
        });
      });
    });

    observer.observe(document.head, { childList: true });

    return () => observer.disconnect();
  }, []);

  return target;
}
