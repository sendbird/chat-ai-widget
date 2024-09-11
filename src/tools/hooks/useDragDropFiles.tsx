import { createContext, ReactNode, DragEvent, useContext, useEffect, useRef } from 'react';

import { noop } from '../../utils';

type Unsubscribe = () => void;

interface DragDropContextProps {
  onDrop: (e: DragEvent<any>) => void;
  subscribe: (fn: (files: File[]) => void) => Unsubscribe;
}
const DragDropContext = createContext<DragDropContextProps>({
  onDrop: noop,
  subscribe: () => noop,
});

interface DragDropContextProviderProps {
  children?: ReactNode;
}
export const DragDropProvider = ({ children }: DragDropContextProviderProps) => {
  const subscribers = useRef(new Set<(files: File[]) => void>());

  return (
    <DragDropContext.Provider
      value={{
        onDrop: (e: DragEvent) => {
          e.preventDefault();
          if (e.dataTransfer?.files) {
            const files = Array.from(e.dataTransfer.files);
            if (files.length > 0) {
              subscribers.current.forEach((fn) => fn(files));
            }
          }
        },
        subscribe: (fn: (files: File[]) => void) => {
          subscribers.current.add(fn);

          return () => subscribers.current.delete(fn);
        },
      }}
    >
      {children}
    </DragDropContext.Provider>
  );
};

type UseDragDropFiles = {
  onDropFiles: (files: File[]) => void;
};
export const useDragDropFiles = ({ onDropFiles }: UseDragDropFiles) => {
  const { subscribe } = useContext(DragDropContext);
  useEffect(() => {
    return subscribe(onDropFiles);
  }, [onDropFiles]);
};
export const useDragDropArea = () => {
  const { onDrop } = useContext(DragDropContext);
  return { onDrop, onDragOver: (e: DragEvent<any>) => e.preventDefault() };
};
