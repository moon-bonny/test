!function (a) { "use strict"; function k(a, b, c, d) { var e = b && b.prototype instanceof r ? b : r, f = Object.create(e.prototype), g = new E(d || []); return f._invoke = A(a, c, g), f } function l(a, b, c) { try { return { type: "normal", arg: a.call(b, c) } } catch (d) { return { type: "throw", arg: d } } } function r() { } function s() { } function t() { } function y(a) { ["next", "throw", "return"].forEach(function (b) { a[b] = function (a) { return this._invoke(b, a) } }) } function z(a) { function b(d, e, f, g) { var i, j, h = l(a[d], a, e); return "throw" !== h.type ? (i = h.arg, j = i.value, j && "object" == typeof j && c.call(j, "__await") ? Promise.resolve(j.__await).then(function (a) { b("next", a, f, g) }, function (a) { b("throw", a, f, g) }) : Promise.resolve(j).then(function (a) { i.value = a, f(i) }, g)) : (g(h.arg), void 0) } function e(a, c) { function e() { return new Promise(function (d, e) { b(a, c, d, e) }) } return d = d ? d.then(e, e) : e() } var d; this._invoke = e } function A(a, b, c) { var d = m; return function (e, f) { var g, h, i; if (d === o) throw new Error("Generator is already running"); if (d === p) { if ("throw" === e) throw f; return G() } for (c.method = e, c.arg = f; ;) { if (g = c.delegate, g && (h = B(g, c))) { if (h === q) continue; return h } if ("next" === c.method) c.sent = c._sent = c.arg; else if ("throw" === c.method) { if (d === m) throw d = p, c.arg; c.dispatchException(c.arg) } else "return" === c.method && c.abrupt("return", c.arg); if (d = o, i = l(a, b, c), "normal" === i.type) { if (d = c.done ? p : n, i.arg === q) continue; return { value: i.arg, done: c.done } } "throw" === i.type && (d = p, c.method = "throw", c.arg = i.arg) } } } function B(a, b) { var e, f, c = a.iterator[b.method]; if (c === d) { if (b.delegate = null, "throw" === b.method) { if (a.iterator.return && (b.method = "return", b.arg = d, B(a, b), "throw" === b.method)) return q; b.method = "throw", b.arg = new TypeError("The iterator does not provide a 'throw' method") } return q } return e = l(c, a.iterator, b.arg), "throw" === e.type ? (b.method = "throw", b.arg = e.arg, b.delegate = null, q) : (f = e.arg) ? f.done ? (b[a.resultName] = f.value, b.next = a.nextLoc, "return" !== b.method && (b.method = "next", b.arg = d), b.delegate = null, q) : f : (b.method = "throw", b.arg = new TypeError("iterator result is not an object"), b.delegate = null, q) } function C(a) { var b = { tryLoc: a[0] }; 1 in a && (b.catchLoc = a[1]), 2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]), this.tryEntries.push(b) } function D(a) { var b = a.completion || {}; b.type = "normal", delete b.arg, a.completion = b } function E(a) { this.tryEntries = [{ tryLoc: "root" }], a.forEach(C, this), this.reset(!0) } function F(a) { var b, e, g; if (a) { if (b = a[f]) return b.call(a); if ("function" == typeof a.next) return a; if (!isNaN(a.length)) return e = -1, g = function h() { for (; ++e < a.length;)if (c.call(a, e)) return h.value = a[e], h.done = !1, h; return h.value = d, h.done = !0, h }, g.next = g } return { next: G } } function G() { return { value: d, done: !0 } } var d, m, n, o, p, q, u, v, w, x, b = Object.prototype, c = b.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {}, f = e.iterator || "@@iterator", g = e.asyncIterator || "@@asyncIterator", h = e.toStringTag || "@@toStringTag", i = "object" == typeof module, j = a.regeneratorRuntime; return j ? (i && (module.exports = j), void 0) : (j = a.regeneratorRuntime = i ? module.exports : {}, j.wrap = k, m = "suspendedStart", n = "suspendedYield", o = "executing", p = "completed", q = {}, u = {}, u[f] = function () { return this }, v = Object.getPrototypeOf, w = v && v(v(F([]))), w && w !== b && c.call(w, f) && (u = w), x = t.prototype = r.prototype = Object.create(u), s.prototype = x.constructor = t, t.constructor = s, t[h] = s.displayName = "GeneratorFunction", j.isGeneratorFunction = function (a) { var b = "function" == typeof a && a.constructor; return b ? b === s || "GeneratorFunction" === (b.displayName || b.name) : !1 }, j.mark = function (a) { return Object.setPrototypeOf ? Object.setPrototypeOf(a, t) : (a.__proto__ = t, h in a || (a[h] = "GeneratorFunction")), a.prototype = Object.create(x), a }, j.awrap = function (a) { return { __await: a } }, y(z.prototype), z.prototype[g] = function () { return this }, j.AsyncIterator = z, j.async = function (a, b, c, d) { var e = new z(k(a, b, c, d)); return j.isGeneratorFunction(b) ? e : e.next().then(function (a) { return a.done ? a.value : e.next() }) }, y(x), x[h] = "Generator", x[f] = function () { return this }, x.toString = function () { return "[object Generator]" }, j.keys = function (a) { var c, b = []; for (c in a) b.push(c); return b.reverse(), function d() { for (; b.length;) { var c = b.pop(); if (c in a) return d.value = c, d.done = !1, d } return d.done = !0, d } }, j.values = F, E.prototype = { constructor: E, reset: function (a) { if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(D), !a) for (var b in this) "t" === b.charAt(0) && c.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = d) }, stop: function () { var a, b; if (this.done = !0, a = this.tryEntries[0], b = a.completion, "throw" === b.type) throw b.arg; return this.rval }, dispatchException: function (a) { function e(c, e) { return h.type = "throw", h.arg = a, b.next = c, e && (b.method = "next", b.arg = d), !!e } var b, f, g, h, i, j; if (this.done) throw a; for (b = this, f = this.tryEntries.length - 1; f >= 0; --f) { if (g = this.tryEntries[f], h = g.completion, "root" === g.tryLoc) return e("end"); if (g.tryLoc <= this.prev) if (i = c.call(g, "catchLoc"), j = c.call(g, "finallyLoc"), i && j) { if (this.prev < g.catchLoc) return e(g.catchLoc, !0); if (this.prev < g.finallyLoc) return e(g.finallyLoc) } else if (i) { if (this.prev < g.catchLoc) return e(g.catchLoc, !0) } else { if (!j) throw new Error("try statement without catch or finally"); if (this.prev < g.finallyLoc) return e(g.finallyLoc) } } }, abrupt: function (a, b) { var d, e, f, g; for (d = this.tryEntries.length - 1; d >= 0; --d)if (e = this.tryEntries[d], e.tryLoc <= this.prev && c.call(e, "finallyLoc") && this.prev < e.finallyLoc) { f = e; break } return f && ("break" === a || "continue" === a) && f.tryLoc <= b && b <= f.finallyLoc && (f = null), g = f ? f.completion : {}, g.type = a, g.arg = b, f ? (this.method = "next", this.next = f.finallyLoc, q) : this.complete(g) }, complete: function (a, b) { if ("throw" === a.type) throw a.arg; return "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = this.arg = a.arg, this.method = "return", this.next = "end") : "normal" === a.type && b && (this.next = b), q }, finish: function (a) { var b, c; for (b = this.tryEntries.length - 1; b >= 0; --b)if (c = this.tryEntries[b], c.finallyLoc === a) return this.complete(c.completion, c.afterLoc), D(c), q }, "catch": function (a) { var b, c, d, e; for (b = this.tryEntries.length - 1; b >= 0; --b)if (c = this.tryEntries[b], c.tryLoc === a) return d = c.completion, "throw" === d.type && (e = d.arg, D(c)), e; throw new Error("illegal catch attempt") }, delegateYield: function (a, b, c) { return this.delegate = { iterator: F(a), resultName: b, nextLoc: c }, "next" === this.method && (this.arg = d), q } }, void 0) }(function () { return this }() || Function("return this")());