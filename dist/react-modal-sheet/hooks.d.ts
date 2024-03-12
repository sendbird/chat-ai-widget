import * as React from 'react';
import { SheetEvents } from './types';
import { BoundingBox } from 'framer-motion';
export declare const useIsomorphicLayoutEffect: typeof React.useEffect;
export declare function useModalEffect(isOpen: boolean, rootId?: string): void;
export declare function useEventCallbacks(isOpen: boolean, callbacks: React.MutableRefObject<SheetEvents>): {
    handleAnimationComplete: () => void;
};
export declare function useWindowHeight(): number;
export declare function usePrevious<T>(state: T): T | undefined;
export declare function useEvent<T extends (...args: any[]) => any>(handler: T): T;
export declare function useDragConstraints(): {
    constraintsRef: React.MutableRefObject<any>;
    onMeasureDragConstraints: () => BoundingBox;
};
