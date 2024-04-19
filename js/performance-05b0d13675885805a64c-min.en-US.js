"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [52730], {
        88290: function(N, w) {
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), w.default = void 0;
            var E;
            (function(f) {
                f.MAIN_CONTENT = 1, f.CONTENT_COLLECTION = 1, f.PAGE = 2, f.SPLASH_PAGE = 3, f.CONTENT_ITEM = 50, f.NOT_FOUND = 100, f.ERROR = 101, f.SEARCH = 102, f.LOCK_SCREEN = 103, f.POPUP_OVERLAY = 104, f.PROTECTED_CONTENT = 105, f.MEMBER_AREA_ACCESS_DENIED = 106, f.PAYWALL = 107, f.SHOW_CART = 200, f.CHECKOUT = 201, f.ORDER_CONFIRMED = 202, f.DONATE = 203, f.CONTRIBUTION_CONFIRMED = 204, f.COMMERCE_CART_V2 = 205, f.SUBSCRIPTION_CONFIRMED = 206, f.ORDER_RECEIVED = 207, f.MEMBERSHIP_CONFIRMED = 208, f.REVIEWS_REQUEST = 209, f.DIGITAL_PRODUCT_COMPOSER_PREVIEW = 210, f.ORDER_STATUS = 211, f.NEWSLETTER_UNSUBSCRIBE = 300, f.COMMERCE_EMAIL_PREVIEW = 301, f.SSO_PAGE = 400
            })(E || (E = {}));
            var L = E;
            w.default = L, N.exports = w.default
        },
        872603: function(N, w) {
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), w.default = void 0;
            var E;
            (function(f) {
                f.EXPIRED = 1, f.PASTDUE = 2, f.TRIAL = 3, f.BETA = 4, f.REMOVED = 5, f.INTERNAL = 6, f.COMPED = 7, f.PAID = 8, f.V5_LINKED = 11, f.ACTIVE_PARKING_PAGE = 12, f.RESOLD = 13, f.RESOLD_GRACE_PERIOD = 14, f.ENTERPRISE = 15
            })(E || (E = {}));
            var L = E;
            w.default = L, N.exports = w.default
        },
        838210: function(N, w, E) {
            var L;
            L = {
                value: !0
            };
            var f = E(769078),
                _ = x(E(872603)),
                X = x(E(88290)),
                O = E(940265);

            function K(d, l, P) {
                return l in d ? Object.defineProperty(d, l, {
                    value: P,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : d[l] = P, d
            }

            function x(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }

            function q(d) {
                for (var l = 1; l < arguments.length; l++) {
                    var P = arguments[l] != null ? arguments[l] : {},
                        B = Object.keys(P);
                    typeof Object.getOwnPropertySymbols == "function" && (B = B.concat(Object.getOwnPropertySymbols(P).filter(function(A) {
                        return Object.getOwnPropertyDescriptor(P, A).enumerable
                    }))), B.forEach(function(A) {
                        K(d, A, P[A])
                    })
                }
                return d
            }
            var V = {
                    "commerce-cart": 1,
                    "v7-user-sites": 1,
                    "v7_1-user-sites": 1,
                    "v7-config": 1,
                    "v7-standalone-config": 1,
                    "v7_1-config": 1,
                    "v7_1-standalone-config": 1
                },
                h = window.Static && window.Static.SQUARESPACE_CONTEXT,
                U = window.top !== window,
                Q = window.Static && window.Static.STANDALONE_CONFIG,
                R = !!h && Object.keys(h).length > 0,
                M = Object.freeze(K({}, X.default.COMMERCE_CART_V2, "commerce-cart"));

            function k() {
                var d = window.location && window.location.pathname || "";
                return !U && /^\/config(\/.*)?$/.test(d)
            }

            function S() {
                return {
                    inFrame: U,
                    templateId: h.templateId || "",
                    impersonatedSession: !!h.impersonatedSession,
                    pageType: typeof h.pageType == "number" ? h.pageType : -1
                }
            }

            function Y() {
                var d = h.website,
                    l = d === void 0 ? {} : d;
                return {
                    authenticUrl: l.authenticUrl || "",
                    cloneable: !!l.cloneable,
                    developerMode: !!l.developerMode,
                    isHstsEnabled: !!l.isHstsEnabled,
                    language: l.language || "",
                    timeZone: l.timeZone || "",
                    websiteId: l.id || "",
                    websiteType: l.websiteType || -1
                }
            }

            function J() {
                var d = h.websiteSettings,
                    l = d === void 0 ? {} : d;
                return {
                    ampEnabled: !!l.ampEnabled
                }
            }

            function W() {
                var d = h.collection,
                    l = d === void 0 ? {} : d;
                return {
                    collectionType: l.type || -1
                }
            }

            function p() {
                return h.hasOwnProperty("templateVersion") ? h.templateVersion.replace(".", "_") : null
            }

            function y(d) {
                var l, P = (l = V[d]) !== null && l !== void 0 ? l : 0;
                return Math.random() <= P
            }

            function m(d) {
                var l = k(),
                    P = Q ? "standalone-config" : "config",
                    B = M[h.pageType],
                    A = {
                        appName: B || "v".concat(d, "-").concat(l ? P : "user-sites"),
                        context: q({}, S(), Y(), J(), W()),
                        captureException: function(se, re) {
                            (0, O.withScope)(function(fe) {
                                fe.setTag("product_area", "rum-collector"), re !== void 0 && fe.setExtra("extras", re), (0, O.captureException)(se)
                            })
                        }
                    };
                if (l) {
                    var te = h.website.siteStatus.value === _.default.INTERNAL,
                        ne = h.authenticatedAccount,
                        ce = ne.createdOn,
                        Ee = ne.id;
                    A.context.isInternal = te, A.context.createdOn = ce, A.context.memberId = Ee
                }
                return y(A.appName) && (A.serviceURL = "https://performance.squarespace.com/api/v1/records"), A
            }

            function C() {
                if (R && h.env === "PRODUCTION") {
                    var d = p();
                    if (d !== null) {
                        var l = m(d);
                        (0, f.init)(l)
                    }
                }
            }
            C()
        },
        940265: function(N, w) {
            Object.defineProperty(w, "__esModule", {
                value: !0
            });

            function E(p, y) {
                for (var m in y) Object.defineProperty(p, m, {
                    enumerable: !0,
                    get: y[m]
                })
            }
            E(w, {
                addBreadcrumb: function() {
                    return q
                },
                captureMessage: function() {
                    return V
                },
                captureException: function() {
                    return h
                },
                captureEvent: function() {
                    return U
                },
                configureScope: function() {
                    return Q
                },
                withScope: function() {
                    return R
                },
                isSentryConnected: function() {
                    return J
                },
                getCurrentScope: function() {
                    return M
                }
            });

            function L(p, y) {
                (y == null || y > p.length) && (y = p.length);
                for (var m = 0, C = new Array(y); m < y; m++) C[m] = p[m];
                return C
            }

            function f(p) {
                if (Array.isArray(p)) return L(p)
            }

            function _(p) {
                if (typeof Symbol != "undefined" && p[Symbol.iterator] != null || p["@@iterator"] != null) return Array.from(p)
            }

            function X() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function O(p) {
                return f(p) || _(p) || K(p) || X()
            }

            function K(p, y) {
                if (p) {
                    if (typeof p == "string") return L(p, y);
                    var m = Object.prototype.toString.call(p).slice(8, -1);
                    if (m === "Object" && p.constructor && (m = p.constructor.name), m === "Map" || m === "Set") return Array.from(m);
                    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return L(p, y)
                }
            }
            var x = function() {},
                q, V, h, U, Q, R, M, k = function(p) {
                    return function(y) {
                        for (var m = arguments.length, C = new Array(m > 1 ? m - 1 : 0), d = 1; d < m; d++) C[d - 1] = arguments[d];
                        var l;
                        return (l = console).log.apply(l, ["[Sentry][".concat(p, "] ").concat(y)].concat(O(C))), "some-error-identifier"
                    }
                },
                S = !1,
                Y = function(p) {
                    var y = p.category,
                        m = p.message;
                    console.log("[Sentry][addBreadcrumb] (".concat(y, ") ").concat(m))
                },
                J = !1;

            function W() {
                return new Proxy({}, {
                    get: function() {
                        return x
                    }
                })
            }
            window.SQUARESPACE_SENTRY ? (J = !0, q = window.SQUARESPACE_SENTRY.addBreadcrumb, V = window.SQUARESPACE_SENTRY.captureMessage, h = window.SQUARESPACE_SENTRY.captureException, U = window.SQUARESPACE_SENTRY.captureEvent, Q = window.SQUARESPACE_SENTRY.configureScope, R = window.SQUARESPACE_SENTRY.withScope, M = window.SQUARESPACE_SENTRY.getCurrentScope) : (console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."), q = S ? Y : x, V = k("captureMessage"), h = k("captureException"), U = k("captureEvent"), M = W, Q = x, R = function() {
                for (var y = arguments.length, m = new Array(y), C = 0; C < y; C++) m[C] = arguments[C];
                var d = m.length === 2 ? m[1] : m[0],
                    l = W();
                return d(l)
            })
        },
        769078: function(N) {
            function w(t, e) {
                (e == null || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function E(t) {
                if (Array.isArray(t)) return t
            }

            function L(t) {
                if (Array.isArray(t)) return w(t)
            }

            function f(t, e, n, r, i, a, o) {
                try {
                    var u = t[a](o),
                        s = u.value
                } catch (c) {
                    n(c);
                    return
                }
                u.done ? e(s) : Promise.resolve(s).then(r, i)
            }

            function _(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var a = t.apply(e, n);

                        function o(s) {
                            f(a, r, i, o, u, "next", s)
                        }

                        function u(s) {
                            f(a, r, i, o, u, "throw", s)
                        }
                        o(void 0)
                    })
                }
            }

            function X(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function O(t, e) {
                return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e
            }

            function K(t) {
                if (typeof Symbol != "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
            }

            function x(t, e) {
                var n = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
                if (n != null) {
                    var r = [],
                        i = !0,
                        a = !1,
                        o, u;
                    try {
                        for (n = n.call(t); !(i = (o = n.next()).done) && (r.push(o.value), !(e && r.length === e)); i = !0);
                    } catch (s) {
                        a = !0, u = s
                    } finally {
                        try {
                            !i && n.return != null && n.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                    return r
                }
            }

            function q() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function V() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e] != null ? arguments[e] : {},
                        r = Object.keys(n);
                    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
                        return Object.getOwnPropertyDescriptor(n, i).enumerable
                    }))), r.forEach(function(i) {
                        X(t, i, n[i])
                    })
                }
                return t
            }

            function U(t, e) {
                if (t == null) return {};
                var n = Q(t, e),
                    r, i;
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < a.length; i++) r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
                }
                return n
            }

            function Q(t, e) {
                if (t == null) return {};
                var n = {},
                    r = Object.keys(t),
                    i, a;
                for (a = 0; a < r.length; a++) i = r[a], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
                return n
            }

            function R(t, e) {
                return E(t) || x(t, e) || k(t, e) || q()
            }

            function M(t) {
                return L(t) || K(t) || k(t) || V()
            }

            function k(t, e) {
                if (t) {
                    if (typeof t == "string") return w(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
                }
            }

            function S(t, e) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (i[0] & 1) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(c) {
                    return function(v) {
                        return s([c, v])
                    }
                }

                function s(c) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, r && (i = c[0] & 2 ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                        switch (r = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
                            case 0:
                            case 1:
                                i = c;
                                break;
                            case 4:
                                return o.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, r = c[1], c = [0];
                                continue;
                            case 7:
                                c = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (i = o.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                                    o = 0;
                                    continue
                                }
                                if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
                                    o.label = c[1];
                                    break
                                }
                                if (c[0] === 6 && o.label < i[1]) {
                                    o.label = i[1], i = c;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(c);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        c = e.call(t, o)
                    } catch (v) {
                        c = [6, v], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (c[0] & 5) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }
            }
            var Y = Object.defineProperty,
                J = Object.getOwnPropertyDescriptor,
                W = Object.getOwnPropertyNames,
                p = Object.prototype.hasOwnProperty,
                y = function(t, e) {
                    return function() {
                        return t && (e = (0, t[W(t)[0]])(t = 0)), e
                    }
                },
                m = function(t, e) {
                    for (var n in e) Y(t, n, {
                        get: e[n],
                        enumerable: !0
                    })
                },
                C = function(t, e, n, r) {
                    if (e && typeof e == "object" || typeof e == "function") {
                        var i = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var u = function() {
                                    var v = c.value;
                                    !p.call(t, v) && v !== n && Y(t, v, {
                                        get: function() {
                                            return e[v]
                                        },
                                        enumerable: !(r = J(e, v)) || r.enumerable
                                    })
                                }, s = W(e)[Symbol.iterator](), c; !(i = (c = s.next()).done); i = !0) u()
                        } catch (v) {
                            a = !0, o = v
                        } finally {
                            try {
                                !i && s.return != null && s.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                    }
                    return t
                },
                d = function(t) {
                    return C(Y({}, "__esModule", {
                        value: !0
                    }), t)
                },
                l, P = y({
                    "../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/url-alphabet/index.js": function() {
                        "use strict";
                        l = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"
                    }
                }),
                B = {};
            m(B, {
                customAlphabet: function() {
                    return ne
                },
                customRandom: function() {
                    return te
                },
                nanoid: function() {
                    return ce
                },
                random: function() {
                    return A
                },
                urlAlphabet: function() {
                    return l
                }
            });
            var A, te, ne, ce, Ee = y({
                    "../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/index.browser.js": function() {
                        "use strict";
                        P(), A = function(t) {
                            return crypto.getRandomValues(new Uint8Array(t))
                        }, te = function(t, e, n) {
                            var r = (2 << Math.log(t.length - 1) / Math.LN2) - 1,
                                i = -~(1.6 * r * e / t.length);
                            return function() {
                                for (var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e, o = "";;)
                                    for (var u = n(i), s = i; s--;)
                                        if (o += t[u[s] & r] || "", o.length === a) return o
                            }
                        }, ne = function(t) {
                            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 21;
                            return te(t, e, A)
                        }, ce = function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 21;
                            return crypto.getRandomValues(new Uint8Array(t)).reduce(function(e, n) {
                                return n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e
                            }, "")
                        }
                    }
                }),
                se = {};
            m(se, {
                RUM_PREFIX: function() {
                    return ee
                },
                default: function() {
                    return cr
                },
                getA11yData: function() {
                    return Nt
                },
                getCumulativeLayoutShift: function() {
                    return Tt
                },
                getDomainLookup: function() {
                    return je
                },
                getFirstContentfulPaint: function() {
                    return At
                },
                getFirstInputDelay: function() {
                    return Ct
                },
                getInteractionToNextPaint: function() {
                    return Lt
                },
                getLargestContentfulPaint: function() {
                    return Rt
                },
                getNavigationTimingType: function() {
                    return qe
                },
                getPerformanceMetrics: function() {
                    return Ie
                },
                getServerTiming: function() {
                    return Ve
                },
                getTcpConnection: function() {
                    return Qe
                },
                getTlsNegotiation: function() {
                    return Ye
                },
                init: function() {
                    return jt
                },
                mark: function() {
                    return Qn
                },
                measure: function() {
                    return Yn
                },
                trackEventsV2Factory: function() {
                    return or
                },
                trackLoadPerformance: function() {
                    return ur
                },
                trackSqspImages: function() {
                    return Dt
                }
            }), N.exports = d(se);
            var re = {};
            m(re, {
                getCumulativeLayoutShift: function() {
                    return Tt
                },
                getDomainLookup: function() {
                    return je
                },
                getFirstContentfulPaint: function() {
                    return At
                },
                getFirstInputDelay: function() {
                    return Ct
                },
                getInteractionToNextPaint: function() {
                    return Lt
                },
                getLargestContentfulPaint: function() {
                    return Rt
                },
                getNavigationTimingType: function() {
                    return qe
                },
                getServerTiming: function() {
                    return Ve
                },
                getTcpConnection: function() {
                    return Qe
                },
                getTlsNegotiation: function() {
                    return Ye
                }
            });
            var fe = "/api/1/performance/records",
                Gt = "load",
                de = "visibilitychange",
                zt = ["Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", " ", "Enter"],
                Xt = "SS_MID",
                Kt = "SS_ANALYTICS_ID",
                Jt = 3e4,
                Zt = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i,
                _e = 200,
                $t = "4.13.1",
                Se = function(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return new Promise(function(i, a) {
                            try {
                                t.apply(void 0, [function(o) {
                                    i(o)
                                }].concat(M(n)))
                            } catch (o) {
                                a(o)
                            }
                        })
                    }
                },
                Be = function(t) {
                    return Se(setTimeout)(t)
                },
                Fe = function() {
                    return Se(function(t) {
                        var e = function(n) {
                            (n.type === "pagehide" || document.visibilityState === "hidden") && (t(n), removeEventListener("visibilitychange", e, !0), removeEventListener("pagehide", e, !0))
                        };
                        window.addEventListener("visibilitychange", e, !0), window.addEventListener("pagehide", e, !0)
                    })()
                },
                en = function(t) {
                    document.readyState === "complete" ? window.setTimeout(t, 0) : window.addEventListener("pageshow", t, {
                        once: !0
                    })
                },
                tn = function() {
                    return Se(en)
                },
                nn = function() {
                    var t = {
                            entryType: "navigation",
                            startTime: 0
                        },
                        e = performance.timing;
                    for (var n in e)
                        if (n !== "navigationStart" && n !== "toJSON") {
                            var r = Math.max(e[n] - e.navigationStart, 0);
                            t[n] = r
                        }
                    return t
                },
                be = function() {
                    var t = _(function() {
                        var e, n;
                        return S(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, tn()];
                                case 1:
                                    return r.sent(), e = R(window.performance.getEntriesByType("navigation"), 1), n = e[0], [2, n != null ? n : nn()]
                            }
                        })
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                G = function() {
                    var t = _(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, be()];
                                case 1:
                                    return n = i.sent(), r = n[e], typeof r != "number" || r < 0 || r > 2147483647 ? [2] : [2, Math.round(r)]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                rn = function() {
                    var t = _(function() {
                        var e;
                        return S(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, be()];
                                case 1:
                                    return e = n.sent(), [2, e.serverTiming]
                            }
                        })
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                He = function() {
                    var t = _(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, be()];
                                case 1:
                                    return n = i.sent(), r = n[e], typeof r != "string" ? [2] : [2, r]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                Te = function(t, e) {
                    if (typeof t == "number" && typeof e == "number" && t >= e) return t - e
                },
                je = function(t) {
                    return Promise.all([G("domainLookupEnd"), G("domainLookupStart")]).then(function(e) {
                        var n = R(e, 2),
                            r = n[0],
                            i = n[1];
                        t({
                            domainLookup: Te(r, i)
                        })
                    })
                },
                qe = function(t) {
                    return He("type").then(function(e) {
                        t({
                            navigationTimingType: e
                        })
                    })
                },
                Ve = function(t) {
                    return rn().then(function(e) {
                        t({
                            serverTiming: JSON.stringify(e)
                        })
                    })
                },
                Qe = function(t) {
                    return Promise.all([G("connectEnd"), G("connectStart")]).then(function(e) {
                        var n = R(e, 2),
                            r = n[0],
                            i = n[1];
                        t({
                            tcpConnection: Te(r, i)
                        })
                    })
                },
                Ye = function(t) {
                    return Promise.all([G("connectEnd"), G("secureConnectionStart")]).then(function(e) {
                        var n = R(e, 2),
                            r = n[0],
                            i = n[1];
                        t({
                            tlsNegotiation: Te(r, i)
                        })
                    })
                },
                F, ie, We, le, Ae, Ge = -1,
                ae = function(e) {
                    addEventListener("pageshow", function(n) {
                        n.persisted && (Ge = n.timeStamp, e(n))
                    }, !0)
                },
                ze = function() {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                },
                Xe = function() {
                    var e = ze();
                    return e && e.activationStart || 0
                },
                H = function(e, n) {
                    var r = ze(),
                        i = "navigate";
                    return Ge >= 0 ? i = "back-forward-cache" : r && (document.prerendering || Xe() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))), {
                        name: e,
                        value: n === void 0 ? -1 : n,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: i
                    }
                },
                oe = function(e, n, r) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var i = new PerformanceObserver(function(a) {
                                Promise.resolve().then(function() {
                                    n(a.getEntries())
                                })
                            });
                            return i.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, r || {})), i
                        }
                    } catch (a) {}
                },
                j = function(e, n, r, i) {
                    var a, o;
                    return function(u) {
                        n.value >= 0 && (u || i) && ((o = n.value - (a || 0)) || a === void 0) && (a = n.value, n.delta = o, n.rating = function(s, c) {
                            return s > c[1] ? "poor" : s > c[0] ? "needs-improvement" : "good"
                        }(n.value, r), e(n))
                    }
                },
                Ke = function(e) {
                    requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                            return e()
                        })
                    })
                },
                Ce = function(e) {
                    var n = function(i) {
                        i.type !== "pagehide" && document.visibilityState !== "hidden" || e(i)
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                },
                Je = function(e) {
                    var n = !1;
                    return function(r) {
                        n || (e(r), n = !0)
                    }
                },
                Z = -1,
                Ze = function() {
                    return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
                },
                ve = function(e) {
                    document.visibilityState === "hidden" && Z > -1 && (Z = e.type === "visibilitychange" ? e.timeStamp : 0, an())
                },
                $e = function() {
                    addEventListener("visibilitychange", ve, !0), addEventListener("prerenderingchange", ve, !0)
                },
                an = function() {
                    removeEventListener("visibilitychange", ve, !0), removeEventListener("prerenderingchange", ve, !0)
                },
                et = function() {
                    return Z < 0 && (Z = Ze(), $e(), ae(function() {
                        setTimeout(function() {
                            Z = Ze(), $e()
                        }, 0)
                    })), {get firstHiddenTime() {
                            return Z
                        }
                    }
                },
                Le = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", function() {
                        return e()
                    }, !0) : e()
                },
                tt = [1800, 3e3],
                nt = function(e, n) {
                    n = n || {}, Le(function() {
                        var r, i = et(),
                            a = H("FCP"),
                            o = oe("paint", function(u) {
                                u.forEach(function(s) {
                                    s.name === "first-contentful-paint" && (o.disconnect(), s.startTime < i.firstHiddenTime && (a.value = Math.max(s.startTime - Xe(), 0), a.entries.push(s), r(!0)))
                                })
                            });
                        o && (r = j(e, a, tt, n.reportAllChanges), ae(function(u) {
                            a = H("FCP"), r = j(e, a, tt, n.reportAllChanges), Ke(function() {
                                a.value = performance.now() - u.timeStamp, r(!0)
                            })
                        }))
                    })
                },
                rt = [.1, .25],
                on = function(e, n) {
                    n = n || {}, nt(Je(function() {
                        var r, i = H("CLS", 0),
                            a = 0,
                            o = [],
                            u = function(v) {
                                v.forEach(function(g) {
                                    if (!g.hadRecentInput) {
                                        var b = o[0],
                                            T = o[o.length - 1];
                                        a && g.startTime - T.startTime < 1e3 && g.startTime - b.startTime < 5e3 ? (a += g.value, o.push(g)) : (a = g.value, o = [g])
                                    }
                                }), a > i.value && (i.value = a, i.entries = o, r())
                            },
                            s = oe("layout-shift", u);
                        s && (r = j(e, i, rt, n.reportAllChanges), Ce(function() {
                            u(s.takeRecords()), r(!0)
                        }), ae(function() {
                            a = 0, i = H("CLS", 0), r = j(e, i, rt, n.reportAllChanges), Ke(function() {
                                return r()
                            })
                        }), setTimeout(r, 0))
                    }))
                },
                ue = {
                    passive: !0,
                    capture: !0
                },
                un = new Date,
                it = function(e, n) {
                    F || (F = n, ie = e, We = new Date, ot(removeEventListener), at())
                },
                at = function() {
                    if (ie >= 0 && ie < We - un) {
                        var e = {
                            entryType: "first-input",
                            name: F.type,
                            target: F.target,
                            cancelable: F.cancelable,
                            startTime: F.timeStamp,
                            processingStart: F.timeStamp + ie
                        };
                        le.forEach(function(n) {
                            n(e)
                        }), le = []
                    }
                },
                cn = function(e) {
                    if (e.cancelable) {
                        var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                        e.type == "pointerdown" ? function(r, i) {
                            var a = function() {
                                    it(r, i), u()
                                },
                                o = function() {
                                    u()
                                },
                                u = function() {
                                    removeEventListener("pointerup", a, ue), removeEventListener("pointercancel", o, ue)
                                };
                            addEventListener("pointerup", a, ue), addEventListener("pointercancel", o, ue)
                        }(n, e) : it(n, e)
                    }
                },
                ot = function(e) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {
                        return e(n, cn, ue)
                    })
                },
                ut = [100, 300],
                sn = function(e, n) {
                    n = n || {}, Le(function() {
                        var r, i = et(),
                            a = H("FID"),
                            o = function(v) {
                                v.startTime < i.firstHiddenTime && (a.value = v.processingStart - v.startTime, a.entries.push(v), r(!0))
                            },
                            u = function(v) {
                                v.forEach(o)
                            },
                            s = oe("first-input", u);
                        r = j(e, a, ut, n.reportAllChanges), s && Ce(Je(function() {
                            u(s.takeRecords()), s.disconnect()
                        })), s && ae(function() {
                            var c;
                            a = H("FID"), r = j(e, a, ut, n.reportAllChanges), le = [], ie = -1, F = null, ot(addEventListener), c = o, le.push(c), at()
                        })
                    })
                },
                ct = 0,
                Re = 1 / 0,
                pe = 0,
                fn = function(e) {
                    e.forEach(function(n) {
                        n.interactionId && (Re = Math.min(Re, n.interactionId), pe = Math.max(pe, n.interactionId), ct = pe ? (pe - Re) / 7 + 1 : 0)
                    })
                },
                st = function() {
                    return Ae ? ct : performance.interactionCount || 0
                },
                dn = function() {
                    "interactionCount" in performance || Ae || (Ae = oe("event", fn, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                ft = [200, 500],
                dt = 0,
                lt = function() {
                    return st() - dt
                },
                I = [],
                Pe = {},
                vt = function(e) {
                    var n = I[I.length - 1],
                        r = Pe[e.interactionId];
                    if (r || I.length < 10 || e.duration > n.latency) {
                        if (r) r.entries.push(e), r.latency = Math.max(r.latency, e.duration);
                        else {
                            var i = {
                                id: e.interactionId,
                                latency: e.duration,
                                entries: [e]
                            };
                            Pe[i.id] = i, I.push(i)
                        }
                        I.sort(function(a, o) {
                            return o.latency - a.latency
                        }), I.splice(10).forEach(function(a) {
                            delete Pe[a.id]
                        })
                    }
                },
                ln = function(e, n) {
                    n = n || {}, Le(function() {
                        var r;
                        dn();
                        var i, a = H("INP"),
                            o = function(c) {
                                c.forEach(function(b) {
                                    b.interactionId && vt(b), b.entryType === "first-input" && !I.some(function(T) {
                                        return T.entries.some(function(D) {
                                            return b.duration === D.duration && b.startTime === D.startTime
                                        })
                                    }) && vt(b)
                                });
                                var v, g = (v = Math.min(I.length - 1, Math.floor(lt() / 50)), I[v]);
                                g && g.latency !== a.value && (a.value = g.latency, a.entries = g.entries, i())
                            },
                            u = oe("event", o, {
                                durationThreshold: (r = n.durationThreshold) !== null && r !== void 0 ? r : 40
                            });
                        i = j(e, a, ft, n.reportAllChanges), u && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && u.observe({
                            type: "first-input",
                            buffered: !0
                        }), Ce(function() {
                            o(u.takeRecords()), a.value < 0 && lt() > 0 && (a.value = 0, a.entries = []), i(!0)
                        }), ae(function() {
                            I = [], dt = st(), a = H("INP"), i = j(e, a, ft, n.reportAllChanges)
                        }))
                    })
                },
                Ne = function() {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                },
                vn = function(e) {
                    var n = e.nodeName;
                    return e.nodeType === 1 ? n.toLowerCase() : n.toUpperCase().replace(/^#/, "")
                },
                pn = function(e, n) {
                    var r = "";
                    try {
                        for (; e && e.nodeType !== 9;) {
                            var i = e,
                                a = i.id ? "#" + i.id : vn(i) + (i.classList && i.classList.value && i.classList.value.trim() && i.classList.value.trim().length ? "." + i.classList.value.trim().replace(/\s+/g, ".") : "");
                            if (r.length + a.length > (n || 100) - 1) return r || a;
                            if (r = r ? a + ">" + r : a, i.id) break;
                            e = i.parentNode
                        }
                    } catch (o) {}
                    return r
                },
                pt = -1,
                mn = function() {
                    return pt
                },
                mt = function(e) {
                    addEventListener("pageshow", function(n) {
                        n.persisted && (pt = n.timeStamp, e(n))
                    }, !0)
                },
                gt = function() {
                    var e = Ne();
                    return e && e.activationStart || 0
                },
                ht = function(e, n) {
                    var r = Ne(),
                        i = "navigate";
                    return mn() >= 0 ? i = "back-forward-cache" : r && (document.prerendering || gt() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))), {
                        name: e,
                        value: n === void 0 ? -1 : n,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: i
                    }
                },
                gn = function(e, n, r) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var i = new PerformanceObserver(function(a) {
                                Promise.resolve().then(function() {
                                    n(a.getEntries())
                                })
                            });
                            return i.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, r || {})), i
                        }
                    } catch (a) {}
                },
                yt = function(e, n, r, i) {
                    var a, o;
                    return function(u) {
                        n.value >= 0 && (u || i) && ((o = n.value - (a || 0)) || a === void 0) && (a = n.value, n.delta = o, n.rating = function(s, c) {
                            return s > c[1] ? "poor" : s > c[0] ? "needs-improvement" : "good"
                        }(n.value, r), e(n))
                    }
                },
                hn = function(e) {
                    requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                            return e()
                        })
                    })
                },
                yn = function(e) {
                    var n = function(i) {
                        i.type !== "pagehide" && document.visibilityState !== "hidden" || e(i)
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                },
                wn = function(e) {
                    var n = !1;
                    return function(r) {
                        n || (e(r), n = !0)
                    }
                },
                $ = -1,
                wt = function() {
                    return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
                },
                me = function(e) {
                    document.visibilityState === "hidden" && $ > -1 && ($ = e.type === "visibilitychange" ? e.timeStamp : 0, En())
                },
                Et = function() {
                    addEventListener("visibilitychange", me, !0), addEventListener("prerenderingchange", me, !0)
                },
                En = function() {
                    removeEventListener("visibilitychange", me, !0), removeEventListener("prerenderingchange", me, !0)
                },
                _n = function() {
                    return $ < 0 && ($ = wt(), Et(), mt(function() {
                        setTimeout(function() {
                            $ = wt(), Et()
                        }, 0)
                    })), {get firstHiddenTime() {
                            return $
                        }
                    }
                },
                Sn = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", function() {
                        return e()
                    }, !0) : e()
                },
                fr = 1 / 0,
                _t = [2500, 4e3],
                Oe = {},
                bn = function(e, n) {
                    (function(r, i) {
                        i = i || {}, Sn(function() {
                            var a, o = _n(),
                                u = ht("LCP"),
                                s = function(b) {
                                    var T = b[b.length - 1];
                                    T && T.startTime < o.firstHiddenTime && (u.value = Math.max(T.startTime - gt(), 0), u.entries = [T], a())
                                },
                                c = gn("largest-contentful-paint", s);
                            if (c) {
                                a = yt(r, u, _t, i.reportAllChanges);
                                var v = wn(function() {
                                    Oe[u.id] || (s(c.takeRecords()), c.disconnect(), Oe[u.id] = !0, a(!0))
                                });
                                ["keydown", "click"].forEach(function(g) {
                                    addEventListener(g, function() {
                                        return setTimeout(v, 0)
                                    }, !0)
                                }), yn(v), mt(function(g) {
                                    u = ht("LCP"), a = yt(r, u, _t, i.reportAllChanges), hn(function() {
                                        u.value = performance.now() - g.timeStamp, Oe[u.id] = !0, a(!0)
                                    })
                                })
                            }
                        })
                    })(function(r) {
                        (function(i) {
                            if (i.entries.length) {
                                var a = Ne();
                                if (a) {
                                    var o = a.activationStart || 0,
                                        u = i.entries[i.entries.length - 1],
                                        s = u.url && performance.getEntriesByType("resource").filter(function(D) {
                                            return D.name === u.url
                                        })[0],
                                        c = Math.max(0, a.responseStart - o),
                                        v = Math.max(c, s ? (s.requestStart || s.startTime) - o : 0),
                                        g = Math.max(v, s ? s.responseEnd - o : 0),
                                        b = Math.max(g, u ? u.startTime - o : 0),
                                        T = {
                                            element: pn(u.element),
                                            timeToFirstByte: c,
                                            resourceLoadDelay: v - c,
                                            resourceLoadTime: g - v,
                                            elementRenderDelay: b - g,
                                            navigationEntry: a,
                                            lcpEntry: u
                                        };
                                    return u.url && (T.url = u.url), s && (T.lcpResourceEntry = s), void(i.attribution = T)
                                }
                            }
                            i.attribution = {
                                timeToFirstByte: 0,
                                resourceLoadDelay: 0,
                                resourceLoadTime: 0,
                                elementRenderDelay: i.value
                            }
                        })(r), e(r)
                    }, n)
                },
                Tn = function(t) {
                    var e = t.getAttribute("elementtiming");
                    if (e !== null) return e;
                    var n = t.tagName;
                    if (n === "IMG") {
                        var r = t.getAttribute("data-loader");
                        if (r !== null) return "unknown-image-component-".concat(r);
                        var i = t.getAttribute("data-src") !== null;
                        if (i) return "unknown-imageloader"
                    }
                    return "unknown-".concat(n)
                },
                St = function(t) {
                    var e, n = "";
                    n += t.tagName;
                    var r = t,
                        i = -1;
                    do r = r.previousElementSibling, i += 1; while (r !== null);
                    n += "[" + i + "]";
                    var a = (e = t.classList.value) === null || e === void 0 ? void 0 : e.trim().replace(/\s+/g, ".");
                    return a && (n += "." + a), n
                },
                bt = function(t) {
                    return t.substring(0, _e - 3) + "..."
                },
                An = function(t) {
                    var e = St(t);
                    if (e.length > _e) return bt(e);
                    for (var n = t.parentElement; n !== null && n.tagName !== "BODY";) {
                        var r = "<" + St(n);
                        if (e += r, e.length > _e) return bt(e);
                        n = n.parentElement
                    }
                    return e
                },
                Cn = function(t) {
                    var e, n = (e = t.attribution.lcpEntry) === null || e === void 0 ? void 0 : e.element;
                    return {
                        largestContentfulPaint: Math.round(t.value),
                        lcpElementName: n ? Tn(n) : void 0,
                        lcpElementPath: n ? An(n) : void 0,
                        lcpElementRenderDelay: Math.round(t.attribution.elementRenderDelay),
                        lcpResourceLoadDelay: Math.round(t.attribution.resourceLoadDelay),
                        lcpResourceLoadTime: Math.round(t.attribution.resourceLoadTime),
                        lcpTtfb: Math.round(t.attribution.timeToFirstByte)
                    }
                },
                Tt = function(t) {
                    on(function(e) {
                        t({
                            cumulativeLayoutShift: e.value
                        })
                    }, {
                        reportAllChanges: !0
                    })
                },
                At = function(t) {
                    nt(function(e) {
                        t({
                            firstContentfulPaint: Math.round(e.value)
                        })
                    })
                },
                Ct = function(t) {
                    sn(function(e) {
                        t({
                            firstInputDelay: Math.round(e.value)
                        })
                    })
                },
                Lt = function(t) {
                    ln(function(e) {
                        t({
                            interactionToNextPaint: Math.round(e.value)
                        })
                    })
                },
                Rt = function(t) {
                    bn(function(e) {
                        t(Cn(e))
                    })
                },
                Ln = ["connectEnd", "connectStart", "decodedBodySize", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "encodedBodySize", "fetchStart", "loadEventEnd", "loadEventStart", "redirectCount", "redirectEnd", "redirectStart", "responseStart", "responseEnd", "responseStatus", "secureConnectionStart", "transferSize", "unloadEventEnd", "unloadEventStart", "workerStart"],
                Rn = ["initiatorType", "nextHopProtocol"],
                Pt = function(t, e) {
                    return function() {
                        var n = _(function(r) {
                            var i, a, o, u, s;
                            return S(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 2, , 3]), i = [{}, r], [4, t(r)];
                                    case 1:
                                        return e.apply(void 0, [X.apply(void 0, i.concat([c.sent()]))]), [3, 3];
                                    case 2:
                                        return a = c.sent(), (s = window) === null || s === void 0 || (u = s.SQUARESPACE_SENTRY) === null || u === void 0 || (o = u.captureException) === null || o === void 0 || o.call(u, a), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        });
                        return function(r) {
                            return n.apply(this, arguments)
                        }
                    }()
                };

            function Ie(t) {
                Object.values(re).forEach(function() {
                    var e = _(function(n) {
                        var r, i, a, o;
                        return S(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), [4, n(t)];
                                case 1:
                                    return u.sent(), [3, 3];
                                case 2:
                                    return r = u.sent(), (o = window) === null || o === void 0 || (a = o.SQUARESPACE_SENTRY) === null || a === void 0 || (i = a.captureException) === null || i === void 0 || i.call(a, r), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    });
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()), Ln.forEach(Pt(G, t)), Rn.forEach(Pt(He, t))
            }
            var Pn = ["more", "less", "custom"],
                Nn = function() {
                    var t;
                    return (t = Pn.find(function(e) {
                        return window.matchMedia("prefers-contrast: ".concat(e)).matches
                    })) !== null && t !== void 0 ? t : "no-preference"
                },
                Nt = function() {
                    var t;
                    return {
                        forceColors: window.matchMedia("(forced-colors: active)").matches,
                        networkInformationType: (t = navigator.connection) === null || t === void 0 ? void 0 : t.type,
                        prefersContrast: Nn(),
                        prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                        primaryInputHasHover: window.matchMedia("(hover: hover)").matches,
                        keyboardUsage: !1
                    }
                },
                On = function(t) {
                    var e = Nt(),
                        n = function() {
                            t(e, "a11y")
                        },
                        r = function(a) {
                            var o;
                            ["INPUT", "TEXTAREA"].includes((o = a.target) === null || o === void 0 ? void 0 : o.tagName) || !zt.includes(a.key) || (e.keyboardUsage = !0, document.removeEventListener("keydown", r))
                        };
                    document.addEventListener("keydown", r);
                    var i = function() {
                        document.visibilityState === "hidden" && (n(), document.removeEventListener("keydown", r), document.removeEventListener(de, i))
                    };
                    document.addEventListener(de, i)
                };

            function Ot(t) {
                var e = new RegExp("(^| )".concat(t, "=([^;]+)")),
                    n = document.cookie.match(e);
                return n ? n[2] : ""
            }

            function In() {
                return !!(window.PerformanceMeasure && window.PerformanceMark)
            }

            function It() {
                if (!Object.prototype.hasOwnProperty.call(window, "PerformanceObserver")) return !1;
                try {
                    var t = new window.PerformanceObserver(function() {
                        return null
                    });
                    t.observe({
                        entryTypes: ["mark"]
                    }), t.disconnect()
                } catch (e) {
                    return !1
                }
                return !0
            }

            function Mt() {
                var t;
                return typeof((t = window.navigator) === null || t === void 0 ? void 0 : t.sendBeacon) == "function" && !Zt.test(window.navigator.userAgent)
            }
            var ge = function(t) {
                var e = Number(t);
                return Number.isNaN(e) ? void 0 : e
            };

            function Mn() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    e, n, r, i, a, o, u;
                return {
                    context: t,
                    analyticsId: Ot(Kt),
                    marketingId: Ot(Xt),
                    memberId: (r = window.Static) === null || r === void 0 || (n = r.SQUARESPACE_CONTEXT) === null || n === void 0 || (e = n.authenticatedAccount) === null || e === void 0 ? void 0 : e.id,
                    version: $t,
                    downlink: ge((i = navigator.connection) === null || i === void 0 ? void 0 : i.downlink),
                    effectiveType: (a = navigator.connection) === null || a === void 0 ? void 0 : a.effectiveType,
                    rtt: ge((o = navigator.connection) === null || o === void 0 ? void 0 : o.rtt),
                    saveData: Number(((u = navigator.connection) === null || u === void 0 ? void 0 : u.saveData) || 0),
                    deliveryType: Mt() ? "beacon" : "xhr",
                    devicePixelRatio: window.devicePixelRatio,
                    screenHeight: window.screen.height,
                    screenWidth: window.screen.width,
                    viewportHeight: window.innerHeight,
                    viewportWidth: window.innerWidth,
                    deviceMemory: ge(navigator.deviceMemory),
                    hardwareConcurrency: ge(navigator.hardwareConcurrency),
                    hash: window.location.hash || "",
                    hostname: window.location.hostname || "",
                    pathname: window.location.pathname || "/"
                }
            }
            var Dn = function() {
                    var t = _(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = Mn(e), r = {}, Ie(function(a) {
                                        Object.assign(r, a)
                                    }), [4, Promise.race([Be(6e4), Fe()])];
                                case 1:
                                    return i.sent(), [2, h({}, n, r)]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                xn = function() {
                    var t = _(function(e, n) {
                        var r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Dn(n)];
                                case 1:
                                    return r = i.sent(), e(r, "page_speed"), [2]
                            }
                        })
                    });
                    return function(n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                Un = ["media-www.sqspcdn.com", "images.squarespace-cdn.com", "static1.squarespace.com"],
                kn = function(t) {
                    return Un.some(function(e) {
                        return t.includes(e)
                    })
                },
                Bn = function(t) {
                    return t.hasAttribute("data-loader") ? 2 : t.hasAttribute("data-src") ? 1 : 0
                },
                Fn = function(t, e) {
                    if (t.hasAttribute("data-image-resolution")) {
                        var n;
                        return Number((n = t.getAttribute("data-image-resolution")) === null || n === void 0 ? void 0 : n.replace("w", ""))
                    }
                    var r = e.indexOf("format=");
                    return r !== -1 ? Number(e.slice(r + 7).replace(/w.*/, "")) : NaN
                },
                Hn = function(t, e, n) {
                    if (n === 1 && O(t, HTMLImageElement) && t.naturalHeight === 0) {
                        var r = document.querySelector('div[style*="'.concat(e, '"]'));
                        if (r) return r
                    }
                    return t
                },
                jn = function(t) {
                    if (O(t, HTMLImageElement)) {
                        var e = t.naturalHeight,
                            n = t.naturalWidth,
                            r = t.width,
                            i = t.height;
                        return {
                            naturalHeight: e,
                            naturalWidth: n,
                            width: r,
                            height: i
                        }
                    }
                    var a = t.getBoundingClientRect(),
                        o = Math.floor(a.width),
                        u = Math.floor(a.height);
                    return {
                        naturalHeight: u,
                        naturalWidth: o
                    }
                },
                qn = function() {
                    var t = _(function(e, n) {
                        var r, i, a, o, u, s, c, v, g, b, T, D, Vt, xe, Qt, Ue, ye, Yt;
                        return S(this, function(dr) {
                            r = Fn(n, e.name), i = Bn(n), a = n.getAttribute("data-loader"), o = n.getAttribute("elementtiming"), u = e.toJSON(), s = u.serverTiming, c = u.workerTiming, v = U(u, ["serverTiming", "workerTiming"]), g = !0, b = !1, T = void 0;
                            try {
                                for (D = Object.entries(v)[Symbol.iterator](); !(g = (Vt = D.next()).done); g = !0) xe = R(Vt.value, 2), Qt = xe[0], Ue = xe[1], typeof Ue == "number" && (v[Qt] = Math.floor(Ue))
                            } catch (ke) {
                                b = !0, T = ke
                            } finally {
                                try {
                                    !g && D.return != null && D.return()
                                } finally {
                                    if (b) throw T
                                }
                            }
                            return ye = Hn(n, e.name, i), Yt = jn(ye), [2, new Promise(function(ke) {
                                var Wt = new IntersectionObserver(function(sr) {
                                    sr.forEach(function(we) {
                                        if (we.target === ye) return Wt.disconnect(), ke(h({
                                            visibleOnLoad: we.isIntersecting,
                                            observationTime: Math.floor(we.time),
                                            intersectionRatio: we.intersectionRatio,
                                            squarespaceSize: r,
                                            imageType: i,
                                            imageLoaderType: a,
                                            elementTiming: o
                                        }, Yt, v))
                                    })
                                });
                                Wt.observe(ye)
                            })]
                        })
                    });
                    return function(n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                Vn = function() {
                    var t = _(function(e) {
                        var n, r, i, a, o;
                        return S(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return n = e.resource, r = e.deliverMetrics, !(O(n, PerformanceResourceTiming) && n.initiatorType === "img") || !kn(n.name) ? [2] : (i = n.name.replace(/\?.*/, ""), a = Array.from(document.querySelectorAll('img[src="'.concat(n.name, '"], img[data-src*="').concat(i, '"], img[srcset*="').concat(n.name, '"]'))), document.querySelectorAll('picture > source[srcset*="'.concat(n.name, '"]')).forEach(function(s) {
                                        var c = s.parentElement;
                                        c !== null && a.push(c.lastElementChild)
                                    }), a.length !== 1 ? [2] : [4, qn(n, a[0])]);
                                case 1:
                                    return o = u.sent(), r(o, "image"), [2]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                Dt = function() {
                    var t = _(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            return It() ? (n = function(a) {
                                return Vn({
                                    resource: a,
                                    deliverMetrics: e
                                })
                            }, performance.getEntriesByType("resource").forEach(n), r = new PerformanceObserver(function(a) {
                                a.getEntries().forEach(n)
                            }), r.observe({
                                entryTypes: ["resource"]
                            }), [2]) : [2]
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                z, Me = function(t) {
                    var e = t.spanName,
                        n = t.tracer,
                        r = t.startTime,
                        i = t.spanAttributes,
                        a = i === void 0 ? {} : i;
                    z === void 0 && (z = new Map);
                    var o = n.startSpan(e, {
                        startTime: r
                    });
                    o.setAttributes(a), z.set(e, o)
                },
                xt = function(t) {
                    var e = t.spanName,
                        n = t.spanAttributes,
                        r = n === void 0 ? {} : n,
                        i = t.updateName;
                    if (!(z === void 0 || !z.has(e))) {
                        var a = z.get(e);
                        a.setAttributes(r), i !== void 0 && a.updateName(i), a.end(), z.delete(e)
                    }
                },
                ee = "rum-",
                Ut = function(t) {
                    var e, n;
                    typeof((n = window) === null || n === void 0 || (e = n.SQUARESPACE_SENTRY) === null || e === void 0 ? void 0 : e.captureException) == "function" ? window.SQUARESPACE_SENTRY.captureException(t): console.warn("@sqs/rum-collector: user timing exception: ".concat(t))
                };

            function Qn(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                try {
                    if (!kt()) return;
                    var n = ee + t;
                    window.performance.clearMarks(n);
                    var r = window.performance.mark(n, {
                        detail: e.detail,
                        startTime: e.startTime
                    });
                    if (e.tracer !== void 0) {
                        var i = R(window.performance.getEntriesByName(n, "mark").slice(-1), 1),
                            a = i[0];
                        Me({
                            spanName: n,
                            tracer: e.tracer,
                            startTime: a.startTime,
                            spanAttributes: e.spanAttributes
                        })
                    }
                    return r
                } catch (o) {
                    Ut(o)
                }
            }

            function Yn(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    requireStart: !1
                };
                try {
                    if (!(kt() && Wn())) return;
                    var n = ee + t,
                        r = {
                            detail: e.detail,
                            duration: e.duration
                        };
                    if (e.start === void 0 ? window.performance.getEntriesByName(n, "mark").length > 0 && (r.start = n) : typeof e.start == "string" ? r.start = ee + e.start : r.start = e.start, r.end = typeof e.end == "string" ? ee + e.end : e.end, e.requireStart && typeof r.start != "string") return;
                    if (e.tracer !== void 0) {
                        var i = h({
                            measureName: n
                        }, e.spanAttributes);
                        if (typeof r.start == "number") Me({
                            spanName: n,
                            tracer: e.tracer,
                            startTime: r.start
                        }), xt({
                            spanName: n,
                            spanAttributes: i
                        });
                        else {
                            var a;
                            if (window.performance.getEntriesByName((a = r.start) !== null && a !== void 0 ? a : n, "mark").length === 0) {
                                var o;
                                Me({
                                    spanName: (o = r.start) !== null && o !== void 0 ? o : n,
                                    tracer: e.tracer,
                                    startTime: 0
                                })
                            }
                            var u;
                            xt({
                                spanName: (u = r.start) !== null && u !== void 0 ? u : n,
                                spanAttributes: i,
                                updateName: r.start !== n ? n : void 0
                            })
                        }
                    }
                    zn(n, r);
                    var s = Gn(n);
                    return s
                } catch (c) {
                    Ut(c)
                }
            }

            function Wn() {
                return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
            }

            function kt() {
                return "mark" in window.performance && "measure" in window.performance
            }

            function Gn(t) {
                var e = window.performance.getEntriesByName(t, "measure");
                return e[e.length - 1]
            }

            function zn(t, e) {
                try {
                    window.performance.measure(t, e)
                } catch (i) {
                    var n = typeof e.start == "string" ? e.start : t,
                        r = typeof e.end == "string" ? e.end : void 0;
                    try {
                        window.performance.measure(t, n, r)
                    } catch (a) {
                        if (!O(a, DOMException)) throw a;
                        try {
                            window.performance.measure(t, "navigationStart")
                        } catch (o) {
                            if (!O(o, DOMException)) throw o;
                            window.performance.measure(t)
                        }
                    }
                }
            }

            function Xn(t) {
                return typeof t == "string" && t.substring(0, 4) === ee
            }
            var Bt = new Set,
                Kn = function(t) {
                    if (In()) {
                        var e = function(r) {
                            var i = r.map(function(a) {
                                return a.entryType === "measure" ? {
                                    duration: Math.floor(a.duration),
                                    detail: a.detail || null,
                                    startTime: Math.floor(a.startTime),
                                    name: a.name
                                } : {}
                            });
                            i.forEach(function(a) {
                                if (!(a.name && !Xn(a.name))) {
                                    var o = "".concat(a.name, "|").concat(a.duration);
                                    Bt.has(o) || (t(a, "user"), Bt.add(o))
                                }
                            })
                        };
                        if (e(window.performance.getEntriesByType("measure")), It()) {
                            var n = new window.PerformanceObserver(function(r) {
                                return e(r.getEntries())
                            });
                            n.observe({
                                entryTypes: ["measure"]
                            })
                        } else document.addEventListener(de, function() {
                            document.visibilityState === "hidden" && e(window.performance.getEntriesByType("measure"))
                        })
                    }
                },
                Ft, he = [],
                Jn = function(t) {
                    he.push(t)
                };

            function Zn(t, e) {
                if (!(Mt() && navigator.sendBeacon(t, e))) {
                    var n = new XMLHttpRequest;
                    n.open("POST", t, !0), n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), n.send(e)
                }
            }

            function Ht(t) {
                if (he.length) {
                    var e = JSON.stringify(he);
                    Zn(t, e), he = []
                }
            }

            function $n(t) {
                window.addEventListener(Gt, function() {
                    Ft = window.setTimeout(function() {
                        return Ht(t)
                    }, Jt)
                }), document.addEventListener(de, function() {
                    document.visibilityState === "hidden" && (window.clearTimeout(Ft), Ht(t))
                })
            }

            function er(t) {
                Jn(h({
                    raw: !0
                }, t))
            }
            var tr = function(t, e) {
                    return function(n, r) {
                        var i = {
                            app: t,
                            data: n,
                            event: r,
                            pageLoadId: e,
                            ts: Date.now()
                        };
                        er(i)
                    }
                },
                nr = function(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        t && t.apply(void 0, M(n))
                    }
                },
                rr = function(t) {
                    var e = {
                        appName: t.appName || "",
                        context: t.context || {},
                        enabled: typeof t.enabled == "boolean" ? t.enabled : !0,
                        serviceURL: t.serviceURL || fe,
                        captureException: nr(t.captureException)
                    };
                    return e
                };

            function jt(t) {
                return De.apply(this, arguments)
            }

            function De() {
                return De = _(function(t) {
                    var e, n, r;
                    return S(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return e = rr(t), e.enabled ? [4, Promise.resolve().then(function() {
                                    return Ee(), B
                                })] : [2];
                            case 1:
                                n = i.sent().nanoid();
                                try {
                                    r = tr(e.appName, n), xn(r, e.context), Kn(r), Dt(r), On(r), $n(e.serviceURL)
                                } catch (a) {
                                    e.captureException(a, {
                                        pageLoadId: n,
                                        parsedOptions: e
                                    })
                                }
                                return [2]
                        }
                    })
                }), De.apply(this, arguments)
            }
            var ir = {
                    action: "load",
                    actor: "user",
                    event_owner_team: "web_performance",
                    event_source: "web",
                    object_type: "website"
                },
                ar = function() {
                    var t = /^qa\d+.sqsp.net/g,
                        e = /^stage.sqsp.net/g,
                        n = /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g,
                        r = window.location.hostname.substr(window.location.hostname.indexOf(".") + 1);
                    return e.test(r) || t.test(r) ? "staging" : n.test(r) ? "dev" : "prod"
                },
                or = function(t) {
                    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ar();
                    return new t({
                        customSchemaName: "Performance",
                        sourceEnvironment: e
                    }, ir)
                },
                qt = Object.freeze({
                    cumulativeLayoutShift: "cumulative_layout_shift",
                    decodedBodySize: "decoded_body_size_bytes",
                    domContentLoadedEventEnd: "dom_content_loaded_event_end_ms",
                    domContentLoadedEventStart: "dom_content_loaded_event_start_ms",
                    domainLookup: "domain_lookup_ms",
                    encodedBodySize: "encoded_body_size_bytes",
                    firstContentfulPaint: "first_contentful_paint_ms",
                    firstInputDelay: "first_input_delay_ms",
                    interactionToNextPaint: "interaction_to_next_paint_ms",
                    largestContentfulPaint: "largest_contentful_paint_ms",
                    loadEventEnd: "load_event_end_ms",
                    loadEventStart: "load_event_start_ms",
                    responseStart: "response_start_ms",
                    tcpConnection: "tcp_connection_ms",
                    tlsNegotiation: "tls_negotiation_ms"
                }),
                ur = function() {
                    var t = _(function(e) {
                        var n;
                        return S(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = {}, Ie(function(i) {
                                        Object.entries(i).forEach(function(a) {
                                            var o = R(a, 2),
                                                u = o[0],
                                                s = o[1];
                                            Object.prototype.hasOwnProperty.call(qt, u) && (n[qt[u]] = s)
                                        })
                                    }), [4, Promise.race([Be(6e4), Fe()])];
                                case 1:
                                    return r.sent(), e(n), [2]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }();

            function cr() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."), jt.apply(void 0, M(e))
            }
        }
    },
    function(N) {
        var w = function(L) {
                return N(N.s = L)
            },
            E = w(838210)
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/c3c6b04899b8aee0cee932297077d862/performance-05b0d13675885805a64c-min.en-US.js.map