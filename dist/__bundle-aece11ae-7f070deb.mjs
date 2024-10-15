import { L as S, g as s, R as X, a as m, P as y, Y as I, H as N, X as b } from "./index-dda2eb4e.mjs";
import "react";
import "react-dom";
var k = function(i, o) {
  return new Promise(function(w, r) {
    if (typeof XMLHttpRequest < "u") {
      var d = S.of(i), a = d.dispatcher, H = d.logger, p = o.requestId, L = o.method, R = o.url, u = o.headers, f = u === void 0 ? {} : u, l = o.data, E = l === void 0 ? "" : l, c = o.uploadProgressHandler, g = !1, e = new XMLHttpRequest();
      for (var h in e.open(L, R), f)
        e.setRequestHeader(h, f[h]);
      c && e.upload.addEventListener("progress", function(t) {
        t.lengthComputable ? c(p, t.loaded, t.total) : H.debug("Progress computing failed: `Content-Length` header is not given.");
      }), e.onabort = function() {
        r(s.requestCanceled);
      }, e.onerror = function(t) {
        r(s.networkError);
      }, e.onreadystatechange = function() {
        if (e.readyState === XMLHttpRequest.DONE && !g)
          if (e.status === 0 || e.status >= 200 && e.status < 400)
            try {
              var t = JSON.parse(e.responseText);
              w(new X(i, t));
            } catch {
              r(s.networkError);
            }
          else
            try {
              var q = JSON.parse(e.responseText);
              if (q) {
                var n = new s(q);
                if (n.isSessionExpiredError) {
                  if (a.dispatch(new m({ reason: n.code })), !(e instanceof y)) {
                    var v = new I();
                    return a.dispatch(new N({ request: e, deferred: v, error: n })), v.promise;
                  }
                } else
                  n.isSessionInvalidatedError && a.dispatch(new m({ reason: n.code }));
                r(n);
              } else
                r(s.requestFailed);
            } catch {
              r(s.requestFailed);
            }
      }, a.on(function(t) {
        t instanceof b && (t.requestId && t.requestId !== p || (g = !0, e.abort()));
      }), e.send(E);
    } else
      r(s.xmlHttpRequestNotSupported);
  });
};
export {
  k as xmlHttpRequest
};
