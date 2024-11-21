export declare const useBotStudioView: () => {
    /**
     * Returns a list of messages filtered according to business requirements.
     */
    filteredMessages: import('@sendbird/chat/message').BaseMessage[];
    /**
     * Determines whether to display the DateSeparator in the data list by comparing it with the welcome messages from Bot Studio.
     */
    shouldShowOriginalDate: (index: number) => boolean;
    /**
     * Renders the list of welcome messages from Bot Studio.
     */
    renderBotStudioWelcomeMessages: () => import("react/jsx-runtime").JSX.Element | null;
};
