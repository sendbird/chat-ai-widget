/// <reference types="react" />
interface Params {
    isLastBotMessage: boolean;
    lastMessageRef: React.RefObject<HTMLDivElement>;
    bottomBuffer: number;
}
export declare function useScrollOnStreaming({ isLastBotMessage, lastMessageRef, bottomBuffer, }: Params): void;
export {};
