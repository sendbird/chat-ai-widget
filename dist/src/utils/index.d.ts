import { default as SendbirdChat } from '@sendbird/chat';
import { BaseMessage } from '@sendbird/chat/message';
import { Source } from '../components/SourceContainer';

export declare enum Languages {
    typescript = "typescript",
    javascript = "javascript",
    java = "java",
    python = "python",
    unknown = "unknown"
}
export declare enum TokenType {
    string = "String",
    codeSnippet = "codeSnippet"
}
type StringToken = {
    type: TokenType.string;
    value: string;
};
type CodeSnippetToken = {
    type: TokenType.codeSnippet;
    value: string;
    language: Languages;
};
export type MessageMetaData = {
    metadatas?: Source[];
};
export type Token = StringToken | CodeSnippetToken;
export declare function splitText(inputString: string): string[];
export declare function getSourceFromMetadata(message: BaseMessage): Source[];
export declare function parseTextMessage(inputString: string, replacementTextList: [string, string][]): Token[];
export declare function replaceTextExtractsMultiple(input: string, replacements: [string, string][]): string;
export declare function replaceTextExtracts(input: string, searchText: string, replaceText: string): string;
export declare function extractUrls(text: string): string[];
export declare function replaceUrl(input: string): string;
export declare function assert(condition: any, message: string): asserts condition;
export declare function delay(delayTime: number): Promise<void>;
export declare function noop(): void;
export declare const isIOSMobile: boolean;
export declare const isAndroidMobile: boolean;
export declare const isMobile: (deviceType?: 'mobile' | 'desktop') => boolean;
export declare function hideChatBottomBanner(sdk: SendbirdChat): boolean;
export declare const replaceWithRegex: <T>(text: string, regex: RegExp, replacer: (params: {
    match: string;
    groups: string[];
    index: number;
}) => T) => (string | T)[];
export declare const isEmpty: (value: any) => boolean;
/**
 * Resolves a base URL and a path, ensuring there is exactly one slash between them.
 * @param baseURL - The base URL, e.g., 'https://api.example.com/'
 * @param path - The path to append to the baseURL, e.g., '/v1/resource'
 * @returns The resolved URL.
 */
export declare function resolvePath(baseURL: string, path: string): string;
export declare function isPastTime(timestamp: number): boolean;
export declare function getDateNDaysLater(daysToAdd: number): number;
export declare const localStorageHelper: () => {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
    deleteItem: (key: string) => void;
};
export declare function openURL(url?: string | null): Promise<void>;
export declare function isDashboardPreview(userAgent: object | undefined): boolean | undefined;
export declare function isCustomizedForDemo(userAgent: object | undefined): boolean | undefined;
export declare function getCustomizedDemoCategory(userAgent: {
    [key: string]: any;
} | undefined): string | undefined;
export declare function getDefaultServiceName(injectedServiceName?: string): string;
export declare function getFormattedDate(inputTime: Date): {
    formattedDate: string;
    formattedTime: string;
};
export declare function asSafeURL(url: string): string;
export declare function boldifyMessage(text: string): string;
declare global {
    interface Window {
        wp?: unknown;
        Shopify?: unknown;
    }
}
export declare function isShopify(): boolean;
export declare function isWordpress(): boolean;
export {};
