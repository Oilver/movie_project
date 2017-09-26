/**
 * Created by ac on 2017/7/4.
 */
!function (e) {
    function t(n) {
        if (r[n])return r[n].exports;
        var a = r[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }

    var n = window.webpackJsonp;
    window.webpackJsonp = function (i, s) {
        for (var o, u, d = 0, l = []; d < i.length; d++)u = i[d], a[u] && l.push.apply(l, a[u]), a[u] = 0;
        for (o in s) {
            var c = s[o];
            switch (typeof c) {
                case"object":
                    e[o] = function (t) {
                        var n = t.slice(1), r = t[0];
                        return function (t, a, i) {
                            e[r].apply(this, [t, a, i].concat(n))
                        }
                    }(c);
                    break;
                case"function":
                    e[o] = c;
                    break;
                default:
                    e[o] = e[c]
            }
        }
        for (n && n(i, s); l.length;)l.shift().call(null, t);
        if (s[0])return r[0] = 0, t(0)
    };
    var r = {}, a = {4: 0};
    return t.e = function (e, n) {
        if (0 === a[e])return n.call(null, t);
        if (void 0 !== a[e]) a[e].push(n); else {
            a[e] = [n];
            var r = document.getElementsByTagName("head")[0], i = document.createElement("script");
            i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.src = t.p + "" + e + "." + ({
                    0: "about-licence",
                    1: "app-pro",
                    2: "board-index",
                    3: "celebrity-index",
                    5: "demo-htmlui",
                    6: "home-index",
                    7: "image-2x",
                    8: "movie-detail",
                    9: "movie-list",
                    10: "news-detail",
                    11: "news-hotNews",
                    12: "news-photo",
                    13: "news-video",
                    14: "profile-profile",
                    15: "query-index"
                }[e] || e) + "." + {
                    0: "aaed6287",
                    1: "4925e1d4",
                    2: "54b406df",
                    3: "c0765978",
                    5: "9ac61fd1",
                    6: "70d7e4c8",
                    7: "ffbec4c6",
                    8: "750fbec7",
                    9: "0cc7e872",
                    10: "cfcf7126",
                    11: "bb57d3cb",
                    12: "92dd98c6",
                    13: "d0f1085b",
                    14: "9e78f285",
                    15: "f9a5f1d4"
                }[e] + ".js", r.appendChild(i)
        }
    }, t.m = e, t.c = r, t.p = "", t(0)
}(function (e) {
    for (var t in e)if (Object.prototype.hasOwnProperty.call(e, t))switch (typeof e[t]) {
        case"function":
            break;
        case"object":
            e[t] = function (t) {
                var n = t.slice(1), r = e[t[0]];
                return function (e, t, a) {
                    r.apply(this, [e, t, a].concat(n))
                }
            }(e[t]);
            break;
        default:
            e[t] = e[e[t]]
    }
    return e
}([function (e, t, n) {
    n(189), e.exports = n(190)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        var t, n = l["default"].get("isWebp");
        null != n ? e(n) : (t = new Image, t.onload = function () {
                n = 1 === t.width ? 1 : 0, l["default"].set("isWebp", n, {expires: 31536e3, domain: "maoyan.com"}), e(n)
            }, t.onerror = function () {
                l["default"].set("isWebp", 0, {expires: 31536e3, domain: "maoyan.com"}), e(0)
            }, t.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=")
    }

    function i(e) {
        return null != u ? void(e && e(u)) : null != o ? void(e && o.push(e)) : (o = e ? [e] : [], void a(function (e) {
                    if (u = 1 == e, null != o) {
                        for (var t = 0; t < o.length; t++)o[t](u);
                        o = null
                    }
                }))
    }

    function s(e) {
        i(function (t) {
            function n(e) {
                if (t)if (null == e || "" == e) e = "http://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png.webp"; else {
                    var n = /\.(jpg|png|jpeg)/;
                    e = e.replace("/w.h/", "/"), e.indexOf(".webp") === -1 && (e.indexOf("p1.meituan.net") > -1 || e.indexOf("p0.meituan.net") > -1) && n.test(e) && (e = e.indexOf("@") > -1 ? e.replace("@", ".webp@") : e.concat(".webp"))
                }
                return e
            }

            e(n)
        })
    }

    t.__esModule = !0, t.detectQueue = i, t["default"] = s;
    var o, u, d = n(30), l = r(d)
}, function (e, t) {
    "use strict";
    var n = {
        createCookieString: function (e, t, n) {
            n = n || {};
            var r = [e, encodeURIComponent(t)].join("="), a = n, i = a.expires, s = a.path, o = a.domain, u = a.secure;
            return "number" == typeof i && (i = new Date((new Date).getTime() + 1e3 * i)), i instanceof Date && (r += "; expires=" + i.toUTCString()), s && (r += "; path=" + s), o && (r += "; domain=" + o), u && (r += "; secure"), r
        }, parseCookieString: function (e) {
            return e ? e.split(";").reduce(function (e, t) {
                    var n = t.split("=");
                    return e[n[0].trim()] = n[1].trim(), e
                }, {}) : {}
        }, get: function (e) {
            var t = this.parseCookieString(document.cookie);
            return decodeURIComponent(t[e])
        }, remove: function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return t.expires = t.expires || new Date(0), t.path = t.path || "/", this.set(e, "", t)
        }, removeFromAllDomain: function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = location.hostname.split(".");
            if (r.length >= 2 && isNaN(r[r.length - 1]))for (var a = 2; a <= r.length; a++)t.domain = r.slice(-a).join("."), n.remove(e, t);
            delete t.domain, n.remove(e, t)
        }, set: function (e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
            n.path = n.path || "/";
            var r = this.createCookieString(e, t, n);
            return document.cookie = r, r
        }
    };
    e.exports = n
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a() {
        location.href = h(l, c)
    }

    function i(e) {
        return function () {
            window.system && window.system.user ? e.apply(this, arguments) : a()
        }
    }

    function s(e) {
        e.stopPropagation(), /profile/.test(location.href) ? location.href = _ + "?" + d["default"].param({
                    service: "maoyan",
                    "continue": location.origin + m + "?" + d["default"].param({redirect: "/"})
                }) : location.href = h(_, m)
    }

    function o() {
        location.href = "/profile"
    }

    t.__esModule = !0, t.login = a, t.checkLogin = i, t.logout = s, t.profile = o;
    var u = n(32), d = r(u), l = "https://passport.meituan.com/account/unitivelogin", c = "/passport/login", _ = "https://passport.meituan.com/account/signout", m = "/passport/logout";
    location.origin || (location.origin = location.protocol + "//" + location.host);
    var h = function (e, t) {
        return e + "?" + d["default"].param({
                service: "maoyan",
                "continue": location.origin + t + "?" + d["default"].param({redirect: location.href.slice(location.origin.length)})
            })
    };
    t["default"] = function (e, t) {
        (0, d["default"])(".J-login").click(a), (0, d["default"])(".J-logout").click(s), (0, d["default"])(".has-login").click(o)
    }
}, function (e, t, n) {
    var r, a;
    /*!
     * jQuery JavaScript Library v1.12.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:17Z
     */
    !function (t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                    if (!e.document)throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
    }("undefined" != typeof window ? window : this, function (n, i) {
        function s(e) {
            var t = !!e && "length" in e && e.length, n = ye.type(e);
            return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function o(e, t, n) {
            if (ye.isFunction(t))return ye.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType)return ye.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (be.test(t))return ye.filter(t, e, n);
                t = ye.filter(t, e)
            }
            return ye.grep(e, function (e) {
                return ye.inArray(e, t) > -1 !== n
            })
        }

        function u(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function d(e) {
            var t = {};
            return ye.each(e.match(Ae) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function l() {
            oe.addEventListener ? (oe.removeEventListener("DOMContentLoaded", c), n.removeEventListener("load", c)) : (oe.detachEvent("onreadystatechange", c), n.detachEvent("onload", c))
        }

        function c() {
            (oe.addEventListener || "load" === n.event.type || "complete" === oe.readyState) && (l(), ye.ready())
        }

        function _(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(Oe, "-$1").toLowerCase();
                if (n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Fe.test(n) ? ye.parseJSON(n) : n)
                    } catch (a) {
                    }
                    ye.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function m(e) {
            var t;
            for (t in e)if (("data" !== t || !ye.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
            return !0
        }

        function h(e, t, n, r) {
            if (Ce(e)) {
                var a, i, s = ye.expando, o = e.nodeType, u = o ? ye.cache : e, d = o ? e[s] : e[s] && s;
                if (d && u[d] && (r || u[d].data) || void 0 !== n || "string" != typeof t)return d || (d = o ? e[s] = se.pop() || ye.guid++ : s), u[d] || (u[d] = o ? {} : {toJSON: ye.noop}), "object" != typeof t && "function" != typeof t || (r ? u[d] = ye.extend(u[d], t) : u[d].data = ye.extend(u[d].data, t)), i = u[d], r || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[ye.camelCase(t)] = n), "string" == typeof t ? (a = i[t], null == a && (a = i[ye.camelCase(t)])) : a = i, a
            }
        }

        function f(e, t, n) {
            if (Ce(e)) {
                var r, a, i = e.nodeType, s = i ? ye.cache : e, o = i ? e[ye.expando] : ye.expando;
                if (s[o]) {
                    if (t && (r = n ? s[o] : s[o].data)) {
                        ye.isArray(t) ? t = t.concat(ye.map(t, ye.camelCase)) : t in r ? t = [t] : (t = ye.camelCase(t), t = t in r ? [t] : t.split(" ")), a = t.length;
                        for (; a--;)delete r[t[a]];
                        if (n ? !m(r) : !ye.isEmptyObject(r))return
                    }
                    (n || (delete s[o].data, m(s[o]))) && (i ? ye.cleanData([e], !0) : fe.deleteExpando || s != s.window ? delete s[o] : s[o] = void 0)
                }
            }
        }

        function p(e, t, n, r) {
            var a, i = 1, s = 20, o = r ? function () {
                    return r.cur()
                } : function () {
                    return ye.css(e, t, "")
                }, u = o(), d = n && n[3] || (ye.cssNumber[t] ? "" : "px"), l = (ye.cssNumber[t] || "px" !== d && +u) && ze.exec(ye.css(e, t));
            if (l && l[3] !== d) {
                d = d || l[3], n = n || [], l = +u || 1;
                do i = i || ".5", l /= i, ye.style(e, t, l + d); while (i !== (i = o() / u) && 1 !== i && --s)
            }
            return n && (l = +l || +u || 0, a = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = d, r.start = l, r.end = a)), a
        }

        function y(e) {
            var t = $e.split("|"), n = e.createDocumentFragment();
            if (n.createElement)for (; t.length;)n.createElement(t.pop());
            return n
        }

        function M(e, t) {
            var n, r, a = 0, i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!i)for (i = [], n = e.childNodes || e; null != (r = n[a]); a++)!t || ye.nodeName(r, t) ? i.push(r) : ye.merge(i, M(r, t));
            return void 0 === t || t && ye.nodeName(e, t) ? ye.merge([e], i) : i
        }

        function L(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++)ye._data(n, "globalEval", !t || ye._data(t[r], "globalEval"))
        }

        function g(e) {
            qe.test(e.type) && (e.defaultChecked = e.checked)
        }

        function v(e, t, n, r, a) {
            for (var i, s, o, u, d, l, c, _ = e.length, m = y(t), h = [], f = 0; f < _; f++)if (s = e[f], s || 0 === s)if ("object" === ye.type(s)) ye.merge(h, s.nodeType ? [s] : s); else if (Xe.test(s)) {
                for (u = u || m.appendChild(t.createElement("div")), d = (Ue.exec(s) || ["", ""])[1].toLowerCase(), c = Be[d] || Be._default, u.innerHTML = c[1] + ye.htmlPrefilter(s) + c[2], i = c[0]; i--;)u = u.lastChild;
                if (!fe.leadingWhitespace && Ge.test(s) && h.push(t.createTextNode(Ge.exec(s)[0])), !fe.tbody)for (s = "table" !== d || Ke.test(s) ? "<table>" !== c[1] || Ke.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length; i--;)ye.nodeName(l = s.childNodes[i], "tbody") && !l.childNodes.length && s.removeChild(l);
                for (ye.merge(h, u.childNodes), u.textContent = ""; u.firstChild;)u.removeChild(u.firstChild);
                u = m.lastChild
            } else h.push(t.createTextNode(s));
            for (u && m.removeChild(u), fe.appendChecked || ye.grep(M(h, "input"), g), f = 0; s = h[f++];)if (r && ye.inArray(s, r) > -1) a && a.push(s); else if (o = ye.contains(s.ownerDocument, s), u = M(m.appendChild(s), "script"), o && L(u), n)for (i = 0; s = u[i++];)Ve.test(s.type || "") && n.push(s);
            return u = null, m
        }

        function Y() {
            return !0
        }

        function k() {
            return !1
        }

        function w() {
            try {
                return oe.activeElement
            } catch (e) {
            }
        }

        function D(e, t, n, r, a, i) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (o in t)D(e, o, n, r, t[o], i);
                return e
            }
            if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), a === !1) a = k; else if (!a)return e;
            return 1 === i && (s = a, a = function (e) {
                return ye().off(e), s.apply(this, arguments)
            }, a.guid = s.guid || (s.guid = ye.guid++)), e.each(function () {
                ye.event.add(this, t, a, r, n)
            })
        }

        function T(e, t) {
            return ye.nodeName(e, "table") && ye.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== ye.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = ut.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function S(e, t) {
            if (1 === t.nodeType && ye.hasData(e)) {
                var n, r, a, i = ye._data(e), s = ye._data(t, i), o = i.events;
                if (o) {
                    delete s.handle, s.events = {};
                    for (n in o)for (r = 0, a = o[n].length; r < a; r++)ye.event.add(t, n, o[n][r])
                }
                s.data && (s.data = ye.extend({}, s.data))
            }
        }

        function H(e, t) {
            var n, r, a;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[ye.expando]) {
                    a = ye._data(t);
                    for (r in a.events)ye.removeEvent(t, r, a.handle);
                    t.removeAttribute(ye.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.html5Clone && e.innerHTML && !ye.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function j(e, t, n, r) {
            t = de.apply([], t);
            var a, i, s, o, u, d, l = 0, c = e.length, _ = c - 1, m = t[0], h = ye.isFunction(m);
            if (h || c > 1 && "string" == typeof m && !fe.checkClone && ot.test(m))return e.each(function (a) {
                var i = e.eq(a);
                h && (t[0] = m.call(this, a, i.html())), j(i, t, n, r)
            });
            if (c && (d = v(t, e[0].ownerDocument, !1, e, r), a = d.firstChild, 1 === d.childNodes.length && (d = a), a || r)) {
                for (o = ye.map(M(d, "script"), b), s = o.length; l < c; l++)i = d, l !== _ && (i = ye.clone(i, !0, !0), s && ye.merge(o, M(i, "script"))), n.call(e[l], i, l);
                if (s)for (u = o[o.length - 1].ownerDocument, ye.map(o, x), l = 0; l < s; l++)i = o[l], Ve.test(i.type || "") && !ye._data(i, "globalEval") && ye.contains(u, i) && (i.src ? ye._evalUrl && ye._evalUrl(i.src) : ye.globalEval((i.text || i.textContent || i.innerHTML || "").replace(dt, "")));
                d = a = null
            }
            return e
        }

        function E(e, t, n) {
            for (var r, a = t ? ye.filter(t, e) : e, i = 0; null != (r = a[i]); i++)n || 1 !== r.nodeType || ye.cleanData(M(r)), r.parentNode && (n && ye.contains(r.ownerDocument, r) && L(M(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function A(e, t) {
            var n = ye(t.createElement(e)).appendTo(t.body), r = ye.css(n[0], "display");
            return n.detach(), r
        }

        function P(e) {
            var t = oe, n = mt[e];
            return n || (n = A(e, t), "none" !== n && n || (_t = (_t || ye("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (_t[0].contentWindow || _t[0].contentDocument).document, t.write(), t.close(), n = A(e, t), _t.detach()), mt[e] = n), n
        }

        function W(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function C(e) {
            if (e in xt)return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = bt.length; n--;)if (e = bt[n] + t, e in xt)return e
        }

        function F(e, t) {
            for (var n, r, a, i = [], s = 0, o = e.length; s < o; s++)r = e[s], r.style && (i[s] = ye._data(r, "olddisplay"), n = r.style.display, t ? (i[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (i[s] = ye._data(r, "olddisplay", P(r.nodeName)))) : (a = Re(r), (n && "none" !== n || !a) && ye._data(r, "olddisplay", a ? n : ye.css(r, "display"))));
            for (s = 0; s < o; s++)r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[s] || "" : "none"));
            return e
        }

        function O(e, t, n) {
            var r = wt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function N(e, t, n, r, a) {
            for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; i < 4; i += 2)"margin" === n && (s += ye.css(e, n + Ie[i], !0, a)), r ? ("content" === n && (s -= ye.css(e, "padding" + Ie[i], !0, a)), "margin" !== n && (s -= ye.css(e, "border" + Ie[i] + "Width", !0, a))) : (s += ye.css(e, "padding" + Ie[i], !0, a), "padding" !== n && (s += ye.css(e, "border" + Ie[i] + "Width", !0, a)));
            return s
        }

        function z(e, t, n) {
            var r = !0, a = "width" === t ? e.offsetWidth : e.offsetHeight, i = Mt(e), s = fe.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, i);
            if (a <= 0 || null == a) {
                if (a = Lt(e, t, i), (a < 0 || null == a) && (a = e.style[t]), ft.test(a))return a;
                r = s && (fe.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
            }
            return a + N(e, t, n || (s ? "border" : "content"), r, i) + "px"
        }

        function I(e, t, n, r, a) {
            return new I.prototype.init(e, t, n, r, a)
        }

        function R() {
            return n.setTimeout(function () {
                St = void 0
            }), St = ye.now()
        }

        function J(e, t) {
            var n, r = {height: e}, a = 0;
            for (t = t ? 1 : 0; a < 4; a += 2 - t)n = Ie[a], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function q(e, t, n) {
            for (var r, a = (G.tweeners[t] || []).concat(G.tweeners["*"]), i = 0, s = a.length; i < s; i++)if (r = a[i].call(n, t, e))return r
        }

        function U(e, t, n) {
            var r, a, i, s, o, u, d, l, c = this, _ = {}, m = e.style, h = e.nodeType && Re(e), f = ye._data(e, "fxshow");
            n.queue || (o = ye._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, u = o.empty.fire, o.empty.fire = function () {
                o.unqueued || u()
            }), o.unqueued++, c.always(function () {
                c.always(function () {
                    o.unqueued--, ye.queue(e, "fx").length || o.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [m.overflow, m.overflowX, m.overflowY], d = ye.css(e, "display"), l = "none" === d ? ye._data(e, "olddisplay") || P(e.nodeName) : d, "inline" === l && "none" === ye.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== P(e.nodeName) ? m.zoom = 1 : m.display = "inline-block")), n.overflow && (m.overflow = "hidden", fe.shrinkWrapBlocks() || c.always(function () {
                m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2]
            }));
            for (r in t)if (a = t[r], jt.exec(a)) {
                if (delete t[r], i = i || "toggle" === a, a === (h ? "hide" : "show")) {
                    if ("show" !== a || !f || void 0 === f[r])continue;
                    h = !0
                }
                _[r] = f && f[r] || ye.style(e, r)
            } else d = void 0;
            if (ye.isEmptyObject(_)) "inline" === ("none" === d ? P(e.nodeName) : d) && (m.display = d); else {
                f ? "hidden" in f && (h = f.hidden) : f = ye._data(e, "fxshow", {}), i && (f.hidden = !h), h ? ye(e).show() : c.done(function () {
                        ye(e).hide()
                    }), c.done(function () {
                    var t;
                    ye._removeData(e, "fxshow");
                    for (t in _)ye.style(e, t, _[t])
                });
                for (r in _)s = q(h ? f[r] : 0, r, c), r in f || (f[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function V(e, t) {
            var n, r, a, i, s;
            for (n in e)if (r = ye.camelCase(n), a = t[r], i = e[n], ye.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), s = ye.cssHooks[r], s && "expand" in s) {
                i = s.expand(i), delete e[r];
                for (n in i)n in e || (e[n] = i[n], t[n] = a)
            } else t[r] = a
        }

        function G(e, t, n) {
            var r, a, i = 0, s = G.prefilters.length, o = ye.Deferred().always(function () {
                delete u.elem
            }), u = function () {
                if (a)return !1;
                for (var t = St || R(), n = Math.max(0, d.startTime + d.duration - t), r = n / d.duration || 0, i = 1 - r, s = 0, u = d.tweens.length; s < u; s++)d.tweens[s].run(i);
                return o.notifyWith(e, [d, i, n]), i < 1 && u ? n : (o.resolveWith(e, [d]), !1)
            }, d = o.promise({
                elem: e,
                props: ye.extend({}, t),
                opts: ye.extend(!0, {specialEasing: {}, easing: ye.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: St || R(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ye.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? d.tweens.length : 0;
                    if (a)return this;
                    for (a = !0; n < r; n++)d.tweens[n].run(1);
                    return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
                }
            }), l = d.props;
            for (V(l, d.opts.specialEasing); i < s; i++)if (r = G.prefilters[i].call(d, e, l, d.opts))return ye.isFunction(r.stop) && (ye._queueHooks(d.elem, d.opts.queue).stop = ye.proxy(r.stop, r)), r;
            return ye.map(l, q, d), ye.isFunction(d.opts.start) && d.opts.start.call(e, d), ye.fx.timer(ye.extend(u, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }

        function $(e) {
            return ye.attr(e, "class") || ""
        }

        function B(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, a = 0, i = t.toLowerCase().match(Ae) || [];
                if (ye.isFunction(n))for (; r = i[a++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function X(e, t, n, r) {
            function a(o) {
                var u;
                return i[o] = !0, ye.each(e[o] || [], function (e, o) {
                    var d = o(t, n, r);
                    return "string" != typeof d || s || i[d] ? s ? !(u = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1)
                }), u
            }

            var i = {}, s = e === nn;
            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }

        function K(e, t) {
            var n, r, a = ye.ajaxSettings.flatOptions || {};
            for (r in t)void 0 !== t[r] && ((a[r] ? e : n || (n = {}))[r] = t[r]);
            return n && ye.extend(!0, e, n), e
        }

        function Q(e, t, n) {
            for (var r, a, i, s, o = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
            if (a)for (s in o)if (o[s] && o[s].test(a)) {
                u.unshift(s);
                break
            }
            if (u[0] in n) i = u[0]; else {
                for (s in n) {
                    if (!u[0] || e.converters[s + " " + u[0]]) {
                        i = s;
                        break
                    }
                    r || (r = s)
                }
                i = i || r
            }
            if (i)return i !== u[0] && u.unshift(i), n[i]
        }

        function Z(e, t, n, r) {
            var a, i, s, o, u, d = {}, l = e.dataTypes.slice();
            if (l[1])for (s in e.converters)d[s.toLowerCase()] = e.converters[s];
            for (i = l.shift(); i;)if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift())if ("*" === i) i = u; else if ("*" !== u && u !== i) {
                if (s = d[u + " " + i] || d["* " + i], !s)for (a in d)if (o = a.split(" "), o[1] === i && (s = d[u + " " + o[0]] || d["* " + o[0]])) {
                    s === !0 ? s = d[a] : d[a] !== !0 && (i = o[0], l.unshift(o[1]));
                    break
                }
                if (s !== !0)if (s && e["throws"]) t = s(t); else try {
                    t = s(t)
                } catch (c) {
                    return {state: "parsererror", error: s ? c : "No conversion from " + u + " to " + i}
                }
            }
            return {state: "success", data: t}
        }

        function ee(e) {
            return e.style && e.style.display || ye.css(e, "display")
        }

        function te(e) {
            if (!ye.contains(e.ownerDocument || oe, e))return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ee(e) || "hidden" === e.type)return !0;
                e = e.parentNode
            }
            return !1
        }

        function ne(e, t, n, r) {
            var a;
            if (ye.isArray(t)) ye.each(t, function (t, a) {
                n || un.test(e) ? r(e, a) : ne(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, r)
            }); else if (n || "object" !== ye.type(t)) r(e, t); else for (a in t)ne(e + "[" + a + "]", t[a], n, r)
        }

        function re() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        }

        function ae() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function ie(e) {
            return ye.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }

        var se = [], oe = n.document, ue = se.slice, de = se.concat, le = se.push, ce = se.indexOf, _e = {}, me = _e.toString, he = _e.hasOwnProperty, fe = {}, pe = "1.12.4", ye = function (e, t) {
            return new ye.fn.init(e, t)
        }, Me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Le = /^-ms-/, ge = /-([\da-z])/gi, ve = function (e, t) {
            return t.toUpperCase()
        };
        ye.fn = ye.prototype = {
            jquery: pe, constructor: ye, selector: "", length: 0, toArray: function () {
                return ue.call(this)
            }, get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : ue.call(this)
            }, pushStack: function (e) {
                var t = ye.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e) {
                return ye.each(this, e)
            }, map: function (e) {
                return this.pushStack(ye.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(ue.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: le, sort: se.sort, splice: se.splice
        }, ye.extend = ye.fn.extend = function () {
            var e, t, n, r, a, i, s = arguments[0] || {}, o = 1, u = arguments.length, d = !1;
            for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == typeof s || ye.isFunction(s) || (s = {}), o === u && (s = this, o--); o < u; o++)if (null != (a = arguments[o]))for (r in a)e = s[r], n = a[r], s !== n && (d && n && (ye.isPlainObject(n) || (t = ye.isArray(n))) ? (t ? (t = !1, i = e && ye.isArray(e) ? e : []) : i = e && ye.isPlainObject(e) ? e : {}, s[r] = ye.extend(d, i, n)) : void 0 !== n && (s[r] = n));
            return s
        }, ye.extend({
            expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === ye.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === ye.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                var t = e && e.toString();
                return !ye.isArray(e) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, isPlainObject: function (e) {
                var t;
                if (!e || "object" !== ye.type(e) || e.nodeType || ye.isWindow(e))return !1;
                try {
                    if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                if (!fe.ownFirst)for (t in e)return he.call(e, t);
                for (t in e);
                return void 0 === t || he.call(e, t)
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? _e[me.call(e)] || "object" : typeof e
            }, globalEval: function (e) {
                e && ye.trim(e) && (n.execScript || function (e) {
                    n.eval.call(n, e)
                })(e)
            }, camelCase: function (e) {
                return e.replace(Le, "ms-").replace(ge, ve)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t) {
                var n, r = 0;
                if (s(e))for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++); else for (r in e)if (t.call(e[r], r, e[r]) === !1)break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(Me, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)), n
            }, inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (ce)return ce.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, t) {
                for (var n = +t.length, r = 0, a = e.length; r < n;)e[a++] = t[r++];
                if (n !== n)for (; void 0 !== t[r];)e[a++] = t[r++];
                return e.length = a, e
            }, grep: function (e, t, n) {
                for (var r, a = [], i = 0, s = e.length, o = !n; i < s; i++)r = !t(e[i], i), r !== o && a.push(e[i]);
                return a
            }, map: function (e, t, n) {
                var r, a, i = 0, o = [];
                if (s(e))for (r = e.length; i < r; i++)a = t(e[i], i, n), null != a && o.push(a); else for (i in e)a = t(e[i], i, n), null != a && o.push(a);
                return de.apply([], o)
            }, guid: 1, proxy: function (e, t) {
                var n, r, a;
                if ("string" == typeof t && (a = e[t], t = e, e = a), ye.isFunction(e))return n = ue.call(arguments, 2), r = function () {
                    return e.apply(t || this, n.concat(ue.call(arguments)))
                }, r.guid = e.guid = e.guid || ye.guid++, r
            }, now: function () {
                return +new Date
            }, support: fe
        }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = se[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            _e["[object " + t + "]"] = t.toLowerCase()
        });
        var Ye = /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
            function (e) {
                function t(e, t, n, r) {
                    var a, i, s, o, u, d, c, m, h = t && t.ownerDocument, f = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)return n;
                    if (!r && ((t ? t.ownerDocument || t : z) !== E && j(t), t = t || E, P)) {
                        if (11 !== f && (d = ye.exec(e)))if (a = d[1]) {
                            if (9 === f) {
                                if (!(s = t.getElementById(a)))return n;
                                if (s.id === a)return n.push(s), n
                            } else if (h && (s = h.getElementById(a)) && O(t, s) && s.id === a)return n.push(s), n
                        } else {
                            if (d[2])return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = d[3]) && v.getElementsByClassName && t.getElementsByClassName)return Q.apply(n, t.getElementsByClassName(a)), n
                        }
                        if (v.qsa && !U[e + " "] && (!W || !W.test(e))) {
                            if (1 !== f) h = t, m = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((o = t.getAttribute("id")) ? o = o.replace(Le, "\\$&") : t.setAttribute("id", o = N), c = D(e), i = c.length, u = _e.test(o) ? "#" + o : "[id='" + o + "']"; i--;)c[i] = u + " " + _(c[i]);
                                m = c.join(","), h = Me.test(e) && l(t.parentNode) || t
                            }
                            if (m)try {
                                return Q.apply(n, h.querySelectorAll(m)), n
                            } catch (p) {
                            } finally {
                                o === N && t.removeAttribute("id")
                            }
                        }
                    }
                    return b(e.replace(oe, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > Y.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }

                    var t = [];
                    return e
                }

                function r(e) {
                    return e[N] = !0, e
                }

                function a(e) {
                    var t = E.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function i(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;)Y.attrHandle[n[r]] = t
                }

                function s(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                    if (r)return r;
                    if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                    return e ? 1 : -1
                }

                function o(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function d(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var a, i = e([], n.length, t), s = i.length; s--;)n[a = i[s]] && (n[a] = !(r[a] = n[a]))
                        })
                    })
                }

                function l(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function c() {
                }

                function _(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
                    return r
                }

                function m(e, t, n) {
                    var r = t.dir, a = n && "parentNode" === r, i = R++;
                    return t.first ? function (t, n, i) {
                            for (; t = t[r];)if (1 === t.nodeType || a)return e(t, n, i)
                        } : function (t, n, s) {
                            var o, u, d, l = [I, i];
                            if (s) {
                                for (; t = t[r];)if ((1 === t.nodeType || a) && e(t, n, s))return !0
                            } else for (; t = t[r];)if (1 === t.nodeType || a) {
                                if (d = t[N] || (t[N] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), (o = u[r]) && o[0] === I && o[1] === i)return l[2] = o[2];
                                if (u[r] = l, l[2] = e(t, n, s))return !0
                            }
                        }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, r) {
                            for (var a = e.length; a--;)if (!e[a](t, n, r))return !1;
                            return !0
                        } : e[0]
                }

                function f(e, n, r) {
                    for (var a = 0, i = n.length; a < i; a++)t(e, n[a], r);
                    return r
                }

                function p(e, t, n, r, a) {
                    for (var i, s = [], o = 0, u = e.length, d = null != t; o < u; o++)(i = e[o]) && (n && !n(i, r, a) || (s.push(i), d && t.push(o)));
                    return s
                }

                function y(e, t, n, a, i, s) {
                    return a && !a[N] && (a = y(a)), i && !i[N] && (i = y(i, s)), r(function (r, s, o, u) {
                        var d, l, c, _ = [], m = [], h = s.length, y = r || f(t || "*", o.nodeType ? [o] : o, []), M = !e || !r && t ? y : p(y, _, e, o, u), L = n ? i || (r ? e : h || a) ? [] : s : M;
                        if (n && n(M, L, o, u), a)for (d = p(L, m), a(d, [], o, u), l = d.length; l--;)(c = d[l]) && (L[m[l]] = !(M[m[l]] = c));
                        if (r) {
                            if (i || e) {
                                if (i) {
                                    for (d = [], l = L.length; l--;)(c = L[l]) && d.push(M[l] = c);
                                    i(null, L = [], d, u)
                                }
                                for (l = L.length; l--;)(c = L[l]) && (d = i ? ee(r, c) : _[l]) > -1 && (r[d] = !(s[d] = c))
                            }
                        } else L = p(L === s ? L.splice(h, L.length) : L), i ? i(null, s, L, u) : Q.apply(s, L)
                    })
                }

                function M(e) {
                    for (var t, n, r, a = e.length, i = Y.relative[e[0].type], s = i || Y.relative[" "], o = i ? 1 : 0, u = m(function (e) {
                        return e === t
                    }, s, !0), d = m(function (e) {
                        return ee(t, e) > -1
                    }, s, !0), l = [function (e, n, r) {
                        var a = !i && (r || n !== x) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                        return t = null, a
                    }]; o < a; o++)if (n = Y.relative[e[o].type]) l = [m(h(l), n)]; else {
                        if (n = Y.filter[e[o].type].apply(null, e[o].matches), n[N]) {
                            for (r = ++o; r < a && !Y.relative[e[r].type]; r++);
                            return y(o > 1 && h(l), o > 1 && _(e.slice(0, o - 1).concat({value: " " === e[o - 2].type ? "*" : ""})).replace(oe, "$1"), n, o < r && M(e.slice(o, r)), r < a && M(e = e.slice(r)), r < a && _(e))
                        }
                        l.push(n)
                    }
                    return h(l)
                }

                function L(e, n) {
                    var a = n.length > 0, i = e.length > 0, s = function (r, s, o, u, d) {
                        var l, c, _, m = 0, h = "0", f = r && [], y = [], M = x, L = r || i && Y.find.TAG("*", d), g = I += null == M ? 1 : Math.random() || .1, v = L.length;
                        for (d && (x = s === E || s || d); h !== v && null != (l = L[h]); h++) {
                            if (i && l) {
                                for (c = 0, s || l.ownerDocument === E || (j(l), o = !P); _ = e[c++];)if (_(l, s || E, o)) {
                                    u.push(l);
                                    break
                                }
                                d && (I = g)
                            }
                            a && ((l = !_ && l) && m--, r && f.push(l))
                        }
                        if (m += h, a && h !== m) {
                            for (c = 0; _ = n[c++];)_(f, y, s, o);
                            if (r) {
                                if (m > 0)for (; h--;)f[h] || y[h] || (y[h] = X.call(u));
                                y = p(y)
                            }
                            Q.apply(u, y), d && !r && y.length > 0 && m + n.length > 1 && t.uniqueSort(u)
                        }
                        return d && (I = g, x = M), f
                    };
                    return a ? r(s) : s
                }

                var g, v, Y, k, w, D, T, b, x, S, H, j, E, A, P, W, C, F, O, N = "sizzle" + 1 * new Date, z = e.document, I = 0, R = 0, J = n(), q = n(), U = n(), V = function (e, t) {
                    return e === t && (H = !0), 0
                }, G = 1 << 31, $ = {}.hasOwnProperty, B = [], X = B.pop, K = B.push, Q = B.push, Z = B.slice, ee = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
                    return -1
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ae = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), ce = new RegExp(ie), _e = new RegExp("^" + re + "$"), me = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re + "|[*])"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + ie),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                }, he = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Me = /[+~]/, Le = /'|\\/g, ge = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), ve = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, Ye = function () {
                    j()
                };
                try {
                    Q.apply(B = Z.call(z.childNodes), z.childNodes), B[z.childNodes.length].nodeType
                } catch (ke) {
                    Q = {
                        apply: B.length ? function (e, t) {
                                K.apply(e, Z.call(t))
                            } : function (e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];);
                                e.length = n - 1
                            }
                    }
                }
                v = t.support = {}, w = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, j = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : z;
                    return r !== E && 9 === r.nodeType && r.documentElement ? (E = r, A = E.documentElement, P = !w(E), (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ye, !1) : n.attachEvent && n.attachEvent("onunload", Ye)), v.attributes = a(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), v.getElementsByTagName = a(function (e) {
                            return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                        }), v.getElementsByClassName = pe.test(E.getElementsByClassName), v.getById = a(function (e) {
                            return A.appendChild(e).id = N, !E.getElementsByName || !E.getElementsByName(N).length
                        }), v.getById ? (Y.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && P) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }, Y.filter.ID = function (e) {
                                var t = e.replace(ge, ve);
                                return function (e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete Y.find.ID, Y.filter.ID = function (e) {
                                var t = e.replace(ge, ve);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }), Y.find.TAG = v.getElementsByTagName ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
                            } : function (e, t) {
                                var n, r = [], a = 0, i = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = i[a++];)1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return i
                            }, Y.find.CLASS = v.getElementsByClassName && function (e, t) {
                                if ("undefined" != typeof t.getElementsByClassName && P)return t.getElementsByClassName(e)
                            }, C = [], W = [], (v.qsa = pe.test(E.querySelectorAll)) && (a(function (e) {
                            A.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && W.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || W.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + N + "-]").length || W.push("~="), e.querySelectorAll(":checked").length || W.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || W.push(".#.+[+~]")
                        }), a(function (e) {
                            var t = E.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && W.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), W.push(",.*:")
                        })), (v.matchesSelector = pe.test(F = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && a(function (e) {
                            v.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), C.push("!=", ie)
                        }), W = W.length && new RegExp(W.join("|")), C = C.length && new RegExp(C.join("|")), t = pe.test(A.compareDocumentPosition), O = t || pe.test(A.contains) ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function (e, t) {
                                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                                return !1
                            }, V = t ? function (e, t) {
                                if (e === t)return H = !0, 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === z && O(z, e) ? -1 : t === E || t.ownerDocument === z && O(z, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
                            } : function (e, t) {
                                if (e === t)return H = !0, 0;
                                var n, r = 0, a = e.parentNode, i = t.parentNode, o = [e], u = [t];
                                if (!a || !i)return e === E ? -1 : t === E ? 1 : a ? -1 : i ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                                if (a === i)return s(e, t);
                                for (n = e; n = n.parentNode;)o.unshift(n);
                                for (n = t; n = n.parentNode;)u.unshift(n);
                                for (; o[r] === u[r];)r++;
                                return r ? s(o[r], u[r]) : o[r] === z ? -1 : u[r] === z ? 1 : 0
                            }, E) : E
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== E && j(e), n = n.replace(le, "='$1']"), v.matchesSelector && P && !U[n + " "] && (!C || !C.test(n)) && (!W || !W.test(n)))try {
                        var r = F.call(e, n);
                        if (r || v.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
                    } catch (a) {
                    }
                    return t(n, E, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== E && j(e), O(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== E && j(e);
                    var n = Y.attrHandle[t.toLowerCase()], r = n && $.call(Y.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                    return void 0 !== r ? r : v.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], r = 0, a = 0;
                    if (H = !v.detectDuplicates, S = !v.sortStable && e.slice(0), e.sort(V), H) {
                        for (; t = e[a++];)t === e[a] && (r = n.push(a));
                        for (; r--;)e.splice(n[r], 1)
                    }
                    return S = null, e
                }, k = t.getText = function (e) {
                    var t, n = "", r = 0, a = e.nodeType;
                    if (a) {
                        if (1 === a || 9 === a || 11 === a) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)n += k(e)
                        } else if (3 === a || 4 === a)return e.nodeValue
                    } else for (; t = e[r++];)n += k(t);
                    return n
                }, Y = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: me,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ge, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return me.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = D(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(ge, ve).toLowerCase();
                            return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                        }, CLASS: function (e) {
                            var t = J[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && J(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, r) {
                            return function (a) {
                                var i = t.attr(a, e);
                                return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                            }
                        }, CHILD: function (e, t, n, r, a) {
                            var i = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), o = "of-type" === t;
                            return 1 === r && 0 === a ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, u) {
                                    var d, l, c, _, m, h, f = i !== s ? "nextSibling" : "previousSibling", p = t.parentNode, y = o && t.nodeName.toLowerCase(), M = !u && !o, L = !1;
                                    if (p) {
                                        if (i) {
                                            for (; f;) {
                                                for (_ = t; _ = _[f];)if (o ? _.nodeName.toLowerCase() === y : 1 === _.nodeType)return !1;
                                                h = f = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [s ? p.firstChild : p.lastChild], s && M) {
                                            for (_ = p, c = _[N] || (_[N] = {}), l = c[_.uniqueID] || (c[_.uniqueID] = {}), d = l[e] || [], m = d[0] === I && d[1], L = m && d[2], _ = m && p.childNodes[m]; _ = ++m && _ && _[f] || (L = m = 0) || h.pop();)if (1 === _.nodeType && ++L && _ === t) {
                                                l[e] = [I, m, L];
                                                break
                                            }
                                        } else if (M && (_ = t, c = _[N] || (_[N] = {}), l = c[_.uniqueID] || (c[_.uniqueID] = {}), d = l[e] || [], m = d[0] === I && d[1], L = m), L === !1)for (; (_ = ++m && _ && _[f] || (L = m = 0) || h.pop()) && ((o ? _.nodeName.toLowerCase() !== y : 1 !== _.nodeType) || !++L || (M && (c = _[N] || (_[N] = {}), l = c[_.uniqueID] || (c[_.uniqueID] = {}), l[e] = [I, L]), _ !== t)););
                                        return L -= a, L === r || L % r === 0 && L / r >= 0
                                    }
                                }
                        }, PSEUDO: function (e, n) {
                            var a, i = Y.pseudos[e] || Y.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return i[N] ? i(n) : i.length > 1 ? (a = [e, e, "", n], Y.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                            for (var r, a = i(e, n), s = a.length; s--;)r = ee(e, a[s]), e[r] = !(t[r] = a[s])
                                        }) : function (e) {
                                            return i(e, 0, a)
                                        }) : i
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [], n = [], a = T(e.replace(oe, "$1"));
                            return a[N] ? r(function (e, t, n, r) {
                                    for (var i, s = a(e, null, r, []), o = e.length; o--;)(i = s[o]) && (e[o] = !(t[o] = i))
                                }) : function (e, r, i) {
                                    return t[0] = e, a(t, null, i, n), t[0] = null, !n.pop()
                                }
                        }), has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: r(function (e) {
                            return e = e.replace(ge, ve), function (t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }), lang: r(function (e) {
                            return _e.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ve).toLowerCase(), function (t) {
                                var n;
                                do if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === A
                        }, focus: function (e) {
                            return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !Y.pseudos.empty(e)
                        }, header: function (e) {
                            return fe.test(e.nodeName)
                        }, input: function (e) {
                            return he.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: d(function () {
                            return [0]
                        }), last: d(function (e, t) {
                            return [t - 1]
                        }), eq: d(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: d(function (e, t) {
                            for (var n = 0; n < t; n += 2)e.push(n);
                            return e
                        }), odd: d(function (e, t) {
                            for (var n = 1; n < t; n += 2)e.push(n);
                            return e
                        }), lt: d(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                            return e
                        }), gt: d(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                            return e
                        })
                    }
                }, Y.pseudos.nth = Y.pseudos.eq;
                for (g in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})Y.pseudos[g] = o(g);
                for (g in{submit: !0, reset: !0})Y.pseudos[g] = u(g);
                return c.prototype = Y.filters = Y.pseudos, Y.setFilters = new c, D = t.tokenize = function (e, n) {
                    var r, a, i, s, o, u, d, l = q[e + " "];
                    if (l)return n ? 0 : l.slice(0);
                    for (o = e, u = [], d = Y.preFilter; o;) {
                        r && !(a = ue.exec(o)) || (a && (o = o.slice(a[0].length) || o), u.push(i = [])), r = !1, (a = de.exec(o)) && (r = a.shift(), i.push({
                            value: r,
                            type: a[0].replace(oe, " ")
                        }), o = o.slice(r.length));
                        for (s in Y.filter)!(a = me[s].exec(o)) || d[s] && !(a = d[s](a)) || (r = a.shift(), i.push({
                            value: r,
                            type: s,
                            matches: a
                        }), o = o.slice(r.length));
                        if (!r)break
                    }
                    return n ? o.length : o ? t.error(e) : q(e, u).slice(0)
                }, T = t.compile = function (e, t) {
                    var n, r = [], a = [], i = U[e + " "];
                    if (!i) {
                        for (t || (t = D(e)), n = t.length; n--;)i = M(t[n]), i[N] ? r.push(i) : a.push(i);
                        i = U(e, L(a, r)), i.selector = e
                    }
                    return i
                }, b = t.select = function (e, t, n, r) {
                    var a, i, s, o, u, d = "function" == typeof e && e, c = !r && D(e = d.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (s = i[0]).type && v.getById && 9 === t.nodeType && P && Y.relative[i[1].type]) {
                            if (t = (Y.find.ID(s.matches[0].replace(ge, ve), t) || [])[0], !t)return n;
                            d && (t = t.parentNode), e = e.slice(i.shift().value.length)
                        }
                        for (a = me.needsContext.test(e) ? 0 : i.length; a-- && (s = i[a], !Y.relative[o = s.type]);)if ((u = Y.find[o]) && (r = u(s.matches[0].replace(ge, ve), Me.test(i[0].type) && l(t.parentNode) || t))) {
                            if (i.splice(a, 1), e = r.length && _(i), !e)return Q.apply(n, r), n;
                            break
                        }
                    }
                    return (d || T(e, c))(r, t, !P, n, !t || Me.test(e) && l(t.parentNode) || t), n
                }, v.sortStable = N.split("").sort(V).join("") === N, v.detectDuplicates = !!H, j(), v.sortDetached = a(function (e) {
                    return 1 & e.compareDocumentPosition(E.createElement("div"))
                }), a(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || i("type|href|height|width", function (e, t, n) {
                    if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), v.attributes && a(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || i("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
                }), a(function (e) {
                    return null == e.getAttribute("disabled")
                }) || i(te, function (e, t, n) {
                    var r;
                    if (!n)return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(n);
        ye.find = Ye, ye.expr = Ye.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = Ye.uniqueSort, ye.text = Ye.getText, ye.isXMLDoc = Ye.isXML, ye.contains = Ye.contains;
        var ke = function (e, t, n) {
            for (var r = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (a && ye(e).is(n))break;
                r.push(e)
            }
            return r
        }, we = function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }, De = ye.expr.match.needsContext, Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, be = /^.[^:#\[\.,]*$/;
        ye.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ye.find.matchesSelector(r, e) ? [r] : [] : ye.find.matches(e, ye.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
        }, ye.fn.extend({
            find: function (e) {
                var t, n = [], r = this, a = r.length;
                if ("string" != typeof e)return this.pushStack(ye(e).filter(function () {
                    for (t = 0; t < a; t++)if (ye.contains(r[t], this))return !0
                }));
                for (t = 0; t < a; t++)ye.find(e, r[t], n);
                return n = this.pushStack(a > 1 ? ye.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            }, filter: function (e) {
                return this.pushStack(o(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(o(this, e || [], !0))
            }, is: function (e) {
                return !!o(this, "string" == typeof e && De.test(e) ? ye(e) : e || [], !1).length
            }
        });
        var xe, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, He = ye.fn.init = function (e, t, n) {
            var r, a;
            if (!e)return this;
            if (n = n || xe, "string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), Te.test(r[1]) && ye.isPlainObject(t))for (r in t)ye.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (a = oe.getElementById(r[2]), a && a.parentNode) {
                    if (a.id !== r[2])return xe.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = oe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ye.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ye) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ye.makeArray(e, this))
        };
        He.prototype = ye.fn, xe = ye(oe);
        var je = /^(?:parents|prev(?:Until|All))/, Ee = {children: !0, contents: !0, next: !0, prev: !0};
        ye.fn.extend({
            has: function (e) {
                var t, n = ye(e, this), r = n.length;
                return this.filter(function () {
                    for (t = 0; t < r; t++)if (ye.contains(this, n[t]))return !0
                })
            }, closest: function (e, t) {
                for (var n, r = 0, a = this.length, i = [], s = De.test(e) || "string" != typeof e ? ye(e, t || this.context) : 0; r < a; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                    i.push(n);
                    break
                }
                return this.pushStack(i.length > 1 ? ye.uniqueSort(i) : i)
            }, index: function (e) {
                return e ? "string" == typeof e ? ye.inArray(this[0], ye(e)) : ye.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ye.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return ke(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return ke(e, "parentNode", n)
            }, next: function (e) {
                return u(e, "nextSibling")
            }, prev: function (e) {
                return u(e, "previousSibling")
            }, nextAll: function (e) {
                return ke(e, "nextSibling")
            }, prevAll: function (e) {
                return ke(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return ke(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return ke(e, "previousSibling", n)
            }, siblings: function (e) {
                return we((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return we(e.firstChild)
            }, contents: function (e) {
                return ye.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ye.merge([], e.childNodes)
            }
        }, function (e, t) {
            ye.fn[e] = function (n, r) {
                var a = ye.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = ye.filter(r, a)), this.length > 1 && (Ee[e] || (a = ye.uniqueSort(a)), je.test(e) && (a = a.reverse())), this.pushStack(a)
            }
        });
        var Ae = /\S+/g;
        ye.Callbacks = function (e) {
            e = "string" == typeof e ? d(e) : ye.extend({}, e);
            var t, n, r, a, i = [], s = [], o = -1, u = function () {
                for (a = e.once, r = t = !0; s.length; o = -1)for (n = s.shift(); ++o < i.length;)i[o].apply(n[0], n[1]) === !1 && e.stopOnFalse && (o = i.length, n = !1);
                e.memory || (n = !1), t = !1, a && (i = n ? [] : "")
            }, l = {
                add: function () {
                    return i && (n && !t && (o = i.length - 1, s.push(n)), function r(t) {
                        ye.each(t, function (t, n) {
                            ye.isFunction(n) ? e.unique && l.has(n) || i.push(n) : n && n.length && "string" !== ye.type(n) && r(n)
                        })
                    }(arguments), n && !t && u()), this
                }, remove: function () {
                    return ye.each(arguments, function (e, t) {
                        for (var n; (n = ye.inArray(t, i, n)) > -1;)i.splice(n, 1), n <= o && o--
                    }), this
                }, has: function (e) {
                    return e ? ye.inArray(e, i) > -1 : i.length > 0
                }, empty: function () {
                    return i && (i = []), this
                }, disable: function () {
                    return a = s = [], i = n = "", this
                }, disabled: function () {
                    return !i
                }, lock: function () {
                    return a = !0, n || l.disable(), this
                }, locked: function () {
                    return !!a
                }, fireWith: function (e, n) {
                    return a || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                }, fire: function () {
                    return l.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return l
        }, ye.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", ye.Callbacks("once memory"), "resolved"], ["reject", "fail", ye.Callbacks("once memory"), "rejected"], ["notify", "progress", ye.Callbacks("memory")]], n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return ye.Deferred(function (n) {
                            ye.each(t, function (t, i) {
                                var s = ye.isFunction(e[t]) && e[t];
                                a[i[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? ye.extend(e, r) : r
                    }
                }, a = {};
                return r.pipe = r.then, ye.each(t, function (e, i) {
                    var s = i[2], o = i[3];
                    r[i[1]] = s.add, o && s.add(function () {
                        n = o
                    }, t[1 ^ e][2].disable, t[2][2].lock), a[i[0]] = function () {
                        return a[i[0] + "With"](this === a ? r : this, arguments), this
                    }, a[i[0] + "With"] = s.fireWith
                }), r.promise(a), e && e.call(a, a), a
            }, when: function (e) {
                var t, n, r, a = 0, i = ue.call(arguments), s = i.length, o = 1 !== s || e && ye.isFunction(e.promise) ? s : 0, u = 1 === o ? e : ye.Deferred(), d = function (e, n, r) {
                    return function (a) {
                        n[e] = this, r[e] = arguments.length > 1 ? ue.call(arguments) : a, r === t ? u.notifyWith(n, r) : --o || u.resolveWith(n, r)
                    }
                };
                if (s > 1)for (t = new Array(s), n = new Array(s), r = new Array(s); a < s; a++)i[a] && ye.isFunction(i[a].promise) ? i[a].promise().progress(d(a, n, t)).done(d(a, r, i)).fail(u.reject) : --o;
                return o || u.resolveWith(r, i), u.promise()
            }
        });
        var Pe;
        ye.fn.ready = function (e) {
            return ye.ready.promise().done(e), this
        }, ye.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? ye.readyWait++ : ye.ready(!0)
            }, ready: function (e) {
                (e === !0 ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, e !== !0 && --ye.readyWait > 0 || (Pe.resolveWith(oe, [ye]), ye.fn.triggerHandler && (ye(oe).triggerHandler("ready"), ye(oe).off("ready"))))
            }
        }), ye.ready.promise = function (e) {
            if (!Pe)if (Pe = ye.Deferred(), "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll) n.setTimeout(ye.ready); else if (oe.addEventListener) oe.addEventListener("DOMContentLoaded", c), n.addEventListener("load", c); else {
                oe.attachEvent("onreadystatechange", c), n.attachEvent("onload", c);
                var t = !1;
                try {
                    t = null == n.frameElement && oe.documentElement
                } catch (r) {
                }
                t && t.doScroll && !function a() {
                    if (!ye.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (e) {
                            return n.setTimeout(a, 50)
                        }
                        l(), ye.ready()
                    }
                }()
            }
            return Pe.promise(e)
        }, ye.ready.promise();
        var We;
        for (We in ye(fe))break;
        fe.ownFirst = "0" === We, fe.inlineBlockNeedsLayout = !1, ye(function () {
            var e, t, n, r;
            n = oe.getElementsByTagName("body")[0], n && n.style && (t = oe.createElement("div"), r = oe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }), function () {
            var e = oe.createElement("div");
            fe.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                fe.deleteExpando = !1
            }
            e = null
        }();
        var Ce = function (e) {
            var t = ye.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        }, Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Oe = /([A-Z])/g;
        ye.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (e) {
                return e = e.nodeType ? ye.cache[e[ye.expando]] : e[ye.expando], !!e && !m(e)
            },
            data: function (e, t, n) {
                return h(e, t, n)
            },
            removeData: function (e, t) {
                return f(e, t)
            },
            _data: function (e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return f(e, t, !0)
            }
        }), ye.fn.extend({
            data: function (e, t) {
                var n, r, a, i = this[0], s = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (a = ye.data(i), 1 === i.nodeType && !ye._data(i, "parsedAttrs"))) {
                        for (n = s.length; n--;)s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ye.camelCase(r.slice(5)), _(i, r, a[r])));
                        ye._data(i, "parsedAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof e ? this.each(function () {
                        ye.data(this, e)
                    }) : arguments.length > 1 ? this.each(function () {
                            ye.data(this, e, t)
                        }) : i ? _(i, e, ye.data(i, e)) : void 0
            }, removeData: function (e) {
                return this.each(function () {
                    ye.removeData(this, e)
                })
            }
        }), ye.extend({
            queue: function (e, t, n) {
                var r;
                if (e)return t = (t || "fx") + "queue", r = ye._data(e, t), n && (!r || ye.isArray(n) ? r = ye._data(e, t, ye.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = ye.queue(e, t), r = n.length, a = n.shift(), i = ye._queueHooks(e, t), s = function () {
                    ye.dequeue(e, t)
                };
                "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete i.stop, a.call(e, s, i)), !r && i && i.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ye._data(e, n) || ye._data(e, n, {
                        empty: ye.Callbacks("once memory").add(function () {
                            ye._removeData(e, t + "queue"), ye._removeData(e, n)
                        })
                    })
            }
        }), ye.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                            var n = ye.queue(this, e, t);
                            ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e)
                        })
            }, dequeue: function (e) {
                return this.each(function () {
                    ye.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, r = 1, a = ye.Deferred(), i = this, s = this.length, o = function () {
                    --r || a.resolveWith(i, [i])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = ye._data(i[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(o));
                return o(), a.promise(t)
            }
        }), function () {
            var e;
            fe.shrinkWrapBlocks = function () {
                if (null != e)return e;
                e = !1;
                var t, n, r;
                return n = oe.getElementsByTagName("body")[0], n && n.style ? (t = oe.createElement("div"), r = oe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(oe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
        var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ze = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"), Ie = ["Top", "Right", "Bottom", "Left"], Re = function (e, t) {
            return e = t || e, "none" === ye.css(e, "display") || !ye.contains(e.ownerDocument, e)
        }, Je = function (e, t, n, r, a, i, s) {
            var o = 0, u = e.length, d = null == n;
            if ("object" === ye.type(n)) {
                a = !0;
                for (o in n)Je(e, t, o, n[o], !0, i, s)
            } else if (void 0 !== r && (a = !0, ye.isFunction(r) || (s = !0), d && (s ? (t.call(e, r), t = null) : (d = t, t = function (e, t, n) {
                        return d.call(ye(e), n)
                    })), t))for (; o < u; o++)t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
            return a ? e : d ? t.call(e) : u ? t(e[0], n) : i
        }, qe = /^(?:checkbox|radio)$/i, Ue = /<([\w:-]+)/, Ve = /^$|\/(?:java|ecma)script/i, Ge = /^\s+/, $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !function () {
            var e = oe.createElement("div"), t = oe.createDocumentFragment(), n = oe.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", fe.leadingWhitespace = 3 === e.firstChild.nodeType, fe.tbody = !e.getElementsByTagName("tbody").length, fe.htmlSerialize = !!e.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== oe.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), fe.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = oe.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!e.addEventListener, e[ye.expando] = 1, fe.attributes = !e.getAttribute(ye.expando)
        }();
        var Be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: fe.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
        var Xe = /<|&#?\w+;/, Ke = /<tbody/i;
        !function () {
            var e, t, r = oe.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            })t = "on" + e, (fe[e] = t in n) || (r.setAttribute(t, "t"), fe[e] = r.attributes[t].expando === !1);
            r = null
        }();
        var Qe = /^(?:input|select|textarea)$/i, Ze = /^key/, et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, tt = /^(?:focusinfocus|focusoutblur)$/, nt = /^([^.]*)(?:\.(.+)|)/;
        ye.event = {
            global: {},
            add: function (e, t, n, r, a) {
                var i, s, o, u, d, l, c, _, m, h, f, p = ye._data(e);
                if (p) {
                    for (n.handler && (u = n, n = u.handler, a = u.selector), n.guid || (n.guid = ye.guid++), (s = p.events) || (s = p.events = {}), (l = p.handle) || (l = p.handle = function (e) {
                        return "undefined" == typeof ye || e && ye.event.triggered === e.type ? void 0 : ye.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = e), t = (t || "").match(Ae) || [""], o = t.length; o--;)i = nt.exec(t[o]) || [], m = f = i[1], h = (i[2] || "").split(".").sort(), m && (d = ye.event.special[m] || {}, m = (a ? d.delegateType : d.bindType) || m, d = ye.event.special[m] || {}, c = ye.extend({
                        type: m,
                        origType: f,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && ye.expr.match.needsContext.test(a),
                        namespace: h.join(".")
                    }, u), (_ = s[m]) || (_ = s[m] = [], _.delegateCount = 0, d.setup && d.setup.call(e, r, h, l) !== !1 || (e.addEventListener ? e.addEventListener(m, l, !1) : e.attachEvent && e.attachEvent("on" + m, l))), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), a ? _.splice(_.delegateCount++, 0, c) : _.push(c), ye.event.global[m] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, r, a) {
                var i, s, o, u, d, l, c, _, m, h, f, p = ye.hasData(e) && ye._data(e);
                if (p && (l = p.events)) {
                    for (t = (t || "").match(Ae) || [""], d = t.length; d--;)if (o = nt.exec(t[d]) || [], m = f = o[1], h = (o[2] || "").split(".").sort(), m) {
                        for (c = ye.event.special[m] || {}, m = (r ? c.delegateType : c.bindType) || m, _ = l[m] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = i = _.length; i--;)s = _[i], !a && f !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (_.splice(i, 1), s.selector && _.delegateCount--, c.remove && c.remove.call(e, s));
                        u && !_.length && (c.teardown && c.teardown.call(e, h, p.handle) !== !1 || ye.removeEvent(e, m, p.handle), delete l[m])
                    } else for (m in l)ye.event.remove(e, m + t[d], n, r, !0);
                    ye.isEmptyObject(l) && (delete p.handle, ye._removeData(e, "events"))
                }
            },
            trigger: function (e, t, r, a) {
                var i, s, o, u, d, l, c, _ = [r || oe], m = he.call(e, "type") ? e.type : e, h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = l = r = r || oe, 3 !== r.nodeType && 8 !== r.nodeType && !tt.test(m + ye.event.triggered) && (m.indexOf(".") > -1 && (h = m.split("."), m = h.shift(), h.sort()), s = m.indexOf(":") < 0 && "on" + m, e = e[ye.expando] ? e : new ye.Event(m, "object" == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ye.makeArray(t, [e]), d = ye.event.special[m] || {}, a || !d.trigger || d.trigger.apply(r, t) !== !1)) {
                    if (!a && !d.noBubble && !ye.isWindow(r)) {
                        for (u = d.delegateType || m, tt.test(u + m) || (o = o.parentNode); o; o = o.parentNode)_.push(o), l = o;
                        l === (r.ownerDocument || oe) && _.push(l.defaultView || l.parentWindow || n)
                    }
                    for (c = 0; (o = _[c++]) && !e.isPropagationStopped();)e.type = c > 1 ? u : d.bindType || m, i = (ye._data(o, "events") || {})[e.type] && ye._data(o, "handle"), i && i.apply(o, t), i = s && o[s], i && i.apply && Ce(o) && (e.result = i.apply(o, t), e.result === !1 && e.preventDefault());
                    if (e.type = m, !a && !e.isDefaultPrevented() && (!d._default || d._default.apply(_.pop(), t) === !1) && Ce(r) && s && r[m] && !ye.isWindow(r)) {
                        l = r[s], l && (r[s] = null), ye.event.triggered = m;
                        try {
                            r[m]()
                        } catch (f) {
                        }
                        ye.event.triggered = void 0, l && (r[s] = l)
                    }
                    return e.result
                }
            },
            dispatch: function (e) {
                e = ye.event.fix(e);
                var t, n, r, a, i, s = [], o = ue.call(arguments), u = (ye._data(this, "events") || {})[e.type] || [], d = ye.event.special[e.type] || {};
                if (o[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                    for (s = ye.event.handlers.call(this, e, u), t = 0; (a = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = a.elem, n = 0; (i = a.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, r = ((ye.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, o), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, r, a, i, s = [], o = t.delegateCount, u = e.target;
                if (o && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                    for (r = [], n = 0; n < o; n++)i = t[n], a = i.selector + " ", void 0 === r[a] && (r[a] = i.needsContext ? ye(a, this).index(u) > -1 : ye.find(a, this, null, [u]).length), r[a] && r.push(i);
                    r.length && s.push({elem: u, handlers: r})
                }
                return o < t.length && s.push({elem: this, handlers: t.slice(o)}), s
            },
            fix: function (e) {
                if (e[ye.expando])return e;
                var t, n, r, a = e.type, i = e, s = this.fixHooks[a];
                for (s || (this.fixHooks[a] = s = et.test(a) ? this.mouseHooks : Ze.test(a) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ye.Event(i), t = r.length; t--;)n = r[t], e[n] = i[n];
                return e.target || (e.target = i.srcElement || oe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, i) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, r, a, i = t.button, s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || oe, a = r.documentElement, n = r.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== w() && this.focus)try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === w() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (ye.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                    }, _default: function (e) {
                        return ye.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n) {
                var r = ye.extend(new ye.Event, n, {type: e, isSimulated: !0});
                ye.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ye.removeEvent = oe.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            } : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
            }, ye.Event = function (e, t) {
            return this instanceof ye.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? Y : k) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), void(this[ye.expando] = !0)) : new ye.Event(e, t)
        }, ye.Event.prototype = {
            constructor: ye.Event,
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ye.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            ye.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = this, a = e.relatedTarget, i = e.handleObj;
                    return a && (a === r || ye.contains(r, a)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), fe.submit || (ye.event.special.submit = {
            setup: function () {
                return !ye.nodeName(this, "form") && void ye.event.add(this, "click._submit keypress._submit", function (e) {
                        var t = e.target, n = ye.nodeName(t, "input") || ye.nodeName(t, "button") ? ye.prop(t, "form") : void 0;
                        n && !ye._data(n, "submit") && (ye.event.add(n, "submit._submit", function (e) {
                            e._submitBubble = !0
                        }), ye._data(n, "submit", !0))
                    })
            }, postDispatch: function (e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ye.event.simulate("submit", this.parentNode, e))
            }, teardown: function () {
                return !ye.nodeName(this, "form") && void ye.event.remove(this, "._submit")
            }
        }), fe.change || (ye.event.special.change = {
            setup: function () {
                return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ye.event.add(this, "propertychange._change", function (e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }), ye.event.add(this, "click._change", function (e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1), ye.event.simulate("change", this, e)
                    })), !1) : void ye.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Qe.test(t.nodeName) && !ye._data(t, "change") && (ye.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || ye.event.simulate("change", this.parentNode, e)
                        }), ye._data(t, "change", !0))
                    })
            }, handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return ye.event.remove(this, "._change"), !Qe.test(this.nodeName)
            }
        }), fe.focusin || ye.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                ye.event.simulate(t, e.target, ye.event.fix(e))
            };
            ye.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, a = ye._data(r, t);
                    a || r.addEventListener(e, n, !0), ye._data(r, t, (a || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, a = ye._data(r, t) - 1;
                    a ? ye._data(r, t, a) : (r.removeEventListener(e, n, !0), ye._removeData(r, t))
                }
            }
        }), ye.fn.extend({
            on: function (e, t, n, r) {
                return D(this, e, t, n, r)
            }, one: function (e, t, n, r) {
                return D(this, e, t, n, r, 1)
            }, off: function (e, t, n) {
                var r, a;
                if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (a in e)this.off(a, t, e[a]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = k), this.each(function () {
                    ye.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    ye.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n)return ye.event.trigger(e, t, n, !0)
            }
        });
        var rt = / jQuery\d+="(?:null|\d+)"/g, at = new RegExp("<(?:" + $e + ")[\\s/>]", "i"), it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, st = /<script|<style|<link/i, ot = /checked\s*(?:[^=]|=\s*.checked.)/i, ut = /^true\/(.*)/, dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, lt = y(oe), ct = lt.appendChild(oe.createElement("div"));
        ye.extend({
            htmlPrefilter: function (e) {
                return e.replace(it, "<$1></$2>")
            }, clone: function (e, t, n) {
                var r, a, i, s, o, u = ye.contains(e.ownerDocument, e);
                if (fe.html5Clone || ye.isXMLDoc(e) || !at.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML, ct.removeChild(i = ct.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e)))for (r = M(i), o = M(e), s = 0; null != (a = o[s]); ++s)r[s] && H(a, r[s]);
                if (t)if (n)for (o = o || M(e), r = r || M(i), s = 0; null != (a = o[s]); s++)S(a, r[s]); else S(e, i);
                return r = M(i, "script"), r.length > 0 && L(r, !u && M(e, "script")), r = o = a = null, i
            }, cleanData: function (e, t) {
                for (var n, r, a, i, s = 0, o = ye.expando, u = ye.cache, d = fe.attributes, l = ye.event.special; null != (n = e[s]); s++)if ((t || Ce(n)) && (a = n[o], i = a && u[a])) {
                    if (i.events)for (r in i.events)l[r] ? ye.event.remove(n, r) : ye.removeEvent(n, r, i.handle);
                    u[a] && (delete u[a], d || "undefined" == typeof n.removeAttribute ? n[o] = void 0 : n.removeAttribute(o), se.push(a))
                }
            }
        }), ye.fn.extend({
            domManip: j, detach: function (e) {
                return E(this, e, !0)
            }, remove: function (e) {
                return E(this, e)
            }, text: function (e) {
                return Je(this, function (e) {
                    return void 0 === e ? ye.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oe).createTextNode(e))
                }, null, e, arguments.length)
            }, append: function () {
                return j(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return j(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ye.cleanData(M(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                    e.options && ye.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return ye.clone(this, e, t)
                })
            }, html: function (e) {
                return Je(this, function (e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(rt, "") : void 0;
                    if ("string" == typeof e && !st.test(e) && (fe.htmlSerialize || !at.test(e)) && (fe.leadingWhitespace || !Ge.test(e)) && !Be[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ye.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(M(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (a) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return j(this, arguments, function (t) {
                    var n = this.parentNode;
                    ye.inArray(this, e) < 0 && (ye.cleanData(M(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ye.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ye.fn[e] = function (e) {
                for (var n, r = 0, a = [], i = ye(e), s = i.length - 1; r <= s; r++)n = r === s ? this : this.clone(!0), ye(i[r])[t](n), le.apply(a, n.get());
                return this.pushStack(a)
            }
        });
        var _t, mt = {
            HTML: "block",
            BODY: "block"
        }, ht = /^margin/, ft = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"), pt = function (e, t, n, r) {
            var a, i, s = {};
            for (i in t)s[i] = e.style[i], e.style[i] = t[i];
            a = n.apply(e, r || []);
            for (i in t)e.style[i] = s[i];
            return a
        }, yt = oe.documentElement;
        !function () {
            function e() {
                var e, l, c = oe.documentElement;
                c.appendChild(u), d.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = a = o = !1, r = s = !0, n.getComputedStyle && (l = n.getComputedStyle(d), t = "1%" !== (l || {}).top, o = "2px" === (l || {}).marginLeft, a = "4px" === (l || {width: "4px"}).width, d.style.marginRight = "50%", r = "4px" === (l || {marginRight: "4px"}).marginRight, e = d.appendChild(oe.createElement("div")), e.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", d.style.width = "1px", s = !parseFloat((n.getComputedStyle(e) || {}).marginRight), d.removeChild(e)), d.style.display = "none", i = 0 === d.getClientRects().length, i && (d.style.display = "", d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d.childNodes[0].style.borderCollapse = "separate", e = d.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === e[0].offsetHeight, i && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), c.removeChild(u)
            }

            var t, r, a, i, s, o, u = oe.createElement("div"), d = oe.createElement("div");
            d.style && (d.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === d.style.opacity, fe.cssFloat = !!d.style.cssFloat, d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === d.style.backgroundClip, u = oe.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", d.innerHTML = "", u.appendChild(d), fe.boxSizing = "" === d.style.boxSizing || "" === d.style.MozBoxSizing || "" === d.style.WebkitBoxSizing, ye.extend(fe, {
                reliableHiddenOffsets: function () {
                    return null == t && e(), i
                }, boxSizingReliable: function () {
                    return null == t && e(), a
                }, pixelMarginRight: function () {
                    return null == t && e(), r
                }, pixelPosition: function () {
                    return null == t && e(), t
                }, reliableMarginRight: function () {
                    return null == t && e(), s
                }, reliableMarginLeft: function () {
                    return null == t && e(), o
                }
            }))
        }();
        var Mt, Lt, gt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (Mt = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            }, Lt = function (e, t, n) {
                var r, a, i, s, o = e.style;
                return n = n || Mt(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || ye.contains(e.ownerDocument, e) || (s = ye.style(e, t)), n && !fe.pixelMarginRight() && ft.test(s) && ht.test(t) && (r = o.width, a = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = a, o.maxWidth = i), void 0 === s ? s : s + ""
            }) : yt.currentStyle && (Mt = function (e) {
                return e.currentStyle
            }, Lt = function (e, t, n) {
                var r, a, i, s, o = e.style;
                return n = n || Mt(e), s = n ? n[t] : void 0, null == s && o && o[t] && (s = o[t]), ft.test(s) && !gt.test(t) && (r = o.left, a = e.runtimeStyle, i = a && a.left, i && (a.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : s, s = o.pixelLeft + "px", o.left = r, i && (a.left = i)), void 0 === s ? s : s + "" || "auto"
            });
        var vt = /alpha\([^)]*\)/i, Yt = /opacity\s*=\s*([^)]*)/i, kt = /^(none|table(?!-c[ea]).+)/, wt = new RegExp("^(" + Ne + ")(.*)$", "i"), Dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Tt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, bt = ["Webkit", "O", "Moz", "ms"], xt = oe.createElement("div").style;
        ye.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Lt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": fe.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, i, s, o = ye.camelCase(t), u = e.style;
                    if (t = ye.cssProps[o] || (ye.cssProps[o] = C(o) || o), s = ye.cssHooks[t] || ye.cssHooks[o], void 0 === n)return s && "get" in s && void 0 !== (a = s.get(e, !1, r)) ? a : u[t];
                    if (i = typeof n, "string" === i && (a = ze.exec(n)) && a[1] && (n = p(e, t, a), i = "number"), null != n && n === n && ("number" === i && (n += a && a[3] || (ye.cssNumber[o] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, r)))))try {
                        u[t] = n
                    } catch (d) {
                    }
                }
            },
            css: function (e, t, n, r) {
                var a, i, s, o = ye.camelCase(t);
                return t = ye.cssProps[o] || (ye.cssProps[o] = C(o) || o), s = ye.cssHooks[t] || ye.cssHooks[o], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Lt(e, t, r)), "normal" === i && t in Tt && (i = Tt[t]), "" === n || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i
            }
        }), ye.each(["height", "width"], function (e, t) {
            ye.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)return kt.test(ye.css(e, "display")) && 0 === e.offsetWidth ? pt(e, Dt, function () {
                            return z(e, t, r)
                        }) : z(e, t, r)
                }, set: function (e, n, r) {
                    var a = r && Mt(e);
                    return O(e, n, r ? N(e, t, r, fe.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, a), a) : 0)
                }
            }
        }), fe.opacity || (ye.cssHooks.opacity = {
            get: function (e, t) {
                return Yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, r = e.currentStyle, a = ye.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", i = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ye.trim(i.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = vt.test(i) ? i.replace(vt, a) : i + " " + a)
            }
        }), ye.cssHooks.marginRight = W(fe.reliableMarginRight, function (e, t) {
            if (t)return pt(e, {display: "inline-block"}, Lt, [e, "marginRight"])
        }), ye.cssHooks.marginLeft = W(fe.reliableMarginLeft, function (e, t) {
            if (t)return (parseFloat(Lt(e, "marginLeft")) || (ye.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {marginLeft: 0}, function () {
                        return e.getBoundingClientRect().left
                    }) : 0)) + "px"
        }), ye.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            ye.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, a = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)a[e + Ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return a
                }
            }, ht.test(e) || (ye.cssHooks[e + t].set = O)
        }), ye.fn.extend({
            css: function (e, t) {
                return Je(this, function (e, t, n) {
                    var r, a, i = {}, s = 0;
                    if (ye.isArray(t)) {
                        for (r = Mt(e), a = t.length; s < a; s++)i[t[s]] = ye.css(e, t[s], !1, r);
                        return i
                    }
                    return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return F(this, !0)
            }, hide: function () {
                return F(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        Re(this) ? ye(this).show() : ye(this).hide()
                    })
            }
        }), ye.Tween = I, I.prototype = {
            constructor: I, init: function (e, t, n, r, a, i) {
                this.elem = e, this.prop = n, this.easing = a || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ye.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = I.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (e) {
                    ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ye.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, ye.fx = I.prototype.init, ye.fx.step = {};
        var St, Ht, jt = /^(?:toggle|show|hide)$/, Et = /queueHooks$/;
        ye.Animation = ye.extend(G, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return p(n.elem, e, ze.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                for (var n, r = 0, a = e.length; r < a; r++)n = e[r], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t)
            }, prefilters: [U], prefilter: function (e, t) {
                t ? G.prefilters.unshift(e) : G.prefilters.push(e)
            }
        }), ye.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? ye.extend({}, e) : {
                    complete: n || !n && t || ye.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ye.isFunction(t) && t
                };
            return r.duration = ye.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ye.fx.speeds ? ye.fx.speeds[r.duration] : ye.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                ye.isFunction(r.old) && r.old.call(this), r.queue && ye.dequeue(this, r.queue)
            }, r
        }, ye.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Re).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                var a = ye.isEmptyObject(e), i = ye.speed(t, n, r), s = function () {
                    var t = G(this, ye.extend({}, e), i);
                    (a || ye._data(this, "finish")) && t.stop(!0)
                };
                return s.finish = s, a || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
            }, stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, a = null != e && e + "queueHooks", i = ye.timers, s = ye._data(this);
                    if (a) s[a] && s[a].stop && r(s[a]); else for (a in s)s[a] && s[a].stop && Et.test(a) && r(s[a]);
                    for (a = i.length; a--;)i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
                    !t && n || ye.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ye._data(this), r = n[e + "queue"], a = n[e + "queueHooks"], i = ye.timers, s = r ? r.length : 0;
                    for (n.finish = !0, ye.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = i.length; t--;)i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < s; t++)r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ye.each(["toggle", "show", "hide"], function (e, t) {
            var n = ye.fn[t];
            ye.fn[t] = function (e, r, a) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(J(t, !0), e, r, a)
            }
        }), ye.each({
            slideDown: J("show"),
            slideUp: J("hide"),
            slideToggle: J("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            ye.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ye.timers = [], ye.fx.tick = function () {
            var e, t = ye.timers, n = 0;
            for (St = ye.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ye.fx.stop(), St = void 0
        }, ye.fx.timer = function (e) {
            ye.timers.push(e), e() ? ye.fx.start() : ye.timers.pop()
        }, ye.fx.interval = 13, ye.fx.start = function () {
            Ht || (Ht = n.setInterval(ye.fx.tick, ye.fx.interval))
        }, ye.fx.stop = function () {
            n.clearInterval(Ht), Ht = null
        }, ye.fx.speeds = {slow: 600, fast: 200, _default: 400}, ye.fn.delay = function (e, t) {
            return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
                var a = n.setTimeout(t, e);
                r.stop = function () {
                    n.clearTimeout(a)
                }
            })
        }, function () {
            var e, t = oe.createElement("input"), n = oe.createElement("div"), r = oe.createElement("select"), a = r.appendChild(oe.createElement("option"));
            n = oe.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), fe.checkOn = !!t.value, fe.optSelected = a.selected, fe.enctype = !!oe.createElement("form").enctype, r.disabled = !0, fe.optDisabled = !a.disabled, t = oe.createElement("input"), t.setAttribute("value", ""), fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), fe.radioValue = "t" === t.value
        }();
        var At = /\r/g, Pt = /[\x20\t\r\n\f]+/g;
        ye.fn.extend({
            val: function (e) {
                var t, n, r, a = this[0];
                {
                    if (arguments.length)return r = ye.isFunction(e), this.each(function (n) {
                        var a;
                        1 === this.nodeType && (a = r ? e.call(this, n, ye(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : ye.isArray(a) && (a = ye.map(a, function (e) {
                                    return null == e ? "" : e + ""
                                })), t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                    });
                    if (a)return t = ye.valHooks[a.type] || ye.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
                }
            }
        }), ye.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ye.find.attr(e, "value");
                        return null != t ? t : ye.trim(ye.text(e)).replace(Pt, " ")
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, r = e.options, a = e.selectedIndex, i = "select-one" === e.type || a < 0, s = i ? null : [], o = i ? a + 1 : r.length, u = a < 0 ? o : i ? a : 0; u < o; u++)if (n = r[u], (n.selected || u === a) && (fe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ye.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ye(n).val(), i)return t;
                            s.push(t)
                        }
                        return s
                    }, set: function (e, t) {
                        for (var n, r, a = e.options, i = ye.makeArray(t), s = a.length; s--;)if (r = a[s], ye.inArray(ye.valHooks.option.get(r), i) > -1)try {
                            r.selected = n = !0
                        } catch (o) {
                            r.scrollHeight
                        } else r.selected = !1;
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), ye.each(["radio", "checkbox"], function () {
            ye.valHooks[this] = {
                set: function (e, t) {
                    if (ye.isArray(t))return e.checked = ye.inArray(ye(e).val(), t) > -1
                }
            }, fe.checkOn || (ye.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Wt, Ct, Ft = ye.expr.attrHandle, Ot = /^(?:checked|selected)$/i, Nt = fe.getSetAttribute, zt = fe.input;
        ye.fn.extend({
            attr: function (e, t) {
                return Je(this, ye.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    ye.removeAttr(this, e)
                })
            }
        }), ye.extend({
            attr: function (e, t, n) {
                var r, a, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)return "undefined" == typeof e.getAttribute ? ye.prop(e, t, n) : (1 === i && ye.isXMLDoc(e) || (t = t.toLowerCase(), a = ye.attrHooks[t] || (ye.expr.match.bool.test(t) ? Ct : Wt)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : (r = ye.find.attr(e, t), null == r ? void 0 : r))
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!fe.radioValue && "radio" === t && ye.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, r, a = 0, i = t && t.match(Ae);
                if (i && 1 === e.nodeType)for (; n = i[a++];)r = ye.propFix[n] || n, ye.expr.match.bool.test(n) ? zt && Nt || !Ot.test(n) ? e[r] = !1 : e[ye.camelCase("default-" + n)] = e[r] = !1 : ye.attr(e, n, ""), e.removeAttribute(Nt ? n : r)
            }
        }), Ct = {
            set: function (e, t, n) {
                return t === !1 ? ye.removeAttr(e, n) : zt && Nt || !Ot.test(n) ? e.setAttribute(!Nt && ye.propFix[n] || n, n) : e[ye.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Ft[t] || ye.find.attr;
            zt && Nt || !Ot.test(t) ? Ft[t] = function (e, t, r) {
                    var a, i;
                    return r || (i = Ft[t], Ft[t] = a, a = null != n(e, t, r) ? t.toLowerCase() : null, Ft[t] = i), a
                } : Ft[t] = function (e, t, n) {
                    if (!n)return e[ye.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
        }), zt && Nt || (ye.attrHooks.value = {
            set: function (e, t, n) {
                return ye.nodeName(e, "input") ? void(e.defaultValue = t) : Wt && Wt.set(e, t, n)
            }
        }), Nt || (Wt = {
            set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n))return t
            }
        }, Ft.id = Ft.name = Ft.coords = function (e, t, n) {
            var r;
            if (!n)return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, ye.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified)return n.value
            }, set: Wt.set
        }, ye.attrHooks.contenteditable = {
            set: function (e, t, n) {
                Wt.set(e, "" !== t && t, n)
            }
        }, ye.each(["width", "height"], function (e, t) {
            ye.attrHooks[t] = {
                set: function (e, n) {
                    if ("" === n)return e.setAttribute(t, "auto"), n
                }
            }
        })), fe.style || (ye.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var It = /^(?:input|select|textarea|button|object)$/i, Rt = /^(?:a|area)$/i;
        ye.fn.extend({
            prop: function (e, t) {
                return Je(this, ye.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return e = ye.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {
                    }
                })
            }
        }), ye.extend({
            prop: function (e, t, n) {
                var r, a, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)return 1 === i && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, a = ye.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ye.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : It.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {"for": "htmlFor", "class": "className"}
        }), fe.hrefNormalized || ye.each(["href", "src"], function (e, t) {
            ye.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), fe.optSelected || (ye.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ye.propFix[this.toLowerCase()] = this
        }), fe.enctype || (ye.propFix.enctype = "encoding");
        var Jt = /[\t\r\n\f]/g;
        ye.fn.extend({
            addClass: function (e) {
                var t, n, r, a, i, s, o, u = 0;
                if (ye.isFunction(e))return this.each(function (t) {
                    ye(this).addClass(e.call(this, t, $(this)))
                });
                if ("string" == typeof e && e)for (t = e.match(Ae) || []; n = this[u++];)if (a = $(n), r = 1 === n.nodeType && (" " + a + " ").replace(Jt, " ")) {
                    for (s = 0; i = t[s++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                    o = ye.trim(r), a !== o && ye.attr(n, "class", o)
                }
                return this
            }, removeClass: function (e) {
                var t, n, r, a, i, s, o, u = 0;
                if (ye.isFunction(e))return this.each(function (t) {
                    ye(this).removeClass(e.call(this, t, $(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof e && e)for (t = e.match(Ae) || []; n = this[u++];)if (a = $(n), r = 1 === n.nodeType && (" " + a + " ").replace(Jt, " ")) {
                    for (s = 0; i = t[s++];)for (; r.indexOf(" " + i + " ") > -1;)r = r.replace(" " + i + " ", " ");
                    o = ye.trim(r), a !== o && ye.attr(n, "class", o)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function (n) {
                            ye(this).toggleClass(e.call(this, n, $(this), t), t)
                        }) : this.each(function () {
                            var t, r, a, i;
                            if ("string" === n)for (r = 0, a = ye(this), i = e.match(Ae) || []; t = i[r++];)a.hasClass(t) ? a.removeClass(t) : a.addClass(t); else void 0 !== e && "boolean" !== n || (t = $(this), t && ye._data(this, "__className__", t), ye.attr(this, "class", t || e === !1 ? "" : ye._data(this, "__className__") || ""));
                        })
            }, hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + $(n) + " ").replace(Jt, " ").indexOf(t) > -1)return !0;
                return !1
            }
        }), ye.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ye.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ye.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var qt = n.location, Ut = ye.now(), Vt = /\?/, Gt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ye.parseJSON = function (e) {
            if (n.JSON && n.JSON.parse)return n.JSON.parse(e + "");
            var t, r = null, a = ye.trim(e + "");
            return a && !ye.trim(a.replace(Gt, function (e, n, a, i) {
                return t && n && (r = 0), 0 === r ? e : (t = a || n, r += !i - !a, "")
            })) ? Function("return " + a)() : ye.error("Invalid JSON: " + e)
        }, ye.parseXML = function (e) {
            var t, r;
            if (!e || "string" != typeof e)return null;
            try {
                n.DOMParser ? (r = new n.DOMParser, t = r.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (a) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t
        };
        var $t = /#.*$/, Bt = /([?&])_=[^&]*/, Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qt = /^(?:GET|HEAD)$/, Zt = /^\/\//, en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, tn = {}, nn = {}, rn = "*/".concat("*"), an = qt.href, sn = en.exec(an.toLowerCase()) || [];
        ye.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: an,
                type: "GET",
                isLocal: Kt.test(sn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": rn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ye.parseJSON, "text xml": ye.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? K(K(e, ye.ajaxSettings), t) : K(ye.ajaxSettings, e)
            },
            ajaxPrefilter: B(tn),
            ajaxTransport: B(nn),
            ajax: function (e, t) {
                function r(e, t, r, a) {
                    var i, c, M, L, v, k = t;
                    2 !== g && (g = 2, u && n.clearTimeout(u), l = void 0, o = a || "", Y.readyState = e > 0 ? 4 : 0, i = e >= 200 && e < 300 || 304 === e, r && (L = Q(_, Y, r)), L = Z(_, L, Y, i), i ? (_.ifModified && (v = Y.getResponseHeader("Last-Modified"), v && (ye.lastModified[s] = v), v = Y.getResponseHeader("etag"), v && (ye.etag[s] = v)), 204 === e || "HEAD" === _.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = L.state, c = L.data, M = L.error, i = !M)) : (M = k, !e && k || (k = "error", e < 0 && (e = 0))), Y.status = e, Y.statusText = (t || k) + "", i ? f.resolveWith(m, [c, k, Y]) : f.rejectWith(m, [Y, k, M]), Y.statusCode(y), y = void 0, d && h.trigger(i ? "ajaxSuccess" : "ajaxError", [Y, _, i ? c : M]), p.fireWith(m, [Y, k]), d && (h.trigger("ajaxComplete", [Y, _]), --ye.active || ye.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var a, i, s, o, u, d, l, c, _ = ye.ajaxSetup({}, t), m = _.context || _, h = _.context && (m.nodeType || m.jquery) ? ye(m) : ye.event, f = ye.Deferred(), p = ye.Callbacks("once memory"), y = _.statusCode || {}, M = {}, L = {}, g = 0, v = "canceled", Y = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === g) {
                            if (!c)for (c = {}; t = Xt.exec(o);)c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === g ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return g || (e = L[n] = L[n] || e, M[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return g || (_.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (g < 2)for (t in e)y[t] = [y[t], e[t]]; else Y.always(e[Y.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || v;
                        return l && l.abort(t), r(0, t), this
                    }
                };
                if (f.promise(Y).complete = p.add, Y.success = Y.done, Y.error = Y.fail, _.url = ((e || _.url || an) + "").replace($t, "").replace(Zt, sn[1] + "//"), _.type = t.method || t.type || _.method || _.type, _.dataTypes = ye.trim(_.dataType || "*").toLowerCase().match(Ae) || [""], null == _.crossDomain && (a = en.exec(_.url.toLowerCase()), _.crossDomain = !(!a || a[1] === sn[1] && a[2] === sn[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (sn[3] || ("http:" === sn[1] ? "80" : "443")))), _.data && _.processData && "string" != typeof _.data && (_.data = ye.param(_.data, _.traditional)), X(tn, _, t, Y), 2 === g)return Y;
                d = ye.event && _.global, d && 0 === ye.active++ && ye.event.trigger("ajaxStart"), _.type = _.type.toUpperCase(), _.hasContent = !Qt.test(_.type), s = _.url, _.hasContent || (_.data && (s = _.url += (Vt.test(s) ? "&" : "?") + _.data, delete _.data), _.cache === !1 && (_.url = Bt.test(s) ? s.replace(Bt, "$1_=" + Ut++) : s + (Vt.test(s) ? "&" : "?") + "_=" + Ut++)), _.ifModified && (ye.lastModified[s] && Y.setRequestHeader("If-Modified-Since", ye.lastModified[s]), ye.etag[s] && Y.setRequestHeader("If-None-Match", ye.etag[s])), (_.data && _.hasContent && _.contentType !== !1 || t.contentType) && Y.setRequestHeader("Content-Type", _.contentType), Y.setRequestHeader("Accept", _.dataTypes[0] && _.accepts[_.dataTypes[0]] ? _.accepts[_.dataTypes[0]] + ("*" !== _.dataTypes[0] ? ", " + rn + "; q=0.01" : "") : _.accepts["*"]);
                for (i in _.headers)Y.setRequestHeader(i, _.headers[i]);
                if (_.beforeSend && (_.beforeSend.call(m, Y, _) === !1 || 2 === g))return Y.abort();
                v = "abort";
                for (i in{success: 1, error: 1, complete: 1})Y[i](_[i]);
                if (l = X(nn, _, t, Y)) {
                    if (Y.readyState = 1, d && h.trigger("ajaxSend", [Y, _]), 2 === g)return Y;
                    _.async && _.timeout > 0 && (u = n.setTimeout(function () {
                        Y.abort("timeout")
                    }, _.timeout));
                    try {
                        g = 1, l.send(M, r)
                    } catch (k) {
                        if (!(g < 2))throw k;
                        r(-1, k)
                    }
                } else r(-1, "No Transport");
                return Y
            },
            getJSON: function (e, t, n) {
                return ye.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ye.get(e, void 0, t, "script")
            }
        }), ye.each(["get", "post"], function (e, t) {
            ye[t] = function (e, n, r, a) {
                return ye.isFunction(n) && (a = a || r, r = n, n = void 0), ye.ajax(ye.extend({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: r
                }, ye.isPlainObject(e) && e))
            }
        }), ye._evalUrl = function (e) {
            return ye.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
        }, ye.fn.extend({
            wrapAll: function (e) {
                if (ye.isFunction(e))return this.each(function (t) {
                    ye(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ye(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return ye.isFunction(e) ? this.each(function (t) {
                        ye(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = ye(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
            }, wrap: function (e) {
                var t = ye.isFunction(e);
                return this.each(function (n) {
                    ye(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ye.nodeName(this, "body") || ye(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ye.expr.filters.hidden = function (e) {
            return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
        }, ye.expr.filters.visible = function (e) {
            return !ye.expr.filters.hidden(e)
        };
        var on = /%20/g, un = /\[\]$/, dn = /\r?\n/g, ln = /^(?:submit|button|image|reset|file)$/i, cn = /^(?:input|select|textarea|keygen)/i;
        ye.param = function (e, t) {
            var n, r = [], a = function (e, t) {
                t = ye.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = ye.ajaxSettings && ye.ajaxSettings.traditional), ye.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function () {
                a(this.name, this.value)
            }); else for (n in e)ne(n, e[n], t, a);
            return r.join("&").replace(on, "+")
        }, ye.fn.extend({
            serialize: function () {
                return ye.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = ye.prop(this, "elements");
                    return e ? ye.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ye(this).is(":disabled") && cn.test(this.nodeName) && !ln.test(e) && (this.checked || !qe.test(e))
                }).map(function (e, t) {
                    var n = ye(this).val();
                    return null == n ? null : ye.isArray(n) ? ye.map(n, function (e) {
                                return {name: t.name, value: e.replace(dn, "\r\n")}
                            }) : {name: t.name, value: n.replace(dn, "\r\n")}
                }).get()
            }
        }), ye.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () {
                return this.isLocal ? ae() : oe.documentMode > 8 ? re() : /^(get|post|head|put|delete|options)$/i.test(this.type) && re() || ae()
            } : re;
        var _n = 0, mn = {}, hn = ye.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function () {
            for (var e in mn)mn[e](void 0, !0)
        }), fe.cors = !!hn && "withCredentials" in hn, hn = fe.ajax = !!hn, hn && ye.ajaxTransport(function (e) {
            if (!e.crossDomain || fe.cors) {
                var t;
                return {
                    send: function (r, a) {
                        var i, s = e.xhr(), o = ++_n;
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)s[i] = e.xhrFields[i];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (i in r)void 0 !== r[i] && s.setRequestHeader(i, r[i] + "");
                        s.send(e.hasContent && e.data || null), t = function (n, r) {
                            var i, u, d;
                            if (t && (r || 4 === s.readyState))if (delete mn[o], t = void 0, s.onreadystatechange = ye.noop, r) 4 !== s.readyState && s.abort(); else {
                                d = {}, i = s.status, "string" == typeof s.responseText && (d.text = s.responseText);
                                try {
                                    u = s.statusText
                                } catch (l) {
                                    u = ""
                                }
                                i || !e.isLocal || e.crossDomain ? 1223 === i && (i = 204) : i = d.text ? 200 : 404
                            }
                            d && a(i, u, d, s.getAllResponseHeaders())
                        }, e.async ? 4 === s.readyState ? n.setTimeout(t) : s.onreadystatechange = mn[o] = t : t()
                    }, abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ye.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return ye.globalEval(e), e
                }
            }
        }), ye.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ye.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = oe.head || ye("head")[0] || oe.documentElement;
                return {
                    send: function (r, a) {
                        t = oe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || a(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    }, abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var fn = [], pn = /(=)\?(?=&|$)|\?\?/;
        ye.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = fn.pop() || ye.expando + "_" + Ut++;
                return this[e] = !0, e
            }
        }), ye.ajaxPrefilter("json jsonp", function (e, t, r) {
            var a, i, s, o = e.jsonp !== !1 && (pn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0])return a = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(pn, "$1" + a) : e.jsonp !== !1 && (e.url += (Vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function () {
                return s || ye.error(a + " was not called"), s[0]
            }, e.dataTypes[0] = "json", i = n[a], n[a] = function () {
                s = arguments
            }, r.always(function () {
                void 0 === i ? ye(n).removeProp(a) : n[a] = i, e[a] && (e.jsonpCallback = t.jsonpCallback, fn.push(a)), s && ye.isFunction(i) && i(s[0]), s = i = void 0
            }), "script"
        }), ye.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || oe;
            var r = Te.exec(e), a = !n && [];
            return r ? [t.createElement(r[1])] : (r = v([e], t, a), a && a.length && ye(a).remove(), ye.merge([], r.childNodes))
        };
        var yn = ye.fn.load;
        ye.fn.load = function (e, t, n) {
            if ("string" != typeof e && yn)return yn.apply(this, arguments);
            var r, a, i, s = this, o = e.indexOf(" ");
            return o > -1 && (r = ye.trim(e.slice(o, e.length)), e = e.slice(0, o)), ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), s.length > 0 && ye.ajax({
                url: e,
                type: a || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                i = arguments, s.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                    s.each(function () {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                }), this
        }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ye.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ye.expr.filters.animated = function (e) {
            return ye.grep(ye.timers, function (t) {
                return e === t.elem
            }).length
        }, ye.offset = {
            setOffset: function (e, t, n) {
                var r, a, i, s, o, u, d, l = ye.css(e, "position"), c = ye(e), _ = {};
                "static" === l && (e.style.position = "relative"), o = c.offset(), i = ye.css(e, "top"), u = ye.css(e, "left"), d = ("absolute" === l || "fixed" === l) && ye.inArray("auto", [i, u]) > -1, d ? (r = c.position(), s = r.top, a = r.left) : (s = parseFloat(i) || 0, a = parseFloat(u) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, o))), null != t.top && (_.top = t.top - o.top + s), null != t.left && (_.left = t.left - o.left + a), "using" in t ? t.using.call(e, _) : c.css(_)
            }
        }, ye.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                        ye.offset.setOffset(this, e, t)
                    });
                var t, n, r = {top: 0, left: 0}, a = this[0], i = a && a.ownerDocument;
                if (i)return t = i.documentElement, ye.contains(t, a) ? ("undefined" != typeof a.getBoundingClientRect && (r = a.getBoundingClientRect()), n = ie(i), {
                        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : r
            }, position: function () {
                if (this[0]) {
                    var e, t, n = {top: 0, left: 0}, r = this[0];
                    return "fixed" === ye.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ye.nodeName(e[0], "html") || (n = e.offset()), n.top += ye.css(e[0], "borderTopWidth", !0), n.left += ye.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ye.css(r, "marginTop", !0),
                        left: t.left - n.left - ye.css(r, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && !ye.nodeName(e, "html") && "static" === ye.css(e, "position");)e = e.offsetParent;
                    return e || yt
                })
            }
        }), ye.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = /Y/.test(t);
            ye.fn[e] = function (r) {
                return Je(this, function (e, r, a) {
                    var i = ie(e);
                    return void 0 === a ? i ? t in i ? i[t] : i.document.documentElement[r] : e[r] : void(i ? i.scrollTo(n ? ye(i).scrollLeft() : a, n ? a : ye(i).scrollTop()) : e[r] = a)
                }, e, r, arguments.length, null)
            }
        }), ye.each(["top", "left"], function (e, t) {
            ye.cssHooks[t] = W(fe.pixelPosition, function (e, n) {
                if (n)return n = Lt(e, t), ft.test(n) ? ye(e).position()[t] + "px" : n
            })
        }), ye.each({Height: "height", Width: "width"}, function (e, t) {
            ye.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                ye.fn[r] = function (r, a) {
                    var i = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || a === !0 ? "margin" : "border");
                    return Je(this, function (t, n, r) {
                        var a;
                        return ye.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? ye.css(t, n, s) : ye.style(t, n, r, s)
                    }, t, i ? r : void 0, i, null)
                }
            })
        }), ye.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ye.fn.size = function () {
            return this.length
        }, ye.fn.andSelf = ye.fn.addBack, r = [], a = function () {
            return ye
        }.apply(t, r), !(void 0 !== a && (e.exports = a));
        var Mn = n.jQuery, Ln = n.$;
        return ye.noConflict = function (e) {
            return n.$ === ye && (n.$ = Ln), e && n.jQuery === ye && (n.jQuery = Mn), ye
        }, i || (n.jQuery = n.$ = ye), ye
    })
}, function (e, t) {
    "use strict";
    function n(e) {
        e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
    }

    function r(e) {
        if (o[e.keyCode])return n(e), !1
    }

    function a() {
        window.onwheel = n, window.onmousewheel = document.onmousewheel = n, window.ontouchmove = n, document.onkeydown = r
    }

    function i() {
        window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
    }

    function s(e) {
        e.on("mousewheel", function (e) {
            var t = $(this);
            t.scrollTop(t.scrollTop() - e.originalEvent.wheelDelta)
        })
    }

    t.__esModule = !0, t.disableScroll = a, t.enableScroll = i, t.scrollItself = s;
    var o = {37: 1, 38: 1, 39: 1, 40: 1}
}, , , , , , , , , , , , function (e, t) {
    var n = function (e) {
        function t(r) {
            if (n[r])return n[r].exports;
            var a = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        "use strict";
        var r = n(1), a = n(2), i = n(11), s = n(3), o = n(3);
        e.exports = {}, e.exports.Environment = a.Environment, e.exports.Template = a.Template, e.exports.Loader = i, e.exports.FileSystemLoader = s.FileSystemLoader, e.exports.PrecompiledLoader = s.PrecompiledLoader, e.exports.WebLoader = s.WebLoader, e.exports.compiler = n(3), e.exports.parser = n(3), e.exports.lexer = n(3), e.exports.runtime = n(8), e.exports.lib = r, e.exports.nodes = n(3), e.exports.installJinjaCompat = n(12);
        var u;
        e.exports.configure = function (e, t) {
            t = t || {}, r.isObject(e) && (t = e, e = null);
            var n;
            return s.FileSystemLoader ? n = new s.FileSystemLoader(e, {
                    watch: t.watch,
                    noCache: t.noCache
                }) : s.WebLoader && (n = new s.WebLoader(e, {
                    useCache: t.web && t.web.useCache,
                    async: t.web && t.web.async
                })), u = new a.Environment(n, t), t && t.express && u.express(t.express), u
        }, e.exports.compile = function (t, n, r, a) {
            return u || e.exports.configure(), new e.exports.Template(t, n, r, a)
        }, e.exports.render = function (t, n, r) {
            return u || e.exports.configure(), u.render(t, n, r)
        }, e.exports.renderString = function (t, n, r) {
            return u || e.exports.configure(), u.renderString(t, n, r)
        }, o && (e.exports.precompile = o.precompile, e.exports.precompileString = o.precompileString)
    }, function (e, t) {
        "use strict";
        var n = Array.prototype, r = Object.prototype, a = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;"
        }, i = /[&"'<>]/g, s = function (e) {
            return a[e]
        }, t = e.exports = {};
        t.prettifyError = function (e, n, r) {
            if (r.Update || (r = new t.TemplateError(r)), r.Update(e), !n) {
                var a = r;
                r = new Error(a.message), r.name = a.name
            }
            return r
        }, t.TemplateError = function (e, t, n) {
            var r = this;
            if (e instanceof Error) {
                r = e, e = e.name + ": " + e.message;
                try {
                    r.name = ""
                } catch (a) {
                    r = this
                }
            } else Error.captureStackTrace && Error.captureStackTrace(r);
            return r.name = "Template render error", r.message = e, r.lineno = t, r.colno = n, r.firstUpdate = !0, r.Update = function (e) {
                var t = "(" + (e || "unknown path") + ")";
                return this.firstUpdate && (this.lineno && this.colno ? t += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (t += " [Line " + this.lineno + "]")), t += "\n ", this.firstUpdate && (t += " "), this.message = t + (this.message || ""), this.firstUpdate = !1, this
            }, r
        }, t.TemplateError.prototype = Error.prototype, t.escape = function (e) {
            return e.replace(i, s)
        }, t.isFunction = function (e) {
            return "[object Function]" === r.toString.call(e)
        }, t.isArray = Array.isArray || function (e) {
                return "[object Array]" === r.toString.call(e)
            }, t.isString = function (e) {
            return "[object String]" === r.toString.call(e)
        }, t.isObject = function (e) {
            return "[object Object]" === r.toString.call(e)
        }, t.groupBy = function (e, n) {
            for (var r = {}, a = t.isFunction(n) ? n : function (e) {
                    return e[n]
                }, i = 0; i < e.length; i++) {
                var s = e[i], o = a(s, i);
                (r[o] || (r[o] = [])).push(s)
            }
            return r
        }, t.toArray = function (e) {
            return Array.prototype.slice.call(e)
        }, t.without = function (e) {
            var n = [];
            if (!e)return n;
            for (var r = -1, a = e.length, i = t.toArray(arguments).slice(1); ++r < a;)t.indexOf(i, e[r]) === -1 && n.push(e[r]);
            return n
        }, t.extend = function (e, t) {
            for (var n in t)e[n] = t[n];
            return e
        }, t.repeat = function (e, t) {
            for (var n = "", r = 0; r < t; r++)n += e;
            return n
        }, t.each = function (e, t, r) {
            if (null != e)if (n.each && e.each === n.each) e.forEach(t, r); else if (e.length === +e.length)for (var a = 0, i = e.length; a < i; a++)t.call(r, e[a], a, e)
        }, t.map = function (e, t) {
            var r = [];
            if (null == e)return r;
            if (n.map && e.map === n.map)return e.map(t);
            for (var a = 0; a < e.length; a++)r[r.length] = t(e[a], a);
            return e.length === +e.length && (r.length = e.length), r
        }, t.asyncIter = function (e, t, n) {
            function r() {
                a++, a < e.length ? t(e[a], a, r, n) : n()
            }

            var a = -1;
            r()
        }, t.asyncFor = function (e, n, r) {
            function a() {
                o++;
                var t = i[o];
                o < s ? n(t, e[t], o, s, a) : r()
            }

            var i = t.keys(e), s = i.length, o = -1;
            a()
        }, t.indexOf = Array.prototype.indexOf ? function (e, t, n) {
                return Array.prototype.indexOf.call(e, t, n)
            } : function (e, t, n) {
                var r = this.length >>> 0;
                for (n = +n || 0, Math.abs(n) === 1 / 0 && (n = 0), n < 0 && (n += r, n < 0 && (n = 0)); n < r; n++)if (e[n] === t)return n;
                return -1
            }, Array.prototype.map || (Array.prototype.map = function () {
            throw new Error("map is unimplemented for this js engine")
        }), t.keys = function (e) {
            if (Object.prototype.keys)return e.keys();
            var t = [];
            for (var n in e)e.hasOwnProperty(n) && t.push(n);
            return t
        }, t.inOperator = function (e, n) {
            if (t.isArray(n))return t.indexOf(n, e) !== -1;
            if (t.isObject(n))return e in n;
            if (t.isString(n))return n.indexOf(e) !== -1;
            throw new Error('Cannot use "in" operator to search for "' + e + '" in unexpected types.')
        }
    }, function (e, t, n) {
        "use strict";
        function r(e, t, n) {
            s(function () {
                e(t, n)
            })
        }

        var a, i = n(3), s = n(4), o = n(1), u = n(6), d = n(3), l = n(7), c = n(3), _ = n(8), m = n(9), h = _.Frame;
        c.PrecompiledLoader = n(10);
        var f = u.extend({
            init: function (e, t) {
                t = this.opts = t || {}, this.opts.dev = !!t.dev, this.opts.autoescape = null == t.autoescape || t.autoescape, this.opts.throwOnUndefined = !!t.throwOnUndefined, this.opts.trimBlocks = !!t.trimBlocks, this.opts.lstripBlocks = !!t.lstripBlocks, this.loaders = [], e ? this.loaders = o.isArray(e) ? e : [e] : c.FileSystemLoader ? this.loaders = [new c.FileSystemLoader("views")] : c.WebLoader && (this.loaders = [new c.WebLoader("/views")]), window.nunjucksPrecompiled && this.loaders.unshift(new c.PrecompiledLoader(window.nunjucksPrecompiled)), this.initCache(), this.globals = m(), this.filters = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [];
                for (var n in l)this.addFilter(n, l[n])
            }, initCache: function () {
                o.each(this.loaders, function (e) {
                    e.cache = {}, "function" == typeof e.on && e.on("update", function (t) {
                        e.cache[t] = null
                    })
                })
            }, addExtension: function (e, t) {
                return t._name = e, this.extensions[e] = t, this.extensionsList.push(t), this
            }, removeExtension: function (e) {
                var t = this.getExtension(e);
                t && (this.extensionsList = o.without(this.extensionsList, t), delete this.extensions[e])
            }, getExtension: function (e) {
                return this.extensions[e]
            }, hasExtension: function (e) {
                return !!this.extensions[e]
            }, addGlobal: function (e, t) {
                return this.globals[e] = t, this
            }, getGlobal: function (e) {
                if ("undefined" == typeof this.globals[e])throw new Error("global not found: " + e);
                return this.globals[e]
            }, addFilter: function (e, t, n) {
                var r = t;
                return n && this.asyncFilters.push(e), this.filters[e] = r, this
            }, getFilter: function (e) {
                if (!this.filters[e])throw new Error("filter not found: " + e);
                return this.filters[e]
            }, resolveTemplate: function (e, t, n) {
                var r = !(!e.isRelative || !t) && e.isRelative(n);
                return r && e.resolve ? e.resolve(t, n) : n
            }, getTemplate: function (e, t, n, r, i) {
                var s = this, u = null;
                if (e && e.raw && (e = e.raw), o.isFunction(n) && (i = n, n = null, t = t || !1), o.isFunction(t) && (i = t, t = !1), e instanceof a) u = e; else {
                    if ("string" != typeof e)throw new Error("template names must be a string: " + e);
                    for (var d = 0; d < this.loaders.length; d++) {
                        var l = this.resolveTemplate(this.loaders[d], n, e);
                        if (u = this.loaders[d].cache[l])break
                    }
                }
                if (!u) {
                    var c, _ = this, m = function (n, s) {
                        if (s || n || r || (n = new Error("template not found: " + e)), n) {
                            if (!i)throw n;
                            i(n)
                        } else {
                            var o;
                            s ? (o = new a(s.src, _, s.path, t), s.noCache || (s.loader.cache[e] = o)) : o = new a("", _, "", t), i ? i(null, o) : c = o
                        }
                    };
                    return o.asyncIter(this.loaders, function (t, r, a, i) {
                        function o(e, n) {
                            e ? i(e) : n ? (n.loader = t, i(null, n)) : a()
                        }

                        e = s.resolveTemplate(t, n, e), t.async ? t.getSource(e, o) : o(null, t.getSource(e))
                    }, m), c
                }
                return t && u.compile(), i ? void i(null, u) : u
            }, express: function (e) {
                function t(e, t) {
                    if (this.name = e, this.path = e, this.defaultEngine = t.defaultEngine, this.ext = i.extname(e), !this.ext && !this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");
                    this.ext || (this.name += this.ext = ("." !== this.defaultEngine[0] ? "." : "") + this.defaultEngine)
                }

                var n = this;
                return t.prototype.render = function (e, t) {
                    n.render(this.name, e, t)
                }, e.set("view", t), this
            }, render: function (e, t, n) {
                o.isFunction(t) && (n = t, t = null);
                var a = null;
                return this.getTemplate(e, function (e, i) {
                    if (e && n) r(n, e); else {
                        if (e)throw e;
                        a = i.render(t, n)
                    }
                }), a
            }, renderString: function (e, t, n, r) {
                o.isFunction(n) && (r = n, n = {}), n = n || {};
                var i = new a(e, this, n.path);
                return i.render(t, r)
            }
        }), p = u.extend({
            init: function (e, t, n) {
                this.env = n || new f, this.ctx = {};
                for (var r in e)e.hasOwnProperty(r) && (this.ctx[r] = e[r]);
                this.blocks = {}, this.exported = [];
                for (var a in t)this.addBlock(a, t[a])
            }, lookup: function (e) {
                return e in this.env.globals && !(e in this.ctx) ? this.env.globals[e] : this.ctx[e]
            }, setVariable: function (e, t) {
                this.ctx[e] = t
            }, getVariables: function () {
                return this.ctx
            }, addBlock: function (e, t) {
                return this.blocks[e] = this.blocks[e] || [], this.blocks[e].push(t), this
            }, getBlock: function (e) {
                if (!this.blocks[e])throw new Error('unknown block "' + e + '"');
                return this.blocks[e][0]
            }, getSuper: function (e, t, n, r, a, i) {
                var s = o.indexOf(this.blocks[t] || [], n), u = this.blocks[t][s + 1], d = this;
                if (s === -1 || !u)throw new Error('no super block available for "' + t + '"');
                u(e, d, r, a, i)
            }, addExport: function (e) {
                this.exported.push(e)
            }, getExported: function () {
                for (var e = {}, t = 0; t < this.exported.length; t++) {
                    var n = this.exported[t];
                    e[n] = this.ctx[n]
                }
                return e
            }
        });
        a = u.extend({
            init: function (e, t, n, r) {
                if (this.env = t || new f, o.isObject(e))switch (e.type) {
                    case"code":
                        this.tmplProps = e.obj;
                        break;
                    case"string":
                        this.tmplStr = e.obj
                } else {
                    if (!o.isString(e))throw new Error("src must be a string or an object describing the source");
                    this.tmplStr = e
                }
                if (this.path = n, r) {
                    var a = this;
                    try {
                        a._compile()
                    } catch (i) {
                        throw o.prettifyError(this.path, this.env.opts.dev, i)
                    }
                } else this.compiled = !1
            }, render: function (e, t, n) {
                "function" == typeof e ? (n = e, e = {}) : "function" == typeof t && (n = t, t = null);
                var a = !0;
                t && (a = !1);
                var i = this;
                try {
                    i.compile()
                } catch (s) {
                    var u = o.prettifyError(this.path, this.env.opts.dev, s);
                    if (n)return r(n, u);
                    throw u
                }
                var d = new p(e || {}, i.blocks, i.env), l = t ? t.push(!0) : new h;
                l.topLevel = !0;
                var c = null;
                return i.rootRenderFunc(i.env, d, l || new h, _, function (e, t) {
                    if (e && (e = o.prettifyError(i.path, i.env.opts.dev, e)), n) a ? r(n, e, t) : n(e, t); else {
                        if (e)throw e;
                        c = t
                    }
                }), c
            }, getExported: function (e, t, n) {
                "function" == typeof e && (n = e, e = {}), "function" == typeof t && (n = t, t = null);
                try {
                    this.compile()
                } catch (r) {
                    if (n)return n(r);
                    throw r
                }
                var a = t ? t.push() : new h;
                a.topLevel = !0;
                var i = new p(e || {}, this.blocks, this.env);
                this.rootRenderFunc(this.env, i, a, _, function (e) {
                    e ? n(e, null) : n(null, i.getExported())
                })
            }, compile: function () {
                this.compiled || this._compile()
            }, _compile: function () {
                var e;
                if (this.tmplProps) e = this.tmplProps; else {
                    var t = d.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), n = new Function(t);
                    e = n()
                }
                this.blocks = this._getBlocks(e), this.rootRenderFunc = e.root, this.compiled = !0
            }, _getBlocks: function (e) {
                var t = {};
                for (var n in e)"b_" === n.slice(0, 2) && (t[n.slice(2)] = e[n]);
                return t
            }
        }), e.exports = {Environment: f, Template: a}
    }, function (e, t) {
    }, function (e, t, n) {
        "use strict";
        function r() {
            if (u.length)throw u.shift()
        }

        function a(e) {
            var t;
            t = o.length ? o.pop() : new i, t.task = e, s(t)
        }

        function i() {
            this.task = null
        }

        var s = n(5), o = [], u = [], d = s.makeRequestCallFromTimer(r);
        e.exports = a, i.prototype.call = function () {
            try {
                this.task.call()
            } catch (e) {
                a.onerror ? a.onerror(e) : (u.push(e), d())
            } finally {
                this.task = null, o[o.length] = this
            }
        }
    }, function (e, t) {
        (function (t) {
            "use strict";
            function n(e) {
                o.length || (s(), u = !0), o[o.length] = e
            }

            function r() {
                for (; d < o.length;) {
                    var e = d;
                    if (d += 1, o[e].call(), d > l) {
                        for (var t = 0, n = o.length - d; t < n; t++)o[t] = o[t + d];
                        o.length -= d, d = 0
                    }
                }
                o.length = 0, d = 0, u = !1
            }

            function a(e) {
                var t = 1, n = new c(e), r = document.createTextNode("");
                return n.observe(r, {characterData: !0}), function () {
                    t = -t, r.data = t
                }
            }

            function i(e) {
                return function () {
                    function t() {
                        clearTimeout(n), clearInterval(r), e()
                    }

                    var n = setTimeout(t, 0), r = setInterval(t, 50)
                }
            }

            e.exports = n;
            var s, o = [], u = !1, d = 0, l = 1024, c = t.MutationObserver || t.WebKitMutationObserver;
            s = "function" == typeof c ? a(r) : i(r), n.requestFlush = s, n.makeRequestCallFromTimer = i
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";
        function n(e, t, r) {
            var a = function () {
            };
            a.prototype = e.prototype;
            var i = new a, s = /xyz/.test(function () {
                xyz
            }) ? /\bparent\b/ : /.*/;
            r = r || {};
            for (var o in r) {
                var u = r[o], d = i[o];
                "function" == typeof d && "function" == typeof u && s.test(u) ? i[o] = function (e, t) {
                        return function () {
                            var n = this.parent;
                            this.parent = t;
                            var r = e.apply(this, arguments);
                            return this.parent = n, r
                        }
                    }(u, d) : i[o] = u
            }
            i.typename = t;
            var l = function () {
                i.init && i.init.apply(this, arguments)
            };
            return l.prototype = i, l.prototype.constructor = l, l.extend = function (e, t) {
                return "object" == typeof e && (t = e, e = "anonymous"), n(l, e, t)
            }, l
        }

        e.exports = n(Object, "Object", {})
    }, function (e, t, n) {
        "use strict";
        function r(e, t) {
            return null === e || void 0 === e || e === !1 ? t : e
        }

        var a = n(1), i = n(8), s = {
            abs: function (e) {
                return Math.abs(e)
            }, batch: function (e, t, n) {
                var r, a = [], i = [];
                for (r = 0; r < e.length; r++)r % t === 0 && i.length && (a.push(i), i = []), i.push(e[r]);
                if (i.length) {
                    if (n)for (r = i.length; r < t; r++)i.push(n);
                    a.push(i)
                }
                return a
            }, capitalize: function (e) {
                e = r(e, "");
                var t = e.toLowerCase();
                return i.copySafeness(e, t.charAt(0).toUpperCase() + t.slice(1))
            }, center: function (e, t) {
                if (e = r(e, ""), t = t || 80, e.length >= t)return e;
                var n = t - e.length, s = a.repeat(" ", n / 2 - n % 2), o = a.repeat(" ", n / 2);
                return i.copySafeness(e, s + e + o)
            }, "default": function (e, t, n) {
                return n ? e ? e : t : void 0 !== e ? e : t
            }, dictsort: function (e, t, n) {
                if (!a.isObject(e))throw new a.TemplateError("dictsort filter: val must be an object");
                var r = [];
                for (var i in e)r.push([i, e[i]]);
                var s;
                if (void 0 === n || "key" === n) s = 0; else {
                    if ("value" !== n)throw new a.TemplateError("dictsort filter: You can only sort by either key or value");
                    s = 1
                }
                return r.sort(function (e, n) {
                    var r = e[s], i = n[s];
                    return t || (a.isString(r) && (r = r.toUpperCase()), a.isString(i) && (i = i.toUpperCase())), r > i ? 1 : r === i ? 0 : -1
                }), r
            }, dump: function (e) {
                return JSON.stringify(e)
            }, escape: function (e) {
                return "string" == typeof e ? i.markSafe(a.escape(e)) : e
            }, safe: function (e) {
                return i.markSafe(e)
            }, first: function (e) {
                return e[0]
            }, groupby: function (e, t) {
                return a.groupBy(e, t)
            }, indent: function (e, t, n) {
                if (e = r(e, ""), "" === e)return "";
                t = t || 4;
                for (var s = "", o = e.split("\n"), u = a.repeat(" ", t), d = 0; d < o.length; d++)s += 0 !== d || n ? u + o[d] + "\n" : o[d] + "\n";
                return i.copySafeness(e, s)
            }, join: function (e, t, n) {
                return t = t || "", n && (e = a.map(e, function (e) {
                    return e[n]
                })), e.join(t)
            }, last: function (e) {
                return e[e.length - 1]
            }, length: function (e) {
                var t = r(e, "");
                return void 0 !== t ? "function" == typeof Map && t instanceof Map || "function" == typeof Set && t instanceof Set ? t.size : t.length : 0
            }, list: function (e) {
                if (a.isString(e))return e.split("");
                if (a.isObject(e)) {
                    var t = [];
                    if (Object.keys) t = Object.keys(e); else for (var n in e)t.push(n);
                    return a.map(t, function (t) {
                        return {key: t, value: e[t]}
                    })
                }
                if (a.isArray(e))return e;
                throw new a.TemplateError("list filter: type not iterable")
            }, lower: function (e) {
                return e = r(e, ""), e.toLowerCase()
            }, random: function (e) {
                return e[Math.floor(Math.random() * e.length)]
            }, rejectattr: function (e, t) {
                return e.filter(function (e) {
                    return !e[t]
                })
            }, selectattr: function (e, t) {
                return e.filter(function (e) {
                    return !!e[t]
                })
            }, replace: function (e, t, n, r) {
                var a = e;
                if (t instanceof RegExp)return e.replace(t, n);
                "undefined" == typeof r && (r = -1);
                var s = "";
                if ("number" == typeof t) t += ""; else if ("string" != typeof t)return e;
                if ("number" == typeof e && (e += ""), "string" != typeof e && !(e instanceof i.SafeString))return e;
                if ("" === t)return s = n + e.split("").join(n) + n, i.copySafeness(e, s);
                var o = e.indexOf(t);
                if (0 === r || o === -1)return e;
                for (var u = 0, d = 0; o > -1 && (r === -1 || d < r);)s += e.substring(u, o) + n, u = o + t.length, d++, o = e.indexOf(t, u);
                return u < e.length && (s += e.substring(u)), i.copySafeness(a, s)
            }, reverse: function (e) {
                var t;
                return t = a.isString(e) ? s.list(e) : a.map(e, function (e) {
                        return e
                    }), t.reverse(), a.isString(e) ? i.copySafeness(e, t.join("")) : t
            }, round: function (e, t, n) {
                t = t || 0;
                var r, a = Math.pow(10, t);
                return r = "ceil" === n ? Math.ceil : "floor" === n ? Math.floor : Math.round, r(e * a) / a
            }, slice: function (e, t, n) {
                for (var r = Math.floor(e.length / t), a = e.length % t, i = 0, s = [], o = 0; o < t; o++) {
                    var u = i + o * r;
                    o < a && i++;
                    var d = i + (o + 1) * r, l = e.slice(u, d);
                    n && o >= a && l.push(n), s.push(l)
                }
                return s
            }, sum: function (e, t, n) {
                var r = 0;
                "number" == typeof n && (r += n), t && (e = a.map(e, function (e) {
                    return e[t]
                }));
                for (var i = 0; i < e.length; i++)r += e[i];
                return r
            }, sort: i.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function (e, t, n, r) {
                return e = a.map(e, function (e) {
                    return e
                }), e.sort(function (e, i) {
                    var s, o;
                    return r ? (s = e[r], o = i[r]) : (s = e, o = i), !n && a.isString(s) && a.isString(o) && (s = s.toLowerCase(), o = o.toLowerCase()), s < o ? t ? 1 : -1 : s > o ? t ? -1 : 1 : 0
                }), e
            }), string: function (e) {
                return i.copySafeness(e, e)
            }, striptags: function (e, t) {
                e = r(e, ""), t = t || !1;
                var n = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, a = s.trim(e.replace(n, "")), o = "";
                return o = t ? a.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, "\n").replace(/\n\n\n+/g, "\n\n") : a.replace(/\s+/gi, " "), i.copySafeness(e, o)
            }, title: function (e) {
                e = r(e, "");
                for (var t = e.split(" "), n = 0; n < t.length; n++)t[n] = s.capitalize(t[n]);
                return i.copySafeness(e, t.join(" "))
            }, trim: function (e) {
                return i.copySafeness(e, e.replace(/^\s*|\s*$/g, ""))
            }, truncate: function (e, t, n, a) {
                var s = e;
                if (e = r(e, ""), t = t || 255, e.length <= t)return e;
                if (n) e = e.substring(0, t); else {
                    var o = e.lastIndexOf(" ", t);
                    o === -1 && (o = t), e = e.substring(0, o);
                }
                return e += void 0 !== a && null !== a ? a : "...", i.copySafeness(s, e)
            }, upper: function (e) {
                return e = r(e, ""), e.toUpperCase()
            }, urlencode: function (e) {
                var t = encodeURIComponent;
                if (a.isString(e))return t(e);
                var n;
                if (a.isArray(e)) n = e.map(function (e) {
                    return t(e[0]) + "=" + t(e[1])
                }); else {
                    n = [];
                    for (var r in e)e.hasOwnProperty(r) && n.push(t(r) + "=" + t(e[r]))
                }
                return n.join("&")
            }, urlize: function (e, t, n) {
                isNaN(t) && (t = 1 / 0);
                var r = n === !0 ? ' rel="nofollow"' : "", a = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, i = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, s = /^https?:\/\/.*$/, o = /^www\./, u = /\.(?:org|net|com)(?:\:|\/|$)/, d = e.split(/(\s+)/).filter(function (e) {
                    return e && e.length
                }).map(function (e) {
                    var n = e.match(a), d = n && n[1] || e;
                    return s.test(d) ? '<a href="' + d + '"' + r + ">" + d.substr(0, t) + "</a>" : o.test(d) ? '<a href="http://' + d + '"' + r + ">" + d.substr(0, t) + "</a>" : i.test(d) ? '<a href="mailto:' + d + '">' + d + "</a>" : u.test(d) ? '<a href="http://' + d + '"' + r + ">" + d.substr(0, t) + "</a>" : e
                });
                return d.join("")
            }, wordcount: function (e) {
                e = r(e, "");
                var t = e ? e.match(/\w+/g) : null;
                return t ? t.length : null
            }, "float": function (e, t) {
                var n = parseFloat(e);
                return isNaN(n) ? t : n
            }, "int": function (e, t) {
                var n = parseInt(e, 10);
                return isNaN(n) ? t : n
            }
        };
        s.d = s["default"], s.e = s.escape, e.exports = s
    }, function (e, t, n) {
        "use strict";
        function r(e, t, n) {
            return function () {
                var r, a, o = s(arguments), u = i(arguments);
                if (o > e.length) {
                    r = Array.prototype.slice.call(arguments, 0, e.length);
                    var d = Array.prototype.slice.call(arguments, r.length, o);
                    for (a = 0; a < d.length; a++)a < t.length && (u[t[a]] = d[a]);
                    r.push(u)
                } else if (o < e.length) {
                    for (r = Array.prototype.slice.call(arguments, 0, o), a = o; a < e.length; a++) {
                        var l = e[a];
                        r.push(u[l]), delete u[l]
                    }
                    r.push(u)
                } else r = arguments;
                return n.apply(this, r)
            }
        }

        function a(e) {
            return e.__keywords = !0, e
        }

        function i(e) {
            var t = e.length;
            if (t) {
                var n = e[t - 1];
                if (n && n.hasOwnProperty("__keywords"))return n
            }
            return {}
        }

        function s(e) {
            var t = e.length;
            if (0 === t)return 0;
            var n = e[t - 1];
            return n && n.hasOwnProperty("__keywords") ? t - 1 : t
        }

        function o(e) {
            return "string" != typeof e ? e : (this.val = e, void(this.length = e.length))
        }

        function u(e, t) {
            return e instanceof o ? new o(t) : t.toString()
        }

        function d(e) {
            var t = typeof e;
            return "string" === t ? new o(e) : "function" !== t ? e : function () {
                        var t = e.apply(this, arguments);
                        return "string" == typeof t ? new o(t) : t
                    }
        }

        function l(e, t) {
            return e = void 0 !== e && null !== e ? e : "", t && "string" == typeof e && (e = M.escape(e)), e
        }

        function c(e, t, n) {
            if (null === e || void 0 === e)throw new M.TemplateError("attempted to output null or undefined value", t + 1, n + 1);
            return e
        }

        function _(e, t) {
            return e = e || {}, "function" == typeof e[t] ? function () {
                    return e[t].apply(e, arguments)
                } : e[t]
        }

        function m(e, t, n, r) {
            if (!e)throw new Error("Unable to call `" + t + "`, which is undefined or falsey");
            if ("function" != typeof e)throw new Error("Unable to call `" + t + "`, which is not a function");
            return e.apply(n, r)
        }

        function h(e, t, n) {
            var r = t.lookup(n);
            return void 0 !== r && null !== r ? r : e.lookup(n)
        }

        function f(e, t, n) {
            return e.lineno ? e : new M.TemplateError(e, t, n)
        }

        function p(e, t, n, r) {
            if (M.isArray(e)) {
                var a = e.length;
                M.asyncIter(e, function (e, r, i) {
                    switch (t) {
                        case 1:
                            n(e, r, a, i);
                            break;
                        case 2:
                            n(e[0], e[1], r, a, i);
                            break;
                        case 3:
                            n(e[0], e[1], e[2], r, a, i);
                            break;
                        default:
                            e.push(r, i), n.apply(this, e)
                    }
                }, r)
            } else M.asyncFor(e, function (e, t, r, a, i) {
                n(e, t, r, a, i)
            }, r)
        }

        function y(e, t, n, r) {
            function a(e, t) {
                u++, o[e] = t, u === i && r(null, o.join(""))
            }

            var i, s, o, u = 0;
            if (M.isArray(e))if (i = e.length, o = new Array(i), 0 === i) r(null, ""); else for (s = 0; s < e.length; s++) {
                var d = e[s];
                switch (t) {
                    case 1:
                        n(d, s, i, a);
                        break;
                    case 2:
                        n(d[0], d[1], s, i, a);
                        break;
                    case 3:
                        n(d[0], d[1], d[2], s, i, a);
                        break;
                    default:
                        d.push(s, a), n.apply(this, d)
                }
            } else {
                var l = M.keys(e);
                if (i = l.length, o = new Array(i), 0 === i) r(null, ""); else for (s = 0; s < l.length; s++) {
                    var c = l[s];
                    n(c, e[c], s, i, a)
                }
            }
        }

        var M = n(1), L = n(6), g = L.extend({
            init: function (e, t) {
                this.variables = {}, this.parent = e, this.topLevel = !1, this.isolateWrites = t
            }, set: function (e, t, n) {
                var r = e.split("."), a = this.variables, i = this;
                if (n && (i = this.resolve(r[0], !0)))return void i.set(e, t);
                for (var s = 0; s < r.length - 1; s++) {
                    var o = r[s];
                    a[o] || (a[o] = {}), a = a[o]
                }
                a[r[r.length - 1]] = t
            }, get: function (e) {
                var t = this.variables[e];
                return void 0 !== t && null !== t ? t : null
            }, lookup: function (e) {
                var t = this.parent, n = this.variables[e];
                return void 0 !== n && null !== n ? n : t && t.lookup(e)
            }, resolve: function (e, t) {
                var n = t && this.isolateWrites ? void 0 : this.parent, r = this.variables[e];
                return void 0 !== r && null !== r ? this : n && n.resolve(e)
            }, push: function (e) {
                return new g(this, e)
            }, pop: function () {
                return this.parent
            }
        });
        o.prototype = Object.create(String.prototype, {
            length: {
                writable: !0,
                configurable: !0,
                value: 0
            }
        }), o.prototype.valueOf = function () {
            return this.val
        }, o.prototype.toString = function () {
            return this.val
        }, e.exports = {
            Frame: g,
            makeMacro: r,
            makeKeywordArgs: a,
            numArgs: s,
            suppressValue: l,
            ensureDefined: c,
            memberLookup: _,
            contextOrFrameLookup: h,
            callWrap: m,
            handleError: f,
            isArray: M.isArray,
            keys: M.keys,
            SafeString: o,
            copySafeness: u,
            markSafe: d,
            asyncEach: p,
            asyncAll: y,
            inOperator: M.inOperator
        }
    }, function (e, t) {
        "use strict";
        function n(e) {
            var t = -1;
            return {
                current: null, reset: function () {
                    t = -1, this.current = null
                }, next: function () {
                    return t++, t >= e.length && (t = 0), this.current = e[t], this.current
                }
            }
        }

        function r(e) {
            e = e || ",";
            var t = !0;
            return function () {
                var n = t ? "" : e;
                return t = !1, n
            }
        }

        function a() {
            return {
                range: function (e, t, n) {
                    "undefined" == typeof t ? (t = e, e = 0, n = 1) : n || (n = 1);
                    var r, a = [];
                    if (n > 0)for (r = e; r < t; r += n)a.push(r); else for (r = e; r > t; r += n)a.push(r);
                    return a
                }, cycler: function () {
                    return n(Array.prototype.slice.call(arguments))
                }, joiner: function (e) {
                    return r(e)
                }
            }
        }

        e.exports = a
    }, function (e, t, n) {
        "use strict";
        var r = n(11), a = r.extend({
            init: function (e) {
                this.precompiled = e || {}
            }, getSource: function (e) {
                return this.precompiled[e] ? {src: {type: "code", obj: this.precompiled[e]}, path: e} : null
            }
        });
        e.exports = a
    }, function (e, t, n) {
        "use strict";
        var r = n(3), a = n(6), i = n(1), s = a.extend({
            on: function (e, t) {
                this.listeners = this.listeners || {}, this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t)
            }, emit: function (e) {
                var t = Array.prototype.slice.call(arguments, 1);
                this.listeners && this.listeners[e] && i.each(this.listeners[e], function (e) {
                    e.apply(null, t)
                })
            }, resolve: function (e, t) {
                return r.resolve(r.dirname(e), t)
            }, isRelative: function (e) {
                return 0 === e.indexOf("./") || 0 === e.indexOf("../")
            }
        });
        e.exports = s
    }, function (e, t) {
        function n() {
            "use strict";
            var e = this.runtime, t = this.lib, n = e.contextOrFrameLookup;
            e.contextOrFrameLookup = function (e, t, r) {
                var a = n.apply(this, arguments);
                if (void 0 === a)switch (r) {
                    case"True":
                        return !0;
                    case"False":
                        return !1;
                    case"None":
                        return null
                }
                return a
            };
            var r = e.memberLookup, a = {
                pop: function (e) {
                    if (void 0 === e)return this.pop();
                    if (e >= this.length || e < 0)throw new Error("KeyError");
                    return this.splice(e, 1)
                }, remove: function (e) {
                    for (var t = 0; t < this.length; t++)if (this[t] === e)return this.splice(t, 1);
                    throw new Error("ValueError")
                }, count: function (e) {
                    for (var t = 0, n = 0; n < this.length; n++)this[n] === e && t++;
                    return t
                }, index: function (e) {
                    var t;
                    if ((t = this.indexOf(e)) === -1)throw new Error("ValueError");
                    return t
                }, find: function (e) {
                    return this.indexOf(e)
                }, insert: function (e, t) {
                    return this.splice(e, 0, t)
                }
            }, i = {
                items: function () {
                    var e = [];
                    for (var t in this)e.push([t, this[t]]);
                    return e
                }, values: function () {
                    var e = [];
                    for (var t in this)e.push(this[t]);
                    return e
                }, keys: function () {
                    var e = [];
                    for (var t in this)e.push(t);
                    return e
                }, get: function (e, t) {
                    var n = this[e];
                    return void 0 === n && (n = t), n
                }, has_key: function (e) {
                    return this.hasOwnProperty(e)
                }, pop: function (e, t) {
                    var n = this[e];
                    if (void 0 === n && void 0 !== t) n = t; else {
                        if (void 0 === n)throw new Error("KeyError");
                        delete this[e]
                    }
                    return n
                }, popitem: function () {
                    for (var e in this) {
                        var t = this[e];
                        return delete this[e], [e, t]
                    }
                    throw new Error("KeyError")
                }, setdefault: function (e, t) {
                    return e in this ? this[e] : (void 0 === t && (t = null), this[e] = t)
                }, update: function (e) {
                    for (var t in e)this[t] = e[t];
                    return null
                }
            };
            i.iteritems = i.items, i.itervalues = i.values, i.iterkeys = i.keys, e.memberLookup = function (e, n, s) {
                return e = e || {}, t.isArray(e) && a.hasOwnProperty(n) ? function () {
                        return a[n].apply(e, arguments)
                    } : t.isObject(e) && i.hasOwnProperty(n) ? function () {
                            return i[n].apply(e, arguments)
                        } : r.apply(this, arguments)
            }
        }

        e.exports = n
    }]);
    e.exports = n
}, function (e, t, n) {
    "use strict";
    var r = n(47), a = n(150);
    e.exports = function (e) {
        Object.keys(a).forEach(function (t) {
            e.addFilter(t, a[t])
        }), e.addFilter("venus", function (e, t, n) {
            return t = t || 160, n = n || 220, null == e ? e : (e = e.replace("/w.h/", "/"), e = e.split("@")[0], e + "@" + t + "w_" + n + "h_1e_1c")
        }), e.addFilter("timeAgo", function (e) {
            var t = new Date - new Date(e), n = t / 1e3, a = n / 60, i = a / 60, s = i / 24, o = s / 30, u = o / 12;
            return u > 1 ? r(e).format("YYYY-MM-DD") : s > 5 ? r(e).format("MM-DD") : s > 1 ? parseInt(s, 10) + "天之前" : i > 1 ? parseInt(i, 10) + "小时前" : a > 1 ? parseInt(a, 10) + "分钟前" : "刚刚"
        }), e.addFilter("numcut", function (e) {
            return e >= 1e8 ? (e / 1e8).toFixed(2) + "亿" : e >= 1e5 ? (e / 1e4).toFixed(1) + "万" : e
        }), e.addFilter("defaultAvatar", function (e) {
            return e || "http://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png"
        })
    }
}, function (e, t, n) {
    (function (e) {
        !function (t, n) {
            e.exports = n()
        }(this, function () {
            "use strict";
            function t() {
                return ur.apply(null, arguments)
            }

            function r(e) {
                ur = e
            }

            function a(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function i(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function s(e, t) {
                var n, r = [];
                for (n = 0; n < e.length; ++n)r.push(t(e[n], n));
                return r
            }

            function o(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function u(e, t) {
                for (var n in t)o(t, n) && (e[n] = t[n]);
                return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function d(e, t, n, r) {
                return Fe(e, t, n, r, !0).utc()
            }

            function l() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function c(e) {
                return null == e._pf && (e._pf = l()), e._pf
            }

            function _(e) {
                if (null == e._isValid) {
                    var t = c(e), n = dr.call(t.parsedDateParts, function (e) {
                        return null != e
                    });
                    e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
                }
                return e._isValid
            }

            function m(e) {
                var t = d(NaN);
                return null != e ? u(c(t), e) : c(t).userInvalidated = !0, t
            }

            function h(e) {
                return void 0 === e
            }

            function f(e, t) {
                var n, r, a;
                if (h(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), h(t._i) || (e._i = t._i), h(t._f) || (e._f = t._f), h(t._l) || (e._l = t._l), h(t._strict) || (e._strict = t._strict), h(t._tzm) || (e._tzm = t._tzm), h(t._isUTC) || (e._isUTC = t._isUTC), h(t._offset) || (e._offset = t._offset), h(t._pf) || (e._pf = c(t)), h(t._locale) || (e._locale = t._locale), lr.length > 0)for (n in lr)r = lr[n], a = t[r], h(a) || (e[r] = a);
                return e
            }

            function p(e) {
                f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), cr === !1 && (cr = !0, t.updateOffset(this), cr = !1)
            }

            function y(e) {
                return e instanceof p || null != e && null != e._isAMomentObject
            }

            function M(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }

            function L(e) {
                var t = +e, n = 0;
                return 0 !== t && isFinite(t) && (n = M(t)), n
            }

            function g(e, t, n) {
                var r, a = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), s = 0;
                for (r = 0; r < a; r++)(n && e[r] !== t[r] || !n && L(e[r]) !== L(t[r])) && s++;
                return s + i
            }

            function v(e) {
                t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function Y(e, n) {
                var r = !0;
                return u(function () {
                    return null != t.deprecationHandler && t.deprecationHandler(null, e), r && (v(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), r = !1), n.apply(this, arguments)
                }, n)
            }

            function k(e, n) {
                null != t.deprecationHandler && t.deprecationHandler(e, n), _r[e] || (v(n), _r[e] = !0)
            }

            function w(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function D(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function T(e) {
                var t, n;
                for (n in e)t = e[n], w(t) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function b(e, t) {
                var n, r = u({}, e);
                for (n in t)o(t, n) && (D(e[n]) && D(t[n]) ? (r[n] = {}, u(r[n], e[n]), u(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                return r
            }

            function x(e) {
                null != e && this.set(e)
            }

            function S(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function H(e) {
                for (var t, n, r, a, i = 0; i < e.length;) {
                    for (a = S(e[i]).split("-"), t = a.length, n = S(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
                        if (r = j(a.slice(0, t).join("-")))return r;
                        if (n && n.length >= t && g(a, n, !0) >= t - 1)break;
                        t--
                    }
                    i++
                }
                return null
            }

            function j(t) {
                var r = null;
                if (!pr[t] && "undefined" != typeof e && e && e.exports)try {
                    r = hr._abbr, n(49)("./" + t), E(r)
                } catch (a) {
                }
                return pr[t]
            }

            function E(e, t) {
                var n;
                return e && (n = h(t) ? W(e) : A(e, t), n && (hr = n)), hr._abbr
            }

            function A(e, t) {
                return null !== t ? (t.abbr = e, null != pr[e] ? (k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), t = b(pr[e]._config, t)) : null != t.parentLocale && (null != pr[t.parentLocale] ? t = b(pr[t.parentLocale]._config, t) : k("parentLocaleUndefined", "specified parentLocale is not defined yet")), pr[e] = new x(t), E(e), pr[e]) : (delete pr[e], null)
            }

            function P(e, t) {
                if (null != t) {
                    var n;
                    null != pr[e] && (t = b(pr[e]._config, t)), n = new x(t), n.parentLocale = pr[e], pr[e] = n, E(e)
                } else null != pr[e] && (null != pr[e].parentLocale ? pr[e] = pr[e].parentLocale : null != pr[e] && delete pr[e]);
                return pr[e]
            }

            function W(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)return hr;
                if (!a(e)) {
                    if (t = j(e))return t;
                    e = [e]
                }
                return H(e)
            }

            function C() {
                return mr(pr)
            }

            function F(e, t) {
                var n = e.toLowerCase();
                yr[n] = yr[n + "s"] = yr[t] = e
            }

            function O(e) {
                return "string" == typeof e ? yr[e] || yr[e.toLowerCase()] : void 0
            }

            function N(e) {
                var t, n, r = {};
                for (n in e)o(e, n) && (t = O(n), t && (r[t] = e[n]));
                return r
            }

            function z(e, n) {
                return function (r) {
                    return null != r ? (R(this, e, r), t.updateOffset(this, n), this) : I(this, e)
                }
            }

            function I(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function R(e, t, n) {
                e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
            }

            function J(e, t) {
                var n;
                if ("object" == typeof e)for (n in e)this.set(n, e[n]); else if (e = O(e), w(this[e]))return this[e](t);
                return this
            }

            function q(e, t, n) {
                var r = "" + Math.abs(e), a = t - r.length, i = e >= 0;
                return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r
            }

            function U(e, t, n, r) {
                var a = r;
                "string" == typeof r && (a = function () {
                    return this[r]()
                }), e && (vr[e] = a), t && (vr[t[0]] = function () {
                    return q(a.apply(this, arguments), t[1], t[2])
                }), n && (vr[n] = function () {
                    return this.localeData().ordinal(a.apply(this, arguments), e)
                })
            }

            function V(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function G(e) {
                var t, n, r = e.match(Mr);
                for (t = 0, n = r.length; t < n; t++)vr[r[t]] ? r[t] = vr[r[t]] : r[t] = V(r[t]);
                return function (t) {
                    var a, i = "";
                    for (a = 0; a < n; a++)i += r[a] instanceof Function ? r[a].call(t, e) : r[a];
                    return i
                }
            }

            function $(e, t) {
                return e.isValid() ? (t = B(t, e.localeData()), gr[t] = gr[t] || G(t), gr[t](e)) : e.localeData().invalidDate()
            }

            function B(e, t) {
                function n(e) {
                    return t.longDateFormat(e) || e
                }

                var r = 5;
                for (Lr.lastIndex = 0; r >= 0 && Lr.test(e);)e = e.replace(Lr, n), Lr.lastIndex = 0, r -= 1;
                return e
            }

            function X(e, t, n) {
                Nr[e] = w(t) ? t : function (e, r) {
                        return e && n ? n : t
                    }
            }

            function K(e, t) {
                return o(Nr, e) ? Nr[e](t._strict, t._locale) : new RegExp(Q(e))
            }

            function Q(e) {
                return Z(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, a) {
                    return t || n || r || a
                }))
            }

            function Z(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function ee(e, t) {
                var n, r = t;
                for ("string" == typeof e && (e = [e]), "number" == typeof t && (r = function (e, n) {
                    n[t] = L(e)
                }), n = 0; n < e.length; n++)zr[e[n]] = r
            }

            function te(e, t) {
                ee(e, function (e, n, r, a) {
                    r._w = r._w || {}, t(e, r._w, r, a)
                })
            }

            function ne(e, t, n) {
                null != t && o(zr, e) && zr[e](t, n._a, n, e)
            }

            function re(e, t) {
                return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
            }

            function ae(e, t) {
                return a(this._months) ? this._months[e.month()] : this._months[Xr.test(t) ? "format" : "standalone"][e.month()]
            }

            function ie(e, t) {
                return a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Xr.test(t) ? "format" : "standalone"][e.month()]
            }

            function se(e, t, n) {
                var r, a, i, s = e.toLocaleLowerCase();
                if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)i = d([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
                return n ? "MMM" === t ? (a = fr.call(this._shortMonthsParse, s), a !== -1 ? a : null) : (a = fr.call(this._longMonthsParse, s), a !== -1 ? a : null) : "MMM" === t ? (a = fr.call(this._shortMonthsParse, s), a !== -1 ? a : (a = fr.call(this._longMonthsParse, s), a !== -1 ? a : null)) : (a = fr.call(this._longMonthsParse, s), a !== -1 ? a : (a = fr.call(this._shortMonthsParse, s), a !== -1 ? a : null))
            }

            function oe(e, t, n) {
                var r, a, i;
                if (this._monthsParseExact)return se.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                    if (a = d([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e))return r;
                    if (n && "MMM" === t && this._shortMonthsParse[r].test(e))return r;
                    if (!n && this._monthsParse[r].test(e))return r
                }
            }

            function ue(e, t) {
                var n;
                if (!e.isValid())return e;
                if ("string" == typeof t)if (/^\d+$/.test(t)) t = L(t); else if (t = e.localeData().monthsParse(t), "number" != typeof t)return e;
                return n = Math.min(e.date(), re(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function de(e) {
                return null != e ? (ue(this, e), t.updateOffset(this, !0), this) : I(this, "Month")
            }

            function le() {
                return re(this.year(), this.month())
            }

            function ce(e) {
                return this._monthsParseExact ? (o(this, "_monthsRegex") || me.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
            }

            function _e(e) {
                return this._monthsParseExact ? (o(this, "_monthsRegex") || me.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
            }

            function me() {
                function e(e, t) {
                    return t.length - e.length
                }

                var t, n, r = [], a = [], i = [];
                for (t = 0; t < 12; t++)n = d([2e3, t]), r.push(this.monthsShort(n, "")), a.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                for (r.sort(e), a.sort(e), i.sort(e), t = 0; t < 12; t++)r[t] = Z(r[t]), a[t] = Z(a[t]), i[t] = Z(i[t]);
                this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function he(e) {
                var t, n = e._a;
                return n && c(e).overflow === -2 && (t = n[Rr] < 0 || n[Rr] > 11 ? Rr : n[Jr] < 1 || n[Jr] > re(n[Ir], n[Rr]) ? Jr : n[qr] < 0 || n[qr] > 24 || 24 === n[qr] && (0 !== n[Ur] || 0 !== n[Vr] || 0 !== n[Gr]) ? qr : n[Ur] < 0 || n[Ur] > 59 ? Ur : n[Vr] < 0 || n[Vr] > 59 ? Vr : n[Gr] < 0 || n[Gr] > 999 ? Gr : -1, c(e)._overflowDayOfYear && (t < Ir || t > Jr) && (t = Jr), c(e)._overflowWeeks && t === -1 && (t = $r), c(e)._overflowWeekday && t === -1 && (t = Br), c(e).overflow = t), e
            }

            function fe(e) {
                var t, n, r, a, i, s, o = e._i, u = ta.exec(o) || na.exec(o);
                if (u) {
                    for (c(e).iso = !0, t = 0, n = aa.length; t < n; t++)if (aa[t][1].exec(u[1])) {
                        a = aa[t][0], r = aa[t][2] !== !1;
                        break
                    }
                    if (null == a)return void(e._isValid = !1);
                    if (u[3]) {
                        for (t = 0, n = ia.length; t < n; t++)if (ia[t][1].exec(u[3])) {
                            i = (u[2] || " ") + ia[t][0];
                            break
                        }
                        if (null == i)return void(e._isValid = !1)
                    }
                    if (!r && null != i)return void(e._isValid = !1);
                    if (u[4]) {
                        if (!ra.exec(u[4]))return void(e._isValid = !1);
                        s = "Z"
                    }
                    e._f = a + (i || "") + (s || ""), He(e)
                } else e._isValid = !1
            }

            function pe(e) {
                var n = sa.exec(e._i);
                return null !== n ? void(e._d = new Date((+n[1]))) : (fe(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
            }

            function ye(e, t, n, r, a, i, s) {
                var o = new Date(e, t, n, r, a, i, s);
                return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
            }

            function Me(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
            }

            function Le(e) {
                return ge(e) ? 366 : 365
            }

            function ge(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            }

            function ve() {
                return ge(this.year())
            }

            function Ye(e, t, n) {
                var r = 7 + t - n, a = (7 + Me(e, 0, r).getUTCDay() - t) % 7;
                return -a + r - 1
            }

            function ke(e, t, n, r, a) {
                var i, s, o = (7 + n - r) % 7, u = Ye(e, r, a), d = 1 + 7 * (t - 1) + o + u;
                return d <= 0 ? (i = e - 1, s = Le(i) + d) : d > Le(e) ? (i = e + 1, s = d - Le(e)) : (i = e, s = d), {
                    year: i,
                    dayOfYear: s
                }
            }

            function we(e, t, n) {
                var r, a, i = Ye(e.year(), t, n), s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                return s < 1 ? (a = e.year() - 1, r = s + De(a, t, n)) : s > De(e.year(), t, n) ? (r = s - De(e.year(), t, n), a = e.year() + 1) : (a = e.year(), r = s), {
                    week: r,
                    year: a
                }
            }

            function De(e, t, n) {
                var r = Ye(e, t, n), a = Ye(e + 1, t, n);
                return (Le(e) - r + a) / 7
            }

            function Te(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function be(e) {
                var n = new Date(t.now());
                return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
            }

            function xe(e) {
                var t, n, r, a, i = [];
                if (!e._d) {
                    for (r = be(e), e._w && null == e._a[Jr] && null == e._a[Rr] && Se(e), e._dayOfYear && (a = Te(e._a[Ir], r[Ir]), e._dayOfYear > Le(a) && (c(e)._overflowDayOfYear = !0), n = Me(a, 0, e._dayOfYear), e._a[Rr] = n.getUTCMonth(), e._a[Jr] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t)e._a[t] = i[t] = r[t];
                    for (; t < 7; t++)e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[qr] && 0 === e._a[Ur] && 0 === e._a[Vr] && 0 === e._a[Gr] && (e._nextDay = !0, e._a[qr] = 0), e._d = (e._useUTC ? Me : ye).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[qr] = 24)
                }
            }

            function Se(e) {
                var t, n, r, a, i, s, o, u;
                t = e._w, null != t.GG || null != t.W || null != t.E ? (i = 1, s = 4, n = Te(t.GG, e._a[Ir], we(Oe(), 1, 4).year), r = Te(t.W, 1), a = Te(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, n = Te(t.gg, e._a[Ir], we(Oe(), i, s).year), r = Te(t.w, 1), null != t.d ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : null != t.e ? (a = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : a = i), r < 1 || r > De(n, i, s) ? c(e)._overflowWeeks = !0 : null != u ? c(e)._overflowWeekday = !0 : (o = ke(n, r, a, i, s), e._a[Ir] = o.year, e._dayOfYear = o.dayOfYear)
            }

            function He(e) {
                if (e._f === t.ISO_8601)return void fe(e);
                e._a = [], c(e).empty = !0;
                var n, r, a, i, s, o = "" + e._i, u = o.length, d = 0;
                for (a = B(e._f, e._locale).match(Mr) || [], n = 0; n < a.length; n++)i = a[n], r = (o.match(K(i, e)) || [])[0], r && (s = o.substr(0, o.indexOf(r)), s.length > 0 && c(e).unusedInput.push(s), o = o.slice(o.indexOf(r) + r.length), d += r.length), vr[i] ? (r ? c(e).empty = !1 : c(e).unusedTokens.push(i), ne(i, r, e)) : e._strict && !r && c(e).unusedTokens.push(i);
                c(e).charsLeftOver = u - d, o.length > 0 && c(e).unusedInput.push(o), c(e).bigHour === !0 && e._a[qr] <= 12 && e._a[qr] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[qr] = je(e._locale, e._a[qr], e._meridiem), xe(e), he(e)
            }

            function je(e, t, n) {
                var r;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n), r && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
            }

            function Ee(e) {
                var t, n, r, a, i;
                if (0 === e._f.length)return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
                for (a = 0; a < e._f.length; a++)i = 0, t = f({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], He(t), _(t) && (i += c(t).charsLeftOver, i += 10 * c(t).unusedTokens.length, c(t).score = i, (null == r || i < r) && (r = i, n = t));
                u(e, n || t)
            }

            function Ae(e) {
                if (!e._d) {
                    var t = N(e._i);
                    e._a = s([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                        return e && parseInt(e, 10)
                    }), xe(e)
                }
            }

            function Pe(e) {
                var t = new p(he(We(e)));
                return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
            }

            function We(e) {
                var t = e._i, n = e._f;
                return e._locale = e._locale || W(e._l), null === t || void 0 === n && "" === t ? m({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), y(t) ? new p(he(t)) : (a(n) ? Ee(e) : n ? He(e) : i(t) ? e._d = t : Ce(e), _(e) || (e._d = null), e))
            }

            function Ce(e) {
                var n = e._i;
                void 0 === n ? e._d = new Date(t.now()) : i(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? pe(e) : a(n) ? (e._a = s(n.slice(0), function (e) {
                                    return parseInt(e, 10)
                                }), xe(e)) : "object" == typeof n ? Ae(e) : "number" == typeof n ? e._d = new Date(n) : t.createFromInputFallback(e)
            }

            function Fe(e, t, n, r, a) {
                var i = {};
                return "boolean" == typeof n && (r = n, n = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = n, i._i = e, i._f = t, i._strict = r, Pe(i)
            }

            function Oe(e, t, n, r) {
                return Fe(e, t, n, r, !1)
            }

            function Ne(e, t) {
                var n, r;
                if (1 === t.length && a(t[0]) && (t = t[0]), !t.length)return Oe();
                for (n = t[0], r = 1; r < t.length; ++r)t[r].isValid() && !t[r][e](n) || (n = t[r]);
                return n
            }

            function ze() {
                var e = [].slice.call(arguments, 0);
                return Ne("isBefore", e)
            }

            function Ie() {
                var e = [].slice.call(arguments, 0);
                return Ne("isAfter", e)
            }

            function Re(e) {
                var t = N(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, i = t.week || 0, s = t.day || 0, o = t.hour || 0, u = t.minute || 0, d = t.second || 0, l = t.millisecond || 0;
                this._milliseconds = +l + 1e3 * d + 6e4 * u + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = W(), this._bubble()
            }

            function Je(e) {
                return e instanceof Re
            }

            function qe(e, t) {
                U(e, 0, 0, function () {
                    var e = this.utcOffset(), n = "+";
                    return e < 0 && (e = -e, n = "-"), n + q(~~(e / 60), 2) + t + q(~~e % 60, 2)
                })
            }

            function Ue(e, t) {
                var n = (t || "").match(e) || [], r = n[n.length - 1] || [], a = (r + "").match(ca) || ["-", 0, 0], i = +(60 * a[1]) + L(a[2]);
                return "+" === a[0] ? i : -i
            }

            function Ve(e, n) {
                var r, a;
                return n._isUTC ? (r = n.clone(), a = (y(e) || i(e) ? e.valueOf() : Oe(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + a), t.updateOffset(r, !1), r) : Oe(e).local()
            }

            function Ge(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function $e(e, n) {
                var r, a = this._offset || 0;
                return this.isValid() ? null != e ? ("string" == typeof e ? e = Ue(Cr, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (r = Ge(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), a !== e && (!n || this._changeInProgress ? ct(this, it(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : Ge(this) : null != e ? this : NaN
            }

            function Be(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }

            function Xe(e) {
                return this.utcOffset(0, e)
            }

            function Ke(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ge(this), "m")), this
            }

            function Qe() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ue(Wr, this._i)), this
            }

            function Ze(e) {
                return !!this.isValid() && (e = e ? Oe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0)
            }

            function et() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function tt() {
                if (!h(this._isDSTShifted))return this._isDSTShifted;
                var e = {};
                if (f(e, this), e = We(e), e._a) {
                    var t = e._isUTC ? d(e._a) : Oe(e._a);
                    this._isDSTShifted = this.isValid() && g(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function nt() {
                return !!this.isValid() && !this._isUTC
            }

            function rt() {
                return !!this.isValid() && this._isUTC
            }

            function at() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function it(e, t) {
                var n, r, a, i = e, s = null;
                return Je(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : "number" == typeof e ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (s = _a.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
                                y: 0,
                                d: L(s[Jr]) * n,
                                h: L(s[qr]) * n,
                                m: L(s[Ur]) * n,
                                s: L(s[Vr]) * n,
                                ms: L(s[Gr]) * n
                            }) : (s = ma.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
                                    y: st(s[2], n),
                                    M: st(s[3], n),
                                    w: st(s[4], n),
                                    d: st(s[5], n),
                                    h: st(s[6], n),
                                    m: st(s[7], n),
                                    s: st(s[8], n)
                                }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (a = ut(Oe(i.from), Oe(i.to)), i = {}, i.ms = a.milliseconds, i.M = a.months), r = new Re(i), Je(e) && o(e, "_locale") && (r._locale = e._locale), r
            }

            function st(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function ot(e, t) {
                var n = {milliseconds: 0, months: 0};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function ut(e, t) {
                var n;
                return e.isValid() && t.isValid() ? (t = Ve(t, e), e.isBefore(t) ? n = ot(e, t) : (n = ot(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
            }

            function dt(e) {
                return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
            }

            function lt(e, t) {
                return function (n, r) {
                    var a, i;
                    return null === r || isNaN(+r) || (k(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), i = n, n = r, r = i), n = "string" == typeof n ? +n : n, a = it(n, r), ct(this, a, e), this
                }
            }

            function ct(e, n, r, a) {
                var i = n._milliseconds, s = dt(n._days), o = dt(n._months);
                e.isValid() && (a = null == a || a, i && e._d.setTime(e._d.valueOf() + i * r), s && R(e, "Date", I(e, "Date") + s * r), o && ue(e, I(e, "Month") + o * r), a && t.updateOffset(e, s || o))
            }

            function _t(e, t) {
                var n = e || Oe(), r = Ve(n, this).startOf("day"), a = this.diff(r, "days", !0), i = a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse", s = t && (w(t[i]) ? t[i]() : t[i]);
                return this.format(s || this.localeData().calendar(i, this, Oe(n)))
            }

            function mt() {
                return new p(this)
            }

            function ht(e, t) {
                var n = y(e) ? e : Oe(e);
                return !(!this.isValid() || !n.isValid()) && (t = O(h(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }

            function ft(e, t) {
                var n = y(e) ? e : Oe(e);
                return !(!this.isValid() || !n.isValid()) && (t = O(h(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }

            function pt(e, t, n, r) {
                return r = r || "()", ("(" === r[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
            }

            function yt(e, t) {
                var n, r = y(e) ? e : Oe(e);
                return !(!this.isValid() || !r.isValid()) && (t = O(t || "millisecond"), "millisecond" === t ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }

            function Mt(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }

            function Lt(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }

            function gt(e, t, n) {
                var r, a, i, s;
                return this.isValid() ? (r = Ve(e, this), r.isValid() ? (a = 6e4 * (r.utcOffset() - this.utcOffset()), t = O(t), "year" === t || "month" === t || "quarter" === t ? (s = vt(this, r), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - r, s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - a) / 864e5 : "week" === t ? (i - a) / 6048e5 : i), n ? s : M(s)) : NaN) : NaN
            }

            function vt(e, t) {
                var n, r, a = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(a, "months");
                return t - i < 0 ? (n = e.clone().add(a - 1, "months"), r = (t - i) / (i - n)) : (n = e.clone().add(a + 1, "months"), r = (t - i) / (n - i)), -(a + r) || 0
            }

            function Yt() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function kt() {
                var e = this.clone().utc();
                return 0 < e.year() && e.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : $(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : $(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function wt(e) {
                e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                var n = $(this, e);
                return this.localeData().postformat(n)
            }

            function Dt(e, t) {
                return this.isValid() && (y(e) && e.isValid() || Oe(e).isValid()) ? it({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function Tt(e) {
                return this.from(Oe(), e)
            }

            function bt(e, t) {
                return this.isValid() && (y(e) && e.isValid() || Oe(e).isValid()) ? it({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function xt(e) {
                return this.to(Oe(), e)
            }

            function St(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (t = W(e), null != t && (this._locale = t), this)
            }

            function Ht() {
                return this._locale
            }

            function jt(e) {
                switch (e = O(e)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                    case"date":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function Et(e) {
                return e = O(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }

            function At() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function Pt() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function Wt() {
                return this._offset ? new Date(this.valueOf()) : this._d
            }

            function Ct() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }

            function Ft() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }

            function Ot() {
                return this.isValid() ? this.toISOString() : null
            }

            function Nt() {
                return _(this)
            }

            function zt() {
                return u({}, c(this))
            }

            function It() {
                return c(this).overflow
            }

            function Rt() {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }

            function Jt(e, t) {
                U(0, [e, e.length], 0, t)
            }

            function qt(e) {
                return $t.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Ut(e) {
                return $t.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Vt() {
                return De(this.year(), 1, 4)
            }

            function Gt() {
                var e = this.localeData()._week;
                return De(this.year(), e.dow, e.doy)
            }

            function $t(e, t, n, r, a) {
                var i;
                return null == e ? we(this, r, a).year : (i = De(e, r, a), t > i && (t = i), Bt.call(this, e, t, n, r, a))
            }

            function Bt(e, t, n, r, a) {
                var i = ke(e, t, n, r, a), s = Me(i.year, 0, i.dayOfYear);
                return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
            }

            function Xt(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }

            function Kt(e) {
                return we(e, this._week.dow, this._week.doy).week
            }

            function Qt() {
                return this._week.dow
            }

            function Zt() {
                return this._week.doy
            }

            function en(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function tn(e) {
                var t = we(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function nn(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
            }

            function rn(e, t) {
                return a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
            }

            function an(e) {
                return this._weekdaysShort[e.day()]
            }

            function sn(e) {
                return this._weekdaysMin[e.day()]
            }

            function on(e, t, n) {
                var r, a, i, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)i = d([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
                return n ? "dddd" === t ? (a = fr.call(this._weekdaysParse, s), a !== -1 ? a : null) : "ddd" === t ? (a = fr.call(this._shortWeekdaysParse, s), a !== -1 ? a : null) : (a = fr.call(this._minWeekdaysParse, s), a !== -1 ? a : null) : "dddd" === t ? (a = fr.call(this._weekdaysParse, s), a !== -1 ? a : (a = fr.call(this._shortWeekdaysParse, s), a !== -1 ? a : (a = fr.call(this._minWeekdaysParse, s), a !== -1 ? a : null))) : "ddd" === t ? (a = fr.call(this._shortWeekdaysParse, s), a !== -1 ? a : (a = fr.call(this._weekdaysParse, s), a !== -1 ? a : (a = fr.call(this._minWeekdaysParse, s), a !== -1 ? a : null))) : (a = fr.call(this._minWeekdaysParse, s), a !== -1 ? a : (a = fr.call(this._weekdaysParse, s), a !== -1 ? a : (a = fr.call(this._shortWeekdaysParse, s), a !== -1 ? a : null)))
            }

            function un(e, t, n) {
                var r, a, i;
                if (this._weekdaysParseExact)return on.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                    if (a = d([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e))return r;
                    if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))return r;
                    if (n && "dd" === t && this._minWeekdaysParse[r].test(e))return r;
                    if (!n && this._weekdaysParse[r].test(e))return r
                }
            }

            function dn(e) {
                if (!this.isValid())return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = nn(e, this.localeData()), this.add(e - t, "d")) : t
            }

            function ln(e) {
                if (!this.isValid())return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }

            function cn(e) {
                return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN
            }

            function _n(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
            }

            function mn(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
            }

            function hn(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
            }

            function fn() {
                function e(e, t) {
                    return t.length - e.length
                }

                var t, n, r, a, i, s = [], o = [], u = [], l = [];
                for (t = 0; t < 7; t++)n = d([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), s.push(r), o.push(a), u.push(i), l.push(r), l.push(a), l.push(i);
                for (s.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++)o[t] = Z(o[t]), u[t] = Z(u[t]), l[t] = Z(l[t]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function pn(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }

            function yn() {
                return this.hours() % 12 || 12
            }

            function Mn() {
                return this.hours() || 24
            }

            function Ln(e, t) {
                U(e, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function gn(e, t) {
                return t._meridiemParse
            }

            function vn(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }

            function Yn(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function kn(e, t) {
                t[Gr] = L(1e3 * ("0." + e))
            }

            function wn() {
                return this._isUTC ? "UTC" : ""
            }

            function Dn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Tn(e) {
                return Oe(1e3 * e)
            }

            function bn() {
                return Oe.apply(null, arguments).parseZone()
            }

            function xn(e, t, n) {
                var r = this._calendar[e];
                return w(r) ? r.call(t, n) : r
            }

            function Sn(e) {
                var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
            }

            function Hn() {
                return this._invalidDate
            }

            function jn(e) {
                return this._ordinal.replace("%d", e)
            }

            function En(e) {
                return e
            }

            function An(e, t, n, r) {
                var a = this._relativeTime[n];
                return w(a) ? a(e, t, n, r) : a.replace(/%d/i, e)
            }

            function Pn(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return w(n) ? n(t) : n.replace(/%s/i, t)
            }

            function Wn(e, t, n, r) {
                var a = W(), i = d().set(r, t);
                return a[n](i, e)
            }

            function Cn(e, t, n) {
                if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t)return Wn(e, t, n, "month");
                var r, a = [];
                for (r = 0; r < 12; r++)a[r] = Wn(e, r, n, "month");
                return a
            }

            function Fn(e, t, n, r) {
                "boolean" == typeof e ? ("number" == typeof t && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, "number" == typeof t && (n = t, t = void 0), t = t || "");
                var a = W(), i = e ? a._week.dow : 0;
                if (null != n)return Wn(t, (n + i) % 7, r, "day");
                var s, o = [];
                for (s = 0; s < 7; s++)o[s] = Wn(t, (s + i) % 7, r, "day");
                return o
            }

            function On(e, t) {
                return Cn(e, t, "months")
            }

            function Nn(e, t) {
                return Cn(e, t, "monthsShort")
            }

            function zn(e, t, n) {
                return Fn(e, t, n, "weekdays")
            }

            function In(e, t, n) {
                return Fn(e, t, n, "weekdaysShort")
            }

            function Rn(e, t, n) {
                return Fn(e, t, n, "weekdaysMin")
            }

            function Jn() {
                var e = this._data;
                return this._milliseconds = za(this._milliseconds), this._days = za(this._days), this._months = za(this._months), e.milliseconds = za(e.milliseconds), e.seconds = za(e.seconds), e.minutes = za(e.minutes), e.hours = za(e.hours), e.months = za(e.months), e.years = za(e.years), this
            }

            function qn(e, t, n, r) {
                var a = it(t, n);
                return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble()
            }

            function Un(e, t) {
                return qn(this, e, t, 1)
            }

            function Vn(e, t) {
                return qn(this, e, t, -1)
            }

            function Gn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function $n() {
                var e, t, n, r, a, i = this._milliseconds, s = this._days, o = this._months, u = this._data;
                return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * Gn(Xn(o) + s), s = 0, o = 0), u.milliseconds = i % 1e3, e = M(i / 1e3), u.seconds = e % 60, t = M(e / 60), u.minutes = t % 60, n = M(t / 60), u.hours = n % 24, s += M(n / 24), a = M(Bn(s)), o += a, s -= Gn(Xn(a)), r = M(o / 12), o %= 12, u.days = s, u.months = o, u.years = r, this
            }

            function Bn(e) {
                return 4800 * e / 146097
            }

            function Xn(e) {
                return 146097 * e / 4800
            }

            function Kn(e) {
                var t, n, r = this._milliseconds;
                if (e = O(e), "month" === e || "year" === e)return t = this._days + r / 864e5, n = this._months + Bn(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(Xn(this._months)), e) {
                    case"week":
                        return t / 7 + r / 6048e5;
                    case"day":
                        return t + r / 864e5;
                    case"hour":
                        return 24 * t + r / 36e5;
                    case"minute":
                        return 1440 * t + r / 6e4;
                    case"second":
                        return 86400 * t + r / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }

            function Qn() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * L(this._months / 12)
            }

            function Zn(e) {
                return function () {
                    return this.as(e)
                }
            }

            function er(e) {
                return e = O(e), this[e + "s"]()
            }

            function tr(e) {
                return function () {
                    return this._data[e]
                }
            }

            function nr() {
                return M(this.days() / 7)
            }

            function rr(e, t, n, r, a) {
                return a.relativeTime(t || 1, !!n, e, r)
            }

            function ar(e, t, n) {
                var r = it(e).abs(), a = ni(r.as("s")), i = ni(r.as("m")), s = ni(r.as("h")), o = ni(r.as("d")), u = ni(r.as("M")), d = ni(r.as("y")), l = a < ri.s && ["s", a] || i <= 1 && ["m"] || i < ri.m && ["mm", i] || s <= 1 && ["h"] || s < ri.h && ["hh", s] || o <= 1 && ["d"] || o < ri.d && ["dd", o] || u <= 1 && ["M"] || u < ri.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d];
                return l[2] = t, l[3] = +e > 0, l[4] = n, rr.apply(null, l)
            }

            function ir(e, t) {
                return void 0 !== ri[e] && (void 0 === t ? ri[e] : (ri[e] = t, !0))
            }

            function sr(e) {
                var t = this.localeData(), n = ar(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }

            function or() {
                var e, t, n, r = ai(this._milliseconds) / 1e3, a = ai(this._days), i = ai(this._months);
                e = M(r / 60), t = M(e / 60), r %= 60, e %= 60, n = M(i / 12), i %= 12;
                var s = n, o = i, u = a, d = t, l = e, c = r, _ = this.asSeconds();
                return _ ? (_ < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (u ? u + "D" : "") + (d || l || c ? "T" : "") + (d ? d + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
            }

            var ur, dr;
            dr = Array.prototype.some ? Array.prototype.some : function (e) {
                    for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)if (r in t && e.call(this, t[r], r, t))return !0;
                    return !1
                };
            var lr = t.momentProperties = [], cr = !1, _r = {};
            t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
            var mr;
            mr = Object.keys ? Object.keys : function (e) {
                    var t, n = [];
                    for (t in e)o(e, t) && n.push(t);
                    return n
                };
            var hr, fr, pr = {}, yr = {}, Mr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Lr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, gr = {}, vr = {}, Yr = /\d/, kr = /\d\d/, wr = /\d{3}/, Dr = /\d{4}/, Tr = /[+-]?\d{6}/, br = /\d\d?/, xr = /\d\d\d\d?/, Sr = /\d\d\d\d\d\d?/, Hr = /\d{1,3}/, jr = /\d{1,4}/, Er = /[+-]?\d{1,6}/, Ar = /\d+/, Pr = /[+-]?\d+/, Wr = /Z|[+-]\d\d:?\d\d/gi, Cr = /Z|[+-]\d\d(?::?\d\d)?/gi, Fr = /[+-]?\d+(\.\d{1,3})?/, Or = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Nr = {}, zr = {}, Ir = 0, Rr = 1, Jr = 2, qr = 3, Ur = 4, Vr = 5, Gr = 6, $r = 7, Br = 8;
            fr = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                    var t;
                    for (t = 0; t < this.length; ++t)if (this[t] === e)return t;
                    return -1
                }, U("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), U("MMM", 0, 0, function (e) {
                return this.localeData().monthsShort(this, e)
            }), U("MMMM", 0, 0, function (e) {
                return this.localeData().months(this, e)
            }), F("month", "M"), X("M", br), X("MM", br, kr), X("MMM", function (e, t) {
                return t.monthsShortRegex(e)
            }), X("MMMM", function (e, t) {
                return t.monthsRegex(e)
            }), ee(["M", "MM"], function (e, t) {
                t[Rr] = L(e) - 1
            }), ee(["MMM", "MMMM"], function (e, t, n, r) {
                var a = n._locale.monthsParse(e, r, n._strict);
                null != a ? t[Rr] = a : c(n).invalidMonth = e
            });
            var Xr = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/, Kr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Qr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Zr = Or, ea = Or, ta = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, na = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, ra = /Z|[+-]\d\d(?::?\d\d)?/, aa = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], ia = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], sa = /^\/?Date\((\-?\d+)/i;
            t.createFromInputFallback = Y("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), U("Y", 0, 0, function () {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }), U(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), X("Y", Pr), X("YY", br, kr), X("YYYY", jr, Dr), X("YYYYY", Er, Tr), X("YYYYYY", Er, Tr), ee(["YYYYY", "YYYYYY"], Ir), ee("YYYY", function (e, n) {
                n[Ir] = 2 === e.length ? t.parseTwoDigitYear(e) : L(e)
            }), ee("YY", function (e, n) {
                n[Ir] = t.parseTwoDigitYear(e)
            }), ee("Y", function (e, t) {
                t[Ir] = parseInt(e, 10)
            }), t.parseTwoDigitYear = function (e) {
                return L(e) + (L(e) > 68 ? 1900 : 2e3)
            };
            var oa = z("FullYear", !0);
            t.ISO_8601 = function () {
            };
            var ua = Y("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
                var e = Oe.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : m()
            }), da = Y("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
                var e = Oe.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : m()
            }), la = function () {
                return Date.now ? Date.now() : +new Date
            };
            qe("Z", ":"), qe("ZZ", ""), X("Z", Cr), X("ZZ", Cr), ee(["Z", "ZZ"], function (e, t, n) {
                n._useUTC = !0, n._tzm = Ue(Cr, e)
            });
            var ca = /([\+\-]|\d\d)/gi;
            t.updateOffset = function () {
            };
            var _a = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/, ma = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            it.fn = Re.prototype;
            var ha = lt(1, "add"), fa = lt(-1, "subtract");
            t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var pa = Y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            U(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), U(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), Jt("gggg", "weekYear"), Jt("ggggg", "weekYear"), Jt("GGGG", "isoWeekYear"), Jt("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), X("G", Pr), X("g", Pr), X("GG", br, kr), X("gg", br, kr), X("GGGG", jr, Dr), X("gggg", jr, Dr), X("GGGGG", Er, Tr), X("ggggg", Er, Tr), te(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
                t[r.substr(0, 2)] = L(e)
            }), te(["gg", "GG"], function (e, n, r, a) {
                n[a] = t.parseTwoDigitYear(e)
            }), U("Q", 0, "Qo", "quarter"), F("quarter", "Q"), X("Q", Yr), ee("Q", function (e, t) {
                t[Rr] = 3 * (L(e) - 1)
            }), U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), X("w", br), X("ww", br, kr), X("W", br), X("WW", br, kr), te(["w", "ww", "W", "WW"], function (e, t, n, r) {
                t[r.substr(0, 1)] = L(e)
            });
            var ya = {dow: 0, doy: 6};
            U("D", ["DD", 2], "Do", "date"), F("date", "D"), X("D", br), X("DD", br, kr), X("Do", function (e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient
            }), ee(["D", "DD"], Jr), ee("Do", function (e, t) {
                t[Jr] = L(e.match(br)[0], 10)
            });
            var Ma = z("Date", !0);
            U("d", 0, "do", "day"), U("dd", 0, 0, function (e) {
                return this.localeData().weekdaysMin(this, e)
            }), U("ddd", 0, 0, function (e) {
                return this.localeData().weekdaysShort(this, e)
            }), U("dddd", 0, 0, function (e) {
                return this.localeData().weekdays(this, e)
            }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), X("d", br), X("e", br), X("E", br), X("dd", function (e, t) {
                return t.weekdaysMinRegex(e)
            }), X("ddd", function (e, t) {
                return t.weekdaysShortRegex(e)
            }), X("dddd", function (e, t) {
                return t.weekdaysRegex(e)
            }), te(["dd", "ddd", "dddd"], function (e, t, n, r) {
                var a = n._locale.weekdaysParse(e, r, n._strict);
                null != a ? t.d = a : c(n).invalidWeekday = e
            }), te(["d", "e", "E"], function (e, t, n, r) {
                t[r] = L(e)
            });
            var La = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ga = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), va = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ya = Or, ka = Or, wa = Or;
            U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), X("DDD", Hr), X("DDDD", wr), ee(["DDD", "DDDD"], function (e, t, n) {
                n._dayOfYear = L(e)
            }), U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, yn), U("k", ["kk", 2], 0, Mn), U("hmm", 0, 0, function () {
                return "" + yn.apply(this) + q(this.minutes(), 2)
            }), U("hmmss", 0, 0, function () {
                return "" + yn.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2)
            }), U("Hmm", 0, 0, function () {
                return "" + this.hours() + q(this.minutes(), 2)
            }), U("Hmmss", 0, 0, function () {
                return "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2)
            }), Ln("a", !0), Ln("A", !1), F("hour", "h"), X("a", gn), X("A", gn), X("H", br), X("h", br), X("HH", br, kr), X("hh", br, kr), X("hmm", xr), X("hmmss", Sr), X("Hmm", xr), X("Hmmss", Sr), ee(["H", "HH"], qr), ee(["a", "A"], function (e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), ee(["h", "hh"], function (e, t, n) {
                t[qr] = L(e), c(n).bigHour = !0
            }), ee("hmm", function (e, t, n) {
                var r = e.length - 2;
                t[qr] = L(e.substr(0, r)), t[Ur] = L(e.substr(r)), c(n).bigHour = !0
            }), ee("hmmss", function (e, t, n) {
                var r = e.length - 4, a = e.length - 2;
                t[qr] = L(e.substr(0, r)), t[Ur] = L(e.substr(r, 2)), t[Vr] = L(e.substr(a)), c(n).bigHour = !0
            }), ee("Hmm", function (e, t, n) {
                var r = e.length - 2;
                t[qr] = L(e.substr(0, r)), t[Ur] = L(e.substr(r))
            }), ee("Hmmss", function (e, t, n) {
                var r = e.length - 4, a = e.length - 2;
                t[qr] = L(e.substr(0, r)), t[Ur] = L(e.substr(r, 2)), t[Vr] = L(e.substr(a))
            });
            var Da = /[ap]\.?m?\.?/i, Ta = z("Hours", !0);
            U("m", ["mm", 2], 0, "minute"), F("minute", "m"), X("m", br), X("mm", br, kr), ee(["m", "mm"], Ur);
            var ba = z("Minutes", !1);
            U("s", ["ss", 2], 0, "second"), F("second", "s"), X("s", br), X("ss", br, kr), ee(["s", "ss"], Vr);
            var xa = z("Seconds", !1);
            U("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), U(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), U(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), U(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), U(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), U(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), U(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), F("millisecond", "ms"), X("S", Hr, Yr), X("SS", Hr, kr), X("SSS", Hr, wr);
            var Sa;
            for (Sa = "SSSS"; Sa.length <= 9; Sa += "S")X(Sa, Ar);
            for (Sa = "S"; Sa.length <= 9; Sa += "S")ee(Sa, kn);
            var Ha = z("Milliseconds", !1);
            U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
            var ja = p.prototype;
            ja.add = ha, ja.calendar = _t, ja.clone = mt, ja.diff = gt, ja.endOf = Et, ja.format = wt, ja.from = Dt, ja.fromNow = Tt, ja.to = bt, ja.toNow = xt, ja.get = J, ja.invalidAt = It, ja.isAfter = ht, ja.isBefore = ft, ja.isBetween = pt, ja.isSame = yt, ja.isSameOrAfter = Mt, ja.isSameOrBefore = Lt, ja.isValid = Nt, ja.lang = pa, ja.locale = St, ja.localeData = Ht, ja.max = da, ja.min = ua, ja.parsingFlags = zt, ja.set = J, ja.startOf = jt, ja.subtract = fa, ja.toArray = Ct, ja.toObject = Ft, ja.toDate = Wt, ja.toISOString = kt, ja.toJSON = Ot, ja.toString = Yt, ja.unix = Pt, ja.valueOf = At, ja.creationData = Rt, ja.year = oa, ja.isLeapYear = ve, ja.weekYear = qt, ja.isoWeekYear = Ut, ja.quarter = ja.quarters = Xt, ja.month = de, ja.daysInMonth = le, ja.week = ja.weeks = en, ja.isoWeek = ja.isoWeeks = tn, ja.weeksInYear = Gt, ja.isoWeeksInYear = Vt, ja.date = Ma, ja.day = ja.days = dn, ja.weekday = ln, ja.isoWeekday = cn, ja.dayOfYear = pn, ja.hour = ja.hours = Ta, ja.minute = ja.minutes = ba, ja.second = ja.seconds = xa, ja.millisecond = ja.milliseconds = Ha, ja.utcOffset = $e, ja.utc = Xe, ja.local = Ke, ja.parseZone = Qe, ja.hasAlignedHourOffset = Ze, ja.isDST = et, ja.isDSTShifted = tt, ja.isLocal = nt, ja.isUtcOffset = rt, ja.isUtc = at, ja.isUTC = at, ja.zoneAbbr = wn, ja.zoneName = Dn, ja.dates = Y("dates accessor is deprecated. Use date instead.", Ma), ja.months = Y("months accessor is deprecated. Use month instead", de), ja.years = Y("years accessor is deprecated. Use year instead", oa), ja.zone = Y("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Be);
            var Ea = ja, Aa = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            }, Pa = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }, Wa = "Invalid date", Ca = "%d", Fa = /\d{1,2}/, Oa = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }, Na = x.prototype;
            Na._calendar = Aa, Na.calendar = xn, Na._longDateFormat = Pa, Na.longDateFormat = Sn, Na._invalidDate = Wa, Na.invalidDate = Hn, Na._ordinal = Ca, Na.ordinal = jn, Na._ordinalParse = Fa, Na.preparse = En, Na.postformat = En, Na._relativeTime = Oa, Na.relativeTime = An, Na.pastFuture = Pn, Na.set = T, Na.months = ae, Na._months = Kr, Na.monthsShort = ie, Na._monthsShort = Qr, Na.monthsParse = oe, Na._monthsRegex = ea, Na.monthsRegex = _e, Na._monthsShortRegex = Zr, Na.monthsShortRegex = ce, Na.week = Kt, Na._week = ya, Na.firstDayOfYear = Zt, Na.firstDayOfWeek = Qt, Na.weekdays = rn, Na._weekdays = La, Na.weekdaysMin = sn, Na._weekdaysMin = va, Na.weekdaysShort = an, Na._weekdaysShort = ga, Na.weekdaysParse = un, Na._weekdaysRegex = Ya, Na.weekdaysRegex = _n, Na._weekdaysShortRegex = ka, Na.weekdaysShortRegex = mn, Na._weekdaysMinRegex = wa, Na.weekdaysMinRegex = hn, Na.isPM = vn, Na._meridiemParse = Da, Na.meridiem = Yn, E("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10, n = 1 === L(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }), t.lang = Y("moment.lang is deprecated. Use moment.locale instead.", E), t.langData = Y("moment.langData is deprecated. Use moment.localeData instead.", W);
            var za = Math.abs, Ia = Zn("ms"), Ra = Zn("s"), Ja = Zn("m"), qa = Zn("h"), Ua = Zn("d"), Va = Zn("w"), Ga = Zn("M"), $a = Zn("y"), Ba = tr("milliseconds"), Xa = tr("seconds"), Ka = tr("minutes"), Qa = tr("hours"), Za = tr("days"), ei = tr("months"), ti = tr("years"), ni = Math.round, ri = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, ai = Math.abs, ii = Re.prototype;
            ii.abs = Jn, ii.add = Un, ii.subtract = Vn, ii.as = Kn, ii.asMilliseconds = Ia, ii.asSeconds = Ra, ii.asMinutes = Ja, ii.asHours = qa, ii.asDays = Ua, ii.asWeeks = Va, ii.asMonths = Ga, ii.asYears = $a, ii.valueOf = Qn, ii._bubble = $n, ii.get = er, ii.milliseconds = Ba, ii.seconds = Xa, ii.minutes = Ka, ii.hours = Qa, ii.days = Za, ii.weeks = nr, ii.months = ei, ii.years = ti, ii.humanize = sr, ii.toISOString = or, ii.toString = or, ii.toJSON = or, ii.locale = St, ii.localeData = Ht, ii.toIsoString = Y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", or), ii.lang = pa, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), X("x", Pr), X("X", Fr), ee("X", function (e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), ee("x", function (e, t, n) {
                n._d = new Date(L(e))
            }), t.version = "2.13.0", r(Oe), t.fn = Ea, t.min = ze, t.max = Ie, t.now = la, t.utc = d, t.unix = Tn, t.months = On, t.isDate = i, t.locale = E, t.invalid = m, t.duration = it, t.isMoment = y, t.weekdays = zn, t.parseZone = bn, t.localeData = W, t.isDuration = Je, t.monthsShort = Nn, t.weekdaysMin = Rn, t.defineLocale = A, t.updateLocale = P, t.locales = C, t.weekdaysShort = In, t.normalizeUnits = O, t.relativeTimeThreshold = ir, t.prototype = Ea;
            var si = t;
            return si
        })
    }).call(t, n(48)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    function r(e) {
        return n(a(e))
    }

    function a(e) {
        return i[e] || function () {
                throw new Error("Cannot find module '" + e + "'.")
            }()
    }

    var i = {
        "./af": 50,
        "./af.js": 50,
        "./ar": 51,
        "./ar-ma": 52,
        "./ar-ma.js": 52,
        "./ar-sa": 53,
        "./ar-sa.js": 53,
        "./ar-tn": 54,
        "./ar-tn.js": 54,
        "./ar.js": 51,
        "./az": 55,
        "./az.js": 55,
        "./be": 56,
        "./be.js": 56,
        "./bg": 57,
        "./bg.js": 57,
        "./bn": 58,
        "./bn.js": 58,
        "./bo": 59,
        "./bo.js": 59,
        "./br": 60,
        "./br.js": 60,
        "./bs": 61,
        "./bs.js": 61,
        "./ca": 62,
        "./ca.js": 62,
        "./cs": 63,
        "./cs.js": 63,
        "./cv": 64,
        "./cv.js": 64,
        "./cy": 65,
        "./cy.js": 65,
        "./da": 66,
        "./da.js": 66,
        "./de": 67,
        "./de-at": 68,
        "./de-at.js": 68,
        "./de.js": 67,
        "./dv": 69,
        "./dv.js": 69,
        "./el": 70,
        "./el.js": 70,
        "./en-au": 71,
        "./en-au.js": 71,
        "./en-ca": 72,
        "./en-ca.js": 72,
        "./en-gb": 73,
        "./en-gb.js": 73,
        "./en-ie": 74,
        "./en-ie.js": 74,
        "./en-nz": 75,
        "./en-nz.js": 75,
        "./eo": 76,
        "./eo.js": 76,
        "./es": 77,
        "./es.js": 77,
        "./et": 78,
        "./et.js": 78,
        "./eu": 79,
        "./eu.js": 79,
        "./fa": 80,
        "./fa.js": 80,
        "./fi": 81,
        "./fi.js": 81,
        "./fo": 82,
        "./fo.js": 82,
        "./fr": 83,
        "./fr-ca": 84,
        "./fr-ca.js": 84,
        "./fr-ch": 85,
        "./fr-ch.js": 85,
        "./fr.js": 83,
        "./fy": 86,
        "./fy.js": 86,
        "./gd": 87,
        "./gd.js": 87,
        "./gl": 88,
        "./gl.js": 88,
        "./he": 89,
        "./he.js": 89,
        "./hi": 90,
        "./hi.js": 90,
        "./hr": 91,
        "./hr.js": 91,
        "./hu": 92,
        "./hu.js": 92,
        "./hy-am": 93,
        "./hy-am.js": 93,
        "./id": 94,
        "./id.js": 94,
        "./is": 95,
        "./is.js": 95,
        "./it": 96,
        "./it.js": 96,
        "./ja": 97,
        "./ja.js": 97,
        "./jv": 98,
        "./jv.js": 98,
        "./ka": 99,
        "./ka.js": 99,
        "./kk": 100,
        "./kk.js": 100,
        "./km": 101,
        "./km.js": 101,
        "./ko": 102,
        "./ko.js": 102,
        "./ky": 103,
        "./ky.js": 103,
        "./lb": 104,
        "./lb.js": 104,
        "./lo": 105,
        "./lo.js": 105,
        "./lt": 106,
        "./lt.js": 106,
        "./lv": 107,
        "./lv.js": 107,
        "./me": 108,
        "./me.js": 108,
        "./mk": 109,
        "./mk.js": 109,
        "./ml": 110,
        "./ml.js": 110,
        "./mr": 111,
        "./mr.js": 111,
        "./ms": 112,
        "./ms-my": 113,
        "./ms-my.js": 113,
        "./ms.js": 112,
        "./my": 114,
        "./my.js": 114,
        "./nb": 115,
        "./nb.js": 115,
        "./ne": 116,
        "./ne.js": 116,
        "./nl": 117,
        "./nl.js": 117,
        "./nn": 118,
        "./nn.js": 118,
        "./pa-in": 119,
        "./pa-in.js": 119,
        "./pl": 120,
        "./pl.js": 120,
        "./pt": 121,
        "./pt-br": 122,
        "./pt-br.js": 122,
        "./pt.js": 121,
        "./ro": 123,
        "./ro.js": 123,
        "./ru": 124,
        "./ru.js": 124,
        "./se": 125,
        "./se.js": 125,
        "./si": 126,
        "./si.js": 126,
        "./sk": 127,
        "./sk.js": 127,
        "./sl": 128,
        "./sl.js": 128,
        "./sq": 129,
        "./sq.js": 129,
        "./sr": 130,
        "./sr-cyrl": 131,
        "./sr-cyrl.js": 131,
        "./sr.js": 130,
        "./ss": 132,
        "./ss.js": 132,
        "./sv": 133,
        "./sv.js": 133,
        "./sw": 134,
        "./sw.js": 134,
        "./ta": 135,
        "./ta.js": 135,
        "./te": 136,
        "./te.js": 136,
        "./th": 137,
        "./th.js": 137,
        "./tl-ph": 138,
        "./tl-ph.js": 138,
        "./tlh": 139,
        "./tlh.js": 139,
        "./tr": 140,
        "./tr.js": 140,
        "./tzl": 141,
        "./tzl.js": 141,
        "./tzm": 142,
        "./tzm-latn": 143,
        "./tzm-latn.js": 143,
        "./tzm.js": 142,
        "./uk": 144,
        "./uk.js": 144,
        "./uz": 145,
        "./uz.js": 145,
        "./vi": 146,
        "./vi.js": 146,
        "./x-pseudo": 147,
        "./x-pseudo.js": 147,
        "./zh-cn": 148,
        "./zh-cn.js": 148,
        "./zh-tw": 149,
        "./zh-tw.js": 149
    };
    r.keys = function () {
        return Object.keys(i)
    }, r.resolve = a, e.exports = r, r.id = 49
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
                return /^nm$/i.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}, n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        }, r = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }, a = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }, i = function (e) {
            return function (t, n, i, s) {
                var o = r(t), u = a[e][r(t)];
                return 2 === o && (u = u[n ? 0 : 1]), u.replace(/%d/i, t)
            }
        }, s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"], o = e.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function (e) {
                return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        });
        return o
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 6, doy: 12}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}, n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        }, r = e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        }, n = e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
                if (0 === e)return e + "-ıncı";
                var n = e % 10, r = e % 100 - n, a = e >= 100 ? 100 : null;
                return e + (t[n] || t[r] || t[a])
            },
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }

        function n(e, n, r) {
            var a = {
                mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === r ? n ? "хвіліна" : "хвіліну" : "h" === r ? n ? "гадзіна" : "гадзіну" : e + " " + t(a[r], +e)
        }

        var r = e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function () {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "дзень",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            ordinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                    case"D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"}, n = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        }, r = e.defineLocale("bn", {
            months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
            weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function (e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {dow: 0, doy: 6}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"}, n = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
        }, r = e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function (e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {dow: 0, doy: 6}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n) {
            var r = {mm: "munutenn", MM: "miz", dd: "devezh"};
            return e + " " + a(r[n], e)
        }

        function n(e) {
            switch (r(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return e + " bloaz";
                default:
                    return e + " vloaz"
            }
        }

        function r(e) {
            return e > 9 ? r(e % 10) : e
        }

        function a(e, t) {
            return 2 === t ? i(e) : e
        }

        function i(e) {
            var t = {m: "v", b: "v", d: "z"};
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }

        var s = e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: n
            },
            ordinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
                var t = 1 === e ? "añ" : "vet";
                return e + t
            },
            week: {dow: 1, doy: 4}
        });
        return s
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return r += 1 === e ? "dan" : "dana";
                case"MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        var n = e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextDay: function () {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e) {
            return e > 1 && e < 5 && 1 !== ~~(e / 10)
        }

        function n(e, n, r, a) {
            var i = e + " ";
            switch (r) {
                case"s":
                    return n || a ? "pár sekund" : "pár sekundami";
                case"m":
                    return n ? "minuta" : a ? "minutu" : "minutou";
                case"mm":
                    return n || a ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
                case"h":
                    return n ? "hodina" : a ? "hodinu" : "hodinou";
                case"hh":
                    return n || a ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
                case"d":
                    return n || a ? "den" : "dnem";
                case"dd":
                    return n || a ? i + (t(e) ? "dny" : "dní") : i + "dny";
                case"M":
                    return n || a ? "měsíc" : "měsícem";
                case"MM":
                    return n || a ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
                case"y":
                    return n || a ? "rok" : "rokem";
                case"yy":
                    return n || a ? i + (t(e) ? "roky" : "let") : i + "lety"
            }
        }

        var r = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), i = e.defineLocale("cs", {
            months: r,
            monthsShort: a,
            monthsParse: function (e, t) {
                var n, r = [];
                for (n = 0; n < 12; n++)r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return r
            }(r, a),
            shortMonthsParse: function (e) {
                var t, n = [];
                for (t = 0; t < 12; t++)n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(a),
            longMonthsParse: function (e) {
                var t, n = [];
                for (t = 0; t < 12; t++)n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(r),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[včera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return i
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                    return e + t
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            ordinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
                var t = e, n = "", r = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = r[t]), e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        var n = e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        var n = e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"], n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"], r = e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
                return "މފ" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 7, doy: 12}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        var n = e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function (e, t) {
                return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function (e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, n) {
                var r = this._calendarEl[e], a = n && n.hours();
                return t(r) && (r = r.apply(n)), r.replace("{}", a % 12 === 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {dow: 1, doy: 4}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaŭ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), r = e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return /-MMM-/.test(r) ? n[e.month()] : t[e.month()];
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1]
        }

        var n = e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"}, n = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        }, r = e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چندین ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/[۰-۹]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            ordinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {dow: 6, doy: 12}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, r, a) {
            var i = "";
            switch (r) {
                case"s":
                    return a ? "muutaman sekunnin" : "muutama sekunti";
                case"m":
                    return a ? "minuutin" : "minuutti";
                case"mm":
                    i = a ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return a ? "tunnin" : "tunti";
                case"hh":
                    i = a ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return a ? "päivän" : "päivä";
                case"dd":
                    i = a ? "päivän" : "päivää";
                    break;
                case"M":
                    return a ? "kuukauden" : "kuukausi";
                case"MM":
                    i = a ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return a ? "vuoden" : "vuosi";
                case"yy":
                    i = a ? "vuoden" : "vuotta"
            }
            return i = n(e, a) + " " + i
        }

        function n(e, t) {
            return e < 10 ? t ? a[e] : r[e] : e
        }

        var r = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "), a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", r[7], r[8], r[9]], i = e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return i
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function (e) {
                return e + (1 === e ? "er" : "")
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e) {
                return e + (1 === e ? "er" : "e")
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e) {
                return e + (1 === e ? "er" : "e")
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), r = e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, r) {
                return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"], n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], r = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], a = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"], s = e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: r,
            weekdaysShort: a,
            weekdaysMin: i,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            ordinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
                return e + t
            },
            week: {dow: 1, doy: 4}
        });
        return s
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextDay: function () {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return "uns segundos" === e ? "nuns segundos" : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function (e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function (e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function (e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function (e) {
                    return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        }, r = e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {dow: 0, doy: 6}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return r += 1 === e ? "dan" : "dana";
                case"MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        var n = e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = e;
            switch (n) {
                case"s":
                    return r || t ? "néhány másodperc" : "néhány másodperce";
                case"m":
                    return "egy" + (r || t ? " perc" : " perce");
                case"mm":
                    return a + (r || t ? " perc" : " perce");
                case"h":
                    return "egy" + (r || t ? " óra" : " órája");
                case"hh":
                    return a + (r || t ? " óra" : " órája");
                case"d":
                    return "egy" + (r || t ? " nap" : " napja");
                case"dd":
                    return a + (r || t ? " nap" : " napja");
                case"M":
                    return "egy" + (r || t ? " hónap" : " hónapja");
                case"MM":
                    return a + (r || t ? " hónap" : " hónapja");
                case"y":
                    return "egy" + (r || t ? " év" : " éve");
                case"yy":
                    return a + (r || t ? " év" : " éve")
            }
            return ""
        }

        function n(e) {
            return (e ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]"
        }

        var r = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "), a = e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return n.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return n.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return a
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
                    return "dddd [օրը ժամը] LT"
                }, lastWeek: function () {
                    return "[անցած] dddd [օրը ժամը] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function (e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"DDD":
                    case"w":
                    case"W":
                    case"DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e) {
            return e % 100 === 11 || e % 10 !== 1
        }

        function n(e, n, r, a) {
            var i = e + " ";
            switch (r) {
                case"s":
                    return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case"m":
                    return n ? "mínúta" : "mínútu";
                case"mm":
                    return t(e) ? i + (n || a ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
                case"hh":
                    return t(e) ? i + (n || a ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                case"d":
                    return n ? "dagur" : a ? "dag" : "degi";
                case"dd":
                    return t(e) ? n ? i + "dagar" : i + (a ? "daga" : "dögum") : n ? i + "dagur" : i + (a ? "dag" : "degi");
                case"M":
                    return n ? "mánuður" : a ? "mánuð" : "mánuði";
                case"MM":
                    return t(e) ? n ? i + "mánuðir" : i + (a ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (a ? "mánuð" : "mánuði");
                case"y":
                    return n || a ? "ár" : "ári";
                case"yy":
                    return t(e) ? i + (n || a ? "ár" : "árum") : i + (n || a ? "ár" : "ári")
            }
        }

        var r = e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                LTS: "Ah時m分s秒",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah時m分",
                LLLL: "YYYY年M月D日Ah時m分 dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
                return "午後" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function (e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        }, n = e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            ordinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
                var n = e % 10, r = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[r])
            },
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 m분",
                LTS: "A h시 m분 s초",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h시 m분",
                LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            ordinalParse: /\d{1,2}일/,
            ordinal: "%d일",
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        }, n = e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
                var n = e % 10, r = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[r])
            },
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function n(e) {
            var t = e.substr(0, e.indexOf(" "));
            return a(t) ? "a " + e : "an " + e
        }

        function r(e) {
            var t = e.substr(0, e.indexOf(" "));
            return a(t) ? "viru " + e : "virun " + e
        }

        function a(e) {
            if (e = parseInt(e, 10), isNaN(e))return !1;
            if (e < 0)return !0;
            if (e < 10)return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10, n = e / 10;
                return a(0 === t ? n : t)
            }
            if (e < 1e4) {
                for (; e >= 10;)e /= 10;
                return a(e)
            }
            return e /= 1e3, a(e)
        }

        var i = e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: n,
                past: r,
                s: "e puer Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return i
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            ordinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
                return "ທີ່" + e
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
        }

        function n(e, t, n, r) {
            return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
        }

        function r(e) {
            return e % 10 === 0 || e > 10 && e < 20
        }

        function a(e) {
            return s[e].split("_")
        }

        function i(e, t, i, s) {
            var o = e + " ";
            return 1 === e ? o + n(e, t, i[0], s) : t ? o + (r(e) ? a(i)[1] : a(i)[0]) : s ? o + a(i)[1] : o + (r(e) ? a(i)[1] : a(i)[2])
        }

        var s = {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        }, o = e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: t,
                m: n,
                mm: i,
                h: n,
                hh: i,
                d: n,
                dd: i,
                M: n,
                MM: i,
                y: n,
                yy: i
            },
            ordinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {dow: 1, doy: 4}
        });
        return o
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n) {
            return n ? t % 10 === 1 && 11 !== t ? e[2] : e[3] : t % 10 === 1 && 11 !== t ? e[0] : e[1]
        }

        function n(e, n, r) {
            return e + " " + t(i[r], e, n)
        }

        function r(e, n, r) {
            return t(i[r], e, n)
        }

        function a(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
        }

        var i = {
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        }, s = e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: a,
                m: r,
                mm: n,
                h: r,
                hh: n,
                d: r,
                dd: n,
                M: r,
                MM: n,
                y: r,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return s
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {
            words: {
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        }, n = e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                    return e[this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = "";
            if (t)switch (n) {
                case"s":
                    a = "काही सेकंद";
                    break;
                case"m":
                    a = "एक मिनिट";
                    break;
                case"mm":
                    a = "%d मिनिटे";
                    break;
                case"h":
                    a = "एक तास";
                    break;
                case"hh":
                    a = "%d तास";
                    break;
                case"d":
                    a = "एक दिवस";
                    break;
                case"dd":
                    a = "%d दिवस";
                    break;
                case"M":
                    a = "एक महिना";
                    break;
                case"MM":
                    a = "%d महिने";
                    break;
                case"y":
                    a = "एक वर्ष";
                    break;
                case"yy":
                    a = "%d वर्षे"
            } else switch (n) {
                case"s":
                    a = "काही सेकंदां";
                    break;
                case"m":
                    a = "एका मिनिटा";
                    break;
                case"mm":
                    a = "%d मिनिटां";
                    break;
                case"h":
                    a = "एका तासा";
                    break;
                case"hh":
                    a = "%d तासां";
                    break;
                case"d":
                    a = "एका दिवसा";
                    break;
                case"dd":
                    a = "%d दिवसां";
                    break;
                case"M":
                    a = "एका महिन्या";
                    break;
                case"MM":
                    a = "%d महिन्यां";
                    break;
                case"y":
                    a = "एका वर्षा";
                    break;
                case"yy":
                    a = "%d वर्षां"
            }
            return a.replace(/%d/i, e)
        }

        var n = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, r = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        }, a = e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return r[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return n[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {dow: 0, doy: 6}
        });
        return a
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"}, n = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
        }, r = e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function (e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            week: {dow: 1, doy: 4}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        }, r = e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {dow: 0, doy: 6}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), r = e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, r) {
                return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
            },
            monthsParseExact: !0,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"}, n = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
        }, r = e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {dow: 0, doy: 6}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
        }

        function n(e, n, r) {
            var a = e + " ";
            switch (r) {
                case"m":
                    return n ? "minuta" : "minutę";
                case"mm":
                    return a + (t(e) ? "minuty" : "minut");
                case"h":
                    return n ? "godzina" : "godzinę";
                case"hh":
                    return a + (t(e) ? "godziny" : "godzin");
                case"MM":
                    return a + (t(e) ? "miesiące" : "miesięcy");
                case"yy":
                    return a + (t(e) ? "lata" : "lat")
            }
        }

        var r = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), i = e.defineLocale("pl", {
            months: function (e, t) {
                return "" === t ? "(" + a[e.month()] + "|" + r[e.month()] + ")" : /D MMMM/.test(t) ? a[e.month()] : r[e.month()]
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: n,
                y: "rok",
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return i
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n) {
            var r = {mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, a = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (a = " de "), e + a + r[n]
        }

        var n = e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT", sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }

        function n(e, n, r) {
            var a = {
                mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === r ? n ? "минута" : "минуту" : e + " " + t(a[r], +e)
        }

        var r = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i], a = e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            monthsRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
            monthsShortRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
            monthsStrictRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|марта?|июн[яь]|июл[яь]|ма[яй])/i,
            monthsShortStrictRegex: /^(нояб\.|февр\.|сент\.|июль|янв\.|июн[яь]|мар[.т]|авг\.|апр\.|окт\.|дек\.|ма[яй])/i,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function (e) {
                    if (e.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd [в] LT"
                    }
                },
                lastWeek: function (e) {
                    if (e.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: n,
                mm: n,
                h: "час",
                hh: n,
                d: "день",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            ordinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    case"w":
                    case"W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        });
        return a
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            ordinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e) {
            return e > 1 && e < 5
        }

        function n(e, n, r, a) {
            var i = e + " ";
            switch (r) {
                case"s":
                    return n || a ? "pár sekúnd" : "pár sekundami";
                case"m":
                    return n ? "minúta" : a ? "minútu" : "minútou";
                case"mm":
                    return n || a ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
                case"h":
                    return n ? "hodina" : a ? "hodinu" : "hodinou";
                case"hh":
                    return n || a ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
                case"d":
                    return n || a ? "deň" : "dňom";
                case"dd":
                    return n || a ? i + (t(e) ? "dni" : "dní") : i + "dňami";
                case"M":
                    return n || a ? "mesiac" : "mesiacom";
                case"MM":
                    return n || a ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                case"y":
                    return n || a ? "rok" : "rokom";
                case"yy":
                    return n || a ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
            }
        }

        var r = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), i = e.defineLocale("sk", {
            months: r,
            monthsShort: a,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                }, lastDay: "[včera o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return i
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = e + " ";
            switch (n) {
                case"s":
                    return t || r ? "nekaj sekund" : "nekaj sekundami";
                case"m":
                    return t ? "ena minuta" : "eno minuto";
                case"mm":
                    return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
                case"h":
                    return t ? "ena ura" : "eno uro";
                case"hh":
                    return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
                case"d":
                    return t || r ? "en dan" : "enim dnem";
                case"dd":
                    return a += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
                case"M":
                    return t || r ? "en mesec" : "enim mesecem";
                case"MM":
                    return a += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
                case"y":
                    return t || r ? "eno leto" : "enim letom";
                case"yy":
                    return a += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
            }
        }

        var n = e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[včeraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
                return "M" === e.charAt(0)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {
            words: {
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        }, n = e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                    return e[this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {
            words: {
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        }, n = e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                }, lastDay: "[јуче у] LT", lastWeek: function () {
                    var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                    return e[this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            ordinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function (e) {
                var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                return e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"}, n = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
        }, r = e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            ordinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
                return e + "வது"
            },
            preparse: function (e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {dow: 0, doy: 6}
        });
        return r
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            ordinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {dow: 0, doy: 6}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H นาฬิกา m นาที",
                LTS: "H นาฬิกา m นาที s วินาที",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ngayon sa] LT",
                nextDay: "[Bukas sa] LT",
                nextWeek: "dddd [sa] LT",
                lastDay: "[Kahapon sa] LT",
                lastWeek: "dddd [huling linggo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e) {
            var t = e;
            return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq"
        }

        function n(e) {
            var t = e;
            return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret"
        }

        function r(e, t, n, r) {
            var i = a(e);
            switch (n) {
                case"mm":
                    return i + " tup";
                case"hh":
                    return i + " rep";
                case"dd":
                    return i + " jaj";
                case"MM":
                    return i + " jar";
                case"yy":
                    return i + " DIS"
            }
        }

        function a(e) {
            var t = Math.floor(e % 1e3 / 100), n = Math.floor(e % 100 / 10), r = e % 10, a = "";
            return t > 0 && (a += i[t] + "vatlh"), n > 0 && (a += ("" !== a ? " " : "") + i[n] + "maH"), r > 0 && (a += ("" !== a ? " " : "") + i[r]), "" === a ? "pagh" : a
        }

        var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"), s = e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: t,
                past: n,
                s: "puS lup",
                m: "wa’ tup",
                mm: r,
                h: "wa’ rep",
                hh: r,
                d: "wa’ jaj",
                dd: r,
                M: "wa’ jar",
                MM: r,
                y: "wa’ DIS",
                yy: r
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return s
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        }, n = e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function (e) {
                if (0 === e)return e + "'ıncı";
                var n = e % 10, r = e % 100 - n, a = e >= 100 ? 100 : null;
                return e + (t[n] || t[r] || t[a])
            },
            week: {dow: 1, doy: 7}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t, n, r) {
            var a = {
                s: ["viensas secunds", "'iensas secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", "" + e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", "" + e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", "" + e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", "" + e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", "" + e + " ars"]
            };
            return r ? a[n][0] : t ? a[n][0] : a[n][1]
        }

        var n = e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        });
        return n
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {dow: 6, doy: 12}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {dow: 6, doy: 12}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }

        function n(e, n, r) {
            var a = {
                mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: n ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === r ? n ? "хвилина" : "хвилину" : "h" === r ? n ? "година" : "годину" : e + " " + t(a[r], +e)
        }

        function r(e, t) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }, r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
            return n[r][e.day()]
        }

        function a(e) {
            return function () {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }

        var i = e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: r,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: a("[Сьогодні "),
                nextDay: a("[Завтра "),
                lastDay: a("[Вчора "),
                nextWeek: a("[У] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return a("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return a("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: n,
                mm: n,
                h: "годину",
                hh: n,
                d: "день",
                dd: n,
                M: "місяць",
                MM: n,
                y: "рік",
                yy: n
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            ordinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        });
        return i
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {dow: 1, doy: 7}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
                return /^ch$/i.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm分",
                LTS: "Ah点m分s秒",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah点mm分",
                LLLL: "YYYY年MMMD日ddddAh点mm分",
                l: "YYYY-MM-DD",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah点mm分",
                llll: "YYYY年MMMD日ddddAh点mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: function () {
                    return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                }, nextDay: function () {
                    return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                }, lastDay: function () {
                    return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                }, nextWeek: function () {
                    var t, n;
                    return t = e().startOf("week"), n = this.diff(t, "days") >= 7 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                }, lastWeek: function () {
                    var t, n;
                    return t = e().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                }, sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {dow: 1, doy: 4}
        });
        return t
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(47))
    }(this, function (e) {
        "use strict";
        var t = e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm分",
                LTS: "Ah點m分s秒",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah點mm分",
                LLLL: "YYYY年MMMD日ddddAh點mm分",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah點mm分",
                llll: "YYYY年MMMD日ddddAh點mm分"
            },
            meridiemParse: /早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "1分鐘",
                mm: "%d分鐘",
                h: "1小時",
                hh: "%d小時",
                d: "1天",
                dd: "%d天",
                M: "1個月",
                MM: "%d個月",
                y: "1年",
                yy: "%d年"
            }
        });
        return t
    })
}, function (e, t) {
    "use strict";
    e.exports = {
        defaultUserAvatar: function (e) {
            return e || "http://p0.meituan.net/movie/7dd82a16316ab32c8359debdb04396ef2897.png"
        }, parseSeconds: function (e) {
            function t(e) {
                return (e < 10 ? "0" : "") + e
            }

            var n = e / 60;
            e %= 60;
            var r = n / 60;
            return n %= 60, [r, n, e].filter(function (e, t) {
                return e >= 1 || 0 !== t
            }).map(function (e) {
                return t(parseInt(e, 10))
            }).join(":")
        }
    }
}, function (e, t) {
    e.exports = function (e, t, n, r) {
        var a = n.root;
        n.root = function (e, t, n, i, s, o) {
            var u = e.getTemplate;
            e.getTemplate = function (e, t, a, i, s) {
                "function" == typeof t && (s = t = !1);
                var o = function (e) {
                    try {
                        return r[e]
                    } catch (t) {
                        if (n.get("_require"))return n.get("_require")(e);
                        console.warn('Could not load template "%s"', e)
                    }
                }, u = o(e);
                n.set("_require", o), t && u.compile(), s(null, u)
            }, a(e, t, n, i, s, function (t, n) {
                e.getTemplate = u, o(t, n)
            })
        };
        var i = {obj: n, type: "code"};
        return new e.Template(i, t)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
    "use strict";
    void 0 === window.console && (window.console = {
        log: function () {
        }, error: function () {
        }
    })
}, function (e, t, n) {
    (function (e) {
        "use strict";
        function t(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var r = n(31), a = t(r);
        n(191), n(192), n(193), n(194), n(196), n(198), e.$ = e.jQuery = n(32);
        var i = $(window), s = $(".header");
        (0, a["default"])(), $(".search-form").on("submit", function () {
            var e = null;
            analytics("event", {nm: "mge", val: {act: $(this).data("actform"), val: e}})
        }), $("input, textarea").placeholder(), $(".city-container").city(), $(".search, .kw").searchSuggest(), $("body").on("click", "[data-query]", function () {
            var e = this.href, t = "?";
            e.indexOf("?") >= 0 && (t = "&"), this.getAttribute("data-query") && (this.href += t + this.getAttribute("data-query")), this.removeAttribute("data-query")
        }), $("body").on("click", "a[target=_blank]", function (e) {
            var t = this;
            e.preventDefault(), $('<iframe style="display:none;"></iframe>').appendTo("body").each(function (e, n) {
                n.contentWindow.open($(t).attr("href"))
            }).remove()
        });
        var o = function () {
            s.css("left", "-" + i.scrollLeft() + "px")
        };
        document.body.clientWidth < 1200 && i.scroll(o), $(window).resize(function () {
            document.body.clientWidth < 1200 ? i.on("scroll", o) : i.off("scroll", o)
        }), n(199)
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    var i = n(32), s = r(i), o = n(30), u = r(o), d = n(33), l = function () {
        function e(t) {
            a(this, e), this.$elem = t, this.$list = t.find(".city-list"), this.$body = (0, s["default"])("body"), this.isLoaded = !1, this.isLoading = !1, this.closeTimer = null, this.bindEvents(), this.fetch()
        }

        return e.prototype.bindEvents = function () {
            var e = this;
            this.$elem.on("mouseenter", function (t) {
                clearTimeout(e.closeTimer), e.open()
            }).on("mouseleave", function (t) {
                e.closeTimer = setTimeout(function () {
                    e.close()
                }, 200)
            }).on("click", ".js-city-name", function (t) {
                t.stopPropagation(), e.selectCity((0, s["default"])(t.target).data("ci"))
            }).on("click", ".js-geo-city", function (t) {
                t.stopPropagation(), e.clearSelectedCity()
            }).on("mousewheel", ".city-list", function (t) {
                e.$list.scrollTop(e.$list.scrollTop() - t.originalEvent.wheelDelta)
            })
        }, e.prototype.fetch = function () {
            var e = this;
            this.isLoading = !0;
            var t = JSON.parse(localStorage.getItem("cities")), n = function (t) {
                var n = "";
                t.letterMap && !function () {
                    var r = t.letterMap;
                    e.isLoaded = !0;
                    var a = Object.keys(r).map(function (e, t) {
                        return "\n              <li>\n                <span>" + e + "</span>\n                <div>\n                  " + r[e].map(function (e) {
                                return '<a class="js-city-name" data-ci="' + e.id + '" data-val="{ choosecityid:' + e.id + ' }"  data-act="cityChange-click">' + e.nm + "</a>"
                            }).join("") + "\n                </div>\n              </li>\n            "
                    }).join("");
                    n = "<ul>" + a + "</ul>"
                }(), e.$list.append(n), e.isLoading = !1
            };
            return t ? jQuery.Deferred().resolve(n(t)) : s["default"].getJSON("/ajax/cities").then(function (e) {
                    n(e), localStorage.setItem("cities", JSON.stringify(e))
                })
        }, e.prototype.toggle = function () {
            this.$elem.hasClass("active") ? this.close() : this.open()
        }, e.prototype.open = function () {
            var e = this;
            this.isLoading || (this.isLoaded ? (this.$elem.addClass("active"), (0, d.disableScroll)()) : this.fetch().then(function () {
                    e.open()
                }))
        }, e.prototype.close = function () {
            (0, d.enableScroll)(), this.$elem.removeClass("active")
        }, e.prototype.selectCity = function (e) {
            this.clearSelectedCity();
            var t = location.hostname.split(".");
            t.length >= 2 && isNaN(t[t.length - 1]) ? u["default"].set("ci", e, {domain: t.slice(-2).join(".")}) : u["default"].set("ci", e), location.reload()
        }, e.prototype.clearSelectedCity = function () {
            u["default"].removeFromAllDomain("ci"), location.reload()
        }, e
    }();
    s["default"].fn.city = function () {
        (0, s["default"])(this).data("city", new l((0, s["default"])(this)))
    }
}, function (e, t, n) {
    var r, a, i;
    /*!
     * jQuery Placeholder Plugin v2.3.1
     * https://github.com/mathiasbynens/jquery-placeholder
     *
     * Copyright 2011, 2015 Mathias Bynens
     * Released under the MIT license
     */
    !function (s) {
        a = [n(32)], r = s, i = "function" == typeof r ? r.apply(t, a) : r, !(void 0 !== i && (e.exports = i))
    }(function (e) {
        function t(t) {
            var n = {}, r = /^jQuery\d+$/;
            return e.each(t.attributes, function (e, t) {
                t.specified && !r.test(t.name) && (n[t.name] = t.value)
            }), n
        }

        function n(t, n) {
            var r = this, i = e(this);
            if (r.value === i.attr(o ? "placeholder-x" : "placeholder") && i.hasClass(m.customClass))if (r.value = "", i.removeClass(m.customClass), i.data("placeholder-password")) {
                if (i = i.hide().nextAll('input[type="password"]:first').show().attr("id", i.removeAttr("id").data("placeholder-id")), t === !0)return i[0].value = n, n;
                i.focus()
            } else r == a() && r.select()
        }

        function r(r) {
            var a, i = this, s = e(this), u = i.id;
            if (!r || "blur" !== r.type || !s.hasClass(m.customClass))if ("" === i.value) {
                if ("password" === i.type) {
                    if (!s.data("placeholder-textinput")) {
                        try {
                            a = s.clone().prop({type: "text"})
                        } catch (d) {
                            a = e("<input>").attr(e.extend(t(this), {type: "text"}))
                        }
                        a.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": s,
                            "placeholder-id": u
                        }).bind("focus.placeholder", n), s.data({
                            "placeholder-textinput": a,
                            "placeholder-id": u
                        }).before(a)
                    }
                    i.value = "", s = s.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s.data("placeholder-id")).show()
                } else {
                    var l = s.data("placeholder-password");
                    l && (l[0].value = "", s.attr("id", s.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                }
                s.addClass(m.customClass), s[0].value = s.attr(o ? "placeholder-x" : "placeholder")
            } else s.removeClass(m.customClass)
        }

        function a() {
            try {
                return document.activeElement
            } catch (e) {
            }
        }

        var i, s, o = !1, u = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), d = "placeholder" in document.createElement("input") && !u && !o, l = "placeholder" in document.createElement("textarea") && !u && !o, c = e.valHooks, _ = e.propHooks, m = {};
        d && l ? (s = e.fn.placeholder = function () {
                return this
            }, s.input = !0, s.textarea = !0) : (s = e.fn.placeholder = function (t) {
                var a = {customClass: "placeholder"};
                return m = e.extend({}, a, t), this.filter((d ? "textarea" : ":input") + "[" + (o ? "placeholder-x" : "placeholder") + "]").not("." + m.customClass).not(":radio, :checkbox, [type=hidden]").bind({
                    "focus.placeholder": n,
                    "blur.placeholder": r
                }).data("placeholder-enabled", !0).trigger("blur.placeholder")
            }, s.input = d, s.textarea = l, i = {
                get: function (t) {
                    var n = e(t), r = n.data("placeholder-password");
                    return r ? r[0].value : n.data("placeholder-enabled") && n.hasClass(m.customClass) ? "" : t.value
                }, set: function (t, i) {
                    var s, o, u = e(t);
                    return "" !== i && (s = u.data("placeholder-textinput"), o = u.data("placeholder-password"), s ? (n.call(s[0], !0, i) || (t.value = i), s[0].value = i) : o && (n.call(t, !0, i) || (o[0].value = i), t.value = i)), u.data("placeholder-enabled") ? ("" === i ? (t.value = i, t != a() && r.call(t)) : (u.hasClass(m.customClass) && n.call(t), t.value = i), u) : (t.value = i, u)
                }
            }, d || (c.input = i, _.value = i), l || (c.textarea = i, _.value = i), e(function () {
                e(document).delegate("form", "submit.placeholder", function () {
                    var t = e("." + m.customClass, this).each(function () {
                        n.call(this, !0, "")
                    });
                    setTimeout(function () {
                        t.each(r)
                    }, 10)
                })
            }), e(window).bind("beforeunload.placeholder", function () {
                var t = !0;
                try {
                    "javascript:void(0)" === document.activeElement.toString() && (t = !1)
                } catch (n) {
                }
                t && e("." + m.customClass).each(function () {
                    this.value = ""
                })
            }))
    })
}, function (e, t, n) {
    "use strict";
    var r = n(32);
    r(function () {
        var e = r(".footer"), t = function () {
            var t = r("body").height();
            "fixed" === e.css("position") && (t += e.outerHeight(!0));
            var n = t < r(window).height();
            e.css({position: n ? "fixed" : "", bottom: n ? 0 : "", width: n ? "100%" : "", visibility: "visible"})
        };
        t(), r(window).load(t).resize(t)
    })
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    var i = n(32), s = r(i), o = n(195), u = function () {
        function e(t) {
            a(this, e);
            for (var n = t.length, r = 0; r < n; r++)this.bindEvents((0, s["default"])(t[r]))
        }

        return e.prototype.bindEvents = function (e) {
            var t = this, n = this.request(e), r = [37, 38, 39, 40];
            e.on("keyup", function (e) {
                t.include(r, e.keyCode) || n()
            }).on("blur", function () {
                setTimeout(function () {
                    e.siblings(".suggest-container").hide()
                }, 150)
            }).on("focus", function () {
                var t = e.siblings(".suggest-container");
                t.length ? t.show() : n()
            })
        }, e.prototype.request = function (e) {
            var t = this, n = void 0, r = 200, a = void 0;
            return function () {
                var i = a = Math.random();
                n && clearTimeout(n), n = setTimeout(function () {
                    var n = e.val().trim();
                    n ? s["default"].get("/ajax/suggest", {kw: n}).then(function (n) {
                            i === a && t.destroy().render(n, e)
                        }) : t.destroy()
                }, r)
            }
        }, e.prototype.render = function (e, t) {
            3 !== e.type && t.after(o.render({res: e}))
        }, e.prototype.destroy = function () {
            return (0, s["default"])(".suggest-container").remove(), this
        }, e.prototype.include = function (e, t) {
            for (var n = e.length, r = 0; r < n; r++)if (e[r] === t)return !0;
            return !1
        }, e
    }();
    s["default"].fn.searchSuggest = function () {
        (0, s["default"])(this).data("searchSuggest", new u((0, s["default"])(this)))
    }
}, function (e, t, n) {
    var r, a = n(45);
    r = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], {autoescape: !0});
    var i = (n(46)(r), a.webpackDependencies || (a.webpackDependencies = {})), s = n(151);
    !function () {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["client/pages/_common/search-suggest.html"] = function () {
            function e(e, t, n, r, a) {
                var i = null, s = null, o = "";
                try {
                    var u, d = null;
                    u = {
                        movies: "影视剧",
                        celebritys: "影人",
                        cinemas: "影院"
                    }, n.set("typeMap", u, !0), n.topLevel && t.setVariable("typeMap", u), n.topLevel && t.addExport("typeMap", u), o += "\n";
                    var l;
                    l = 4, n.set("limit", l, !0), n.topLevel && t.setVariable("limit", l), n.topLevel && t.addExport("limit", l), o += "\n\n";
                    var c = r.makeMacro(["data", "type"], [], function (a, i, s) {
                        n = n.push(!0), s = s || {}, s.hasOwnProperty("caller") && n.set("caller", s.caller), n.set("data", a), n.set("type", i);
                        var o = "";
                        o += '\n<div class="suggest-body">\n  <span class="suggest-name">', o += r.suppressValue(r.memberLookup(r.contextOrFrameLookup(t, n, "typeMap"), i), e.opts.autoescape), o += '</span>\n  <div class="suggest-detail-list">\n    ', n = n.push();
                        var u = a;
                        if (u)for (var d = u.length, l = 0; l < u.length; l++) {
                            var c = u[l];
                            n.set("item", c), n.set("loop.index", l + 1), n.set("loop.index0", l), n.set("loop.revindex", d - l), n.set("loop.revindex0", d - l - 1), n.set("loop.first", 0 === l), n.set("loop.last", l === d - 1), n.set("loop.length", d), o += "\n      ", r.memberLookup(r.contextOrFrameLookup(t, n, "loop"), "index") < r.contextOrFrameLookup(t, n, "limit") && (o += '\n        <a class="suggest-detail"\n           href="/films/', o += r.suppressValue(r.memberLookup(c, "id"), e.opts.autoescape), o += '"\n           target="_blank"\n           data-act="movies-click"\n           data-val="{movieId:', o += r.suppressValue(r.memberLookup(c, "id"), e.opts.autoescape), o += '}"\n        >\n          <img class="detail-img" src="', o += r.suppressValue(e.getFilter("venus").call(t, e.getFilter("defaultAvatar").call(t, r.memberLookup(c, "img")), 36, 50), e.opts.autoescape), o += '">\n          <span class="detail-name">', o += r.suppressValue(r.memberLookup(c, "nm"), e.opts.autoescape), o += "</span>\n        </a>\n      "), o += "\n    "
                        }
                        return n = n.pop(), o += "\n  </div>\n</div>\n", n = n.pop(), new r.SafeString(o)
                    });
                    t.addExport("movies"), t.setVariable("movies", c), o += "\n\n";
                    var _ = r.makeMacro(["data", "type"], [], function (a, i, s) {
                        n = n.push(!0), s = s || {}, s.hasOwnProperty("caller") && n.set("caller", s.caller), n.set("data", a), n.set("type", i);
                        var o = "";
                        o += '\n<div class="suggest-body">\n  <span class="suggest-name">', o += r.suppressValue(r.memberLookup(r.contextOrFrameLookup(t, n, "typeMap"), i), e.opts.autoescape), o += '</span>\n  <div class="suggest-detail-list">\n    ', n = n.push();
                        var u = a;
                        if (u)for (var d = u.length, l = 0; l < u.length; l++) {
                            var c = u[l];
                            n.set("item", c), n.set("loop.index", l + 1), n.set("loop.index0", l), n.set("loop.revindex", d - l), n.set("loop.revindex0", d - l - 1), n.set("loop.first", 0 === l), n.set("loop.last", l === d - 1), n.set("loop.length", d), o += "\n      ", r.memberLookup(r.contextOrFrameLookup(t, n, "loop"), "index") < r.contextOrFrameLookup(t, n, "limit") && (o += '\n        <a class="suggest-detail"\n           href="/films/celebrity/', o += r.suppressValue(r.memberLookup(c, "id"), e.opts.autoescape), o += '"\n           target="_blank"\n           data-act="celebrity-click"\n           data-val="{celebrityId:', o += r.suppressValue(r.memberLookup(c, "id"), e.opts.autoescape), o += '}"\n        >\n          <img class="detail-img" src="', o += r.suppressValue(e.getFilter("venus").call(t, e.getFilter("defaultAvatar").call(t, r.memberLookup(c, "img")), 36, 50), e.opts.autoescape), o += '">\n          <span class="detail-name">', o += r.suppressValue(r.memberLookup(c, "nm"), e.opts.autoescape), o += "</span>\n        </a>\n      "), o += "\n    "
                        }
                        return n = n.pop(), o += "\n  </div>\n</div>\n", n = n.pop(), new r.SafeString(o)
                    });
                    t.addExport("celebrities"), t.setVariable("celebrities", _), o += "\n\n";
                    var m = r.makeMacro(["data", "type"], [], function (a, i, s) {
                        n = n.push(!0), s = s || {}, s.hasOwnProperty("caller") && n.set("caller", s.caller), n.set("data", a), n.set("type", i);
                        var o = "";
                        o += '\n<div class="suggest-body">\n  <span class="suggest-name suggest-name-small">', o += r.suppressValue(r.memberLookup(r.contextOrFrameLookup(t, n, "typeMap"), i), e.opts.autoescape), o += '</span>\n  <div class="suggest-detail-list">\n    ', n = n.push();
                        var u = a;
                        if (u)for (var d = u.length, l = 0; l < u.length; l++) {
                            var c = u[l];
                            n.set("item", c), n.set("loop.index", l + 1), n.set("loop.index0", l), n.set("loop.revindex", d - l), n.set("loop.revindex0", d - l - 1), n.set("loop.first", 0 === l), n.set("loop.last", l === d - 1), n.set("loop.length", d), o += "\n      ", r.memberLookup(r.contextOrFrameLookup(t, n, "loop"), "index") < r.contextOrFrameLookup(t, n, "limit") && (o += '\n        <a class="suggest-detail"\n           href="http://www.meituan.com/shop/', o += r.suppressValue(r.memberLookup(c, "poiId"), e.opts.autoescape), o += '?mtt=1.movie%2Fmywww.0.0.126595"\n           target="_blank"\n           data-act="cinema-click"\n           data-val="{cinemaId:', o += r.suppressValue(r.memberLookup(c, "id"), e.opts.autoescape), o += '}"\n        >\n          <span class="detail-name detail-name-small">', o += r.suppressValue(r.memberLookup(c, "nm"), e.opts.autoescape), o += "</span>\n        </a>\n      "), o += "\n    "
                        }
                        return n = n.pop(), o += "\n  </div>\n</div>\n", n = n.pop(), new r.SafeString(o)
                    });
                    t.addExport("cinemas"), t.setVariable("cinemas", m), o += '\n\n<div class="suggest-container">\n  ', n = n.push();
                    var h = r.contextOrFrameLookup(t, n, "res");
                    if (h) {
                        var f;
                        if (r.isArray(h)) {
                            var p = h.length;
                            for (f = 0; f < h.length; f++) {
                                var y = h[f][0];
                                n.set("key", h[f][0]);
                                var M = h[f][1];
                                n.set("value", h[f][1]), n.set("loop.index", f + 1), n.set("loop.index0", f), n.set("loop.revindex", p - f), n.set("loop.revindex0", p - f - 1), n.set("loop.first", 0 === f), n.set("loop.last", f === p - 1), n.set("loop.length", p), o += "\n    ", "movies" == y ? (o += "\n      ", o += r.suppressValue((i = 68, s = 13, r.callWrap(c, "movies", t, [r.memberLookup(M, "list"), y])), e.opts.autoescape), o += "\n    ") : "celebritys" == y ? (o += "\n      ", o += r.suppressValue((i = 70, s = 18, r.callWrap(_, "celebrities", t, [r.memberLookup(M, "list"), y])), e.opts.autoescape), o += "\n    ") : "cinemas" == y && (o += "\n      ", o += r.suppressValue((i = 72, s = 14, r.callWrap(m, "cinemas", t, [r.memberLookup(M, "list"), y])), e.opts.autoescape), o += "\n    "), o += "\n  "
                            }
                        } else {
                            f = -1;
                            var p = r.keys(h).length;
                            for (var L in h) {
                                f++;
                                var g = h[L];
                                n.set("key", L), n.set("value", g), n.set("loop.index", f + 1), n.set("loop.index0", f), n.set("loop.revindex", p - f), n.set("loop.revindex0", p - f - 1), n.set("loop.first", 0 === f), n.set("loop.last", f === p - 1), n.set("loop.length", p), o += "\n    ", "movies" == L ? (o += "\n      ", o += r.suppressValue((i = 68, s = 13, r.callWrap(c, "movies", t, [r.memberLookup(g, "list"), L])), e.opts.autoescape), o += "\n    ") : "celebritys" == L ? (o += "\n      ", o += r.suppressValue((i = 70, s = 18, r.callWrap(_, "celebrities", t, [r.memberLookup(g, "list"), L])), e.opts.autoescape), o += "\n    ") : "cinemas" == L && (o += "\n      ", o += r.suppressValue((i = 72, s = 14, r.callWrap(m, "cinemas", t, [r.memberLookup(g, "list"), L])), e.opts.autoescape), o += "\n    "), o += "\n  "
                            }
                        }
                    }
                    n = n.pop(), o += "\n</div>", d ? d.rootRenderFunc(e, t, n, r, a) : a(null, o)
                } catch (v) {
                    a(r.handleError(v, i, s))
                }
            }

            return {root: e}
        }()
    }(), e.exports = s(a, r, a.nunjucksPrecompiled["client/pages/_common/search-suggest.html"], i)
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var a = n(29), i = r(a), s = n(197), o = r(s), u = n(32), d = (0, o["default"])("page.image.");
    u(function () {
        var e = u(document), t = u(window);
        t.on("scroll loadImg resize", function () {
            var n = 300, r = 300, a = void 0;
            return function () {
                clearTimeout(a), a = setTimeout(function () {
                    var n = e.scrollTop(), a = n + t.height();
                    (0, i["default"])(function (e) {
                        u("[data-src]").each(function () {
                            var t = u(this);
                            !t.attr("src") && t.is(":visible") && n - t.offset().top - t.height() < r && t.offset().top - a < r && !function () {
                                var n = d();
                                t.on("load", function () {
                                    n.done()
                                }), t.on("error", function () {
                                    n.error()
                                }), t.attr("src", e(t.data("src"))), t.removeAttr("data-src")
                            }()
                        })
                    })
                }, n)
            }
        }()), t.trigger("loadImg")
    })
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function a(e) {
        var t = 0 | localStorage.getItem(e);
        localStorage.setItem(e, ++t)
    }

    function i(e, t, n) {
        s(e + t, n), n > 3e3 && s(e + "timeout", n)
    }

    function s(e, t) {
        var n = localStorage.getItem(e);
        n = n ? n + "," + t : t, localStorage.setItem(e, n)
    }

    function o(e) {
        function t(e) {
            var t = localStorage.getItem(e);
            t && (t = t.split(","), t.forEach(function (t) {
                mta("timing", e, t)
            }), localStorage.removeItem(e))
        }

        function n(e) {
            var t = 0 | localStorage.getItem(e);
            parseInt(t) > 0 && mta("count", e, t), localStorage.removeItem(e)
        }

        return u(function () {
            n(e + "imgCount"), t(e + "done"), t(e + "error"), t(e + "unload"), t(e + "timeout")
        }), d = [], u(window).on("beforeunload", function () {
            for (var e = 0; e < d.length; e++)d[e].unload()
        }), function () {
            var t = new l(e);
            return d.push(t), t
        }
    }

    t.__esModule = !0, t["default"] = o;
    var u = n(32), d = void 0, l = function () {
        function e(t) {
            r(this, e), this.metricPrefix = t, this.start = new Date, this.status = "", a(this.metricPrefix + "imgCount")
        }

        return e.prototype.done = function () {
            this.status || (this.status = "done", i(this.metricPrefix, "done", new Date - this.start))
        }, e.prototype.error = function () {
            this.status || (this.status = "error", i(this.metricPrefix, "error", new Date - this.start))
        }, e.prototype.unload = function () {
            this.status || (this.status = "unload", i(this.metricPrefix, "unload", new Date - this.start))
        }, e
    }()
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        e = (0, s["default"])(e);
        var t = e.add(e.parents("[data-val]")).map(function (e, t) {
            return o((0, s["default"])(t).data("val"))
        }).get().concat((0, s["default"])("[data-state-val]").map(function (e, t) {
            return o((0, s["default"])(t).data("state-val"))
        }).get()).concat(window.val || {}).reduceRight(function (e, t) {
            return s["default"].extend(e, t)
        });
        analytics("event", {nm: "mge", val: {act: e.data("act"), val: t}})
    }

    t.__esModule = !0, t["default"] = a;
    var i = n(32), s = r(i), o = function (e) {
        if ("string" == typeof e && "{" === e[0])try {
            e = new Function("return (" + e + ")")()
        } catch (t) {
            Raven.captureException(t)
        }
        return e || {}
    };
    (0, s["default"])("body").on("mousedown", "[data-act]", function () {
        a((0, s["default"])(this))
    })
}, function (e, t) {
}, , , , , , function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA70lEQVQ4y6XPvUoDURDF8d/GVVD8KlRICm23Tq+diC8haGchdtr5AtZWPoK+hXVK4VoJ2ijigopiMCQ2N7CGXUnYU907c85/ZhIlCiHANE5wig4OcJ9l2R9vQ7U2sI8FbGK7zPQfoI1WfE9hbSxAXH8GO5iN5QHeJtmgjd3C/wuPZca0ZPocDtEstH7isFYIYTi0hzyJocVYfMceLjBfAPSR4zv+E3ziMsVyDMAZjkfCw1NXSi44SrGErVhYrTBWqdmYwFym17qAh7qAuzqALjp1AM+4GQUMxgz3cI3bFB8IsZHjBesVwT6ecIVzdH8BMa00dXqIgwUAAAAASUVORK5CYII="
}]));