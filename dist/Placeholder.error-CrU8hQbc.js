import { j as e, a as s, I as n, b as t } from "./index-D_SjlShX.js";
import { P as i } from "./PlaceholderCommon-X4DdKuAP.js";
const x = ({ label: a = "Something went wrong", action: o, actionLabel: l = "Retry", ...r }) => e.jsx(i, { icon: "error", label: a, ...r, children: o && e.jsx(c, { onClick: o, label: l }) }), c = ({ label: a, onClick: o }) => e.jsxs("button", { className: s, tabIndex: 0, onClick: o, children: [e.jsx(n, { type: "refresh", size: 20 }), e.jsx(t, { type: "button1", color: "primary", children: a })] });
export {
  x as default
};
