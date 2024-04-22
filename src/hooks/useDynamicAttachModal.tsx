import { useEffect } from 'react';

import { elementIds } from '../const';

const parentId = elementIds.widgetWindow;
const childId = elementIds.uikitModal;

function useDynamicAttachModal() {
  useEffect(() => {
    // Set up a MutationObserver to monitor changes in the parent element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          // Check if the added nodes include the one with parentId
          Array.from(mutation.addedNodes).forEach((node) => {
            if (node?.id === parentId) {
              const parent = document.getElementById(parentId);
              const child = document.getElementById(childId);
              if (parent && child) {
                parent.appendChild(child);
              }
            }
          });
        }
      });
    });

    // Set the observer to monitor the entire document
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useDynamicAttachModal;
