! function(e) {
    function webpackJsonpCallback(t) {
        for (var r, o, i = t[0], s = t[1], c = 0, u = []; c < i.length; c++) o = i[c], n[o] && u.push(n[o][0]), n[o] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        for (a && a(t); u.length;) u.shift()()
    }
    var t = {},
        n = {
            0: 0
        };

    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }
    __webpack_require__.e = function requireEnsure(e) {
        var t = [],
            r = n[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var o = new Promise(function(t, o) {
                    r = n[e] = [t, o]
                });
                t.push(r[2] = o);
                var i, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, __webpack_require__.nc && a.setAttribute("nonce", __webpack_require__.nc), a.src = function jsonpScriptSrc(e) {
                    return __webpack_require__.p + "assets/" + ({}[e] || e) + "." + {
                        1: "37afe153",
                        2: "2a722653",
                        3: "ee35dea2"
                    }[e] + ".chunk.js"
                }(e);
                var s = new Error;
                i = function(t) {
                    a.onerror = a.onload = null, clearTimeout(c);
                    var r = n[e];
                    if (0 !== r) {
                        if (r) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", s.name = "ChunkLoadError", s.type = o, s.request = i, r[1](s)
                        }
                        n[e] = void 0
                    }
                };
                var c = setTimeout(function() {
                    i({
                        type: "timeout",
                        target: a
                    })
                }, 12e4);
                a.onerror = a.onload = i, document.head.appendChild(a)
            }
        return Promise.all(t)
    }, __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__.t = function(e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) __webpack_require__.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "/conductor/", __webpack_require__.oe = function(e) {
        throw console.error(e), e
    };
    var r = window["3eiXJRXgVuLsYGH9303q"] = window["3eiXJRXgVuLsYGH9303q"] || [],
        o = r.push.bind(r);
    r.push = webpackJsonpCallback, r = r.slice();
    for (var i = 0; i < r.length; i++) webpackJsonpCallback(r[i]);
    var a = o;
    __webpack_require__(__webpack_require__.s = 11)
}([function(e, t, n) {
    e.exports = n(12)
}, function(e, t, n) {
    var r, o;
    ! function(i) {
        if (void 0 === (o = "function" === typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o), !0, e.exports = i(), !!0) {
            var a = window.Cookies,
                s = window.Cookies = i();
            s.noConflict = function() {
                return window.Cookies = a, s
            }
        }
    }(function() {
        function extend() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r]
            }
            return t
        }
        return function init(e) {
            function api(t, n, r) {
                var o;
                if ("undefined" !== typeof document) {
                    if (arguments.length > 1) {
                        if ("number" === typeof(r = extend({
                                path: "/"
                            }, api.defaults, r)).expires) {
                            var i = new Date;
                            i.setMilliseconds(i.getMilliseconds() + 864e5 * r.expires), r.expires = i
                        }
                        r.expires = r.expires ? r.expires.toUTCString() : "";
                        try {
                            o = JSON.stringify(n), /^[\{\[]/.test(o) && (n = o)
                        } catch (h) {}
                        n = e.write ? e.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var a = "";
                        for (var s in r) r[s] && (a += "; " + s, !0 !== r[s] && (a += "=" + r[s]));
                        return document.cookie = t + "=" + n + a
                    }
                    t || (o = {});
                    for (var c = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, f = 0; f < c.length; f++) {
                        var l = c[f].split("="),
                            d = l.slice(1).join("=");
                        this.json || '"' !== d.charAt(0) || (d = d.slice(1, -1));
                        try {
                            var p = l[0].replace(u, decodeURIComponent);
                            if (d = e.read ? e.read(d, p) : e(d, p) || d.replace(u, decodeURIComponent), this.json) try {
                                d = JSON.parse(d)
                            } catch (h) {}
                            if (t === p) {
                                o = d;
                                break
                            }
                            t || (o[p] = d)
                        } catch (h) {}
                    }
                    return o
                }
            }
            return api.set = api, api.get = function(e) {
                return api.call(api, e)
            }, api.getJSON = function() {
                return api.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, api.defaults = {}, api.remove = function(e, t) {
                api(e, "", extend(t, {
                    expires: -1
                }))
            }, api.withConverter = init, api
        }(function() {})
    })
}, , function(e, t, n) {
    var r = n(7),
        o = n(18);
    e.exports = {
        throttle: r,
        debounce: o
    }
}, function(e) {
    e.exports = {
        WIDGET_ROOT: "js.driftqa.com",
        WIDGET_ROOT_QA: "js.driftqa.com",
        PROJECT_NAMESPACE: "DRIFT_CONDUCTOR",
        ENV: "MASTER"
    }
}, function(e, t, n) {
    e.exports = n(13), e.exports.default = e.exports
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (r) {
        "object" === typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        var o, i = 0;
        return "boolean" !== typeof t && (r = n, n = t, t = void 0),
            function wrapper() {
                var a = this,
                    s = Number(new Date) - i,
                    c = arguments;

                function exec() {
                    i = Number(new Date), n.apply(a, c)
                }
                r && !o && exec(), o && clearTimeout(o), void 0 === r && s > e ? exec() : !0 !== t && (o = setTimeout(r ? function clear() {
                    o = void 0
                } : exec, void 0 === r ? e - s : e))
            }
    }
}, function(e) {
    e.exports = {
        WIDGET_ROOT: "localhost:6969",
        WIDGET_ROOT_QA: "js.driftqa.com",
        ENV: "LOCAL"
    }
}, function(e) {
    e.exports = {
        WIDGET_ROOT: "js.driftt.com",
        WIDGET_ROOT_QA: "js.driftqa.com",
        PROJECT_NAMESPACE: "DRIFT_CONDUCTOR",
        ENV: "PRODUCTION"
    }
}, function(e, n, r) {
    (function(r) {
        var o;
        ! function() {
            var i = "undefined" != typeof window && window === this ? this : "undefined" != typeof r && null != r ? r : this,
                a = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                };

            function l() {
                l = function l() {}, i.Symbol || (i.Symbol = m)
            }
            var s = 0;

            function m(e) {
                return "jscomp_symbol_" + (e || "") + s++
            }

            function p() {
                l();
                var e = i.Symbol.iterator;
                e || (e = i.Symbol.iterator = i.Symbol("iterator")), "function" != typeof Array.prototype[e] && a(Array.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: function value() {
                        return q(this)
                    }
                }), p = function p() {}
            }

            function q(e) {
                var t = 0;
                return function r(e) {
                    return p(), (e = {
                        next: e
                    })[i.Symbol.iterator] = function() {
                        return this
                    }, e
                }(function() {
                    return t < e.length ? {
                        done: !1,
                        value: e[t++]
                    } : {
                        done: !0
                    }
                })
            }

            function t(e) {
                p();
                var t = e[Symbol.iterator];
                return t ? t.call(e) : q(e)
            }

            function u(e) {
                if (!(e instanceof Array)) {
                    e = t(e);
                    for (var n, r = []; !(n = e.next()).done;) r.push(n.value);
                    e = r
                }
                return e
            }
            var c = 0;
            var f = "img script iframe link audio video source".split(" ");

            function z(e, n) {
                for (var r = (e = t(e)).next(); !r.done; r = e.next())
                    if (r = r.value, n.includes(r.nodeName.toLowerCase()) || z(r.children, n)) return !0;
                return !1
            }

            function B(e, n) {
                if (2 < e.length) return performance.now();
                for (var r = [], o = (n = t(n)).next(); !o.done; o = n.next()) o = o.value, r.push({
                    timestamp: o.start,
                    type: "requestStart"
                }), r.push({
                    timestamp: o.end,
                    type: "requestEnd"
                });
                for (o = (n = t(e)).next(); !o.done; o = n.next()) r.push({
                    timestamp: o.value,
                    type: "requestStart"
                });
                for (r.sort(function(e, t) {
                        return e.timestamp - t.timestamp
                    }), e = e.length, n = r.length - 1; 0 <= n; n--) switch ((o = r[n]).type) {
                    case "requestStart":
                        e--;
                        break;
                    case "requestEnd":
                        if (2 < ++e) return o.timestamp;
                        break;
                    default:
                        throw Error("Internal Error: This should never happen")
                }
                return 0
            }

            function C(e) {
                e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                var n = window.__tti && window.__tti.o;
                this.a = e ? e.map(function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    }) : [], n && n.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                    function w(e, t) {
                        var n = XMLHttpRequest.prototype.send,
                            r = c++;
                        XMLHttpRequest.prototype.send = function(o) {
                            for (var i = [], a = 0; a < arguments.length; ++a) i[a - 0] = arguments[a];
                            var s = this;
                            return e(r), this.addEventListener("readystatechange", function() {
                                4 === s.readyState && t(r)
                            }), n.apply(this, i)
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function x(e, t) {
                        var n = fetch;
                        fetch = function fetch(r) {
                            for (var o = [], i = 0; i < arguments.length; ++i) o[i - 0] = arguments[i];
                            return new Promise(function(r, i) {
                                var a = c++;
                                e(a), n.apply(null, [].concat(u(o))).then(function(e) {
                                    t(a), r(e)
                                }, function(e) {
                                    t(e), i(e)
                                })
                            })
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function D(e) {
                        e.c = new PerformanceObserver(function(n) {
                            for (var r = (n = t(n.getEntries())).next(); !r.done; r = n.next())
                                if ("resource" === (r = r.value).entryType && (e.b.push({
                                        start: r.fetchStart,
                                        end: r.responseEnd
                                    }), G(e, B(e.g, e.b) + 5e3)), "longtask" === r.entryType) {
                                    var o = r.startTime + r.duration;
                                    e.a.push({
                                        start: r.startTime,
                                        end: o
                                    }), G(e, o + 5e3)
                                }
                        }), e.c.observe({
                            entryTypes: ["longtask", "resource"]
                        })
                    }(this), this.w && (this.h = function A(e) {
                        var n = new MutationObserver(function(n) {
                            for (var r = (n = t(n)).next(); !r.done; r = n.next()) "childList" == (r = r.value).type && z(r.addedNodes, f) ? e(r) : "attributes" == r.type && f.includes(r.target.tagName.toLowerCase()) && e(r)
                        });
                        return n.observe(document, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["href", "src"]
                        }), n
                    }(this.B.bind(this)))
            }

            function F(e) {
                e.i = !0;
                var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                    n = B(e.g, e.b);
                G(e, Math.max(n + 5e3, t))
            }

            function G(e, t) {
                !e.i || e.v > t || (clearTimeout(e.j), e.j = setTimeout(function() {
                    var t = performance.timing.navigationStart,
                        n = B(e.g, e.b);
                    t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t;
                    if (e.u) var r = e.u;
                    else performance.timing.domContentLoadedEventEnd ? r = (r = performance.timing).domContentLoadedEventEnd - r.navigationStart : r = null;
                    var o = performance.now();
                    null === r && G(e, Math.max(n + 5e3, o + 1e3));
                    var i = e.a;
                    5e3 > o - n ? n = null : n = 5e3 > o - (n = i.length ? i[i.length - 1].end : t) ? null : Math.max(n, r), n && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect()), G(e, performance.now() + 1e3)
                }, t - performance.now()), e.v = t)
            }
            C.prototype.getFirstConsistentlyInteractive = function() {
                var e = this;
                return new Promise(function(t) {
                    e.s = t, "complete" == document.readyState ? F(e) : window.addEventListener("load", function() {
                        F(e)
                    })
                })
            }, C.prototype.m = function(e) {
                this.f.set(e, performance.now())
            }, C.prototype.l = function(e) {
                this.f.delete(e)
            }, C.prototype.B = function() {
                G(this, performance.now() + 5e3)
            }, i.Object.defineProperties(C.prototype, {
                g: {
                    configurable: !0,
                    enumerable: !0,
                    get: function get() {
                        return [].concat(u(this.f.values()))
                    }
                }
            });
            var d = {
                getFirstConsistentlyInteractive: function getFirstConsistentlyInteractive(e) {
                    return e = e || {}, "PerformanceLongTaskTiming" in window ? new C(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                }
            };
            e.exports ? e.exports = d : void 0 === (o = function() {
                return d
            }.apply(n, [])) || (e.exports = o)
        }()
    }).call(this, r(6))
}, function(e, t, n) {
    e.exports = n(24)
}, function(e, t, n) {
    var r = function(e) {
        "use strict";
        var t, n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" === typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";

        function wrap(e, t, n, r) {
            var o = t && t.prototype instanceof Generator ? t : Generator,
                i = Object.create(o.prototype),
                a = new Context(r || []);
            return i._invoke = function makeInvokeMethod(e, t, n) {
                var r = c;
                return function invoke(o, i) {
                    if (r === f) throw new Error("Generator is already running");
                    if (r === l) {
                        if ("throw" === o) throw i;
                        return doneResult()
                    }
                    for (n.method = o, n.arg = i;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = maybeInvokeDelegate(a, n);
                            if (s) {
                                if (s === d) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === c) throw r = l, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = f;
                        var p = tryCatch(e, t, n);
                        if ("normal" === p.type) {
                            if (r = n.done ? l : u, p.arg === d) continue;
                            return {
                                value: p.arg,
                                done: n.done
                            }
                        }
                        "throw" === p.type && (r = l, n.method = "throw", n.arg = p.arg)
                    }
                }
            }(e, n, a), i
        }

        function tryCatch(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (r) {
                return {
                    type: "throw",
                    arg: r
                }
            }
        }
        e.wrap = wrap;
        var c = "suspendedStart",
            u = "suspendedYield",
            f = "executing",
            l = "completed",
            d = {};

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {}
        var p = {};
        p[i] = function() {
            return this
        };
        var h = Object.getPrototypeOf,
            m = h && h(h(values([])));
        m && m !== n && r.call(m, i) && (p = m);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);

        function defineIteratorMethods(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function AsyncIterator(e, t) {
            var n;
            this._invoke = function enqueue(o, i) {
                function callInvokeWithMethodAndArg() {
                    return new t(function(n, a) {
                        ! function invoke(n, o, i, a) {
                            var s = tryCatch(e[n], e, o);
                            if ("throw" !== s.type) {
                                var c = s.arg,
                                    u = c.value;
                                return u && "object" === typeof u && r.call(u, "__await") ? t.resolve(u.__await).then(function(e) {
                                    invoke("next", e, i, a)
                                }, function(e) {
                                    invoke("throw", e, i, a)
                                }) : t.resolve(u).then(function(e) {
                                    c.value = e, i(c)
                                }, function(e) {
                                    return invoke("throw", e, i, a)
                                })
                            }
                            a(s.arg)
                        }(o, i, n, a)
                    })
                }
                return n = n ? n.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
            }
        }

        function maybeInvokeDelegate(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
                if (n.delegate = null, "throw" === n.method) {
                    if (e.iterator.return && (n.method = "return", n.arg = t, maybeInvokeDelegate(e, n), "throw" === n.method)) return d;
                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return d
            }
            var o = tryCatch(r, e.iterator, n.arg);
            if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, d;
            var i = o.arg;
            return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, d) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, d)
        }

        function pushTryEntry(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function resetTryEntry(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function Context(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(pushTryEntry, this), this.reset(!0)
        }

        function values(e) {
            if (e) {
                var n = e[i];
                if (n) return n.call(e);
                if ("function" === typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        a = function next() {
                            for (; ++o < e.length;)
                                if (r.call(e, o)) return next.value = e[o], next.done = !1, next;
                            return next.value = t, next.done = !0, next
                        };
                    return a.next = a
                }
            }
            return {
                next: doneResult
            }
        }

        function doneResult() {
            return {
                value: t,
                done: !0
            }
        }
        return GeneratorFunction.prototype = g.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[s] = GeneratorFunction.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
            var t = "function" === typeof e && e.constructor;
            return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(g), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[a] = function() {
            return this
        }, e.AsyncIterator = AsyncIterator, e.async = function(t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then(function(e) {
                return e.done ? e.value : a.next()
            })
        }, defineIteratorMethods(g), g[s] = "Generator", g[i] = function() {
            return this
        }, g.toString = function() {
            return "[object Generator]"
        }, e.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function next() {
                    for (; t.length;) {
                        var n = t.pop();
                        if (n in e) return next.value = n, next.done = !1, next
                    }
                    return next.done = !0, next
                }
        }, e.values = values, Context.prototype = {
            constructor: Context,
            reset: function reset(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function stop() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var n = this;

                function handle(r, o) {
                    return a.type = "throw", a.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return handle("end");
                    if (i.tryLoc <= this.prev) {
                        var s = r.call(i, "catchLoc"),
                            c = r.call(i, "finallyLoc");
                        if (s && c) {
                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc)
                        } else if (s) {
                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function abrupt(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
            },
            complete: function complete(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
            },
            finish: function finish(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), resetTryEntry(n), d
                }
            },
            catch: function _catch(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            resetTryEntry(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function delegateYield(e, n, r) {
                return this.delegate = {
                    iterator: values(e),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = t), d
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = r
    } catch (o) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(e, t, n) {
    (function(t) {
        "undefined" != typeof self && self, e.exports = function(e) {
            var t = {};

            function __webpack_require__(n) {
                if (t[n]) return t[n].exports;
                var r = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
            }
            return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
                __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, __webpack_require__.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, __webpack_require__.t = function(e, t) {
                if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var r in e) __webpack_require__.d(n, r, function(t) {
                        return e[t]
                    }.bind(null, r));
                return n
            }, __webpack_require__.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return __webpack_require__.d(t, "a", t), t
            }, __webpack_require__.o = function(e, t) {
                return {}.hasOwnProperty.call(e, t)
            }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0)
        }([function(e, n, r) {
            "use strict";

            function isRegex(e) {
                return "[object RegExp]" === {}.toString.call(e)
            }
            r.r(n), r.d(n, "Promise", function() {
                return l
            }), r.d(n, "TYPES", function() {
                return C
            }), r.d(n, "ProxyWindow", function() {
                return k
            }), r.d(n, "setup", function() {
                return setup
            }), r.d(n, "destroy", function() {
                return destroy
            }), r.d(n, "serializeMessage", function() {
                return setup_serializeMessage
            }), r.d(n, "deserializeMessage", function() {
                return setup_deserializeMessage
            }), r.d(n, "createProxyWindow", function() {
                return createProxyWindow
            }), r.d(n, "toProxyWindow", function() {
                return setup_toProxyWindow
            }), r.d(n, "on", function() {
                return on_on
            }), r.d(n, "once", function() {
                return on_once
            }), r.d(n, "send", function() {
                return T
            }), r.d(n, "markWindowKnown", function() {
                return markWindowKnown
            }), r.d(n, "cleanUpWindow", function() {
                return cleanUpWindow
            }), r.d(n, "bridge", function() {});
            var o = "Call was rejected by callee.\r\n";

            function getActualProtocol(e) {
                return void 0 === e && (e = window), e.location.protocol
            }

            function getProtocol(e) {
                if (void 0 === e && (e = window), e.mockDomain) {
                    var t = e.mockDomain.split("//")[0];
                    if (t) return t
                }
                return getActualProtocol(e)
            }

            function isAboutProtocol(e) {
                return void 0 === e && (e = window), "about:" === getProtocol(e)
            }

            function getParent(e) {
                if (void 0 === e && (e = window), e) try {
                    if (e.parent && e.parent !== e) return e.parent
                } catch (t) {}
            }

            function getOpener(e) {
                if (void 0 === e && (e = window), e && !getParent(e)) try {
                    return e.opener
                } catch (t) {}
            }

            function canReadFromWindow(e) {
                try {
                    return !0
                } catch (t) {}
                return !1
            }

            function getActualDomain(e) {
                void 0 === e && (e = window);
                var t = e.location;
                if (!t) throw new Error("Can not read window location");
                var n = getActualProtocol(e);
                if (!n) throw new Error("Can not read window protocol");
                if ("file:" === n) return "file://";
                if ("about:" === n) {
                    var r = getParent(e);
                    return r && canReadFromWindow() ? getActualDomain(r) : "about://"
                }
                var o = t.host;
                if (!o) throw new Error("Can not read window host");
                return n + "//" + o
            }

            function getDomain(e) {
                void 0 === e && (e = window);
                var t = getActualDomain(e);
                return t && e.mockDomain && 0 === e.mockDomain.indexOf("mock:") ? e.mockDomain : t
            }

            function isSameDomain(e) {
                if (! function(e) {
                        try {
                            if (e === window) return !0
                        } catch (n) {}
                        try {
                            var t = Object.getOwnPropertyDescriptor(e, "location");
                            if (t && !1 === t.enumerable) return !1
                        } catch (n) {}
                        try {
                            if (isAboutProtocol(e) && canReadFromWindow()) return !0
                        } catch (n) {}
                        try {
                            if (function(e) {
                                    return void 0 === e && (e = window), "mock:" === getProtocol(e)
                                }(e) && canReadFromWindow()) return !0
                        } catch (n) {}
                        try {
                            if (getActualDomain(e) === getActualDomain(window)) return !0
                        } catch (n) {}
                        return !1
                    }(e)) return !1;
                try {
                    if (e === window) return !0;
                    if (isAboutProtocol(e) && canReadFromWindow()) return !0;
                    if (getDomain(window) === getDomain(e)) return !0
                } catch (t) {}
                return !1
            }

            function assertSameDomain(e) {
                if (!isSameDomain(e)) throw new Error("Expected window to be same domain");
                return e
            }

            function isAncestorParent(e, t) {
                if (!e || !t) return !1;
                var n = getParent(t);
                return n ? n === e : -1 !== function(e) {
                    var t = [];
                    try {
                        for (; e.parent !== e;) t.push(e.parent), e = e.parent
                    } catch (n) {}
                    return t
                }(t).indexOf(e)
            }

            function getFrames(e) {
                var t, n, r = [];
                try {
                    t = e.frames
                } catch (c) {
                    t = e
                }
                try {
                    n = t.length
                } catch (c) {}
                if (0 === n) return r;
                if (n) {
                    for (var o = 0; o < n; o++) {
                        var i = void 0;
                        try {
                            i = t[o]
                        } catch (c) {
                            continue
                        }
                        r.push(i)
                    }
                    return r
                }
                for (var a = 0; a < 100; a++) {
                    var s = void 0;
                    try {
                        s = t[a]
                    } catch (c) {
                        return r
                    }
                    if (!s) return r;
                    r.push(s)
                }
                return r
            }
            var i = [],
                a = [];

            function isWindowClosed(e, t) {
                void 0 === t && (t = !0);
                try {
                    if (e === window) return !1
                } catch (s) {
                    return !0
                }
                try {
                    if (!e) return !0
                } catch (s) {
                    return !0
                }
                try {
                    if (e.closed) return !0
                } catch (s) {
                    return !s || s.message !== o
                }
                if (t && isSameDomain(e)) try {
                    if (e.mockclosed) return !0
                } catch (s) {}
                try {
                    if (!e.parent || !e.top) return !0
                } catch (s) {}
                var n = function(e, t) {
                    for (var n = 0; n < e.length; n++) try {
                        if (e[n] === t) return n
                    } catch (s) {}
                    return -1
                }(i, e);
                if (-1 !== n) {
                    var r = a[n];
                    if (r && function(e) {
                            if (!e.contentWindow) return !0;
                            if (!e.parentNode) return !0;
                            var t = e.ownerDocument;
                            if (t && t.documentElement && !t.documentElement.contains(e)) {
                                for (var n = e; n.parentNode && n.parentNode !== n;) n = n.parentNode;
                                if (!n.host || !t.documentElement.contains(n.host)) return !0
                            }
                            return !1
                        }(r)) return !0
                }
                return !1
            }

            function getAncestor(e) {
                return void 0 === e && (e = window), getOpener(e = e || window) || getParent(e) || void 0
            }

            function matchDomain(e, t) {
                if ("string" == typeof e) {
                    if ("string" == typeof t) return "*" === e || t === e;
                    if (isRegex(t)) return !1;
                    if (Array.isArray(t)) return !1
                }
                return isRegex(e) ? isRegex(t) ? e.toString() === t.toString() : !Array.isArray(t) && Boolean(t.match(e)) : !!Array.isArray(e) && (Array.isArray(t) ? JSON.stringify(e) === JSON.stringify(t) : !isRegex(t) && e.some(function(e) {
                    return matchDomain(e, t)
                }))
            }

            function isWindow(e) {
                try {
                    if (e === window) return !0
                } catch (t) {
                    if (t && t.message === o) return !0
                }
                try {
                    if ("[object Window]" === {}.toString.call(e)) return !0
                } catch (t) {
                    if (t && t.message === o) return !0
                }
                try {
                    if (window.Window && e instanceof window.Window) return !0
                } catch (t) {
                    if (t && t.message === o) return !0
                }
                try {
                    if (e && e.self === e) return !0
                } catch (t) {
                    if (t && t.message === o) return !0
                }
                try {
                    if (e && e.parent === e) return !0
                } catch (t) {
                    if (t && t.message === o) return !0
                }
                try {
                    if (e && e.top === e) return !0
                } catch (t) {
                    if (t && t.message === o) return !0
                }
                try {
                    if (e && "__unlikely_value__" === e.__cross_domain_utils_window_check__) return !1
                } catch (t) {
                    return !0
                }
                try {
                    if ("postMessage" in e && "self" in e && "location" in e) return !0
                } catch (t) {}
                return !1
            }

            function getFrameForWindow(e) {
                if (isSameDomain(e)) return assertSameDomain(e).frameElement;
                for (var t = 0, n = document.querySelectorAll("iframe"); t < n.length; t++) {
                    var r = n[t];
                    if (r && r.contentWindow && r.contentWindow === e) return r
                }
            }

            function closeWindow(e) {
                if (function(e) {
                        return void 0 === e && (e = window), Boolean(getParent(e))
                    }(e)) {
                    var t = getFrameForWindow(e);
                    if (t && t.parentElement) return void t.parentElement.removeChild(t)
                }
                try {
                    e.close()
                } catch (n) {}
            }

            function utils_isPromise(e) {
                try {
                    if (!e) return !1;
                    if ("undefined" != typeof Promise && e instanceof Promise) return !0;
                    if ("undefined" != typeof window && "function" == typeof window.Window && e instanceof window.Window) return !1;
                    if ("undefined" != typeof window && "function" == typeof window.constructor && e instanceof window.constructor) return !1;
                    var t = {}.toString;
                    if (t) {
                        var n = t.call(e);
                        if ("[object Window]" === n || "[object global]" === n || "[object DOMWindow]" === n) return !1
                    }
                    if ("function" == typeof e.then) return !0
                } catch (r) {
                    return !1
                }
                return !1
            }
            var s, c = [],
                u = [],
                f = 0;

            function flushActive() {
                if (!f && s) {
                    var e = s;
                    s = null, e.resolve()
                }
            }

            function startActive() {
                f += 1
            }

            function endActive() {
                f -= 1, flushActive()
            }
            var l = function() {
                function ZalgoPromise(e) {
                    var t = this;
                    if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], e) {
                        var n, r, o = !1,
                            i = !1,
                            a = !1;
                        startActive();
                        try {
                            e(function(e) {
                                a ? t.resolve(e) : (o = !0, n = e)
                            }, function(e) {
                                a ? t.reject(e) : (i = !0, r = e)
                            })
                        } catch (s) {
                            return endActive(), void this.reject(s)
                        }
                        endActive(), a = !0, o ? this.resolve(n) : i && this.reject(r)
                    }
                }
                var e = ZalgoPromise.prototype;
                return e.resolve = function(e) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(e)) throw new Error("Can not resolve promise with another promise");
                    return this.resolved = !0, this.value = e, this.dispatch(), this
                }, e.reject = function(e) {
                    var t = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(e)) throw new Error("Can not reject promise with another promise");
                    if (!e) {
                        var n = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
                        e = new Error("Expected reject to be called with Error, got " + n)
                    }
                    return this.rejected = !0, this.error = e, this.errorHandled || setTimeout(function() {
                        t.errorHandled || function(e, t) {
                            if (-1 === c.indexOf(e)) {
                                c.push(e), setTimeout(function() {
                                    throw e
                                }, 1);
                                for (var n = 0; n < u.length; n++) u[n](e, t)
                            }
                        }(e, t)
                    }, 1), this.dispatch(), this
                }, e.asyncReject = function(e) {
                    return this.errorHandled = !0, this.reject(e), this
                }, e.dispatch = function() {
                    var e = this.resolved,
                        t = this.rejected,
                        n = this.handlers;
                    if (!this.dispatching && (e || t)) {
                        this.dispatching = !0, startActive();
                        for (var r = function chain(e, t) {
                                return e.then(function(e) {
                                    t.resolve(e)
                                }, function(e) {
                                    t.reject(e)
                                })
                            }, o = 0; o < n.length; o++) {
                            var i = n[o],
                                a = i.onSuccess,
                                s = i.onError,
                                c = i.promise,
                                u = void 0;
                            if (e) try {
                                u = a ? a(this.value) : this.value
                            } catch (l) {
                                c.reject(l);
                                continue
                            } else if (t) {
                                if (!s) {
                                    c.reject(this.error);
                                    continue
                                }
                                try {
                                    u = s(this.error)
                                } catch (l) {
                                    c.reject(l);
                                    continue
                                }
                            }
                            if (u instanceof ZalgoPromise && (u.resolved || u.rejected)) {
                                var f = u;
                                f.resolved ? c.resolve(f.value) : c.reject(f.error), f.errorHandled = !0
                            } else utils_isPromise(u) ? u instanceof ZalgoPromise && (u.resolved || u.rejected) ? u.resolved ? c.resolve(u.value) : c.reject(u.error) : r(u, c) : c.resolve(u)
                        }
                        n.length = 0, this.dispatching = !1, endActive()
                    }
                }, e.then = function(e, t) {
                    if (e && "function" != typeof e && !e.call) throw new Error("Promise.then expected a function for success handler");
                    if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
                    var n = new ZalgoPromise;
                    return this.handlers.push({
                        promise: n,
                        onSuccess: e,
                        onError: t
                    }), this.errorHandled = !0, this.dispatch(), n
                }, e.catch = function(e) {
                    return this.then(void 0, e)
                }, e.finally = function(e) {
                    if (e && "function" != typeof e && !e.call) throw new Error("Promise.finally expected a function");
                    return this.then(function(t) {
                        return ZalgoPromise.try(e).then(function() {
                            return t
                        })
                    }, function(t) {
                        return ZalgoPromise.try(e).then(function() {
                            throw t
                        })
                    })
                }, e.timeout = function(e, t) {
                    var n = this;
                    if (this.resolved || this.rejected) return this;
                    var r = setTimeout(function() {
                        n.resolved || n.rejected || n.reject(t || new Error("Promise timed out after " + e + "ms"))
                    }, e);
                    return this.then(function(e) {
                        return clearTimeout(r), e
                    })
                }, e.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this)
                }, e.lazy = function() {
                    return this.errorHandled = !0, this
                }, ZalgoPromise.resolve = function(e) {
                    return e instanceof ZalgoPromise ? e : utils_isPromise(e) ? new ZalgoPromise(function(t, n) {
                        return e.then(t, n)
                    }) : (new ZalgoPromise).resolve(e)
                }, ZalgoPromise.reject = function(e) {
                    return (new ZalgoPromise).reject(e)
                }, ZalgoPromise.asyncReject = function(e) {
                    return (new ZalgoPromise).asyncReject(e)
                }, ZalgoPromise.all = function(e) {
                    var t = new ZalgoPromise,
                        n = e.length,
                        r = [].slice();
                    if (!n) return t.resolve(r), t;
                    for (var o = function chain(e, o, i) {
                            return o.then(function(o) {
                                r[e] = o, 0 == (n -= 1) && t.resolve(r)
                            }, function(e) {
                                i.reject(e)
                            })
                        }, i = 0; i < e.length; i++) {
                        var a = e[i];
                        if (a instanceof ZalgoPromise) {
                            if (a.resolved) {
                                r[i] = a.value, n -= 1;
                                continue
                            }
                        } else if (!utils_isPromise(a)) {
                            r[i] = a, n -= 1;
                            continue
                        }
                        o(i, ZalgoPromise.resolve(a), t)
                    }
                    return 0 === n && t.resolve(r), t
                }, ZalgoPromise.hash = function(e) {
                    var t = {},
                        n = [],
                        r = function _loop(r) {
                            if (e.hasOwnProperty(r)) {
                                var o = e[r];
                                utils_isPromise(o) ? n.push(o.then(function(e) {
                                    t[r] = e
                                })) : t[r] = o
                            }
                        };
                    for (var o in e) r(o);
                    return ZalgoPromise.all(n).then(function() {
                        return t
                    })
                }, ZalgoPromise.map = function(e, t) {
                    return ZalgoPromise.all(e.map(t))
                }, ZalgoPromise.onPossiblyUnhandledException = function(e) {
                    return function(e) {
                        return u.push(e), {
                            cancel: function cancel() {
                                u.splice(u.indexOf(e), 1)
                            }
                        }
                    }(e)
                }, ZalgoPromise.try = function(e, t, n) {
                    if (e && "function" != typeof e && !e.call) throw new Error("Promise.try expected a function");
                    var r;
                    startActive();
                    try {
                        r = e.apply(t, n || [])
                    } catch (o) {
                        return endActive(), ZalgoPromise.reject(o)
                    }
                    return endActive(), ZalgoPromise.resolve(r)
                }, ZalgoPromise.delay = function(e) {
                    return new ZalgoPromise(function(t) {
                        setTimeout(t, e)
                    })
                }, ZalgoPromise.isPromise = function(e) {
                    return !!(e && e instanceof ZalgoPromise) || utils_isPromise(e)
                }, ZalgoPromise.flush = function() {
                    return function(e) {
                        var t = s = s || new e;
                        return flushActive(), t
                    }(ZalgoPromise)
                }, ZalgoPromise
            }();

            function util_safeIndexOf(e, t) {
                for (var n = 0; n < e.length; n++) try {
                    if (e[n] === t) return n
                } catch (r) {}
                return -1
            }
            var d, p = function() {
                function CrossDomainSafeWeakMap() {
                    if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
                            if ("undefined" == typeof WeakMap) return !1;
                            if (void 0 === Object.freeze) return !1;
                            try {
                                var e = new WeakMap,
                                    t = {};
                                return Object.freeze(t), e.set(t, "__testvalue__"), "__testvalue__" === e.get(t)
                            } catch (n) {
                                return !1
                            }
                        }()) try {
                        this.weakmap = new WeakMap
                    } catch (e) {}
                    this.keys = [], this.values = []
                }
                var e = CrossDomainSafeWeakMap.prototype;
                return e._cleanupClosedWindows = function() {
                    for (var e = this.weakmap, t = this.keys, n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (isWindow(r) && isWindowClosed(r)) {
                            if (e) try {
                                e.delete(r)
                            } catch (o) {}
                            t.splice(n, 1), this.values.splice(n, 1), n -= 1
                        }
                    }
                }, e.isSafeToReadWrite = function(e) {
                    return !isWindow(e)
                }, e.set = function(e, t) {
                    if (!e) throw new Error("WeakMap expected key");
                    var n = this.weakmap;
                    if (n) try {
                        n.set(e, t)
                    } catch (c) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var r = this.name,
                            o = e[r];
                        return void(o && o[0] === e ? o[1] = t : Object.defineProperty(e, r, {
                            value: [e, t],
                            writable: !0
                        }))
                    } catch (c) {}
                    this._cleanupClosedWindows();
                    var i = this.keys,
                        a = this.values,
                        s = util_safeIndexOf(i, e); - 1 === s ? (i.push(e), a.push(t)) : a[s] = t
                }, e.get = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var t = this.weakmap;
                    if (t) try {
                        if (t.has(e)) return t.get(e)
                    } catch (o) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var n = e[this.name];
                        return n && n[0] === e ? n[1] : void 0
                    } catch (o) {}
                    this._cleanupClosedWindows();
                    var r = util_safeIndexOf(this.keys, e);
                    if (-1 !== r) return this.values[r]
                }, e.delete = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var t = this.weakmap;
                    if (t) try {
                        t.delete(e)
                    } catch (i) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var n = e[this.name];
                        n && n[0] === e && (n[0] = n[1] = void 0)
                    } catch (i) {}
                    this._cleanupClosedWindows();
                    var r = this.keys,
                        o = util_safeIndexOf(r, e); - 1 !== o && (r.splice(o, 1), this.values.splice(o, 1))
                }, e.has = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var t = this.weakmap;
                    if (t) try {
                        if (t.has(e)) return !0
                    } catch (r) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var n = e[this.name];
                        return !(!n || n[0] !== e)
                    } catch (r) {}
                    return this._cleanupClosedWindows(), -1 !== util_safeIndexOf(this.keys, e)
                }, e.getOrSet = function(e, t) {
                    if (this.has(e)) return this.get(e);
                    var n = t();
                    return this.set(e, n), n
                }, CrossDomainSafeWeakMap
            }();

            function getFunctionName(e) {
                return e.name || e.__name__ || e.displayName || "anonymous"
            }

            function setFunctionName(e, t) {
                try {
                    delete e.name, e.name = t
                } catch (n) {}
                return e.__name__ = e.displayName = t, e
            }

            function uniqueID() {
                var e = "0123456789abcdef";
                return "uid_" + "xxxxxxxxxx".replace(/./g, function() {
                    return e.charAt(Math.floor(Math.random() * e.length))
                }) + "_" + function(e) {
                    if ("function" == typeof btoa) return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
                        return String.fromCharCode(parseInt(t, 16))
                    })).replace(/[=]/g, "");
                    if ("undefined" != typeof t) return t.from(e, "utf8").toString("base64").replace(/[=]/g, "");
                    throw new Error("Can not find window.btoa or Buffer")
                }((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            }

            function serializeArgs(e) {
                try {
                    return JSON.stringify([].slice.call(e), function(e, t) {
                        return "function" == typeof t ? "memoize[" + function(e) {
                            if (d = d || new p, null == e || "object" != typeof e && "function" != typeof e) throw new Error("Invalid object");
                            var t = d.get(e);
                            return t || (t = typeof e + ":" + uniqueID(), d.set(e, t)), t
                        }(t) + "]" : "undefined" != typeof window && t instanceof window.Element || null !== t && "object" == typeof t && 1 === t.nodeType && "object" == typeof t.style && "object" == typeof t.ownerDocument ? {} : t
                    })
                } catch (t) {
                    throw new Error("Arguments not serializable -- can not be used to memoize")
                }
            }

            function getEmptyObject() {
                return {}
            }
            var h = 0,
                m = 0;

            function memoize(e, t) {
                void 0 === t && (t = {});
                var n, r, o = t.thisNamespace,
                    i = void 0 !== o && o,
                    a = t.time,
                    s = h;
                h += 1;
                var c = function memoizedFunction() {
                    for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++) o[c] = arguments[c];
                    var u, f;
                    s < m && (n = null, r = null, s = h, h += 1), u = i ? (r = r || new p).getOrSet(this, getEmptyObject) : n = n || {};
                    try {
                        f = serializeArgs(o)
                    } catch (w) {
                        return e.apply(this, arguments)
                    }
                    var l = u[f];
                    if (l && a && Date.now() - l.time < a && (delete u[f], l = null), l) return l.value;
                    var d = Date.now(),
                        g = e.apply(this, arguments);
                    return u[f] = {
                        time: d,
                        value: g
                    }, g
                };
                return c.reset = function() {
                    n = null, r = null
                }, setFunctionName(c, (t.name || getFunctionName(e)) + "::memoized")
            }

            function memoizePromise(e) {
                var t = {};

                function memoizedPromiseFunction() {
                    for (var n = arguments, r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    var s = serializeArgs(i);
                    return t.hasOwnProperty(s) ? t[s] : (t[s] = l.try(function() {
                        return e.apply(r, n)
                    }).finally(function() {
                        delete t[s]
                    }), t[s])
                }
                return memoizedPromiseFunction.reset = function() {
                    t = {}
                }, setFunctionName(memoizedPromiseFunction, getFunctionName(e) + "::promiseMemoized")
            }

            function src_util_noop() {}

            function stringifyError(e, t) {
                if (void 0 === t && (t = 1), t >= 3) return "stringifyError stack overflow";
                try {
                    if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
                    if ("string" == typeof e) return e;
                    if (e instanceof Error) {
                        var n = e && e.stack,
                            r = e && e.message;
                        if (n && r) return -1 !== n.indexOf(r) ? n : r + "\n" + n;
                        if (n) return n;
                        if (r) return r
                    }
                    return e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
                } catch (o) {
                    return "Error while stringifying error: " + stringifyError(o, t + 1)
                }
            }

            function stringify(e) {
                return "string" == typeof e ? e : e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
            }

            function util_isRegex(e) {
                return "[object RegExp]" === {}.toString.call(e)
            }

            function util_getOrSet(e, t, n) {
                if (e.hasOwnProperty(t)) return e[t];
                var r = n();
                return e[t] = r, r
            }

            function getBody() {
                var e = document.body;
                if (!e) throw new Error("Body element not found");
                return e
            }

            function isDocumentReady() {
                return Boolean(document.body) && "complete" === document.readyState
            }

            function isDocumentInteractive() {
                return Boolean(document.body) && "interactive" === document.readyState
            }
            memoize.clear = function() {
                m = h
            }, memoize(function(e) {
                if (Object.values) return Object.values(e);
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
                return t
            }), Error, memoize(function() {
                return new l(function(e) {
                    if (isDocumentReady() || isDocumentInteractive()) return e();
                    var t = setInterval(function() {
                        if (isDocumentReady() || isDocumentInteractive()) return clearInterval(t), e()
                    }, 10)
                })
            });
            var g = "undefined" != typeof document ? document.currentScript : null,
                w = memoize(function() {
                    if (g) return g;
                    if (g = function() {
                            try {
                                var e = function() {
                                        try {
                                            throw new Error("_")
                                        } catch (e) {
                                            return e.stack || ""
                                        }
                                    }(),
                                    t = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e),
                                    n = t && t[1];
                                if (!n) return;
                                for (var r = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); r < o.length; r++) {
                                    var i = o[r];
                                    if (i.src && i.src === n) return i
                                }
                            } catch (a) {}
                        }()) return g;
                    throw new Error("Can not determine current script")
                }),
                v = uniqueID();

            function global_getGlobal(e) {
                void 0 === e && (e = window);
                var t = "__post_robot_10_0_46__";
                return e !== window ? e[t] : e[t] = e[t] || {}
            }
            memoize(function() {
                var e;
                try {
                    e = w()
                } catch (r) {
                    return v
                }
                var t = e.getAttribute("data-uid");
                if (t && "string" == typeof t) return t;
                if ((t = e.getAttribute("data-uid-auto")) && "string" == typeof t) return t;
                if (e.src) {
                    var n = function(e) {
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = e[n].charCodeAt(0) * n;
                            e[n + 1] && (r += e[n + 1].charCodeAt(0) * (n - 1)), t += String.fromCharCode(97 + Math.abs(r) % 26)
                        }
                        return t
                    }(JSON.stringify({
                        src: e.src,
                        dataset: e.dataset
                    }));
                    t = "uid_" + n.slice(n.length - 30)
                } else t = uniqueID();
                return e.setAttribute("data-uid-auto", t), t
            });
            var y = function getObj() {
                return {}
            };

            function globalStore(e, t) {
                return void 0 === e && (e = "store"), void 0 === t && (t = y), util_getOrSet(global_getGlobal(), e, function() {
                    var e = t();
                    return {
                        has: function has(t) {
                            return e.hasOwnProperty(t)
                        },
                        get: function get(t, n) {
                            return e.hasOwnProperty(t) ? e[t] : n
                        },
                        set: function set(t, n) {
                            return e[t] = n, n
                        },
                        del: function del(t) {
                            delete e[t]
                        },
                        getOrSet: function getOrSet(t, n) {
                            return util_getOrSet(e, t, n)
                        },
                        reset: function reset() {
                            e = t()
                        },
                        keys: function keys() {
                            return Object.keys(e)
                        }
                    }
                })
            }
            var _, b = function WildCard() {};

            function getWildcard() {
                var e = global_getGlobal();
                return e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new b, e.WINDOW_WILDCARD
            }

            function windowStore(e, t) {
                return void 0 === e && (e = "store"), void 0 === t && (t = y), globalStore("windowStore").getOrSet(e, function() {
                    var n = new p,
                        r = function getStore(e) {
                            return n.getOrSet(e, t)
                        };
                    return {
                        has: function has(t) {
                            return r(t).hasOwnProperty(e)
                        },
                        get: function get(t, n) {
                            var o = r(t);
                            return o.hasOwnProperty(e) ? o[e] : n
                        },
                        set: function set(t, n) {
                            return r(t)[e] = n, n
                        },
                        del: function del(t) {
                            delete r(t)[e]
                        },
                        getOrSet: function getOrSet(t, n) {
                            return util_getOrSet(r(t), e, n)
                        }
                    }
                })
            }

            function getInstanceID() {
                return globalStore("instance").getOrSet("instanceID", uniqueID)
            }

            function resolveHelloPromise(e, t) {
                var n = t.domain,
                    r = windowStore("helloPromises"),
                    o = r.get(e);
                o && o.resolve({
                    domain: n
                });
                var i = l.resolve({
                    domain: n
                });
                return r.set(e, i), i
            }

            function sayHello(e, t) {
                return (0, t.send)(e, "postrobot_hello", {
                    instanceID: getInstanceID()
                }, {
                    domain: "*",
                    timeout: -1
                }).then(function(t) {
                    var n = t.origin,
                        r = t.data.instanceID;
                    return resolveHelloPromise(e, {
                        domain: n
                    }), {
                        win: e,
                        domain: n,
                        instanceID: r
                    }
                })
            }

            function getWindowInstanceID(e, t) {
                var n = t.send;
                return windowStore("windowInstanceIDPromises").getOrSet(e, function() {
                    return sayHello(e, {
                        send: n
                    }).then(function(e) {
                        return e.instanceID
                    })
                })
            }

            function markWindowKnown(e) {
                windowStore("knownWindows").set(e, !0)
            }

            function isSerializedType(e) {
                return "object" == typeof e && null !== e && "string" == typeof e.__type__
            }

            function determineType(e) {
                return void 0 === e ? "undefined" : null === e ? "null" : Array.isArray(e) ? "array" : "function" == typeof e ? "function" : "object" == typeof e ? e instanceof Error ? "error" : "function" == typeof e.then ? "promise" : "[object RegExp]" === {}.toString.call(e) ? "regex" : "[object Date]" === {}.toString.call(e) ? "date" : "object" : "string" == typeof e ? "string" : "number" == typeof e ? "number" : "boolean" == typeof e ? "boolean" : void 0
            }

            function serializeType(e, t) {
                return {
                    __type__: e,
                    __val__: t
                }
            }
            var E, x = ((_ = {}).function = function() {}, _.error = function(e) {
                    return serializeType("error", {
                        message: e.message,
                        stack: e.stack,
                        code: e.code,
                        data: e.data
                    })
                }, _.promise = function() {}, _.regex = function(e) {
                    return serializeType("regex", e.source)
                }, _.date = function(e) {
                    return serializeType("date", e.toJSON())
                }, _.array = function(e) {
                    return e
                }, _.object = function(e) {
                    return e
                }, _.string = function(e) {
                    return e
                }, _.number = function(e) {
                    return e
                }, _.boolean = function(e) {
                    return e
                }, _.null = function(e) {
                    return e
                }, _[void 0] = function(e) {
                    return serializeType("undefined", e)
                }, _),
                A = {},
                S = ((E = {}).function = function() {
                    throw new Error("Function serialization is not implemented; nothing to deserialize")
                }, E.error = function(e) {
                    var t = e.stack,
                        n = e.code,
                        r = e.data,
                        o = new Error(e.message);
                    return o.code = n, r && (o.data = r), o.stack = t + "\n\n" + o.stack, o
                }, E.promise = function() {
                    throw new Error("Promise serialization is not implemented; nothing to deserialize")
                }, E.regex = function(e) {
                    return new RegExp(e)
                }, E.date = function(e) {
                    return new Date(e)
                }, E.array = function(e) {
                    return e
                }, E.object = function(e) {
                    return e
                }, E.string = function(e) {
                    return e
                }, E.number = function(e) {
                    return e
                }, E.boolean = function(e) {
                    return e
                }, E.null = function(e) {
                    return e
                }, E[void 0] = function() {}, E),
                O = {};

            function cleanupProxyWindows() {
                for (var e = globalStore("idToProxyWindow"), t = 0, n = e.keys(); t < n.length; t++) {
                    var r = n[t];
                    e.get(r).shouldClean() && e.del(r)
                }
            }

            function getSerializedWindow(e, t) {
                var n = t.send,
                    r = t.id,
                    o = void 0 === r ? uniqueID() : r,
                    i = e.then(function(e) {
                        if (isSameDomain(e)) return assertSameDomain(e).name
                    }),
                    a = e.then(function(e) {
                        if (isWindowClosed(e)) throw new Error("Window is closed, can not determine type");
                        return getOpener(e) ? "popup" : "iframe"
                    });
                i.catch(src_util_noop), a.catch(src_util_noop);
                var s = function getName() {
                    return e.then(function(e) {
                        if (!isWindowClosed(e)) return isSameDomain(e) ? assertSameDomain(e).name : i
                    })
                };
                return {
                    id: o,
                    getType: function getType() {
                        return a
                    },
                    getInstanceID: memoizePromise(function() {
                        return e.then(function(e) {
                            return getWindowInstanceID(e, {
                                send: n
                            })
                        })
                    }),
                    close: function close() {
                        return e.then(closeWindow)
                    },
                    getName: s,
                    focus: function focus() {
                        return e.then(function(e) {
                            e.focus()
                        })
                    },
                    isClosed: function isClosed() {
                        return e.then(function(e) {
                            return isWindowClosed(e)
                        })
                    },
                    setLocation: function setLocation(t, n) {
                        return void 0 === n && (n = {}), e.then(function(e) {
                            var r = window.location.protocol + "//" + window.location.host,
                                o = n.method,
                                i = void 0 === o ? "get" : o,
                                a = n.body;
                            if (0 === t.indexOf("/")) t = "" + r + t;
                            else if (!t.match(/^https?:\/\//) && 0 !== t.indexOf(r)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(t));
                            if ("post" === i) return s().then(function(e) {
                                if (!e) throw new Error("Can not post to window without target name");
                                ! function(e) {
                                    var t = e.url,
                                        n = e.target,
                                        r = e.body,
                                        o = e.method,
                                        i = void 0 === o ? "post" : o,
                                        a = document.createElement("form");
                                    if (a.setAttribute("target", n), a.setAttribute("method", i), a.setAttribute("action", t), a.style.display = "none", r)
                                        for (var s = 0, c = Object.keys(r); s < c.length; s++) {
                                            var u, f = c[s],
                                                l = document.createElement("input");
                                            l.setAttribute("name", f), l.setAttribute("value", null == (u = r[f]) ? void 0 : u.toString()), a.appendChild(l)
                                        }
                                    getBody().appendChild(a), a.submit(), getBody().removeChild(a)
                                }({
                                    url: t,
                                    target: e,
                                    method: i,
                                    body: a
                                })
                            });
                            if ("get" !== i) throw new Error("Unsupported method: " + i);
                            if (isSameDomain(e)) try {
                                if (e.location && "function" == typeof e.location.replace) return void e.location.replace(t)
                            } catch (c) {}
                            e.location = t
                        })
                    },
                    setName: function setName(t) {
                        return e.then(function(e) {
                            var n = isSameDomain(e),
                                r = getFrameForWindow(e);
                            if (!n) throw new Error("Can not set name for cross-domain window: " + t);
                            assertSameDomain(e).name = t, r && r.setAttribute("name", t), i = l.resolve(t)
                        })
                    }
                }
            }
            new l(function(e) {
                if (window.document && window.document.body) return e(window.document.body);
                var t = setInterval(function() {
                    if (window.document && window.document.body) return clearInterval(t), e(window.document.body)
                }, 10)
            });
            var k = function() {
                function ProxyWindow(e) {
                    var t = e.send,
                        n = e.win,
                        r = e.serializedWindow;
                    this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new l, this.serializedWindow = r || getSerializedWindow(this.actualWindowPromise, {
                        send: t
                    }), globalStore("idToProxyWindow").set(this.getID(), this), n && this.setWindow(n, {
                        send: t
                    })
                }
                var e = ProxyWindow.prototype;
                return e.getID = function() {
                    return this.serializedWindow.id
                }, e.getType = function() {
                    return this.serializedWindow.getType()
                }, e.isPopup = function() {
                    return this.getType().then(function(e) {
                        return "popup" === e
                    })
                }, e.setLocation = function(e, t) {
                    var n = this;
                    return this.serializedWindow.setLocation(e, t).then(function() {
                        return n
                    })
                }, e.getName = function() {
                    return this.serializedWindow.getName()
                }, e.setName = function(e) {
                    var t = this;
                    return this.serializedWindow.setName(e).then(function() {
                        return t
                    })
                }, e.close = function() {
                    var e = this;
                    return this.serializedWindow.close().then(function() {
                        return e
                    })
                }, e.focus = function() {
                    var e = this,
                        t = this.isPopup(),
                        n = this.getName(),
                        r = l.hash({
                            isPopup: t,
                            name: n
                        }).then(function(e) {
                            var t = e.name;
                            e.isPopup && t && window.open("", t, "noopener")
                        }),
                        o = this.serializedWindow.focus();
                    return l.all([r, o]).then(function() {
                        return e
                    })
                }, e.isClosed = function() {
                    return this.serializedWindow.isClosed()
                }, e.getWindow = function() {
                    return this.actualWindow
                }, e.setWindow = function(e, t) {
                    var n = t.send;
                    this.actualWindow = e, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = getSerializedWindow(this.actualWindowPromise, {
                        send: n,
                        id: this.getID()
                    }), windowStore("winToProxyWindow").set(e, this)
                }, e.awaitWindow = function() {
                    return this.actualWindowPromise
                }, e.matchWindow = function(e, t) {
                    var n = this,
                        r = t.send;
                    return l.try(function() {
                        return n.actualWindow ? e === n.actualWindow : l.hash({
                            proxyInstanceID: n.getInstanceID(),
                            knownWindowInstanceID: getWindowInstanceID(e, {
                                send: r
                            })
                        }).then(function(t) {
                            var o = t.proxyInstanceID === t.knownWindowInstanceID;
                            return o && n.setWindow(e, {
                                send: r
                            }), o
                        })
                    })
                }, e.unwrap = function() {
                    return this.actualWindow || this
                }, e.getInstanceID = function() {
                    return this.serializedWindow.getInstanceID()
                }, e.shouldClean = function() {
                    return Boolean(this.actualWindow && isWindowClosed(this.actualWindow))
                }, e.serialize = function() {
                    return this.serializedWindow
                }, ProxyWindow.unwrap = function(e) {
                    return ProxyWindow.isProxyWindow(e) ? e.unwrap() : e
                }, ProxyWindow.serialize = function(e, t) {
                    var n = t.send;
                    return cleanupProxyWindows(), ProxyWindow.toProxyWindow(e, {
                        send: n
                    }).serialize()
                }, ProxyWindow.deserialize = function(e, t) {
                    var n = t.send;
                    return cleanupProxyWindows(), globalStore("idToProxyWindow").get(e.id) || new ProxyWindow({
                        serializedWindow: e,
                        send: n
                    })
                }, ProxyWindow.isProxyWindow = function(e) {
                    return Boolean(e && !isWindow(e) && e.isProxyWindow)
                }, ProxyWindow.toProxyWindow = function(e, t) {
                    var n = t.send;
                    if (cleanupProxyWindows(), ProxyWindow.isProxyWindow(e)) return e;
                    var r = e;
                    return windowStore("winToProxyWindow").get(r) || new ProxyWindow({
                        win: r,
                        send: n
                    })
                }, ProxyWindow
            }();

            function addMethod(e, t, n, r, o) {
                var i = windowStore("methodStore"),
                    a = globalStore("proxyWindowMethods");
                k.isProxyWindow(r) ? a.set(e, {
                    val: t,
                    name: n,
                    domain: o,
                    source: r
                }) : (a.del(e), i.getOrSet(r, function() {
                    return {}
                })[e] = {
                    domain: o,
                    name: n,
                    val: t,
                    source: r
                })
            }

            function lookupMethod(e, t) {
                var n = windowStore("methodStore"),
                    r = globalStore("proxyWindowMethods");
                return n.getOrSet(e, function() {
                    return {}
                })[t] || r.get(t)
            }

            function function_serializeFunction(e, t, n, r, o) {
                var i, a, s;
                a = (i = {
                    on: o.on,
                    send: o.send
                }).on, s = i.send, globalStore("builtinListeners").getOrSet("functionCalls", function() {
                    return a("postrobot_method", {
                        domain: "*"
                    }, function(e) {
                        var t = e.source,
                            n = e.origin,
                            r = e.data,
                            o = r.id,
                            i = r.name,
                            a = lookupMethod(t, o);
                        if (!a) throw new Error("Could not find method '" + i + "' with id: " + r.id + " in " + getDomain(window));
                        var c = a.source,
                            u = a.domain,
                            f = a.val;
                        return l.try(function() {
                            if (!matchDomain(u, n)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(util_isRegex(a.domain) ? a.domain.source : a.domain) + " does not match origin " + n + " in " + getDomain(window));
                            if (k.isProxyWindow(c)) return c.matchWindow(t, {
                                send: s
                            }).then(function(e) {
                                if (!e) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + getDomain(window))
                            })
                        }).then(function() {
                            return f.apply({
                                source: t,
                                origin: n
                            }, r.args)
                        }, function(e) {
                            return l.try(function() {
                                if (f.onError) return f.onError(e)
                            }).then(function() {
                                throw e.stack && (e.stack = "Remote call to " + i + "(" + function(e) {
                                    return void 0 === e && (e = []), (t = e, [].slice.call(t)).map(function(e) {
                                        return "string" == typeof e ? "'" + e + "'" : void 0 === e ? "undefined" : null === e ? "null" : "boolean" == typeof e ? e.toString() : Array.isArray(e) ? "[ ... ]" : "object" == typeof e ? "{ ... }" : "function" == typeof e ? "() => { ... }" : "<" + typeof e + ">"
                                    }).join(", ");
                                    var t
                                }(r.args) + ") failed\n\n" + e.stack), e
                            })
                        }).then(function(e) {
                            return {
                                result: e,
                                id: o,
                                name: i
                            }
                        })
                    })
                });
                var c = n.__id__ || uniqueID();
                e = k.unwrap(e);
                var u = n.__name__ || n.name || r;
                return "string" == typeof u && "function" == typeof u.indexOf && 0 === u.indexOf("anonymous::") && (u = u.replace("anonymous::", r + "::")), k.isProxyWindow(e) ? (addMethod(c, n, u, e, t), e.awaitWindow().then(function(e) {
                    addMethod(c, n, u, e, t)
                })) : addMethod(c, n, u, e, t), serializeType("cross_domain_function", {
                    id: c,
                    name: u
                })
            }

            function serializeMessage(e, t, n, r) {
                var o, i = r.on,
                    a = r.send;
                return function(e, t) {
                    void 0 === t && (t = A);
                    var n = JSON.stringify(e, function(e) {
                        var n = this[e];
                        if (isSerializedType(this)) return n;
                        var r = determineType(n);
                        if (!r) return n;
                        var o = t[r] || x[r];
                        return o ? o(n, e) : n
                    });
                    return void 0 === n ? "undefined" : n
                }(n, ((o = {}).promise = function(n, r) {
                    return function(e, t, n, r, o) {
                        return serializeType("cross_domain_zalgo_promise", {
                            then: function_serializeFunction(e, t, function(e, t) {
                                return n.then(e, t)
                            }, r, {
                                on: o.on,
                                send: o.send
                            })
                        })
                    }(e, t, n, r, {
                        on: i,
                        send: a
                    })
                }, o.function = function(n, r) {
                    return function_serializeFunction(e, t, n, r, {
                        on: i,
                        send: a
                    })
                }, o.object = function(e) {
                    return isWindow(e) || k.isProxyWindow(e) ? serializeType("cross_domain_window", k.serialize(e, {
                        send: a
                    })) : e
                }, o))
            }

            function deserializeMessage(e, t, n, r) {
                var o, i = r.send;
                return function(e, t) {
                    if (void 0 === t && (t = O), "undefined" !== e) return JSON.parse(e, function(e, n) {
                        if (isSerializedType(this)) return n;
                        var r, o;
                        if (isSerializedType(n) ? (r = n.__type__, o = n.__val__) : (r = determineType(n), o = n), !r) return o;
                        var i = t[r] || S[r];
                        return i ? i(o, e) : o
                    })
                }(n, ((o = {}).cross_domain_zalgo_promise = function(e) {
                    return new l(e.then)
                }, o.cross_domain_function = function(n) {
                    return function(e, t, n, r) {
                        var o = n.id,
                            i = n.name,
                            a = r.send,
                            s = function getDeserializedFunction(n) {
                                function crossDomainFunctionWrapper() {
                                    var r = arguments;
                                    return k.toProxyWindow(e, {
                                        send: a
                                    }).awaitWindow().then(function(e) {
                                        var s = lookupMethod(e, o);
                                        if (s && s.val !== crossDomainFunctionWrapper) return s.val.apply({
                                            source: window,
                                            origin: getDomain()
                                        }, r);
                                        var c = [].slice.call(r);
                                        return n.fireAndForget ? a(e, "postrobot_method", {
                                            id: o,
                                            name: i,
                                            args: c
                                        }, {
                                            domain: t,
                                            fireAndForget: !0
                                        }) : a(e, "postrobot_method", {
                                            id: o,
                                            name: i,
                                            args: c
                                        }, {
                                            domain: t,
                                            fireAndForget: !1
                                        }).then(function(e) {
                                            return e.data.result
                                        })
                                    }).catch(function(e) {
                                        throw e
                                    })
                                }
                                return void 0 === n && (n = {}), crossDomainFunctionWrapper.__name__ = i, crossDomainFunctionWrapper.__origin__ = t, crossDomainFunctionWrapper.__source__ = e, crossDomainFunctionWrapper.__id__ = o, crossDomainFunctionWrapper.origin = t, crossDomainFunctionWrapper
                            },
                            c = s();
                        return c.fireAndForget = s({
                            fireAndForget: !0
                        }), c
                    }(e, t, n, {
                        send: i
                    })
                }, o.cross_domain_window = function(e) {
                    return k.deserialize(e, {
                        send: i
                    })
                }, o))
            }
            var I = {};

            function send_sendMessage(e, t, n, r) {
                var o = r.on,
                    i = r.send;
                return l.try(function() {
                    var r = windowStore().getOrSet(e, function() {
                        return {}
                    });
                    return r.buffer = r.buffer || [], r.buffer.push(n), r.flush = r.flush || l.flush().then(function() {
                        if (isWindowClosed(e)) throw new Error("Window is closed");
                        var n, a = serializeMessage(e, t, ((n = {}).__post_robot_10_0_46__ = r.buffer || [], n), {
                            on: o,
                            send: i
                        });
                        delete r.buffer;
                        for (var s = Object.keys(I), c = [], u = 0; u < s.length; u++) {
                            var f = s[u];
                            try {
                                I[f](e, a, t)
                            } catch (l) {
                                c.push(l)
                            }
                        }
                        if (c.length === s.length) throw new Error("All post-robot messaging strategies failed:\n\n" + c.map(function(e, t) {
                            return t + ". " + stringifyError(e)
                        }).join("\n\n"))
                    }), r.flush.then(function() {
                        delete r.flush
                    })
                }).then(src_util_noop)
            }

            function getResponseListener(e) {
                return globalStore("responseListeners").get(e)
            }

            function deleteResponseListener(e) {
                globalStore("responseListeners").del(e)
            }

            function isResponseListenerErrored(e) {
                return globalStore("erroredResponseListeners").has(e)
            }

            function getRequestListener(e) {
                var t = e.name,
                    n = e.win,
                    r = e.domain,
                    o = windowStore("requestListeners");
                if ("*" === n && (n = null), "*" === r && (r = null), !t) throw new Error("Name required to get request listener");
                for (var i = 0, a = [n, getWildcard()]; i < a.length; i++) {
                    var s = a[i];
                    if (s) {
                        var c = o.get(s);
                        if (c) {
                            var u = c[t];
                            if (u) {
                                if (r && "string" == typeof r) {
                                    if (u[r]) return u[r];
                                    if (u.__domain_regex__)
                                        for (var f = 0, l = u.__domain_regex__; f < l.length; f++) {
                                            var d = l[f],
                                                p = d.listener;
                                            if (matchDomain(d.regex, r)) return p
                                        }
                                }
                                if (u["*"]) return u["*"]
                            }
                        }
                    }
                }
            }

            function handleRequest(e, t, n, r) {
                var o = r.on,
                    i = r.send,
                    a = getRequestListener({
                        name: n.name,
                        win: e,
                        domain: t
                    }),
                    s = "postrobot_method" === n.name && n.data && "string" == typeof n.data.name ? n.data.name + "()" : n.name;

                function sendResponse(r, a, c) {
                    return l.flush().then(function() {
                        if (!n.fireAndForget && !isWindowClosed(e)) try {
                            return send_sendMessage(e, t, {
                                id: uniqueID(),
                                origin: getDomain(window),
                                type: "postrobot_message_response",
                                hash: n.hash,
                                name: n.name,
                                ack: r,
                                data: a,
                                error: c
                            }, {
                                on: o,
                                send: i
                            })
                        } catch (u) {
                            throw new Error("Send response message failed for " + s + " in " + getDomain() + "\n\n" + stringifyError(u))
                        }
                    })
                }
                return l.all([l.flush().then(function() {
                    if (!n.fireAndForget && !isWindowClosed(e)) try {
                        return send_sendMessage(e, t, {
                            id: uniqueID(),
                            origin: getDomain(window),
                            type: "postrobot_message_ack",
                            hash: n.hash,
                            name: n.name
                        }, {
                            on: o,
                            send: i
                        })
                    } catch (r) {
                        throw new Error("Send ack message failed for " + s + " in " + getDomain() + "\n\n" + stringifyError(r))
                    }
                }), l.try(function() {
                    if (!a) throw new Error("No handler found for post message: " + n.name + " from " + t + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    return a.handler({
                        source: e,
                        origin: t,
                        data: n.data
                    })
                }).then(function(e) {
                    return sendResponse("success", e)
                }, function(e) {
                    return sendResponse("error", null, e)
                })]).then(src_util_noop).catch(function(e) {
                    if (a && a.handleError) return a.handleError(e);
                    throw e
                })
            }

            function handleAck(e, t, n) {
                if (!isResponseListenerErrored(n.hash)) {
                    var r = getResponseListener(n.hash);
                    if (!r) throw new Error("No handler found for post message ack for message: " + n.name + " from " + t + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    try {
                        if (!matchDomain(r.domain, t)) throw new Error("Ack origin " + t + " does not match domain " + r.domain.toString());
                        if (e !== r.win) throw new Error("Ack source does not match registered window")
                    } catch (o) {
                        r.promise.reject(o)
                    }
                    r.ack = !0
                }
            }

            function handleResponse(e, t, n) {
                if (!isResponseListenerErrored(n.hash)) {
                    var r, o = getResponseListener(n.hash);
                    if (!o) throw new Error("No handler found for post message response for message: " + n.name + " from " + t + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!matchDomain(o.domain, t)) throw new Error("Response origin " + t + " does not match domain " + (r = o.domain, Array.isArray(r) ? "(" + r.join(" | ") + ")" : isRegex(r) ? "RegExp(" + r.toString() + ")" : r.toString()));
                    if (e !== o.win) throw new Error("Response source does not match registered window");
                    deleteResponseListener(n.hash), "error" === n.ack ? o.promise.reject(n.error) : "success" === n.ack && o.promise.resolve({
                        source: e,
                        origin: t,
                        data: n.data
                    })
                }
            }

            function receive_receiveMessage(e, t) {
                var n = t.on,
                    r = t.send,
                    o = globalStore("receivedMessages");
                try {
                    if (!window || window.closed || !e.source) return
                } catch (f) {
                    return
                }
                var i = e.source,
                    a = e.origin,
                    s = function(e, t, n, r) {
                        var o, i = r.on,
                            a = r.send;
                        try {
                            o = deserializeMessage(t, n, e, {
                                on: i,
                                send: a
                            })
                        } catch (f) {
                            return
                        }
                        if (o && "object" == typeof o && null !== o) {
                            var s = o.__post_robot_10_0_46__;
                            if (Array.isArray(s)) return s
                        }
                    }(e.data, i, a, {
                        on: n,
                        send: r
                    });
                if (s) {
                    markWindowKnown(i);
                    for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        if (o.has(u.id)) return;
                        if (o.set(u.id, !0), isWindowClosed(i) && !u.fireAndForget) return;
                        0 === u.origin.indexOf("file:") && (a = "file://");
                        try {
                            "postrobot_message_request" === u.type ? handleRequest(i, a, u, {
                                on: n,
                                send: r
                            }) : "postrobot_message_response" === u.type ? handleResponse(i, a, u) : "postrobot_message_ack" === u.type && handleAck(i, a, u)
                        } catch (f) {
                            setTimeout(function() {
                                throw f
                            }, 0)
                        }
                    }
                }
            }

            function on_on(e, t, n) {
                if (!e) throw new Error("Expected name");
                if ("function" == typeof(t = t || {}) && (n = t, t = {}), !n) throw new Error("Expected handler");
                var r = function addRequestListener(e, t) {
                    var n = e.name,
                        r = e.win,
                        o = e.domain,
                        i = windowStore("requestListeners");
                    if (!n || "string" != typeof n) throw new Error("Name required to add request listener");
                    if (r && "*" !== r && k.isProxyWindow(r)) {
                        var a = r.awaitWindow().then(function(e) {
                            return addRequestListener({
                                name: n,
                                win: e,
                                domain: o
                            }, t)
                        });
                        return {
                            cancel: function cancel() {
                                a.then(function(e) {
                                    return e.cancel()
                                }, src_util_noop)
                            }
                        }
                    }
                    var s = r;
                    if (Array.isArray(s)) {
                        for (var c = [], u = 0, f = s; u < f.length; u++) c.push(addRequestListener({
                            name: n,
                            domain: o,
                            win: f[u]
                        }, t));
                        return {
                            cancel: function cancel() {
                                for (var e = 0; e < c.length; e++) c[e].cancel()
                            }
                        }
                    }
                    if (Array.isArray(o)) {
                        for (var l = [], d = 0, p = o; d < p.length; d++) l.push(addRequestListener({
                            name: n,
                            win: s,
                            domain: p[d]
                        }, t));
                        return {
                            cancel: function cancel() {
                                for (var e = 0; e < l.length; e++) l[e].cancel()
                            }
                        }
                    }
                    var h = getRequestListener({
                        name: n,
                        win: s,
                        domain: o
                    });
                    s && "*" !== s || (s = getWildcard());
                    var m = (o = o || "*").toString();
                    if (h) throw s && o ? new Error("Request listener already exists for " + n + " on domain " + o.toString() + " for " + (s === getWildcard() ? "wildcard" : "specified") + " window") : s ? new Error("Request listener already exists for " + n + " for " + (s === getWildcard() ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + n + " on domain " + o.toString()) : new Error("Request listener already exists for " + n);
                    var g, w, v = i.getOrSet(s, function() {
                            return {}
                        }),
                        y = util_getOrSet(v, n, function() {
                            return {}
                        });
                    return util_isRegex(o) ? (g = util_getOrSet(y, "__domain_regex__", function() {
                        return []
                    })).push(w = {
                        regex: o,
                        listener: t
                    }) : y[m] = t, {
                        cancel: function cancel() {
                            delete y[m], w && (g.splice(g.indexOf(w, 1)), g.length || delete y.__domain_regex__), Object.keys(y).length || delete v[n], s && !Object.keys(v).length && i.del(s)
                        }
                    }
                }({
                    name: e,
                    win: t.window,
                    domain: t.domain || "*"
                }, {
                    handler: n || t.handler,
                    handleError: t.errorHandler || function(e) {
                        throw e
                    }
                });
                return {
                    cancel: function cancel() {
                        r.cancel()
                    }
                }
            }

            function on_once(e, t, n) {
                "function" == typeof(t = t || {}) && (n = t, t = {});
                var r, o = new l;
                return t.errorHandler = function(e) {
                    r.cancel(), o.reject(e)
                }, r = on_on(e, t, function(e) {
                    if (r.cancel(), o.resolve(e), n) return n(e)
                }), o.cancel = r.cancel, o
            }
            I.postrobot_post_message = function(e, t, n) {
                0 === n.indexOf("file:") && (n = "*"), e.postMessage(t, n)
            };
            var T = function send(e, t, n, r) {
                var o = (r = r || {}).domain || "*",
                    i = r.timeout || -1,
                    a = r.timeout || 5e3,
                    s = r.fireAndForget || !1;
                return k.toProxyWindow(e, {
                    send: send
                }).awaitWindow().then(function(e) {
                    return l.try(function() {
                        if (function(e, t, n) {
                                if (!e) throw new Error("Expected name");
                                if (n && "string" != typeof n && !Array.isArray(n) && !util_isRegex(n)) throw new TypeError("Can not send " + e + ". Expected domain " + JSON.stringify(n) + " to be a string, array, or regex");
                                if (isWindowClosed(t)) throw new Error("Can not send " + e + ". Target window is closed")
                            }(t, e, o), function(e, t) {
                                var n = getAncestor(t);
                                if (n) return n === e;
                                if (t === e) return !1;
                                if (function(e) {
                                        void 0 === e && (e = window);
                                        try {
                                            if (e.top) return e.top
                                        } catch (o) {}
                                        if (getParent(e) === e) return e;
                                        try {
                                            if (isAncestorParent(window, e) && window.top) return window.top
                                        } catch (o) {}
                                        try {
                                            if (isAncestorParent(e, window) && window.top) return window.top
                                        } catch (o) {}
                                        for (var t = 0, n = function getAllChildFrames(e) {
                                                for (var t = [], n = 0, r = getFrames(e); n < r.length; n++) {
                                                    var o = r[n];
                                                    t.push(o);
                                                    for (var i = 0, a = getAllChildFrames(o); i < a.length; i++) t.push(a[i])
                                                }
                                                return t
                                            }(e); t < n.length; t++) {
                                            var r = n[t];
                                            try {
                                                if (r.top) return r.top
                                            } catch (o) {}
                                            if (getParent(r) === r) return r
                                        }
                                    }(t) === t) return !1;
                                for (var r = 0, o = getFrames(e); r < o.length; r++)
                                    if (o[r] === t) return !0;
                                return !1
                            }(window, e)) return function(e, t, n) {
                            void 0 === t && (t = 5e3), void 0 === n && (n = "Window");
                            var r = function(e) {
                                return windowStore("helloPromises").getOrSet(e, function() {
                                    return new l
                                })
                            }(e);
                            return -1 !== t && (r = r.timeout(t, new Error(n + " did not load after " + t + "ms"))), r
                        }(e, a)
                    }).then(function(t) {
                        return function(e, t, n, r) {
                            var o = r.send;
                            return l.try(function() {
                                return "string" == typeof t ? t : l.try(function() {
                                    return n || sayHello(e, {
                                        send: o
                                    }).then(function(e) {
                                        return e.domain
                                    })
                                }).then(function(e) {
                                    if (!matchDomain(t, t)) throw new Error("Domain " + stringify(t) + " does not match " + stringify(t));
                                    return e
                                })
                            })
                        }(e, o, (void 0 === t ? {} : t).domain, {
                            send: send
                        })
                    }).then(function(r) {
                        var o = r,
                            a = "postrobot_method" === t && n && "string" == typeof n.name ? n.name + "()" : t,
                            c = new l,
                            u = t + "_" + uniqueID();
                        if (!s) {
                            var f = {
                                name: t,
                                win: e,
                                domain: o,
                                promise: c
                            };
                            ! function(e, t) {
                                globalStore("responseListeners").set(e, t)
                            }(u, f);
                            var d = windowStore("requestPromises").getOrSet(e, function() {
                                return []
                            });
                            d.push(c), c.catch(function() {
                                ! function(e) {
                                    globalStore("erroredResponseListeners").set(e, !0)
                                }(u), deleteResponseListener(u)
                            });
                            var p = function(e) {
                                    return windowStore("knownWindows").get(e, !1)
                                }(e) ? 1e4 : 2e3,
                                h = i,
                                m = p,
                                g = h,
                                w = function(n, r) {
                                    var o;
                                    return function loop() {
                                        o = setTimeout(function() {
                                            isWindowClosed(e) ? c.reject(new Error("Window closed for " + t + " before " + (f.ack ? "response" : "ack"))) : f.cancelled ? c.reject(new Error("Response listener was cancelled for " + t)) : (m = Math.max(m - 500, 0), -1 !== g && (g = Math.max(g - 500, 0)), f.ack || 0 !== m ? 0 === g && c.reject(new Error("No response for postMessage " + a + " in " + getDomain() + " in " + h + "ms")) : c.reject(new Error("No ack for postMessage " + a + " in " + getDomain() + " in " + p + "ms"))), loop()
                                        }, 500)
                                    }(), {
                                        cancel: function cancel() {
                                            clearTimeout(o)
                                        }
                                    }
                                }();
                            c.finally(function() {
                                w.cancel(), d.splice(d.indexOf(c, 1))
                            }).catch(src_util_noop)
                        }
                        return send_sendMessage(e, o, {
                            id: uniqueID(),
                            origin: getDomain(window),
                            type: "postrobot_message_request",
                            hash: u,
                            name: t,
                            data: n,
                            fireAndForget: s
                        }, {
                            on: on_on,
                            send: send
                        }).then(function() {
                            return s ? c.resolve() : c
                        }, function(e) {
                            throw new Error("Send request message failed for " + a + " in " + getDomain() + "\n\n" + stringifyError(e))
                        })
                    })
                })
            };

            function setup_serializeMessage(e, t, n) {
                return serializeMessage(e, t, n, {
                    on: on_on,
                    send: T
                })
            }

            function setup_deserializeMessage(e, t, n) {
                return deserializeMessage(e, t, n, {
                    on: on_on,
                    send: T
                })
            }

            function createProxyWindow(e) {
                return new k({
                    send: T,
                    win: e
                })
            }

            function setup_toProxyWindow(e) {
                return k.toProxyWindow(e, {
                    send: T
                })
            }

            function setup() {
                var e, t, n, r;
                global_getGlobal().initialized || (global_getGlobal().initialized = !0, t = (e = {
                    on: on_on,
                    send: T
                }).on, n = e.send, (r = global_getGlobal()).receiveMessage = r.receiveMessage || function(e) {
                    return receive_receiveMessage(e, {
                        on: t,
                        send: n
                    })
                }, function(e) {
                    var t = e.on,
                        n = e.send;
                    globalStore().getOrSet("postMessageListener", function() {
                        return e = window, r = function(e) {
                            ! function(e, t) {
                                var n = t.on,
                                    r = t.send;
                                l.try(function() {
                                    var t = e.source || e.sourceElement,
                                        o = e.origin || e.originalEvent && e.originalEvent.origin,
                                        i = e.data;
                                    if ("null" === o && (o = "file://"), t) {
                                        if (!o) throw new Error("Post message did not have origin domain");
                                        receive_receiveMessage({
                                            source: t,
                                            origin: o,
                                            data: i
                                        }, {
                                            on: n,
                                            send: r
                                        })
                                    }
                                })
                            }(e, {
                                on: t,
                                send: n
                            })
                        }, e.addEventListener("message", r), {
                            cancel: function cancel() {
                                e.removeEventListener("message", r)
                            }
                        };
                        var e, r
                    })
                }({
                    on: on_on,
                    send: T
                }), function(e) {
                    var t = e.on,
                        n = e.send;
                    globalStore("builtinListeners").getOrSet("helloListener", function() {
                        var e = t("postrobot_hello", {
                                domain: "*"
                            }, function(e) {
                                return resolveHelloPromise(e.source, {
                                    domain: e.origin
                                }), {
                                    instanceID: getInstanceID()
                                }
                            }),
                            r = getAncestor();
                        return r && sayHello(r, {
                            send: n
                        }).catch(function(e) {}), e
                    })
                }({
                    on: on_on,
                    send: T
                }))
            }

            function destroy() {
                var e;
                ! function() {
                    for (var e = globalStore("responseListeners"), t = 0, n = e.keys(); t < n.length; t++) {
                        var r = n[t],
                            o = e.get(r);
                        o && (o.cancelled = !0), e.del(r)
                    }
                }(), (e = globalStore().get("postMessageListener")) && e.cancel(), delete window.__post_robot_10_0_46__
            }
            var C = !0;

            function cleanUpWindow(e) {
                for (var t = 0, n = windowStore("requestPromises").get(e, []); t < n.length; t++) n[t].reject(new Error("Window " + (isWindowClosed(e) ? "closed" : "cleaned up") + " before response")).catch(src_util_noop)
            }
            setup()
        }])
    }).call(this, n(14).Buffer)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15),
            o = n(16),
            i = n(17);

        function kMaxLength() {
            return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function createBuffer(e, t) {
            if (kMaxLength() < t) throw new RangeError("Invalid typed array length");
            return Buffer.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Buffer.prototype : (null === e && (e = new Buffer(t)), e.length = t), e
        }

        function Buffer(e, t, n) {
            if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(e, t, n);
            if ("number" === typeof e) {
                if ("string" === typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return allocUnsafe(this, e)
            }
            return from(this, e, t, n)
        }

        function from(e, t, n, r) {
            if ("number" === typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? function fromArrayBuffer(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                Buffer.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Buffer.prototype : e = fromArrayLike(e, t);
                return e
            }(e, t, n, r) : "string" === typeof t ? function fromString(e, t, n) {
                "string" === typeof n && "" !== n || (n = "utf8");
                if (!Buffer.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | byteLength(t, n),
                    o = (e = createBuffer(e, r)).write(t, n);
                o !== r && (e = e.slice(0, o));
                return e
            }(e, t, n) : function fromObject(e, t) {
                if (Buffer.isBuffer(t)) {
                    var n = 0 | checked(t.length);
                    return 0 === (e = createBuffer(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" !== typeof t.length || function isnan(e) {
                        return e !== e
                    }(t.length) ? createBuffer(e, 0) : fromArrayLike(e, t);
                    if ("Buffer" === t.type && i(t.data)) return fromArrayLike(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function assertSize(e) {
            if ("number" !== typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function allocUnsafe(e, t) {
            if (assertSize(t), e = createBuffer(e, t < 0 ? 0 : 0 | checked(t)), !Buffer.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function fromArrayLike(e, t) {
            var n = t.length < 0 ? 0 : 0 | checked(t.length);
            e = createBuffer(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e
        }

        function checked(e) {
            if (e >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
            return 0 | e
        }

        function byteLength(e, t) {
            if (Buffer.isBuffer(e)) return e.length;
            if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" !== typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return utf8ToBytes(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return base64ToBytes(e).length;
                default:
                    if (r) return utf8ToBytes(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function swap(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r
        }

        function bidirectionalIndexOf(e, t, n, r, o) {
            if (0 === e.length) return -1;
            if ("string" === typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (o) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!o) return -1;
                n = 0
            }
            if ("string" === typeof t && (t = Buffer.from(t, r)), Buffer.isBuffer(t)) return 0 === t.length ? -1 : arrayIndexOf(e, t, n, r, o);
            if ("number" === typeof t) return t &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : arrayIndexOf(e, [t], n, r, o);
            throw new TypeError("val must be string, number or Buffer")
        }

        function arrayIndexOf(e, t, n, r, o) {
            var i, a = 1,
                s = e.length,
                c = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2) return -1;
                a = 2, s /= 2, c /= 2, n /= 2
            }

            function read(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (o) {
                var u = -1;
                for (i = n; i < s; i++)
                    if (read(e, i) === read(t, -1 === u ? 0 : i - u)) {
                        if (-1 === u && (u = i), i - u + 1 === c) return u * a
                    } else -1 !== u && (i -= i - u), u = -1
            } else
                for (n + c > s && (n = s - c), i = n; i >= 0; i--) {
                    for (var f = !0, l = 0; l < c; l++)
                        if (read(e, i + l) !== read(t, l)) {
                            f = !1;
                            break
                        }
                    if (f) return i
                }
            return -1
        }

        function hexWrite(e, t, n, r) {
            n = Number(n) || 0;
            var o = e.length - n;
            r ? (r = Number(r)) > o && (r = o) : r = o;
            var i = t.length;
            if (i % 2 !== 0) throw new TypeError("Invalid hex string");
            r > i / 2 && (r = i / 2);
            for (var a = 0; a < r; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                e[n + a] = s
            }
            return a
        }

        function utf8Write(e, t, n, r) {
            return blitBuffer(utf8ToBytes(t, e.length - n), e, n, r)
        }

        function asciiWrite(e, t, n, r) {
            return blitBuffer(function asciiToBytes(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }

        function latin1Write(e, t, n, r) {
            return asciiWrite(e, t, n, r)
        }

        function base64Write(e, t, n, r) {
            return blitBuffer(base64ToBytes(t), e, n, r)
        }

        function ucs2Write(e, t, n, r) {
            return blitBuffer(function utf16leToBytes(e, t) {
                for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
                return i
            }(t, e.length - n), e, n, r)
        }

        function base64Slice(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }

        function utf8Slice(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], o = t; o < n;) {
                var i, s, c, u, f = e[o],
                    l = null,
                    d = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                if (o + d <= n) switch (d) {
                    case 1:
                        f < 128 && (l = f);
                        break;
                    case 2:
                        128 === (192 & (i = e[o + 1])) && (u = (31 & f) << 6 | 63 & i) > 127 && (l = u);
                        break;
                    case 3:
                        i = e[o + 1], s = e[o + 2], 128 === (192 & i) && 128 === (192 & s) && (u = (15 & f) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                        break;
                    case 4:
                        i = e[o + 1], s = e[o + 2], c = e[o + 3], 128 === (192 & i) && 128 === (192 & s) && 128 === (192 & c) && (u = (15 & f) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & c) > 65535 && u < 1114112 && (l = u)
                }
                null === l ? (l = 65533, d = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += d
            }
            return function decodeCodePointsArray(e) {
                var t = e.length;
                if (t <= a) return String.fromCharCode.apply(String, e);
                var n = "",
                    r = 0;
                for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += a));
                return n
            }(r)
        }
        t.Buffer = Buffer, t.SlowBuffer = function SlowBuffer(e) {
            +e != e && (e = 0);
            return Buffer.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, Buffer.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function typedArraySupport() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function foo() {
                        return 42
                    }
                }, 42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(), t.kMaxLength = kMaxLength(), Buffer.poolSize = 8192, Buffer._augment = function(e) {
            return e.__proto__ = Buffer.prototype, e
        }, Buffer.from = function(e, t, n) {
            return from(null, e, t, n)
        }, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, Buffer.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: !0
        })), Buffer.alloc = function(e, t, n) {
            return function alloc(e, t, n, r) {
                return assertSize(t), t <= 0 ? createBuffer(e, t) : void 0 !== n ? "string" === typeof r ? createBuffer(e, t).fill(n, r) : createBuffer(e, t).fill(n) : createBuffer(e, t)
            }(null, e, t, n)
        }, Buffer.allocUnsafe = function(e) {
            return allocUnsafe(null, e)
        }, Buffer.allocUnsafeSlow = function(e) {
            return allocUnsafe(null, e)
        }, Buffer.isBuffer = function isBuffer(e) {
            return !(null == e || !e._isBuffer)
        }, Buffer.compare = function compare(e, t) {
            if (!Buffer.isBuffer(e) || !Buffer.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                if (e[o] !== t[o]) {
                    n = e[o], r = t[o];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }, Buffer.isEncoding = function isEncoding(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, Buffer.concat = function concat(e, t) {
            if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return Buffer.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = Buffer.allocUnsafe(t),
                o = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!Buffer.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, o), o += a.length
            }
            return r
        }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function swap16() {
            var e = this.length;
            if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) swap(this, t, t + 1);
            return this
        }, Buffer.prototype.swap32 = function swap32() {
            var e = this.length;
            if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) swap(this, t, t + 3), swap(this, t + 1, t + 2);
            return this
        }, Buffer.prototype.swap64 = function swap64() {
            var e = this.length;
            if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) swap(this, t, t + 7), swap(this, t + 1, t + 6), swap(this, t + 2, t + 5), swap(this, t + 3, t + 4);
            return this
        }, Buffer.prototype.toString = function toString() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? utf8Slice(this, 0, e) : function slowToString(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return hexSlice(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return utf8Slice(this, t, n);
                    case "ascii":
                        return asciiSlice(this, t, n);
                    case "latin1":
                    case "binary":
                        return latin1Slice(this, t, n);
                    case "base64":
                        return base64Slice(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return utf16leSlice(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }.apply(this, arguments)
        }, Buffer.prototype.equals = function equals(e) {
            if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === Buffer.compare(this, e)
        }, Buffer.prototype.inspect = function inspect() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, Buffer.prototype.compare = function compare(e, t, n, r, o) {
            if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
            if (r >= o && t >= n) return 0;
            if (r >= o) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), c = this.slice(r, o), u = e.slice(t, n), f = 0; f < s; ++f)
                if (c[f] !== u[f]) {
                    i = c[f], a = u[f];
                    break
                }
            return i < a ? -1 : a < i ? 1 : 0
        }, Buffer.prototype.includes = function includes(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, Buffer.prototype.indexOf = function indexOf(e, t, n) {
            return bidirectionalIndexOf(this, e, t, n, !0)
        }, Buffer.prototype.lastIndexOf = function lastIndexOf(e, t, n) {
            return bidirectionalIndexOf(this, e, t, n, !1)
        }, Buffer.prototype.write = function write(e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" === typeof t) r = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var o = this.length - t;
            if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1;;) switch (r) {
                case "hex":
                    return hexWrite(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return utf8Write(this, e, t, n);
                case "ascii":
                    return asciiWrite(this, e, t, n);
                case "latin1":
                case "binary":
                    return latin1Write(this, e, t, n);
                case "base64":
                    return base64Write(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ucs2Write(this, e, t, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), i = !0
            }
        }, Buffer.prototype.toJSON = function toJSON() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var a = 4096;

        function asciiSlice(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
            return r
        }

        function latin1Slice(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
            return r
        }

        function hexSlice(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var o = "", i = t; i < n; ++i) o += toHex(e[i]);
            return o
        }

        function utf16leSlice(e, t, n) {
            for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
            return o
        }

        function checkOffset(e, t, n) {
            if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function checkInt(e, t, n, r, o, i) {
            if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range")
        }

        function objectWriteUInt16(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
        }

        function objectWriteUInt32(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
        }

        function checkIEEE754(e, t, n, r, o, i) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function writeFloat(e, t, n, r, i) {
            return i || checkIEEE754(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4
        }

        function writeDouble(e, t, n, r, i) {
            return i || checkIEEE754(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8
        }
        Buffer.prototype.slice = function slice(e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), Buffer.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = Buffer.prototype;
            else {
                var o = t - e;
                n = new Buffer(o, void 0);
                for (var i = 0; i < o; ++i) n[i] = this[i + e]
            }
            return n
        }, Buffer.prototype.readUIntLE = function readUIntLE(e, t, n) {
            e |= 0, t |= 0, n || checkOffset(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
            return r
        }, Buffer.prototype.readUIntBE = function readUIntBE(e, t, n) {
            e |= 0, t |= 0, n || checkOffset(e, t, this.length);
            for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
            return r
        }, Buffer.prototype.readUInt8 = function readUInt8(e, t) {
            return t || checkOffset(e, 1, this.length), this[e]
        }, Buffer.prototype.readUInt16LE = function readUInt16LE(e, t) {
            return t || checkOffset(e, 2, this.length), this[e] | this[e + 1] << 8
        }, Buffer.prototype.readUInt16BE = function readUInt16BE(e, t) {
            return t || checkOffset(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, Buffer.prototype.readUInt32LE = function readUInt32LE(e, t) {
            return t || checkOffset(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, Buffer.prototype.readUInt32BE = function readUInt32BE(e, t) {
            return t || checkOffset(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, Buffer.prototype.readIntLE = function readIntLE(e, t, n) {
            e |= 0, t |= 0, n || checkOffset(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, Buffer.prototype.readIntBE = function readIntBE(e, t, n) {
            e |= 0, t |= 0, n || checkOffset(e, t, this.length);
            for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
        }, Buffer.prototype.readInt8 = function readInt8(e, t) {
            return t || checkOffset(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, Buffer.prototype.readInt16LE = function readInt16LE(e, t) {
            t || checkOffset(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, Buffer.prototype.readInt16BE = function readInt16BE(e, t) {
            t || checkOffset(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, Buffer.prototype.readInt32LE = function readInt32LE(e, t) {
            return t || checkOffset(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, Buffer.prototype.readInt32BE = function readInt32BE(e, t) {
            return t || checkOffset(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, Buffer.prototype.readFloatLE = function readFloatLE(e, t) {
            return t || checkOffset(e, 4, this.length), o.read(this, e, !0, 23, 4)
        }, Buffer.prototype.readFloatBE = function readFloatBE(e, t) {
            return t || checkOffset(e, 4, this.length), o.read(this, e, !1, 23, 4)
        }, Buffer.prototype.readDoubleLE = function readDoubleLE(e, t) {
            return t || checkOffset(e, 8, this.length), o.read(this, e, !0, 52, 8)
        }, Buffer.prototype.readDoubleBE = function readDoubleBE(e, t) {
            return t || checkOffset(e, 8, this.length), o.read(this, e, !1, 52, 8)
        }, Buffer.prototype.writeUIntLE = function writeUIntLE(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || checkInt(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
                i = 0;
            for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
            return t + n
        }, Buffer.prototype.writeUIntBE = function writeUIntBE(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || checkInt(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
                i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
            return t + n
        }, Buffer.prototype.writeUInt8 = function writeUInt8(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 1, 255, 0), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2
        }, Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2
        }, Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : objectWriteUInt32(this, e, t, !0), t + 4
        }, Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1), t + 4
        }, Buffer.prototype.writeIntLE = function writeIntLE(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                checkInt(this, e, t, n, o - 1, -o)
            }
            var i = 0,
                a = 1,
                s = 0;
            for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
            return t + n
        }, Buffer.prototype.writeIntBE = function writeIntBE(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                checkInt(this, e, t, n, o - 1, -o)
            }
            var i = n - 1,
                a = 1,
                s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
            return t + n
        }, Buffer.prototype.writeInt8 = function writeInt8(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 1, 127, -128), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, Buffer.prototype.writeInt16LE = function writeInt16LE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2
        }, Buffer.prototype.writeInt16BE = function writeInt16BE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2
        }, Buffer.prototype.writeInt32LE = function writeInt32LE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 4, 2147483647, -2147483648), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : objectWriteUInt32(this, e, t, !0), t + 4
        }, Buffer.prototype.writeInt32BE = function writeInt32BE(e, t, n) {
            return e = +e, t |= 0, n || checkInt(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1), t + 4
        }, Buffer.prototype.writeFloatLE = function writeFloatLE(e, t, n) {
            return writeFloat(this, e, t, !0, n)
        }, Buffer.prototype.writeFloatBE = function writeFloatBE(e, t, n) {
            return writeFloat(this, e, t, !1, n)
        }, Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, t, n) {
            return writeDouble(this, e, t, !0, n)
        }, Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, t, n) {
            return writeDouble(this, e, t, !1, n)
        }, Buffer.prototype.copy = function copy(e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var o, i = r - n;
            if (this === e && n < t && t < r)
                for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
            else if (i < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o) e[o + t] = this[o + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
            return i
        }, Buffer.prototype.fill = function fill(e, t, n, r) {
            if ("string" === typeof e) {
                if ("string" === typeof t ? (r = t, t = 0, n = this.length) : "string" === typeof n && (r = n, n = this.length), 1 === e.length) {
                    var o = e.charCodeAt(0);
                    o < 256 && (e = o)
                }
                if (void 0 !== r && "string" !== typeof r) throw new TypeError("encoding must be a string");
                if ("string" === typeof r && !Buffer.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" === typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var i;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" === typeof e)
                for (i = t; i < n; ++i) this[i] = e;
            else {
                var a = Buffer.isBuffer(e) ? e : utf8ToBytes(new Buffer(e, r).toString()),
                    s = a.length;
                for (i = 0; i < n - t; ++i) this[i + t] = a[i % s]
            }
            return this
        };
        var s = /[^+\/0-9A-Za-z-_]/g;

        function toHex(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function utf8ToBytes(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!o) {
                        if (n > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        o = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                        continue
                    }
                    n = 65536 + (o - 55296 << 10 | n - 56320)
                } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    i.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return i
        }

        function base64ToBytes(e) {
            return r.toByteArray(function base64clean(e) {
                if ((e = function stringtrim(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(s, "")).length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e
            }(e))
        }

        function blitBuffer(e, t, n, r) {
            for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
            return o
        }
    }).call(this, n(6))
}, function(e, t, n) {
    "use strict";
    t.byteLength = function byteLength(e) {
        var t = getLens(e),
            n = t[0],
            r = t[1];
        return 3 * (n + r) / 4 - r
    }, t.toByteArray = function toByteArray(e) {
        for (var t, n = getLens(e), r = n[0], a = n[1], s = new i(function _byteLength(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, r, a)), c = 0, u = a > 0 ? r - 4 : r, f = 0; f < u; f += 4) t = o[e.charCodeAt(f)] << 18 | o[e.charCodeAt(f + 1)] << 12 | o[e.charCodeAt(f + 2)] << 6 | o[e.charCodeAt(f + 3)], s[c++] = t >> 16 & 255, s[c++] = t >> 8 & 255, s[c++] = 255 & t;
        2 === a && (t = o[e.charCodeAt(f)] << 2 | o[e.charCodeAt(f + 1)] >> 4, s[c++] = 255 & t);
        1 === a && (t = o[e.charCodeAt(f)] << 10 | o[e.charCodeAt(f + 1)] << 4 | o[e.charCodeAt(f + 2)] >> 2, s[c++] = t >> 8 & 255, s[c++] = 255 & t);
        return s
    }, t.fromByteArray = function fromByteArray(e) {
        for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) i.push(encodeChunk(e, a, a + 16383 > s ? s : a + 16383));
        1 === o ? (t = e[n - 1], i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return i.join("")
    };
    for (var r = [], o = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) r[s] = a[s], o[a.charCodeAt(s)] = s;

    function getLens(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function encodeChunk(e, t, n) {
        for (var o, i, a = [], s = t; s < n; s += 3) o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
        return a.join("")
    }
    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
}, function(e, t) {
    t.read = function(e, t, n, r, o) {
        var i, a, s = 8 * o - r - 1,
            c = (1 << s) - 1,
            u = c >> 1,
            f = -7,
            l = n ? o - 1 : 0,
            d = n ? -1 : 1,
            p = e[t + l];
        for (l += d, i = p & (1 << -f) - 1, p >>= -f, f += s; f > 0; i = 256 * i + e[t + l], l += d, f -= 8);
        for (a = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; a = 256 * a + e[t + l], l += d, f -= 8);
        if (0 === i) i = 1 - u;
        else {
            if (i === c) return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, r), i -= u
        }
        return (p ? -1 : 1) * a * Math.pow(2, i - r)
    }, t.write = function(e, t, n, r, o, i) {
        var a, s, c, u = 8 * i - o - 1,
            f = (1 << u) - 1,
            l = f >> 1,
            d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : i - 1,
            h = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + l >= 1 ? d / c : d * Math.pow(2, 1 - l)) * c >= 2 && (a++, c /= 2), a + l >= f ? (s = 0, a = f) : a + l >= 1 ? (s = (t * c - 1) * Math.pow(2, o), a += l) : (s = t * Math.pow(2, l - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + p] = 255 & s, p += h, s /= 256, o -= 8);
        for (a = a << o | s, u += o; u > 0; e[n + p] = 255 & a, p += h, a /= 256, u -= 8);
        e[n + p - h] |= 128 * m
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t, n) {
    var r = n(7);
    e.exports = function(e, t, n) {
        return void 0 === n ? r(e, t, !1) : r(e, n, !1 !== t)
    }
}, function(e, t, n) {
    var r = n(20);
    "string" === typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(22)(r, o);
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, ".drift-conductor-item iframe,\n.drift-frame-controller {\n  display: block;\n  min-width: 0;\n  max-width: none;\n  min-height: 0;\n  max-height: none;\n}\n\n.drift-conductor-item iframe {\n  color-scheme: light only;\n  border: none !important;\n  background: transparent !important;\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100% !important;\n}\n\n.drift-conductor-item.with-transition {\n  -webkit-transition: opacity .5s ease, -webkit-transform .5s ease;\n  transition: opacity .5s ease, -webkit-transform .5s ease;\n  -o-transition: opacity .5s ease, -o-transform .5s ease;\n  -moz-transition: opacity .5s ease, transform .5s ease, -moz-transform .5s ease;\n  transition: opacity .5s ease, transform .5s ease;\n  transition: opacity .5s ease, transform .5s ease, -webkit-transform .5s ease, -moz-transform .5s ease, -o-transform .5s ease;\n}\n\n.drift-frame-chat.with-transition.drift-frame-chat__takeover {\n  -webkit-transition: opacity .5s ease;\n  -o-transition: opacity .5s ease;\n  -moz-transition: opacity .5s ease;\n  transition: opacity .5s ease;\n}\n\n.drift-conductor-item.with-height-transition {\n  -webkit-transition: max-height .5s ease, opacity .5s ease, -webkit-transform .5s ease;\n  transition: max-height .5s ease, opacity .5s ease, -webkit-transform .5s ease;\n  -o-transition: max-height .5s ease, opacity .5s ease, -o-transform .5s ease;\n  -moz-transition: max-height .5s ease, opacity .5s ease, transform .5s ease, -moz-transform .5s ease;\n  transition: max-height .5s ease, opacity .5s ease, transform .5s ease;\n  transition: max-height .5s ease, opacity .5s ease, transform .5s ease, -webkit-transform .5s ease, -moz-transform .5s ease, -o-transform .5s ease;\n}\n\n.drift-conductor-item {\n  -webkit-transform: translateZ(0);\n     -moz-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n.drift-frame-controller {\n  bottom: 24px;\n}\n\n.drift-frame-controller-align-left {\n  left: 24px;\n}\n\n.drift-frame-controller-align-right {\n  right: 24px;\n}\n\n.drift-frame-chat:not(iframe) {\n  bottom: -webkit-calc(12px + 52px + 24px);\n  bottom: -moz-calc(12px + 52px + 24px);\n  bottom: calc(12px + 52px + 24px); /* vertical margin x 2 + widget icon size*/\n  width: 100%;\n  height: 100%;\n  min-width: 320px;\n  opacity: 0;\n  visibility: hidden;\n\n  -webkit-transform: translateY(88px);\n\n     -moz-transform: translateY(88px);\n\n      -ms-transform: translateY(88px);\n\n       -o-transform: translateY(88px);\n\n          transform: translateY(88px);\n}\n\n.drift-frame-chat:not(iframe).drift-chat-open {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: translateY(0px);\n     -moz-transform: translateY(0px);\n      -ms-transform: translateY(0px);\n       -o-transform: translateY(0px);\n          transform: translateY(0px);\n}\n\n.drift-frame-chat.drift-frame-chat__takeover:not(iframe):not(.drift-frame--mobile) {\n  min-width: 600px;\n}\n\n.drift-frame-chat-align-left {\n  left: 12px;\n}\n\n.drift-frame-chat-align-right {\n  right: 12px;\n}\n\n.drift-frame-takeover,\n.drift-frame-landingPage,\n.drift-frame-chat__takeover {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  min-width: 100%;\n}\n\n.drift-frame-chat__takeover.hide-frame {\n  visibility: hidden;\n}\n\n.drift-frame-emailCapture {\n  bottom: 0;\n  height: -webkit-calc(100% + 30px);\n  height: -moz-calc(100% + 30px);\n  height: calc(100% + 30px);\n}\n\n.drift-frame-emailCapture-align-left {\n  left: 0;\n}\n\n.drift-frame-emailCapture-align-right {\n  right: 0;\n}\n\n.drift-frame-slider {\n  bottom: 18px;\n  height: -webkit-calc(100% + 20px);\n  height: -moz-calc(100% + 20px);\n  height: calc(100% + 20px);\n}\n\n.drift-frame-slider-align-left {\n  left: 96px;\n}\n\n.drift-frame-slider-align-right {\n  right: 96px;\n}\n\n.drift-frame--mobile.drift-frame-slider-align-left {\n  left: 68px;\n}\n\n.drift-frame--mobile.drift-frame-slider-align-right {\n  right: 68px;\n}\n\n.drift-widget-content-box {\n  background: rgba(0,0,0,.5);\n  width: 100%;\n  height: 100%;\n\n  position: fixed;\n  z-index: 2147483647;\n  top: 0;\n  left: 0;\n}\n\n.drift-widget-content-box > * {\n  margin: 0 auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n     -moz-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-height: 80%;\n\n}\n\n/* Site Concierge Classes */\n.drift-frame-chat__sc-loaded:not(.drift-chat-open),\n.drift-frame-controller__sc-loaded {\n  max-height: 0px !important;\n  visibility: hidden !important;\n}\n\n.drift-frame-chat__sc-loaded {\n  bottom: 0px !important;\n}\n\n@media\n(max-height: 685px),\n(min-width: 369px) and (max-width: 380px),\n(max-width: 367px),\n\n(min-device-width: 320px)\nand (max-device-width: 480px)\nand (-webkit-min-device-pixel-ratio: 2)\nand (orientation: portrait)\n\n{\n  .drift-frame--mobile.drift-frame-chat.drift-chat-open {\n    bottom: 0 !important;\n    right: 0;\n    left: 0;\n    z-index: 2147483647 !important;\n  }\n\n  .drift-frame--mobile.drift-frame-controller {\n    bottom: 0;\n  }\n\n  .drift-frame--mobile.drift-frame-controller.drift-frame-controller-align-left {\n    left: 0;\n  }\n\n  .drift-frame--mobile.drift-frame-controller.drift-frame-controller-align-right {\n    right: 0;\n  }\n\n\n  .drift-frame--mobile.drift-frame-controller.drift-chat-open {\n    display: none;\n  }\n\n  .drift-frame--mobile.drift-frame-slider {\n    bottom: 0;\n    max-width: 320px;\n  }\n\n  .drift-frame--mobile iframe.drift-frame-chat {\n    width: 1px !important;\n    min-width: 100%;\n\n    height: 1px !important;\n    min-height: 100%;\n  }\n\n  html.drift-widget-parent--chat-open,\n  html.drift-widget-parent--chat-open > body {\n    height: 100vh !important;\n    margin: 0 !important;\n    min-height: 0 !important;\n    overflow: hidden !important;\n    position: static !important;\n  }\n}\n\n@media only screen and (orientation: landscape) {\n  .drift-frame--mobile.drift-frame-controller.drift-chat-open {\n    display: none;\n  }\n\n  .drift-frame--mobile.drift-frame-controller {\n    bottom: 0;\n  }\n\n  .drift-frame--mobile.drift-frame-controller-align-right {\n    right: 0;\n  }\n\n  .drift-frame--mobile.drift-frame-controller-align-left {\n    left: 0;\n  }\n}\n\n.drift-frame-chat.widget--xs.drift-chat-open {\n  bottom: 0 !important;\n  right: 0 !important;\n  left: 0 !important;\n}\n\n.drift-frame-controller.widget--xs.drift-chat-open {\n  display: none;\n}\n\n", ""])
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = [];
        return t.toString = function toString() {
            return this.map(function(t) {
                var n = function cssWithMappingToString(e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" === typeof btoa) {
                        var o = function toComment(e) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                            }(r),
                            i = r.sources.map(function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function(e, n) {
            "string" === typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                null != a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function(e, t, n) {
    var r = {},
        o = function(e) {
            var t;
            return function() {
                return "undefined" === typeof t && (t = e.apply(this, arguments)), t
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        i = function(e) {
            var t = {};
            return function(e, n) {
                if ("function" === typeof e) return e();
                if ("undefined" === typeof t[e]) {
                    var r = function(e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (o) {
                        r = null
                    }
                    t[e] = r
                }
                return t[e]
            }
        }(),
        a = null,
        s = 0,
        c = [],
        u = n(23);

    function addStylesToDom(e, t) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n],
                i = r[o.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++) i.parts.push(addStyle(o.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < o.parts.length; a++) s.push(addStyle(o.parts[a], t));
                r[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function listToStyles(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                a = t.base ? i[0] + t.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function insertStyleElement(e, t) {
        var n = i(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" !== typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = i(e.insertAt.before, n);
            n.insertBefore(t, o)
        }
    }

    function removeStyleElement(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = c.indexOf(e);
        t >= 0 && c.splice(t, 1)
    }

    function createStyleElement(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = function getNonce() {
                0;
                return n.nc
            }();
            r && (e.attrs.nonce = r)
        }
        return addAttrs(t, e.attrs), insertStyleElement(e, t), t
    }

    function addAttrs(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }

    function addStyle(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = "function" === typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
            e.css = i
        }
        if (t.singleton) {
            var c = s++;
            n = a || (a = createStyleElement(t)), r = applyToSingletonTag.bind(null, n, c, !1), o = applyToSingletonTag.bind(null, n, c, !0)
        } else e.sourceMap && "function" === typeof URL && "function" === typeof URL.createObjectURL && "function" === typeof URL.revokeObjectURL && "function" === typeof Blob && "function" === typeof btoa ? (n = function createLinkElement(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", addAttrs(t, e.attrs), insertStyleElement(e, t), t
        }(t), r = function updateLink(e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = u(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), o = function() {
            removeStyleElement(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = createStyleElement(t), r = function applyToTag(e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function() {
            removeStyleElement(n)
        });
        return r(e),
            function updateStyle(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function(e, t) {
        if ("undefined" !== typeof DEBUG && DEBUG && "object" !== typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" === typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" === typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = listToStyles(e, t);
        return addStylesToDom(n, t),
            function update(e) {
                for (var o = [], i = 0; i < n.length; i++) {
                    var a = n[i];
                    (s = r[a.id]).refs--, o.push(s)
                }
                e && addStylesToDom(listToStyles(e, t), t);
                for (i = 0; i < o.length; i++) {
                    var s;
                    if (0 === (s = o[i]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete r[s.id]
                    }
                }
            }
    };
    var f = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }();

    function applyToSingletonTag(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = f(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" !== typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" !== typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};

    function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _toConsumableArray(e) {
        return function _arrayWithoutHoles(e) {
            if (Array.isArray(e)) return _arrayLikeToArray(e)
        }(e) || function _iterableToArray(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function _unsupportedIterableToArray(e, t) {
            if (e) {
                if ("string" === typeof e) return _arrayLikeToArray(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
            }
        }(e) || function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    n.r(r), n.d(r, "collectFormData", function() {
        return Gn
    }), n.d(r, "commitFormData", function() {
        return Hn
    }), n.d(r, "stageFormData", function() {
        return qn
    }), n.d(r, "init", function() {
        return po
    }), n.d(r, "drift_cohabitation", function() {
        return yo
    }), n.d(r, "app", function() {
        return _o
    }), n.d(r, "config", function() {
        return bo
    }), n.d(r, "on", function() {
        return Eo
    }), n.d(r, "off", function() {
        return xo
    }), n.d(r, "page", function() {
        return Ao
    }), n.d(r, "identify", function() {
        return So
    }), n.d(r, "show", function() {
        return Po
    }), n.d(r, "reset", function() {
        return Ro
    }), n.d(r, "hide", function() {
        return Do
    }), n.d(r, "setContext", function() {
        return Lo
    }), n.d(r, "unload", function() {
        return No
    }), n.d(r, "areConnectFormParamsValid", function() {
        return jo
    }), n.d(r, "connectForm", function() {
        return Uo
    });
    var o = n(0),
        i = n.n(o);

    function asyncGeneratorStep(e, t, n, r, o, i, a) {
        try {
            var s = e[i](a),
                c = s.value
        } catch (u) {
            return void n(u)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
    }

    function _asyncToGenerator(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function _next(e) {
                    asyncGeneratorStep(i, r, o, _next, _throw, "next", e)
                }

                function _throw(e) {
                    asyncGeneratorStep(i, r, o, _next, _throw, "throw", e)
                }
                _next(void 0)
            })
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ownKeys(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function _objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                _defineProperty(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var a = n(4),
        s = n(8),
        c = n(9),
        u = function checkEnv(e) {
            return window.__DRIFT_ENV__ === e || "PRODUCTION" === e
        },
        f = u("PRODUCTION") ? c : u("MASTER") ? a : _objectSpread2(_objectSpread2({}, a), s);

    function _isPlaceholder(e) {
        return null != e && "object" === typeof e && !0 === e["@@functional/placeholder"]
    }

    function _curry1(e) {
        return function f1(t) {
            return 0 === arguments.length || _isPlaceholder(t) ? f1 : e.apply(this, arguments)
        }
    }

    function _curry2(e) {
        return function f2(t, n) {
            switch (arguments.length) {
                case 0:
                    return f2;
                case 1:
                    return _isPlaceholder(t) ? f2 : _curry1(function(n) {
                        return e(t, n)
                    });
                default:
                    return _isPlaceholder(t) && _isPlaceholder(n) ? f2 : _isPlaceholder(t) ? _curry1(function(t) {
                        return e(t, n)
                    }) : _isPlaceholder(n) ? _curry1(function(n) {
                        return e(t, n)
                    }) : e(t, n)
            }
        }
    }

    function _curry3(e) {
        return function f3(t, n, r) {
            switch (arguments.length) {
                case 0:
                    return f3;
                case 1:
                    return _isPlaceholder(t) ? f3 : _curry2(function(n, r) {
                        return e(t, n, r)
                    });
                case 2:
                    return _isPlaceholder(t) && _isPlaceholder(n) ? f3 : _isPlaceholder(t) ? _curry2(function(t, r) {
                        return e(t, n, r)
                    }) : _isPlaceholder(n) ? _curry2(function(n, r) {
                        return e(t, n, r)
                    }) : _curry1(function(r) {
                        return e(t, n, r)
                    });
                default:
                    return _isPlaceholder(t) && _isPlaceholder(n) && _isPlaceholder(r) ? f3 : _isPlaceholder(t) && _isPlaceholder(n) ? _curry2(function(t, n) {
                        return e(t, n, r)
                    }) : _isPlaceholder(t) && _isPlaceholder(r) ? _curry2(function(t, r) {
                        return e(t, n, r)
                    }) : _isPlaceholder(n) && _isPlaceholder(r) ? _curry2(function(n, r) {
                        return e(t, n, r)
                    }) : _isPlaceholder(t) ? _curry1(function(t) {
                        return e(t, n, r)
                    }) : _isPlaceholder(n) ? _curry1(function(n) {
                        return e(t, n, r)
                    }) : _isPlaceholder(r) ? _curry1(function(r) {
                        return e(t, n, r)
                    }) : e(t, n, r)
            }
        }
    }
    var l = _curry2(function defaultTo(e, t) {
            return null == t || t !== t ? e : t
        }),
        d = Number.isInteger || function _isInteger(e) {
            return e << 0 === e
        };

    function _isString(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
    var p = _curry2(function nth(e, t) {
            var n = e < 0 ? t.length + e : e;
            return _isString(t) ? t.charAt(n) : t[n]
        }),
        h = _curry2(function paths(e, t) {
            return e.map(function(e) {
                for (var n, r = t, o = 0; o < e.length;) {
                    if (null == r) return;
                    n = e[o], r = d(n) ? p(n, r) : r[n], o += 1
                }
                return r
            })
        }),
        m = _curry2(function path(e, t) {
            return h([e], t)[0]
        }),
        g = _curry3(function pathOr(e, t, n) {
            return l(e, m(t, n))
        }),
        w = _curry1(function isNil(e) {
            return null == e
        });

    function _has(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    var v = Object.prototype.toString,
        y = function() {
            return "[object Arguments]" === v.call(arguments) ? function _isArguments(e) {
                return "[object Arguments]" === v.call(e)
            } : function _isArguments(e) {
                return _has("callee", e)
            }
        }(),
        _ = Array.isArray || function _isArray(e) {
            return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e)
        };

    function _isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var b = _curry1(function empty(e) {
        return null != e && "function" === typeof e["fantasy-land/empty"] ? e["fantasy-land/empty"]() : null != e && null != e.constructor && "function" === typeof e.constructor["fantasy-land/empty"] ? e.constructor["fantasy-land/empty"]() : null != e && "function" === typeof e.empty ? e.empty() : null != e && null != e.constructor && "function" === typeof e.constructor.empty ? e.constructor.empty() : _(e) ? [] : _isString(e) ? "" : _isObject(e) ? {} : y(e) ? function() {
            return arguments
        }() : void 0
    });

    function _arrayFromIterator(e) {
        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
        return n
    }

    function _includesWith(e, t, n) {
        for (var r = 0, o = n.length; r < o;) {
            if (e(t, n[r])) return !0;
            r += 1
        }
        return !1
    }
    var E = "function" === typeof Object.is ? Object.is : function _objectIs(e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
        },
        x = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        A = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        S = function() {
            return arguments.propertyIsEnumerable("length")
        }(),
        O = function contains(e, t) {
            for (var n = 0; n < e.length;) {
                if (e[n] === t) return !0;
                n += 1
            }
            return !1
        },
        k = "function" !== typeof Object.keys || S ? _curry1(function keys(e) {
            if (Object(e) !== e) return [];
            var t, n, r = [],
                o = S && y(e);
            for (t in e) !_has(t, e) || o && "length" === t || (r[r.length] = t);
            if (x)
                for (n = A.length - 1; n >= 0;) _has(t = A[n], e) && !O(r, t) && (r[r.length] = t), n -= 1;
            return r
        }) : _curry1(function keys(e) {
            return Object(e) !== e ? [] : Object.keys(e)
        }),
        I = _curry1(function type(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
        });

    function _uniqContentEquals(e, t, n, r) {
        var o = _arrayFromIterator(e);

        function eq(e, t) {
            return _equals(e, t, n.slice(), r.slice())
        }
        return !_includesWith(function(e, t) {
            return !_includesWith(eq, t, e)
        }, _arrayFromIterator(t), o)
    }

    function _equals(e, t, n, r) {
        if (E(e, t)) return !0;
        var o = I(e);
        if (o !== I(t)) return !1;
        if (null == e || null == t) return !1;
        if ("function" === typeof e["fantasy-land/equals"] || "function" === typeof t["fantasy-land/equals"]) return "function" === typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" === typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);
        if ("function" === typeof e.equals || "function" === typeof t.equals) return "function" === typeof e.equals && e.equals(t) && "function" === typeof t.equals && t.equals(e);
        switch (o) {
            case "Arguments":
            case "Array":
            case "Object":
                if ("function" === typeof e.constructor && "Promise" === function _functionName(e) {
                        var t = String(e).match(/^function (\w*)/);
                        return null == t ? "" : t[1]
                    }(e.constructor)) return e === t;
                break;
            case "Boolean":
            case "Number":
            case "String":
                if (typeof e !== typeof t || !E(e.valueOf(), t.valueOf())) return !1;
                break;
            case "Date":
                if (!E(e.valueOf(), t.valueOf())) return !1;
                break;
            case "Error":
                return e.name === t.name && e.message === t.message;
            case "RegExp":
                if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode) return !1
        }
        for (var i = n.length - 1; i >= 0;) {
            if (n[i] === e) return r[i] === t;
            i -= 1
        }
        switch (o) {
            case "Map":
                return e.size === t.size && _uniqContentEquals(e.entries(), t.entries(), n.concat([e]), r.concat([t]));
            case "Set":
                return e.size === t.size && _uniqContentEquals(e.values(), t.values(), n.concat([e]), r.concat([t]));
            case "Arguments":
            case "Array":
            case "Object":
            case "Boolean":
            case "Number":
            case "String":
            case "Date":
            case "Error":
            case "RegExp":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "ArrayBuffer":
                break;
            default:
                return !1
        }
        var a = k(e);
        if (a.length !== k(t).length) return !1;
        var s = n.concat([e]),
            c = r.concat([t]);
        for (i = a.length - 1; i >= 0;) {
            var u = a[i];
            if (!_has(u, t) || !_equals(t[u], e[u], s, c)) return !1;
            i -= 1
        }
        return !0
    }
    var T = _curry2(function equals(e, t) {
            return _equals(e, t, [], [])
        }),
        C = _curry1(function isEmpty(e) {
            return null != e && T(e, b(e))
        });

    function _dispatchable(e, t, n) {
        return function() {
            if (0 === arguments.length) return n();
            var r = Array.prototype.slice.call(arguments, 0),
                o = r.pop();
            if (!_(o)) {
                for (var i = 0; i < e.length;) {
                    if ("function" === typeof o[e[i]]) return o[e[i]].apply(o, r);
                    i += 1
                }
                if (function _isTransformer(e) {
                        return null != e && "function" === typeof e["@@transducer/step"]
                    }(o)) return t.apply(null, r)(o)
            }
            return n.apply(this, arguments)
        }
    }
    var P = function init() {
            return this.xf["@@transducer/init"]()
        },
        R = function result(e) {
            return this.xf["@@transducer/result"](e)
        },
        D = function() {
            function XDrop(e, t) {
                this.xf = t, this.n = e
            }
            return XDrop.prototype["@@transducer/init"] = P, XDrop.prototype["@@transducer/result"] = R, XDrop.prototype["@@transducer/step"] = function(e, t) {
                return this.n > 0 ? (this.n -= 1, e) : this.xf["@@transducer/step"](e, t)
            }, XDrop
        }(),
        L = _curry2(function _xdrop(e, t) {
            return new D(e, t)
        });

    function _checkForMethod(e, t) {
        return function() {
            var n = arguments.length;
            if (0 === n) return t();
            var r = arguments[n - 1];
            return _(r) || "function" !== typeof r[e] ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1))
        }
    }
    var F = _curry3(_checkForMethod("slice", function slice(e, t, n) {
            return Array.prototype.slice.call(n, e, t)
        })),
        B = _curry2(_dispatchable(["drop"], L, function drop(e, t) {
            return F(Math.max(0, e), 1 / 0, t)
        })),
        W = _curry2(function takeLast(e, t) {
            return B(e >= 0 ? t.length - e : 0, t)
        }),
        M = _curry2(function(e, t) {
            return T(W(e.length, t), e)
        });
    const N = {
            EMAIL_CAPTURE: "emailCapture",
            SLIDER: "slider",
            TAKEOVER: "takeover",
            CONTROLLER: "controller",
            CHAT: "chat",
            LANDING_PAGE: "landingPage"
        },
        j = {
            "drift-frame-emailCapture": N.EMAIL_CAPTURE,
            "drift-frame-chat": N.CHAT,
            "drift-frame-controller": N.CONTROLLER,
            "drift-frame-slider": N.SLIDER,
            "drift-frame-takeover": N.TAKEOVER
        },
        U = "right",
        z = "left",
        G = "US",
        q = "EU",
        H = {
            emailCapture: "Drift Widget Chat Email Capture",
            slider: "Drift Widget Message Preview",
            takeover: "Drift Takeover Modal",
            controller: "Drift Widget Chat Controller",
            chat: "Drift Widget Chat Window",
            landingPage: "Drift Landing Page"
        },
        $ = "u";
    var Y = function getOrCreateFramesMap() {
            var e = {};
            return window._driftFrames ? window._driftFrames : (window._driftFrames = e, e)
        }(),
        V = n(5);

    function _reduced(e) {
        return e && e["@@transducer/reduced"] ? e : {
            "@@transducer/value": e,
            "@@transducer/reduced": !0
        }
    }
    var X = function() {
            function XAny(e, t) {
                this.xf = t, this.f = e, this.any = !1
            }
            return XAny.prototype["@@transducer/init"] = P, XAny.prototype["@@transducer/result"] = function(e) {
                return this.any || (e = this.xf["@@transducer/step"](e, !1)), this.xf["@@transducer/result"](e)
            }, XAny.prototype["@@transducer/step"] = function(e, t) {
                return this.f(t) && (this.any = !0, e = _reduced(this.xf["@@transducer/step"](e, !0))), e
            }, XAny
        }(),
        Z = _curry2(_dispatchable(["any"], _curry2(function _xany(e, t) {
            return new X(e, t)
        }), function any(e, t) {
            for (var n = 0; n < t.length;) {
                if (e(t[n])) return !0;
                n += 1
            }
            return !1
        })),
        J = !!(g("", ["location", "search"], window).indexOf("driftDebugFrame") > -1),
        K = [],
        Q = function listen(e) {
            var t = e.topic,
                n = e.handler;
            try {
                var r = he(),
                    o = Object(V.on)(t, {
                        domain: r
                    }, function handlerFunctionWrapper(e, t) {
                        return function handlerWrapper(n) {
                            var r = Z(function(e) {
                                var t;
                                return (null === e || void 0 === e ? void 0 : null === (t = e.$frame) || void 0 === t ? void 0 : t.contentWindow) === n.source
                            }, Object.values(Y));
                            if (n.source === window || r) return J && console.debug("".concat(f.PROJECT_NAMESPACE, ":LISTEN: ").concat(e, "::"), n), t.apply(this, arguments);
                            ae({
                                data: ["message from untrusted frame", n]
                            })
                        }
                    }(t, n));
                K.push(o)
            } catch (i) {
                "PRODUCTION" !== f.ENV && console.warn(i)
            }
        },
        ee = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e) {
                var t, n, r, o, a, s, c, u;
                return i.a.wrap(function _callee$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (t = e.name, n = e.message, r = e.topic, o = e.waitForResponse, a = void 0 === o || o, Y[t]) {
                                i.next = 4;
                                break
                            }
                            return ce(new Error("Failed to find frame ".concat(t, " to broadcast message to topic ").concat(r))), i.abrupt("return");
                        case 4:
                            if (s = Y[t].$frame) {
                                i.next = 8;
                                break
                            }
                            return ce(new Error("Failed to grab frame element for frame ".concat(t, " to broadcast message to topic ").concat(r))), i.abrupt("return");
                        case 8:
                            return c = _objectSpread2({
                                _meta: {
                                    id: ie(),
                                    source: "drift_widget"
                                }
                            }, n), i.prev = 9, ae({
                                data: ["SEND: ".concat(t, " | ").concat(c._meta.id), c]
                            }), i.next = 13, Object(V.send)(s.contentWindow, r, c, {
                                timeout: 2e4,
                                window: s.contentWindow,
                                domain: he(),
                                fireAndForget: !a
                            });
                        case 13:
                            return u = i.sent, ae({
                                data: ["RESPONSE: ".concat(t, " | ").concat(c._meta.id), u]
                            }), i.abrupt("return", u);
                        case 18:
                            i.prev = 18, i.t0 = i.catch(9), ae({
                                type: "warn",
                                data: ["Error sending message", i.t0]
                            }), ae({
                                type: "warn",
                                data: ["Original message", n]
                            });
                        case 22:
                        case "end":
                            return i.stop()
                    }
                }, _callee, null, [
                    [9, 18]
                ])
            }));
            return function broadcast(t) {
                return e.apply(this, arguments)
            }
        }(),
        te = !!(g("", ["location", "search"], window).indexOf("driftEnableLog") > -1),
        ne = "PRODUCTION" !== f.ENV || te,
        re = "PRODUCTION" !== f.ENV || te,
        oe = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e) {
                return i.a.wrap(function _callee$(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new Promise(function(t, n) {
                                try {
                                    setTimeout(function() {
                                        t("")
                                    }, e)
                                } catch (r) {
                                    n(new Error("Pause timeout failed"))
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, _callee)
            }));
            return function pause(t) {
                return e.apply(this, arguments)
            }
        }(),
        ie = function uuid() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        },
        ae = function log(e) {
            var t, n = e.type,
                r = void 0 === n ? "log" : n,
                o = e.data;
            o = Array.isArray(o) ? o : [o], ne && (t = console)[r].apply(t, ["".concat(f.PROJECT_NAMESPACE, "::")].concat(_toConsumableArray(o)))
        },
        se = function warn(e) {
            ae({
                type: "warn",
                data: e
            })
        },
        ce = function error(e, t) {
            var error = e instanceof Error ? e : new Error(e);
            ! function errorHandler(e) {
                if (re) throw e;
                ae({
                        type: "warn",
                        data: [e.message]
                    }),
                    function sendErrorToController(e) {
                        Y[N.CONTROLLER] && window.drift.controllerReady && ee({
                            name: "controller",
                            topic: "log-conductor-error",
                            message: {
                                message: e.message
                            }
                        })
                    }(error)
            }(error)
        },
        ue = function apiWarning() {
            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (e = console).warn.apply(e, ["Drift API -"].concat(n))
        },
        fe = function apiError() {
            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (e = console).error.apply(e, ["Drift API -"].concat(n))
        },
        le = function debounce(e, t, n) {
            var r = null;
            return function() {
                for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                var s = n && !r,
                    c = function later() {
                        r = null, n || e.apply(this, i)
                    };
                r ? (clearTimeout(r), r = window.setTimeout(c, t)) : r = window.setTimeout(c, 10), s && e.apply(void 0, i)
            }
        },
        de = function isNilOrEmpty(e) {
            return w(e) || C(e)
        },
        pe = function checkEnv(e) {
            return window.__DRIFT_ENV__ === e || "PRODUCTION" === e
        },
        he = function getWidgetDomain() {
            if (pe("PRODUCTION") && function isDevEmbed() {
                    return M("-dev", g("", ["drift", "embedId"], window))
                }()) return "https://".concat(f.WIDGET_ROOT_QA);
            if (!pe("PRODUCTION") && !pe("MASTER")) return "http://".concat(f.WIDGET_ROOT);
            var e = window.__DRIFT_BRANCH__,
                t = e && "master" !== e ? "".concat(window.__DRIFT_BRANCH__, ".") : "";
            return "https://".concat(t).concat(f.WIDGET_ROOT)
        },
        me = function isFunction(e) {
            return "[object Function]" == Object.prototype.toString.call(e)
        },
        ge = pe("PRODUCTION") ? "js.driftt.com" : "js.driftqa.com";
    n.p = "https://" + ge + "/conductor/";
    var we = n(1),
        ve = n.n(we);

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var ye = 76,
        _e = 400,
        be = {
            EMAILCAPTURE: "400px",
            SLIDER: "450px"
        },
        Ee = "100%",
        xe = "0px",
        Ae = Ee,
        Se = Ee,
        Oe = "auto",
        ke = function getWidgetAlignment(e) {
            return e.$div.classList.contains("".concat("drift-frame", "-").concat(e.name, "-align-right")) ? U : z
        },
        Ie = void 0,
        Te = function isMobileDevice() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return void 0 === Ie && (Ie = Ce(e) || Re(e)), Ie
        },
        Ce = function isAndroid() {
            var e, t, n, r, o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return /Android/i.test(null === (e = navigator) || void 0 === e ? void 0 : e.userAgent) && (o || (null === (t = navigator) || void 0 === t ? void 0 : null === (n = t.userAgent) || void 0 === n ? void 0 : null === (r = n.toLowerCase()) || void 0 === r ? void 0 : r.indexOf("mobile")) >= 0)
        },
        Pe = function isIPad() {
            var e, t;
            return /iPad/i.test(null === (e = navigator) || void 0 === e ? void 0 : e.userAgent) || !/iPhone|iphone/i.test(null === (t = navigator) || void 0 === t ? void 0 : t.userAgent) && navigator.maxTouchPoints > 1
        },
        Re = function isIOS() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return /iPhone|iPod/i.test(null === (e = navigator) || void 0 === e ? void 0 : e.userAgent) || t && Pe()
        },
        De = function isInternetExplorerBrowser() {
            return /(MSIE (9|10))|(rv:11.0)/i.test(navigator.userAgent)
        },
        Le = null,
        Fe = null,
        Be = 560,
        We = 512,
        Me = 640,
        Ne = function getTargetedBreakpointByBrowser() {
            return Fe || (Fe = function isFirefox() {
                return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
            }() ? We : function isSafari() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }() ? Me : Be), Fe
        },
        je = function isXSScreenSize() {
            var e = Ne();
            return function getCurrentWidth() {
                var e, t, n;
                return window.drift_iframe_mode ? null === (t = window.drift_iframe_window_context) || void 0 === t ? void 0 : null === (n = t.window) || void 0 === n ? void 0 : n.innerWidth : window.innerWidth > 0 ? window.innerWidth : null === (e = window.screen) || void 0 === e ? void 0 : e.width
            }() <= e
        },
        Ue = function isNewBreakPoint() {
            var e = !1,
                t = je();
            return t !== Le && (e = !0), Le = t, e
        },
        ze = function getFrameStyles(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : U,
                i = Te(),
                a = {
                    width: t,
                    "max-width": "none",
                    position: "fixed",
                    zIndex: "2147483647"
                };
            if (r ? a["max-height"] = n : a.height = n, "controller" === e && (a.bottom = i ? xe : "24px"), "slider" === e) {
                var s = je() ? "-20" : "20";
                a.bottom = i ? "0" : "18px", a.height = "calc(100% + ".concat(s, "px)"), i && (a.maxWidth = "335px")
            }
            return "emailCapture" === e && (a.bottom = xe, a.height = "calc(100% + 30px)"), "takeover" !== e && "chat__takeover" !== e || (a.left = xe, a.top = xe, a.bottom = Oe, a.right = Oe, a.width = Ee, a.height = Ee, a["max-height"] = Ee), "chat" === e && (a.bottom = "88px", a.opacity = xe, a.visibility = "hidden", a["min-width"] = "320px", a.height = Ee, a.width = Ee, o === U ? a.right = "12px" : o === z && (a.left = "12px")), a
        },
        Ge = function setDivStyle(e, t, n, r, o, i) {
            ! function applyStylesToDiv(e, t) {
                Object.keys(t).forEach(function(n) {
                    "height" !== n && "width" !== n || De() ? e.style[n] = t[n] : e.style.setProperty(n, t[n], "important")
                })
            }(e, ze(o, t, n, r, i))
        },
        qe = function setDivAlignment(e, t, n) {
            var r = Te(),
                o = r ? "0" : "24px",
                i = r ? "0" : "24px";
            "slider" === t && (o = r ? "68px" : "92px", i = r ? "68px" : "92px"), "emailCapture" === t && (o = "0", i = "0"), "left" === n ? e.style.left = o : "right" === n && (e.style.right = i)
        };
    const He = {... {
                API_READY: "drift::apiReady",
                READY: "drift::ready"
            }, ... {
                EMAIL_CAPTURED: "drift::emailCapture",
                PHONE_NUMBER_CAPTURED: "drift::phoneCapture"
            }, ... {
                CONVERSATION_STARTED: "drift::startConversation",
                CONVERSATION_SELECTED: "drift::conversation:selected",
                CONVERSATION_BUTTON_CLICKED: "drift::conversation:buttonClicked",
                CONVERSATION_INTERACTED: "drift::conversation:firstInteraction",
                CONVERSATION_PLAYBOOK_CLICKED: "drift::conversation:playbookClicked",
                CONVERSATION_PLAYBOOK_FIRED: "drift::conversation:playbookFired",
                CONVERSATION_PLAYBOOK_DISMISSED: "drift::conversation:playbookDismissed"
            }, ... {
                MEETING_REQUESTED: "drift::scheduling:requestMeeting",
                MEETING_BOOKED: "drift::scheduling:meetingBooked"
            }, ... {
                WELCOME_MESSAGE_OPENED: "drift::welcomeMessage:open",
                WELCOME_MESSAGE_CLOSED: "drift::welcomeMessage:close",
                AWAY_MESSAGE_OPENED: "drift::awayMessage:open",
                AWAY_MESSAGE_CLOSED: "drift::awayMessage:close"
            }, ... {
                MESSAGE_RECEIVED: "drift::message",
                MESSAGE_SENT: "drift::message:sent"
            }, ... {
                CAMPAIGN_CLICKED: "drift::campaign:click",
                CAMPAIGN_SUBMITTED: "drift::campaign:submit",
                CAMPAIGN_OPENED: "drift::campaign:open",
                CAMPAIGN_DISMISSED: "drift::campaign:dismiss"
            }, ... {
                SLIDER_CLOSED: "drift::sliderMessage:close"
            }, ... {
                CHAT_OPENED: "drift::chatOpen",
                CHAT_CLOSED: "drift::chatClose"
            }, ... {
                SIDEBAR_OPENED: "drift::sidebarOpen",
                SIDEBAR_CLOSED: "drift::sidebarClose"
            }, ... {
                USER_ATTRIBUTES_UPDATED: "drift::user:attributesUpdated"
            }, ... {
                IFRAME_RESIZED: "drift::iframeResize"
            }, ... {
                GDPR_CLICKED: "drift::gdprClicked",
                GDPR_REQUESTED: "drift::gdprRequested"
            }, ... {
                BOOTSTRAP_FAILED: "drift::bootstrapFailed"
            }
        },
        $e = ["app", "collectFormData", "commitFormData", "connectForm", "goToConversation", "goToNewConversation", "goToConversationList", "hideAwayMessage", "hideChat", "hidePreview", "hideWelcomeMessage", "off", "on", "openChat", "toggleChat", "scheduleMeeting", "setUserAttributes", "showAwayMessage", "showWelcomeMessage", "showWelcomeOrAwayMessage", "stageFormData", "startInteraction", "startVideoGreeting", "toggleChat", "toggleChatTakeoverModal", "exitCohabitation"],
        Ye = ["hide", "show"],
        Ve = ["toggleChatTakeoverModal"],
        Xe = ["init", "load", "reset", "debug", "on", "off", "unload", "identify", "show", "hide", "config", "setContext"],
        Ze = ["init", "load", "track", "reset", "debug", "ping", "page", "on", "off", "show", "hide", "identify", "config", "unload", "setContext", "evaluateCampaignTargeting", "toggleHoursAndTargeting", "unfollow", "waitForUserJwt", "setUserJwt"].concat($e),
        Je = {
            ALL_FRAMES_READY: "drift::allFramesReady",
            CLEAR_EVENT_Q: "drift::_clearEventQ",
            CHAT_READY: "drift::chatReady",
            CONTROLLER_READY: "drift::controllerReady",
            LANDINGPAGE_READY: "drift::landingPageReady",
            DEBUG_INIT: "drift::debug:init"
        },
        Ke = [He.READY, He.API_READY, Je.CONTROLLER_READY, Je.LANDINGPAGE_READY, Je.CHAT_READY, Je.CLEAR_EVENT_Q, Je.ALL_FRAMES_READY];

    function _indexOf(e, t, n) {
        var r, o;
        if ("function" === typeof e.indexOf) switch (typeof t) {
            case "number":
                if (0 === t) {
                    for (r = 1 / t; n < e.length;) {
                        if (0 === (o = e[n]) && 1 / o === r) return n;
                        n += 1
                    }
                    return -1
                }
                if (t !== t) {
                    for (; n < e.length;) {
                        if ("number" === typeof(o = e[n]) && o !== o) return n;
                        n += 1
                    }
                    return -1
                }
                return e.indexOf(t, n);
            case "string":
            case "boolean":
            case "function":
            case "undefined":
                return e.indexOf(t, n);
            case "object":
                if (null === t) return e.indexOf(t, n)
        }
        for (; n < e.length;) {
            if (T(e[n], t)) return n;
            n += 1
        }
        return -1
    }

    function _includes(e, t) {
        return _indexOf(t, e, 0) >= 0
    }
    var Qe = _curry2(_includes);
    ! function() {
        if ("function" === typeof window.CustomEvent) return !1;
        var e = {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };

        function CustomEvent(t, n) {
            n = n ? _objectSpread2(_objectSpread2({}, e), n) : e;
            var r = document.createEvent("CustomEvent");
            return r.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), r
        }
        CustomEvent.prototype = window.Event.prototype, window.CustomEvent = CustomEvent
    }();
    var et, tt = function createEvent(e, t) {
            if (!window.drift.ready && !Qe(e, Ke) && e !== He.BOOTSTRAP_FAILED) window.drift.iq.push({
                name: e,
                payload: t
            });
            else {
                var n = new CustomEvent(e, {
                    detail: t || {}
                });
                document.dispatchEvent(n)
            }
        },
        nt = function isInIframeMode() {
            return !!window.drift_iframe_mode
        },
        rt = function getIframeWindowContext() {
            return de(window.drift_iframe_window_context) ? window : window.drift_iframe_window_context
        },
        ot = new function IframeModeResizeManager() {
            var e = this;
            _classCallCheck(this, IframeModeResizeManager), this._lastOffsetApplied = void 0, this._sendResizeEventForTakeover = function(t) {
                var n = Y[N.TAKEOVER],
                    r = Y[N.CONTROLLER];
                qe(r.$div, N.CONTROLLER, t), r.$div.style.bottom = e._lastOffsetApplied.vertical ? e._lastOffsetApplied.vertical : "12px", r.$div.style[t] = e._lastOffsetApplied.horizontal ? e._lastOffsetApplied.horizontal : "12px";
                var o = e._getIframeWrappedStyles(n, t);
                tt(He.IFRAME_RESIZED, {
                    styles: o
                })
            }, this.checkAndApplyOffsets = function(t, n) {
                var r, o, i;
                if (nt() && je() && (null === Y || void 0 === Y ? void 0 : null === (r = Y.chat) || void 0 === r ? void 0 : null === (o = r.$div) || void 0 === o ? void 0 : null === (i = o.classList) || void 0 === i ? void 0 : i.contains("drift-chat-open"))) return t.bottom = 0, void(t[n] = 0);
                e._lastOffsetApplied.vertical && (t.bottom = e._lastOffsetApplied.vertical), e._lastOffsetApplied.horizontal && (t[n] = e._lastOffsetApplied.horizontal)
            }, this._sendResizeEventForEmailCapture = function(t) {
                var n = Y[N.EMAIL_CAPTURE],
                    r = e._getIframeWrappedStyles(n, t);
                e.checkAndApplyOffsets(r, t), tt(He.IFRAME_RESIZED, {
                    styles: r
                })
            }, this._sendResizeEventForSlider = function(t) {
                var n = Y[N.CONTROLLER],
                    r = Y[N.SLIDER],
                    o = e._getIframeWrappedStyles(r, t);
                r.$div.style.bottom = xe, n.$div.style.bottom = xe, e.checkAndApplyOffsets(o, t), tt(He.IFRAME_RESIZED, {
                    styles: o
                })
            }, this._sendResizeEventForChat = function(t) {
                var n = Y[N.CHAT],
                    r = Y[N.CONTROLLER];
                if (n && r) {
                    var o = e._getIframeWrappedChatStyles(n.$div, r.$div, t);
                    e.checkAndApplyOffsets(o, t), tt(He.IFRAME_RESIZED, {
                        styles: o
                    })
                }
            }, this._getIframeWrappedChatStyles = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U,
                    r = Te(),
                    o = {
                        width: function getWidthStyle() {
                            var n = parseFloat(e.style.width),
                                o = parseFloat(e.style.maxHeight),
                                i = parseFloat(t.style.width);
                            return 0 === i ? "0px" : 0 === o ? "".concat(i, "px") : r ? "100%" : "".concat(Math.max(n, i), "px")
                        }(),
                        height: "98%",
                        bottom: "24px",
                        left: n === U ? Oe : "24px",
                        right: n === U ? "24px" : Oe,
                        top: Oe,
                        position: "fixed",
                        border: "none",
                        "z-index": "2147483647",
                        "max-height": function getHeightStyle() {
                            var n = parseFloat(e.style.maxHeight),
                                o = parseFloat(e.style.maxHeight),
                                i = parseFloat(t.style.height);
                            return 0 === i ? "0px" : 0 === o ? "".concat(i, "px") : r ? Ee : "".concat(n + i, "px")
                        }()
                    };
                return r && (o.left = n === U ? Oe : xe, o.right = n === U ? xe : Oe, o.bottom = xe), e.style.bottom = "64px", n === U ? (e.style.right = "-12px", t.style.right = xe) : (e.style.left = "-12px", t.style.left = xe), t.style.bottom = xe, o
            }, this._getIframeWrappedStyles = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
                if (e.name === N.TAKEOVER) return _objectSpread2(_objectSpread2({}, ze(N.TAKEOVER)), {}, {
                    border: "none"
                });
                if (e.name === N.EMAIL_CAPTURE) {
                    var n = _objectSpread2(_objectSpread2({}, ze(N.EMAIL_CAPTURE)), {}, {
                        bottom: e.$div.style.bottom,
                        width: e.$div.style.width,
                        height: e.$div.style.height,
                        border: "none",
                        "max-height": e.$div.style.maxHeight
                    });
                    return t === U ? n.right = "0" : n.left = "0", n
                }
                if (e.name === N.SLIDER) {
                    var r = parseFloat(e.$div.style.width) + 76,
                        o = parseFloat(e.$div.style.maxHeight) + 24;
                    return _objectSpread2(_objectSpread2({}, ze(N.SLIDER)), {}, {
                        width: "".concat(r, "px"),
                        top: Oe,
                        bottom: "24px",
                        left: t === U ? Oe : "24px",
                        right: t === U ? "24px" : Oe,
                        "max-height": "".concat(o, "px"),
                        "z-index": "2147483647",
                        border: "none"
                    })
                }
            }, this.applyOffset = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
                    r = arguments.length > 2 ? arguments[2] : void 0;
                if (nt()) {
                    var o = rt(),
                        i = "vertical" === n ? {
                            window: o.window.innerHeight,
                            chat: o.window.innerHeight - 374
                        } : {
                            window: o.window.innerWidth,
                            chat: o.window.innerWidth - _e
                        },
                        a = i.window - i.chat,
                        s = "".concat(t > a ? a : t, "px");
                    tt(He.IFRAME_RESIZED, {
                        styles: _defineProperty({}, r, s)
                    }), e._lastOffsetApplied[n] = s
                }
            }, this.handleFrameResize = function() {
                if (nt()) {
                    var t = Y[N.CONTROLLER],
                        n = ke(t);
                    return Y[N.TAKEOVER] ? e._sendResizeEventForTakeover(n) : Y[N.EMAIL_CAPTURE] ? e._sendResizeEventForEmailCapture(n) : Y[N.SLIDER] ? e._sendResizeEventForSlider(n) : e._sendResizeEventForChat(n)
                }
            }, this._lastOffsetApplied = {
                horizontal: null,
                vertical: null
            }
        },
        it = _curry1(function values(e) {
            for (var t = k(e), n = t.length, r = [], o = 0; o < n;) r[o] = e[t[o]], o += 1;
            return r
        }),
        at = function() {
            function XFind(e, t) {
                this.xf = t, this.f = e, this.found = !1
            }
            return XFind.prototype["@@transducer/init"] = P, XFind.prototype["@@transducer/result"] = function(e) {
                return this.found || (e = this.xf["@@transducer/step"](e, void 0)), this.xf["@@transducer/result"](e)
            }, XFind.prototype["@@transducer/step"] = function(e, t) {
                return this.f(t) && (this.found = !0, e = _reduced(this.xf["@@transducer/step"](e, t))), e
            }, XFind
        }(),
        st = _curry2(_dispatchable(["find"], _curry2(function _xfind(e, t) {
            return new at(e, t)
        }), function find(e, t) {
            for (var n = 0, r = t.length; n < r;) {
                if (e(t[n])) return t[n];
                n += 1
            }
        })),
        ct = n(3),
        ut = function getNonMobileResponsiveChatHeight(e, t) {
            var n, r;
            if (e.$div.classList.contains("drift-has-chat")) {
                var o, i = function getDomSizingData(e) {
                        var t, n, r = rt(),
                            o = {
                                innerHeight: null === r || void 0 === r ? void 0 : null === (t = r.window) || void 0 === t ? void 0 : t.innerHeight,
                                innerWidth: null === r || void 0 === r ? void 0 : null === (n = r.window) || void 0 === n ? void 0 : n.innerWidth,
                                bounds: null === r || void 0 === r ? void 0 : r.frameSize
                            },
                            i = {
                                innerHeight: window.innerHeight,
                                innerWidth: window.innerWidth,
                                bounds: e.$div.getBoundingClientRect()
                            };
                        return nt() ? o : i
                    }(e),
                    a = i.innerHeight,
                    s = i.innerWidth,
                    c = null !== (n = window.drift.offset) && void 0 !== n ? n : "24",
                    u = (null === (r = i.bounds) || void 0 === r ? void 0 : r.top) < 0,
                    f = Math.min(t, a - ye),
                    l = s <= 380 || a <= t + ye,
                    d = ye + c + t > a,
                    p = a - ye - 12;
                if (je()) o = a;
                else if (d) o = Math.min(p, t);
                else if (!u && l || d) {
                    o = a - (s <= 380 ? 0 : 90)
                } else o = f;
                return o
            }
        };
    ! function(e) {
        e.SHOW = "show", e.HIDE = "hide", e.NONE = "none"
    }(et || (et = {}));
    var ft = [N.EMAIL_CAPTURE, N.SLIDER, N.TAKEOVER],
        lt = function onFrameDimensionsChanged() {
            ot.handleFrameResize()
        },
        dt = function killFrame(e) {
            var t = e.name;
            Y[t] || ae({
                type: "log",
                data: ["No Frame with this name exists ".concat(t)]
            });
            var n = document.querySelector(".drift-frame-".concat(t));
            n && n.parentNode && n.parentNode.removeChild(n), delete Y[t], lt()
        },
        pt = function killAnnouncementFrames() {
            ft.forEach(function(e) {
                return dt({
                    name: e
                })
            })
        },
        ht = function killAllFrames() {
            Object.keys(Y).forEach(function(e) {
                    dt({
                        name: e
                    })
                }),
                function clearListeners() {
                    K.map(function(e) {
                        return e.cancel()
                    })
                }()
        },
        mt = function hideFrameFromScreenReaders(e) {
            var t = e.name,
                n = Y[t];
            if (n) {
                var r = n.$div,
                    o = n.$frame;
                r.setAttribute("aria-hidden", "true"), r.setAttribute("tabindex", "-1"), o.setAttribute("aria-hidden", "true"), o.setAttribute("tabindex", "-1")
            }
        },
        gt = function showFrameToScreenReaders(e) {
            var t = e.name,
                n = Y[t];
            if (n) {
                var r = n.$div,
                    o = n.$frame;
                r.removeAttribute("aria-hidden"), r.removeAttribute("tabindex"), o.removeAttribute("aria-hidden"), o.removeAttribute("tabindex")
            }
        },
        wt = function generateFrame(e) {
            var t = e.name,
                n = e.height,
                r = void 0 === n ? "none" : n,
                o = e.width,
                i = void 0 === o ? "" : o,
                a = e.path,
                s = void 0 === a ? "" : a,
                c = e.max,
                u = void 0 === c || c,
                f = e.alignment,
                l = void 0 === f ? U : f,
                d = e.insertBefore,
                p = void 0 === d ? "" : d,
                h = e.insertInside,
                m = void 0 === h ? "" : h,
                g = e.verticalOffset,
                w = e.horizontalOffset;
            if (!Y[t]) {
                var v = document.createElement("iframe");
                if (!v) return ce(new Error("Unable to create new iframe element on the DOM")), null;
                v.setAttribute("class", "".concat("drift-frame", "-").concat(t)), v.setAttribute("scrolling", "no"), v.setAttribute("title", H[t]), v.setAttribute("allow", "autoplay; encrypted-media; fullscreen;"), v.setAttribute("frameborder", "0"),
                    function setFrameStyle(e) {
                        var t = Te();
                        e.style.background = "transparent", e.style.width = t ? "1px" : Ee, e.style.maxWidth = Ee, e.style.height = t ? "1px" : Ee, e.style.border = "none", t && (e.style.minWidth = Ee, e.style.minHeight = Ee)
                    }(v);
                var y = he(),
                    _ = "";
                t !== N.EMAIL_CAPTURE && t !== N.SLIDER && t !== N.TAKEOVER || (_ = "?isXSScreenSize=" + je()), v.src = "".concat(y, "/").concat(s).concat(_);
                var b = $t({
                    name: t,
                    frame: v,
                    height: r,
                    width: i,
                    insertInside: m,
                    insertBefore: p,
                    alignment: l,
                    max: u
                });
                return Y[t] = {
                    $frame: v,
                    $div: b,
                    name: t
                }, g && _t({
                    offset: g
                }), w && yt({
                    offset: w
                }), lt(), b
            }
            se(["A frame with this name has already been generated."])
        },
        vt = function setOffsetForFrames(e) {
            var t = e.offset,
                n = e.type,
                r = e.affectedStyle,
                o = e.maxOffset,
                i = e.maxPreviewSizeDefault,
                a = e.nonMobileResponsiveSize,
                s = e.windowSize,
                c = e.customOffset,
                u = void 0 === c ? {} : c,
                f = Te(),
                l = f ? ["controller", "slider", "emailCapture"] : ["controller", "slider", "chat", "emailCapture"];
            "string" === typeof t && (t = t.replace("px", ""), t = parseFloat(t), isNaN(t)) ? se(["Unable to apply ".concat(n, " offset - invalid input ").concat(t)]) : nt() ? ot.applyOffset(t, n, r) : it(Y).forEach(function(e) {
                var c = e.$div,
                    d = e.name,
                    p = t,
                    h = st(function(e) {
                        return e === d
                    }, l);
                if (h) {
                    var m = function calcBounds(e) {
                            var t = s - (f ? o - ye : a || e) - ye,
                                n = p > t;
                            return u && u[h] && (p += u[h], t += u[h]), {
                                isOffsetBeyondBounds: n,
                                maxAvailableOffset: t
                            }
                        }(i),
                        g = m.isOffsetBeyondBounds,
                        w = m.maxAvailableOffset,
                        v = function calcSize(e, t, n, r) {
                            return "".concat(e ? Math.max(t, n) : r, "px")
                        }(g, Number(c.style[r].replace("px", "")), w, p);
                    "vertical" === n && (window.drift.offset = Number(v.replace("px", ""))), c.style[r] = v
                }
            })
        },
        yt = function setHorizontalOffsetForFrames(e) {
            var t = e.offset,
                n = ke(Y.controller);
            vt({
                offset: t,
                type: "horizontal",
                maxOffset: 330,
                maxPreviewSizeDefault: _e,
                nonMobileResponsiveSize: ut(Y.chat, _e),
                windowSize: document.documentElement.clientWidth,
                affectedStyle: n,
                customOffset: {
                    chat: -12,
                    slider: ye
                }
            })
        },
        _t = function setVerticalOffsetForFrames(e) {
            var t = e.offset,
                n = !de(document.documentElement.clientHeight) && document.documentElement.clientHeight < 700 ? 374 : 602;
            vt({
                offset: t,
                type: "vertical",
                maxOffset: 260,
                maxPreviewSizeDefault: n,
                nonMobileResponsiveSize: ut(Y.chat, n),
                windowSize: document.documentElement.clientHeight,
                affectedStyle: "bottom",
                customOffset: {
                    chat: ye + -12
                }
            })
        },
        bt = function alignFrames(e) {
            var t = e.alignment,
                n = void 0 === t ? U : t,
                r = Te() ? ["controller", "slider"] : ["controller", "slider", "chat"];
            it(Y).forEach(function(e) {
                var t = e.$div,
                    o = e.name; - 1 !== r.indexOf(o) && (t.classList.remove("".concat("drift-frame", "-").concat(o, "-align-right")), t.classList.remove("".concat("drift-frame", "-").concat(o, "-align-left")), t.classList.add("".concat("drift-frame", "-").concat(o, "-align-").concat(n)))
            })
        },
        Et = function getFrameHeight(e) {
            var t = e.name;
            return Y[t] || ce(new Error("Attempting to get height on an unmounted frame: ".concat(t))), Y[t].$div.style.height
        },
        xt = le(function(e) {
            return function setFrameDimensions(e) {
                var t = e.height,
                    n = e.width,
                    r = e.name;
                Y[r] || ce(new Error("Attempting to set dimensions on an unmounted frame: ".concat(r)));
                var o = Y[r],
                    i = o.$div,
                    a = o.$frame,
                    s = i.style.height,
                    c = i.style.width;
                s === t && c === n || (i.style.height = t, a.style.height = t, i.style.width = n, a.style.width = n, lt())
            }({
                height: e.height,
                width: e.width,
                name: e.name
            })
        }, 100),
        At = function toggleClassByCondition(e, t, n) {
            t ? e.classList.add(n) : e.classList.contains(n) && e.classList.remove(n)
        },
        St = function setFrameHeight(e) {
            var t, n, r, o, i = e.height,
                a = e.name,
                s = e.transition,
                c = void 0 !== s && s,
                u = e.transitionHeight,
                f = void 0 === u || u,
                l = e.max,
                d = void 0 === l || l,
                p = e.intent,
                h = void 0 === p ? et.NONE : p;
            Y[a] || ce(new Error("Attempting to set height on an unmounted frame: ".concat(a)));
            var m = Y[a].$div,
                g = d ? m.style.maxHeight : m.style.height,
                w = h === et.SHOW && g !== xe;
            if (g !== i && !w) {
                var v = c && f && g !== xe && i !== xe;
                At(m, c, "with-transition"), At(m, v, "with-height-transition");
                var y = null === (t = Dt()) || void 0 === t ? void 0 : t.innerHeight,
                    _ = "".concat(null !== (n = null === (r = Dt()) || void 0 === r ? void 0 : null === (o = r.visualViewport) || void 0 === o ? void 0 : o.height) && void 0 !== n ? n : y, "px"),
                    b = i === _ || i === y || "100%" === i;
                a === N.CONTROLLER && (i = function getAndPersistHeight(e, t, n) {
                    return e.dataset.prevHeight && (t = e.dataset.prevHeight, delete e.dataset.prevHeight), t === xe && (e.dataset.prevHeight = n), t
                }(m, i, g)), d ? (a === N.CHAT && (It(Ot), m.style.setProperty("height", Te() || je() ? Re() ? Ae : _ : "calc(100% - 75px)", "important")), m.style.setProperty("max-height", i, "important"), b && Te(!1) && !Re() && kt(Ot)) : m.style.setProperty("height", i, "important"), lt()
            }
        },
        Ot = function mobileDetection() {
            var e, t, n, r, o = null === (e = Dt()) || void 0 === e ? void 0 : e.innerHeight,
                i = null !== (t = null === (n = Dt()) || void 0 === n ? void 0 : null === (r = n.visualViewport) || void 0 === r ? void 0 : r.height) && void 0 !== t ? t : o;
            o !== i && St({
                height: "".concat(i, "px"),
                name: N.CHAT,
                transition: !0
            }), o === i && St({
                height: o + "px",
                name: N.CHAT,
                transition: !0
            })
        },
        kt = function OskDetectionOn(e) {
            window.addEventListener("resize", e), window.addEventListener("orientationchange", e)
        },
        It = function OskDetectionOff(e) {
            window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
        },
        Tt = function setFrameWidth(e) {
            var t = e.width,
                n = e.name,
                r = e.transition,
                o = void 0 !== r && r;
            Y[n] || ce(new Error("Attempting to set width on an unmounted frame: ".concat(n)));
            var i = Y[n],
                a = i.$div,
                s = i.$frame;
            if (a.style.width !== t) return At(a, o, "with-transition"), a.style.setProperty("width", t, "important"), s.style.setProperty("width", t, "important"), a.style.width
        },
        Ct = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e) {
                var t, n, r, o, a, s, c, u, f, l, d;
                return i.a.wrap(function _callee$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = e.className, n = void 0 === t ? "" : t, r = e.height, o = e.max, a = e.name, s = e.transition, c = void 0 !== s && s, u = e.width, Y[a] || ce(new Error("Attempting to set width and height on an unmounted frame: ".concat(a))), f = Y[a], l = f.$div, d = f.$frame, n && l.classList.add(n), At(l, c, "with-transition"), r && (o ? l.style.maxHeight = r : l.style.height = r), u && (l.style.width = u, d.style.width = u), lt(), i.abrupt("return", l);
                        case 9:
                        case "end":
                            return i.stop()
                    }
                }, _callee)
            }));
            return function setFrameWidthAndHeight(t) {
                return e.apply(this, arguments)
            }
        }(),
        Pt = function isChatFrameOpen() {
            var e, t, n;
            return null === Y || void 0 === Y ? void 0 : null === (e = Y.chat) || void 0 === e ? void 0 : null === (t = e.$div) || void 0 === t ? void 0 : null === (n = t.classList) || void 0 === n ? void 0 : n.contains("drift-chat-open")
        },
        Rt = function setResponsiveChatHeight(e) {
            var t = e || {},
                n = t.name,
                r = void 0 === n ? "chat" : n,
                o = t.defaultHeight,
                i = void 0 === o ? 602 : o,
                a = t.transition,
                s = void 0 === a || a;
            if (! function isIframeModeAndChatClosed(e) {
                    return nt() && "chat" === e && !Pt()
                }(r)) {
                var c = Te() ? Ae : "".concat(ut(Y.chat, i), "px");
                St({
                    height: c,
                    name: r,
                    transition: s
                })
            }
        },
        Dt = function getWindow() {
            var e;
            return nt() && (null === (e = rt()) || void 0 === e ? void 0 : e.window) || window
        },
        Lt = function setResponsiveChatWidth(e) {
            var t, n = e || {},
                r = n.name,
                o = void 0 === r ? "chat" : r,
                i = n.defaultWidth,
                a = void 0 === i ? _e : i,
                s = n.transition,
                c = void 0 === s || s,
                u = Dt().innerWidth;
            t = Te() ? Se : je() ? "".concat(u, "px") : "".concat(u <= 380 ? u : a, "px"), Tt({
                width: t,
                name: o,
                transition: c
            }), lt()
        },
        Ft = function waitUntilInnerHeightSettles() {
            return new window.Promise(function(e) {
                ! function step(t, n) {
                    window.innerHeight !== n || t >= 120 ? e() : window.requestAnimationFrame(function() {
                        return step(t + 1, n)
                    })
                }(0, window.innerHeight)
            })
        },
        Bt = function toggleResponsiveClassName() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = je();

            function toggleClassName(e) {
                e.classList[t ? "add" : "remove"]("widget--xs")
            }
            Te() || (e ? toggleClassName(e) : it(Y).forEach(function(e) {
                return toggleClassName(e.$div)
            }))
        },
        Wt = null,
        Mt = function setResponsiveChatDimensions() {
            Lt(), Rt()
        },
        Nt = function startResponsiveSizeListeners(e) {
            function broadcastReflowEvent() {
                Te() || it(Y).forEach(function(t) {
                    var n, r = t.$div.id.replace("drift-frame-", "");
                    r && r !== N.CONTROLLER && (r !== N.CHAT || e) && ee({
                        name: r,
                        message: {
                            isXSScreenSize: je(),
                            clientInnerHeight: null === (n = Dt()) || void 0 === n ? void 0 : n.innerHeight
                        },
                        topic: "CONDUCTOR:reflowFrame",
                        waitForResponse: !1
                    })
                })
            }
            jt(), Wt = Object(ct.throttle)(200, !1, function createSizeChangeEventHandler(e) {
                return _asyncToGenerator(i.a.mark(function _callee2() {
                    return i.a.wrap(function _callee2$(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!Re(!0)) {
                                    t.next = 3;
                                    break
                                }
                                return t.next = 3, Ft();
                            case 3:
                                Pt && (Lt({
                                    transition: !1
                                }), Rt({
                                    transition: !1
                                })), it(Y).forEach(function(e) {
                                    var t = e.$div.id.replace("drift-frame-", "");
                                    if ([N.EMAIL_CAPTURE, N.SLIDER].includes(t)) {
                                        var n, r = Dt().innerWidth,
                                            o = be[t.toUpperCase()];
                                        if (Te()) o = Ee;
                                        else if (je()) {
                                            var i = t === N.SLIDER ? "20px" : "0";
                                            o = "".concat(r, "px"), n = "calc(100% - ".concat(i, ")")
                                        }
                                        o && Ct({
                                            name: t,
                                            height: n,
                                            width: o,
                                            transition: !1,
                                            max: !0
                                        })
                                    }
                                }), Ue() && (Bt(), e());
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }, _callee2)
                }))
            }(broadcastReflowEvent)), Re(!0) ? window.addEventListener("orientationchange", Wt) : window.addEventListener("resize", Wt), Bt(), broadcastReflowEvent()
        },
        jt = function stopResponsiveSizeListeners() {
            Wt && (window.removeEventListener("orientationchange", Wt), window.removeEventListener("resize", Wt), Wt = null)
        },
        Ut = function toggleHasChat() {
            it(Y).forEach(function(e) {
                return e.$div.classList.add("drift-has-chat")
            })
        },
        zt = function toggleChatOpen(e, t) {
            t && (Te() || je()) && document.getElementsByTagName("html")[0].classList[e ? "add" : "remove"]("drift-widget-parent--chat-open");
            it(Y).forEach(function(t) {
                var n, r = t.$div,
                    o = null !== (n = j[r.id]) && void 0 !== n ? n : null;
                ! function toggleStylesOnChatOpen(e, t) {
                    var n, r = Te(),
                        o = null !== (n = j[e.id]) && void 0 !== n ? n : null,
                        i = o === N.CHAT,
                        a = o === N.CONTROLLER;
                    t ? i ? (e.style.opacity = "1", e.style.visibility = "visible", r && (e.style.bottom = xe, e.style.right = xe, e.style.left = xe)) : r && a && (e.style.display = "none") : i ? (e.style.opacity = "0", e.style.visibility = "hidden") : r && a && (e.style.display = "block")
                }(r, e), o === N.CHAT && function showOrHideFromScreenReaders(e, t) {
                    if (e) t ? gt({
                        name: e
                    }) : mt({
                        name: e
                    })
                }(N.CHAT, e), e ? r.classList.add("drift-chat-open") : r.classList.remove("drift-chat-open")
            })
        },
        Gt = function destroyContentBox() {
            var e = document.querySelector(".drift-widget-content-box");
            e && document.body && document.body.removeChild(e)
        },
        qt = function generateContentBox(e) {
            var t = e.type,
                n = void 0 === t ? "image" : t,
                r = e.media;
            Gt();
            var o = document.createElement({
                image: "img"
            }[n]);
            o.setAttribute("src", r);
            var i = document.createElement("div");
            return i.onclick = function() {
                Gt()
            }, i.setAttribute("class", "drift-widget-content-box drift-widget-content-box-".concat(n)), i.appendChild(o), document.body && document.body.appendChild(i), i
        },
        Ht = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee3(e) {
                var t, n, r, o, a;
                return i.a.wrap(function _callee3$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = e.classNamesToRemove, n = void 0 === t ? [] : t, r = e.waitMS, o = void 0 === r ? 500 : r, Y.chat || ce(new Error("Attempting to remove classes on an unmounted frame: chat")), (a = Y.chat.$div).classList.add("hide-frame"), i.next = 6, oe(o);
                        case 6:
                            return n.concat("hide-frame").forEach(function(e) {
                                return a.classList.remove(e)
                            }), i.abrupt("return", a);
                        case 8:
                        case "end":
                            return i.stop()
                    }
                }, _callee3)
            }));
            return function removeChatTakeover(t) {
                return e.apply(this, arguments)
            }
        }(),
        $t = function generateParentDivElement(e) {
            var t, n = e.name,
                r = e.frame,
                o = e.insertInside,
                i = void 0 === o ? "" : o,
                a = e.height,
                s = e.width,
                c = e.max,
                u = e.alignment,
                f = e.insertBefore;
            return !C(i) && Vt(i) ? ((t = document.getElementById(i)).appendChild(r), t) : ((t = function getOrCreateFrameContainer(e, t) {
                var n, r = document.getElementsByClassName("drift-conductor-item ".concat("drift-frame", "-").concat(e));
                return r.length ? function removeAllChildrenFromElement(e) {
                    for (; e.firstChild;) e.removeChild(e.firstChild)
                }(n = r[0]) : ((n = document.createElement("div")).setAttribute("id", "".concat("drift-frame", "-").concat(e)), n.setAttribute("class", "drift-conductor-item ".concat("drift-frame", "-").concat(e, " ").concat("drift-frame", "-").concat(e, "-align-").concat(t)), qe(n, e, t)), Te() && n.classList.add("".concat("drift-frame", "--mobile")), n
            }(n, u)).appendChild(r), Ge(t, s, a, c, n, u), Yt(t, f), t)
        },
        Yt = function addDivToParentPage(e, t) {
            t && Y[t] ? document.body.insertBefore(e, Y[t].$div) : document.body && document.body.appendChild(e)
        },
        Vt = function domElementExistsById(e) {
            return !!document.getElementById(e)
        };
    const Xt = ["SESSION_ID", "SESSION_STARTED", "ALWAYS_SEND_IDS", "SESSION_CAMPAIGNS", "NOTIFICATION_PLAYED"];

    function _identity(e) {
        return e
    }
    var Zt = _curry1(_identity);

    function hasOrAdd(e, t, n) {
        var r, o = typeof e;
        switch (o) {
            case "string":
            case "number":
                return 0 === e && 1 / e === -1 / 0 ? !!n._items["-0"] || (t && (n._items["-0"] = !0), !1) : null !== n._nativeSet ? t ? (r = n._nativeSet.size, n._nativeSet.add(e), n._nativeSet.size === r) : n._nativeSet.has(e) : o in n._items ? e in n._items[o] || (t && (n._items[o][e] = !0), !1) : (t && (n._items[o] = {}, n._items[o][e] = !0), !1);
            case "boolean":
                if (o in n._items) {
                    var i = e ? 1 : 0;
                    return !!n._items[o][i] || (t && (n._items[o][i] = !0), !1)
                }
                return t && (n._items[o] = e ? [!1, !0] : [!0, !1]), !1;
            case "function":
                return null !== n._nativeSet ? t ? (r = n._nativeSet.size, n._nativeSet.add(e), n._nativeSet.size === r) : n._nativeSet.has(e) : o in n._items ? !!_includes(e, n._items[o]) || (t && n._items[o].push(e), !1) : (t && (n._items[o] = [e]), !1);
            case "undefined":
                return !!n._items[o] || (t && (n._items[o] = !0), !1);
            case "object":
                if (null === e) return !!n._items.null || (t && (n._items.null = !0), !1);
            default:
                return (o = Object.prototype.toString.call(e)) in n._items ? !!_includes(e, n._items[o]) || (t && n._items[o].push(e), !1) : (t && (n._items[o] = [e]), !1)
        }
    }
    var Jt = function() {
            function _Set() {
                this._nativeSet = "function" === typeof Set ? new Set : null, this._items = {}
            }
            return _Set.prototype.add = function(e) {
                return !hasOrAdd(e, !0, this)
            }, _Set.prototype.has = function(e) {
                return hasOrAdd(e, !1, this)
            }, _Set
        }(),
        Kt = _curry2(function uniqBy(e, t) {
            for (var n, r, o = new Jt, i = [], a = 0; a < t.length;) n = e(r = t[a]), o.add(n) && i.push(r), a += 1;
            return i
        })(Zt);

    function _arity(e, t) {
        switch (e) {
            case 0:
                return function() {
                    return t.apply(this, arguments)
                };
            case 1:
                return function(e) {
                    return t.apply(this, arguments)
                };
            case 2:
                return function(e, n) {
                    return t.apply(this, arguments)
                };
            case 3:
                return function(e, n, r) {
                    return t.apply(this, arguments)
                };
            case 4:
                return function(e, n, r, o) {
                    return t.apply(this, arguments)
                };
            case 5:
                return function(e, n, r, o, i) {
                    return t.apply(this, arguments)
                };
            case 6:
                return function(e, n, r, o, i, a) {
                    return t.apply(this, arguments)
                };
            case 7:
                return function(e, n, r, o, i, a, s) {
                    return t.apply(this, arguments)
                };
            case 8:
                return function(e, n, r, o, i, a, s, c) {
                    return t.apply(this, arguments)
                };
            case 9:
                return function(e, n, r, o, i, a, s, c, u) {
                    return t.apply(this, arguments)
                };
            case 10:
                return function(e, n, r, o, i, a, s, c, u, f) {
                    return t.apply(this, arguments)
                };
            default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
        }
    }
    var Qt = _curry2(function curryN(e, t) {
            return 1 === e ? _curry1(t) : _arity(e, function _curryN(e, t, n) {
                return function() {
                    for (var r = [], o = 0, i = e, a = 0; a < t.length || o < arguments.length;) {
                        var s;
                        a < t.length && (!_isPlaceholder(t[a]) || o >= arguments.length) ? s = t[a] : (s = arguments[o], o += 1), r[a] = s, _isPlaceholder(s) || (i -= 1), a += 1
                    }
                    return i <= 0 ? n.apply(this, r) : _arity(i, _curryN(e, r, n))
                }
            }(e, [], t))
        }),
        en = _curry1(function flip(e) {
            return Qt(e.length, function(t, n) {
                var r = Array.prototype.slice.call(arguments, 0);
                return r[0] = n, r[1] = t, e.apply(this, r)
            })
        });
    var tn = _curry1(function isArrayLike(e) {
            return !!_(e) || !!e && ("object" === typeof e && (!_isString(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && (e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1)))))
        }),
        nn = function() {
            function XWrap(e) {
                this.f = e
            }
            return XWrap.prototype["@@transducer/init"] = function() {
                throw new Error("init not implemented on XWrap")
            }, XWrap.prototype["@@transducer/result"] = function(e) {
                return e
            }, XWrap.prototype["@@transducer/step"] = function(e, t) {
                return this.f(e, t)
            }, XWrap
        }();
    var rn = _curry2(function bind(e, t) {
        return _arity(e.length, function() {
            return e.apply(t, arguments)
        })
    });

    function _iterableReduce(e, t, n) {
        for (var r = n.next(); !r.done;) {
            if ((t = e["@@transducer/step"](t, r.value)) && t["@@transducer/reduced"]) {
                t = t["@@transducer/value"];
                break
            }
            r = n.next()
        }
        return e["@@transducer/result"](t)
    }

    function _methodReduce(e, t, n, r) {
        return e["@@transducer/result"](n[r](rn(e["@@transducer/step"], e), t))
    }
    var on = "undefined" !== typeof Symbol ? Symbol.iterator : "@@iterator";

    function _reduce(e, t, n) {
        if ("function" === typeof e && (e = function _xwrap(e) {
                return new nn(e)
            }(e)), tn(n)) return function _arrayReduce(e, t, n) {
            for (var r = 0, o = n.length; r < o;) {
                if ((t = e["@@transducer/step"](t, n[r])) && t["@@transducer/reduced"]) {
                    t = t["@@transducer/value"];
                    break
                }
                r += 1
            }
            return e["@@transducer/result"](t)
        }(e, t, n);
        if ("function" === typeof n["fantasy-land/reduce"]) return _methodReduce(e, t, n, "fantasy-land/reduce");
        if (null != n[on]) return _iterableReduce(e, t, n[on]());
        if ("function" === typeof n.next) return _iterableReduce(e, t, n);
        if ("function" === typeof n.reduce) return _methodReduce(e, t, n, "reduce");
        throw new TypeError("reduce: list must be array or iterable")
    }
    var an = function() {
            function XFilter(e, t) {
                this.xf = t, this.f = e
            }
            return XFilter.prototype["@@transducer/init"] = P, XFilter.prototype["@@transducer/result"] = R, XFilter.prototype["@@transducer/step"] = function(e, t) {
                return this.f(t) ? this.xf["@@transducer/step"](e, t) : e
            }, XFilter
        }(),
        sn = _curry2(_dispatchable(["filter"], _curry2(function _xfilter(e, t) {
            return new an(e, t)
        }), function(e, t) {
            return _isObject(t) ? _reduce(function(n, r) {
                return e(t[r]) && (n[r] = t[r]), n
            }, {}, k(t)) : function _filter(e, t) {
                for (var n = 0, r = t.length, o = []; n < r;) e(t[n]) && (o[o.length] = t[n]), n += 1;
                return o
            }(e, t)
        })),
        cn = _curry2(function reject(e, t) {
            return sn(function _complement(e) {
                return function() {
                    return !e.apply(this, arguments)
                }
            }(e), t)
        }),
        un = _curry2(function(e, t) {
            return cn(en(_includes)(e), t)
        }),
        fn = _curry2(_includes);
    const ln = ["visitCounts", "isChatFrameOpen", "useEnterToSubmit"];
    var dn = function clearDriftSessionStorage() {
            Xt.forEach(function(e) {
                return gn.removeItem(e)
            })
        },
        pn = function clearDriftLocalStorage() {
            ln.forEach(function(e) {
                return mn.removeItem(e)
            })
        },
        hn = function storageFactory(e) {
            var t = {},
                n = function isStorageSupported() {
                    try {
                        return window[e].setItem("support_test", "true"), window[e].removeItem("support_test"), !0
                    } catch (t) {
                        return !1
                    }
                },
                r = function prefixedKey(e) {
                    return "DRIFT_".concat(e)
                },
                o = function get(o) {
                    return n() ? JSON.parse(window[e].getItem(r(o))) : t.hasOwnProperty(r(o)) ? t[o] : void 0
                },
                i = function set(o, i) {
                    n() ? window[e].setItem(r(o), JSON.stringify(i)) : t[o] = i
                };
            return {
                get: o,
                set: i,
                removeItem: function removeItem(o) {
                    n() ? window[e].removeItem(r(o)) : delete t[o]
                },
                key: function key(r) {
                    return n() ? window[e].key(r) : Object.keys(t)[r] || void 0
                },
                getAll: function getAll() {
                    return n() ? Object.keys(window[e]).map(function(t) {
                        return _defineProperty({}, t.split("DRIFT::")[0], JSON.parse(window[e].getItem(r(t))))
                    }) : Object.keys(t).map(function(e) {
                        return _defineProperty({}, e, t[e])
                    })
                },
                sadd: function sadd(e, t) {
                    var n = o(e) || [];
                    i(e, Kt([].concat(_toConsumableArray(n), [t])))
                },
                srem: function srem(e, t) {
                    var n = o(r(e)) || [];
                    i(e, JSON.stringify(un([t], n)))
                },
                sismember: function sismember(e, t) {
                    var n = o(e) || [];
                    return fn(t, n)
                }
            }
        },
        mn = hn("localStorage"),
        gn = hn("sessionStorage"),
        wn = mn.sadd,
        vn = mn.get,
        yn = mn.set;
    window.addEventListener("load", function() {
        var e = window.AudioContext || window.webkitAudioContext;
        if (e) try {
            window.drift_audio_context = new e
        } catch (t) {
            se([t])
        }
    });
    var _n;
    window.addEventListener("click", function() {
        ! function tryPlayAudioTrack() {
            window.drift_audio_context && (window.drift_audio_context.resume(), window.drift_notification_waiting && setTimeout(function() {
                bn(window.drift_notification_waiting), window.drift_notification_waiting = null
            }, 500))
        }()
    }, {
        once: !0
    });
    var bn = function playAudioTrack(e) {
            e.play().then(function() {
                window.drift_notification_waiting && (window.drift_notification_waiting = null)
            }).catch(function(t) {
                window.drift_audio_context && "running" !== window.drift_audio_context.state && (window.drift_notification_waiting = e), se(["Could not play sound", t])
            })
        },
        En = function isFirstInLineCheck(e) {
            return new Promise(function(t) {
                return window.thisTabID || (window.thisTabID = ie()), "hidden" !== document.visibilityState && e || wn("openTabs", window.thisTabID), setTimeout(_asyncToGenerator(i.a.mark(function _callee() {
                    var e, n;
                    return i.a.wrap(function _callee$(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, vn("openTabs");
                            case 2:
                                return e = r.sent, n = !e || 0 === e.indexOf(window.thisTabID), r.abrupt("return", t(n));
                            case 5:
                            case "end":
                                return r.stop()
                        }
                    }, _callee)
                })), 100)
            })
        },
        xn = function shallPlaySoundNotification(e, t) {
            return !(!0 === t && !w(e) && !0 === e)
        },
        An = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee3(e) {
                var t, r, o, a;
                return i.a.wrap(function _callee3$(s) {
                    for (;;) switch (s.prev = s.next) {
                        case 0:
                            t = e.chatOpen, r = e.notificationOnFirstVisitOnly, o = e.activeConversationId, a = !isNaN(o), En(t).then(function() {
                                var e = _asyncToGenerator(i.a.mark(function _callee2(e) {
                                    var t;
                                    return i.a.wrap(function _callee2$(o) {
                                        for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                if (t = gn.get("NOTIFICATION_PLAYED"), e && (xn(t, r) || a)) {
                                                    o.next = 3;
                                                    break
                                                }
                                                return o.abrupt("return");
                                            case 3:
                                                if (o.prev = 3, _n) {
                                                    o.next = 9;
                                                    break
                                                }
                                                return o.next = 7, n.e(3).then(n.t.bind(null, 382, 7)).then(function(e) {
                                                    _n = new Audio(e.default), bn(_n), gn.set("NOTIFICATION_PLAYED", !0)
                                                }).catch(function(e) {
                                                    return se(["Could not play sound", e])
                                                });
                                            case 7:
                                                o.next = 11;
                                                break;
                                            case 9:
                                                bn(_n), gn.set("NOTIFICATION_PLAYED", !0);
                                            case 11:
                                                o.next = 16;
                                                break;
                                            case 13:
                                                o.prev = 13, o.t0 = o.catch(3), se([o.t0]);
                                            case 16:
                                                yn("openTabs", []);
                                            case 17:
                                            case "end":
                                                return o.stop()
                                        }
                                    }, _callee2, null, [
                                        [3, 13]
                                    ])
                                }));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 3:
                        case "end":
                            return s.stop()
                    }
                }, _callee3)
            }));
            return function playSoundNotification(t) {
                return e.apply(this, arguments)
            }
        }();
    const Sn = ["ELOQUA", "_mkto_trk"],
        On = ["drift_ujwt", "drift_aid", "driftt_aid", "drift_eid", "driftt_eid", "drift_campaign_refresh"];
    var kn, In, Tn = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e) {
                var t, n, r, o, a, s, c, u, f, l, d, p, h, m;
                return i.a.wrap(function _callee$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (200, t = {}, !e || !fetch) {
                                i.next = 28;
                                break
                            }
                            return s = encodeURIComponent(null === (n = document) || void 0 === n ? void 0 : null === (r = n.location) || void 0 === r ? void 0 : r.href), c = encodeURIComponent(null === (o = document) || void 0 === o ? void 0 : o.title), u = encodeURIComponent(null === (a = document) || void 0 === a ? void 0 : a.referrer), f = "https://api.company-target.com/api/v2/ip.json?key=".concat(e, "&page=").concat(s, "&page_title=").concat(c, "&referrer=").concat(u), i.prev = 7, l = new AbortController, d = l.signal, p = !1, setTimeout(function() {
                                p || l.abort()
                            }, 200), i.next = 14, fetch(f, {
                                signal: d
                            });
                        case 14:
                            if (h = i.sent, p = !0, !h || !h.ok) {
                                i.next = 21;
                                break
                            }
                            return i.next = 19, h.json();
                        case 19:
                            m = i.sent, t = m;
                        case 21:
                            return i.abrupt("return", t);
                        case 24:
                            return i.prev = 24, i.t0 = i.catch(7), i.t0 instanceof DOMException ? console.log("Demandbase data fetch timed out") : console.log("Error fetching Demandbase:", i.t0), i.abrupt("return", t);
                        case 28:
                            return i.abrupt("return", t);
                        case 29:
                        case "end":
                            return i.stop()
                    }
                }, _callee, null, [
                    [7, 24]
                ])
            }));
            return function DemandbaseAPI(t) {
                return e.apply(this, arguments)
            }
        }(),
        Cn = _curry2(_checkForMethod("forEach", function forEach(e, t) {
            for (var n = t.length, r = 0; r < n;) e(t[r]), r += 1;
            return t
        })),
        Pn = function clearAllDriftCookies(e) {
            On.map(function(t) {
                return ve.a.remove(t, {
                    domain: e
                })
            }), On.map(function(e) {
                return ve.a.remove(e)
            })
        },
        Rn = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee() {
                var e, t, n, r, o, a, s, c, u = arguments;
                return i.a.wrap(function _callee$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return e = u.length > 0 && void 0 !== u[0] ? u[0] : {}, t = {}, Sn.forEach(function(e) {
                                var n = ve.a.get(e);
                                n && (t[e] = n)
                            }), i.next = 5, Tn(e.demandbaseToken);
                        case 5:
                            return (n = i.sent) && (t.demandbase = n), e.pardotId && (r = "".concat("visitor_id").concat(e.pardotId), (o = ve.a.get(r)) && (t.visitor_id = o)), a = ve.a.get(), s = {}, c = k(a) || [], Cn(function(e) {
                                e.toString().startsWith("visitor_id") && !e.toString().endsWith("-hash") && (s[e] = a[e])
                            }, c), t.PARDOT_ALL_COOKIES = s, i.abrupt("return", t);
                        case 14:
                        case "end":
                            return i.stop()
                    }
                }, _callee)
            }));
            return function getIntegrationData() {
                return e.apply(this, arguments)
            }
        }(),
        Dn = function setDriftCookie(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = "https:" === window.location.protocol,
                o = n;
            return nt() && r && (o.sameSite = "none"), o.secure = r, ve.a.set(e, t, o)
        },
        Ln = ve.a.getJSON,
        Fn = ve.a.remove,
        Bn = function getHostnameCookieDomain() {
            var e = window.location.hostname.match(/([\w-]{3,})\.[a-z]+$/gi);
            return e && e.length > 0 ? ".".concat(e[0]) : ""
        },
        Wn = {
            MARKETO: "MARKETO",
            HUBSPOT: "HUBSPOT",
            PARDOT: "PARDOT",
            ELOQUA: "ELOQUA",
            BASIC: "BASIC"
        },
        Mn = "FastlaneLogger - ",
        Nn = function fastlaneLog(e) {
            var t = e.type,
                n = e.data;
            ae({
                type: t,
                data: [Mn].concat(_toConsumableArray(n))
            })
        },
        jn = function isValidForm(e) {
            return e && e instanceof HTMLFormElement && e.elements ? !$n(e).some(function(e) {
                return "password" === e.type
            }) || (ue("Will not connect to form with password fields."), !1) : (ue("Will not connect to form because form has no fields."), !1)
        },
        Un = function getFormValuesByName(e) {
            if ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).validate && !jn(e)) return null;
            var t = $n(e),
                n = {};
            return t.filter(function isValidFormElement(e) {
                var t = e.name && "" !== e.name.trim(),
                    n = e.value && "" !== e.value.trim(),
                    r = "radio" !== e.type && "checkbox" !== e.type || !!e.checked;
                return t && n && r
            }).forEach(function(e) {
                n[e.name] = e.value
            }), n
        },
        zn = function getCollectFormDataValue(e) {
            if (!e) return null;
            if ("string" === typeof e) {
                var t = document.querySelector(e);
                if (t && "FORM" === t.tagName) return Un(t, {
                    validate: !0
                })
            } else if (e.tagName) {
                var n = "FORM" === e.tagName ? e : e.querySelector("form");
                if (jn(n) && "FORM" === n.tagName) return Un(n, {
                    validate: !0
                })
            } else if ("object" === typeof e) return e;
            return null
        },
        Gn = function collectFormData(e, t) {
            var n = zn(e);
            n ? window.drift.ready ? (Nn({
                data: ["collectFormData", n, t]
            }), ee({
                name: "controller",
                topic: "trigger-api-event",
                message: {
                    method: "collectFormData",
                    args: [n, t]
                }
            })) : window.drift.q.push(["collectFormData", e, t]) : ue("collectFormData: Could not find form nor object with value:", e)
        },
        qn = function stageFormData(e) {
            Nn({
                data: ["stageFormData", e]
            });
            var t = zn(e);
            t ? Dn("drift_staged_form_data", t, {
                domain: Bn()
            }) : ue("stageFormData: Could not find form nor object with value:", e)
        },
        Hn = function commitFormData(e) {
            Nn({
                data: ["commitFormData", e]
            });
            var t = Ln("drift_staged_form_data");
            t && (Gn(t, e), Fn("drift_staged_form_data", {
                domain: Bn()
            }))
        },
        $n = function toFormElementsArray(e) {
            for (var t = [], n = 0; n < e.elements.length; n++) t.push(e.elements[n]);
            return t
        },
        Yn = function toElementsArray(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
            return t
        },
        Vn = function copyFastlaneSettings(e, t) {
            return {
                campaignId: e,
                formSelector: "#" + t.formId,
                formType: t.formType,
                followupUrl: t.redirectUri,
                stageData: !1
            }
        },
        Xn = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e, t) {
                var n, r, o, a, s;
                return i.a.wrap(function _callee$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            n = t.retries, r = void 0 === n ? 3 : n, o = t.delay, a = void 0 === o ? 1e3 : o, s = null;
                        case 3:
                            if (!(r > 0) || s) {
                                i.next = 11;
                                break
                            }
                            if (s = e()) {
                                i.next = 8;
                                break
                            }
                            return i.next = 8, oe(a);
                        case 8:
                            r--, i.next = 3;
                            break;
                        case 11:
                            return i.abrupt("return", s);
                        case 12:
                        case "end":
                            return i.stop()
                    }
                }, _callee)
            }));
            return function executeWithRetry(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        Zn = "fastlaneTestMode",
        Jn = function isValidFastlaneTestModeSettings(e) {
            return "object" === typeof e && "string" === typeof(null === e || void 0 === e ? void 0 : e.formId) && "" !== e.formId.trim() && "string" === typeof(null === e || void 0 === e ? void 0 : e.formType) && Object.values(Wn).includes(e.formType)
        },
        Kn = function broadcastFLTestModeEvent(e) {
            var t = e.event,
                n = e.settings,
                r = e.formSubmissionData;
            ae({
                type: "log",
                data: [Zn, t, n].concat(_toConsumableArray(r ? [r] : []))
            }), window.parent.postMessage(_objectSpread2(_objectSpread2({
                event: t,
                type: Zn
            }, n), r && {
                formSubmissionData: r
            }), "*")
        },
        Qn = function toFormData(e) {
            var t = new FormData;
            for (var n in e) t.append(n, e[n].toString());
            return t
        },
        er = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e, t, n) {
                var r, o, a;
                return i.a.wrap(function _callee$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return r = (n || {}).noCors, o = Qn(t), i.prev = 2, a = {
                                method: "POST",
                                body: o,
                                credentials: "include"
                            }, r && (a.mode = "no-cors"), i.next = 7, fetch(e, a);
                        case 7:
                            i.next = 13;
                            break;
                        case 9:
                            return i.prev = 9, i.t0 = i.catch(2), fe("Form data submission error: ".concat(i.t0.message)), i.abrupt("return", !1);
                        case 13:
                            return i.abrupt("return", !0);
                        case 14:
                        case "end":
                            return i.stop()
                    }
                }, _callee, null, [
                    [2, 9]
                ])
            }));
            return function submitData(t, n, r) {
                return e.apply(this, arguments)
            }
        }(),
        tr = function disableFormElements(e) {
            var t = Yn(e.getElementsByTagName("button")),
                n = Yn(e.getElementsByTagName("input"));
            [].concat(_toConsumableArray(t), _toConsumableArray(n)).forEach(function(e) {
                return e.setAttribute("disabled", "true")
            })
        },
        nr = function connectPlainForm(e, t, n) {
            Nn({
                data: ["Plain form connect triggered", {
                    params: t
                }]
            }), jn(e) && e.addEventListener("submit", function() {
                var r = _asyncToGenerator(i.a.mark(function _callee2(r) {
                    var o, a;
                    return i.a.wrap(function _callee2$(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                if (Nn({
                                        data: ["Plain form onSubmit triggered", {
                                            event: r,
                                            params: t
                                        }]
                                    }), o = Un(r.target)) {
                                    i.next = 5;
                                    break
                                }
                                return ue("Will not submit form because it has no fields."), i.abrupt("return");
                            case 5:
                                if (!t.stageData) {
                                    i.next = 8;
                                    break
                                }
                                return qn(o), i.abrupt("return");
                            case 8:
                                if (r.preventDefault(), !t.testMode) {
                                    i.next = 14;
                                    break
                                }
                                return Kn({
                                    event: "onSubmit",
                                    settings: t.testMode,
                                    formSubmissionData: o
                                }), Kn({
                                    event: "onSuccess",
                                    settings: t.testMode,
                                    formSubmissionData: o
                                }), setTimeout(function() {
                                    Kn({
                                        event: "takeover",
                                        settings: t.testMode,
                                        formSubmissionData: o
                                    })
                                }, 2e3), i.abrupt("return");
                            case 14:
                                if (a = r.target.action, tr(e), i.t0 = a, !i.t0) {
                                    i.next = 21;
                                    break
                                }
                                return i.next = 20, er(a, o, n);
                            case 20:
                                i.t0 = !i.sent;
                            case 21:
                                if (!i.t0) {
                                    i.next = 23;
                                    break
                                }
                                return i.abrupt("return");
                            case 23:
                                Gn(o, _objectSpread2({}, t));
                            case 24:
                            case "end":
                                return i.stop()
                        }
                    }, _callee2)
                }));
                return function(e) {
                    return r.apply(this, arguments)
                }
            }())
        },
        rr = function getHubspotFormAPI() {
            var e, t, n;
            return (null === (e = window) || void 0 === e ? void 0 : e.HubSpotForms) || (null === (t = window) || void 0 === t ? void 0 : null === (n = t.hubspot) || void 0 === n ? void 0 : n.form.api)
        },
        or = function hasHubspotForms() {
            return !!rr()
        },
        ir = function findHubspotForm(e) {
            if (e) return function getHubspotFormById(e) {
                var t, n = e.split("_")[1];
                return null === (t = rr()) || void 0 === t ? void 0 : t.getForm(n)
            }(e)
        },
        ar = function connectHubspotForm(e, t) {
            var n, r = Object.assign({}, t);
            Nn({
                data: ["Connect Hubspot form triggered", {
                    params: r
                }]
            }), e.onFormSubmit(function(e) {
                Nn({
                    data: ["Hubspot form onFormSubmit triggered", {
                        event: e,
                        params: r
                    }]
                });
                var t = function getFormElement(e) {
                        return !w(e) && !e.elements && e[0] && e[0].elements ? e[0] : e
                    }(e),
                    o = Un(t);
                r.testMode && Kn({
                    event: "onSubmit",
                    settings: r.testMode
                }), o && (n = o)
            }), e.onFormSubmitted(function() {
                if (Nn({
                        data: ["Hubspot form onFormSubmitted triggered", {
                            params: r
                        }]
                    }), r.testMode) return Kn({
                    event: "onSuccess",
                    settings: r.testMode,
                    formSubmissionData: n
                }), void setTimeout(function() {
                    Kn({
                        event: "takeover",
                        settings: r.testMode,
                        formSubmissionData: n
                    })
                }, 2e3);
                r.stageData ? qn(n) : Gn(n, _objectSpread2({}, r))
            })
        },
        sr = function hasMarketoForms() {
            return !!window.MktoForms2
        },
        cr = function isMarketoForm(e) {
            return !!e.getFormElem
        },
        ur = function findMarketoForm(e) {
            if (e) {
                var t = window.MktoForms2.getForm(e.split("_")[1]);
                if (t) return t
            } else {
                var n = window.MktoForms2.allForms();
                if (n && n.length) return n[0]
            }
        },
        fr = function connectMarketoForm(e, t) {
            Nn({
                data: ["Marketo form connect triggered", {
                    params: t
                }]
            });
            var n = t || {},
                r = Object.assign({}, n);
            t.testMode && e.onSubmit(function() {
                Kn({
                    event: "onSubmit",
                    settings: t.testMode
                })
            }), t.stageData ? e.onSubmit(function() {
                qn(e.vals())
            }) : e.onSuccess(function(e, n) {
                return Nn({
                    data: ["Marketo form onSuccess triggered", {
                        data: e,
                        followupUrl: n,
                        params: t
                    }]
                }), t.testMode ? (Kn({
                    event: "onSuccess",
                    settings: t.testMode,
                    formSubmissionData: e
                }), setTimeout(function() {
                    Kn({
                        event: "takeover",
                        settings: t.testMode,
                        formSubmissionData: e
                    })
                }, 2e3), !1) : (Gn(e, _objectSpread2({
                    followupUrl: n
                }, r)), !1)
            })
        },
        lr = function selectForm(e) {
            var t = e.formSelector,
                n = e.formType;
            if (Nn({
                    data: ["Attempting to find form", {
                        formSelector: t,
                        formType: n
                    }]
                }), !n) {
                if (sr()) {
                    var r = ur(t);
                    if (r) return r
                }
                if (or()) {
                    var o = ir(t);
                    if (o) return o
                }
                if (de(t)) return document.querySelector("form");
                try {
                    return document.querySelector(t)
                } catch (i) {
                    return ue("Unable to select form because of browser error:", i && i.message), null
                }
            }
            switch (n) {
                case Wn.MARKETO:
                    return ur(t);
                case Wn.HUBSPOT:
                    return ir(t);
                case Wn.ELOQUA:
                    return ue('Form type "'.concat(n, '" is not yet supported.')), null;
                case Wn.PARDOT:
                case Wn.BASIC:
                    try {
                        return document.querySelector(t)
                    } catch (i) {
                        return ue("Unable to select form because of browser error:", i && i.message), null
                    }
                default:
                    return document.querySelector("form")
            }
        },
        dr = function deriveFormType(e) {
            return sr() && ur(e) ? Wn.MARKETO : or() && ir(e) ? Wn.HUBSPOT : function findBasicForm(e) {
                var t = document.querySelector(e);
                return jn(t)
            }(e) ? Wn.BASIC : null
        },
        pr = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e) {
                var t, n, r, o, a, s;
                return i.a.wrap(function _callee$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return Nn({
                                data: ["Connect FL form triggered", {
                                    params: e
                                }]
                            }), n = (t = e || {}).formSelector, r = t.formType, (o = t.testMode) && Kn({
                                event: "start",
                                settings: o
                            }), i.next = 5, Xn(function() {
                                return lr({
                                    formSelector: n,
                                    formType: r
                                })
                            }, {
                                delay: 3e3
                            });
                        case 5:
                            if (a = i.sent, Nn({
                                    data: ["Form found", {
                                        formSelector: n,
                                        formType: r,
                                        form: a
                                    }]
                                }), a && o && Kn({
                                    event: "formFound",
                                    settings: o
                                }), !de(a)) {
                                i.next = 11;
                                break
                            }
                            return fe("Could not find form: ".concat(n ? ' "'.concat(n, '"') : "", ".")), i.abrupt("return");
                        case 11:
                            s = null !== r && void 0 !== r ? r : dr(n), i.t0 = s, i.next = i.t0 === Wn.HUBSPOT ? 15 : i.t0 === Wn.MARKETO ? 17 : i.t0 === Wn.PARDOT ? 21 : i.t0 === Wn.BASIC ? 21 : 23;
                            break;
                        case 15:
                            return ar(a, e), i.abrupt("return");
                        case 17:
                            if (!sr() || !cr(a)) {
                                i.next = 20;
                                break
                            }
                            return fr(a, e), i.abrupt("return");
                        case 20:
                            return i.abrupt("break", 25);
                        case 21:
                        case 23:
                            return nr(a, e), i.abrupt("return");
                        case 25:
                        case "end":
                            return i.stop()
                    }
                }, _callee)
            }));
            return function connectFLForm(t) {
                return e.apply(this, arguments)
            }
        }();
    ! function(e) {
        e.CHAT = "CHAT", e.LANDING_PAGE = "LANDING_PAGE", e.IFRAME = "IFRAME"
    }(kn || (kn = {})),
    function(e) {
        e.DEFAULT = "DEFAULT", e.EAGER = "EAGER", e.ON_INTERACTIVE = "ON_INTERACTIVE"
    }(In || (In = {}));
    var hr = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e) {
                var t, n;
                return i.a.wrap(function _callee$(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            try {
                                t = document.createElement("template"), n = e.trim(), t.innerHTML = n, document.head && document.head.appendChild(t.content.firstChild)
                            } catch (o) {
                                ae({
                                    type: "warn",
                                    data: ["error installing drift engage verification tag", o]
                                })
                            }
                        case 1:
                        case "end":
                            return r.stop()
                    }
                }, _callee)
            }));
            return function attachDriftEngageVerification(t) {
                return e.apply(this, arguments)
            }
        }(),
        mr = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee2(e) {
                var t, n;
                return i.a.wrap(function _callee2$(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            try {
                                t = "https://lift-ai-js.marketlinc.com/".concat(e, "/deployment.js"), (n = document.createElement("script")).type = "text/javascript", n.id = "ml_snippet_script_id", n.src = t + "?" + Math.floor(1e9 * Math.random()), document.getElementsByTagName("head")[0].appendChild(n)
                            } catch (o) {
                                ae({
                                    type: "warn",
                                    data: ["error installing drift engage", o]
                                })
                            }
                        case 1:
                        case "end":
                            return r.stop()
                    }
                }, _callee2)
            }));
            return function attachDriftEngage(t) {
                return e.apply(this, arguments)
            }
        }();
    var gr = function() {
            function XMap(e, t) {
                this.xf = t, this.f = e
            }
            return XMap.prototype["@@transducer/init"] = P, XMap.prototype["@@transducer/result"] = R, XMap.prototype["@@transducer/step"] = function(e, t) {
                return this.xf["@@transducer/step"](e, this.f(t))
            }, XMap
        }(),
        wr = _curry2(_dispatchable(["fantasy-land/map", "map"], _curry2(function _xmap(e, t) {
            return new gr(e, t)
        }), function map(e, t) {
            switch (Object.prototype.toString.call(t)) {
                case "[object Function]":
                    return Qt(t.length, function() {
                        return e.call(this, t.apply(this, arguments))
                    });
                case "[object Object]":
                    return _reduce(function(n, r) {
                        return n[r] = e(t[r]), n
                    }, {}, k(t));
                default:
                    return function _map(e, t) {
                        for (var n = 0, r = t.length, o = Array(r); n < r;) o[n] = e(t[n]), n += 1;
                        return o
                    }(e, t)
            }
        })),
        vr = {
            "conversation:buttonClicked": {
                action: "Button Clicked",
                label: function label(e) {
                    return "Playbook ID: ".concat(e.playbookId, ", Text: ").concat(e.buttonBody)
                },
                nonInteraction: !1
            },
            "conversation:firstInteraction": {
                action: "First Interaction",
                label: function label(e) {},
                nonInteraction: !1
            },
            "conversation:playbookClicked": {
                action: "Playbook Clicked",
                label: function label(e) {
                    return "Playbook ID: ".concat(e.playbookId)
                },
                nonInteraction: !1
            },
            "conversation:playbookFired": {
                action: "Playbook Fired",
                label: function label(e) {
                    return "Playbook ID: ".concat(e.playbookId)
                },
                nonInteraction: !0
            },
            "conversation:playbookDismissed": {
                action: "Playbook Dismissed",
                label: function label(e) {
                    return "Playbook ID: ".concat(e.playbookId)
                },
                nonInteraction: !1
            },
            message: {
                action: "Message Received",
                label: function label(e) {
                    return "Conversation: ".concat(e.conversationId)
                },
                nonInteraction: !0
            },
            "message:sent": {
                action: "Message Sent",
                label: function label(e) {
                    return "Conversation: ".concat(e.conversationId)
                },
                nonInteraction: !1
            },
            startConversation: {
                action: "Chat Started",
                label: function label(e) {
                    return "Conversation: ".concat(e.conversationId)
                },
                nonInteraction: !1
            },
            emailCapture: {
                action: "Email Captured",
                label: function label(e) {
                    return e.data.playbookId ? "Playbook ID: ".concat(e.data.playbookId) : ""
                },
                nonInteraction: !1
            },
            phoneCapture: {
                action: "Phone Number Captured",
                label: function label(e) {
                    return e.playbookId ? "Playbook ID: ".concat(e.playbookId) : ""
                },
                nonInteraction: !1
            },
            "scheduling:meetingBooked": {
                action: "Meeting Booked",
                label: function label(e) {
                    return e.playbookId ? "Playbook ID: ".concat(e.playbookId) : ""
                },
                nonInteraction: !1
            }
        },
        yr = function resolveEventLabel(e, t) {
            return vr[e].label ? vr[e].label(t) : ""
        },
        _r = function getUniversalAnalyticsGA() {
            return window.GoogleAnalyticsObject ? window[window.GoogleAnalyticsObject] : window.ga ? window.ga : null
        };

    function configCorrectID(e) {
        var t = function getListWithGA4Ids(e) {
            var t = [];
            if (e.length > 0)
                for (var n = 0; n < e.length; n++) e[n] && e[n].includes("googletagmanager.com/gtag") && e[n].indexOf("G-") > -1 && t.push(e[n].split("?")[1].split("&")[0].split("=")[1]);
            return t
        }(function getScriptsByTagName() {
            var e = document.getElementsByTagName("script");
            return wr(function(e) {
                return e.src
            }, _toConsumableArray(e))
        }());
        return t.length > 0 ? t.some(function(t) {
            return t === e
        }) ? e : t[0] : null
    }
    var br = function hasUniversalAnalyticsGA() {
            return null !== _r()
        },
        Er = function hasLegacyGa() {
            return !! function getLegacyGa() {
                return window._gaq
            }()
        },
        xr = function hasGtag(e) {
            return !! function getGtag(e) {
                if (window.gtag) return window.gtag;
                if (window.dataLayer) {
                    var t = configCorrectID(e);
                    return w(t) ? null : (window.dataLayer = window.dataLayer || [], window.gtag = function() {
                        window.dataLayer.push(arguments)
                    }, window.gtag || null)
                }
                return null
            }(e)
        },
        Ar = function getNamespacedHitType(e, t) {
            var n = function getTrackerName(e) {
                var t = _r();
                if (t && t.getAll) {
                    var n = t.getAll(),
                        r = st(function(t) {
                            return t.get("trackingId") === e
                        }, n);
                    if (r) return r.get("name");
                    if (n.length > 0 && n[0].get) return n[0].get("name")
                }
                return null
            }(e);
            return n ? "".concat(n, ".").concat(t) : n
        },
        Sr = function sendUAEvent(e, t, n) {
            _r()(Ar(e, "send"), "event", {
                eventCategory: "Drift Widget",
                eventAction: vr[t].action,
                eventLabel: yr(t, n),
                nonInteraction: vr[t].nonInteraction
            })
        },
        Or = function GAPassThrough(e, t, n) {
            var r = n ? n.trim().toUpperCase() : "",
                o = br(),
                i = xr(r),
                a = Er();
            (o || a || i) && ("UA" === r.substring(0, 2) && br() ? Sr(r, e, t) : i ? function sendGA4Event(e, t, n) {
                var r = {
                    event_category: "Drift Widget",
                    event_label: yr(t, n),
                    non_interaction: vr[t].nonInteraction
                };
                e && (r.send_to = e), window.gtag("event", vr[t].action, r)
            }(r, e, t) : br() ? Sr(r, e, t) : a && function sendLegacyEvent(e, t) {
                window._gaq.push(["_trackEvent", "Drift Widget", vr[e].action, yr(e, t), void 0, vr[e].nonInteraction])
            }(e, t))
        },
        kr = function() {
            ! function attachListeners(e) {
                var t = e.trackingName,
                    n = e.enabledEventMappings,
                    r = void 0 === n ? {} : n,
                    o = e.individualEventsEnabled,
                    i = void 0 !== o && o;
                Object.keys(vr).forEach(function attachListener(e) {
                    i && !r[e] || window.drift && window.drift("on", e, function(n) {
                        return Or(e, n, t)
                    })
                })
            }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
        },
        Ir = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee2() {
                var e, t, n, r, o, a, s;
                return i.a.wrap(function _callee2$(c) {
                    for (;;) switch (c.prev = c.next) {
                        case 0:
                            if (e = "hsUTKVisitor", t = window._hsq) {
                                c.next = 4;
                                break
                            }
                            return c.abrupt("return", null);
                        case 4:
                            t.push(function() {
                                var t = _asyncToGenerator(i.a.mark(function _callee(t) {
                                    var n;
                                    return i.a.wrap(function _callee$(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (t) {
                                                    r.next = 2;
                                                    break
                                                }
                                                return r.abrupt("return", null);
                                            case 2:
                                                if (n = g(null, ["utk", "visitor"], t)) {
                                                    r.next = 5;
                                                    break
                                                }
                                                return r.abrupt("return", null);
                                            case 5:
                                                n && Dn(e, n);
                                            case 6:
                                            case "end":
                                                return r.stop()
                                        }
                                    }, _callee)
                                }));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()), n = Date.now(), r = 150, o = !1;
                        case 8:
                            if (o) {
                                c.next = 19;
                                break
                            }
                            return c.next = 11, ve.a.get(e);
                        case 11:
                            if (a = c.sent, s = Date.now() - n, !a) {
                                c.next = 16;
                                break
                            }
                            return ve.a.remove(e), c.abrupt("return", a);
                        case 16:
                            s > r && (o = !0), c.next = 8;
                            break;
                        case 19:
                            return c.abrupt("return", null);
                        case 20:
                        case "end":
                            return c.stop()
                    }
                }, _callee2)
            }));
            return function tryGetHubspotIdentity() {
                return e.apply(this, arguments)
            }
        }();

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var Tr = new(function() {
            function PageTitleNotifier() {
                _classCallCheck(this, PageTitleNotifier), this._notificationCount = 0, this._originalPageTitle = void 0, this._blinkInterval = void 0, this._pageTitleNotificationMsg = void 0, this._currentPageTitle = void 0, this._neverUpdatedTitle = !0
            }
            return function _createClass(e, t, n) {
                return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
            }(PageTitleNotifier, [{
                key: "_startUpdateInterval",
                value: function _startUpdateInterval() {
                    var e = this;
                    clearInterval(this._blinkInterval);
                    var t = setInterval(function() {
                        return e._onBlink()
                    }, 1e3);
                    this._blinkInterval = t
                }
            }, {
                key: "_stopUpdateInterval",
                value: function _stopUpdateInterval() {
                    clearInterval(this._blinkInterval), this._blinkInterval = null
                }
            }, {
                key: "_getPageTitle",
                value: function _getPageTitle() {
                    return window && window.document ? window.document.title : null
                }
            }, {
                key: "_setPageTitle",
                value: function _setPageTitle(e) {
                    window.document.title = e
                }
            }, {
                key: "_updatePageTitle",
                value: function() {
                    var e = _asyncToGenerator(i.a.mark(function _callee() {
                        var e;
                        return i.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = "(".concat(this._notificationCount, ") ").concat(this._pageTitleNotificationMsg || "New Messages", "!"), this._setPageTitle(e), this._currentPageTitle = e, this._neverUpdatedTitle = !1;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee, this)
                    }));
                    return function _updatePageTitle() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "_clearPageTitle",
                value: function _clearPageTitle() {
                    this._neverUpdatedTitle && (this._originalPageTitle = this._getPageTitle()), this._setPageTitle(this._originalPageTitle), this._currentPageTitle = ""
                }
            }, {
                key: "_onBlink",
                value: function _onBlink() {
                    var e = this._getPageTitle(),
                        t = -1 === e.indexOf("New Messages");
                    e !== this._currentPageTitle ? (t && (this._originalPageTitle = e), this._updatePageTitle()) : this._clearPageTitle()
                }
            }, {
                key: "update",
                value: function update(e, t) {
                    (function isBotCrawler() {
                        return !!navigator.userAgent && new RegExp("(googlebot|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)", "i").test(navigator.userAgent)
                    })() || (this._notificationCount = e, this._pageTitleNotificationMsg = null === t || void 0 === t ? void 0 : t.pageTitleNotificationMsg, this._notificationCount < 1 ? (this._stopUpdateInterval(), this._clearPageTitle()) : this._startUpdateInterval())
                }
            }, {
                key: "disconnect",
                value: function disconnect() {
                    this._notificationCount = 0
                }
            }]), PageTitleNotifier
        }()),
        Cr = _curry2(function indexOf(e, t) {
            return "function" !== typeof t.indexOf || _(t) ? _indexOf(t, e, 0) : t.indexOf(e)
        }),
        Pr = function getUserLocale(e) {
            var t = Dr(e);
            return Rr(t)
        },
        Rr = function normalizeLanguage(e) {
            if (!e) return e;
            if (-1 === e.indexOf("-") || e.toLowerCase() !== e) return e;
            var t = e.split("-");
            return "".concat(t[0], "-").concat(t[1].toUpperCase())
        },
        Dr = function getLanguage(e) {
            if ("undefined" !== typeof e && e.navigator) {
                if (!de(e.navigator.languages)) return e.navigator.languages[0];
                if (e.navigator.language) return e.navigator.language;
                if (e.navigator.userLanguage) return e.navigator.userLanguage;
                if (e.navigator.browserLanguage) return e.navigator.browserLanguage;
                if (e.navigator.systemLanguage) return e.navigator.systemLanguage
            }
            return "en-US"
        },
        Lr = _curry2(function memoizeWith(e, t) {
            var n = {};
            return _arity(t.length, function() {
                var r = e.apply(this, arguments);
                return _has(r, n) || (n[r] = t.apply(this, arguments)), n[r]
            })
        }),
        Fr = function memoizeUntil(e, t) {
            var n = !1;
            return Lr(function timeBased() {
                return setTimeout(function() {
                    return n = !0
                }, t), n && setTimeout(function() {
                    return n = !1
                }, 0), Zt(n).toString()
            }, e)
        },
        Br = {
            "generate-new-content-box": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee(e) {
                    var t;
                    return i.a.wrap(function _callee$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.abrupt("return", qt(t));
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee)
                }));
                return function generateNewContentBox(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "generate-new-frame": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee2(e) {
                    var t;
                    return i.a.wrap(function _callee2$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.abrupt("return", wt({
                                    name: t.name,
                                    height: t.height,
                                    width: t.width,
                                    path: t.path,
                                    alignment: t.alignment,
                                    insertBefore: t.insertBefore,
                                    verticalOffset: t.verticalOffset,
                                    horizontalOffset: t.horizontalOffset
                                }));
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee2)
                }));
                return function generateNewFrame(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "show-frame-to-screen-reader": function showFrameToScreenReader(e) {
                var t = e.data,
                    n = t.isMobileTakeover,
                    r = void 0 !== n && n;
                gt(t), r && function removeMobileFocusLoop() {
                    for (var e, t, n, r = null !== (e = null === (t = document) || void 0 === t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.querySelectorAll("[data-drift-widget-takeover]")) && void 0 !== e ? e : [], o = 0, i = r.length; o < i; o++) {
                        var a, s = r[o];
                        (null !== (a = s.getAttribute("aria-hidden")) && void 0 !== a ? a : null) && s.removeAttribute("aria-hidden"), s.removeAttribute("data-drift-widget-takeover")
                    }
                }()
            },
            "hide-frame-from-screen-reader": function hideFrameFromScreenReader(e) {
                var t = e.data,
                    n = t.isMobileTakeover,
                    r = void 0 !== n && n,
                    o = t.currentEl,
                    i = void 0 === o ? null : o;
                mt(t), r && function setMobileFocusLoop() {
                    var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        o = null !== (e = null === (t = document) || void 0 === t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.querySelector(r)) && void 0 !== e ? e : null;
                    if (o) {
                        var i = ["script"];
                        do {
                            for (var a, s, c, u, f = null !== (s = null === (c = document) || void 0 === c ? void 0 : null === (u = c.body) || void 0 === u ? void 0 : u.childNodes) && void 0 !== s ? s : [], l = 0, d = f.length; l < d; l++) {
                                var p, h = null !== (p = f[l]) && void 0 !== p ? p : null;
                                if (h) {
                                    var m = -1 !== Cr(h.nodeName.toLowerCase(), i) || !w(j[h.id]),
                                        g = h.isEqualNode(o);
                                    !m && !g && h.setAttribute && (h.setAttribute("data-drift-widget-takeover", "true"), h.setAttribute("aria-hidden", "true"))
                                }
                            }
                            o = o.parentNode
                        } while (o !== (null === (a = document) || void 0 === a ? void 0 : a.body))
                    }
                }(i)
            },
            "kill-announcement-frames": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee3() {
                    return i.a.wrap(function _callee3$(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, pt();
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, _callee3)
                }));
                return function killAnnouncementFrames() {
                    return e.apply(this, arguments)
                }
            }(),
            "kill-frame": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee4(e) {
                    var t;
                    return i.a.wrap(function _callee4$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.abrupt("return", dt({
                                    name: t.name
                                }));
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee4)
                }));
                return function killFrame(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "reload-all-frames": function reloadAllFrames() {
                ei(),
                    function resetFrames() {
                        Object.keys(Y).forEach(function(e) {
                            var t = document.querySelector(".drift-frame-".concat(e, " iframe"));
                            t && (t.src = t.src)
                        })
                    }()
            },
            "get-integration-data": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee5(e) {
                    var t;
                    return i.a.wrap(function _callee5$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.next = 3, Rn(t);
                            case 3:
                                return n.abrupt("return", n.sent);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }, _callee5)
                }));
                return function getIntegrationData(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "get-cookie-value": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee6(e) {
                    var t;
                    return i.a.wrap(function _callee6$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.abrupt("return", ve.a.get(t.name));
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee6)
                }));
                return function getCookieValue(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "get-host-cookies": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee7() {
                    return i.a.wrap(function _callee7$(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve.a.get());
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, _callee7)
                }));
                return function getHostCookies() {
                    return e.apply(this, arguments)
                }
            }(),
            "hubspot-hsq-identity": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee8() {
                    return i.a.wrap(function _callee8$(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ir();
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, _callee8)
                }));
                return function hubspotHsqIdentity() {
                    return e.apply(this, arguments)
                }
            }(),
            storage: function() {
                var e = _asyncToGenerator(i.a.mark(function _callee9(e) {
                    var t, n, r, o, a;
                    return i.a.wrap(function _callee9$(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.data, n = t.type, r = t.method, o = t.args, a = "localStorage" === n ? mn : gn, i.abrupt("return", a[r].apply(a, _toConsumableArray(o)));
                            case 4:
                            case "end":
                                return i.stop()
                        }
                    }, _callee9)
                }));
                return function storage(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "handle-host-integration": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee10(e) {
                    var t, n, r;
                    return i.a.wrap(function _callee10$(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = e.data, n = t.config, "googleAnalyticsSettings" === (r = t.type) && kr(n), "driftEngageVerification" === r && hr(n), "driftEngage" === r && mr(n), o.abrupt("return", r);
                            case 6:
                            case "end":
                                return o.stop()
                        }
                    }, _callee10)
                }));
                return function handleHostIntegration(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "set-cookie": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee11(e) {
                    var t, n, r, o, a;
                    return i.a.wrap(function _callee11$(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.data, n = t.name, r = t.value, o = t.options, a = void 0 === o ? {} : o, i.abrupt("return", Dn(n, r, a));
                            case 3:
                            case "end":
                                return i.stop()
                        }
                    }, _callee11)
                }));
                return function setCookie(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "clear-cookie": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee12(e) {
                    var t, n, r, o;
                    return i.a.wrap(function _callee12$(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.data, n = t.name, r = t.options, o = void 0 === r ? {} : r, i.abrupt("return", ve.a.remove(n, o));
                            case 3:
                            case "end":
                                return i.stop()
                        }
                    }, _callee12)
                }));
                return function clearCookie(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "clear-cookies": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee13(e) {
                    var t, n, r, o;
                    return i.a.wrap(function _callee13$(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.data, n = t.names, r = t.options, o = void 0 === r ? {} : r, i.abrupt("return", Promise.all(n.map(function(e) {
                                    return ve.a.remove(e, o)
                                })));
                            case 3:
                            case "end":
                                return i.stop()
                        }
                    }, _callee13)
                }));
                return function clearCookies(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "get-host-referrer": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee14() {
                    return i.a.wrap(function _callee14$(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", document.referrer);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, _callee14)
                }));
                return function getHostReferrer() {
                    return e.apply(this, arguments)
                }
            }(),
            "get-scrollable-height": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee15() {
                    return i.a.wrap(function _callee15$(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", document.documentElement ? document.documentElement.scrollHeight : 0);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, _callee15)
                }));
                return function getScrollableHeight() {
                    return e.apply(this, arguments)
                }
            }(),
            "access-host-window": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee16(e) {
                    var t;
                    return i.a.wrap(function _callee16$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.abrupt("return", Object.assign(window, {})[t.key]);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee16)
                }));
                return function accessHostWindow(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "get-window-context": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee17() {
                    var e, t, n, r, o, a;
                    return i.a.wrap(function _callee17$(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return e = window.scrollX || window.pageXOffset, t = window.scrollY || window.pageYOffset, n = rt(), r = n ? n.window : window, o = n ? n.document : window.document, a = Fr(function() {
                                    return {
                                        location: r.location,
                                        title: o.title,
                                        referrer: o.referrer,
                                        userAgent: r.navigator.userAgent,
                                        locale: Pr(r),
                                        innerHeight: r.innerHeight,
                                        innerWidth: r.innerWidth,
                                        scrollY: t,
                                        scrollX: e,
                                        drift_page_view_started: window.drift_page_view_started,
                                        drift_session_started: window.drift_session_started
                                    }
                                }, 5e3), i.abrupt("return", a());
                            case 7:
                            case "end":
                                return i.stop()
                        }
                    }, _callee17)
                }));
                return function getWindowContext() {
                    return e.apply(this, arguments)
                }
            }(),
            "set-value-on-host-window": function setValueOnHostWindow(e) {
                var t = e.data,
                    n = t.key,
                    r = t.value;
                window[n] = r
            },
            "create-event": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee18(e) {
                    var t;
                    return i.a.wrap(function _callee18$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if ((t = e.data).name) {
                                    n.next = 3;
                                    break
                                }
                                return n.abrupt("return", null);
                            case 3:
                                return n.abrupt("return", tt(t.name, t.meta));
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }, _callee18)
                }));
                return function createEvent(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "add-host-event-listener": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee19(e) {
                    var t, n;
                    return i.a.wrap(function _callee19$(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if ((t = e.data).id) {
                                    r.next = 3;
                                    break
                                }
                                return r.abrupt("return", null);
                            case 3:
                                return n = function eventFiredHandler() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = {};
                                    t.eventProperties && t.eventProperties.length && t.eventProperties.forEach(function(t) {
                                        return n[t] = e[t]
                                    }), me(t.handler) && t.handler(n)
                                }, window.drift_event_listeners[t.id] = n, r.abrupt("return", document.addEventListener(t.event, n));
                            case 6:
                            case "end":
                                return r.stop()
                        }
                    }, _callee19)
                }));
                return function addHostEventListener(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "remove-host-event-listener": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee20(e) {
                    var t;
                    return i.a.wrap(function _callee20$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, document.removeEventListener(t.event, window.drift_event_listeners[t.id]), delete window.drift_event_listeners[t.id];
                            case 3:
                            case "end":
                                return n.stop()
                        }
                    }, _callee20)
                }));
                return function removeHostEventListener(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "play-host-notification": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee21(e) {
                    var t;
                    return i.a.wrap(function _callee21$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.abrupt("return", An(t));
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee21)
                }));
                return function playHostNotification(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "update-frame-vertical-offset": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee22(e) {
                    var t;
                    return i.a.wrap(function _callee22$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, _t(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee22)
                }));
                return function updateFrameVerticalOffset(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "update-frame-horizontal-offset": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee23(e) {
                    var t;
                    return i.a.wrap(function _callee23$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, yt(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee23)
                }));
                return function updateFrameHorizontalOffset(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "destroy-drift": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee24() {
                    return i.a.wrap(function _callee24$(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                ht(), window.drift = void 0;
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, _callee24)
                }));
                return function destroyDrift() {
                    return e.apply(this, arguments)
                }
            }(),
            "plugin-action-dispatch": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee25(e) {
                    var t;
                    return i.a.wrap(function _callee25$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, ee({
                                    name: "chat",
                                    message: t,
                                    topic: "CONDUCTOR:action-from-plugin"
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee25)
                }));
                return function pluginActionDispatch(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "takeover:state-snap-shot": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee26(e) {
                    var t;
                    return i.a.wrap(function _callee26$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, ee({
                                    name: "takeover",
                                    message: {
                                        state: t.state
                                    },
                                    topic: "CONDUCTOR:state-snap-shot"
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee26)
                }));
                return function takeoverStateSnapShot(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "emailCapture:state-snap-shot": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee27(e) {
                    var t;
                    return i.a.wrap(function _callee27$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, ee({
                                    name: "emailCapture",
                                    message: {
                                        state: t.state
                                    },
                                    topic: "CONDUCTOR:state-snap-shot"
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee27)
                }));
                return function emailCaptureStateSnapShot(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "slider:state-snap-shot": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee28(e) {
                    var t;
                    return i.a.wrap(function _callee28$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, ee({
                                    name: "slider",
                                    message: {
                                        state: t.state
                                    },
                                    topic: "CONDUCTOR:state-snap-shot"
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee28)
                }));
                return function sliderStateSnapShot(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "request-state-snap-shot": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee29(e) {
                    var t;
                    return i.a.wrap(function _callee29$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, ee({
                                    name: "controller",
                                    message: {
                                        name: t.name
                                    },
                                    topic: "CONDUCTOR:request-state-from-controller"
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee29)
                }));
                return function requestStateSnapShot(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "controller:action-dispatch": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee30(e) {
                    var t;
                    return i.a.wrap(function _callee30$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (t = e.data, window.drift_display_mode !== kn.LANDING_PAGE) {
                                    n.next = 4;
                                    break
                                }
                                return ee({
                                    name: N.LANDING_PAGE,
                                    message: {
                                        action: t.action
                                    },
                                    topic: "CONDUCTOR:action-from-controller"
                                }), n.abrupt("return");
                            case 4:
                                ee({
                                    name: N.CHAT,
                                    message: {
                                        action: t.action
                                    },
                                    topic: "CONDUCTOR:action-from-controller"
                                });
                            case 5:
                            case "end":
                                return n.stop()
                        }
                    }, _callee30)
                }));
                return function controllerActionDispatch(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "chat:focus-change": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee31(e) {
                    return i.a.wrap(function _callee31$(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e.data, Rt();
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, _callee31)
                }));
                return function chatFocusChange(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "chat:action-dispatch": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee32(e) {
                    var t;
                    return i.a.wrap(function _callee32$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, ee({
                                    name: "controller",
                                    message: {
                                        action: t.action
                                    },
                                    topic: "CONDUCTOR:action-from-chat"
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee32)
                }));
                return function chatActionDispatch(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "reset-controller-size": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee33() {
                    return i.a.wrap(function _callee33$(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                Tt({
                                    width: "".concat(ye, "px"),
                                    name: "controller"
                                }), St({
                                    height: "".concat(ye, "px"),
                                    name: "controller",
                                    max: !1
                                });
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, _callee33)
                }));
                return function resetControllerSize() {
                    return e.apply(this, arguments)
                }
            }(),
            "reset-page-view": function resetPageView() {
                window.drift_page_view_started = (new Date).getTime() / 1e3
            },
            "page-notification-update": function pageNotificationUpdate(e) {
                var t = e.data;
                Tr.update(t.totalUnreadMessages, {
                    pageTitleNotificationMsg: t.pageTitleNotificationMsg
                })
            },
            "get-frame-height": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee34(e) {
                    var t;
                    return i.a.wrap(function _callee34$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.abrupt("return", Et(t));
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee34)
                }));
                return function getFrameHeight(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "set-frame-width": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee35(e) {
                    var t;
                    return i.a.wrap(function _callee35$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, Tt(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee35)
                }));
                return function setFrameWidth(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "set-frame-dimensions": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee36(e) {
                    var t;
                    return i.a.wrap(function _callee36$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, xt(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee36)
                }));
                return function setFrameDimensions(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "set-frame-height": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee37(e) {
                    var t;
                    return i.a.wrap(function _callee37$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, St(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee37)
                }));
                return function setFrameHeight(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "set-frame-width-and-height": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee38(e) {
                    var t;
                    return i.a.wrap(function _callee38$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, Ct(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee38)
                }));
                return function setFrameWidthAndHeight(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "align-frames": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee39(e) {
                    var t;
                    return i.a.wrap(function _callee39$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, bt(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee39)
                }));
                return function alignFrames(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "focus-frame": function focusFrame(e) {
                var t = e.data;
                t.name === N.CONTROLLER ? ee({
                    name: "controller",
                    message: {},
                    topic: "CONDUCTOR:focusWidgetIcon"
                }) : function focusFrame(e) {
                    var t = e.name;
                    Y[t] || ce(new Error("Attempting to get height on an unmounted frame: ".concat(t))), Y[t].$frame.focus()
                }(t)
            },
            "toggle-widget-controller": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee40(e) {
                    var t, n, r, o;
                    return i.a.wrap(function _callee40$(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                if (t = e.data, n = t.chatOpen, r = t.hasActiveConversation, o = t.isChatTakeover, jt(), r && Ut(), zt(n, r), !o) {
                                    i.next = 7;
                                    break
                                }
                                return i.abrupt("return");
                            case 7:
                                Nt(n), n ? r ? Mt() : Lt() : St({
                                    name: "chat",
                                    height: xe
                                });
                            case 9:
                            case "end":
                                return i.stop()
                        }
                    }, _callee40)
                }));
                return function toggleWidgetController(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "remove-chat-takeover": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee41(e) {
                    var t;
                    return i.a.wrap(function _callee41$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, Ht(t);
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee41)
                }));
                return function removeChatTakeover(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "slider:showDetails": function sliderShowDetails() {
                ee({
                    name: "slider",
                    message: {},
                    topic: "CONDUCTOR:showSliderDetails"
                }), ee({
                    name: "controller",
                    message: {},
                    topic: "CONDUCTOR:disableWidgetIcon"
                })
            },
            "slider:dismiss": function sliderDismiss() {
                var e;
                (null === (e = window._driftFrames) || void 0 === e ? void 0 : e.slider) && ee({
                    name: "slider",
                    message: {},
                    topic: "slider:dismiss"
                })
            },
            "remove-active-campaign": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee42(e) {
                    var t;
                    return i.a.wrap(function _callee42$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = e.data, ee({
                                    name: "controller",
                                    message: {
                                        name: t.name
                                    },
                                    topic: "CONDUCTOR:remove-active-campaign"
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, _callee42)
                }));
                return function removeActiveCampaign(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "send-usage-metric-event": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee43(e) {
                    var t;
                    return i.a.wrap(function _callee43$(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.data, n.next = 3, ee({
                                    name: "controller",
                                    message: t,
                                    topic: "CONDUCTOR:send-usage-metric-event"
                                });
                            case 3:
                            case "end":
                                return n.stop()
                        }
                    }, _callee43)
                }));
                return function sendUsageMetricEvent(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "set-responsive-frame-width": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee44(e) {
                    var t, n, r;
                    return i.a.wrap(function _callee44$(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                t = e.data, n = t.name, r = t.defaultWidth, Lt({
                                    name: n,
                                    defaultWidth: r
                                });
                            case 3:
                            case "end":
                                return o.stop()
                        }
                    }, _callee44)
                }));
                return function setResponsiveFrameWidth(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "drift-api:open-chat": function driftApiOpenChat() {
                window.drift("openChat")
            },
            "drift-api:schedule-meeting": function driftApiScheduleMeeting(e) {
                var t = e.data;
                window.drift("scheduleMeeting", t.scheduleMeetingWith, t.options)
            },
            "redirect-to-url": function redirectToUrl(e) {
                var t = e.data;
                (de(t.url) || 0 === t.url.trim().indexOf("javascript:")) && se(["cannot redirect - invalid redirect url specified"]), window.location.href = t.url
            },
            "attach-form-listener-to-dom": function() {
                var e = _asyncToGenerator(i.a.mark(function _callee45(e) {
                    var t, n, r;
                    return i.a.wrap(function _callee45$(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                if (t = e.data, !Jn(t.fastlaneTestModeSettings)) {
                                    o.next = 5;
                                    break
                                }
                                return o.next = 4, pr({
                                    testMode: t.fastlaneTestModeSettings,
                                    formSelector: "#".concat(t.fastlaneTestModeSettings.formId),
                                    formType: t.fastlaneTestModeSettings.formType
                                });
                            case 4:
                                return o.abrupt("return");
                            case 5:
                                if (!t || !t.fastLaneCampaigns) {
                                    o.next = 20;
                                    break
                                }
                                n = 0;
                            case 7:
                                if (!(n < t.fastLaneCampaigns.length)) {
                                    o.next = 20;
                                    break
                                }
                                return o.prev = 8, r = Vn(t.fastLaneCampaigns[n].campaignId, t.fastLaneCampaigns[n].fastlaneSettings), o.next = 12, pr(r);
                            case 12:
                                o.next = 17;
                                break;
                            case 14:
                                o.prev = 14, o.t0 = o.catch(8), console.warn(o.t0);
                            case 17:
                                n++, o.next = 7;
                                break;
                            case 20:
                            case "end":
                                return o.stop()
                        }
                    }, _callee45, null, [
                        [8, 14]
                    ])
                }));
                return function attachFormListenerToDom(t) {
                    return e.apply(this, arguments)
                }
            }(),
            "sc::render-conversation-preview": function scRenderConversationPreview(e) {
                var t = e.data;
                yo.processCommand({
                    event: "render-conversation-preview",
                    message: t.messagePreviewText,
                    name: "widgetv2"
                })
            },
            "sc::send-total-unread-messages-count": function scSendTotalUnreadMessagesCount(e) {
                var t = e.data;
                yo.processCommand({
                    event: "send-total-unread-messages-count",
                    totalUnreadMessages: t.totalUnreadMessages,
                    name: "widgetv2"
                })
            },
            "sc::open-chat": function scOpenChat() {
                yo.processCommand({
                    event: "open-chat",
                    name: "widgetv2"
                })
            },
            "sc::close-chat": function scCloseChat() {
                yo.processCommand({
                    event: "close-chat",
                    name: "widgetv2"
                })
            },
            "sc::dismiss-chat": function scDismissChat() {
                window.drift("hideChat")
            }
        };

    function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var n, r, o = function _objectWithoutPropertiesLoose(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var Wr = le(function() {
            var e;
            Pe() && (null === (e = window.drift) || void 0 === e ? void 0 : e.ready) && Pt() && ee({
                name: "chat",
                topic: "parent-scroll",
                message: {},
                waitForResponse: !1
            })
        }, 200),
        Mr = [{
            event: "popstate",
            handler: le(function onPopState() {
                ee({
                    name: "controller",
                    topic: "host-hash-change",
                    message: {
                        hash: window.location.hash
                    }
                })
            }, 200, !0)
        }, {
            event: "message",
            handler: function onPostMessage(e) {
                if (!de(e.data) && !de(e.data.target)) switch (e.data.target) {
                    case "drift.stageFormData":
                        var t = e.data.formData;
                        return void qn(t);
                    case "drift.commitFormData":
                        return void Hn(e.data);
                    case "drift.collectFormData":
                        var n = e.data,
                            r = n.formData,
                            o = _objectWithoutProperties(n, ["formData"]);
                        return void Gn(r, o);
                    case "drift.parentScroll":
                        Wr()
                }
            }
        }, {
            event: "scroll",
            handler: le(Wr, 1e3)
        }],
        Nr = function setupFrameListeners() {
            Object.keys(Br).forEach(function(e) {
                Q({
                    topic: e,
                    handler: Br[e]
                })
            })
        },
        jr = function setupHostListeners() {
            Mr.forEach(function(e) {
                var t = e.event,
                    n = e.handler;
                ("scroll" !== t || Pe()) && ("popstate" !== t || !De() && ! function isLegacyEdgeBrowser() {
                    return /Edge\/\d./i.test(navigator.userAgent)
                }() ? window.addEventListener(t, n) : function detectHashChangeOnMicrosoftLegacyBrowser(e) {
                    var t = null;
                    window.setInterval(function detectHashChange() {
                        t !== window.location.hash && (t = window.location.hash, e())
                    }, 100)
                }(n))
            })
        };

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _inherits(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && _setPrototypeOf(e, t)
    }

    function _typeof(e) {
        return (_typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" !== typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Ur = function IframeFactoryBase(e) {
        var t = this,
            n = e.frameInstructions,
            r = e.frameCreationOptions;
        _classCallCheck(this, IframeFactoryBase), this._readyFrames = [], this._readyFrameListeners = {}, this._frameInstructions = [], this._frameCreationOptions = {}, this.initialize = function() {
            t.initializeIframes(), t.attachReadyEvents()
        }, this.unload = function() {
            t._frameInstructions = [], t._readyFrames = [], Object.keys(t._readyFrameListeners).forEach(function(e) {
                var n = t._readyFrameListeners[e];
                document.removeEventListener(e, n)
            })
        }, this.generatePathForFrame = function(e, n) {
            var r = {};
            switch (e) {
                case N.CONTROLLER:
                    r = _defineProperty({
                        embedId: t._frameCreationOptions.embedId,
                        eId: t._frameCreationOptions.embedId,
                        region: t.assignRegionForFrame(),
                        forceShow: t._frameCreationOptions.forceShow,
                        skipCampaigns: t._frameCreationOptions.skipCampaigns,
                        sessionId: t._frameCreationOptions.sessionId,
                        sessionStarted: window.drift_session_started,
                        campaignRefreshToken: t._frameCreationOptions.campaignRefreshToken,
                        hideController: window.drift_display_mode !== kn.CHAT,
                        pageLoadStartTime: g(void 0, ["performance", "timing", "responseEnd"], window),
                        mode: g(kn.CHAT, ["drift_display_mode"], window),
                        driftEnableLog: t._frameCreationOptions.frameDebugEnabled || !1,
                        loadStrategy: window.drift_init_options ? window.drift_init_options.loadType : null,
                        secureIframe: nt() || !1,
                        interactionId: t._frameCreationOptions.interactionId
                    }, $, encodeURIComponent(document.location.href));
                    break;
                case N.LANDING_PAGE:
                case N.CHAT:
                    r = {
                        region: t.assignRegionForFrame(),
                        driftEnableLog: t._frameCreationOptions.frameDebugEnabled || !1,
                        pageLoadStartTime: g(void 0, ["performance", "timing", "responseEnd"], window)
                    }
            }
            return t.attachQueryParamsToFrame(n, r)
        }, this.attachReadyEvents = function() {
            t._frameInstructions.forEach(function(e) {
                return t.attachReadyEventForFrame(e.name)
            })
        }, this.setFrameReady = function(e) {
            window.drift["".concat(e, "Ready")] = !0, -1 === t._readyFrames.indexOf(e) && t._readyFrames.push(e)
        }, this.initializeIframes = function() {
            ! function generateFrames(e) {
                e.map(wt)
            }(t._frameInstructions.map(function(e) {
                var n = e.name === N.CONTROLLER ? "core" : "core/".concat(e.name);
                return _objectSpread2(_objectSpread2({}, e), {}, {
                    path: t.generatePathForFrame(e.name, n)
                })
            }))
        }, this.assignRegionForFrame = function() {
            return M("-eu", t._frameCreationOptions.embedId.toLowerCase()) ? q : G
        }, this.attachReadyEventForFrame = function(e) {
            var n = "".concat(e.toUpperCase(), "_READY");
            var r = function onPrivateReadyHandlerFn() {
                this.setFrameReady(e), this._frameInstructions.length !== this._readyFrames.length || window.drift.allFramesReady || tt(Je.ALL_FRAMES_READY)
            }.bind(t);
            document.addEventListener(Je[n], r), t._readyFrameListeners["".concat(Je[n])] = r
        }, this.attachQueryParamsToFrame = function(e, t) {
            for (var n = "?d=1", r = 0; r < Object.keys(t).length; r++) {
                var o = Object.keys(t)[r];
                void 0 !== t[o] && null !== t[o] && (n = n.concat("&".concat(o, "=").concat(t[o])))
            }
            return "".concat(e).concat(n)
        }, this._frameInstructions = n, this._frameCreationOptions = r
    };

    function _createSuper2(e) {
        return function() {
            var t, n = _getPrototypeOf(e);
            if (function isNativeReflectConstruct() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var r = _getPrototypeOf(this).constructor;
                t = Reflect.construct(n, arguments, r)
            } else t = n.apply(this, arguments);
            return _possibleConstructorReturn(this, t)
        }
    }
    var zr = function(e) {
        _inherits(ChatFrameFactory, Ur);
        var t = _createSuper2(ChatFrameFactory);

        function ChatFrameFactory(e) {
            var n;
            return _classCallCheck(this, ChatFrameFactory), (n = t.call(this, {
                frameInstructions: [{
                    name: N.CONTROLLER,
                    height: xe,
                    width: "".concat(ye, "px"),
                    max: !1
                }, {
                    name: N.CHAT,
                    height: xe,
                    width: "".concat(_e, "px"),
                    insertBefore: N.CONTROLLER
                }],
                frameCreationOptions: _objectSpread2({
                    embedId: e.embedId,
                    sessionId: e.sessionId,
                    frameDebugEnabled: e.frameDebugEnabled,
                    campaignRefreshToken: e.campaignRefreshToken
                }, e.initializationOptions)
            })).initialize(), Lt(), n
        }
        return ChatFrameFactory
    }();

    function landingPage_createSuper2(e) {
        return function() {
            var t, n = _getPrototypeOf(e);
            if (function isNativeReflectConstruct() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var r = _getPrototypeOf(this).constructor;
                t = Reflect.construct(n, arguments, r)
            } else t = n.apply(this, arguments);
            return _possibleConstructorReturn(this, t)
        }
    }
    var Gr, qr, Hr = function(e) {
            _inherits(LandingPageFrameFactory, Ur);
            var t = landingPage_createSuper2(LandingPageFrameFactory);

            function LandingPageFrameFactory(e) {
                var n;
                return _classCallCheck(this, LandingPageFrameFactory), (n = t.call(this, {
                    frameInstructions: [{
                        name: N.CONTROLLER,
                        height: xe,
                        width: "".concat(ye, "px"),
                        max: !1,
                        insertAfter: N.LANDING_PAGE
                    }, {
                        name: N.LANDING_PAGE,
                        height: Ee,
                        width: Ee,
                        insertInside: g("", ["initializationOptions", "configuration", "landingPageConfig", "containerId"], e)
                    }],
                    frameCreationOptions: _objectSpread2({
                        embedId: e.embedId,
                        sessionId: e.sessionId,
                        frameDebugEnabled: e.frameDebugEnabled,
                        campaignRefreshToken: e.campaignRefreshToken
                    }, e.initializationOptions)
                })).initialize(), n
            }
            return LandingPageFrameFactory
        }(),
        $r = function IframeFactory(e) {
            var t = this;
            _classCallCheck(this, IframeFactory), this._embedId = void 0, this._sessionId = void 0, this._campaignRefreshToken = void 0, this._frameDebugEnabled = !1, this.generateFramesForMode = function(e, n) {
                var r;
                switch (e) {
                    case kn.CHAT:
                        r = new zr({
                            embedId: t._embedId,
                            sessionId: t._sessionId,
                            campaignRefreshToken: t._campaignRefreshToken,
                            frameDebugEnabled: t._frameDebugEnabled,
                            initializationOptions: n
                        });
                        break;
                    case kn.LANDING_PAGE:
                        r = new Hr({
                            embedId: t._embedId,
                            sessionId: t._sessionId,
                            campaignRefreshToken: t._campaignRefreshToken,
                            frameDebugEnabled: t._frameDebugEnabled,
                            initializationOptions: n
                        })
                }
                return r
            }, this._embedId = e.embedId, this._sessionId = e.sessionId, this._campaignRefreshToken = e.campaignRefreshToken, this._frameDebugEnabled = !!(g("", ["location", "search"], window).indexOf("driftEnableLog") > -1)
        },
        Yr = _curry2(function is(e, t) {
            return null != t && t.constructor === e || t instanceof e
        }),
        Vr = function() {
            function XFindIndex(e, t) {
                this.xf = t, this.f = e, this.idx = -1, this.found = !1
            }
            return XFindIndex.prototype["@@transducer/init"] = P, XFindIndex.prototype["@@transducer/result"] = function(e) {
                return this.found || (e = this.xf["@@transducer/step"](e, -1)), this.xf["@@transducer/result"](e)
            }, XFindIndex.prototype["@@transducer/step"] = function(e, t) {
                return this.idx += 1, this.f(t) && (this.found = !0, e = _reduced(this.xf["@@transducer/step"](e, this.idx))), e
            }, XFindIndex
        }(),
        Xr = _curry2(_dispatchable([], _curry2(function _xfindIndex(e, t) {
            return new Vr(e, t)
        }), function findIndex(e, t) {
            for (var n = 0, r = t.length; n < r;) {
                if (e(t[n])) return n;
                n += 1
            }
            return -1
        })),
        Zr = _curry2(function omit(e, t) {
            for (var n = {}, r = {}, o = 0, i = e.length; o < i;) r[e[o]] = 1, o += 1;
            for (var a in t) r.hasOwnProperty(a) || (n[a] = t[a]);
            return n
        }),
        Jr = n(10),
        Kr = n.n(Jr),
        Qr = "undefined" !== typeof performance && performance,
        eo = Qr && Qr.now ? function() {
            return Qr.now()
        } : function() {
            return Date.now()
        };

    function throwIfEmpty(e) {
        if (!e) throw new Error("name must be non-empty")
    }
    if (Qr && Qr.mark) Gr = function mark(e) {
            throwIfEmpty(e), Qr.mark("start " + e)
        }, qr = function stop(e) {
            throwIfEmpty(e), Qr.mark("end " + e), Qr.measure(e, "start " + e, "end " + e);
            var t = Qr.getEntriesByName(e);
            return t[t.length - 1]
        },
        function getEntries() {
            return Qr.getEntriesByType("measure")
        },
        function clear() {
            Qr.clearMarks(), Qr.clearMeasures()
        };
    else {
        var to = {},
            no = [];
        Gr = function mark(e) {
                throwIfEmpty(e);
                var t = eo();
                to["$" + e] = t
            }, qr = function stop(e) {
                throwIfEmpty(e);
                var t = eo(),
                    n = to["$" + e];
                if (!n) throw new Error("no known mark: " + e);
                var r = {
                    startTime: n,
                    name: e,
                    duration: t - n,
                    entryType: "measure"
                };
                return function insertSorted(e, t) {
                    for (var n, r = 0, o = e.length; r < o;) e[n = r + o >>> 1].startTime < t.startTime ? r = n + 1 : o = n;
                    e.splice(r, 0, t)
                }(no, r), r
            },
            function getEntries() {
                return no
            },
            function clear() {
                to = {}, no = []
            }
    }
    var ro = function startTraceMark(e) {
            Gr(e)
        },
        oo = function stopTraceMark(e) {
            try {
                return qr(e).duration
            } catch (t) {
                return ae({
                    type: "warn",
                    data: ["Tried to stop mark ".concat(e, " that doesn't exist")]
                }), null
            }
        },
        io = function isValidEmbedId(e) {
            return /^[\d\w]{12}(-dev|-eu)?$/gm.test(e)
        },
        ao = (n(19), ["interactive", "complete"]),
        so = ["complete"],
        co = Object.freeze({
            configuration: {},
            defer: !1,
            eager: !1,
            forceShow: !1,
            skipCampaigns: !1,
            hideController: !1,
            loadType: In.DEFAULT,
            mode: kn.CHAT
        }),
        uo = function resolveCampaignRefreshToken() {
            var e = ve.a.get("drift_campaign_refresh"),
                t = e || function setCampaignRefreshCookie() {
                    var e = ie();
                    return Dn("drift_campaign_refresh", e, {
                        expires: new Date(Date.now().valueOf() + 18e5)
                    }), e
                }();
            window.drift_campaign_refresh = t
        },
        fo = function resolveVisitorSession() {
            var e = gn.get("SESSION_STARTED"),
                t = (new Date).getTime() / 1e3,
                n = gn.get("SESSION_ID"),
                r = n || ie();
            n || gn.set("SESSION_ID", r), e || gn.set("SESSION_STARTED", t), window.drift_page_view_started = t, window.drift_session_started = e || t, window.drift_session_id = r
        },
        lo = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee(e, t) {
                var n;
                return i.a.wrap(function _callee$(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (ro("widget_conductor:init"), r.t0 = t.defer, !r.t0) {
                                r.next = 5;
                                break
                            }
                            return r.next = 5, oe(1e3);
                        case 5:
                            document.addEventListener("touchstart", function() {}, !0), window.drift_event_listeners = {}, window.drift_display_mode = t.mode, window.drift.embedId = e, uo(), fo(), Nr(), jr(), n = new $r({
                                embedId: e,
                                sessionId: window.drift_session_id,
                                campaignRefreshToken: window.drift_campaign_refresh
                            }), window.drift_frameFactory = n.generateFramesForMode(t.mode, t), Yr(Object, t.configuration) && !C(t.configuration) && bo(t.configuration), oo("widget_conductor:init");
                        case 17:
                        case "end":
                            return r.stop()
                    }
                }, _callee)
            }));
            return function loadDriftWidget(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        po = function init(e, t) {
            var n = t || {},
                r = window.drift_init_options || {},
                o = _objectSpread2(_objectSpread2({}, n), r),
                i = "Please confirm you are using the correct install snippet: https://gethelp.drift.com/s/article/How-To-Install-Drift-Using-Javascript";
            if ("string" === typeof e)
                if (e && "undefined" !== e.toLowerCase() && "null" !== e.toLowerCase() && "nan" !== e.toLowerCase())
                    if (io(e))
                        if ("object" === typeof o)
                            if (window.drift.hasInitialized) console.warn("Drift has already been initialized.");
                            else {
                                var a = _objectSpread2(_objectSpread2({}, co), o);
                                switch (a.loadType) {
                                    case In.ON_INTERACTIVE:
                                        ho(e, a);
                                        break;
                                    case In.EAGER:
                                        mo(ao, e, a);
                                        break;
                                    case In.DEFAULT:
                                    default:
                                        mo(so, e, a)
                                }
                            } else console.error("Drift init - options must be an object.");
            else console.error("Drift init - invalid embedId format. ".concat(i));
            else console.error("Drift init - invalid embedId.  ".concat(i));
            else console.error("Drift init - embedId must be string. ".concat(i))
        },
        ho = function loadWidgetOnConsistentlyInteractive(e, t) {
            Kr.a.getFirstConsistentlyInteractive().then(function() {
                window.drift.hasInitialized = !0, lo(e, t)
            })
        },
        mo = function loadWidgetOnReadyStates(e, t, n) {
            if (-1 !== e.indexOf(document.readyState) && !window.drift.hasInitialized) return window.drift.hasInitialized = !0, void lo(t, n);
            document.addEventListener("readystatechange", function() {
                -1 === e.indexOf(document.readyState) || window.drift.hasInitialized || (window.drift.hasInitialized = !0, lo(t, n))
            })
        },
        go = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee2() {
                var e, t, n;
                return i.a.wrap(function _callee2$(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2, ee({
                                name: "controller",
                                topic: "get-ready-payload",
                                message: {}
                            });
                        case 2:
                            return e = r.sent, t = e.data, n = void 0 === t ? {} : t, r.abrupt("return", n);
                        case 6:
                        case "end":
                            return r.stop()
                    }
                }, _callee2)
            }));
            return function fetchWidgetReadyPayload() {
                return e.apply(this, arguments)
            }
        }(),
        wo = function isValidEvent(e, t) {
            return -1 === Object.keys(He).map(function(e) {
                return He[e]
            }).indexOf("drift::".concat(e)) ? (console.warn('Drift API - Unknown event "'.concat(e, '".')), !1) : "function" === typeof t || (console.error('Drift API - Missing or invalid function for event "'.concat(e, '".')), !1)
        },
        vo = {},
        yo = new function Cohabitation() {
            var e = this;
            _classCallCheck(this, Cohabitation), this._apps = {}, this.getAppElement = function(t) {
                var n = document.querySelectorAll(e._apps[t].selector);
                return n.length ? n.item(0) : null
            }, this._isSiteConciergeRegistered = function() {
                return e._apps["site-concierge"]
            }, this.commandHandlers = {
                register: function register(t) {
                    e._apps[t.name] ? se(["app already registered"]) : ("site-concierge" === t.name && (window.drift.isCohabiting = !0, window.drift.hide(!0)), e._apps[t.name] = {
                        selector: t.selector
                    }, ae({
                        data: ["new app ".concat(t.name, " registered")]
                    }))
                },
                unregister: function unregister(t) {
                    e._apps[t.name] ? (delete e._apps[t.name], window.drift.isCohabiting = !1, window.drift.api.exitCohabitation(), t.handler()) : se(["app is not registered"])
                },
                open: function open(e) {
                    "user" === e.initiatedBy && (window.drift.hideChat(), window.drift.api.hidePreview())
                },
                "render-conversation-preview": function renderConversationPreview(t) {
                    e._isSiteConciergeRegistered() && window.driftV2.renderConversationPreview(t)
                },
                "send-total-unread-messages-count": function sendTotalUnreadMessagesCount(t) {
                    e._isSiteConciergeRegistered() && window.driftV2.totalUnreadMessagesCount(t)
                },
                "open-chat": function openChat() {
                    e._isSiteConciergeRegistered() && window.driftV2.navigateToPage({
                        path: "/chat"
                    })
                },
                "close-chat": function closeChat() {
                    e._isSiteConciergeRegistered() && window.driftV2.navigateToPage({
                        path: "/"
                    })
                }
            }, this.processCommand = function(t) {
                if (de(t) || !t.name) return !1;
                e.commandHandlers[t.event] && e.commandHandlers[t.event](t)
            }, this._apps = {}
        },
        _o = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee3(e) {
                return i.a.wrap(function _callee3$(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            yo.processCommand(e);
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, _callee3)
            }));
            return function app(t) {
                return e.apply(this, arguments)
            }
        }(),
        bo = function config(e) {
            w(e.iframeMode) || (window.drift_iframe_mode = e.iframeMode), window.drift.controllerReady ? ee({
                name: "controller",
                topic: "trigger-api-event",
                message: {
                    method: "config",
                    args: [e]
                }
            }) : window.drift.q.push(["config", e])
        },
        Eo = function asyncApiMethod(e) {
            return function() {
                e.apply(void 0, arguments)
            }
        }(function() {
            var e = _asyncToGenerator(i.a.mark(function _callee4(e, t) {
                var n, r, o;
                return i.a.wrap(function _callee4$(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (wo(e, t)) {
                                i.next = 2;
                                break
                            }
                            return i.abrupt("return");
                        case 2:
                            if (!(n = "ready" === e) || !window.drift.ready) {
                                i.next = 10;
                                break
                            }
                            return i.next = 6, go();
                        case 6:
                            return r = i.sent, window.drift.q.shift(), t(window.drift.api, r), i.abrupt("return");
                        case 10:
                            o = function eventListener(e) {
                                var r = !!e && !C(e.detail) ? e.detail : window.drift.api;
                                n ? t(window.drift.api, e.detail) : t(r)
                            }, vo[e] || (vo[e] = []), vo[e].push({
                                eventHandler: t,
                                eventListener: o
                            }), document.addEventListener("drift::".concat(e), o);
                        case 14:
                        case "end":
                            return i.stop()
                    }
                }, _callee4)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()),
        xo = function off(e, t) {
            if (wo(e, t) && vo[e]) {
                var n = vo[e],
                    r = Xr(function(e) {
                        return e.eventHandler === t
                    }, n);
                r >= 0 && (document.removeEventListener("drift::".concat(e), n[r].eventListener), n.splice(r, 1))
            }
        },
        Ao = function page(e) {
            window.drift.ready && window.drift.hasInitialized ? ee({
                name: "controller",
                topic: "trigger-api-event",
                message: {
                    method: "page",
                    args: [e]
                }
            }) : ae({
                type: "log",
                data: ["Page event was sent before ready event was fired, dropping event"]
            })
        },
        So = function identify(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            "string" === typeof e ? e && "undefined" !== e.toString() ? "string" === typeof e && e.length > 191 ? console.warn("DRIFT-API - drift.identify userId must be less than 191 characters but instead we got ".concat(e.length, " characters.")) : window.drift.controllerReady ? (t && t.hasProvidedIdentity || (Io(e), Co(t), n && n.userJwt && To(n.userJwt)), window.drift.ready ? Oo(e, t) : ko(e, t, n)) : window.drift.q.push(["identify", e, t, n]) : console.warn("DRIFT-API - drift.identify userId cannot be undefined") : console.warn("DRIFT-API - drift.identify userId must be string but instead we got ".concat(typeof e, "."))
        },
        Oo = function _broadcastIdentifyEvent(e, t) {
            ee({
                name: N.CONTROLLER,
                topic: "trigger-api-event",
                message: {
                    method: "identify",
                    args: [e, t]
                }
            })
        },
        ko = function _broadcastIdentityProvided(e, t, n) {
            ee({
                name: N.CONTROLLER,
                topic: "identity-provided",
                message: {
                    externalId: e,
                    attributes: t,
                    options: n
                }
            })
        },
        Io = function _broadcastIdentifyProvidedId(e) {
            ee({
                name: "controller",
                topic: "identity-provided-id",
                message: {
                    externalId: e
                }
            })
        },
        To = function _broadcastIdentifyProvidedJwt(e) {
            ee({
                name: "controller",
                topic: "identity-provided-jwt",
                message: {
                    userJwt: e
                }
            })
        },
        Co = function _broadcastIdentifyProvidedEmail(e) {
            e && e.email && ee({
                name: "controller",
                topic: "identity-provided-email",
                message: {
                    email: e.email
                }
            })
        },
        Po = function show() {
            ! function _broadcastShowEvent() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && ee({
                    name: "controller",
                    topic: "show-widget-on-ready",
                    message: {}
                }), ee({
                    name: "controller",
                    topic: "trigger-api-event",
                    message: {
                        method: "show",
                        args: []
                    }
                })
            }(!window.drift.ready)
        },
        Ro = function throttledAPICall(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e4;
            return Object(ct.throttle)(t, !0, e)
        }(function() {
            window.drift.ready = !1, ee({
                name: "controller",
                topic: "trigger-api-event",
                message: {
                    method: "reset",
                    args: []
                }
            })
        }),
        Do = function hide() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ! function _broadcastHideEvent() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && ee({
                    name: "controller",
                    topic: "hide-widget-on-ready",
                    message: {}
                }), ee({
                    name: "controller",
                    topic: "trigger-api-event",
                    message: {
                        method: "hide",
                        args: [e]
                    }
                })
            }(!window.drift.ready)
        },
        Lo = function setContext(e) {
            Bo(e),
                function setIframeWindowContext(e) {
                    window.drift_iframe_window_context = e
                }(e)
        },
        Fo = function getWindowPropertyFromPathOrDefault(e, t, n) {
            var r = g(window[t], ["window", t], e);
            return de(r) ? n : r
        },
        Bo = function resizeOnContextResize() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    window: {}
                },
                t = rt(),
                n = Fo(e, "innerHeight", window.innerHeight),
                r = Fo(e, "innerWidth", window.innerWidth),
                o = Fo(t, "innerHeight", window.innerHeight);
            (Fo(t, "innerWidth", window.innerWidth) !== r || o !== n) && (Lt(), Rt(), de(window.drift.offset) || _t(window.drift.offset))
        },
        Wo = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee5() {
                var e;
                return i.a.wrap(function _callee5$(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, ee({
                                name: "controller",
                                topic: "get-cookie-domains",
                                message: {}
                            });
                        case 2:
                            return e = t.sent, t.abrupt("return", e);
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, _callee5)
            }));
            return function getCookieDomains() {
                return e.apply(this, arguments)
            }
        }(),
        Mo = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee6() {
                var e;
                return i.a.wrap(function _callee6$(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (window.drift.hasInitialized) {
                                t.next = 3;
                                break
                            }
                            return ae({
                                data: ["drift.unload: drift is not yet loaded"]
                            }), t.abrupt("return");
                        case 3:
                            return t.next = 5, Wo();
                        case 5:
                            e = t.sent, window.drift_frameFactory.unload(), ei(), ht(), Pn(null === e || void 0 === e ? void 0 : e.data), pn(), dn(), window.drift.embedId = void 0, window.drift.hasInitialized = !1;
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }, _callee6)
            }));
            return function _unload() {
                return e.apply(this, arguments)
            }
        }(),
        No = function unload() {
            Mo()
        },
        jo = function areConnectFormParamsValid(e) {
            if (!e) return !0;
            var t = !1,
                n = function error() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    fe.apply(void 0, ["connectForm(...)"].concat(n)), t = !0
                },
                r = function assertType(e, t, r) {
                    e && typeof e !== t && n("".concat(r, " must be a ").concat(t))
                },
                o = e.campaignId,
                i = e.formSelector,
                a = e.followupUrl;
            r(i, "string", "formSelector"), r(a, "string", "followupUrl"), r(o, "number", "campaignId");
            var s = Object.keys(Zr(["map", "formSelector", "followupUrl", "campaignId", "stageData"], e));
            return s.length > 0 && n("Invalid params:", s.join(",")), !t
        },
        Uo = function connectForm(e) {
            jo(e) && pr(e)
        };
    window.__DRIFT_ENV__ = "PRODUCTION", window.__DRIFT_BUILD_ID__ = "20240404184614-d8190ce", window.__DRIFT_BRANCH__ = "master";
    var zo = document.currentScript,
        Go = function generateAutoLoadFromLegacySnippet() {
            var e = null,
                t = function tryGetEmbedIdFromLegacyUrl(e) {
                    var t = /include\/[^]+\/(.+).js/.exec(e);
                    return t && t[1] ? t[1] : null
                };
            if (zo && zo.src && (e = t(zo.src)), !e) {
                var n = document.getElementsByTagName("script");
                Array.from(n).forEach(function(n) {
                    var r = n.getAttribute("src");
                    if (r && function srcIsLegacy(e) {
                            return e.includes("js.driftt") || e.includes("js.drifttqa") || e.includes("js.driftqa.com/include")
                        }(r)) {
                        var o = (e = t(r)).split(":");
                        2 === o.length && (e = o[0])
                    }
                })
            }
            return e ? [
                ["init", e]
            ] : []
        },
        qo = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee() {
                var e, t, n;
                return i.a.wrap(function _callee$(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            e = window.drift && window.drift.q ? window.drift.q : [], (!(!window.drift || !window.drift.methods) || !(!window.driftt || !window.driftt.methods)) && (t = window.drift || window.driftt, n = Go(), e = [].concat(_toConsumableArray(n), _toConsumableArray(t)), window.drift = void 0, window.driftt = void 0), window.drift = function() {
                                (window.drift.q = window.drift.q || []).push(arguments), tt(Je.CLEAR_EVENT_Q)
                            }, window.drift.q = e, window.drift.iq = [];
                        case 6:
                        case "end":
                            return r.stop()
                    }
                }, _callee)
            }));
            return function createWindowObject() {
                return e.apply(this, arguments)
            }
        }(),
        Ho = Lr(function methodIdentity(e) {
            return Zt(e)
        }, function(e) {
            return function() {
                for (var t = -1 !== Xe.indexOf(e), n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                window.drift.ready || t ? ee({
                    name: "controller",
                    topic: "trigger-api-event",
                    message: {
                        method: e,
                        args: r
                    }
                }) : window.drift.q.push([e].concat(r))
            }
        }),
        $o = function getApiMethod(e) {
            return r[e] ? r[e] : Ho(e)
        },
        Yo = function attachMethodsToObject(e, t) {
            e.forEach(function(e) {
                Ve.indexOf(e) >= 0 || t[e] || (t[e] = $o(e))
            })
        },
        Vo = function attachAPI() {
            window.drift.api = window.drift.api || {}, window.drift.api.sidebar = {
                open: $o("openChat"),
                close: $o("hideChat"),
                toggle: $o("toggleChat")
            }, Yo($e, window.drift.api), window.drift.api.widget = {}, Yo(Ye, window.drift.api.widget), window.drift.load = $o("init"), Yo(Ze, window.drift)
        },
        Xo = function handleQ() {
            var e = function isPreApiReadyMethod(e) {
                    return "init" === e || "on" === e || "off" === e
                },
                t = !!window.drift && !!window.drift.q,
                n = t ? function partitionSort(e, t) {
                    var n = [],
                        r = [];
                    return e.forEach(function(e, o, i) {
                        return (t(e, o, i) ? n : r).push(e)
                    }), [].concat(n, r)
                }(window.drift.q, function(t) {
                    return e(t[0])
                }) : [];
            window.drift.q = _toConsumableArray(n), t && n.forEach(function(t) {
                var n = _toConsumableArray(t),
                    r = n.shift();
                if (window.drift.apiReady || e(r)) {
                    if ("api" === r) return void
                    function resolveApiMethodPath(e) {
                        var t, n = [];
                        e.forEach(function(e) {
                            "string" === typeof e ? n.push(e) : "object" === typeof e && (t = e)
                        });
                        var r = m(n, window.drift.api);
                        r && "function" === typeof r ? r(t) : console.warn("Drift API - unable to find Drift API method for path ".concat(n.join(".")))
                    }(n);
                    var o = $o(r);
                    o && o.apply(void 0, _toConsumableArray(n)), window.drift.q.shift()
                }
            })
        },
        Zo = function handleIQ() {
            de(window.drift.iq) || window.drift.iq.forEach(function(e) {
                tt(e.name, e.payload)
            })
        },
        Jo = function setApiReady() {
            window.drift.apiReady = !0, window.drift.allFramesReady && Xo()
        },
        Ko = function() {
            var e = _asyncToGenerator(i.a.mark(function _callee2() {
                return i.a.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (window.drift.ready = !0, window.drift.allFramesReady || !window.drift.apiReady) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5, Xo();
                        case 5:
                            Zo();
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, _callee2)
            }));
            return function setWidgetReady() {
                return e.apply(this, arguments)
            }
        }(),
        Qo = function setInitReady() {
            ee({
                name: "controller",
                topic: "init-ready",
                message: {},
                waitForResponse: !1
            }), window.drift.allFramesReady = !0, window.drift.apiReady && Xo()
        },
        ei = function resetFramesReady() {
            window.drift.allFramesReady = !1, Object.values(N).forEach(function(e) {
                window.drift["".concat(e, "Ready")] = !1
            })
        },
        ti = function handleInitDebug(e) {
            ee({
                name: "controller",
                topic: "debug-init",
                message: {},
                waitForResponse: !1
            })
        },
        ni = function attachEvents() {
            document.addEventListener(Je.CLEAR_EVENT_Q, Xo), document.addEventListener(He.API_READY, Jo), document.addEventListener(He.READY, Ko), document.addEventListener(Je.ALL_FRAMES_READY, Qo), document.addEventListener(Je.DEBUG_INIT, ti)
        },
        ri = function isHeadlessBrowser() {
            try {
                var e = /headless/i.test(navigator.userAgent);
                return !(/headless=true/i.test(document.location.search) || /liftai/i.test(navigator.userAgent)) && e
            } catch (t) {
                return !1
            }
        };
    ! function polyfillKickoff(e) {
        try {
            [1].includes(1) && e()
        } catch (t) {
            Promise.all([n.e(1).then(n.t.bind(null, 383, 7)), n.e(2).then(n.t.bind(null, 384, 7))]).then(function() {
                e()
            }).catch(function(e) {
                return console.error("Error importing polyfills", e)
            })
        }
    }(function() {
        var e = _asyncToGenerator(i.a.mark(function _callee3() {
            return i.a.wrap(function _callee3$(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (!ri()) {
                            e.next = 3;
                            break
                        }
                        return console.debug("Drift: Skipping Widget since Headless Browser was detected."), e.abrupt("return");
                    case 3:
                        return e.next = 5, qo();
                    case 5:
                        return e.next = 7, Vo();
                    case 7:
                        if (!window.drift_invoked) {
                            e.next = 9;
                            break
                        }
                        return e.abrupt("return");
                    case 9:
                        window.drift_invoked = !0, Xo(), ni();
                    case 12:
                    case "end":
                        return e.stop()
                }
            }, _callee3)
        }));
        return function kickOff() {
            return e.apply(this, arguments)
        }
    }())
}]);