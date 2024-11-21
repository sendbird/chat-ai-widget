/**
 * This hook observes mutations in the document's head
 * When styled-components, which has already been initialized, is re-added to the head, for example `document.head.innerHTML += ''`, the styles may not render correctly.
 * Therefore, the target is moved to the body tag.
 *
 * This is a short-term solution, and in the long run, we plan to remove styled-components altogether.
 * */
export declare function useStyledComponentsTarget(): HTMLHeadElement;
