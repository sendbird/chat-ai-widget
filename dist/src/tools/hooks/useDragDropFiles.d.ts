import { ReactNode, DragEvent } from 'react';

interface DragDropContextProviderProps {
    children?: ReactNode;
}
export declare const DragDropProvider: ({ children }: DragDropContextProviderProps) => import("react/jsx-runtime").JSX.Element;
type UseDragDropFiles = {
    onDropFiles: (files: File[]) => void;
};
export declare const useDragDropFiles: ({ onDropFiles }: UseDragDropFiles) => void;
export declare const useDragDropArea: () => {
    onDrop: (e: DragEvent<any>) => void;
    onDragOver: (e: DragEvent<any>) => void;
};
export {};
