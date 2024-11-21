import { e as b, v as n, P as y, F as h, V as L, t as I, B as N, n as O } from "./index-LcYjZ4t5.js";
var k = function(d, a) {
  return new Promise(function(v, r) {
    if (typeof XMLHttpRequest < "u") {
      var i = b.of(d), o = i.dispatcher, w = i.logger, p = a.requestId, E = a.method, x = a.url, u = a.headers, f = u === void 0 ? {} : u, c = a.data, H = c === void 0 ? "" : c, l = a.uploadProgressHandler, g = !1, e = new XMLHttpRequest();
      e.open(E, x), Object.keys(f).forEach(function(t) {
        e.setRequestHeader(t, f[t]);
      }), l && e.upload.addEventListener("progress", function(t) {
        t.lengthComputable ? l(p, t.loaded, t.total) : w.debug("Progress computing failed: `Content-Length` header is not given.");
      }), e.onabort = function() {
        r(n.requestCanceled);
      }, e.onerror = function(t) {
        r(n.networkError);
      }, e.onreadystatechange = function() {
        if (e.readyState === XMLHttpRequest.DONE && !g)
          if (e.status === 0 || e.status >= 200 && e.status < 400)
            try {
              var t = JSON.parse(e.responseText);
              v(new y(d, t));
            } catch {
              r(n.networkError);
            }
          else
            try {
              var m = JSON.parse(e.responseText);
              if (m) {
                var s = new n(m);
                if (s.isSessionExpiredError) {
                  if (o.dispatch(new h({ reason: s.code, message: s.message })), !(e instanceof L)) {
                    var q = new I();
                    return o.dispatch(new N({ request: e, deferred: q, error: s })), q.promise;
                  }
                } else
                  s.isSessionInvalidatedError && o.dispatch(new h({ reason: s.code, message: s.message }));
                r(s);
              } else
                r(n.requestFailed);
            } catch {
              r(n.requestFailed);
            }
      }, o.on(function(t) {
        t instanceof O && (t.requestId && t.requestId !== p || (g = !0, e.abort()));
      }), e.send(H);
    } else
      r(n.xmlHttpRequestNotSupported);
  });
};
export {
  k as xmlHttpRequest
};
