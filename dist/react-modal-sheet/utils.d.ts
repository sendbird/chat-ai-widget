import * as React from 'react';
export declare function getClosest(nums: number[], goal: number): number;
export declare function applyRootStyles(rootId: string): void;
export declare function cleanupRootStyles(rootId: string): void;
export declare function inDescendingOrder(arr: number[]): boolean;
export declare function validateSnapTo({ snapTo, sheetHeight, }: {
    snapTo: number;
    sheetHeight: number;
}): number;
export declare function mergeRefs<T = any>(refs: React.ForwardedRef<T>[]): React.RefCallback<T>;
export declare function isTouchDevice(): boolean;
