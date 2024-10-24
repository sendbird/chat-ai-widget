import { c as F } from "./index-33b32855.mjs";
function I(s, h) {
  for (var b = 0; b < h.length; b++) {
    const c = h[b];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const u in c)
        if (u !== "default" && !(u in s)) {
          const f = Object.getOwnPropertyDescriptor(c, u);
          f && Object.defineProperty(s, u, f.get ? f : {
            enumerable: !0,
            get: () => c[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var A = {}, T;
T = function() {
  function s(t, n) {
    if (!(t instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }
  function b(t, n, r) {
    return n && h(t.prototype, n), r && h(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
  }
  function c(t) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
      return n.__proto__ || Object.getPrototypeOf(n);
    }, c(t);
  }
  function u(t, n) {
    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
      return r.__proto__ = e, r;
    }, u(t, n);
  }
  function f(t) {
    if (t === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function S(t) {
    var n = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }();
    return function() {
      var r, e = c(t);
      if (n) {
        var o = c(this).constructor;
        r = Reflect.construct(e, arguments, o);
      } else
        r = e.apply(this, arguments);
      return function(i, a) {
        if (a && (typeof a == "object" || typeof a == "function"))
          return a;
        if (a !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return f(i);
      }(this, r);
    };
  }
  function O() {
    return O = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(t, n, r) {
      var e = function(i, a) {
        for (; !Object.prototype.hasOwnProperty.call(i, a) && (i = c(i)) !== null; )
          ;
        return i;
      }(t, n);
      if (e) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
      }
    }, O.apply(this, arguments);
  }
  var _ = function() {
    function t() {
      s(this, t), Object.defineProperty(this, "listeners", { value: {}, writable: !0, configurable: !0 });
    }
    return b(t, [{ key: "addEventListener", value: function(n, r, e) {
      n in this.listeners || (this.listeners[n] = []), this.listeners[n].push({ callback: r, options: e });
    } }, { key: "removeEventListener", value: function(n, r) {
      if (n in this.listeners) {
        for (var e = this.listeners[n], o = 0, i = e.length; o < i; o++)
          if (e[o].callback === r)
            return void e.splice(o, 1);
      }
    } }, { key: "dispatchEvent", value: function(n) {
      if (n.type in this.listeners) {
        for (var r = this.listeners[n.type].slice(), e = 0, o = r.length; e < o; e++) {
          var i = r[e];
          try {
            i.callback.call(this, n);
          } catch (a) {
            Promise.resolve().then(function() {
              throw a;
            });
          }
          i.options && i.options.once && this.removeEventListener(n.type, i.callback);
        }
        return !n.defaultPrevented;
      }
    } }]), t;
  }(), w = function(t) {
    (function(e, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(o && o.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), o && u(e, o);
    })(r, t);
    var n = S(r);
    function r() {
      var e;
      return s(this, r), (e = n.call(this)).listeners || _.call(f(e)), Object.defineProperty(f(e), "aborted", { value: !1, writable: !0, configurable: !0 }), Object.defineProperty(f(e), "onabort", { value: null, writable: !0, configurable: !0 }), Object.defineProperty(f(e), "reason", { value: void 0, writable: !0, configurable: !0 }), e;
    }
    return b(r, [{ key: "toString", value: function() {
      return "[object AbortSignal]";
    } }, { key: "dispatchEvent", value: function(e) {
      e.type === "abort" && (this.aborted = !0, typeof this.onabort == "function" && this.onabort.call(this, e)), O(c(r.prototype), "dispatchEvent", this).call(this, e);
    } }]), r;
  }(_), m = function() {
    function t() {
      s(this, t), Object.defineProperty(this, "signal", { value: new w(), writable: !0, configurable: !0 });
    }
    return b(t, [{ key: "abort", value: function(n) {
      var r;
      try {
        r = new Event("abort");
      } catch {
        typeof document < "u" ? document.createEvent ? (r = document.createEvent("Event")).initEvent("abort", !1, !1) : (r = document.createEventObject()).type = "abort" : r = { type: "abort", bubbles: !1, cancelable: !1 };
      }
      var e = n;
      if (e === void 0)
        if (typeof document > "u")
          (e = new Error("This operation was aborted")).name = "AbortError";
        else
          try {
            e = new DOMException("signal is aborted without reason");
          } catch {
            (e = new Error("This operation was aborted")).name = "AbortError";
          }
      this.signal.reason = e, this.signal.dispatchEvent(r);
    } }, { key: "toString", value: function() {
      return "[object AbortController]";
    } }]), t;
  }();
  function E(t) {
    return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : typeof t.Request == "function" && !t.Request.prototype.hasOwnProperty("signal") || !t.AbortController;
  }
  typeof Symbol < "u" && Symbol.toStringTag && (m.prototype[Symbol.toStringTag] = "AbortController", w.prototype[Symbol.toStringTag] = "AbortSignal"), function(t) {
    if (E(t))
      if (t.fetch) {
        var n = function(o) {
          typeof o == "function" && (o = { fetch: o });
          var i = o, a = i.fetch, P = i.Request, g = P === void 0 ? a.Request : P, C = i.AbortController, R = i.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL, L = R !== void 0 && R;
          if (!E({ fetch: a, Request: g, AbortController: C, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: L }))
            return { fetch: a, Request: p };
          var p = g;
          (p && !p.prototype.hasOwnProperty("signal") || L) && ((p = function(d, l) {
            var y;
            l && l.signal && (y = l.signal, delete l.signal);
            var v = new g(d, l);
            return y && Object.defineProperty(v, "signal", { writable: !1, enumerable: !1, configurable: !0, value: y }), v;
          }).prototype = g.prototype);
          var j = a;
          return { fetch: function(d, l) {
            var y = p && p.prototype.isPrototypeOf(d) ? d.signal : l ? l.signal : void 0;
            if (y) {
              var v;
              try {
                v = new DOMException("Aborted", "AbortError");
              } catch {
                (v = new Error("Aborted")).name = "AbortError";
              }
              if (y.aborted)
                return Promise.reject(v);
              var k = new Promise(function(q, N) {
                y.addEventListener("abort", function() {
                  return N(v);
                }, { once: !0 });
              });
              return l && l.signal && delete l.signal, Promise.race([k, j(d, l)]);
            }
            return j(d, l);
          }, Request: p };
        }(t), r = n.fetch, e = n.Request;
        t.fetch = r, t.Request = e, Object.defineProperty(t, "AbortController", { writable: !0, enumerable: !1, configurable: !0, value: m }), Object.defineProperty(t, "AbortSignal", { writable: !0, enumerable: !1, configurable: !0, value: w });
      } else
        console.warn("fetch() is not available, cannot install abortcontroller-polyfill");
  }(typeof self < "u" ? self : F);
}, T();
const x = /* @__PURE__ */ I({
  __proto__: null,
  default: A
}, [A]);
export {
  x as _
};
