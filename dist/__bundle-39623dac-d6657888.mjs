import { R as S, g as s, I as y, D as m, U as N, Z as b, a as C, Y as D } from "./index-d4df4c22.mjs";
import "react";
import "react-dom";
var X = function(i, o) {
  return new Promise(function(w, r) {
    if (typeof XMLHttpRequest < "u") {
      var d = S.of(i), a = d.dispatcher, R = d.logger, p = o.requestId, E = o.method, H = o.url, u = o.headers, c = u === void 0 ? {} : u, l = o.data, I = l === void 0 ? "" : l, f = o.uploadProgressHandler, g = !1, e = new XMLHttpRequest();
      for (var h in e.open(E, H), c)
        e.setRequestHeader(h, c[h]);
      f && e.upload.addEventListener("progress", function(t) {
        t.lengthComputable ? f(p, t.loaded, t.total) : R.debug("Progress computing failed: `Content-Length` header is not given.");
      }), e.onabort = function() {
        r(s.requestCanceled);
      }, e.onerror = function(t) {
        r(s.networkError);
      }, e.onreadystatechange = function() {
        if (e.readyState === XMLHttpRequest.DONE && !g)
          if (e.status === 0 || e.status >= 200 && e.status < 400)
            try {
              var t = JSON.parse(e.responseText);
              w(new y(i, t));
            } catch {
              r(s.networkError);
            }
          else
            try {
              var q = JSON.parse(e.responseText);
              if (q) {
                var n = new s(q);
                if (n.isSessionExpiredError) {
                  if (a.dispatch(new m({ reason: n.code })), !(e instanceof N)) {
                    var v = new b();
                    return a.dispatch(new C({ request: e, deferred: v, error: n })), v.promise;
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
        t instanceof D && (t.requestId && t.requestId !== p || (g = !0, e.abort()));
      }), e.send(I);
    } else
      r(s.xmlHttpRequestNotSupported);
  });
};
export {
  X as xmlHttpRequest
};
