import { j as e } from "./index-6029417d.mjs";
import { CopyBlock as r, irBlack as t } from "react-code-blocks";
import "react";
import "react-dom";
function c({ token: o }) {
  return /* @__PURE__ */ e.jsx(
    r,
    {
      text: o.value,
      language: o.type,
      theme: t,
      showLineNumbers: !0,
      codeBlock: !0
    }
  );
}
export {
  c as CodeBlock
};
