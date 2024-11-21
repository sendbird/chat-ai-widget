export interface CommonTheme {
    bgColor: {
        base: string;
        messageInput: string;
        incomingMessage: string;
        outgoingMessage: string;
        suggestedReply: string;
        bottomBanner: string;
        loadingScreen: string;
        hover: {
            incomingMessage: string;
            outgoingMessage: string;
            suggestedReply: string;
            carouselButton: string;
        };
        carouselItem: string;
        carouselButton: string;
        carouselButtonIcon: string;
        formInput: {
            default: string;
            disabled: string;
        };
        formChip: {
            default: string;
            selected: string;
            submittedDefault: string;
            submittedSelected: string;
            hover: string;
            focus: string;
        };
        formButton: {
            disabled: string;
        };
        messageDataContent: {
            sidebar: string;
        };
    };
    textColor: {
        incomingMessage: string;
        outgoingMessage: string;
        errorMessage: string;
        sentTime: string;
        sourceInfo: string;
        suggestedReply: string;
        bottomBanner: {
            poweredBy: string;
            logo: string;
        };
        carouselItem: string;
        placeholder: string;
        formChip: {
            default: string;
            selected: string;
            submittedDefault: string;
            submittedSelected: string;
            hover: string;
            focus: string;
        };
        formButton: {
            disabled: string;
        };
        activeButton: string;
        messageDataContent: {
            default: string;
            link: {
                default: string;
                hover: string;
                focus: string;
                active: string;
                disabled: string;
            };
            sideNote: string;
        };
    };
    borderColor: {
        channelHeader: string;
        carouselItem: string;
        formInput: {
            default: string;
            active: string;
            focus: string;
            error: string;
        };
        formChip: {
            default: string;
            selected: string;
            hover: string;
            focus: string;
        };
        messageDataContent: {
            intentType: string;
        };
    };
    accentColor: string;
}
interface Theme {
    light: CommonTheme;
    dark: CommonTheme;
}
export declare function getTheme({ accentColor, botMessageBGColor, }: {
    accentColor?: string;
    botMessageBGColor?: string;
}): Theme;
export {};
