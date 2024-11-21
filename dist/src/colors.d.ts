export declare function generateColorVariants(baseColor: string, theme?: string): {
    [key: string]: string;
};
export declare function getColorBasedOnSaturation(hex: string, alpha?: number): string;
export declare function generateCSSVariables(accentColor: string, themeType: string): Record<string, string>;
