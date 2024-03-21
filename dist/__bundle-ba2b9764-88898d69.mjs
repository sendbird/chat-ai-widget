import { c as g } from "./index-b48b666e.mjs";
function H(e, t) {
  for (var o = 0; o < t.length; o++) {
    const s = t[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const n in s)
        if (n !== "default" && !(n in e)) {
          const r = Object.getOwnPropertyDescriptor(s, n);
          r && Object.defineProperty(e, n, r.get ? r : {
            enumerable: !0,
            get: () => s[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var x = {}, h = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof g < "u" && g || {}, P = "URLSearchParams" in h, D = "Symbol" in h && "iterator" in Symbol, m = "FileReader" in h && "Blob" in h && function() {
  try {
    return new Blob(), !0;
  } catch {
    return !1;
  }
}(), j = "FormData" in h, _ = "ArrayBuffer" in h;
if (_)
  var L = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], q = ArrayBuffer.isView || function(e) {
    return e && L.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function y(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function E(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function v(e) {
  var t = { next: function() {
    var o = e.shift();
    return { done: o === void 0, value: o };
  } };
  return D && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function i(e) {
  this.map = {}, e instanceof i ? e.forEach(function(t, o) {
    this.append(o, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
function A(e) {
  if (!e._noBody)
    return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (e.bodyUsed = !0);
}
function S(e) {
  return new Promise(function(t, o) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      o(e.error);
    };
  });
}
function N(e) {
  var t = new FileReader(), o = S(t);
  return t.readAsArrayBuffer(e), o;
}
function U(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function R() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    var t;
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : m && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : j && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : P && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : _ && m && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = U(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _ && (ArrayBuffer.prototype.isPrototypeOf(e) || q(e)) ? this._bodyArrayBuffer = U(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : P && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, m && (this.blob = function() {
    var e = A(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = A(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
    }
    if (m)
      return this.blob().then(N);
    throw new Error("could not read as ArrayBuffer");
  }, this.text = function() {
    var e, t, o, s, n, r = A(this);
    if (r)
      return r;
    if (this._bodyBlob)
      return e = this._bodyBlob, t = new FileReader(), o = S(t), s = /charset=([A-Za-z0-9_-]+)/.exec(e.type), n = s ? s[1] : "utf-8", t.readAsText(e, n), o;
    if (this._bodyArrayBuffer)
      return Promise.resolve(function(w) {
        for (var c = new Uint8Array(w), a = new Array(c.length), u = 0; u < c.length; u++)
          a[u] = String.fromCharCode(c[u]);
        return a.join("");
      }(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, j && (this.formData = function() {
    return this.text().then(G);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
i.prototype.append = function(e, t) {
  e = y(e), t = E(t);
  var o = this.map[e];
  this.map[e] = o ? o + ", " + t : t;
}, i.prototype.delete = function(e) {
  delete this.map[y(e)];
}, i.prototype.get = function(e) {
  return e = y(e), this.has(e) ? this.map[e] : null;
}, i.prototype.has = function(e) {
  return this.map.hasOwnProperty(y(e));
}, i.prototype.set = function(e, t) {
  this.map[y(e)] = E(t);
}, i.prototype.forEach = function(e, t) {
  for (var o in this.map)
    this.map.hasOwnProperty(o) && e.call(t, this.map[o], o, this);
}, i.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, o) {
    e.push(o);
  }), v(e);
}, i.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), v(e);
}, i.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, o) {
    e.push([o, t]);
  }), v(e);
}, D && (i.prototype[Symbol.iterator] = i.prototype.entries);
var k = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function d(e, t) {
  if (!(this instanceof d))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  var o, s, n = (t = t || {}).body;
  if (e instanceof d) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new i(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || e._bodyInit == null || (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new i(t.headers)), this.method = (o = t.method || this.method || "GET", s = o.toUpperCase(), k.indexOf(s) > -1 ? s : o), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in h)
      return new AbortController().signal;
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(n), !(this.method !== "GET" && this.method !== "HEAD" || t.cache !== "no-store" && t.cache !== "no-cache")) {
    var r = /([?&])_=[^&]*/;
    r.test(this.url) ? this.url = this.url.replace(r, "$1_=" + (/* @__PURE__ */ new Date()).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
  }
}
function G(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(o) {
    if (o) {
      var s = o.split("="), n = s.shift().replace(/\+/g, " "), r = s.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(n), decodeURIComponent(r));
    }
  }), t;
}
function f(e, t) {
  if (!(this instanceof f))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new i(t.headers), this.url = t.url || "", this._initBody(e);
}
d.prototype.clone = function() {
  return new d(this, { body: this._bodyInit });
}, R.call(d.prototype), R.call(f.prototype), f.prototype.clone = function() {
  return new f(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new i(this.headers), url: this.url });
}, f.error = function() {
  var e = new f(null, { status: 200, statusText: "" });
  return e.status = 0, e.type = "error", e;
};
var M = [301, 302, 303, 307, 308];
f.redirect = function(e, t) {
  if (M.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new f(null, { status: t, headers: { location: e } });
};
var p = h.DOMException;
try {
  new p();
} catch {
  (p = function(t, o) {
    this.message = t, this.name = o;
    var s = Error(t);
    this.stack = s.stack;
  }).prototype = Object.create(Error.prototype), p.prototype.constructor = p;
}
function T(e, t) {
  return new Promise(function(o, s) {
    var n = new d(e, t);
    if (n.signal && n.signal.aborted)
      return s(new p("Aborted", "AbortError"));
    var r = new XMLHttpRequest();
    function w() {
      r.abort();
    }
    if (r.onload = function() {
      var a, u, b = { statusText: r.statusText, headers: (a = r.getAllResponseHeaders() || "", u = new i(), a.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(l) {
        return l.indexOf(`
`) === 0 ? l.substr(1, l.length) : l;
      }).forEach(function(l) {
        var B = l.split(":"), O = B.shift().trim();
        if (O) {
          var I = B.join(":").trim();
          try {
            u.append(O, I);
          } catch (C) {
            console.warn("Response " + C.message);
          }
        }
      }), u) };
      n.url.startsWith("file://") && (r.status < 200 || r.status > 599) ? b.status = 200 : b.status = r.status, b.url = "responseURL" in r ? r.responseURL : b.headers.get("X-Request-URL");
      var F = "response" in r ? r.response : r.responseText;
      setTimeout(function() {
        o(new f(F, b));
      }, 0);
    }, r.onerror = function() {
      setTimeout(function() {
        s(new TypeError("Network request failed"));
      }, 0);
    }, r.ontimeout = function() {
      setTimeout(function() {
        s(new TypeError("Network request timed out"));
      }, 0);
    }, r.onabort = function() {
      setTimeout(function() {
        s(new p("Aborted", "AbortError"));
      }, 0);
    }, r.open(n.method, function(a) {
      try {
        return a === "" && h.location.href ? h.location.href : a;
      } catch {
        return a;
      }
    }(n.url), !0), n.credentials === "include" ? r.withCredentials = !0 : n.credentials === "omit" && (r.withCredentials = !1), "responseType" in r && (m ? r.responseType = "blob" : _ && (r.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof i || h.Headers && t.headers instanceof h.Headers)) {
      var c = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(a) {
        c.push(y(a)), r.setRequestHeader(a, E(t.headers[a]));
      }), n.headers.forEach(function(a, u) {
        c.indexOf(u) === -1 && r.setRequestHeader(u, a);
      });
    } else
      n.headers.forEach(function(a, u) {
        r.setRequestHeader(u, a);
      });
    n.signal && (n.signal.addEventListener("abort", w), r.onreadystatechange = function() {
      r.readyState === 4 && n.signal.removeEventListener("abort", w);
    }), r.send(n._bodyInit === void 0 ? null : n._bodyInit);
  });
}
T.polyfill = !0, h.fetch || (h.fetch = T, h.Headers = i, h.Request = d, h.Response = f), (typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof g < "u" && g || { fetch: null }).fetch = T;
const V = /* @__PURE__ */ H({
  __proto__: null,
  default: x
}, [x]);
export {
  V as _
};
