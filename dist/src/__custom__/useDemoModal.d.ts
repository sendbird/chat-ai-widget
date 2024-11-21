import { ReactNode } from 'react';

interface UseDemoModalResult {
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    Modal: React.FC;
}
export declare function useDemoModal({ targetContainer, }: {
    targetContainer: HTMLElement | DocumentFragment;
}): UseDemoModalResult;
export {};
