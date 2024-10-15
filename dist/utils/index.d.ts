export declare function uuid(): string;
export declare const scrollUtil: () => void;
export declare function formatCreatedAtToAMPM(createdAt: number): string;
export declare function capitalize(word: string): string;
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
export type Token = StringToken | CodeSnippetToken;
export declare function splitText(inputString: string): string[];
export declare function MessageTextParser(inputString: string): Token[];
export declare function isNotLocalMessageCustomType(customType: string | undefined): boolean;
export declare function isValidJSON(str: any): boolean;
export declare function replaceTextExtractsMultiple(input: string, replacements: Array<[string, string]>): string;
export declare function replaceTextExtracts(input: string, searchText: string, replaceText: string): string;
export declare function replaceUrl(input: string): string;
export declare function isSpecialMessage(message: string, specialMessageList: string[]): boolean;
export declare function assert(condition: any, message: string): asserts condition;
export declare function delay(delayTime: number): Promise<void>;
export declare function noop(): void;
export declare const isMobile: boolean;
export declare function getFormattedDate(inputTime: Date): {
    formattedDate: string;
    formattedTime: string;
};
export declare const LOCAL_STORAGE_KEY_PREFIX = "chat-ai-widget";
export declare const localStorageHelper: () => {
    getItem: (_key: string) => any;
    setItem: (_key: string, value: string) => void;
    removeItem: (_key: string) => void;
};
export {};
