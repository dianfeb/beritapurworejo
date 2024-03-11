/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        o = n.slice,
        s = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        r = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        u = d.toString,
        p = u.call(Object),
        f = {},
        h = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function(e) {
            return null != e && e === e.window
        },
        m = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var i, o, s = (n = n || m).createElement("script");
        if (s.text = e, t)
            for (i in v)(o = t[i] || t.getAttribute && t.getAttribute(i)) && s.setAttribute(i, o);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var w = "3.6.0",
        x = function(e, t) {
            return new x.fn.init(e, t)
        };

    function _(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: n.sort,
        splice: n.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, i, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || h(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && r !== i && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (n = r[t], s = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}, o = !1, r[t] = x.extend(c, s, i)) : void 0 !== i && (r[t] = i));
        return r
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || u.call(n) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (_(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (_(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : r.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, s = e.length, r = !n; o < s; o++) !t(e[o], o) !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                a = [];
            if (_(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
            return s(a)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var k = function(e) {
        var t, n, i, o, s, r, a, l, c, d, u, p, f, h, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            _ = 0,
            k = 0,
            T = le(),
            C = le(),
            S = le(),
            E = le(),
            A = function(e, t) {
                return e === t && (u = !0), 0
            },
            O = {}.hasOwnProperty,
            $ = [],
            j = $.pop,
            L = $.push,
            D = $.push,
            N = $.slice,
            P = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
            q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            R = new RegExp("^" + M + "*," + M + "*"),
            B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            Q = new RegExp(M + "|>"),
            U = new RegExp(q),
            X = new RegExp("^" + H + "$"),
            Y = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = function() {
                p()
            },
            re = we((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            D.apply($ = N.call(x.childNodes), x.childNodes), $[x.childNodes.length].nodeType
        } catch (t) {
            D = {
                apply: $.length ? function(e, t) {
                    L.apply(e, N.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, o) {
            var s, a, c, d, u, h, v, y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!o && (p(t), t = t || f, g)) {
                if (11 !== x && (u = J.exec(e)))
                    if (s = u[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(s))) return i;
                            if (c.id === s) return i.push(c), i
                        } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s) return i.push(c), i
                    } else {
                        if (u[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(s)), i
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === x && (Q.test(e) || B.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, oe) : t.setAttribute("id", d = w)), a = (h = r(e)).length; a--;) h[a] = (d ? "#" + d : ":scope") + " " + be(h[a]);
                        v = h.join(",")
                    }
                    try {
                        return D.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        d === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, i, o)
        }

        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function de(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function pe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce((function(t) {
                return t = +t, ce((function(n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, s = ae.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !V.test(t || n && n.nodeName || "HTML")
            }, p = ae.setDocument = function(e) {
                var t, o, r = e ? e.ownerDocument || e : x;
                return r != f && 9 === r.nodeType && r.documentElement && (h = (f = r).documentElement, g = !s(f), x != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", se, !1) : o.attachEvent && o.attachEvent("onunload", se)), n.scope = de((function(e) {
                    return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = de((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = de((function(e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = de((function(e) {
                    return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                })), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, o, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (o = t.getElementsByName(e), i = 0; s = o[i++];)
                                if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (de((function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                })), de((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de((function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(h.compareDocumentPosition), b = t || Z.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : d ? P(d, e) - P(d, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        r = [e],
                        a = [t];
                    if (!o || !s) return e == f ? -1 : t == f ? 1 : o ? -1 : s ? 1 : d ? P(d, e) - P(d, t) : 0;
                    if (o === s) return pe(e, t);
                    for (n = e; n = n.parentNode;) r.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; r[i] === a[i];) i++;
                    return i ? pe(r[i], a[i]) : r[i] == x ? -1 : a[i] == x ? 1 : 0
                }), f
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (p(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    E(t, !0)
                }
                return 0 < ae(t, f, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != f && p(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) != f && p(e);
                var o = i.attrHandle[t.toLowerCase()],
                    s = o && O.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== s ? s : n.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, oe)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, i = [],
                    o = 0,
                    s = 0;
                if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(A), u) {
                    for (; t = e[s++];) t === e[s] && (o = i.push(s));
                    for (; o--;) e.splice(i[o], 1)
                }
                return d = null, e
            }, o = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && T(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(F, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var s = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, d, u, p, f, h, g = s !== r ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (b = (f = (c = (d = (u = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            d[e] = [_, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b)
                                    for (;
                                        (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [_, b]), p !== t)););
                                return (b -= o) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : 1 < o.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                            for (var i, s = o(e, t), r = s.length; r--;) e[i = P(e, s[r])] = !(n[i] = s[r])
                        })) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(W, "$1"));
                        return i[w] ? ce((function(e, t, n, o) {
                            for (var s, r = i(e, null, o, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                        })) : function(e, o, s) {
                            return t[0] = e, i(t, null, s, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: ce((function(e) {
                        return function(t) {
                            return 0 < ae(e, t).length
                        }
                    })),
                    contains: ce((function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || o(t)).indexOf(e)
                            }
                    })),
                    lang: ce((function(e) {
                        return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me((function() {
                        return [0]
                    })),
                    last: me((function(e, t) {
                        return [t - 1]
                    })),
                    eq: me((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: me((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: me((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: me((function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    })),
                    gt: me((function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = he(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function we(e, t, n) {
            var i = t.dir,
                o = t.next,
                s = o || i,
                r = n && "parentNode" === s,
                a = k++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o);
                return !1
            } : function(t, n, l) {
                var c, d, u, p = [_, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r)
                            if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = d[s]) && c[0] === _ && c[1] === a) return p[2] = c[2];
                                if ((d[s] = p)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function _e(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, o) || (r.push(s), c && t.push(a)));
            return r
        }

        function ke(e, t, n, i, o, s) {
            return i && !i[w] && (i = ke(i)), o && !o[w] && (o = ke(o, s)), ce((function(s, r, a, l) {
                var c, d, u, p = [],
                    f = [],
                    h = r.length,
                    g = s || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !s && t ? g : _e(g, p, e, a, l),
                    v = n ? o || (s ? e : h || i) ? [] : r : m;
                if (n && n(m, v, a, l), i)
                    for (c = _e(v, f), i(c, [], a, l), d = c.length; d--;)(u = c[d]) && (v[f[d]] = !(m[f[d]] = u));
                if (s) {
                    if (o || e) {
                        if (o) {
                            for (c = [], d = v.length; d--;)(u = v[d]) && c.push(m[d] = u);
                            o(null, v = [], c, l)
                        }
                        for (d = v.length; d--;)(u = v[d]) && -1 < (c = o ? P(s, u) : p[d]) && (s[c] = !(r[c] = u))
                    }
                } else v = _e(v === r ? v.splice(h, v.length) : v), o ? o(null, r, v, l) : D.apply(r, v)
            }))
        }

        function Te(e) {
            for (var t, n, o, s = e.length, r = i.relative[e[0].type], a = r || i.relative[" "], l = r ? 1 : 0, d = we((function(e) {
                    return e === t
                }), a, !0), u = we((function(e) {
                    return -1 < P(t, e)
                }), a, !0), p = [function(e, n, i) {
                    var o = !r && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                    return t = null, o
                }]; l < s; l++)
                if (n = i.relative[e[l].type]) p = [we(xe(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < s && !i.relative[e[o].type]; o++);
                        return ke(1 < l && xe(p), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < o && Te(e.slice(l, o)), o < s && Te(e = e.slice(o)), o < s && be(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, r = ae.tokenize = function(e, t) {
            var n, o, s, r, a, l, c, d = C[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (r in n && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(W, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = Y[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
        }, a = ae.compile = function(e, t) {
            var n, o, s, a, l, d, u = [],
                h = [],
                m = S[e + " "];
            if (!m) {
                for (t || (t = r(e)), n = t.length; n--;)(m = Te(t[n]))[w] ? u.push(m) : h.push(m);
                (m = S(e, (o = h, a = 0 < (s = u).length, l = 0 < o.length, d = function(e, t, n, r, d) {
                    var u, h, m, v = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        x = c,
                        k = e || l && i.find.TAG("*", d),
                        T = _ += null == x ? 1 : Math.random() || .1,
                        C = k.length;
                    for (d && (c = t == f || t || d); y !== C && null != (u = k[y]); y++) {
                        if (l && u) {
                            for (h = 0, t || u.ownerDocument == f || (p(u), n = !g); m = o[h++];)
                                if (m(u, t || f, n)) {
                                    r.push(u);
                                    break
                                }
                            d && (_ = T)
                        }
                        a && ((u = !m && u) && v--, e && b.push(u))
                    }
                    if (v += y, a && y !== v) {
                        for (h = 0; m = s[h++];) m(b, w, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || w[y] || (w[y] = j.call(r));
                            w = _e(w)
                        }
                        D.apply(r, w), d && !e && 0 < w.length && 1 < v + s.length && ae.uniqueSort(r)
                    }
                    return d && (_ = T, c = x), b
                }, a ? ce(d) : d))).selector = e
            }
            return m
        }, l = ae.select = function(e, t, n, o) {
            var s, l, c, d, u, p = "function" == typeof e && e,
                f = !o && r(e = p.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (s = Y.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s], !i.relative[d = c.type]);)
                    if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(s, 1), !(e = o.length && be(l))) return D.apply(n, o), n;
                        break
                    }
            }
            return (p || a(e, f))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = de((function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        })), de((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ue("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && de((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ue("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), de((function(e) {
            return null == e.getAttribute("disabled")
        })) || ue(I, (function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), ae
    }(e);
    x.find = k, x.expr = k.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = k.uniqueSort, x.text = k.getText, x.isXMLDoc = k.isXML, x.contains = k.contains, x.escapeSelector = k.escape;
    var T = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && x(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        C = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = x.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, t, n) {
        return h(t) ? x.grep(e, (function(e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? x.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? x.grep(e, (function(e) {
            return -1 < a.call(t, e) !== n
        })) : x.filter(t, e, n)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, x.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
                for (t = 0; t < i; t++)
                    if (x.contains(o[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
            return 1 < i ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && S.test(e) ? x(e) : e || [], !1).length
        }
    });
    var $, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || $, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(i[1]) && x.isPlainObject(t))
                    for (i in t) h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = m.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, $ = x(m);
    var L = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function N(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                s = [],
                r = "string" != typeof e && x(e);
            if (!S.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(1 < s.length ? x.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(x(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return N(e, "nextSibling")
        },
        prev: function(e) {
            return N(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, (function(e, t) {
        x.fn[e] = function(n, i) {
            var o = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), 1 < this.length && (D[e] || x.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o)
        }
    }));
    var P = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function H(e, t, n, i) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, x.each(t.match(P) || [], (function(e, t) {
            n[t] = !0
        })), n) : x.extend({}, e);
        var i, o, s, r, a = [],
            l = [],
            c = -1,
            d = function() {
                for (r = r || e.once, s = i = !0; l.length; c = -1)
                    for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && e.stopOnFalse && (c = a.length, o = !1);
                e.memory || (o = !1), i = !1, r && (a = o ? [] : "")
            },
            u = {
                add: function() {
                    return a && (o && !i && (c = a.length - 1, l.push(o)), function t(n) {
                        x.each(n, (function(n, i) {
                            h(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        }))
                    }(arguments), o && !i && d()), this
                },
                remove: function() {
                    return x.each(arguments, (function(e, t) {
                        for (var n; - 1 < (n = x.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    })), this
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = o = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], o || i || (a = o = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return u
    }, x.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred((function(t) {
                            x.each(n, (function(n, i) {
                                var o = h(e[i[4]]) && e[i[4]];
                                s[i[1]]((function() {
                                    var e = o && o.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, i, o) {
                        var s = 0;

                        function r(t, n, i, o) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, h(c) ? o ? c.call(e, r(s, n, I, o), r(s, n, M, o)) : (s++, c.call(e, r(s, n, I, o), r(s, n, M, o), r(s, n, I, n.notifyWith))) : (i !== I && (a = void 0, l = [e]), (o || n.resolveWith)(a, l))
                                        }
                                    },
                                    d = o ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, d.stackTrace), s <= t + 1 && (i !== M && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        return x.Deferred((function(e) {
                            n[0][3].add(r(0, e, h(o) ? o : I, e.notifyWith)), n[1][3].add(r(0, e, h(t) ? t : I)), n[2][3].add(r(0, e, h(i) ? i : M))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, o) : o
                    }
                },
                s = {};
            return x.each(n, (function(e, t) {
                var r = t[2],
                    a = t[5];
                o[t[1]] = r.add, a && r.add((function() {
                    i = a
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), r.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = r.fireWith
            })), o.promise(s), t && t.call(s, s), s
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                s = o.call(arguments),
                r = x.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, s[e] = 1 < arguments.length ? o.call(arguments) : n, --t || r.resolveWith(i, s)
                    }
                };
            if (t <= 1 && (H(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || h(s[n] && s[n].then))) return r.then();
            for (; n--;) H(s[n], a(n), r.reject);
            return r.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var q = x.Deferred();

    function F() {
        m.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), x.ready()
    }
    x.fn.ready = function(e) {
        return q.then(e).catch((function(e) {
            x.readyException(e)
        })), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || q.resolveWith(m, [x])
        }
    }), x.ready.then = q.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(x.ready) : (m.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var W = function(e, t, n, i, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (a in o = !0, n) W(e, t, a, n[a], !0, s, r);
            else if (void 0 !== i && (o = !0, h(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(x(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : s
        },
        R = /^-ms-/,
        B = /-([a-z])/g;

    function Q(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(R, "ms-").replace(B, Q)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = x.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[U(t)] = n;
            else
                for (i in t) o[U(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(P) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var V = new Y,
        K = new Y,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function J(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return K.hasData(e) || V.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return V.access(e, t, n)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = K.get(s), 1 === s.nodeType && !V.get(s, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = U(i.slice(5)), J(s, i, o[i]));
                    V.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function() {
                K.set(this, e)
            })) : W(this, (function(t) {
                var n;
                if (s && void 0 === t) return void 0 !== (n = K.get(s, e)) || void 0 !== (n = J(s, e)) ? n : void 0;
                this.each((function() {
                    K.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                K.remove(this, e)
            }))
        }
    }), x.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                i = n.length,
                o = n.shift(),
                s = x._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, (function() {
                x.dequeue(e, t)
            }), s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: x.Callbacks("once memory").add((function() {
                    V.remove(e, [t + "queue", n])
                }))
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                x.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = x.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = V.get(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = m.documentElement,
        oe = function(e) {
            return x.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === x.css(e, "display")
    };

    function ae(e, t, n, i) {
        var o, s, r = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; r--;) x.style(e, t, d + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), d /= s;
            d *= 2, x.style(e, t, d + c), n = n || []
        }
        return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
    }
    var le = {};

    function ce(e, t) {
        for (var n, i, o, s, r, a, l, c = [], d = 0, u = e.length; d < u; d++)(i = e[d]).style && (n = i.style.display, t ? ("none" === n && (c[d] = V.get(i, "display") || null, c[d] || (i.style.display = "")), "" === i.style.display && re(i) && (c[d] = (l = r = s = void 0, r = (o = i).ownerDocument, a = o.nodeName, (l = le[a]) || (s = r.body.appendChild(r.createElement(a)), l = x.css(s, "display"), s.parentNode.removeChild(s), "none" === l && (l = "block"), le[a] = l)))) : "none" !== n && (c[d] = "none", V.set(i, "display", n)));
        for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
        return e
    }
    x.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                re(this) ? x(this).show() : x(this).hide()
            }))
        }
    });
    var de, ue, pe = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    de = m.createDocumentFragment().appendChild(m.createElement("div")), (ue = m.createElement("input")).setAttribute("type", "radio"), ue.setAttribute("checked", "checked"), ue.setAttribute("name", "t"), de.appendChild(ue), f.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", f.option = !!de.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? x.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, i, o) {
        for (var s, r, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((s = e[f]) || 0 === s)
                if ("object" === b(s)) x.merge(p, s.nodeType ? [s] : s);
                else if (ye.test(s)) {
            for (r = r || u.appendChild(t.createElement("div")), a = (fe.exec(s) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, r.innerHTML = l[1] + x.htmlPrefilter(s) + l[2], d = l[0]; d--;) r = r.lastChild;
            x.merge(p, r.childNodes), (r = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(s));
        for (u.textContent = "", f = 0; s = p[f++];)
            if (i && -1 < x.inArray(s, i)) o && o.push(s);
            else if (c = oe(s), r = me(u.appendChild(s), "script"), c && ve(r), n)
            for (d = 0; s = r[d++];) he.test(s.type || "") && n.push(s);
        return u
    }
    var we = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function _e() {
        return !1
    }

    function ke(e, t) {
        return e === function() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Te(e, t, n, i, o, s) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = _e;
        else if (!o) return e;
        return 1 === s && (r = o, (o = function(e) {
            return x().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = x.guid++)), e.each((function() {
            x.event.add(this, t, o, i, n)
        }))
    }

    function Ce(e, t, n) {
        n ? (V.set(e, t, !1), x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, s, r = V.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = o.call(arguments), V.set(this, t, r), i = n(this, t), this[t](), r !== (s = V.get(this, t)) || i ? V.set(this, t, !1) : s = {}, r !== s) return e.stopImmediatePropagation(), e.preventDefault(), s && s.value
                } else r.length && (V.set(this, t, {
                    value: x.event.trigger(x.extend(r[0], x.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === V.get(e, t) && x.event.add(e, t, xe)
    }
    x.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, p, f, h, g, m = V.get(e);
            if (X(e))
                for (n.handler && (n = (s = n).handler, o = s.selector), o && x.find.matchesSelector(ie, o), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = Object.create(null)), (r = m.handle) || (r = m.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(P) || [""]).length; c--;) f = g = (a = we.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = x.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = x.event.special[f] || {}, d = x.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, r) || e.addEventListener && e.addEventListener(f, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), x.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, p, f, h, g, m = V.hasData(e) && V.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--;)
                    if (f = g = (a = we.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = x.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || x.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) x.event.remove(e, f + t[c], n, i, !0);
                x.isEmptyObject(l) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, s, r, a = new Array(arguments.length),
                l = x.event.fix(e),
                c = (V.get(this, "events") || Object.create(null))[l.type] || [],
                d = x.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                for (r = x.event.handlers.call(this, l, c), t = 0;
                    (o = r[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (i = ((x.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (s = [], r = {}, n = 0; n < l; n++) void 0 === r[o = (i = t[n]).selector + " "] && (r[o] = i.needsContext ? -1 < x(o, this).index(c) : x.find(o, this, null, [c]).length), r[o] && s.push(i);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && E(t, "input") && Ce(t, "click", xe), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && E(t, "input") && Ce(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && E(t, "input") && V.get(t, "click") || E(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: _e,
        isPropagationStopped: _e,
        isImmediatePropagationStopped: _e,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, x.event.addProp), x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        x.event.special[e] = {
            setup: function() {
                return Ce(this, e, ke), !1
            },
            trigger: function() {
                return Ce(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    })), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), x.fn.extend({
        on: function(e, t, n, i) {
            return Te(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Te(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _e), this.each((function() {
                x.event.remove(this, e, n, t)
            }))
        }
    });
    var Se = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, i, o, s, r, a;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (a = V.get(e).events))
                for (o in V.remove(t, "handle events"), a)
                    for (n = 0, i = a[o].length; n < i; n++) x.event.add(t, o, a[o][n]);
            K.hasData(e) && (s = K.access(e), r = x.extend({}, s), K.set(t, r))
        }
    }

    function De(e, t, n, i) {
        t = s(t);
        var o, r, a, l, c, d, u = 0,
            p = e.length,
            g = p - 1,
            m = t[0],
            v = h(m);
        if (v || 1 < p && "string" == typeof m && !f.checkClone && Ee.test(m)) return e.each((function(o) {
            var s = e.eq(o);
            v && (t[0] = m.call(this, o, s.html())), De(s, t, n, i)
        }));
        if (p && (r = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = x.map(me(o, "script"), $e)).length; u < p; u++) c = o, u !== g && (c = x.clone(c, !0, !0), l && x.merge(a, me(c, "script"))), n.call(e[u], c, u);
            if (l)
                for (d = a[a.length - 1].ownerDocument, x.map(a, je), u = 0; u < l; u++) c = a[u], he.test(c.type || "") && !V.access(c, "globalEval") && x.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, d) : y(c.textContent.replace(Ae, ""), c, d))
        }
        return e
    }

    function Ne(e, t, n) {
        for (var i, o = t ? x.filter(t, e) : e, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || x.cleanData(me(i)), i.parentNode && (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, s, r, a, l, c, d = e.cloneNode(!0),
                u = oe(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = me(d), i = 0, o = (s = me(e)).length; i < o; i++) a = s[i], "input" === (c = (l = r[i]).nodeName.toLowerCase()) && pe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (s = s || me(e), r = r || me(d), i = 0, o = s.length; i < o; i++) Le(s[i], r[i]);
                else Le(e, d);
            return 0 < (r = me(d, "script")).length && ve(r, !u && me(e, "script")), d
        },
        cleanData: function(e) {
            for (var t, n, i, o = x.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (X(n)) {
                    if (t = n[V.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[V.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return Ne(this, e, !0)
        },
        remove: function(e) {
            return Ne(this, e)
        },
        text: function(e) {
            return W(this, (function(e) {
                return void 0 === e ? x.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return De(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return De(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return De(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return De(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return x.clone(this, e, t)
            }))
        },
        html: function(e) {
            return W(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return De(this, arguments, (function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(me(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        x.fn[e] = function(e) {
            for (var n, i = [], o = x(e), s = o.length - 1, a = 0; a <= s; a++) n = a === s ? this : this.clone(!0), x(o[a])[t](n), r.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Me = function(e, t, n) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.call(e), t) e.style[o] = s[o];
            return i
        },
        He = new RegExp(ne.join("|"), "i");

    function ze(e, t, n) {
        var i, o, s, r, a = e.style;
        return (n = n || Ie(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || oe(e) || (r = x.style(e, t)), !f.pixelBoxStyles() && Pe.test(r) && He.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function qe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (d) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(d);
                var t = e.getComputedStyle(d);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), d.style.right = "60%", r = 36 === n(t.right), o = 36 === n(t.width), d.style.position = "absolute", s = 12 === n(d.offsetWidth / 3), ie.removeChild(c), d = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, s, r, a, l, c = m.createElement("div"),
            d = m.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === d.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), r
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            },
            reliableTrDimensions: function() {
                var t, n, i, o;
                return null == a && (t = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), o = e.getComputedStyle(n), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), a
            }
        }))
    }();
    var Fe = ["Webkit", "Moz", "ms"],
        We = m.createElement("div").style,
        Re = {};

    function Be(e) {
        return x.cssProps[e] || Re[e] || (e in We ? e : Re[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
                if ((e = Fe[n] + t) in We) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ue = /^--/,
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ve(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ke(e, t, n, i, o, s) {
        var r = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === n && (l += x.css(e, n + ne[r], !0, o)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[r], !0, o)), "margin" !== n && (l -= x.css(e, "border" + ne[r] + "Width", !0, o))) : (l += x.css(e, "padding" + ne[r], !0, o), "padding" !== n ? l += x.css(e, "border" + ne[r] + "Width", !0, o) : a += x.css(e, "border" + ne[r] + "Width", !0, o));
        return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l
    }

    function Ge(e, t, n) {
        var i = Ie(e),
            o = (!f.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
            s = o,
            r = ze(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && E(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, i), (s = a in e) && (r = e[a])), (r = parseFloat(r) || 0) + Ke(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function Ze(e, t, n, i, o) {
        return new Ze.prototype.init(e, t, n, i, o)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = U(t),
                    l = Ue.test(t),
                    c = e.style;
                if (l || (t = Be(a)), r = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : c[t];
                "string" == (s = typeof n) && (o = te.exec(n)) && o[1] && (n = ae(e, t, o), s = "number"), null != n && n == n && ("number" !== s || l || (n += o && o[3] || (x.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = U(t);
            return Ue.test(t) || (t = Be(a)), (r = x.cssHooks[t] || x.cssHooks[a]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = ze(e, t, i)), "normal" === o && t in Ye && (o = Ye[t]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
        }
    }), x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Qe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : Me(e, Xe, (function() {
                    return Ge(e, t, i)
                }))
            },
            set: function(e, n, i) {
                var o, s = Ie(e),
                    r = !f.scrollboxSize() && "absolute" === s.position,
                    a = (r || i) && "border-box" === x.css(e, "boxSizing", !1, s),
                    l = i ? Ke(e, t, i, a, s) : 0;
                return a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Ke(e, t, "border", !1, s) - .5)), l && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Ve(0, n, l)
            }
        }
    })), x.cssHooks.marginLeft = qe(f.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ne[i] + t] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ve)
    })), x.fn.extend({
        css: function(e, t) {
            return W(this, (function(e, t, n) {
                var i, o, s = {},
                    r = 0;
                if (Array.isArray(t)) {
                    for (i = Ie(e), o = t.length; r < o; r++) s[t[r]] = x.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((x.Tween = Ze).prototype = {
        constructor: Ze,
        init: function(e, t, n, i, o, s) {
            this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this
        }
    }).init.prototype = Ze.prototype, (Ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Be(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = Ze.prototype.init, x.fx.step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function st() {
        et && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, x.fx.interval), x.fx.tick())
    }

    function rt() {
        return e.setTimeout((function() {
            Je = void 0
        })), Je = Date.now()
    }

    function at(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function lt(e, t, n) {
        for (var i, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), s = 0, r = o.length; s < r; s++)
            if (i = o[s].call(n, t, e)) return i
    }

    function ct(e, t, n) {
        var i, o, s = 0,
            r = ct.prefilters.length,
            a = x.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (o) return !1;
                for (var t = Je || rt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Je || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var n, i, o, s, r;
                for (n in e)
                    if (o = t[i = U(n)], s = e[n], Array.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = x.cssHooks[i]) && "expand" in r)
                        for (n in s = r.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = o);
                    else t[i] = o
            }(d, c.opts.specialEasing); s < r; s++)
            if (i = ct.prefilters[s].call(c, e, d, c.opts)) return h(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return x.map(d, lt, c), h(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(ct, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            h(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, s, r, a, l, c, d, u = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                g = e.nodeType && re(e),
                m = V.get(e, "fxshow");
            for (i in n.queue || (null == (r = x._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || a()
                }), r.unqueued++, p.always((function() {
                    p.always((function() {
                        r.unqueued--, x.queue(e, "fx").length || r.empty.fire()
                    }))
                }))), t)
                if (o = t[i], it.test(o)) {
                    if (delete t[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || x.style(e, i)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
                for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = V.get(e, "display")), "none" === (d = x.css(e, "display")) && (c ? d = c : (ce([e], !0), c = e.style.display || c, d = x.css(e, "display"), ce([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === x.css(e, "float") && (l || (p.done((function() {
                        h.display = c
                    })), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = V.access(e, "fxshow", {
                    display: c
                }), s && (m.hidden = !g), g && ce([e], !0), p.done((function() {
                    for (i in g || ce([e]), V.remove(e, "fxshow"), f) x.style(e, i, f[i])
                }))), l = lt(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), x.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            h(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
        }, i
    }, x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = x.isEmptyObject(e),
                s = x.speed(t, n, i),
                r = function() {
                    var t = ct(this, x.extend({}, e), s);
                    (o || V.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    s = x.timers,
                    r = V.get(this);
                if (o) r[o] && r[o].stop && i(r[o]);
                else
                    for (o in r) r[o] && r[o].stop && ot.test(o) && i(r[o]);
                for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), t = !1, s.splice(o, 1));
                !t && n || x.dequeue(this, e)
            }))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
                var t, n = V.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    s = x.timers,
                    r = i ? i.length : 0;
                for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }))
        }
    }), x.each(["toggle", "show", "hide"], (function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, o)
        }
    })), x.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        x.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    })), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), Je = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        et || (et = !0, st())
    }, x.fx.stop = function() {
        et = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(t, n) {
        return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        }))
    }, tt = m.createElement("input"), nt = m.createElement("select").appendChild(m.createElement("option")), tt.type = "checkbox", f.checkOn = "" !== tt.value, f.optSelected = nt.selected, (tt = m.createElement("input")).value = "t", tt.type = "radio", f.radioValue = "t" === tt.value;
    var dt, ut = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return W(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                x.removeAttr(this, e)
            }))
        }
    }), x.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = ut[t] || x.find.attr;
        ut[t] = function(e, t, i) {
            var o, s, r = t.toLowerCase();
            return i || (s = ut[r], ut[r] = o, o = null != n(e, t, i) ? r : null, ut[r] = s), o
        }
    }));
    var pt = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return W(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[x.propFix[e] || e]
            }))
        }
    }), x.extend({
        prop: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
    })), x.fn.extend({
        addClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (h(e)) return this.each((function(t) {
                x(this).addClass(e.call(this, t, gt(this)))
            }));
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (o = gt(n), i = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (r = 0; s = t[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        o !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (h(e)) return this.each((function(t) {
                x(this).removeClass(e.call(this, t, gt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (o = gt(n), i = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (r = 0; s = t[r++];)
                            for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                        o !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                x(this).toggleClass(e.call(this, n, gt(this), t), t)
            })) : this.each((function() {
                var t, o, s, r;
                if (i)
                    for (o = 0, s = x(this), r = mt(e); t = r[o++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = gt(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = h(e), this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }))) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ht(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        s = e.selectedIndex,
                        r = "select-one" === e.type,
                        a = r ? null : [],
                        l = r ? s + 1 : o.length;
                    for (i = s < 0 ? l : r ? s : 0; i < l; i++)
                        if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, s = x.makeArray(t), r = o.length; r--;)((i = o[r]).selected = -1 < x.inArray(x.valHooks.option.get(i), s)) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        }, f.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(t, n, i, o) {
            var s, r, a, l, c, u, p, f, v = [i || m],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = f = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + x.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : x.makeArray(n, [t]), p = x.event.special[y] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !g(i)) {
                    for (l = p.delegateType || y, yt.test(l + y) || (r = r.parentNode); r; r = r.parentNode) v.push(r), a = r;
                    a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || e)
                }
                for (s = 0;
                    (r = v[s++]) && !t.isPropagationStopped();) f = r, t.type = 1 < s ? l : p.bindType || y, (u = (V.get(r, "events") || Object.create(null))[t.type] && V.get(r, "handle")) && u.apply(r, n), (u = c && r[c]) && u.apply && X(r) && (t.result = u.apply(r, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !X(i) || c && h(i[y]) && !g(i) && ((a = i[c]) && (i[c] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, bt), i[y](), t.isPropagationStopped() && f.removeEventListener(y, bt), x.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                x.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    o = V.access(i, t);
                o || i.addEventListener(e, n, !0), V.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    o = V.access(i, t) - 1;
                o ? V.access(i, t, o) : (i.removeEventListener(e, n, !0), V.remove(i, t))
            }
        }
    }));
    var wt = e.location,
        xt = {
            guid: Date.now()
        },
        _t = /\?/;
    x.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, (function(e) {
            return e.textContent
        })).join("\n") : t)), n
    };
    var kt = /\[\]$/,
        Tt = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, i) {
        var o;
        if (Array.isArray(t)) x.each(t, (function(t, o) {
            n || kt.test(e) ? i(e, o) : Et(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        }));
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (o in t) Et(e + "[" + o + "]", t[o], n, i)
    }
    x.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                var n = h(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
            o(this.name, this.value)
        }));
        else
            for (n in e) Et(n, e[n], t, o);
        return i.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !Ct.test(e) && (this.checked || !pe.test(e))
            })).map((function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            })).get()
        }
    });
    var At = /%20/g,
        Ot = /#.*$/,
        $t = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        Nt = {},
        Pt = {},
        It = "*/".concat("*"),
        Mt = m.createElement("a");

    function Ht(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                s = t.toLowerCase().match(P) || [];
            if (h(n))
                for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function zt(e, t, n, i) {
        var o = {},
            s = e === Pt;

        function r(a) {
            var l;
            return o[a] = !0, x.each(e[a] || [], (function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            })), l
        }
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function qt(e, t) {
        var n, i, o = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }
    Mt.href = wt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, x.ajaxSettings), t) : qt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Nt),
        ajaxTransport: Ht(Pt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, r, a, l, c, d, u, p, f = x.ajaxSetup({}, n),
                h = f.context || f,
                g = f.context && (h.nodeType || h.jquery) ? x(h) : x.event,
                v = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                _ = {},
                k = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!r)
                                for (r = {}; t = jt.exec(s);) r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = r[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || k;
                        return i && i.abort(t), C(0, t), this
                    }
                };
            if (v.promise(T), f.url = ((t || f.url || wt.href) + "").replace(Dt, wt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [""], null == f.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), zt(Nt, f, n, T), c) return T;
            for (u in (d = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Lt.test(f.type), o = f.url.replace(Ot, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (_t.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace($t, "$1"), p = (_t.test(o) ? "&" : "?") + "_=" + xt.guid++ + p), f.url = o + p), f.ifModified && (x.lastModified[o] && T.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && T.setRequestHeader("If-None-Match", x.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + It + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c)) return T.abort();
            if (k = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), i = zt(Pt, f, n, T)) {
                if (T.readyState = 1, d && g.trigger("ajaxSend", [T, f]), c) return T;
                f.async && 0 < f.timeout && (a = e.setTimeout((function() {
                    T.abort("timeout")
                }), f.timeout));
                try {
                    c = !1, i.send(w, C)
                } catch (t) {
                    if (c) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(t, n, r, l) {
                var u, p, m, w, _, k = n;
                c || (c = !0, a && e.clearTimeout(a), i = void 0, s = l || "", T.readyState = 0 < t ? 4 : 0, u = 200 <= t && t < 300 || 304 === t, r && (w = function(e, t, n) {
                    for (var i, o, s, r, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) s = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                s = o;
                                break
                            }
                            r || (r = o)
                        }
                        s = s || r
                    }
                    if (s) return s !== l[0] && l.unshift(s), n[s]
                }(f, T, r)), !u && -1 < x.inArray("script", f.dataTypes) && x.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), w = function(e, t, n, i) {
                    var o, s, r, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s;)
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, T, u), u ? (f.ifModified && ((_ = T.getResponseHeader("Last-Modified")) && (x.lastModified[o] = _), (_ = T.getResponseHeader("etag")) && (x.etag[o] = _)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = w.state, p = w.data, u = !(m = w.error))) : (m = k, !t && k || (k = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || k) + "", u ? v.resolveWith(h, [p, k, T]) : v.rejectWith(h, [T, k, m]), T.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? p : m]), y.fireWith(h, [T, k]), d && (g.trigger("ajaxComplete", [T, f]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, n, i, o) {
            return h(n) && (o = o || i, i = n, n = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, x.isPlainObject(e) && e))
        }
    })), x.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), x._evalUrl = function(e, t, n) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t, n)
            }
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                x(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                x(this).replaceWith(this.childNodes)
            })), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        Wt = x.ajaxSettings.xhr();
    f.cors = !!Wt && "withCredentials" in Wt, f.ajax = Wt = !!Wt, x.ajaxTransport((function(t) {
        var n, i;
        if (f.cors || Wt && !t.crossDomain) return {
            send: function(o, s) {
                var r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(r, o[r]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout((function() {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), x.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(i, o) {
                t = x("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), m.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Rt, Bt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || x.expando + "_" + xt.guid++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var o, s, r, a = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qt, "$1" + o) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || x.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, i.always((function() {
            void 0 === s ? x(e).removeProp(o) : e[o] = s, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), r && h(s) && s(r[0]), r = s = void 0
        })), "script"
    })), f.createHTMLDocument = ((Rt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rt.childNodes.length), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(i)) : t = m), s = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, s), s && s.length && x(s).remove(), x.merge([], o.childNodes)));
        var i, o, s
    }, x.fn.load = function(e, t, n) {
        var i, o, s, r = this,
            a = e.indexOf(" ");
        return -1 < a && (i = ht(e.slice(a)), e = e.slice(0, a)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && x.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            s = arguments, r.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        })).always(n && function(e, t) {
            r.each((function() {
                n.apply(this, s || [e.responseText, t, e])
            }))
        }), this
    }, x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
            return e === t.elem
        })).length
    }, x.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, l, c = x.css(e, "position"),
                d = x(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (i = d.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), h(t) && (t = t.call(e, n, x.extend({}, a))), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                x.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), o.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - x.css(i, "marginTop", !0),
                    left: t.left - o.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ie
            }))
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(i) {
            return W(this, (function(e, i, o) {
                var s;
                if (g(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === o) return s ? s[t] : e[i];
                s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : e[i] = o
            }), e, i, arguments.length)
        }
    })), x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = qe(f.pixelPosition, (function(e, n) {
            if (n) return n = ze(e, t), Pe.test(n) ? x(e).position()[t] + "px" : n
        }))
    })), x.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            x.fn[i] = function(o, s) {
                var r = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === s ? "margin" : "border");
                return W(this, (function(t, n, o) {
                    var s;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? x.css(t, n, a) : x.style(t, n, o, a)
                }), t, r ? o : void 0, r)
            }
        }))
    })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    x.proxy = function(e, t) {
        var n, i, s;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return i = o.call(arguments, 2), (s = function() {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, s
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = E, x.isFunction = h, x.isWindow = g, x.camelCase = U, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, x.trim = function(e) {
        return null == e ? "" : (e + "").replace(Ut, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return x
    }));
    var Xt = e.jQuery,
        Yt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Yt), t && e.jQuery === x && (e.jQuery = Xt), x
    }, void 0 === t && (e.jQuery = e.$ = x), x
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function(e) {
    function t(e) {
        return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e
    }

    function n(e) {
        return e instanceof t(e).Element || e instanceof Element
    }

    function i(e) {
        return e instanceof t(e).HTMLElement || e instanceof HTMLElement
    }

    function o(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    }

    function s(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
            o = 1,
            s = 1;
        return i(e) && t && (o = n.width / e.offsetWidth || 1, s = n.height / e.offsetHeight || 1), {
            width: H(n.width / o),
            height: H(n.height / s),
            top: H(n.top / s),
            right: H(n.right / o),
            bottom: H(n.bottom / s),
            left: H(n.left / o),
            x: H(n.left / o),
            y: H(n.top / s)
        }
    }

    function r(e) {
        return {
            scrollLeft: (e = t(e)).pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function a(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function l(e) {
        return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function c(e) {
        return s(l(e)).left + r(e).scrollLeft
    }

    function d(e) {
        return t(e).getComputedStyle(e)
    }

    function u(e) {
        return e = d(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    }

    function p(e, n, o) {
        void 0 === o && (o = !1);
        var d, p = i(n);
        if (d = i(n)) {
            var f = (d = n.getBoundingClientRect()).height / n.offsetHeight || 1;
            d = 1 !== (d.width / n.offsetWidth || 1) || 1 !== f
        }
        f = d, d = l(n), e = s(e, f), f = {
            scrollLeft: 0,
            scrollTop: 0
        };
        var h = {
            x: 0,
            y: 0
        };
        return (p || !p && !o) && (("body" !== a(n) || u(d)) && (f = n !== t(n) && i(n) ? {
            scrollLeft: n.scrollLeft,
            scrollTop: n.scrollTop
        } : r(n)), i(n) ? ((h = s(n, !0)).x += n.clientLeft, h.y += n.clientTop) : d && (h.x = c(d))), {
            x: e.left + f.scrollLeft - h.x,
            y: e.top + f.scrollTop - h.y,
            width: e.width,
            height: e.height
        }
    }

    function f(e) {
        var t = s(e),
            n = e.offsetWidth,
            i = e.offsetHeight;
        return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - i) && (i = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: i
        }
    }

    function h(e) {
        return "html" === a(e) ? e : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || l(e)
    }

    function g(e) {
        return 0 <= ["html", "body", "#document"].indexOf(a(e)) ? e.ownerDocument.body : i(e) && u(e) ? e : g(h(e))
    }

    function m(e, n) {
        var i;
        void 0 === n && (n = []);
        var o = g(e);
        return e = o === (null == (i = e.ownerDocument) ? void 0 : i.body), i = t(o), o = e ? [i].concat(i.visualViewport || [], u(o) ? o : []) : o, n = n.concat(o), e ? n : n.concat(m(h(o)))
    }

    function v(e) {
        return i(e) && "fixed" !== d(e).position ? e.offsetParent : null
    }

    function y(e) {
        for (var n = t(e), o = v(e); o && 0 <= ["table", "td", "th"].indexOf(a(o)) && "static" === d(o).position;) o = v(o);
        if (o && ("html" === a(o) || "body" === a(o) && "static" === d(o).position)) return n;
        if (!o) e: {
            if (o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !i(e) || "fixed" !== d(e).position)
                for (e = h(e); i(e) && 0 > ["html", "body"].indexOf(a(e));) {
                    var s = d(e);
                    if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || o && "filter" === s.willChange || o && s.filter && "none" !== s.filter) {
                        o = e;
                        break e
                    }
                    e = e.parentNode
                }
            o = null
        }
        return o || n
    }

    function b(e) {
        function t(e) {
            i.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                i.has(e) || (e = n.get(e)) && t(e)
            })), o.push(e)
        }
        var n = new Map,
            i = new Set,
            o = [];
        return e.forEach((function(e) {
            n.set(e.name, e)
        })), e.forEach((function(e) {
            i.has(e.name) || t(e)
        })), o
    }

    function w(e) {
        var t;
        return function() {
            return t || (t = new Promise((function(n) {
                Promise.resolve().then((function() {
                    t = void 0, n(e())
                }))
            }))), t
        }
    }

    function x(e) {
        return e.split("-")[0]
    }

    function _(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && o(n))
            do {
                if (t && e.isSameNode(t)) return !0;
                t = t.parentNode || t.host
            } while (t);
        return !1
    }

    function k(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function T(e, n) {
        if ("viewport" === n) {
            n = t(e);
            var o = l(e);
            n = n.visualViewport;
            var a = o.clientWidth;
            o = o.clientHeight;
            var u = 0,
                p = 0;
            n && (a = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (u = n.offsetLeft, p = n.offsetTop)), e = k(e = {
                width: a,
                height: o,
                x: u + c(e),
                y: p
            })
        } else i(n) ? ((e = s(n)).top += n.clientTop, e.left += n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top) : (p = l(e), e = l(p), a = r(p), n = null == (o = p.ownerDocument) ? void 0 : o.body, o = R(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), u = R(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), p = -a.scrollLeft + c(p), a = -a.scrollTop, "rtl" === d(n || e).direction && (p += R(e.clientWidth, n ? n.clientWidth : 0) - o), e = k({
            width: o,
            height: u,
            x: p,
            y: a
        }));
        return e
    }

    function C(e, t, o) {
        return t = "clippingParents" === t ? function(e) {
            var t = m(h(e)),
                o = 0 <= ["absolute", "fixed"].indexOf(d(e).position) && i(e) ? y(e) : e;
            return n(o) ? t.filter((function(e) {
                return n(e) && _(e, o) && "body" !== a(e)
            })) : []
        }(e) : [].concat(t), (o = (o = [].concat(t, [o])).reduce((function(t, n) {
            return n = T(e, n), t.top = R(n.top, t.top), t.right = B(n.right, t.right), t.bottom = B(n.bottom, t.bottom), t.left = R(n.left, t.left), t
        }), T(e, o[0]))).width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o
    }

    function S(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }

    function E(e) {
        var t = e.reference,
            n = e.element,
            i = (e = e.placement) ? x(e) : null;
        e = e ? e.split("-")[1] : null;
        var o = t.x + t.width / 2 - n.width / 2,
            s = t.y + t.height / 2 - n.height / 2;
        switch (i) {
            case "top":
                o = {
                    x: o,
                    y: t.y - n.height
                };
                break;
            case "bottom":
                o = {
                    x: o,
                    y: t.y + t.height
                };
                break;
            case "right":
                o = {
                    x: t.x + t.width,
                    y: s
                };
                break;
            case "left":
                o = {
                    x: t.x - n.width,
                    y: s
                };
                break;
            default:
                o = {
                    x: t.x,
                    y: t.y
                }
        }
        if (null != (i = i ? S(i) : null)) switch (s = "y" === i ? "height" : "width", e) {
            case "start":
                o[i] -= t[s] / 2 - n[s] / 2;
                break;
            case "end":
                o[i] += t[s] / 2 - n[s] / 2
        }
        return o
    }

    function A(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }

    function O(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e, t
        }), {})
    }

    function $(e, t) {
        void 0 === t && (t = {});
        var i = t;
        t = void 0 === (t = i.placement) ? e.placement : t;
        var o = i.boundary,
            r = void 0 === o ? "clippingParents" : o,
            a = void 0 === (o = i.rootBoundary) ? "viewport" : o;
        o = void 0 === (o = i.elementContext) ? "popper" : o;
        var c = i.altBoundary,
            d = void 0 !== c && c;
        i = A("number" != typeof(i = void 0 === (i = i.padding) ? 0 : i) ? i : O(i, z));
        var u = e.elements.reference;
        c = e.rects.popper, r = C(n(d = e.elements[d ? "popper" === o ? "reference" : "popper" : o]) ? d : d.contextElement || l(e.elements.popper), r, a), d = E({
            reference: a = s(u),
            element: c,
            strategy: "absolute",
            placement: t
        }), c = k(Object.assign({}, c, d)), a = "popper" === o ? c : a;
        var p = {
            top: r.top - a.top + i.top,
            bottom: a.bottom - r.bottom + i.bottom,
            left: r.left - a.left + i.left,
            right: a.right - r.right + i.right
        };
        if (e = e.modifiersData.offset, "popper" === o && e) {
            var f = e[t];
            Object.keys(p).forEach((function(e) {
                var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                    n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                p[e] += f[n] * t
            }))
        }
        return p
    }

    function j() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }))
    }

    function L(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers,
            i = void 0 === t ? [] : t,
            o = void 0 === (e = e.defaultOptions) ? U : e;
        return function(e, t, s) {
            function r() {
                l.forEach((function(e) {
                    return e()
                })), l = []
            }
            void 0 === s && (s = o);
            var a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, U, o),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                d = {
                    state: a,
                    setOptions: function(s) {
                        return r(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                            reference: n(e) ? m(e) : e.contextElement ? m(e.contextElement) : [],
                            popper: m(t)
                        }, s = function(e) {
                            var t = b(e);
                            return W.reduce((function(e, n) {
                                return e.concat(t.filter((function(e) {
                                    return e.phase === n
                                })))
                            }), [])
                        }(function(e) {
                            var t = e.reduce((function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }), {});
                            return Object.keys(t).map((function(e) {
                                return t[e]
                            }))
                        }([].concat(i, a.options.modifiers))), a.orderedModifiers = s.filter((function(e) {
                            return e.enabled
                        })), a.orderedModifiers.forEach((function(e) {
                            var t = e.name,
                                n = e.options;
                            n = void 0 === n ? {} : n, "function" == typeof(e = e.effect) && (t = e({
                                state: a,
                                name: t,
                                instance: d,
                                options: n
                            }), l.push(t || function() {}))
                        })), d.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var e = a.elements,
                                t = e.reference;
                            if (j(t, e = e.popper))
                                for (a.rects = {
                                        reference: p(t, y(e), "fixed" === a.options.strategy),
                                        popper: f(e)
                                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
                                        return a.modifiersData[e.name] = Object.assign({}, e.data)
                                    })), t = 0; t < a.orderedModifiers.length; t++)
                                    if (!0 === a.reset) a.reset = !1, t = -1;
                                    else {
                                        var n = a.orderedModifiers[t];
                                        e = n.fn;
                                        var i = n.options;
                                        i = void 0 === i ? {} : i, n = n.name, "function" == typeof e && (a = e({
                                            state: a,
                                            options: i,
                                            name: n,
                                            instance: d
                                        }) || a)
                                    }
                        }
                    },
                    update: w((function() {
                        return new Promise((function(e) {
                            d.forceUpdate(), e(a)
                        }))
                    })),
                    destroy: function() {
                        r(), c = !0
                    }
                };
            return j(e, t) ? (d.setOptions(s).then((function(e) {
                !c && s.onFirstUpdate && s.onFirstUpdate(e)
            })), d) : d
        }
    }

    function D(e) {
        var n, i = e.popper,
            o = e.popperRect,
            s = e.placement,
            r = e.offsets,
            a = e.position,
            c = e.gpuAcceleration,
            u = e.adaptive;
        if (!0 === (e = e.roundOffsets)) {
            e = r.y;
            var p = window.devicePixelRatio || 1;
            e = {
                x: Q(Q(r.x * p) / p) || 0,
                y: Q(Q(e * p) / p) || 0
            }
        } else e = "function" == typeof e ? e(r) : r;
        e = void 0 === (e = (p = e).x) ? 0 : e, p = void 0 === (p = p.y) ? 0 : p;
        var f = r.hasOwnProperty("x");
        r = r.hasOwnProperty("y");
        var h, g = "left",
            m = "top",
            v = window;
        if (u) {
            var b = y(i),
                w = "clientHeight",
                x = "clientWidth";
            b === t(i) && "static" !== d(b = l(i)).position && (w = "scrollHeight", x = "scrollWidth"), "top" === s && (m = "bottom", p -= b[w] - o.height, p *= c ? 1 : -1), "left" === s && (g = "right", e -= b[x] - o.width, e *= c ? 1 : -1)
        }
        return i = Object.assign({
            position: a
        }, u && K), c ? Object.assign({}, i, ((h = {})[m] = r ? "0" : "", h[g] = f ? "0" : "", h.transform = 2 > (v.devicePixelRatio || 1) ? "translate(" + e + "px, " + p + "px)" : "translate3d(" + e + "px, " + p + "px, 0)", h)) : Object.assign({}, i, ((n = {})[m] = r ? p + "px" : "", n[g] = f ? e + "px" : "", n.transform = "", n))
    }

    function N(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return ee[e]
        }))
    }

    function P(e) {
        return e.replace(/start|end/g, (function(e) {
            return te[e]
        }))
    }

    function I(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }

    function M(e) {
        return ["top", "right", "bottom", "left"].some((function(t) {
            return 0 <= e[t]
        }))
    }
    var H = Math.round,
        z = ["top", "bottom", "right", "left"],
        q = z.reduce((function(e, t) {
            return e.concat([t + "-start", t + "-end"])
        }), []),
        F = [].concat(z, ["auto"]).reduce((function(e, t) {
            return e.concat([t, t + "-start", t + "-end"])
        }), []),
        W = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
        R = Math.max,
        B = Math.min,
        Q = Math.round,
        U = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        },
        X = {
            passive: !0
        },
        Y = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var n = e.state,
                    i = e.instance,
                    o = (e = e.options).scroll,
                    s = void 0 === o || o,
                    r = void 0 === (e = e.resize) || e,
                    a = t(n.elements.popper),
                    l = [].concat(n.scrollParents.reference, n.scrollParents.popper);
                return s && l.forEach((function(e) {
                        e.addEventListener("scroll", i.update, X)
                    })), r && a.addEventListener("resize", i.update, X),
                    function() {
                        s && l.forEach((function(e) {
                            e.removeEventListener("scroll", i.update, X)
                        })), r && a.removeEventListener("resize", i.update, X)
                    }
            },
            data: {}
        },
        V = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state;
                t.modifiersData[e.name] = E({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        },
        K = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        },
        G = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                e = void 0 === (e = n.gpuAcceleration) || e;
                var i = n.adaptive;
                i = void 0 === i || i, n = void 0 === (n = n.roundOffsets) || n, e = {
                    placement: x(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: e
                }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, D(Object.assign({}, e, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: i,
                    roundOffsets: n
                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, D(Object.assign({}, e, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: n
                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        },
        Z = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function(e) {
                    var n = t.styles[e] || {},
                        o = t.attributes[e] || {},
                        s = t.elements[e];
                    i(s) && a(s) && (Object.assign(s.style, n), Object.keys(o).forEach((function(e) {
                        var t = o[e];
                        !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
                    })))
                }))
            },
            effect: function(e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() {
                        Object.keys(t.elements).forEach((function(e) {
                            var o = t.elements[e],
                                s = t.attributes[e] || {};
                            e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                return e[t] = "", e
                            }), {}), i(o) && a(o) && (Object.assign(o.style, e), Object.keys(s).forEach((function(e) {
                                o.removeAttribute(e)
                            })))
                        }))
                    }
            },
            requires: ["computeStyles"]
        },
        J = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state,
                    n = e.name,
                    i = void 0 === (e = e.options.offset) ? [0, 0] : e,
                    o = (e = F.reduce((function(e, n) {
                        var o = t.rects,
                            s = x(n),
                            r = 0 <= ["left", "top"].indexOf(s) ? -1 : 1,
                            a = "function" == typeof i ? i(Object.assign({}, o, {
                                placement: n
                            })) : i;
                        return o = (o = a[0]) || 0, a = ((a = a[1]) || 0) * r, s = 0 <= ["left", "right"].indexOf(s) ? {
                            x: a,
                            y: o
                        } : {
                            x: o,
                            y: a
                        }, e[n] = s, e
                    }), {}))[t.placement],
                    s = o.x;
                o = o.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += o), t.modifiersData[n] = e
            }
        },
        ee = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        te = {
            start: "end",
            end: "start"
        },
        ne = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                if (e = e.name, !t.modifiersData[e]._skip) {
                    var i = n.mainAxis;
                    i = void 0 === i || i;
                    var o = n.altAxis;
                    o = void 0 === o || o;
                    var s = n.fallbackPlacements,
                        r = n.padding,
                        a = n.boundary,
                        l = n.rootBoundary,
                        c = n.altBoundary,
                        d = n.flipVariations,
                        u = void 0 === d || d,
                        p = n.allowedAutoPlacements;
                    d = x(n = t.options.placement), s = s || (d !== n && u ? function(e) {
                        if ("auto" === x(e)) return [];
                        var t = N(e);
                        return [P(e), t, P(t)]
                    }(n) : [N(n)]);
                    var f = [n].concat(s).reduce((function(e, n) {
                        return e.concat("auto" === x(n) ? function(e, t) {
                            void 0 === t && (t = {});
                            var n = t.boundary,
                                i = t.rootBoundary,
                                o = t.padding,
                                s = t.flipVariations,
                                r = t.allowedAutoPlacements,
                                a = void 0 === r ? F : r,
                                l = t.placement.split("-")[1];
                            0 === (s = (t = l ? s ? q : q.filter((function(e) {
                                return e.split("-")[1] === l
                            })) : z).filter((function(e) {
                                return 0 <= a.indexOf(e)
                            }))).length && (s = t);
                            var c = s.reduce((function(t, s) {
                                return t[s] = $(e, {
                                    placement: s,
                                    boundary: n,
                                    rootBoundary: i,
                                    padding: o
                                })[x(s)], t
                            }), {});
                            return Object.keys(c).sort((function(e, t) {
                                return c[e] - c[t]
                            }))
                        }(t, {
                            placement: n,
                            boundary: a,
                            rootBoundary: l,
                            padding: r,
                            flipVariations: u,
                            allowedAutoPlacements: p
                        }) : n)
                    }), []);
                    n = t.rects.reference, s = t.rects.popper;
                    var h = new Map;
                    d = !0;
                    for (var g = f[0], m = 0; m < f.length; m++) {
                        var v = f[m],
                            y = x(v),
                            b = "start" === v.split("-")[1],
                            w = 0 <= ["top", "bottom"].indexOf(y),
                            _ = w ? "width" : "height",
                            k = $(t, {
                                placement: v,
                                boundary: a,
                                rootBoundary: l,
                                altBoundary: c,
                                padding: r
                            });
                        if (b = w ? b ? "right" : "left" : b ? "bottom" : "top", n[_] > s[_] && (b = N(b)), _ = N(b), w = [], i && w.push(0 >= k[y]), o && w.push(0 >= k[b], 0 >= k[_]), w.every((function(e) {
                                return e
                            }))) {
                            g = v, d = !1;
                            break
                        }
                        h.set(v, w)
                    }
                    if (d)
                        for (i = function(e) {
                                var t = f.find((function(t) {
                                    if (t = h.get(t)) return t.slice(0, e).every((function(e) {
                                        return e
                                    }))
                                }));
                                if (t) return g = t, "break"
                            }, o = u ? 3 : 1; 0 < o && "break" !== i(o); o--);
                    t.placement !== g && (t.modifiersData[e]._skip = !0, t.placement = g, t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        },
        ie = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                e = e.name;
                var i = n.mainAxis,
                    o = void 0 === i || i,
                    s = void 0 !== (i = n.altAxis) && i;
                i = void 0 === (i = n.tether) || i;
                var r = n.tetherOffset,
                    a = void 0 === r ? 0 : r,
                    l = $(t, {
                        boundary: n.boundary,
                        rootBoundary: n.rootBoundary,
                        padding: n.padding,
                        altBoundary: n.altBoundary
                    });
                n = x(t.placement);
                var c = t.placement.split("-")[1],
                    d = !c,
                    u = S(n);
                n = "x" === u ? "y" : "x", r = t.modifiersData.popperOffsets;
                var p = t.rects.reference,
                    h = t.rects.popper,
                    g = "function" == typeof a ? a(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : a;
                if (a = {
                        x: 0,
                        y: 0
                    }, r) {
                    if (o || s) {
                        var m = "y" === u ? "top" : "left",
                            v = "y" === u ? "bottom" : "right",
                            b = "y" === u ? "height" : "width",
                            w = r[u],
                            _ = r[u] + l[m],
                            k = r[u] - l[v],
                            T = i ? -h[b] / 2 : 0,
                            C = "start" === c ? p[b] : h[b];
                        c = "start" === c ? -h[b] : -p[b], h = t.elements.arrow, h = i && h ? f(h) : {
                            width: 0,
                            height: 0
                        };
                        var E = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        };
                        m = E[m], v = E[v], h = R(0, B(p[b], h[b])), C = d ? p[b] / 2 - T - h - m - g : C - h - m - g, p = d ? -p[b] / 2 + T + h + v + g : c + h + v + g, d = t.elements.arrow && y(t.elements.arrow), g = t.modifiersData.offset ? t.modifiersData.offset[t.placement][u] : 0, d = r[u] + C - g - (d ? "y" === u ? d.clientTop || 0 : d.clientLeft || 0 : 0), p = r[u] + p - g, o && (o = i ? B(_, d) : _, k = i ? R(k, p) : k, o = R(o, B(w, k)), r[u] = o, a[u] = o - w), s && (o = (s = r[n]) + l["x" === u ? "top" : "left"], l = s - l["x" === u ? "bottom" : "right"], o = i ? B(o, d) : o, i = i ? R(l, p) : l, i = R(o, B(s, i)), r[n] = i, a[n] = i - s)
                    }
                    t.modifiersData[e] = a
                }
            },
            requiresIfExists: ["offset"]
        },
        oe = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state,
                    i = e.name,
                    o = e.options,
                    s = n.elements.arrow,
                    r = n.modifiersData.popperOffsets,
                    a = x(n.placement);
                if (e = S(a), a = 0 <= ["left", "right"].indexOf(a) ? "height" : "width", s && r) {
                    o = A("number" != typeof(o = "function" == typeof(o = o.padding) ? o(Object.assign({}, n.rects, {
                        placement: n.placement
                    })) : o) ? o : O(o, z));
                    var l = f(s),
                        c = "y" === e ? "top" : "left",
                        d = "y" === e ? "bottom" : "right",
                        u = n.rects.reference[a] + n.rects.reference[e] - r[e] - n.rects.popper[a];
                    r = r[e] - n.rects.reference[e], r = (s = (s = y(s)) ? "y" === e ? s.clientHeight || 0 : s.clientWidth || 0 : 0) / 2 - l[a] / 2 + (u / 2 - r / 2), a = R(o[c], B(r, s - l[a] - o[d])), n.modifiersData[i] = ((t = {})[e] = a, t.centerOffset = a - r, t)
                }
            },
            effect: function(e) {
                var t = e.state;
                if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
                    if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return;
                    _(t.elements.popper, e) && (t.elements.arrow = e)
                }
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        se = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state;
                e = e.name;
                var n = t.rects.reference,
                    i = t.rects.popper,
                    o = t.modifiersData.preventOverflow,
                    s = $(t, {
                        elementContext: "reference"
                    }),
                    r = $(t, {
                        altBoundary: !0
                    });
                n = I(s, n), i = I(r, i, o), o = M(n), r = M(i), t.modifiersData[e] = {
                    referenceClippingOffsets: n,
                    popperEscapeOffsets: i,
                    isReferenceHidden: o,
                    hasPopperEscaped: r
                }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": o,
                    "data-popper-escaped": r
                })
            }
        },
        re = L({
            defaultModifiers: [Y, V, G, Z]
        }),
        ae = [Y, V, G, Z, J, ne, ie, oe, se],
        le = L({
            defaultModifiers: ae
        });
    e.applyStyles = Z, e.arrow = oe, e.computeStyles = G, e.createPopper = le, e.createPopperLite = re, e.defaultModifiers = ae, e.detectOverflow = $, e.eventListeners = Y, e.flip = ne, e.hide = se, e.offset = J, e.popperGenerator = L, e.popperOffsets = V, e.preventOverflow = ie, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t(e.Popper)
}(this, (function(e) {
    "use strict";
    var t = function(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return e && Object.keys(e).forEach((function(n) {
            if ("default" !== n) {
                var i = Object.getOwnPropertyDescriptor(e, n);
                Object.defineProperty(t, n, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return e[n]
                    }
                })
            }
        })), t.default = e, Object.freeze(t)
    }(e);
    const n = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
            parents(e, t) {
                const n = [];
                let i = e.parentNode;
                for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(t) && n.push(i), i = i.parentNode;
                return n
            },
            prev(e, t) {
                let n = e.previousElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next(e, t) {
                let n = e.nextElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }
        },
        i = e => {
            do {
                e += Math.floor(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        o = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), t = n && "#" !== n ? n.trim() : null
            }
            return t
        },
        s = e => {
            const t = o(e);
            return t && document.querySelector(t) ? t : null
        },
        r = e => {
            const t = o(e);
            return t ? document.querySelector(t) : null
        },
        a = e => {
            e.dispatchEvent(new Event("transitionend"))
        },
        l = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        c = e => l(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? n.findOne(e) : null,
        d = (e, t, n) => {
            Object.keys(n).forEach((i => {
                const o = n[i],
                    s = t[i],
                    r = s && l(s) ? "element" : null == (a = s) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                var a;
                if (!new RegExp(o).test(r)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${o}".`)
            }))
        },
        u = e => !(!l(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        p = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
        f = e => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? f(e.parentNode) : null
        },
        h = () => {},
        g = e => e.offsetHeight,
        m = () => {
            const {
                jQuery: e
            } = window;
            return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
        },
        v = [],
        y = () => "rtl" === document.documentElement.dir,
        b = e => {
            var t;
            t = () => {
                const t = m();
                if (t) {
                    const n = e.NAME,
                        i = t.fn[n];
                    t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                }
            }, "loading" === document.readyState ? (v.length || document.addEventListener("DOMContentLoaded", (() => {
                v.forEach((e => e()))
            })), v.push(t)) : t()
        },
        w = e => {
            "function" == typeof e && e()
        },
        x = (e, t, n = !0) => {
            if (!n) return void w(e);
            const i = (e => {
                if (!e) return 0;
                let {
                    transitionDuration: t,
                    transitionDelay: n
                } = window.getComputedStyle(e);
                const i = Number.parseFloat(t),
                    o = Number.parseFloat(n);
                return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
            })(t) + 5;
            let o = !1;
            const s = ({
                target: n
            }) => {
                n === t && (o = !0, t.removeEventListener("transitionend", s), w(e))
            };
            t.addEventListener("transitionend", s), setTimeout((() => {
                o || a(t)
            }), i)
        },
        _ = (e, t, n, i) => {
            let o = e.indexOf(t);
            if (-1 === o) return e[!n && i ? e.length - 1 : 0];
            const s = e.length;
            return o += n ? 1 : -1, i && (o = (o + s) % s), e[Math.max(0, Math.min(o, s - 1))]
        },
        k = /[^.]*(?=\..*)\.|.*/,
        T = /\..*/,
        C = /::\d+$/,
        S = {};
    let E = 1;
    const A = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        O = /^(mouseenter|mouseleave)/i,
        $ = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function j(e, t) {
        return t && `${t}::${E++}` || e.uidEvent || E++
    }

    function L(e) {
        const t = j(e);
        return e.uidEvent = t, S[t] = S[t] || {}, S[t]
    }

    function D(e, t, n = null) {
        const i = Object.keys(e);
        for (let o = 0, s = i.length; o < s; o++) {
            const s = e[i[o]];
            if (s.originalHandler === t && s.delegationSelector === n) return s
        }
        return null
    }

    function N(e, t, n) {
        const i = "string" == typeof t,
            o = i ? n : t;
        let s = M(e);
        return $.has(s) || (s = e), [i, o, s]
    }

    function P(e, t, n, i, o) {
        if ("string" != typeof t || !e) return;
        if (n || (n = i, i = null), O.test(t)) {
            const e = e => function(t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
            };
            i ? i = e(i) : n = e(n)
        }
        const [s, r, a] = N(t, n, i), l = L(e), c = l[a] || (l[a] = {}), d = D(c, r, s ? n : null);
        if (d) return void(d.oneOff = d.oneOff && o);
        const u = j(r, t.replace(k, "")),
            p = s ? function(e, t, n) {
                return function i(o) {
                    const s = e.querySelectorAll(t);
                    for (let {
                            target: r
                        } = o; r && r !== this; r = r.parentNode)
                        for (let a = s.length; a--;)
                            if (s[a] === r) return o.delegateTarget = r, i.oneOff && H.off(e, o.type, t, n), n.apply(r, [o]);
                    return null
                }
            }(e, n, i) : function(e, t) {
                return function n(i) {
                    return i.delegateTarget = e, n.oneOff && H.off(e, i.type, t), t.apply(e, [i])
                }
            }(e, n);
        p.delegationSelector = s ? n : null, p.originalHandler = r, p.oneOff = o, p.uidEvent = u, c[u] = p, e.addEventListener(a, p, s)
    }

    function I(e, t, n, i, o) {
        const s = D(t[n], i, o);
        s && (e.removeEventListener(n, s, Boolean(o)), delete t[n][s.uidEvent])
    }

    function M(e) {
        return e = e.replace(T, ""), A[e] || e
    }
    const H = {
            on(e, t, n, i) {
                P(e, t, n, i, !1)
            },
            one(e, t, n, i) {
                P(e, t, n, i, !0)
            },
            off(e, t, n, i) {
                if ("string" != typeof t || !e) return;
                const [o, s, r] = N(t, n, i), a = r !== t, l = L(e), c = t.startsWith(".");
                if (void 0 !== s) {
                    if (!l || !l[r]) return;
                    return void I(e, l, r, s, o ? n : null)
                }
                c && Object.keys(l).forEach((n => {
                    ! function(e, t, n, i) {
                        const o = t[n] || {};
                        Object.keys(o).forEach((s => {
                            if (s.includes(i)) {
                                const i = o[s];
                                I(e, t, n, i.originalHandler, i.delegationSelector)
                            }
                        }))
                    }(e, l, n, t.slice(1))
                }));
                const d = l[r] || {};
                Object.keys(d).forEach((n => {
                    const i = n.replace(C, "");
                    if (!a || t.includes(i)) {
                        const t = d[n];
                        I(e, l, r, t.originalHandler, t.delegationSelector)
                    }
                }))
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) return null;
                const i = m(),
                    o = M(t),
                    s = t !== o,
                    r = $.has(o);
                let a, l = !0,
                    c = !0,
                    d = !1,
                    u = null;
                return s && i && (a = i.Event(t, n), i(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (u = document.createEvent("HTMLEvents"), u.initEvent(o, l, !0)) : u = new CustomEvent(t, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== n && Object.keys(n).forEach((e => {
                    Object.defineProperty(u, e, {
                        get: () => n[e]
                    })
                })), d && u.preventDefault(), c && e.dispatchEvent(u), u.defaultPrevented && void 0 !== a && a.preventDefault(), u
            }
        },
        z = new Map;
    var q = {
        set(e, t, n) {
            z.has(e) || z.set(e, new Map);
            const i = z.get(e);
            i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (e, t) => z.has(e) && z.get(e).get(t) || null,
        remove(e, t) {
            if (!z.has(e)) return;
            const n = z.get(e);
            n.delete(t), 0 === n.size && z.delete(e)
        }
    };
    class F {
        constructor(e) {
            (e = c(e)) && (this._element = e, q.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            q.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e => {
                this[e] = null
            }))
        }
        _queueCallback(e, t, n = !0) {
            x(e, t, n)
        }
        static getInstance(e) {
            return q.get(e, this.DATA_KEY)
        }
        static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.0.2"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    class W extends F {
        static get NAME() {
            return "alert"
        }
        close(e) {
            const t = e ? this._getRootElement(e) : this._element,
                n = this._triggerCloseEvent(t);
            null === n || n.defaultPrevented || this._removeElement(t)
        }
        _getRootElement(e) {
            return r(e) || e.closest(".alert")
        }
        _triggerCloseEvent(e) {
            return H.trigger(e, "close.bs.alert")
        }
        _removeElement(e) {
            e.classList.remove("show");
            const t = e.classList.contains("fade");
            this._queueCallback((() => this._destroyElement(e)), e, t)
        }
        _destroyElement(e) {
            e.remove(), H.trigger(e, "closed.bs.alert")
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = W.getOrCreateInstance(this);
                "close" === e && t[e](this)
            }))
        }
        static handleDismiss(e) {
            return function(t) {
                t && t.preventDefault(), e.close(this)
            }
        }
    }
    H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W)), b(W);
    class R extends F {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = R.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            }))
        }
    }

    function B(e) {
        return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
    }

    function Q(e) {
        return e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase()))
    }
    H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (e => {
        e.preventDefault();
        const t = e.target.closest('[data-bs-toggle="button"]');
        R.getOrCreateInstance(t).toggle()
    })), b(R);
    const U = {
            setDataAttribute(e, t, n) {
                e.setAttribute("data-bs-" + Q(t), n)
            },
            removeDataAttribute(e, t) {
                e.removeAttribute("data-bs-" + Q(t))
            },
            getDataAttributes(e) {
                if (!e) return {};
                const t = {};
                return Object.keys(e.dataset).filter((e => e.startsWith("bs"))).forEach((n => {
                    let i = n.replace(/^bs/, "");
                    i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = B(e.dataset[n])
                })), t
            },
            getDataAttribute: (e, t) => B(e.getAttribute("data-bs-" + Q(t))),
            offset(e) {
                const t = e.getBoundingClientRect();
                return {
                    top: t.top + document.body.scrollTop,
                    left: t.left + document.body.scrollLeft
                }
            },
            position: e => ({
                top: e.offsetTop,
                left: e.offsetLeft
            })
        },
        X = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        Y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        V = "next",
        K = "prev",
        G = "left",
        Z = "right",
        J = {
            ArrowLeft: Z,
            ArrowRight: G
        };
    class ee extends F {
        constructor(e, t) {
            super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = n.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return X
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(V)
        }
        nextWhenVisible() {
            !document.hidden && u(this._element) && this.next()
        }
        prev() {
            this._slide(K)
        }
        pause(e) {
            e || (this._isPaused = !0), n.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(e) {
            this._activeElement = n.findOne(".active.carousel-item", this._element);
            const t = this._getItemIndex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding) return void H.one(this._element, "slid.bs.carousel", (() => this.to(e)));
            if (t === e) return this.pause(), void this.cycle();
            const i = e > t ? V : K;
            this._slide(i, this._items[e])
        }
        _getConfig(e) {
            return e = { ...X,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, d("carousel", e, Y), e
        }
        _handleSwipe() {
            const e = Math.abs(this.touchDeltaX);
            if (e <= 40) return;
            const t = e / this.touchDeltaX;
            this.touchDeltaX = 0, t && this._slide(t > 0 ? Z : G)
        }
        _addEventListeners() {
            this._config.keyboard && H.on(this._element, "keydown.bs.carousel", (e => this._keydown(e))), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", (e => this.pause(e))), H.on(this._element, "mouseleave.bs.carousel", (e => this.cycle(e)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const e = e => {
                    !this._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX) : this.touchStartX = e.clientX
                },
                t = e => {
                    this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX
                },
                i = e => {
                    !this._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((e => this.cycle(e)), 500 + this._config.interval))
                };
            n.find(".carousel-item img", this._element).forEach((e => {
                H.on(e, "dragstart.bs.carousel", (e => e.preventDefault()))
            })), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", (t => e(t))), H.on(this._element, "pointerup.bs.carousel", (e => i(e))), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", (t => e(t))), H.on(this._element, "touchmove.bs.carousel", (e => t(e))), H.on(this._element, "touchend.bs.carousel", (e => i(e))))
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            const t = J[e.key];
            t && (e.preventDefault(), this._slide(t))
        }
        _getItemIndex(e) {
            return this._items = e && e.parentNode ? n.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
        }
        _getItemByOrder(e, t) {
            const n = e === V;
            return _(this._items, t, n, this._config.wrap)
        }
        _triggerSlideEvent(e, t) {
            const i = this._getItemIndex(e),
                o = this._getItemIndex(n.findOne(".active.carousel-item", this._element));
            return H.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: o,
                to: i
            })
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const t = n.findOne(".active", this._indicatorsElement);
                t.classList.remove("active"), t.removeAttribute("aria-current");
                const i = n.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < i.length; t++)
                    if (Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                        i[t].classList.add("active"), i[t].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || n.findOne(".active.carousel-item", this._element);
            if (!e) return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(e, t) {
            const i = this._directionToOrder(e),
                o = n.findOne(".active.carousel-item", this._element),
                s = this._getItemIndex(o),
                r = t || this._getItemByOrder(i, o),
                a = this._getItemIndex(r),
                l = Boolean(this._interval),
                c = i === V,
                d = c ? "carousel-item-start" : "carousel-item-end",
                u = c ? "carousel-item-next" : "carousel-item-prev",
                p = this._orderToDirection(i);
            if (r && r.classList.contains("active")) return void(this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r, p).defaultPrevented) return;
            if (!o || !r) return;
            this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
            const f = () => {
                H.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: p,
                    from: s,
                    to: a
                })
            };
            if (this._element.classList.contains("slide")) {
                r.classList.add(u), g(r), o.classList.add(d), r.classList.add(d);
                const e = () => {
                    r.classList.remove(d, u), r.classList.add("active"), o.classList.remove("active", u, d), this._isSliding = !1, setTimeout(f, 0)
                };
                this._queueCallback(e, o, !0)
            } else o.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, f();
            l && this.cycle()
        }
        _directionToOrder(e) {
            return [Z, G].includes(e) ? y() ? e === G ? K : V : e === G ? V : K : e
        }
        _orderToDirection(e) {
            return [V, K].includes(e) ? y() ? e === K ? G : Z : e === K ? Z : G : e
        }
        static carouselInterface(e, t) {
            const n = ee.getOrCreateInstance(e, t);
            let {
                _config: i
            } = n;
            "object" == typeof t && (i = { ...i,
                ...t
            });
            const o = "string" == typeof t ? t : i.slide;
            if ("number" == typeof t) n.to(t);
            else if ("string" == typeof o) {
                if (void 0 === n[o]) throw new TypeError(`No method named "${o}"`);
                n[o]()
            } else i.interval && i.ride && (n.pause(), n.cycle())
        }
        static jQueryInterface(e) {
            return this.each((function() {
                ee.carouselInterface(this, e)
            }))
        }
        static dataApiClickHandler(e) {
            const t = r(this);
            if (!t || !t.classList.contains("carousel")) return;
            const n = { ...U.getDataAttributes(t),
                    ...U.getDataAttributes(this)
                },
                i = this.getAttribute("data-bs-slide-to");
            i && (n.interval = !1), ee.carouselInterface(t, n), i && ee.getInstance(t).to(i), e.preventDefault()
        }
    }
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", ee.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", (() => {
        const e = n.find('[data-bs-ride="carousel"]');
        for (let t = 0, n = e.length; t < n; t++) ee.carouselInterface(e[t], ee.getInstance(e[t]))
    })), b(ee);
    const te = {
            toggle: !0,
            parent: ""
        },
        ne = {
            toggle: "boolean",
            parent: "(string|element)"
        };
    class ie extends F {
        constructor(e, t) {
            super(e), this._isTransitioning = !1, this._config = this._getConfig(t), this._triggerArray = n.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const i = n.find('[data-bs-toggle="collapse"]');
            for (let e = 0, t = i.length; e < t; e++) {
                const t = i[e],
                    o = s(t),
                    r = n.find(o).filter((e => e === this._element));
                null !== o && r.length && (this._selector = o, this._triggerArray.push(t))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        static get Default() {
            return te
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show")) return;
            let e, t;
            this._parent && (e = n.find(".show, .collapsing", this._parent).filter((e => "string" == typeof this._config.parent ? e.getAttribute("data-bs-parent") === this._config.parent : e.classList.contains("collapse"))), 0 === e.length && (e = null));
            const i = n.findOne(this._selector);
            if (e) {
                const n = e.find((e => i !== e));
                if (t = n ? ie.getInstance(n) : null, t && t._isTransitioning) return
            }
            if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e && e.forEach((e => {
                i !== e && ie.collapseInterface(e, "hide"), t || q.set(e, "bs.collapse", null)
            }));
            const o = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[o] = 0, this._triggerArray.length && this._triggerArray.forEach((e => {
                e.classList.remove("collapsed"), e.setAttribute("aria-expanded", !0)
            })), this.setTransitioning(!0);
            const s = "scroll" + (o[0].toUpperCase() + o.slice(1));
            this._queueCallback((() => {
                this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[o] = "", this.setTransitioning(!1), H.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[o] = this._element[s] + "px"
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show")) return;
            if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const e = this._getDimension();
            this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", g(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const t = this._triggerArray.length;
            if (t > 0)
                for (let e = 0; e < t; e++) {
                    const t = this._triggerArray[e],
                        n = r(t);
                    n && !n.classList.contains("show") && (t.classList.add("collapsed"), t.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0), this._element.style[e] = "", this._queueCallback((() => {
                this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), H.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }
        setTransitioning(e) {
            this._isTransitioning = e
        }
        _getConfig(e) {
            return (e = { ...te,
                ...e
            }).toggle = Boolean(e.toggle), d("collapse", e, ne), e
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        _getParent() {
            let {
                parent: e
            } = this._config;
            e = c(e);
            const t = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
            return n.find(t, e).forEach((e => {
                const t = r(e);
                this._addAriaAndCollapsedClass(t, [e])
            })), e
        }
        _addAriaAndCollapsedClass(e, t) {
            if (!e || !t.length) return;
            const n = e.classList.contains("show");
            t.forEach((e => {
                n ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", n)
            }))
        }
        static collapseInterface(e, t) {
            let n = ie.getInstance(e);
            const i = { ...te,
                ...U.getDataAttributes(e),
                ..."object" == typeof t && t ? t : {}
            };
            if (!n && i.toggle && "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1), n || (n = new ie(e, i)), "string" == typeof t) {
                if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                n[t]()
            }
        }
        static jQueryInterface(e) {
            return this.each((function() {
                ie.collapseInterface(this, e)
            }))
        }
    }
    H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        const t = U.getDataAttributes(this),
            i = s(this);
        n.find(i).forEach((e => {
            const n = ie.getInstance(e);
            let i;
            n ? (null === n._parent && "string" == typeof t.parent && (n._config.parent = t.parent, n._parent = n._getParent()), i = "toggle") : i = t, ie.collapseInterface(e, i)
        }))
    })), b(ie);
    const oe = new RegExp("ArrowUp|ArrowDown|Escape"),
        se = y() ? "top-end" : "top-start",
        re = y() ? "top-start" : "top-end",
        ae = y() ? "bottom-end" : "bottom-start",
        le = y() ? "bottom-start" : "bottom-end",
        ce = y() ? "left-start" : "right-start",
        de = y() ? "right-start" : "left-start",
        ue = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        pe = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class fe extends F {
        constructor(e, t) {
            super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        static get Default() {
            return ue
        }
        static get DefaultType() {
            return pe
        }
        static get NAME() {
            return "dropdown"
        }
        toggle() {
            p(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
        }
        show() {
            if (p(this._element) || this._menu.classList.contains("show")) return;
            const e = fe.getParentFromElement(this._element),
                n = {
                    relatedTarget: this._element
                };
            if (!H.trigger(this._element, "show.bs.dropdown", n).defaultPrevented) {
                if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let n = this._element;
                    "parent" === this._config.reference ? n = e : l(this._config.reference) ? n = c(this._config.reference) : "object" == typeof this._config.reference && (n = this._config.reference);
                    const i = this._getPopperConfig(),
                        o = i.modifiers.find((e => "applyStyles" === e.name && !1 === e.enabled));
                    this._popper = t.createPopper(n, this._menu, i), o && U.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e => H.on(e, "mouseover", h))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(this._element, "shown.bs.dropdown", n)
            }
        }
        hide() {
            if (p(this._element) || !this._menu.classList.contains("show")) return;
            const e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _addEventListeners() {
            H.on(this._element, "click.bs.dropdown", (e => {
                e.preventDefault(), this.toggle()
            }))
        }
        _completeHide(e) {
            H.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => H.off(e, "mouseover", h))), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", e))
        }
        _getConfig(e) {
            if (e = { ...this.constructor.Default,
                    ...U.getDataAttributes(this._element),
                    ...e
                }, d("dropdown", e, this.constructor.DefaultType), "object" == typeof e.reference && !l(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return e
        }
        _getMenuElement() {
            return n.next(this._element, ".dropdown-menu")[0]
        }
        _getPlacement() {
            const e = this._element.parentNode;
            if (e.classList.contains("dropend")) return ce;
            if (e.classList.contains("dropstart")) return de;
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? re : se : t ? le : ae
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: e,
            target: t
        }) {
            const i = n.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(u);
            i.length && _(i, t, "ArrowDown" === e, !i.includes(t)).focus()
        }
        static dropdownInterface(e, t) {
            const n = fe.getOrCreateInstance(e, t);
            if ("string" == typeof t) {
                if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                n[t]()
            }
        }
        static jQueryInterface(e) {
            return this.each((function() {
                fe.dropdownInterface(this, e)
            }))
        }
        static clearMenus(e) {
            if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
            const t = n.find('[data-bs-toggle="dropdown"]');
            for (let n = 0, i = t.length; n < i; n++) {
                const i = fe.getInstance(t[n]);
                if (!i || !1 === i._config.autoClose) continue;
                if (!i._element.classList.contains("show")) continue;
                const o = {
                    relatedTarget: i._element
                };
                if (e) {
                    const t = e.composedPath(),
                        n = t.includes(i._menu);
                    if (t.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
                    if (i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    "click" === e.type && (o.clickEvent = e)
                }
                i._completeHide(o)
            }
        }
        static getParentFromElement(e) {
            return r(e) || e.parentNode
        }
        static dataApiKeydownHandler(e) {
            if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !oe.test(e.key)) return;
            const t = this.classList.contains("show");
            if (!t && "Escape" === e.key) return;
            if (e.preventDefault(), e.stopPropagation(), p(this)) return;
            const i = () => this.matches('[data-bs-toggle="dropdown"]') ? this : n.prev(this, '[data-bs-toggle="dropdown"]')[0];
            return "Escape" === e.key ? (i().focus(), void fe.clearMenus()) : "ArrowUp" === e.key || "ArrowDown" === e.key ? (t || i().click(), void fe.getInstance(i())._selectMenuItem(e)) : void(t && "Space" !== e.key || fe.clearMenus())
        }
    }
    H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', fe.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", fe.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", fe.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", fe.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(e) {
        e.preventDefault(), fe.dropdownInterface(this)
    })), b(fe);
    class he {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t => t + e)), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (t => t + e)), this._setElementAttributes(".sticky-top", "marginRight", (t => t - e))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, n) {
            const i = this.getWidth();
            this._applyManipulationCallback(e, (e => {
                if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                this._saveInitialAttribute(e, t);
                const o = window.getComputedStyle(e)[t];
                e.style[t] = n(Number.parseFloat(o)) + "px"
            }))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
        }
        _saveInitialAttribute(e, t) {
            const n = e.style[t];
            n && U.setDataAttribute(e, t, n)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e => {
                const n = U.getDataAttribute(e, t);
                void 0 === n ? e.style.removeProperty(t) : (U.removeDataAttribute(e, t), e.style[t] = n)
            }))
        }
        _applyManipulationCallback(e, t) {
            l(e) ? t(e) : n.find(e, this._element).forEach(t)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const ge = {
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        me = {
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        };
    class ve {
        constructor(e) {
            this._config = this._getConfig(e), this._isAppended = !1, this._element = null
        }
        show(e) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && g(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation((() => {
                w(e)
            }))) : w(e)
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation((() => {
                this.dispose(), w(e)
            }))) : w(e)
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = "modal-backdrop", this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
        }
        _getConfig(e) {
            return (e = { ...ge,
                ..."object" == typeof e ? e : {}
            }).rootElement = c(e.rootElement), d("backdrop", e, me), e
        }
        _append() {
            this._isAppended || (this._config.rootElement.appendChild(this._getElement()), H.on(this._getElement(), "mousedown.bs.backdrop", (() => {
                w(this._config.clickCallback)
            })), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (H.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(e) {
            x(e, this._getElement(), this._config.isAnimated)
        }
    }
    const ye = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        be = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        };
    class we extends F {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._dialog = n.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new he
        }
        static get Default() {
            return ye
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || this._isTransitioning || H.trigger(this._element, "show.bs.modal", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (e => this.hide(e))), H.on(this._dialog, "mousedown.dismiss.bs.modal", (() => {
                H.one(this._element, "mouseup.dismiss.bs.modal", (e => {
                    e.target === this._element && (this._ignoreBackdropClick = !0)
                }))
            })), this._showBackdrop((() => this._showElement(e))))
        }
        hide(e) {
            if (e && ["A", "AREA"].includes(e.target.tagName) && e.preventDefault(), !this._isShown || this._isTransitioning) return;
            if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), H.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback((() => this._hideModal()), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach((e => H.off(e, ".bs.modal"))), this._backdrop.dispose(), super.dispose(), H.off(document, "focusin.bs.modal")
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new ve({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _getConfig(e) {
            return e = { ...ye,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, d("modal", e, be), e
        }
        _showElement(e) {
            const t = this._isAnimated(),
                i = n.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), t && g(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback((() => {
                this._config.focus && this._element.focus(), this._isTransitioning = !1, H.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e
                })
            }), this._dialog, t)
        }
        _enforceFocus() {
            H.off(document, "focusin.bs.modal"), H.on(document, "focusin.bs.modal", (e => {
                document === e.target || this._element === e.target || this._element.contains(e.target) || this._element.focus()
            }))
        }
        _setEscapeEvent() {
            this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", (e => {
                this._config.keyboard && "Escape" === e.key ? (e.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== e.key || this._triggerBackdropTransition()
            })) : H.off(this._element, "keydown.dismiss.bs.modal")
        }
        _setResizeEvent() {
            this._isShown ? H.on(window, "resize.bs.modal", (() => this._adjustDialog())) : H.off(window, "resize.bs.modal")
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), H.trigger(this._element, "hidden.bs.modal")
            }))
        }
        _showBackdrop(e) {
            H.on(this._element, "click.dismiss.bs.modal", (e => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            })), this._backdrop.show(e)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const {
                classList: e,
                scrollHeight: t,
                style: n
            } = this._element, i = t > document.documentElement.clientHeight;
            !i && "hidden" === n.overflowY || e.contains("modal-static") || (i || (n.overflowY = "hidden"), e.add("modal-static"), this._queueCallback((() => {
                e.remove("modal-static"), i || this._queueCallback((() => {
                    n.overflowY = ""
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                n = t > 0;
            (!n && e && !y() || n && !e && y()) && (this._element.style.paddingLeft = t + "px"), (n && !e && !y() || !n && e && y()) && (this._element.style.paddingRight = t + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each((function() {
                const n = we.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                    n[e](t)
                }
            }))
        }
    }
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(e) {
        const t = r(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), H.one(t, "show.bs.modal", (e => {
            e.defaultPrevented || H.one(t, "hidden.bs.modal", (() => {
                u(this) && this.focus()
            }))
        })), we.getOrCreateInstance(t).toggle(this)
    })), b(we);
    const xe = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        _e = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class ke extends F {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
        }
        static get NAME() {
            return "offcanvas"
        }
        static get Default() {
            return xe
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new he).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback((() => {
                H.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (H.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback((() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new he).reset(), H.trigger(this._element, "hidden.bs.offcanvas")
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), super.dispose(), H.off(document, "focusin.bs.offcanvas")
        }
        _getConfig(e) {
            return e = { ...xe,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, d("offcanvas", e, _e), e
        }
        _initializeBackDrop() {
            return new ve({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _enforceFocusOnElement(e) {
            H.off(document, "focusin.bs.offcanvas"), H.on(document, "focusin.bs.offcanvas", (t => {
                document === t.target || e === t.target || e.contains(t.target) || e.focus()
            })), e.focus()
        }
        _addEventListeners() {
            H.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', (() => this.hide())), H.on(this._element, "keydown.dismiss.bs.offcanvas", (e => {
                this._config.keyboard && "Escape" === e.key && this.hide()
            }))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = ke.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(e) {
        const t = r(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), p(this)) return;
        H.one(t, "hidden.bs.offcanvas", (() => {
            u(this) && this.focus()
        }));
        const i = n.findOne(".offcanvas.show");
        i && i !== t && ke.getInstance(i).hide(), ke.getOrCreateInstance(t).toggle(this)
    })), H.on(window, "load.bs.offcanvas.data-api", (() => n.find(".offcanvas.show").forEach((e => ke.getOrCreateInstance(e).show())))), b(ke);
    const Te = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        Se = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Ee = (e, t) => {
            const n = e.nodeName.toLowerCase();
            if (t.includes(n)) return !Te.has(n) || Boolean(Ce.test(e.nodeValue) || Se.test(e.nodeValue));
            const i = t.filter((e => e instanceof RegExp));
            for (let e = 0, t = i.length; e < t; e++)
                if (i[e].test(n)) return !0;
            return !1
        };

    function Ae(e, t, n) {
        if (!e.length) return e;
        if (n && "function" == typeof n) return n(e);
        const i = (new window.DOMParser).parseFromString(e, "text/html"),
            o = Object.keys(t),
            s = [].concat(...i.body.querySelectorAll("*"));
        for (let e = 0, n = s.length; e < n; e++) {
            const n = s[e],
                i = n.nodeName.toLowerCase();
            if (!o.includes(i)) {
                n.remove();
                continue
            }
            const r = [].concat(...n.attributes),
                a = [].concat(t["*"] || [], t[i] || []);
            r.forEach((e => {
                Ee(e, a) || n.removeAttribute(e.nodeName)
            }))
        }
        return i.body.innerHTML
    }
    const Oe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        $e = new Set(["sanitize", "allowList", "sanitizeFn"]),
        je = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        Le = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: y() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: y() ? "right" : "left"
        },
        De = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Ne = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        };
    class Pe extends F {
        constructor(e, n) {
            if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(n), this.tip = null, this._setListeners()
        }
        static get Default() {
            return De
        }
        static get NAME() {
            return "tooltip"
        }
        static get Event() {
            return Ne
        }
        static get DefaultType() {
            return je
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(e) {
            if (this._isEnabled)
                if (e) {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const e = H.trigger(this._element, this.constructor.Event.SHOW),
                n = f(this._element),
                o = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
            if (e.defaultPrevented || !o) return;
            const s = this.getTipElement(),
                r = i(this.constructor.NAME);
            s.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this._config.animation && s.classList.add("fade");
            const a = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
                l = this._getAttachment(a);
            this._addAttachmentClass(l);
            const {
                container: c
            } = this._config;
            q.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(s), H.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = t.createPopper(this._element, s, this._getPopperConfig(l)), s.classList.add("show");
            const d = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            d && s.classList.add(...d.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => {
                H.on(e, "mouseover", h)
            }));
            const u = this.tip.classList.contains("fade");
            this._queueCallback((() => {
                const e = this._hoverState;
                this._hoverState = null, H.trigger(this._element, this.constructor.Event.SHOWN), "out" === e && this._leave(null, this)
            }), this.tip, u)
        }
        hide() {
            if (!this._popper) return;
            const e = this.getTipElement();
            if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            e.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => H.off(e, "mouseover", h))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const t = this.tip.classList.contains("fade");
            this._queueCallback((() => {
                this._isWithActiveTrigger() || ("show" !== this._hoverState && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), H.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
            }), this.tip, t), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const e = document.createElement("div");
            return e.innerHTML = this._config.template, this.tip = e.children[0], this.tip
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(n.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show")
        }
        setElementContent(e, t) {
            if (null !== e) return l(t) ? (t = c(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.appendChild(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = Ae(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
        }
        getTitle() {
            let e = this._element.getAttribute("data-bs-original-title");
            return e || (e = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), e
        }
        updateAttachment(e) {
            return "right" === e ? "end" : "left" === e ? "start" : e
        }
        _initializeOnDelegatedTarget(e, t) {
            const n = this.constructor.DATA_KEY;
            return (t = t || q.get(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget, this._getDelegateConfig()), q.set(e.delegateTarget, n, t)), t
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: e => this._handlePopperPlacementChange(e)
                }],
                onFirstUpdate: e => {
                    e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
                }
            };
            return { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _addAttachmentClass(e) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(e))
        }
        _getAttachment(e) {
            return Le[e.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((e => {
                if ("click" === e) H.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e => this.toggle(e)));
                else if ("manual" !== e) {
                    const t = "hover" === e ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        n = "hover" === e ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    H.on(this._element, t, this._config.selector, (e => this._enter(e))), H.on(this._element, n, this._config.selector, (e => this._leave(e)))
                }
            })), this._hideModalHandler = () => {
                this._element && this.hide()
            }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const e = this._element.getAttribute("title"),
                t = typeof this._element.getAttribute("data-bs-original-title");
            (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
        }
        _enter(e, t) {
            t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout((() => {
                "show" === t._hoverState && t.show()
            }), t._config.delay.show) : t.show())
        }
        _leave(e, t) {
            t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout((() => {
                "out" === t._hoverState && t.hide()
            }), t._config.delay.hide) : t.hide())
        }
        _isWithActiveTrigger() {
            for (const e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }
        _getConfig(e) {
            const t = U.getDataAttributes(this._element);
            return Object.keys(t).forEach((e => {
                $e.has(e) && delete t[e]
            })), (e = { ...this.constructor.Default,
                ...t,
                ..."object" == typeof e && e ? e : {}
            }).container = !1 === e.container ? document.body : c(e.container), "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), d("tooltip", e, this.constructor.DefaultType), e.sanitize && (e.template = Ae(e.template, e.allowList, e.sanitizeFn)), e
        }
        _getDelegateConfig() {
            const e = {};
            if (this._config)
                for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e
        }
        _cleanTipClass() {
            const e = this.getTipElement(),
                t = e.getAttribute("class").match(Oe);
            null !== t && t.length > 0 && t.map((e => e.trim())).forEach((t => e.classList.remove(t)))
        }
        _handlePopperPlacementChange(e) {
            const {
                state: t
            } = e;
            t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Pe.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    b(Pe);
    const Ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Me = { ...Pe.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        He = { ...Pe.DefaultType,
            content: "(string|element|function)"
        },
        ze = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class qe extends Pe {
        static get Default() {
            return Me
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return ze
        }
        static get DefaultType() {
            return He
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        getTipElement() {
            return this.tip || (this.tip = super.getTipElement(), this.getTitle() || n.findOne(".popover-header", this.tip).remove(), this._getContent() || n.findOne(".popover-body", this.tip).remove()), this.tip
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(n.findOne(".popover-header", e), this.getTitle());
            let t = this._getContent();
            "function" == typeof t && (t = t.call(this._element)), this.setElementContent(n.findOne(".popover-body", e), t), e.classList.remove("fade", "show")
        }
        _addAttachmentClass(e) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(e))
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content
        }
        _cleanTipClass() {
            const e = this.getTipElement(),
                t = e.getAttribute("class").match(Ie);
            null !== t && t.length > 0 && t.map((e => e.trim())).forEach((t => e.classList.remove(t)))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = qe.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    b(qe);
    const Fe = {
            offset: 10,
            method: "auto",
            target: ""
        },
        We = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        };
    class Re extends F {
        constructor(e, t) {
            super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, H.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
        }
        static get Default() {
            return Fe
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                t = "auto" === this._config.method ? e : this._config.method,
                i = "position" === t ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), n.find(this._selector).map((e => {
                const o = s(e),
                    r = o ? n.findOne(o) : null;
                if (r) {
                    const e = r.getBoundingClientRect();
                    if (e.width || e.height) return [U[t](r).top + i, o]
                }
                return null
            })).filter((e => e)).sort(((e, t) => e[0] - t[0])).forEach((e => {
                this._offsets.push(e[0]), this._targets.push(e[1])
            }))
        }
        dispose() {
            H.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }
        _getConfig(e) {
            if ("string" != typeof(e = { ...Fe,
                    ...U.getDataAttributes(this._element),
                    ..."object" == typeof e && e ? e : {}
                }).target && l(e.target)) {
                let {
                    id: t
                } = e.target;
                t || (t = i("scrollspy"), e.target.id = t), e.target = "#" + t
            }
            return d("scrollspy", e, We), e
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                const e = this._targets[this._targets.length - 1];
                this._activeTarget !== e && this._activate(e)
            } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let t = this._offsets.length; t--;) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
            }
        }
        _activate(e) {
            this._activeTarget = e, this._clear();
            const t = this._selector.split(",").map((t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),
                i = n.findOne(t.join(","));
            i.classList.contains("dropdown-item") ? (n.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), n.parents(i, ".nav, .list-group").forEach((e => {
                n.prev(e, ".nav-link, .list-group-item").forEach((e => e.classList.add("active"))), n.prev(e, ".nav-item").forEach((e => {
                    n.children(e, ".nav-link").forEach((e => e.classList.add("active")))
                }))
            }))), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        _clear() {
            n.find(this._selector).filter((e => e.classList.contains("active"))).forEach((e => e.classList.remove("active")))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Re.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    H.on(window, "load.bs.scrollspy.data-api", (() => {
        n.find('[data-bs-spy="scroll"]').forEach((e => new Re(e)))
    })), b(Re);
    class Be extends F {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
            let e;
            const t = r(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const t = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                e = n.find(t, i), e = e[e.length - 1]
            }
            const o = e ? H.trigger(e, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (H.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== o && o.defaultPrevented) return;
            this._activate(this._element, i);
            const s = () => {
                H.trigger(e, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), H.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: e
                })
            };
            t ? this._activate(t, t.parentNode, s) : s()
        }
        _activate(e, t, i) {
            const o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? n.children(t, ".active") : n.find(":scope > li > .active", t))[0],
                s = i && o && o.classList.contains("fade"),
                r = () => this._transitionComplete(e, o, i);
            o && s ? (o.classList.remove("show"), this._queueCallback(r, e, !0)) : r()
        }
        _transitionComplete(e, t, i) {
            if (t) {
                t.classList.remove("active");
                const e = n.findOne(":scope > .dropdown-menu .active", t.parentNode);
                e && e.classList.remove("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g(e), e.classList.contains("fade") && e.classList.add("show");
            let o = e.parentNode;
            if (o && "LI" === o.nodeName && (o = o.parentNode), o && o.classList.contains("dropdown-menu")) {
                const t = e.closest(".dropdown");
                t && n.find(".dropdown-toggle", t).forEach((e => e.classList.add("active"))), e.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Be.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), p(this) || Be.getOrCreateInstance(this).show()
    })), b(Be);
    const Qe = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Ue = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class Xe extends F {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return Qe
        }
        static get Default() {
            return Ue
        }
        static get NAME() {
            return "toast"
        }
        show() {
            H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), g(this._element), this._element.classList.add("showing"), this._queueCallback((() => {
                this._element.classList.remove("showing"), this._element.classList.add("show"), H.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains("show") && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback((() => {
                this._element.classList.add("hide"), H.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
        }
        _getConfig(e) {
            return e = { ...Ue,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof e && e ? e : {}
            }, d("toast", e, this.constructor.DefaultType), e
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            const n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (() => this.hide())), H.on(this._element, "mouseover.bs.toast", (e => this._onInteraction(e, !0))), H.on(this._element, "mouseout.bs.toast", (e => this._onInteraction(e, !1))), H.on(this._element, "focusin.bs.toast", (e => this._onInteraction(e, !0))), H.on(this._element, "focusout.bs.toast", (e => this._onInteraction(e, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Xe.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    return b(Xe), {
        Alert: W,
        Button: R,
        Carousel: ee,
        Collapse: ie,
        Dropdown: fe,
        Modal: we,
        Offcanvas: ke,
        Popover: qe,
        ScrollSpy: Re,
        Tab: Be,
        Toast: Xe,
        Tooltip: Pe
    }
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], (function(t) {
        return e(t)
    })) : "object" == typeof module && "object" == typeof module.exports ? exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    e.easing.jswing = e.easing.swing;
    var t = Math.pow,
        n = Math.sqrt,
        i = Math.sin,
        o = Math.cos,
        s = Math.PI,
        r = 1.70158,
        a = 1.525 * r,
        l = r + 1,
        c = 2 * s / 3,
        d = 2 * s / 4.5;

    function u(e) {
        var t = 7.5625,
            n = 2.75;
        return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
    }
    e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function(t) {
            return e.easing[e.easing.def](t)
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeOutQuad: function(e) {
            return 1 - (1 - e) * (1 - e)
        },
        easeInOutQuad: function(e) {
            return e < .5 ? 2 * e * e : 1 - t(-2 * e + 2, 2) / 2
        },
        easeInCubic: function(e) {
            return e * e * e
        },
        easeOutCubic: function(e) {
            return 1 - t(1 - e, 3)
        },
        easeInOutCubic: function(e) {
            return e < .5 ? 4 * e * e * e : 1 - t(-2 * e + 2, 3) / 2
        },
        easeInQuart: function(e) {
            return e * e * e * e
        },
        easeOutQuart: function(e) {
            return 1 - t(1 - e, 4)
        },
        easeInOutQuart: function(e) {
            return e < .5 ? 8 * e * e * e * e : 1 - t(-2 * e + 2, 4) / 2
        },
        easeInQuint: function(e) {
            return e * e * e * e * e
        },
        easeOutQuint: function(e) {
            return 1 - t(1 - e, 5)
        },
        easeInOutQuint: function(e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 - t(-2 * e + 2, 5) / 2
        },
        easeInSine: function(e) {
            return 1 - o(e * s / 2)
        },
        easeOutSine: function(e) {
            return i(e * s / 2)
        },
        easeInOutSine: function(e) {
            return -(o(s * e) - 1) / 2
        },
        easeInExpo: function(e) {
            return 0 === e ? 0 : t(2, 10 * e - 10)
        },
        easeOutExpo: function(e) {
            return 1 === e ? 1 : 1 - t(2, -10 * e)
        },
        easeInOutExpo: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? t(2, 20 * e - 10) / 2 : (2 - t(2, -20 * e + 10)) / 2
        },
        easeInCirc: function(e) {
            return 1 - n(1 - t(e, 2))
        },
        easeOutCirc: function(e) {
            return n(1 - t(e - 1, 2))
        },
        easeInOutCirc: function(e) {
            return e < .5 ? (1 - n(1 - t(2 * e, 2))) / 2 : (n(1 - t(-2 * e + 2, 2)) + 1) / 2
        },
        easeInElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : -t(2, 10 * e - 10) * i((10 * e - 10.75) * c)
        },
        easeOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : t(2, -10 * e) * i((10 * e - .75) * c) + 1
        },
        easeInOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -t(2, 20 * e - 10) * i((20 * e - 11.125) * d) / 2 : t(2, -20 * e + 10) * i((20 * e - 11.125) * d) / 2 + 1
        },
        easeInBack: function(e) {
            return l * e * e * e - r * e * e
        },
        easeOutBack: function(e) {
            return 1 + l * t(e - 1, 3) + r * t(e - 1, 2)
        },
        easeInOutBack: function(e) {
            return e < .5 ? t(2 * e, 2) * (7.189819 * e - a) / 2 : (t(2 * e - 2, 2) * ((a + 1) * (2 * e - 2) + a) + 2) / 2
        },
        easeInBounce: function(e) {
            return 1 - u(1 - e)
        },
        easeOutBounce: u,
        easeInOutBounce: function(e) {
            return e < .5 ? (1 - u(1 - 2 * e)) / 2 : (1 + u(2 * e - 1)) / 2
        }
    })
})),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(n, i) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(n), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(n).data("slick") || {}, s.options = e.extend({}, s.defaults, i, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, n) {
            e(n).attr("data-slick-index", t)
        })), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout((function() {
            o.disableTransition(), n.call()
        }), o.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t
    }, t.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each((function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        }))
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, i, o, s, r, a = this;
        if (i = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * r + (t * a.options.slidesPerRow + n);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var i, o, s, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (i in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (o = r.breakpoints[i]) : s > r.breakpoints[i] && (o = r.breakpoints[i]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || n) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, o, s = this,
            r = e(t.currentTarget);
        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case "index":
                var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, n), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n;
        if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            e(this).attr("style", e(this).data("originalStyling"))
        })), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout((function() {
            n.disableTransition(e), t.call()
        }), n.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout((function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }), 0)
        }))
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, i, o, s = this,
            r = 0;
        return s.slideOffset = 0, n = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = n * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * n * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * n), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * n * -1 + r, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (s.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(o, s) {
            if (s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * i.swipeLeft) return t = s, !1
        })), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            n = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter((function(e) {
                return e >= 0 && e < t.slideCount
            }));
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
            var o = i.indexOf(n);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1
            }), -1 !== o && e(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + o
            })
        })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
            var s = i[o];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + s,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        })).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each((function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = e(this).attr("data-srcset"),
                    o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, (function() {
                        i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                            opacity: 1
                        }, 200, (function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        })), s.$slider.trigger("lazyLoaded", [s, t, n])
                    }))
                }, r.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
                }, r.src = n
            }))
        }
        var n, i, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(i, o), "anticipated" === s.options.lazyLoad)
            for (var r = i - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), n = (n = n.add(l.eq(r))).add(l.eq(a)), r--, a++;
        t(n), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o, s, r, a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), s = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            o && (n.attr("srcset", o), s && n.attr("sizes", s)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
        }, r.onerror = function() {
            t < 3 ? setTimeout((function() {
                a.progressiveLazyLoad(t + 1)
            }), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
        }, r.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, n, i, o = this,
            s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            for (t in o.respondTo = o.options.respondTo || "window", s)
                if (i = o.breakpoints.length - 1, s.hasOwnProperty(t)) {
                    for (n = s[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = s[t].settings
                }
            o.breakpoints.sort((function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            }))
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }), 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each((function(i, o) {
            t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        })), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, i, o, s, r = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[i] = o;
        else if ("multiple" === s) e.each(i, (function(e, t) {
            r.options[e] = t
        }));
        else if ("responsive" === s)
            for (n in o)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[n]];
                else {
                    for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[n].breakpoint && r.options.responsive.splice(t, 1), t--;
                    r.options.responsive.push(o[n])
                }
        a && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, s = this;
        if (n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, n.slice(i - t + 1 + r, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                e(this).attr("id", "")
            }))
        }
    }, t.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, o, s, r, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(r, (function() {
                c.postSlide(i)
            })) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(r, (function() {
            c.postSlide(i)
        })) : c.postSlide(i));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(s), c.fadeSlide(o, (function() {
                c.postSlide(o)
            }))) : c.postSlide(o), void c.animateHeight();
            !0 !== n ? c.animateSlide(l, (function() {
                c.postSlide(o)
            })) : c.postSlide(o)
        }
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, o, s, r, a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, n, i = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = i.length;
        for (e = 0; e < r; e++)
            if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, s), void 0 !== n) return n;
        return i
    }
})),
function(e) {
    "use strict";
    e.fn.meanmenu = function(t) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "991",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: "",
            siteLogo: "<a href='index.html'>Site Logo</a>"
        };
        t = e.extend(n, t);
        var i = window.innerWidth || document.documentElement.clientWidth;
        return this.each((function() {
            var e = t.meanMenuTarget,
                n = t.meanMenuContainer,
                o = t.meanMenuClose,
                s = t.meanMenuCloseSize,
                r = t.meanMenuOpen,
                a = t.meanRevealPosition,
                l = t.meanRevealPositionDistance,
                c = t.meanRevealColour,
                d = t.meanScreenWidth,
                u = t.meanNavPush,
                p = ".meanmenu-reveal",
                f = t.meanShowChildren,
                h = t.meanExpandableChildren,
                g = t.meanExpand,
                m = t.meanContract,
                v = t.meanRemoveAttrs,
                y = t.onePage,
                b = t.meanDisplay,
                w = t.removeElements,
                x = t.siteLogo,
                _ = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (_ = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var k = "",
                T = function() {
                    if ("center" === a) {
                        var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                        k = "left:" + e + ";right:auto;", _ ? jQuery(".meanmenu-reveal").animate({
                            left: e
                        }) : jQuery(".meanmenu-reveal").css("left", e)
                    }
                },
                C = !1,
                S = !1;
            "right" === a && (k = "right:" + l + ";left:auto;"), "left" === a && (k = "left:" + l + ";right:auto;"), T();
            var E = "",
                A = function() {
                    E.html(jQuery(E).is(".meanmenu-reveal.meanclose") ? o : r)
                },
                O = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(n).removeClass("mean-container"), jQuery(e).css("display", b), C = !1, S = !1, jQuery(w).removeClass("mean-remove")
                },
                $ = function() {
                    var t = "background:" + c + ";color:" + c + ";" + k;
                    if (d >= i) {
                        jQuery(w).addClass("mean-remove"), S = !0, jQuery(n).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar">' + x + '<a href="#nav" class="meanmenu-reveal" style="' + t + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var o = jQuery(e).html();
                        jQuery(".mean-nav").html(o), v && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each((function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        })), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", u), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(p).html(r), E = jQuery(p), jQuery(".mean-nav ul").hide(), f ? h ? (jQuery(".mean-nav ul ul").each((function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + s + '">' + g + "</a>")
                        })), jQuery(".mean-expand").on("click", (function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(g), jQuery(this).prev("ul").slideUp(300, (function() {}))) : (jQuery(this).text(m), jQuery(this).prev("ul").slideDown(300, (function() {}))), jQuery(this).toggleClass("mean-clicked")
                        }))) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), E.removeClass("meanclose"), jQuery(E).click((function(e) {
                            e.preventDefault(), !1 === C ? (E.css("text-align", "center"), E.css("text-indent", "0"), E.css("font-size", s), jQuery(".mean-nav ul:first").slideDown(), C = !0) : (jQuery(".mean-nav ul:first").slideUp(), C = !1), E.toggleClass("meanclose"), A(), jQuery(w).addClass("mean-remove")
                        })), y && jQuery(".mean-nav ul > li > a:first-child").on("click", (function() {
                            jQuery(".mean-nav ul:first").slideUp(), C = !1, jQuery(E).toggleClass("meanclose").html(r)
                        }))
                    } else O()
                };
            _ || jQuery(window).resize((function() {
                i = window.innerWidth || document.documentElement.clientWidth, O(), d >= i ? ($(), T()) : O()
            })), jQuery(window).resize((function() {
                i = window.innerWidth || document.documentElement.clientWidth, _ ? (T(), d >= i ? !1 === S && $() : O()) : (O(), d >= i && ($(), T()))
            })), $()
        }))
    }
}(jQuery),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).fitvids = e()
    }
}((function() {
    return function e(t, n, i) {
        function o(r, a) {
            if (!n[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = n[r] = {
                    exports: {}
                };
                t[r][0].call(d.exports, (function(e) {
                    var n = t[r][1][e];
                    return o(n || e)
                }), d, d.exports, e, t, n, i)
            }
            return n[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
        return o
    }({
        1: [function(e, t, n) {
            var i = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object"],
                o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";

            function s(e, t) {
                return "string" == typeof e && (t = e, e = document), Array.prototype.slice.call(e.querySelectorAll(t))
            }

            function r(e) {
                return "string" == typeof e ? e.split(",").map(l).filter(a) : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }(e) ? function(e) {
                    return [].concat.apply([], e)
                }(e.map(r).filter(a)) : e || []
            }

            function a(e) {
                return e.length > 0
            }

            function l(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            t.exports = function(e, t) {
                var n;
                t = t || {}, n = e = e || "body", "[object Object]" === Object.prototype.toString.call(n) && (t = e, e = "body"), t.ignore = t.ignore || "", t.players = t.players || "";
                var l = s(e);
                if (a(l)) {
                    var c;
                    if (!document.getElementById("fit-vids-style"))(document.head || document.getElementsByTagName("head")[0]).appendChild(((c = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", c.childNodes[1]));
                    var d = r(t.players),
                        u = r(t.ignore),
                        p = u.length > 0 ? u.join() : null,
                        f = i.concat(d).join();
                    a(f) && l.forEach((function(e) {
                        s(e, f).forEach((function(e) {
                            p && e.matches(p) || function(e) {
                                if (/fluid-width-video-wrapper/.test(e.parentNode.className)) return;
                                var t = parseInt(e.getAttribute("width"), 10),
                                    n = parseInt(e.getAttribute("height"), 10),
                                    i = isNaN(t) ? e.clientWidth : t,
                                    o = (isNaN(n) ? e.clientHeight : n) / i;
                                e.removeAttribute("width"), e.removeAttribute("height");
                                var s = document.createElement("div");
                                e.parentNode.insertBefore(s, e), s.className = "fluid-width-video-wrapper", s.style.paddingTop = 100 * o + "%", s.appendChild(e)
                            }(e)
                        }))
                    }))
                }
            }
        }, {}]
    }, {}, [1])(1)
})),
function(e) {
    var t = function(e, t, n) {
        "use strict";
        var i, o;
        if (function() {
                var t, n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    fastLoadedClass: "ls-is-cached",
                    iframeLoadMode: 0,
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (t in o = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in o || (o[t] = n[t])
            }(), !t || !t.getElementsByClassName) return {
            init: function() {},
            cfg: o,
            noSupport: !0
        };
        var s = t.documentElement,
            r = e.HTMLPictureElement,
            a = "addEventListener",
            l = "getAttribute",
            c = e[a].bind(e),
            d = e.setTimeout,
            u = e.requestAnimationFrame || d,
            p = e.requestIdleCallback,
            f = /^picture$/i,
            h = ["load", "error", "lazyincluded", "_lazyloaded"],
            g = {},
            m = Array.prototype.forEach,
            v = function(e, t) {
                return g[t] || (g[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), g[t].test(e[l]("class") || "") && g[t]
            },
            y = function(e, t) {
                v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
            },
            b = function(e, t) {
                var n;
                (n = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
            },
            w = function(e, t, n) {
                var i = n ? a : "removeEventListener";
                n && w(e, t), h.forEach((function(n) {
                    e[i](n, t)
                }))
            },
            x = function(e, n, o, s, r) {
                var a = t.createEvent("Event");
                return o || (o = {}), o.instance = i, a.initEvent(n, !s, !r), a.detail = o, e.dispatchEvent(a), a
            },
            _ = function(t, n) {
                var i;
                !r && (i = e.picturefill || o.pf) ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src), i({
                    reevaluate: !0,
                    elements: [t]
                })) : n && n.src && (t.src = n.src)
            },
            k = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            T = function(e, t, n) {
                for (n = n || e.offsetWidth; n < o.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            },
            C = function() {
                var e, n, i = [],
                    o = [],
                    s = i,
                    r = function() {
                        var t = s;
                        for (s = i.length ? o : i, e = !0, n = !1; t.length;) t.shift()();
                        e = !1
                    },
                    a = function(i, o) {
                        e && !o ? i.apply(this, arguments) : (s.push(i), n || (n = !0, (t.hidden ? d : u)(r)))
                    };
                return a._lsFlush = r, a
            }(),
            S = function(e, t) {
                return t ? function() {
                    C(e)
                } : function() {
                    var t = this,
                        n = arguments;
                    C((function() {
                        e.apply(t, n)
                    }))
                }
            },
            E = function(e) {
                var t, i = 0,
                    s = o.throttleDelay,
                    r = o.ricTimeout,
                    a = function() {
                        t = !1, i = n.now(), e()
                    },
                    l = p && r > 49 ? function() {
                        p(a, {
                            timeout: r
                        }), r !== o.ricTimeout && (r = o.ricTimeout)
                    } : S((function() {
                        d(a)
                    }), !0);
                return function(e) {
                    var o;
                    (e = !0 === e) && (r = 33), t || (t = !0, (o = s - (n.now() - i)) < 0 && (o = 0), e || o < 9 ? l() : d(l, o))
                }
            },
            A = function(e) {
                var t, i, o = function() {
                        t = null, e()
                    },
                    s = function() {
                        var e = n.now() - i;
                        e < 99 ? d(s, 99 - e) : (p || o)(o)
                    };
                return function() {
                    i = n.now(), t || (t = d(s, 99))
                }
            },
            O = function() {
                var r, p, h, g, T, O, j, L, D, N, P, I, M = /^img$/i,
                    H = /^iframe$/i,
                    z = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                    q = 0,
                    F = 0,
                    W = -1,
                    R = function(e) {
                        F--, (!e || F < 0 || !e.target) && (F = 0)
                    },
                    B = function(e) {
                        return null == I && (I = "hidden" == k(t.body, "visibility")), I || !("hidden" == k(e.parentNode, "visibility") && "hidden" == k(e, "visibility"))
                    },
                    Q = function(e, n) {
                        var i, o = e,
                            r = B(e);
                        for (L -= n, P += n, D -= n, N += n; r && (o = o.offsetParent) && o != t.body && o != s;)(r = (k(o, "opacity") || 1) > 0) && "visible" != k(o, "overflow") && (i = o.getBoundingClientRect(), r = N > i.left && D < i.right && P > i.top - 1 && L < i.bottom + 1);
                        return r
                    },
                    U = function() {
                        var e, n, a, c, d, u, f, h, m, v, y, b, w = i.elements;
                        if ((g = o.loadMode) && F < 8 && (e = w.length)) {
                            for (n = 0, W++; n < e; n++)
                                if (w[n] && !w[n]._lazyRace)
                                    if (!z || i.prematureUnveil && i.prematureUnveil(w[n])) J(w[n]);
                                    else if ((h = w[n][l]("data-expand")) && (u = 1 * h) || (u = q), v || (v = !o.expand || o.expand < 1 ? s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370 : o.expand, i._defEx = v, y = v * o.expFactor, b = o.hFac, I = null, q < y && F < 1 && W > 2 && g > 2 && !t.hidden ? (q = y, W = 0) : q = g > 1 && W > 1 && F < 6 ? v : 0), m !== u && (O = innerWidth + u * b, j = innerHeight + u, f = -1 * u, m = u), a = w[n].getBoundingClientRect(), (P = a.bottom) >= f && (L = a.top) <= j && (N = a.right) >= f * b && (D = a.left) <= O && (P || N || D || L) && (o.loadHidden || B(w[n])) && (p && F < 3 && !h && (g < 3 || W < 4) || Q(w[n], u))) {
                                if (J(w[n]), d = !0, F > 9) break
                            } else !d && p && !c && F < 4 && W < 4 && g > 2 && (r[0] || o.preloadAfterLoad) && (r[0] || !h && (P || N || D || L || "auto" != w[n][l](o.sizesAttr))) && (c = r[0] || w[n]);
                            c && !d && J(c)
                        }
                    },
                    X = E(U),
                    Y = function(e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (R(e), y(t, o.loadedClass), b(t, o.loadingClass), w(t, K), x(t, "lazyloaded"))
                    },
                    V = S(Y),
                    K = function(e) {
                        V({
                            target: e.target
                        })
                    },
                    G = function(e) {
                        var t, n = e[l](o.srcsetAttr);
                        (t = o.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                    },
                    Z = S((function(e, t, n, i, s) {
                        var r, a, c, u, p, g;
                        (p = x(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? y(e, o.autosizesClass) : e.setAttribute("sizes", i)), a = e[l](o.srcsetAttr), r = e[l](o.srcAttr), s && (u = (c = e.parentNode) && f.test(c.nodeName || "")), g = t.firesLoad || "src" in e && (a || r || u), p = {
                            target: e
                        }, y(e, o.loadingClass), g && (clearTimeout(h), h = d(R, 2500), w(e, K, !0)), u && m.call(c.getElementsByTagName("source"), G), a ? e.setAttribute("srcset", a) : r && !u && (H.test(e.nodeName) ? function(e, t) {
                            var n = e.getAttribute("data-load-mode") || o.iframeLoadMode;
                            0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t)
                        }(e, r) : e.src = r), s && (a || u) && _(e, {
                            src: r
                        })), e._lazyRace && delete e._lazyRace, b(e, o.lazyClass), C((function() {
                            var t = e.complete && e.naturalWidth > 1;
                            g && !t || (t && y(e, o.fastLoadedClass), Y(p), e._lazyCache = !0, d((function() {
                                "_lazyCache" in e && delete e._lazyCache
                            }), 9)), "lazy" == e.loading && F--
                        }), !0)
                    })),
                    J = function(e) {
                        if (!e._lazyRace) {
                            var t, n = M.test(e.nodeName),
                                i = n && (e[l](o.sizesAttr) || e[l]("sizes")),
                                s = "auto" == i;
                            (!s && p || !n || !e[l]("src") && !e.srcset || e.complete || v(e, o.errorClass) || !v(e, o.lazyClass)) && (t = x(e, "lazyunveilread").detail, s && $.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, F++, Z(e, t, s, i, n))
                        }
                    },
                    ee = A((function() {
                        o.loadMode = 3, X()
                    })),
                    te = function() {
                        3 == o.loadMode && (o.loadMode = 2), ee()
                    },
                    ne = function() {
                        p || (n.now() - T < 999 ? d(ne, 999) : (p = !0, o.loadMode = 3, X(), c("scroll", te, !0)))
                    };
                return {
                    _: function() {
                        T = n.now(), i.elements = t.getElementsByClassName(o.lazyClass), r = t.getElementsByClassName(o.lazyClass + " " + o.preloadClass), c("scroll", X, !0), c("resize", X, !0), c("pageshow", (function(e) {
                            if (e.persisted) {
                                var n = t.querySelectorAll("." + o.loadingClass);
                                n.length && n.forEach && u((function() {
                                    n.forEach((function(e) {
                                        e.complete && J(e)
                                    }))
                                }))
                            }
                        })), e.MutationObserver ? new MutationObserver(X).observe(s, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (s[a]("DOMNodeInserted", X, !0), s[a]("DOMAttrModified", X, !0), setInterval(X, 999)), c("hashchange", X, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                            t[a](e, X, !0)
                        })), /d$|^c/.test(t.readyState) ? ne() : (c("load", ne), t[a]("DOMContentLoaded", X), d(ne, 2e4)), i.elements.length ? (U(), C._lsFlush()) : X()
                    },
                    checkElems: X,
                    unveil: J,
                    _aLSL: te
                }
            }(),
            $ = function() {
                var e, n = S((function(e, t, n, i) {
                        var o, s, r;
                        if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), f.test(t.nodeName || ""))
                            for (s = 0, r = (o = t.getElementsByTagName("source")).length; s < r; s++) o[s].setAttribute("sizes", i);
                        n.detail.dataAttr || _(e, n.detail)
                    })),
                    i = function(e, t, i) {
                        var o, s = e.parentNode;
                        s && (i = T(e, s, i), (o = x(e, "lazybeforesizes", {
                            width: i,
                            dataAttr: !!t
                        })).defaultPrevented || (i = o.detail.width) && i !== e._lazysizesWidth && n(e, s, o, i))
                    },
                    s = A((function() {
                        var t, n = e.length;
                        if (n)
                            for (t = 0; t < n; t++) i(e[t])
                    }));
                return {
                    _: function() {
                        e = t.getElementsByClassName(o.autosizesClass), c("resize", s)
                    },
                    checkElems: s,
                    updateElem: i
                }
            }(),
            j = function() {
                !j.i && t.getElementsByClassName && (j.i = !0, $._(), O._())
            };
        return d((function() {
            o.init && j()
        })), i = {
            cfg: o,
            autoSizer: $,
            loader: O,
            init: j,
            uP: _,
            aC: y,
            rC: b,
            hC: v,
            fire: x,
            gW: T,
            rAF: C
        }
    }(e, e.document, Date);
    e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function(e) {
        var t = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            i = {},
            o = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(t) {
                        return t instanceof s ? new s(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++n
                        }), e.__id
                    },
                    clone: function e(t, n) {
                        var i, s;
                        switch (n = n || {}, o.util.type(t)) {
                            case "Object":
                                if (s = o.util.objId(t), n[s]) return n[s];
                                for (var r in i = {}, n[s] = i, t) t.hasOwnProperty(r) && (i[r] = e(t[r], n));
                                return i;
                            case "Array":
                                return s = o.util.objId(t), n[s] ? n[s] : (i = [], n[s] = i, t.forEach((function(t, o) {
                                    i[o] = e(t, n)
                                })), i);
                            default:
                                return t
                        }
                    },
                    getLanguage: function(e) {
                        for (; e && !t.test(e.className);) e = e.parentElement;
                        return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none"
                    },
                    currentScript: function() {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (i) {
                            var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(i.stack) || [])[1];
                            if (e) {
                                var t = document.getElementsByTagName("script");
                                for (var n in t)
                                    if (t[n].src == e) return t[n]
                            }
                            return null
                        }
                    },
                    isActive: function(e, t, n) {
                        for (var i = "no-" + t; e;) {
                            var o = e.classList;
                            if (o.contains(t)) return !0;
                            if (o.contains(i)) return !1;
                            e = e.parentElement
                        }
                        return !!n
                    }
                },
                languages: {
                    plain: i,
                    plaintext: i,
                    text: i,
                    txt: i,
                    extend: function(e, t) {
                        var n = o.util.clone(o.languages[e]);
                        for (var i in t) n[i] = t[i];
                        return n
                    },
                    insertBefore: function(e, t, n, i) {
                        var s = (i = i || o.languages)[e],
                            r = {};
                        for (var a in s)
                            if (s.hasOwnProperty(a)) {
                                if (a == t)
                                    for (var l in n) n.hasOwnProperty(l) && (r[l] = n[l]);
                                n.hasOwnProperty(a) || (r[a] = s[a])
                            }
                        var c = i[e];
                        return i[e] = r, o.languages.DFS(o.languages, (function(t, n) {
                            n === c && t != e && (this[t] = r)
                        })), r
                    },
                    DFS: function e(t, n, i, s) {
                        s = s || {};
                        var r = o.util.objId;
                        for (var a in t)
                            if (t.hasOwnProperty(a)) {
                                n.call(t, a, t[a], i || a);
                                var l = t[a],
                                    c = o.util.type(l);
                                "Object" !== c || s[r(l)] ? "Array" !== c || s[r(l)] || (s[r(l)] = !0, e(l, n, a, s)) : (s[r(l)] = !0, e(l, n, null, s))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    o.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, n) {
                    var i = {
                        callback: n,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    o.hooks.run("before-highlightall", i), i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)), o.hooks.run("before-all-elements-highlight", i);
                    for (var s, r = 0; s = i.elements[r++];) o.highlightElement(s, !0 === t, i.callback)
                },
                highlightElement: function(n, i, s) {
                    var r = o.util.getLanguage(n),
                        a = o.languages[r];
                    n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + r;
                    var l = n.parentElement;
                    l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + r);
                    var c = {
                        element: n,
                        language: r,
                        grammar: a,
                        code: n.textContent
                    };

                    function d(e) {
                        c.highlightedCode = e, o.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o.hooks.run("after-highlight", c), o.hooks.run("complete", c), s && s.call(c.element)
                    }
                    if (o.hooks.run("before-sanity-check", c), (l = c.element.parentElement) && "pre" === l.nodeName.toLowerCase() && !l.hasAttribute("tabindex") && l.setAttribute("tabindex", "0"), !c.code) return o.hooks.run("complete", c), void(s && s.call(c.element));
                    if (o.hooks.run("before-highlight", c), c.grammar)
                        if (i && e.Worker) {
                            var u = new Worker(o.filename);
                            u.onmessage = function(e) {
                                d(e.data)
                            }, u.postMessage(JSON.stringify({
                                language: c.language,
                                code: c.code,
                                immediateClose: !0
                            }))
                        } else d(o.highlight(c.code, c.grammar, c.language));
                    else d(o.util.encode(c.code))
                },
                highlight: function(e, t, n) {
                    var i = {
                        code: e,
                        grammar: t,
                        language: n
                    };
                    return o.hooks.run("before-tokenize", i), i.tokens = o.tokenize(i.code, i.grammar), o.hooks.run("after-tokenize", i), s.stringify(o.util.encode(i.tokens), i.language)
                },
                tokenize: function(e, t) {
                    var n = t.rest;
                    if (n) {
                        for (var i in n) t[i] = n[i];
                        delete t.rest
                    }
                    var o = new l;
                    return c(o, o.head, e), a(e, o, t, o.head, 0),
                        function(e) {
                            var t = [],
                                n = e.head.next;
                            for (; n !== e.tail;) t.push(n.value), n = n.next;
                            return t
                        }(o)
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var n = o.hooks.all;
                        n[e] = n[e] || [], n[e].push(t)
                    },
                    run: function(e, t) {
                        var n = o.hooks.all[e];
                        if (n && n.length)
                            for (var i, s = 0; i = n[s++];) i(t)
                    }
                },
                Token: s
            };

        function s(e, t, n, i) {
            this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length
        }

        function r(e, t, n, i) {
            e.lastIndex = t;
            var o = e.exec(n);
            if (o && i && o[1]) {
                var s = o[1].length;
                o.index += s, o[0] = o[0].slice(s)
            }
            return o
        }

        function a(e, t, n, i, l, u) {
            for (var p in n)
                if (n.hasOwnProperty(p) && n[p]) {
                    var f = n[p];
                    f = Array.isArray(f) ? f : [f];
                    for (var h = 0; h < f.length; ++h) {
                        if (u && u.cause == p + "," + h) return;
                        var g = f[h],
                            m = g.inside,
                            v = !!g.lookbehind,
                            y = !!g.greedy,
                            b = g.alias;
                        if (y && !g.pattern.global) {
                            var w = g.pattern.toString().match(/[imsuy]*$/)[0];
                            g.pattern = RegExp(g.pattern.source, w + "g")
                        }
                        for (var x = g.pattern || g, _ = i.next, k = l; _ !== t.tail && !(u && k >= u.reach); k += _.value.length, _ = _.next) {
                            var T = _.value;
                            if (t.length > e.length) return;
                            if (!(T instanceof s)) {
                                var C, S = 1;
                                if (y) {
                                    if (!(C = r(x, k, e, v))) break;
                                    var E = C.index,
                                        A = C.index + C[0].length,
                                        O = k;
                                    for (O += _.value.length; E >= O;) O += (_ = _.next).value.length;
                                    if (k = O -= _.value.length, _.value instanceof s) continue;
                                    for (var $ = _; $ !== t.tail && (O < A || "string" == typeof $.value); $ = $.next) S++, O += $.value.length;
                                    S--, T = e.slice(k, O), C.index -= k
                                } else if (!(C = r(x, 0, T, v))) continue;
                                E = C.index;
                                var j = C[0],
                                    L = T.slice(0, E),
                                    D = T.slice(E + j.length),
                                    N = k + T.length;
                                u && N > u.reach && (u.reach = N);
                                var P = _.prev;
                                if (L && (P = c(t, P, L), k += L.length), d(t, P, S), _ = c(t, P, new s(p, m ? o.tokenize(j, m) : j, b, j)), D && c(t, _, D), S > 1) {
                                    var I = {
                                        cause: p + "," + h,
                                        reach: N
                                    };
                                    a(e, t, n, _.prev, k, I), u && I.reach > u.reach && (u.reach = I.reach)
                                }
                            }
                        }
                    }
                }
        }

        function l() {
            var e = {
                    value: null,
                    prev: null,
                    next: null
                },
                t = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = t, this.head = e, this.tail = t, this.length = 0
        }

        function c(e, t, n) {
            var i = t.next,
                o = {
                    value: n,
                    prev: t,
                    next: i
                };
            return t.next = o, i.prev = o, e.length++, o
        }

        function d(e, t, n) {
            for (var i = t.next, o = 0; o < n && i !== e.tail; o++) i = i.next;
            t.next = i, i.prev = t, e.length -= o
        }
        if (e.Prism = o, s.stringify = function e(t, n) {
                if ("string" == typeof t) return t;
                if (Array.isArray(t)) {
                    var i = "";
                    return t.forEach((function(t) {
                        i += e(t, n)
                    })), i
                }
                var s = {
                        type: t.type,
                        content: e(t.content, n),
                        tag: "span",
                        classes: ["token", t.type],
                        attributes: {},
                        language: n
                    },
                    r = t.alias;
                r && (Array.isArray(r) ? Array.prototype.push.apply(s.classes, r) : s.classes.push(r)), o.hooks.run("wrap", s);
                var a = "";
                for (var l in s.attributes) a += " " + l + '="' + (s.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + a + ">" + s.content + "</" + s.tag + ">"
            }, !e.document) return e.addEventListener ? (o.disableWorkerMessageHandler || e.addEventListener("message", (function(t) {
            var n = JSON.parse(t.data),
                i = n.language,
                s = n.code,
                r = n.immediateClose;
            e.postMessage(o.highlight(s, o.languages[i], i)), r && e.close()
        }), !1), o) : o;
        var u = o.util.currentScript();

        function p() {
            o.manual || o.highlightAll()
        }
        if (u && (o.filename = u.src, u.hasAttribute("data-manual") && (o.manual = !0)), !o.manual) {
            var f = document.readyState;
            "loading" === f || "interactive" === f && u && u.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16)
        }
        return o
    }(_self);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
                "internal-subset": {
                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: !0
                },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/,
                name: /[^\s<>'"]+/
            }
        },
        cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "special-attr": [],
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: [{
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
        }, /&#x?[\da-f]{1,8};/i]
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", (function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    })), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function(e, t) {
            var n = {};
            n["language-" + t] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[t]
            }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var i = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: n
                }
            };
            i["language-" + t] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[t]
            };
            var o = {};
            o[e] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                    return e
                })), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: i
            }, Prism.languages.insertBefore("markup", "cdata", o)
        }
    }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function(e, t) {
            Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [t, "language-" + t],
                                inside: Prism.languages[t]
                            },
                            punctuation: [{
                                pattern: /^=/,
                                alias: "attr-equals"
                            }, /"|'/]
                        }
                    }
                }
            })
        }
    }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml,
    function(e) {
        var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: !0,
                        alias: "selector"
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: !0
                    }
                }
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp("^" + t.source + "$"),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                lookbehind: !0
            },
            string: {
                pattern: t,
                greedy: !0
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: !0
            },
            punctuation: /[(){};:,]/
        }, e.languages.css.atrule.inside.rest = e.languages.css;
        var n = e.languages.markup;
        n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
    }(Prism), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [Prism.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Prism.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: !0,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript,
    function() {
        if (void 0 !== Prism && "undefined" != typeof document) {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
            var e = {
                    js: "javascript",
                    py: "python",
                    rb: "ruby",
                    ps1: "powershell",
                    psm1: "powershell",
                    sh: "bash",
                    bat: "batch",
                    h: "c",
                    tex: "latex"
                },
                t = "data-src-status",
                n = "loading",
                i = "loaded",
                o = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
                s = /\blang(?:uage)?-([\w-]+)\b/i;
            Prism.hooks.add("before-highlightall", (function(e) {
                e.selector += ", " + o
            })), Prism.hooks.add("before-sanity-check", (function(s) {
                var r = s.element;
                if (r.matches(o)) {
                    s.code = "", r.setAttribute(t, n);
                    var l = r.appendChild(document.createElement("CODE"));
                    l.textContent = "Loadingâ€¦";
                    var c = r.getAttribute("data-src"),
                        d = s.language;
                    if ("none" === d) {
                        var u = (/\.(\w+)$/.exec(c) || [, "none"])[1];
                        d = e[u] || u
                    }
                    a(l, d), a(r, d);
                    var p = Prism.plugins.autoloader;
                    p && p.loadLanguages(d);
                    var f = new XMLHttpRequest;
                    f.open("GET", c, !0), f.onreadystatechange = function() {
                        var e, n;
                        4 == f.readyState && (f.status < 400 && f.responseText ? (r.setAttribute(t, i), l.textContent = f.responseText, Prism.highlightElement(l)) : (r.setAttribute(t, "failed"), f.status >= 400 ? l.textContent = (e = f.status, n = f.statusText, "âœ– Error " + e + " while fetching file: " + n) : l.textContent = "âœ– Error: File does not exist or is empty"))
                    }, f.send(null)
                }
            })), Prism.plugins.fileHighlight = {
                highlight: function(e) {
                    for (var t, n = (e || document).querySelectorAll(o), i = 0; t = n[i++];) Prism.highlightElement(t)
                }
            };
            var r = !1;
            Prism.fileHighlight = function() {
                r || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), r = !0), Prism.plugins.fileHighlight.highlight.apply(this, arguments)
            }
        }

        function a(e, t) {
            var n = e.className;
            n = n.replace(s, " ") + " language-" + t, e.className = n.replace(/\s+/g, " ").trim()
        }
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.lightbox = t(e.jQuery)
    }(this, (function(e) {
        function t(t) {
            this.album = [], this.currentImageIndex = void 0, this.init(), this.options = e.extend({}, this.constructor.defaults), this.option(t)
        }
        return t.defaults = {
            albumLabel: "Image %1 of %2",
            alwaysShowNavOnTouchDevices: !1,
            fadeDuration: 600,
            fitImagesInViewport: !0,
            imageFadeDuration: 600,
            positionFromTop: 50,
            resizeDuration: 700,
            showImageNumberLabel: !0,
            wrapAround: !1,
            disableScrolling: !1,
            sanitizeTitle: !1
        }, t.prototype.option = function(t) {
            e.extend(this.options, t)
        }, t.prototype.imageCountLabel = function(e, t) {
            return this.options.albumLabel.replace(/%1/g, e).replace(/%2/g, t)
        }, t.prototype.init = function() {
            var t = this;
            e(document).ready((function() {
                t.enable(), t.build()
            }))
        }, t.prototype.enable = function() {
            var t = this;
            e("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", (function(n) {
                return t.start(e(n.currentTarget)), !1
            }))
        }, t.prototype.build = function() {
            if (!(e("#lightbox").length > 0)) {
                var t = this;
                e('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(e("body")), this.$lightbox = e("#lightbox"), this.$overlay = e("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = {
                    top: parseInt(this.$container.css("padding-top"), 10),
                    right: parseInt(this.$container.css("padding-right"), 10),
                    bottom: parseInt(this.$container.css("padding-bottom"), 10),
                    left: parseInt(this.$container.css("padding-left"), 10)
                }, this.imageBorderWidth = {
                    top: parseInt(this.$image.css("border-top-width"), 10),
                    right: parseInt(this.$image.css("border-right-width"), 10),
                    bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                    left: parseInt(this.$image.css("border-left-width"), 10)
                }, this.$overlay.hide().on("click", (function() {
                    return t.end(), !1
                })), this.$lightbox.hide().on("click", (function(n) {
                    "lightbox" === e(n.target).attr("id") && t.end()
                })), this.$outerContainer.on("click", (function(n) {
                    return "lightbox" === e(n.target).attr("id") && t.end(), !1
                })), this.$lightbox.find(".lb-prev").on("click", (function() {
                    return 0 === t.currentImageIndex ? t.changeImage(t.album.length - 1) : t.changeImage(t.currentImageIndex - 1), !1
                })), this.$lightbox.find(".lb-next").on("click", (function() {
                    return t.currentImageIndex === t.album.length - 1 ? t.changeImage(0) : t.changeImage(t.currentImageIndex + 1), !1
                })), this.$nav.on("mousedown", (function(e) {
                    3 === e.which && (t.$nav.css("pointer-events", "none"), t.$lightbox.one("contextmenu", (function() {
                        setTimeout(function() {
                            this.$nav.css("pointer-events", "auto")
                        }.bind(t), 0)
                    })))
                })), this.$lightbox.find(".lb-loader, .lb-close").on("click", (function() {
                    return t.end(), !1
                }))
            }
        }, t.prototype.start = function(t) {
            function n(e) {
                i.album.push({
                    alt: e.attr("data-alt"),
                    link: e.attr("href"),
                    title: e.attr("data-title") || e.attr("title")
                })
            }
            var i = this,
                o = e(window);
            o.on("resize", e.proxy(this.sizeOverlay, this)), this.sizeOverlay(), this.album = [];
            var s, r = 0,
                a = t.attr("data-lightbox");
            if (a) {
                s = e(t.prop("tagName") + '[data-lightbox="' + a + '"]');
                for (var l = 0; l < s.length; l = ++l) n(e(s[l])), s[l] === t[0] && (r = l)
            } else if ("lightbox" === t.attr("rel")) n(t);
            else {
                s = e(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
                for (var c = 0; c < s.length; c = ++c) n(e(s[c])), s[c] === t[0] && (r = c)
            }
            var d = o.scrollTop() + this.options.positionFromTop,
                u = o.scrollLeft();
            this.$lightbox.css({
                top: d + "px",
                left: u + "px"
            }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && e("body").addClass("lb-disable-scrolling"), this.changeImage(r)
        }, t.prototype.changeImage = function(t) {
            var n = this,
                i = this.album[t].link,
                o = i.split(".").slice(-1)[0],
                s = this.$lightbox.find(".lb-image");
            this.disableKeyboardNav(), this.$overlay.fadeIn(this.options.fadeDuration), e(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
            var r = new Image;
            r.onload = function() {
                var a, l, c, d, u, p;
                s.attr({
                    alt: n.album[t].alt,
                    src: i
                }), e(r), s.width(r.width), s.height(r.height), p = e(window).width(), u = e(window).height(), d = p - n.containerPadding.left - n.containerPadding.right - n.imageBorderWidth.left - n.imageBorderWidth.right - 20, c = u - n.containerPadding.top - n.containerPadding.bottom - n.imageBorderWidth.top - n.imageBorderWidth.bottom - n.options.positionFromTop - 70, "svg" === o && (s.width(d), s.height(c)), n.options.fitImagesInViewport ? (n.options.maxWidth && n.options.maxWidth < d && (d = n.options.maxWidth), n.options.maxHeight && n.options.maxHeight < c && (c = n.options.maxHeight)) : (d = n.options.maxWidth || r.width || d, c = n.options.maxHeight || r.height || c), (r.width > d || r.height > c) && (r.width / d > r.height / c ? (l = d, a = parseInt(r.height / (r.width / l), 10), s.width(l), s.height(a)) : (a = c, l = parseInt(r.width / (r.height / a), 10), s.width(l), s.height(a))), n.sizeContainer(s.width(), s.height())
            }, r.src = this.album[t].link, this.currentImageIndex = t
        }, t.prototype.sizeOverlay = function() {
            var t = this;
            setTimeout((function() {
                t.$overlay.width(e(document).width()).height(e(document).height())
            }), 0)
        }, t.prototype.sizeContainer = function(e, t) {
            function n() {
                i.$lightbox.find(".lb-dataContainer").width(r), i.$lightbox.find(".lb-prevLink").height(a), i.$lightbox.find(".lb-nextLink").height(a), i.$overlay.focus(), i.showImage()
            }
            var i = this,
                o = this.$outerContainer.outerWidth(),
                s = this.$outerContainer.outerHeight(),
                r = e + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
                a = t + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
            o !== r || s !== a ? this.$outerContainer.animate({
                width: r,
                height: a
            }, this.options.resizeDuration, "swing", (function() {
                n()
            })) : n()
        }, t.prototype.showImage = function() {
            this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
        }, t.prototype.updateNav = function() {
            var e = !1;
            try {
                document.createEvent("TouchEvent"), e = !!this.options.alwaysShowNavOnTouchDevices
            } catch (e) {}
            this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), e && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), e && this.$lightbox.find(".lb-next").css("opacity", "1"))))
        }, t.prototype.updateDetails = function() {
            var e = this;
            if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
                var t = this.$lightbox.find(".lb-caption");
                this.options.sanitizeTitle ? t.text(this.album[this.currentImageIndex].title) : t.html(this.album[this.currentImageIndex].title), t.fadeIn("fast")
            }
            if (this.album.length > 1 && this.options.showImageNumberLabel) {
                var n = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
                this.$lightbox.find(".lb-number").text(n).fadeIn("fast")
            } else this.$lightbox.find(".lb-number").hide();
            this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, (function() {
                return e.sizeOverlay()
            }))
        }, t.prototype.preloadNeighboringImages = function() {
            this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link), this.currentImageIndex > 0 && ((new Image).src = this.album[this.currentImageIndex - 1].link)
        }, t.prototype.enableKeyboardNav = function() {
            this.$lightbox.on("keyup.keyboard", e.proxy(this.keyboardAction, this)), this.$overlay.on("keyup.keyboard", e.proxy(this.keyboardAction, this))
        }, t.prototype.disableKeyboardNav = function() {
            this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard")
        }, t.prototype.keyboardAction = function(e) {
            var t = e.keyCode;
            27 === t ? (e.stopPropagation(), this.end()) : 37 === t ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : 39 === t && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
        }, t.prototype.end = function() {
            this.disableKeyboardNav(), e(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), this.options.disableScrolling && e("body").removeClass("lb-disable-scrolling")
        }, new t
    })),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
    }(this, (function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var o = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "dist/", t(0)
        }([function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                s = (i(n(1)), n(6)),
                r = i(s),
                a = i(n(7)),
                l = i(n(8)),
                c = i(n(9)),
                d = i(n(10)),
                u = i(n(11)),
                p = i(n(14)),
                f = [],
                h = !1,
                g = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e && (h = !0), h) return f = (0, u.default)(f, g), (0, d.default)(f, g.once), f
                },
                v = function() {
                    f = (0, p.default)(), m()
                };
            e.exports = {
                init: function(e) {
                    g = o(g, e), f = (0, p.default)();
                    var t = document.all && !window.atob;
                    return function(e) {
                        return !0 === e || "mobile" === e && c.default.mobile() || "phone" === e && c.default.phone() || "tablet" === e && c.default.tablet() || "function" == typeof e && !0 === e()
                    }(g.disable) || t ? void f.forEach((function(e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                    })) : (g.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? m(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, (function() {
                        m(!0)
                    })) : document.addEventListener(g.startEvent, (function() {
                        m(!0)
                    })), window.addEventListener("resize", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("scroll", (0, r.default)((function() {
                        (0, d.default)(f, g.once)
                    }), g.throttleDelay)), g.disableMutationObserver || l.default.ready("[data-aos]", v), f)
                },
                refresh: m,
                refreshHard: v
            }
        }, function(e, t) {}, , , , , function(e, t) {
            (function(t) {
                "use strict";

                function n(e, t, n) {
                    function o(t) {
                        var n = p,
                            i = f;
                        return p = f = void 0, y = t, g = e.apply(i, n)
                    }

                    function r(e) {
                        return y = e, m = setTimeout(c, t), _ ? o(e) : g
                    }

                    function l(e) {
                        var n = e - v;
                        return void 0 === v || n >= t || n < 0 || k && e - y >= h
                    }

                    function c() {
                        var e = x();
                        return l(e) ? d(e) : void(m = setTimeout(c, function(e) {
                            var n = t - (e - v);
                            return k ? w(n, h - (e - y)) : n
                        }(e)))
                    }

                    function d(e) {
                        return m = void 0, T && p ? o(e) : (p = f = void 0, g)
                    }

                    function u() {
                        var e = x(),
                            n = l(e);
                        if (p = arguments, f = this, v = e, n) {
                            if (void 0 === m) return r(v);
                            if (k) return m = setTimeout(c, t), o(v)
                        }
                        return void 0 === m && (m = setTimeout(c, t)), g
                    }
                    var p, f, h, g, m, v, y = 0,
                        _ = !1,
                        k = !1,
                        T = !0;
                    if ("function" != typeof e) throw new TypeError(a);
                    return t = s(t) || 0, i(n) && (_ = !!n.leading, h = (k = "maxWait" in n) ? b(s(n.maxWait) || 0, t) : h, T = "trailing" in n ? !!n.trailing : T), u.cancel = function() {
                        void 0 !== m && clearTimeout(m), y = 0, p = v = f = m = void 0
                    }, u.flush = function() {
                        return void 0 === m ? g : d(x())
                    }, u
                }

                function i(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return !!e && ("object" == t || "function" == t)
                }

                function o(e) {
                    return "symbol" == (void 0 === e ? "undefined" : r(e)) || function(e) {
                        return !!e && "object" == (void 0 === e ? "undefined" : r(e))
                    }(e) && y.call(e) == c
                }

                function s(e) {
                    if ("number" == typeof e) return e;
                    if (o(e)) return l;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || f.test(e) ? h(e.slice(2), n ? 2 : 8) : u.test(e) ? l : +e
                }
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    a = "Expected a function",
                    l = NaN,
                    c = "[object Symbol]",
                    d = /^\s+|\s+$/g,
                    u = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    f = /^0o[0-7]+$/i,
                    h = parseInt,
                    g = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                    m = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                    v = g || m || Function("return this")(),
                    y = Object.prototype.toString,
                    b = Math.max,
                    w = Math.min,
                    x = function() {
                        return v.Date.now()
                    };
                e.exports = function(e, t, o) {
                    var s = !0,
                        r = !0;
                    if ("function" != typeof e) throw new TypeError(a);
                    return i(o) && (s = "leading" in o ? !!o.leading : s, r = "trailing" in o ? !!o.trailing : r), n(e, t, {
                        leading: s,
                        maxWait: t,
                        trailing: r
                    })
                }
            }).call(t, function() {
                return this
            }())
        }, function(e, t) {
            (function(t) {
                "use strict";

                function n(e) {
                    var t = void 0 === e ? "undefined" : s(e);
                    return !!e && ("object" == t || "function" == t)
                }

                function i(e) {
                    return "symbol" == (void 0 === e ? "undefined" : s(e)) || function(e) {
                        return !!e && "object" == (void 0 === e ? "undefined" : s(e))
                    }(e) && v.call(e) == l
                }

                function o(e) {
                    if ("number" == typeof e) return e;
                    if (i(e)) return a;
                    if (n(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = n(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(c, "");
                    var o = u.test(e);
                    return o || p.test(e) ? f(e.slice(2), o ? 2 : 8) : d.test(e) ? a : +e
                }
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    r = "Expected a function",
                    a = NaN,
                    l = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    d = /^[-+]0x[0-9a-f]+$/i,
                    u = /^0b[01]+$/i,
                    p = /^0o[0-7]+$/i,
                    f = parseInt,
                    h = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                    g = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                    m = h || g || Function("return this")(),
                    v = Object.prototype.toString,
                    y = Math.max,
                    b = Math.min,
                    w = function() {
                        return m.Date.now()
                    };
                e.exports = function(e, t, i) {
                    function s(t) {
                        var n = p,
                            i = f;
                        return p = f = void 0, x = t, g = e.apply(i, n)
                    }

                    function a(e) {
                        return x = e, m = setTimeout(c, t), _ ? s(e) : g
                    }

                    function l(e) {
                        var n = e - v;
                        return void 0 === v || n >= t || n < 0 || k && e - x >= h
                    }

                    function c() {
                        var e = w();
                        return l(e) ? d(e) : void(m = setTimeout(c, function(e) {
                            var n = t - (e - v);
                            return k ? b(n, h - (e - x)) : n
                        }(e)))
                    }

                    function d(e) {
                        return m = void 0, T && p ? s(e) : (p = f = void 0, g)
                    }

                    function u() {
                        var e = w(),
                            n = l(e);
                        if (p = arguments, f = this, v = e, n) {
                            if (void 0 === m) return a(v);
                            if (k) return m = setTimeout(c, t), s(v)
                        }
                        return void 0 === m && (m = setTimeout(c, t)), g
                    }
                    var p, f, h, g, m, v, x = 0,
                        _ = !1,
                        k = !1,
                        T = !0;
                    if ("function" != typeof e) throw new TypeError(r);
                    return t = o(t) || 0, n(i) && (_ = !!i.leading, h = (k = "maxWait" in i) ? y(o(i.maxWait) || 0, t) : h, T = "trailing" in i ? !!i.trailing : T), u.cancel = function() {
                        void 0 !== m && clearTimeout(m), x = 0, p = v = f = m = void 0
                    }, u.flush = function() {
                        return void 0 === m ? g : d(w())
                    }, u
                }
            }).call(t, function() {
                return this
            }())
        }, function(e, t) {
            "use strict";

            function n(e) {
                var t = void 0,
                    i = void 0;
                for (t = 0; t < e.length; t += 1) {
                    if ((i = e[t]).dataset && i.dataset.aos) return !0;
                    if (i.children && n(i.children)) return !0
                }
                return !1
            }

            function i() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function o(e) {
                e && e.forEach((function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes),
                        i = Array.prototype.slice.call(e.removedNodes);
                    if (n(t.concat(i))) return s()
                }))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {};
            t.default = {
                isSupported: function() {
                    return !!i()
                },
                ready: function(e, t) {
                    var n = window.document,
                        r = new(i())(o);
                    s = t, r.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }
            }
        }, function(e, t) {
            "use strict";

            function n() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return i(e, [{
                        key: "phone",
                        value: function() {
                            var e = n();
                            return !(!o.test(e) && !s.test(e.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var e = n();
                            return !(!r.test(e) && !a.test(e.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), e
                }();
            t.default = new l
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e, t) {
                var n = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach((function(e, o) {
                    ! function(e, t, n) {
                        var i = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || !n && "true" !== i) && e.node.classList.remove("aos-animate")
                    }(e, i + n, t)
                }))
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(12));
            t.default = function(e, t) {
                return e.forEach((function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, i.default)(e.node, t.offset)
                })), e
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(13));
            t.default = function(e, t) {
                var n = 0,
                    o = 0,
                    s = window.innerHeight,
                    r = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (r.offset && !isNaN(r.offset) && (o = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), n = (0, i.default)(e).top, r.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += s / 2;
                        break;
                    case "bottom-center":
                        n += s / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += s / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += s;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + s;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + s
                }
                return r.anchorPlacement || r.offset || isNaN(t) || (o = t), n + o
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                }
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                    return {
                        node: e
                    }
                }))
            }
        }])
    })),
    
    function(e) {
        "use strict";
        var t;
        e(window).on("scroll", (function() {
            e(this).scrollTop() > 210 ? e(".header-navbar-bottom").addClass("fixed") : e(".header-navbar-bottom").removeClass("fixed")
        })), e(window).on("load", (function() {
            e(".preloader").fadeOut(1e3)
        })), e("#main_nav").meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: ".themeix-menu-selector",
            meanMenuOpen: "<span></span><span></span><span></span>",
            meanMenuClose: "<span></span><span></span><span></span>",
            siteLogo: "<a class='navbar-mobile' href='index.html'><img src='https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/e2cd2/assets/images/header-brand.png' alt='images'></a>"
        }), AOS.init({
            offset: 120,
            delay: 0,
            duration: 1e3,
            easing: "ease",
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom"
        }), (t = e(window)).on("scroll", (function() {
            t.scrollTop() >= 500 ? e(".footer-back").addClass("show") : e(".footer-back").removeClass("show")
        })), e(".footer-back").on("click", (function() {
            e("html, body").animate({
                scrollTop: 0
            }, 500, "easeOutCubic")
        }));
        [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e) {
            return new bootstrap.Tooltip(e)
        }));
        AOS.init({
            duration: 800,
            once: !0
        }), e("#spanYear").html((new Date).getFullYear())
    }(jQuery);;