import { createHotContext as __vite__createHotContext } from "/chat-ai-widget/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/CustomMessage.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/chat-ai-widget/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=dc207b68"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/chat-ai-widget/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import AdminMessage from "/chat-ai-widget/src/components/AdminMessage.tsx";
import BotMessageWithBodyInput from "/chat-ai-widget/src/components/BotMessageWithBodyInput.tsx";
import CurrentUserMessage from "/chat-ai-widget/src/components/CurrentUserMessage.tsx";
import CustomMessageBody from "/chat-ai-widget/src/components/CustomMessageBody.tsx";
import CustomTypingIndicatorBubble from "/chat-ai-widget/src/components/CustomTypingIndicatorBubble.tsx";
import FormMessage from "/chat-ai-widget/src/components/FormMessage.tsx";
import ParsedBotMessageBody from "/chat-ai-widget/src/components/ParsedBotMessageBody.tsx";
import SuggestedReplyMessageBody from "/chat-ai-widget/src/components/SuggestedReplyMessageBody.tsx";
import UserMessageWithBodyInput from "/chat-ai-widget/src/components/UserMessageWithBodyInput.tsx";
import { LOCAL_MESSAGE_CUSTOM_TYPE } from "/chat-ai-widget/src/const.ts";
import { useConstantState } from "/chat-ai-widget/src/context/ConstantContext.tsx";
import useWidgetLocalStorage from "/chat-ai-widget/src/hooks/useWidgetLocalStorage.ts";
import { MessageTextParser, replaceTextExtractsMultiple } from "/chat-ai-widget/src/utils/index.ts";
import { isFormMessage, isLocalMessageCustomType } from "/chat-ai-widget/src/utils/messages.ts";
export default function CustomMessage(props) {
  _s();
  const {
    message,
    activeSpinnerId,
    botUser,
    lastMessageRef,
    chainTop,
    chainBottom,
    isBotWelcomeMessage,
    isLastBotMessage,
    messageCount
  } = props;
  const commonProps = {
    chainTop,
    chainBottom,
    isBotWelcomeMessage,
    isLastBotMessage,
    messageCount,
    message
  };
  const {
    replacementTextList
  } = useConstantState();
  const {
    userId
  } = useWidgetLocalStorage();
  if (message.messageType === "admin") {
    return /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(AdminMessage, { message }, void 0, false, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 61,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 61,
      columnNumber: 12
    }, this);
  }
  if (isFormMessage(message)) {
    const forms = message.extendedMessagePayload.forms;
    return /* @__PURE__ */ jsxDEV(BotMessageWithBodyInput, { ...commonProps, botUser, bodyComponent: /* @__PURE__ */ jsxDEV(FormMessage, { form: forms[0], message }, void 0, false, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 65,
      columnNumber: 87
    }, this), isFormMessage: true }, void 0, false, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 65,
      columnNumber: 12
    }, this);
  }
  if (message.sender?.userId === userId) {
    return /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV(CurrentUserMessage, { message }, void 0, false, {
        fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
        lineNumber: 71,
        columnNumber: 10
      }, this),
      activeSpinnerId === message.messageId && /* @__PURE__ */ jsxDEV(CustomTypingIndicatorBubble, { botProfileUrl: botUser?.profileUrl }, void 0, false, {
        fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
        lineNumber: 72,
        columnNumber: 51
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 70,
      columnNumber: 12
    }, this);
  }
  if (message.sender?.userId !== botUser.userId) {
    return /* @__PURE__ */ jsxDEV("div", { ref: lastMessageRef, children: /* @__PURE__ */ jsxDEV(UserMessageWithBodyInput, { ...commonProps, user: message?.sender, bodyComponent: /* @__PURE__ */ jsxDEV(CustomMessageBody, { message: message.message }, void 0, false, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 79,
      columnNumber: 91
    }, this) }, void 0, false, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 79,
      columnNumber: 10
    }, this) }, void 0, false, {
      fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
      lineNumber: 78,
      columnNumber: 12
    }, this);
  }
  if (isLocalMessageCustomType(message.customType)) {
    if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
      return /* @__PURE__ */ jsxDEV(BotMessageWithBodyInput, { ...commonProps, botUser, bodyComponent: /* @__PURE__ */ jsxDEV(SuggestedReplyMessageBody, { message }, void 0, false, {
        fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
        lineNumber: 87,
        columnNumber: 89
      }, this) }, void 0, false, {
        fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
        lineNumber: 87,
        columnNumber: 14
      }, this);
    }
  }
  if (message.message === undefined) {
      console.log('## message: ', message);
  }
  const tokens = MessageTextParser(message.message);
  tokens.forEach((token) => {
    if (token.type === "String") {
      token.value = replaceTextExtractsMultiple(token.value, replacementTextList);
    }
  });
  return /* @__PURE__ */ jsxDEV("div", { ref: lastMessageRef, children: /* @__PURE__ */ jsxDEV(BotMessageWithBodyInput, { ...commonProps, botUser, bodyComponent: /* @__PURE__ */ jsxDEV(ParsedBotMessageBody, { message, tokens }, void 0, false, {
    fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
    lineNumber: 104,
    columnNumber: 82
  }, this) }, void 0, false, {
    fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_s(CustomMessage, "uOdsPza8iBVdqBml5O9WEQX/e+c=", false, function() {
  return [useConstantState, useWidgetLocalStorage];
});
_c = CustomMessage;
var _c;
$RefreshReg$(_c, "CustomMessage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/liamcho/GitHub/chat-ai-widget/src/components/CustomMessage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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TztBQUMxRW9CLFNBQU9DLFFBQVEsQ0FBQ0MsVUFBaUI7QUFDL0IsUUFBSUEsTUFBTUMsU0FBUyxVQUFVO0FBRTNCRCxZQUFNRSxRQUFROUIsNEJBQ1o0QixNQUFNRSxPQUNOZCxtQkFDRjtBQUFBLElBSUY7QUFBQSxFQUNGLENBQUM7QUFFRCxTQUNFLHVCQUFDLFNBQUksS0FBS1AsZ0JBQ1IsaUNBQUMsMkJBQ0MsR0FBSU0sYUFDSixTQUNBLGVBQ0UsdUJBQUMsd0JBQ0MsU0FDQSxVQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFaUIsS0FOckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFHLEtBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdBO0FBRUo7QUFBQ1YsR0FsSHVCRixlQUFhO0FBQUEsVUFvQkhOLGtCQUNiQyxxQkFBcUI7QUFBQTtBQUFBaUMsS0FyQmxCNUI7QUFBYSxJQUFBNEI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkFkbWluTWVzc2FnZSIsIkJvdE1lc3NhZ2VXaXRoQm9keUlucHV0IiwiQ3VycmVudFVzZXJNZXNzYWdlIiwiQ3VzdG9tTWVzc2FnZUJvZHkiLCJDdXN0b21UeXBpbmdJbmRpY2F0b3JCdWJibGUiLCJGb3JtTWVzc2FnZSIsIlBhcnNlZEJvdE1lc3NhZ2VCb2R5IiwiU3VnZ2VzdGVkUmVwbHlNZXNzYWdlQm9keSIsIlVzZXJNZXNzYWdlV2l0aEJvZHlJbnB1dCIsIkxPQ0FMX01FU1NBR0VfQ1VTVE9NX1RZUEUiLCJ1c2VDb25zdGFudFN0YXRlIiwidXNlV2lkZ2V0TG9jYWxTdG9yYWdlIiwiTWVzc2FnZVRleHRQYXJzZXIiLCJyZXBsYWNlVGV4dEV4dHJhY3RzTXVsdGlwbGUiLCJpc0Zvcm1NZXNzYWdlIiwiaXNMb2NhbE1lc3NhZ2VDdXN0b21UeXBlIiwiQ3VzdG9tTWVzc2FnZSIsInByb3BzIiwiX3MiLCJtZXNzYWdlIiwiYWN0aXZlU3Bpbm5lcklkIiwiYm90VXNlciIsImxhc3RNZXNzYWdlUmVmIiwiY2hhaW5Ub3AiLCJjaGFpbkJvdHRvbSIsImlzQm90V2VsY29tZU1lc3NhZ2UiLCJpc0xhc3RCb3RNZXNzYWdlIiwibWVzc2FnZUNvdW50IiwiY29tbW9uUHJvcHMiLCJyZXBsYWNlbWVudFRleHRMaXN0IiwidXNlcklkIiwibWVzc2FnZVR5cGUiLCJmb3JtcyIsImV4dGVuZGVkTWVzc2FnZVBheWxvYWQiLCJzZW5kZXIiLCJtZXNzYWdlSWQiLCJwcm9maWxlVXJsIiwiY3VzdG9tVHlwZSIsImxpbmtTdWdnZXN0aW9uIiwidG9rZW5zIiwiZm9yRWFjaCIsInRva2VuIiwidHlwZSIsInZhbHVlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJDdXN0b21NZXNzYWdlLnRzeCJdLCJmaWxlIjoiL1VzZXJzL2xpYW1jaG8vR2l0SHViL2NoYXQtYWktd2lkZ2V0L3NyYy9jb21wb25lbnRzL0N1c3RvbU1lc3NhZ2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BzZW5kYmlyZC9jaGF0JztcbmltcG9ydCB7IFVzZXJNZXNzYWdlIH0gZnJvbSAnQHNlbmRiaXJkL2NoYXQvbWVzc2FnZSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCB7IEV2ZXJ5TWVzc2FnZSB9IGZyb20gJ1NlbmRiaXJkVUlLaXRHbG9iYWwnO1xuXG5pbXBvcnQgQWRtaW5NZXNzYWdlIGZyb20gJy4vQWRtaW5NZXNzYWdlJztcbmltcG9ydCBCb3RNZXNzYWdlV2l0aEJvZHlJbnB1dCBmcm9tICcuL0JvdE1lc3NhZ2VXaXRoQm9keUlucHV0JztcbmltcG9ydCBDdXJyZW50VXNlck1lc3NhZ2UgZnJvbSAnLi9DdXJyZW50VXNlck1lc3NhZ2UnO1xuaW1wb3J0IEN1c3RvbU1lc3NhZ2VCb2R5IGZyb20gJy4vQ3VzdG9tTWVzc2FnZUJvZHknO1xuaW1wb3J0IEN1c3RvbVR5cGluZ0luZGljYXRvckJ1YmJsZSBmcm9tICcuL0N1c3RvbVR5cGluZ0luZGljYXRvckJ1YmJsZSc7XG5pbXBvcnQgRm9ybU1lc3NhZ2UgZnJvbSAnLi9Gb3JtTWVzc2FnZSc7XG5pbXBvcnQgUGFyc2VkQm90TWVzc2FnZUJvZHkgZnJvbSAnLi9QYXJzZWRCb3RNZXNzYWdlQm9keSc7XG5pbXBvcnQgU3VnZ2VzdGVkUmVwbHlNZXNzYWdlQm9keSBmcm9tICcuL1N1Z2dlc3RlZFJlcGx5TWVzc2FnZUJvZHknO1xuaW1wb3J0IFVzZXJNZXNzYWdlV2l0aEJvZHlJbnB1dCBmcm9tICcuL1VzZXJNZXNzYWdlV2l0aEJvZHlJbnB1dCc7XG5pbXBvcnQgeyBMT0NBTF9NRVNTQUdFX0NVU1RPTV9UWVBFIH0gZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgdXNlQ29uc3RhbnRTdGF0ZSB9IGZyb20gJy4uL2NvbnRleHQvQ29uc3RhbnRDb250ZXh0JztcbmltcG9ydCB1c2VXaWRnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi4vaG9va3MvdXNlV2lkZ2V0TG9jYWxTdG9yYWdlJztcbmltcG9ydCB7XG4gIE1lc3NhZ2VUZXh0UGFyc2VyLFxuICByZXBsYWNlVGV4dEV4dHJhY3RzTXVsdGlwbGUsXG4gIFRva2VuLFxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0Zvcm1NZXNzYWdlLCBpc0xvY2FsTWVzc2FnZUN1c3RvbVR5cGUgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2U6IEV2ZXJ5TWVzc2FnZTtcbiAgYWN0aXZlU3Bpbm5lcklkOiBudW1iZXI7XG4gIGJvdFVzZXI6IFVzZXI7XG4gIGxhc3RNZXNzYWdlUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuICBpc0JvdFdlbGNvbWVNZXNzYWdlOiBib29sZWFuO1xuICBpc0xhc3RCb3RNZXNzYWdlOiBib29sZWFuO1xuICBtZXNzYWdlQ291bnQ6IG51bWJlcjtcbiAgY2hhaW5Ub3A/OiBib29sZWFuO1xuICBjaGFpbkJvdHRvbT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21NZXNzYWdlKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgbWVzc2FnZSxcbiAgICBhY3RpdmVTcGlubmVySWQsXG4gICAgYm90VXNlcixcbiAgICBsYXN0TWVzc2FnZVJlZixcbiAgICBjaGFpblRvcCxcbiAgICBjaGFpbkJvdHRvbSxcbiAgICBpc0JvdFdlbGNvbWVNZXNzYWdlLFxuICAgIGlzTGFzdEJvdE1lc3NhZ2UsXG4gICAgbWVzc2FnZUNvdW50LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgIGNoYWluVG9wLFxuICAgIGNoYWluQm90dG9tLFxuICAgIGlzQm90V2VsY29tZU1lc3NhZ2UsXG4gICAgaXNMYXN0Qm90TWVzc2FnZSxcbiAgICBtZXNzYWdlQ291bnQsXG4gICAgbWVzc2FnZSxcbiAgfTtcbiAgY29uc3QgeyByZXBsYWNlbWVudFRleHRMaXN0IH0gPSB1c2VDb25zdGFudFN0YXRlKCk7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VXaWRnZXRMb2NhbFN0b3JhZ2UoKTtcblxuICAvLyBhZG1pbiBtZXNzYWdlXG4gIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlID09PSAnYWRtaW4nKSB7XG4gICAgcmV0dXJuIDxkaXY+ezxBZG1pbk1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZX0gLz59PC9kaXY+O1xuICB9XG5cbiAgaWYgKGlzRm9ybU1lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICBjb25zdCBmb3JtcyA9IG1lc3NhZ2UuZXh0ZW5kZWRNZXNzYWdlUGF5bG9hZC5mb3JtcztcbiAgICByZXR1cm4gKFxuICAgICAgPEJvdE1lc3NhZ2VXaXRoQm9keUlucHV0XG4gICAgICAgIHsuLi5jb21tb25Qcm9wc31cbiAgICAgICAgYm90VXNlcj17Ym90VXNlcn1cbiAgICAgICAgYm9keUNvbXBvbmVudD17PEZvcm1NZXNzYWdlIGZvcm09e2Zvcm1zWzBdfSBtZXNzYWdlPXttZXNzYWdlfSAvPn1cbiAgICAgICAgaXNGb3JtTWVzc2FnZT17dHJ1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFNlbnQgYnkgY3VycmVudCB1c2VyXG4gIGlmICgobWVzc2FnZSBhcyBVc2VyTWVzc2FnZSkuc2VuZGVyPy51c2VySWQgPT09IHVzZXJJZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7PEN1cnJlbnRVc2VyTWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlIGFzIFVzZXJNZXNzYWdlfSAvPn1cbiAgICAgICAge2FjdGl2ZVNwaW5uZXJJZCA9PT0gbWVzc2FnZS5tZXNzYWdlSWQgJiYgKFxuICAgICAgICAgIDxDdXN0b21UeXBpbmdJbmRpY2F0b3JCdWJibGUgYm90UHJvZmlsZVVybD17Ym90VXNlcj8ucHJvZmlsZVVybH0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvLyBTZW50IGJ5IG90aGVyIHVzZXJzXG4gIGlmICgobWVzc2FnZSBhcyBVc2VyTWVzc2FnZSkuc2VuZGVyPy51c2VySWQgIT09IGJvdFVzZXIudXNlcklkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtsYXN0TWVzc2FnZVJlZn0+XG4gICAgICAgIHtcbiAgICAgICAgICA8VXNlck1lc3NhZ2VXaXRoQm9keUlucHV0XG4gICAgICAgICAgICB7Li4uY29tbW9uUHJvcHN9XG4gICAgICAgICAgICB1c2VyPXttZXNzYWdlPy5zZW5kZXJ9XG4gICAgICAgICAgICBib2R5Q29tcG9uZW50PXtcbiAgICAgICAgICAgICAgPEN1c3RvbU1lc3NhZ2VCb2R5IG1lc3NhZ2U9eyhtZXNzYWdlIGFzIFVzZXJNZXNzYWdlKS5tZXNzYWdlfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvLyBTZW50IGJ5IGJvdFxuICAvLyBmb3Igc3RhdGljIHN1Z2dlc3RlZCByZXBsaWVzXG4gIGlmIChpc0xvY2FsTWVzc2FnZUN1c3RvbVR5cGUobWVzc2FnZS5jdXN0b21UeXBlKSkge1xuICAgIGlmIChtZXNzYWdlLmN1c3RvbVR5cGUgPT09IExPQ0FMX01FU1NBR0VfQ1VTVE9NX1RZUEUubGlua1N1Z2dlc3Rpb24pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3RNZXNzYWdlV2l0aEJvZHlJbnB1dFxuICAgICAgICAgIHsuLi5jb21tb25Qcm9wc31cbiAgICAgICAgICBib3RVc2VyPXtib3RVc2VyfVxuICAgICAgICAgIGJvZHlDb21wb25lbnQ9e1xuICAgICAgICAgICAgPFN1Z2dlc3RlZFJlcGx5TWVzc2FnZUJvZHkgbWVzc2FnZT17bWVzc2FnZSBhcyBVc2VyTWVzc2FnZX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vcm1hbCBtZXNzYWdlXG4gIGNvbnN0IHRva2VuczogVG9rZW5bXSA9IE1lc3NhZ2VUZXh0UGFyc2VyKChtZXNzYWdlIGFzIFVzZXJNZXNzYWdlKS5tZXNzYWdlKTtcbiAgdG9rZW5zLmZvckVhY2goKHRva2VuOiBUb2tlbikgPT4ge1xuICAgIGlmICh0b2tlbi50eXBlID09PSAnU3RyaW5nJykge1xuICAgICAgLy8gUmVkYWN0IHRleHQgdG8gcmVwbGFjZW1lbnRUZXh0TGlzdFxuICAgICAgdG9rZW4udmFsdWUgPSByZXBsYWNlVGV4dEV4dHJhY3RzTXVsdGlwbGUoXG4gICAgICAgIHRva2VuLnZhbHVlLFxuICAgICAgICByZXBsYWNlbWVudFRleHRMaXN0XG4gICAgICApO1xuXG4gICAgICAvLyBDb252ZXJ0IHVybCBzdHJpbmcgdG8gY29tcG9uZW50IC0tPiBoYW5kbGVkIGJ5IFBhcnNlZEJvdE1lc3NhZ2VCb2R5ID4gUmVnZXhUZXh0XG4gICAgICAvLyB0b2tlbi52YWx1ZSA9IHJlcGxhY2VVcmwodG9rZW4udmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bGFzdE1lc3NhZ2VSZWZ9PlxuICAgICAgPEJvdE1lc3NhZ2VXaXRoQm9keUlucHV0XG4gICAgICAgIHsuLi5jb21tb25Qcm9wc31cbiAgICAgICAgYm90VXNlcj17Ym90VXNlcn1cbiAgICAgICAgYm9keUNvbXBvbmVudD17XG4gICAgICAgICAgPFBhcnNlZEJvdE1lc3NhZ2VCb2R5XG4gICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlIGFzIFVzZXJNZXNzYWdlfVxuICAgICAgICAgICAgdG9rZW5zPXt0b2tlbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==