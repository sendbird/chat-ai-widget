import { useLayoutEffect, useRef, useState } from 'react';
import { version } from 'styled-components/package.json';

function isSCTarget(node: Node): node is HTMLStyleElement {
  return (
    node instanceof HTMLStyleElement &&
    node.getAttribute('data-styled-version') === version
  );
}

/**
 * This hook observes mutations in the document's head
 * When styled-components, which has already been initialized, is re-added to the head, for example `document.head.innerHTML += ''`, the styles may not render correctly.
 * Therefore, the target is moved to the body tag.
 *
 * This is a short-term solution, and in the long run, we plan to remove styled-components altogether.
 * */
export function useStyledComponentsTarget() {
  const scInitialized = useRef(false);
  const [target, setTarget] = useState(document.head);

  useLayoutEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const mutation = mutations.find(
        (it) => it.target === document.head && it.addedNodes.length > 0
      );

      for (const node of mutation?.addedNodes ?? []) {
        if (!isSCTarget(node)) continue;

        if (scInitialized.current) {
          setTarget(document.body);
        } else {
          scInitialized.current = true;
        }
      }
    });
    observer.observe(document.head, { childList: true });
    return () => observer.disconnect();
  }, []);

  return target;
}
