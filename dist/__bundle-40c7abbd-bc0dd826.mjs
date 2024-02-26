import { c as B } from "./index-6c2bb9a4.mjs";
function H(e, t) {
  for (var r = 0; r < t.length; r++) {
    const s = t[r];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const n in s)
        if (n !== "default" && !(n in e)) {
          const o = Object.getOwnPropertyDescriptor(s, n);
          o && Object.defineProperty(e, n, o.get ? o : {
            enumerable: !0,
            get: () => s[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var O = {}, h = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof B < "u" && B || {}, x = "URLSearchParams" in h, D = "Symbol" in h && "iterator" in Symbol, b = "FileReader" in h && "Blob" in h && function() {
  try {
    return new Blob(), !0;
  } catch {
    return !1;
  }
}(), P = "FormData" in h, w = "ArrayBuffer" in h;
if (w)
  var L = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], q = ArrayBuffer.isView || function(e) {
    return e && L.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function l(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function A(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function g(e) {
  var t = { next: function() {
    var r = e.shift();
    return { done: r === void 0, value: r };
  } };
  return D && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function i(e) {
  this.map = {}, e instanceof i ? e.forEach(function(t, r) {
    this.append(r, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
function v(e) {
  if (!e._noBody)
    return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (e.bodyUsed = !0);
}
function S(e) {
  return new Promise(function(t, r) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      r(e.error);
    };
  });
}
function N(e) {
  var t = new FileReader(), r = S(t);
  return t.readAsArrayBuffer(e), r;
}
function j(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function U() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    var t;
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : b && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : P && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : x && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : w && b && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = j(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : w && (ArrayBuffer.prototype.isPrototypeOf(e) || q(e)) ? this._bodyArrayBuffer = j(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : x && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, b && (this.blob = function() {
    var e = v(this);
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
      var e = v(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
    }
    if (b)
      return this.blob().then(N);
    throw new Error("could not read as ArrayBuffer");
  }, this.text = function() {
    var e, t, r, s, n, o = v(this);
    if (o)
      return o;
    if (this._bodyBlob)
      return e = this._bodyBlob, t = new FileReader(), r = S(t), s = /charset=([A-Za-z0-9_-]+)/.exec(e.type), n = s ? s[1] : "utf-8", t.readAsText(e, n), r;
    if (this._bodyArrayBuffer)
      return Promise.resolve(function(m) {
        for (var c = new Uint8Array(m), a = new Array(c.length), u = 0; u < c.length; u++)
          a[u] = String.fromCharCode(c[u]);
        return a.join("");
      }(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, P && (this.formData = function() {
    return this.text().then(G);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
i.prototype.append = function(e, t) {
  e = l(e), t = A(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
}, i.prototype.delete = function(e) {
  delete this.map[l(e)];
}, i.prototype.get = function(e) {
  return e = l(e), this.has(e) ? this.map[e] : null;
}, i.prototype.has = function(e) {
  return this.map.hasOwnProperty(l(e));
}, i.prototype.set = function(e, t) {
  this.map[l(e)] = A(t);
}, i.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
}, i.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), g(e);
}, i.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), g(e);
}, i.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), g(e);
}, D && (i.prototype[Symbol.iterator] = i.prototype.entries);
var k = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function d(e, t) {
  if (!(this instanceof d))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  var r, s, n = (t = t || {}).body;
  if (e instanceof d) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new i(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || e._bodyInit == null || (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new i(t.headers)), this.method = (r = t.method || this.method || "GET", s = r.toUpperCase(), k.indexOf(s) > -1 ? s : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in h)
      return new AbortController().signal;
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(n), !(this.method !== "GET" && this.method !== "HEAD" || t.cache !== "no-store" && t.cache !== "no-cache")) {
    var o = /([?&])_=[^&]*/;
    o.test(this.url) ? this.url = this.url.replace(o, "$1_=" + (/* @__PURE__ */ new Date()).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
  }
}
function G(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(r) {
    if (r) {
      var s = r.split("="), n = s.shift().replace(/\+/g, " "), o = s.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(n), decodeURIComponent(o));
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
}, U.call(d.prototype), U.call(f.prototype), f.prototype.clone = function() {
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
  (p = function(t, r) {
    this.message = t, this.name = r;
    var s = Error(t);
    this.stack = s.stack;
  }).prototype = Object.create(Error.prototype), p.prototype.constructor = p;
}
function R(e, t) {
  return new Promise(function(r, s) {
    var n = new d(e, t);
    if (n.signal && n.signal.aborted)
      return s(new p("Aborted", "AbortError"));
    var o = new XMLHttpRequest();
    function m() {
      o.abort();
    }
    if (o.onload = function() {
      var a, u, _ = { status: o.status, statusText: o.statusText, headers: (a = o.getAllResponseHeaders() || "", u = new i(), a.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(y) {
        return y.indexOf(`
`) === 0 ? y.substr(1, y.length) : y;
      }).forEach(function(y) {
        var T = y.split(":"), E = T.shift().trim();
        if (E) {
          var I = T.join(":").trim();
          try {
            u.append(E, I);
          } catch (C) {
            console.warn("Response " + C.message);
          }
        }
      }), u) };
      _.url = "responseURL" in o ? o.responseURL : _.headers.get("X-Request-URL");
      var F = "response" in o ? o.response : o.responseText;
      setTimeout(function() {
        r(new f(F, _));
      }, 0);
    }, o.onerror = function() {
      setTimeout(function() {
        s(new TypeError("Network request failed"));
      }, 0);
    }, o.ontimeout = function() {
      setTimeout(function() {
        s(new TypeError("Network request failed"));
      }, 0);
    }, o.onabort = function() {
      setTimeout(function() {
        s(new p("Aborted", "AbortError"));
      }, 0);
    }, o.open(n.method, function(a) {
      try {
        return a === "" && h.location.href ? h.location.href : a;
      } catch {
        return a;
      }
    }(n.url), !0), n.credentials === "include" ? o.withCredentials = !0 : n.credentials === "omit" && (o.withCredentials = !1), "responseType" in o && (b ? o.responseType = "blob" : w && (o.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof i || h.Headers && t.headers instanceof h.Headers)) {
      var c = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(a) {
        c.push(l(a)), o.setRequestHeader(a, A(t.headers[a]));
      }), n.headers.forEach(function(a, u) {
        c.indexOf(u) === -1 && o.setRequestHeader(u, a);
      });
    } else
      n.headers.forEach(function(a, u) {
        o.setRequestHeader(u, a);
      });
    n.signal && (n.signal.addEventListener("abort", m), o.onreadystatechange = function() {
      o.readyState === 4 && n.signal.removeEventListener("abort", m);
    }), o.send(n._bodyInit === void 0 ? null : n._bodyInit);
  });
}
R.polyfill = !0, h.fetch || (h.fetch = R, h.Headers = i, h.Request = d, h.Response = f);
const V = /* @__PURE__ */ H({
  __proto__: null,
  default: O
}, [O]);
export {
  V as _
};
