/// <reference types="react" />
export declare const usePartialState: <S>(initial: S) => [S & Partial<S>, import('react').Dispatch<Partial<S>>];
