import {ChatAiWidget} from "@sendbird/chat-ai-widget";

// import React from "react";
// import {ReactComponent as StartingPageLogo} from './icons/icon-widget-chatbot.svg';
// import {ReactComponent as StartingPageBackground} from './icons/starting-page-bg-image-svg.svg';
//
// const customConstants = {
//     applicationId: 'AE8F7EEA-4555-4F86-AD8B-5E0BD86BFE67', // Your Sendbird application ID
//     botId: 'korean-food-master', // Your Sendbird bot ID
//     botNickName: 'Jake Sully',
//     suggestedMessageContent: {
//         replyContents: [
//             {
//                 title: 'Yes, it was helpful! 👍',
//                 text: 'Thanks for your feedback! You can also build your own AI chatbot in Sendbird.',
//                 buttonText: 'Try free trial',
//                 link: 'https://dashboard.sendbird.com/auth/signup',
//             },
//             {
//                 title: 'No, I need more help. 💬',
//                 text: 'I\'m sorry, we couldn\'t help you. Let us know how we can improve by talking to one of our teammates.',
//                 buttonText: 'Talk to an expert',
//                 link: 'https://sendbird.com/contact-sales',
//             },
//         ],
//         messageFilterList: [
//             'Can you please clarify?',
//             'How can I assist you',
//             'How can I help you',
//             'Can you clarify',
//             'That\'s not a question I can answer unfortunately',
//             'Try again',
//             'I couldn\'t find the answer to your question',
//             'Can you try again?',
//             'I apologize for any confusion',
//             'I\'m sorry, I couldn\'t understand your question',
//             'That\'s not a valid question',
//             'Is there a specific question you have',
//             'I\'m here to help you with any questions you have',
//         ],
//     },
//     createGroupChannelParams: {
//         name: 'Sendbird AI Chatbot',
//         coverUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ix' +
//             'lib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     },
//     startingPageContent: {
//         headerContent: {
//             headerOne: 'I\'m Sendbird AI ChatBot',
//             headerTwo: 'Ask me anything!',
//             betaMark: true,
//         },
//         messageContent: {
//             header: 'AI ChatBot',
//             body: 'Hi~ I\'m Sendbird AI ChatBot. Ask me anything!',
//         },
//         logoContent: {
//             Component: StartingPageLogo,
//             width: '30px',
//         },
//         backGroundContent: {
//             Component: StartingPageBackground,
//             height: '240px'
//         }
//     },
//     chatBottomContent: {
//         text: 'Sendbird AI ChatBot',
//         backgroundColor: 'linear-gradient(273.73deg, #4DCD90 -0.83%, #6210CC 48.04%, #6210CC 75.45%)',
//     },
// };

const App = () => {
    return (
        <ChatAiWidget
            applicationId = "AE8F7EEA-4555-4F86-AD8B-5E0BD86BFE67"
            botId = "korean-food-master"
        />
        // <ChatAiWidget
        //     applicationId = {customConstants.applicationId},
        //     botId = {customConstants.botId},
        //     botNickName: {customConstants.botNickName},
        //     suggestedMessageContent = {customConstants.suggestedMessageContent}
        //     createGroupChannelParams = {customConstants.createGroupChannelParams}
        //     startingPageContent = {customConstants.startingPageContent}
        //     chatBottomContent = {customConstants.chatBottomContent}
        // />
    );
};

export default App;
