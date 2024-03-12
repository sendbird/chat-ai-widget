import * as React from 'react';
import { SheetScrollerContextType, SheetContextType } from './types';
export declare const SheetContext: React.Context<SheetContextType | undefined>;
export declare const useSheetContext: () => SheetContextType;
export declare const SheetScrollerContext: React.Context<SheetScrollerContextType | undefined>;
export declare function SheetScrollerContextProvider({ children, }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const useSheetScrollerContext: () => SheetScrollerContextType;
