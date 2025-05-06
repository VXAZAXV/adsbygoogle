/*
Category: Advertising
Analyzed & Deobfuscated By: VXAZ
*/
(function (sttc) {
  'use strict';

  var unsignedMaxSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
  var unsignedMinSafeInteger = BigInt(Number.MIN_SAFE_INTEGER);
  var navUserAgent = self.navigator && self.navigator.userAgent;
  var sharedObject = {};
  var emptyObject = {};
  var da = {};
  var ea = {};
  function fa(a, b, c) {
    if (!c || a != null) {
      c = ea[b];
      if (c == null) {
        return a[b];
      }
      c = a[c];
      return c !== undefined ? c : a[b];
    }
  }
  function ha(a, b, c) {
    if (b) {
      a: {
        var d = a.split(".");
        a = d.length === 1;
        var e = d[0];
        var f;
        if (!a && e in da) {
          f = da;
        } else {
          f = globalThis;
        }
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) {
            break a;
          }
          f = f[g];
        }
        d = d[d.length - 1];
        c = true && c === "es6" ? f[d] : null;
        b = b(c);
        if (b != null) {
          if (a) {
            Object.defineProperty(da, d, {
              configurable: true,
              writable: true,
              value: b
            });
          } else if (b !== c) {
            if (ea[d] === undefined) {
              a = Math.random() * 1E9 >>> 0;
              ea[d] = globalThis.Symbol(d);
            }
            Object.defineProperty(f, ea[d], {
              configurable: true,
              writable: true,
              value: b
            });
          }
        }
      }
    }
  }
  ha("Symbol.dispose", function (a) {
    return a ? a : Symbol("Symbol.dispose");
  }, "es_next");

  /* 
  Copyright The Closure Library Authors. 
  SPDX-License-Identifier: Apache-2.0 
  */

  function ka(a) {
    var b = typeof a;
    return b == "object" && a != null || b == "function";
  }
  function la(a) {
    return Object.prototype.hasOwnProperty.call(a, ma) && a[ma] || (a[ma] = ++na);
  }
  var ma = "closure_uid_" + (Math.random() * 1E9 >>> 0);
  var na = 0;
  function oa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function pa(a, b, c) {
    if (!a) {
      throw Error();
    }
    if (arguments.length > 2) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function qa(a, b, c) {
    qa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? oa : pa;
    return qa.apply(null, arguments);
  }
  function ra(a, b, c) {
    a = a.split(".");
    c = c || self;
    for (var d; a.length && (d = a.shift());) {
      if (a.length || b === undefined) {
        if (c[d] && c[d] !== Object.prototype[d]) {
          c = c[d];
        } else {
          c = c[d] = {};
        }
      } else {
        c[d] = b;
      }
    }
  }
  function sa(a) {
    self.setTimeout(() => {
      throw a;
    }, 0);
  }
  function parseString_ExtractInt(a, b) {
    let c = 0;
    a = /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(String(a))[1].split(".");
    b = /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(String(b))[1].split(".");
    const d = Math.max(a.length, b.length);
    for (let g = 0; c == 0 && g < d; g++) {
      var e = a[g] || "";
      var f = b[g] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (e[0].length == 0 && f[0].length == 0) {
          break;
        }
        c = ((e[1].length == 0 ? 0 : parseInt(e[1], 10)) < (f[1].length == 0 ? 0 : parseInt(f[1], 10)) ? -1 : (e[1].length == 0 ? 0 : parseInt(e[1], 10)) > (f[1].length == 0 ? 0 : parseInt(f[1], 10)) ? 1 : 0) || ((e[2].length == 0) < (f[2].length == 0) ? -1 : (e[2].length == 0) > (f[2].length == 0) ? 1 : 0) || (e[2] < f[2] ? -1 : e[2] > f[2] ? 1 : 0);
        e = e[3];
        f = f[3];
      } while (c == 0);
    }
    return c;
  }
  //  var xa = self.CLOSURE_FLAGS || null;
  //  var ya = xa && xa[610401301];
  //  var wa = ya != null ? ya : false;

  function  findMemberPosition(a) {
    const b = {};
    a.forEach(c => {
      b[c[0]] = c[1];
    });
    return c => b[c.find(d => d in b)] || "";
  }
  function auditNavUA() {
    var a = navUserAgent;
    if (navUserAgent.indexOf("Trident") != -1 || navUserAgent.indexOf("MSIE") != -1) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) {
        a = b[1];
      } else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1]) {
          a = /Trident\/(\d.\d)/.exec(a);
          if (c[1] == "7.0") {
            if (a && a[1]) {
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            } else {
              b = "7.0";
            }
          } else {
            b = c[1];
          }
        }
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    let d;
    for (; d = c.exec(a);) {
      b.push([d[1], d[2], d[3] || undefined]);
    }
    a =  findMemberPosition(b);
    return navUserAgent.indexOf("Opera") != -1 ? a(["Version", "Opera"]) : navUserAgent.indexOf("Edge") != -1 ? a(["Edge"]) : navUserAgent.indexOf("Edg/") != -1 ? a(["Edg"]) : navUserAgent.indexOf("Silk") != -1 ? a(["Silk"]) : (navUserAgent.indexOf("Chrome") != -1 || navUserAgent.indexOf("CriOS") != -1) && !(navUserAgent.indexOf("Edge") != -1) || navUserAgent.indexOf("Silk") != -1 ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || "";
  }
  function Ia(a, b) {
    if (typeof a === "string") {
      return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    }
    for (let c = 0; c < a.length; c++) {
      if (c in a && a[c] === b) {
        return c;
      }
    }
    return -1;
  }
  function Ja(a, b) {
    const c = a.length;
    const d = [];
    let e = 0;
    const f = typeof a === "string" ? a.split("") : a;
    for (let g = 0; g < c; g++) {
      if (g in f) {
        const h = f[g];
        if (b.call(undefined, h, g, a)) {
          d[e++] = h;
        }
      }
    }
    return d;
  }
  function Ka(a, b) {
    const c = a.length;
    const d = Array(c);
    const e = typeof a === "string" ? a.split("") : a;
    for (let f = 0; f < c; f++) {
      if (f in e) {
        d[f] = b.call(undefined, e[f], f, a);
      }
    }
    return d;
  }
  function La(a, b) {
    const c = a.length;
    const d = typeof a === "string" ? a.split("") : a;
    for (let e = 0; e < c; e++) {
      if (e in d && b.call(undefined, d[e], e, a)) {
        return true;
      }
    }
    return false;
  }
  function Ma(a, b) {
    a: {
      var c = a.length;
      const d = typeof a === "string" ? a.split("") : a;
      for (--c; c >= 0; c--) {
        if (c in d && b.call(undefined, d[c], c, a)) {
          b = c;
          break a;
        }
      }
      b = -1;
    }
    return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b];
  }
  function Oa(a) {
    const b = a.length;
    if (b > 0) {
      const c = Array(b);
      for (let d = 0; d < b; d++) {
        c[d] = a[d];
      }
      return c;
    }
    return [];
  }
  // Computed Character Order List
  var Qa = {
    "0": 52,
    "1": 53,
    "2": 54,
    "3": 55,
    "4": 56,
    "5": 57,
    "6": 58,
    "7": 59,
    "8": 60,
    "9": 61,
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 14,
    "P": 15,
    "Q": 16,
    "R": 17,
    "S": 18,
    "T": 19,
    "U": 20,
    "V": 21,
    "W": 22,
    "X": 23,
    "Y": 24,
    "Z": 25,
    "a": 26,
    "b": 27,
    "c": 28,
    "d": 29,
    "e": 30,
    "f": 31,
    "g": 32,
    "h": 33,
    "i": 34,
    "j": 35,
    "k": 36,
    "l": 37,
    "m": 38,
    "n": 39,
    "o": 40,
    "p": 41,
    "q": 42,
    "r": 43,
    "s": 44,
    "t": 45,
    "u": 46,
    "v": 47,
    "w": 48,
    "x": 49,
    "y": 50,
    "z": 51,
    "+": 62,
    "/": 63,
    "=": 64,
    "-": 62,
    "_": 63,
    ".": 64
  };
  function Ta(a) {
    const b = [];
    Ua(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function Ua(a, b) {
    function c(e) {
      for (; d < a.length;) {
        const f = a.charAt(d++);
        const g = Qa[f];
        if (g != null) {
          return g;
        }
        if (!/^[\s\xa0]*$/.test(f)) {
          throw Error("Unknown base64 encoding at char: " + f);
        }
      }
      return e;
    }
    let d = 0;
    for (;;) {
      const e = c(-1);
      const f = c(0);
      const g = c(64);
      const h = c(64);
      if (h === 64 && e === -1) {
        break;
      }
      b(e << 2 | f >> 4);
      if (g != 64) {
        b(f << 4 & 240 | g >> 2);
        if (h != 64) {
          b(g << 6 & 192 | h);
        }
      }
    }
  }
  function Wa(a, b) {
    if (!a.__closure__error__context__984382) {
      a.__closure__error__context__984382 = {};
    }
    a.__closure__error__context__984382.severity = b;
  }
  let Xa = undefined;
  let Ya;
  function Za(a) {
    if (Ya) {
      throw Error("");
    }
    Ya = b => {
      self.setTimeout(() => {
        a(b);
      }, 0);
    };
  }
  function $a(a) {
    if (Ya) {
      try {
        Ya(a);
      } catch (b) {
        b.cause = a;
        throw b;
      }
    }
  }
  function bb(a) {
    a = Error(a);
    Wa(a, "warning");
    $a(a);
    return a;
  }
  var db = Symbol();
  var eb = Symbol();
  var fb = Symbol();
  var gb = (Symbol.for || Symbol)("m_m");
  const u = (Symbol.for || Symbol)("jas");
  var hb;
  const ib = [];
  ib[u] = 7;
  hb = Object.freeze(ib);
  function jb(a) {
    if (4 & a) {
      return 512 & a ? 512 : 1024 & a ? 1024 : 0;
    }
  }
  function kb(a) {
    a[u] |= 32;
    return a;
  }
  var qb = a => typeof a === "number";
  qb.uc = true;
  var rb = a => typeof a === "string";
  rb.uc = true;
  var sb = a => Array.isArray(a);
  sb.uc = true;
  function tb() {
    var x = a => Array.isArray(a) ? a.every(b => typeof b === "number") : false;
    x.uc = true;
    return x;
  }
  function ub(a) {
    if (typeof a === "string") {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) {
        throw Error(String(a));
      }
    } else if (typeof a === "number" && !Number.isSafeInteger(a)) {
      throw Error(String(a));
    }
    return BigInt(a);
  }
  var xb = a => a >= unsignedMinSafeInteger && a <= unsignedMaxSafeInteger;
  xb.uc = true;
  let yb = 0;
  let zb = 0;
  function Ab(a) {
    const b = a >>> 0;
    yb = b;
    zb = (a - b) / 4294967296 >>> 0;
  }
  function Bb(a) {
    if (a < 0) {
      Ab(-a);
      a = yb;
      var b = zb;
      b = ~b;
      if (a) {
        a = ~a + 1;
      } else {
        b += 1;
      }
      const [c, d] = [a, b];
      yb = c >>> 0;
      zb = d >>> 0;
    } else {
      Ab(a);
    }
  }
  function Cb(a, b) {
    b >>>= 0;
    a >>>= 0;
    var c;
    if (b <= 2097151) {
      c = "" + (4294967296 * b + a);
    } else {
      c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
    }
    return c;
  }
  function Db() {
    var a = yb;
    var b = zb;
    var c;
    if (b & 2147483648) {
      c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
    } else {
      c = Cb(a, b);
    }
    return c;
  }
  function Eb(a, b) {
    b ?? (b = "unexpected value ".concat(a, "!"));
    throw Error(b);
  }
  function Jb(a) {
    if (a == null || typeof a === "number") {
      return a;
    }
    if (a === "NaN" || a === "Infinity" || a === "-Infinity") {
      return Number(a);
    }
  }
  function Kb(a) {
    if (a != null && typeof a !== "boolean") {
      var b = typeof a;
      throw Error("Expected boolean but got ".concat(b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null", ": ", a));
    }
    return a;
  }
  const Lb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Mb(a) {
    switch (typeof a) {
      case "bigint":
        return true;
      case "number":
        return Number.isFinite(a);
      case "string":
        return Lb.test(a);
      default:
        return false;
    }
  }
  function Nb(a) {
    if (!Number.isFinite(a)) {
      throw bb("enum");
    }
    return a | 0;
  }
  function Ob(a) {
    return a == null ? a : Number.isFinite(a) ? a | 0 : undefined;
  }
  function Pb(a) {
    if (typeof a !== "number") {
      throw bb("int32");
    }
    if (!Number.isFinite(a)) {
      throw bb("int32");
    }
    return a | 0;
  }
  function Qb(a) {
    if (a == null) {
      return a;
    }
    if (typeof a === "string" && a) {
      a = +a;
    } else if (typeof a !== "number") {
      return;
    }
    return Number.isFinite(a) ? a | 0 : undefined;
  }
  function Rb(a) {
    if (a == null) {
      return a;
    }
    if (typeof a === "string" && a) {
      a = +a;
    } else if (typeof a !== "number") {
      return;
    }
    return Number.isFinite(a) ? a >>> 0 : undefined;
  }
  function Sb(a) {
    if (!Mb(a)) {
      throw bb("int64");
    }
    switch (typeof a) {
      case "string":
        return Tb(a);
      case "bigint":
        return ub(BigInt.asIntN(64, a));
      default:
        return Ub(a);
    }
  }
  function Vb(a) {
    const b = a.length;
    return a[0] === "-" ? b < 20 ? true : b === 20 && Number(a.substring(0, 7)) > -922337 : b < 19 ? true : b === 19 && Number(a.substring(0, 6)) < 922337;
  }
  function Ub(a) {
    a = Math.trunc(a);
    if (!Number.isSafeInteger(a)) {
      Bb(a);
      var b = yb;
      var c = zb;
      if (a = c & 2147483648) {
        b = ~b + 1 >>> 0;
        c = ~c >>> 0;
        if (b == 0) {
          c = c + 1 >>> 0;
        }
      }
      const d = c * 4294967296 + (b >>> 0);
      b = Number.isSafeInteger(d) ? d : Cb(b, c);
      a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b;
    }
    return a;
  }
  function Wb(a) {
    a = Math.trunc(a);
    if (Number.isSafeInteger(a)) {
      a = String(a);
    } else {
      {
        const b = String(a);
        if (Vb(b)) {
          a = b;
        } else {
          Bb(a);
          a = Db();
        }
      }
    }
    return a;
  }
  function Tb(a) {
    var b = Math.trunc(Number(a));
    if (Number.isSafeInteger(b)) {
      return String(b);
    }
    b = a.indexOf(".");
    if (b !== -1) {
      a = a.substring(0, b);
    }
    if (!Vb(a)) {
      if (a.length < 16) {
        Bb(Number(a));
      } else {
        a = BigInt(a);
        yb = Number(a & BigInt(4294967295)) >>> 0;
        zb = Number(a >> BigInt(32) & BigInt(4294967295));
      }
      a = Db();
    }
    return a;
  }
  function Xb(a) {
    if (typeof a !== "string") {
      throw Error();
    }
    return a;
  }
  function Yb(a) {
    if (a != null && typeof a !== "string") {
      throw Error();
    }
    return a;
  }
  function Zb(a) {
    return a == null || typeof a === "string" ? a : undefined;
  }
  function $b(a, b, c, d) {
    if (a != null && typeof a === "object" && a[gb] === sharedObject) {
      return a;
    }
    if (!Array.isArray(a)) {
      if (c) {
        if (d & 2) {
          if (!(a = b[db])) {
            d = new b();
            a = d.A;
            a[u] |= 34;
            a = b[db] = d;
          }
          b = a;
        } else {
          b = new b();
        }
      } else {
        b = undefined;
      }
      return b;
    }
    c = a[u] | 0;
    d = c | d & 32 | d & 2;
    if (d !== c) {
      a[u] = d;
    }
    return new b(a);
  }
  function ac(a) {
    return a;
  }
  function bc(a, b, c, d = false, e = false) {
    const f = [];
    var g = a.length;
    let h;
    let k = 4294967295;
    let n = false;
    const l = !!(b & 64);
    const m = l ? b & 128 ? 0 : -1 : undefined;
    if (!(b & 1)) {
      h = g && a[g - 1];
      if (h != null && typeof h === "object" && h.constructor === Object) {
        g--;
        k = g;
      } else {
        h = undefined;
      }
      if (!(!l || b & 128 || e)) {
        n = true;
        k = (cc ?? ac)(k - m, m, a, h) + m;
      }
    }
    let p = undefined;
    for (let v = 0; v < g; v++) {
      let t = a[v];
      if (t != null && (t = c(t, d)) != null) {
        if (l && v >= k) {
          const x = v - m;
          (p ?? (p = {}))[x] = t;
        } else {
          f[v] = t;
        }
      }
    }
    if (h) {
      for (let v in h) {
        if (!Object.prototype.hasOwnProperty.call(h, v)) {
          continue;
        }
        a = h[v];
        if (a == null || (a = c(a, d)) == null) {
          continue;
        }
        g = +v;
        let t;
        if (l && !Number.isNaN(g) && (t = g + m) < k) {
          f[t] = a;
        } else {
          (p ?? (p = {}))[v] = a;
        }
      }
    }
    if (p) {
      if (n) {
        f.push(p);
      } else {
        f[k] = p;
      }
    }
    if (e) {
      f[u] = b & 16761025 | 34;
    }
    return f;
  }
  function dc(a) {
    switch (typeof a) {
      case "number":
        return Number.isFinite(a) ? a : "" + a;
      case "bigint":
        return a >= unsignedMinSafeInteger && a <= unsignedMaxSafeInteger ? Number(a) : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (Array.isArray(a)) {
          const b = a[u] | 0;
          return a.length === 0 && b & 1 ? undefined : bc(a, b, dc);
        }
        if (a[gb] === sharedObject) {
          return w(a);
        }
        return;
    }
    return a;
  }
  var ec = typeof structuredClone != "undefined" ? structuredClone : a => bc(a, 0, dc);
  let cc;
  function w(a) {
    a = a.A;
    return bc(a, a[u] | 0, dc);
  }
  function fc(a) {
    a: {
      if (a == null) {
        var b = 32;
        a = [];
      } else {
        if (!Array.isArray(a)) {
          throw Error("narr");
        }
        b = a[u] | 0;
        if (4096 & b && !(2 & b)) {
          gc();
        }
        if (b & 256) {
          throw Error("farr");
        }
        if (b & 64) {
          if (!(b & 4096)) {
            a[u] = b | 4096;
          }
          var c = a;
          break a;
        }
        var d = a;
        b |= 64;
        var e = d.length;
        if (e) {
          var f = e - 1;
          e = d[f];
          if (e != null && typeof e === "object" && e.constructor === Object) {
            const g = b & 128 ? 0 : -1;
            f -= g;
            if (f >= 1024) {
              throw Error("pvtlmt");
            }
            for (c in e) {
              if (!Object.prototype.hasOwnProperty.call(e, c)) {
                continue;
              }
              const h = +c;
              if (h < f) {
                d[h + g] = e[c];
                delete e[c];
              } else {
                break;
              }
            }
            b = b & -16760833 | (f & 1023) << 14;
          }
        }
      }
      a[u] = b | 4160;
      c = a;
    }
    return c;
  }
  function gc() {
    if (fb != null) {
      var a = Xa ?? (Xa = {});
      var b = a[fb] || 0;
      if (!(b >= 5)) {
        a[fb] = b + 1;
        a = Error();
        Wa(a, "incident");
        if (Ya) {
          $a(a);
        } else {
          sa(a);
        }
      }
    }
  }
  function hc(a, b) {
    if (typeof a !== "object") {
      return a;
    }
    if (Array.isArray(a)) {
      var c = a[u] | 0;
      if (a.length === 0 && c & 1) {
        a = undefined;
      } else if (!(c & 2)) {
        if (!b || 8192 & c || 16 & c) {
          a = ic(a, c, b && !(c & 16));
        } else {
          a[u] |= 34;
          if (c & 4) {
            Object.freeze(a);
          }
        }
      }
      return a;
    }
    if (a[gb] === sharedObject) {
      b = a.A;
      c = b[u] | 0;
      return (c === undefined ? a.i !== emptyObject && !!(2 & (a.A[u] | 0)) : !!(2 & c) && a.i !== emptyObject) ? a : ic(b, c);
    }
  }
  function ic(a, b, c) {
    c ?? (c = !!(34 & b));
    return bc(a, b, hc, c, true);
  }
  function jc(a) {
    var b = a.A;
    const c = b[u] | 0;
    if (!(c === undefined ? a.i !== emptyObject && !!(2 & (a.A[u] | 0)) : !!(2 & c) && a.i !== emptyObject)) {
      return a;
    }
    a = new a.constructor(ic(b, c));
    b = a.A;
    b[u] &= -3;
    return a;
  }
  function kc(a) {
    if (a.i !== emptyObject) {
      return false;
    }
    let b = a.A;
    b = ic(b, b[u] | 0);
    b[u] &= -3;
    a.A = b;
    a.i = undefined;
    return true;
  }
  function lc(a) {
    if (!kc(a) && ((a.A[u] | 0) === undefined ? a.i !== emptyObject && !!(2 & (a.A[u] | 0)) : !!(2 & (a.A[u] | 0)) && a.i !== emptyObject)) {
      throw Error();
    }
  }
  const mc = ub(0);
  function y(a, b, c, d) {
    if (b === -1) {
      return null;
    }
    const e = b + (c ? 0 : -1);
    const f = a.length - 1;
    let g;
    let h;
    if (!(f < 1 + (c ? 0 : -1))) {
      if (e >= f) {
        g = a[f];
        if (g != null && typeof g === "object" && g.constructor === Object) {
          c = g[b];
          h = true;
        } else if (e === f) {
          c = g;
        } else {
          return;
        }
      } else {
        c = a[e];
      }
      if (d && c != null) {
        d = d(c);
        if (d == null) {
          return d;
        }
        if (!Object.is(d, c)) {
          if (h) {
            g[b] = d;
          } else {
            a[e] = d;
          }
          return d;
        }
      }
      return c;
    }
  }
  function nc(a, b, c) {
    lc(a);
    const d = a.A;
    oc(d, d[u] | 0, b, c);
    return a;
  }
  function oc(a, b, c, d) {
    const e = c + -1;
    var f = a.length - 1;
    if (f >= 0 && e >= f) {
      const g = a[f];
      if (g != null && typeof g === "object" && g.constructor === Object) {
        g[c] = d;
        return b;
      }
    }
    if (e <= f) {
      a[e] = d;
      return b;
    }
    if (d !== undefined) {
      f = (b ?? (b = a[u] | 0)) >> 14 & 1023 || 536870912;
      if (c >= f) {
        if (d != null) {
          a[f + -1] = {
            [c]: d
          };
        }
      } else {
        a[e] = d;
      }
    }
    return b;
  }
  function pc(a, b, c) {
    a = a.A;
    return qc(a, a[u] | 0, b, c) !== undefined;
  }
  function rc(a, b, c, d, e) {
    let f = a.A;
    let g = f[u] | 0;
    d = (g === undefined ? a.i !== emptyObject && !!(2 & (a.A[u] | 0)) : !!(2 & g) && a.i !== emptyObject) ? 1 : d;
    e = !!e || d === 3;
    if (d === 2 && kc(a)) {
      f = a.A;
      g = f[u] | 0;
    }
    a = sc(f, b);
    let h = a === hb ? 7 : a[u] | 0;
    let k = tc(h, g);
    var n = !(4 & k);
    if (n) {
      if (4 & k) {
        a = [...a];
        h = 0;
        k = k = (2 & g ? k | 2 : k & -3) & -273;
        g = oc(f, g, b, a);
      }
      let l = 0;
      let m = 0;
      for (; l < a.length; l++) {
        const p = c(a[l]);
        if (p != null) {
          a[m++] = p;
        }
      }
      if (m < l) {
        a.length = m;
      }
      c = (k | 4) & -513;
      k = c &= -1025;
      k &= -8193;
    }
    if (k !== h) {
      a[u] = k;
      if (2 & k) {
        Object.freeze(a);
      }
    }
    return a = vc(a, k, f, g, b, d, n, e);
  }
  function vc(a, b, c, d, e, f, g, h) {
    let k = b;
    if (f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)) {
      if (!(!!(2 & b) && !!(4 & b) || !!(256 & b))) {
        b |= !a.length || g && !(8192 & b) || 32 & d && !(8192 & b || 16 & b) ? 2 : 256;
        if (b !== k) {
          a[u] = b;
        }
        Object.freeze(a);
      }
    } else {
      if (f === 2 && (!!(2 & b) && !!(4 & b) || !!(256 & b))) {
        a = [...a];
        k = 0;
        b = b = (2 & d ? b | 2 : b & -3) & -273;
        oc(c, d, e, a);
      }
      if (!(!!(2 & b) && !!(4 & b) || !!(256 & b))) {
        if (!h) {
          b |= 16;
        }
        if (b !== k) {
          a[u] = b;
        }
      }
    }
    return a;
  }
  function sc(a, b) {
    a = y(a, b);
    return Array.isArray(a) ? a : hb;
  }
  function tc(a, b) {
    if (2 & b) {
      a |= 2;
    }
    return a | 1;
  }
  function xc(a, b, c, d) {
    lc(a);
    const e = a.A;
    let f = e[u] | 0;
    if (c == null) {
      oc(e, f, b);
      return a;
    }
    let g = c === hb ? 7 : c[u] | 0;
    let h = g;
    var k = !!(2 & g) && !!(4 & g) || !!(256 & g);
    let n = k || Object.isFrozen(c);
    if (!k) {
      g = 0;
    }
    if (!n) {
      c = [...c];
      h = 0;
      g = g = (2 & f ? g | 2 : g & -3) & -273;
      n = false;
    }
    g |= 5;
    k = jb(g) ?? 0;
    for (let l = 0; l < c.length; l++) {
      const m = c[l];
      const p = d(m, k);
      if (!Object.is(m, p)) {
        if (n) {
          c = [...c];
          h = 0;
          g = g = (2 & f ? g | 2 : g & -3) & -273;
          n = false;
        }
        c[l] = p;
      }
    }
    if (g !== h) {
      if (n) {
        c = [...c];
        g = g = (2 & f ? g | 2 : g & -3) & -273;
      }
      c[u] = g;
    }
    oc(e, f, b, c);
    return a;
  }
  function yc(a, b, c, d) {
    lc(a);
    const e = a.A;
    oc(e, e[u] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? undefined : c);
    return a;
  }
  function zc(a, b, c, d) {
    lc(a);
    const e = a.A;
    var f = e[u] | 0;
    if (d == null) {
      var g = Ac(e);
      if (Bc(g, e, f, c) === b) {
        g.set(c, 0);
      } else {
        return a;
      }
    } else {
      g = Ac(e);
      const h = Bc(g, e, f, c);
      if (h !== b) {
        if (h) {
          f = oc(e, f, h);
        }
        g.set(c, b);
      }
    }
    oc(e, f, b, d);
    return a;
  }
  function Dc(a, b) {
    a = a.A;
    return Bc(Ac(a), a, undefined, b);
  }
  function Ac(a) {
    return a[eb] ?? (a[eb] = new Map());
  }
  function Bc(a, b, c, d) {
    let e = a.get(d);
    if (e != null) {
      return e;
    }
    e = 0;
    for (let f = 0; f < d.length; f++) {
      const g = d[f];
      if (y(b, g) != null) {
        if (e !== 0) {
          c = oc(b, c, e);
        }
        e = g;
      }
    }
    a.set(d, e);
    return e;
  }
  function Ec(a, b, c) {
    lc(a);
    a = a.A;
    let d = a[u] | 0;
    const e = y(a, c);
    b = jc($b(e, b, true, d));
    if (e !== b) {
      oc(a, d, c, b);
    }
    return b;
  }
  function qc(a, b, c, d) {
    a = y(a, d, undefined, e => $b(e, c, false, b));
    if (a != null) {
      return a;
    }
  }
  function Fc(a, b, c) {
    a = a.A;
    if (!((c = qc(a, a[u] | 0, b, c)) || (c = b[db]))) {
      a = new b();
      c = a.A;
      c[u] |= 34;
      c = b[db] = a;
    }
    return c;
  }
  function A(a, b, c) {
    let d = a.A;
    let e = d[u] | 0;
    b = qc(d, e, b, c);
    if (b == null) {
      return b;
    }
    e = d[u] | 0;
    if (!(e === undefined ? a.i !== emptyObject && !!(2 & (a.A[u] | 0)) : !!(2 & e) && a.i !== emptyObject)) {
      const f = jc(b);
      if (f !== b) {
        if (kc(a)) {
          d = a.A;
          e = d[u] | 0;
        }
        b = f;
        oc(d, e, c, b);
      }
    }
    return b;
  }
  function B(a, b, c, d) {
    var e = a.A;
    var f = e;
    e = e[u] | 0;
    var g = e === undefined ? a.i !== emptyObject && !!(2 & (a.A[u] | 0)) : !!(2 & e) && a.i !== emptyObject;
    const h = g ? 1 : d;
    d = h === 3;
    var k = !g;
    if ((h === 2 || k) && kc(a)) {
      f = a.A;
      e = f[u] | 0;
    }
    a = sc(f, c);
    var n = a === hb ? 7 : a[u] | 0;
    var l = tc(n, e);
    if (g = !(4 & l)) {
      var m = a;
      var p = e;
      const v = !!(2 & l);
      if (v) {
        p |= 2;
      }
      let t = !v;
      let x = true;
      let H = 0;
      let M = 0;
      for (; H < m.length; H++) {
        const Ra = $b(m[H], b, false, p);
        if (Ra instanceof b) {
          if (!v) {
            const Sa = Ra.i !== emptyObject && !!(2 & (Ra.A[u] | 0));
            if (t) {
              t = !Sa;
            }
            if (x) {
              x = Sa;
            }
          }
          m[M++] = Ra;
        }
      }
      if (M < H) {
        m.length = M;
      }
      l |= 4;
      l = x ? l & -8193 : l | 8192;
      l = t ? l | 8 : l & -9;
    }
    if (l !== n) {
      a[u] = l;
      if (2 & l) {
        Object.freeze(a);
      }
    }
    if (k && !(8 & l || !a.length && (h === 1 || (h !== 4 ? 0 : 2 & l || !(16 & l) && 32 & e)))) {
      if (!!(2 & l) && !!(4 & l) || !!(256 & l)) {
        a = [...a];
        l = l = (2 & e ? l | 2 : l & -3) & -273;
        e = oc(f, e, c, a);
      }
      b = a;
      k = l;
      for (n = 0; n < b.length; n++) {
        m = b[n];
        l = jc(m);
        if (m !== l) {
          b[n] = l;
        }
      }
      k |= 8;
      l = k = b.length ? k | 8192 : k & -8193;
      a[u] = l;
    }
    return a = vc(a, l, f, e, c, h, g, d);
  }
  function Gc(a) {
    if (a == null) {
      a = undefined;
    }
    return a;
  }
  function Hc(a, b, c) {
    c = Gc(c);
    nc(a, b, c);
    return a;
  }
  function Ic(a, b, c, d) {
    d = Gc(d);
    zc(a, b, c, d);
    return a;
  }
  function Jc(a, b, c) {
    lc(a);
    const d = a.A;
    let e = d[u] | 0;
    if (c == null) {
      oc(d, e, b);
      return a;
    }
    let f = c === hb ? 7 : c[u] | 0;
    let g = f;
    const h = !!(2 & f) && !!(4 & f) || !!(256 & f);
    const k = h || Object.isFrozen(c);
    let n = true;
    let l = true;
    for (let p = 0; p < c.length; p++) {
      var m = c[p];
      if (!h) {
        m = m.i !== emptyObject && !!(2 & (m.A[u] | 0));
        if (n) {
          n = !m;
        }
        if (l) {
          l = m;
        }
      }
    }
    if (!h) {
      f = n ? 13 : 5;
      f = l ? f & -8193 : f | 8192;
    }
    if (!(k && f === g)) {
      c = [...c];
      g = 0;
      f = f = (2 & e ? f | 2 : f & -3) & -273;
    }
    if (f !== g) {
      c[u] = f;
    }
    oc(d, e, b, c);
    return a;
  }
  function Kc(a, b) {
    lc(a);
    a = rc(a, 4, Zb, 2, true);
    const c = jb(a === hb ? 7 : a[u] | 0) ?? 0;
    if (Array.isArray(b)) {
      var d = b.length;
      for (let e = 0; e < d; e++) {
        a.push(Xb(b[e], c));
      }
    } else {
      for (d of b) a.push(Xb(d, c));
    }
  }
  function Lc(a, b) {
    a = y(a.A, b);
    b = typeof a;
    if (a != null) {
      if (b === "bigint") {
        a = ub(BigInt.asIntN(64, a));
      } else if (Mb(a)) {
        if (b === "string") {
          b = Math.trunc(Number(a));
          if (Number.isSafeInteger(b)) {
            a = ub(b);
          } else {
            b = a.indexOf(".");
            if (b !== -1) {
              a = a.substring(0, b);
            }
            a = ub(BigInt.asIntN(64, BigInt(a)));
          }
        } else {
          a = Number.isSafeInteger(a) ? ub(Ub(a)) : ub(Wb(a));
        }
      } else {
        a = undefined;
      }
    }
    return a;
  }
  function Mc(a, b) {
    a = y(a.A, b);
    return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : undefined;
  }
  function Uc(a, b) {
    var c = performance.now();
    if (c != null && typeof c !== "number") {
      throw Error("Value of float/double field must be a number, found ".concat(typeof c, ": ", c));
    }
    yc(a, b, c, 0);
  }
  function ad(a) {
    const b = a.A;
    const c = b[u] | 0;
    return (c === undefined ? a.i !== emptyObject && !!(2 & (a.A[u] | 0)) : !!(2 & c) && a.i !== emptyObject) ? a : new a.constructor(ic(b, c));
  }
  var J = class {
    constructor(a) {
      this.A = fc(a);
    }
    toJSON() {
      return w(this);
    }
  };
  J.prototype[gb] = sharedObject;
  function bd(a, b) {
    if (b == null) {
      return new a();
    }
    if (!Array.isArray(b)) {
      throw Error("must be an array");
    }
    if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) {
      throw Error("arrays passed to jspb constructors must be mutable");
    }
    return new a(kb(b));
  }
  function cd(a) {
    return () => {
      var b;
      if (!(b = a[db])) {
        const c = new a();
        b = c.A;
        b[u] |= 34;
        b = a[db] = c;
      }
      return b;
    };
  }
  function dd(a) {
    return b => {
      if (b == null || b == "") {
        b = new a();
      } else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) {
          throw Error("dnarr");
        }
        b = new a(kb(b));
      }
      return b;
    };
  }
  var ed = class extends J {};
  var fd = class extends J {};
  let gd;
  let hd = 64;
  function id() {
    try {
      gd ?? (gd = new Uint32Array(64));
      if (hd >= 64) {
        crypto.getRandomValues(gd);
        hd = 0;
      }
      return gd[hd++];
    } catch (a) {
      return Math.floor(Math.random() * 4294967296);
    }
  }
  function jd(a, b) {
    if (!typeof a.goog_pvsid === "number") {
      try {
        const c = id() + (id() & 2097151) * 4294967296;
        Object.defineProperty(a, "goog_pvsid", {
          value: c,
          configurable: false
        });
      } catch (c) {
        b.ka({
          methodName: 784,
          ua: c
        });
      }
    }
    a = Number(a.goog_pvsid);
    if (!a || a <= 0) {
      b.ka({
        methodName: 784,
        ua: Error("Invalid correlator, ".concat(a))
      });
    }
    return a || -1;
  }
  function kd(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function ld(a) {
    let b = false;
    let c;
    return function () {
      if (!b) {
        c = a();
        b = true;
      }
      return c;
    };
  }
  function md(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }
  function pd(a, b) {
    const c = {};
    for (const d in a) if (b.call(undefined, a[d], d, a)) {
      c[d] = a[d];
    }
    return c;
  }
  function qd(a, b) {
    for (const c in a) if (b.call(undefined, a[c], c, a)) {
      return true;
    }
    return false;
  }
  function rd(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = a[d];
    return b;
  }
  function sd(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  /* 
    Copyright Google LLC 
    SPDX-License-Identifier: Apache-2.0 
    */
  //  let td = globalThis.trustedTypes;
  let trustedPolicy;
  function createTrustedPolicy() {
    function b(c) {
      return c;
    }
    let a = null;
    if (!globalThis.trustedTypes) {
      return a;
    }
    try {
      a = globalThis.trustedTypes.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b
      });
    } catch (b) {}
    return a;
  }
  var stringObject = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function createTrustedScriptObject(a) {
    var b;
    if (trustedPolicy === undefined) {
      trustedPolicy = createTrustedPolicy();
    }
    var b = trustedPolicy;
    a = b ? b.createScriptURL(a) : a;
    return new stringObject(a);
  }
  function yd(a) {
    if (a instanceof stringObject) {
      return a.g;
    }
    throw Error("");
  }
  var zd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Ad(a = document) {
    a = a.querySelector?.("script[nonce]");
    return a == null ? "" : a.nonce || a.getAttribute("nonce") || "";
  }
  const Bd = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
  function Cd(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  var Dd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  var Ed = /#|$/;
  function Fd(a, b) {
    const c = a.search(Ed);
    a: {
      var d = 0;
      for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c;) {
        var f = a.charCodeAt(d - 1);
        if (f == 38 || f == 63) {
          f = a.charCodeAt(d + e);
          if (!f || f == 61 || f == 38 || f == 35) {
            break a;
          }
        }
        d += e + 1;
      }
      d = -1;
    }
    if (d < 0) {
      return null;
    }
    e = a.indexOf("&", d);
    if (e < 0 || e > c) {
      e = c;
    }
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "));
  }
  function createPolicyScriptObject(a, ...b) {
    var c = a[0];
    var d = 0;
    if (b.length === 0) {
      return createTrustedScriptObject(a[0]);
    }
    while (d < b.length) {
      c += encodeURIComponent(b[d]) + a[d + 1];
      d++;
    }
    return createTrustedScriptObject(c);
  }
  function Hd(a, b) {
    a = yd(a).toString();
    const c = a.split(/[?#]/);
    const d = /[?]/.test(a) ? "?" + c[1] : "";
    return Id(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b);
  }
  function Id(a, b, c, d) {
    function e(g, h) {
      if (g != null) {
        if (Array.isArray(g)) {
          g.forEach(k => e(k, h));
        } else {
          b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g);
          f = "&";
        }
      }
    }
    let f = b.length ? "&" : "?";
    if (d.constructor === Object) {
      d = Object.entries(d);
    }
    if (Array.isArray(d)) {
      d.forEach(g => e(g[1], g[0]));
    } else {
      d.forEach(e);
    }
    return createTrustedScriptObject(a + b + c);
  }
  function Jd(a) {
    try {
      var b;
      if (b = !!a && a.location.href != null) {
        a: {
          try {
            a.foo;
            b = true;
            break a;
          } catch (c) {}
          b = false;
        }
      }
      return b;
    } catch {
      return false;
    }
  }
  function Ld(a, b) {
    const c = Md("SCRIPT", a);
    c.src = yd(b);
    if (b = Ad(c.ownerDocument)) {
      c.setAttribute("nonce", b);
    }
    if ((a = a.getElementsByTagName("script")[0]) && a.parentNode) {
      a.parentNode.insertBefore(c, a);
    }
  }
  function Od() {
    if (!globalThis.crypto) {
      return Math.random();
    }
    try {
      const a = new Uint32Array(1);
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function isPropInObject(obj, handler) {
    if (obj) {
      for (var prop in obj) if (obj.hasOwnProperty(prop)) {
        handler(obj[prop], prop, obj);
      }
    }
  }
  function Qd(a) {
    const b = a.length;
    if (b == 0) {
      return 0;
    }
    let c = 305419896;
    for (let d = 0; d < b; d++) {
      c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
    }
    return c > 0 ? c : 4294967296 + c;
  }
  var Rd = /^([0-9.]+)px$/;
  var Sd = /^(-?[0-9.]{1,30})$/;
  function Td(a) {
    if (!Sd.test(a)) {
      return null;
    }
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  function Ud(a) {
    return (a = Rd.exec(a)) ? +a[1] : null;
  }
  var Vd = ld(() => !(navUserAgent.indexOf("iPad") != -1 || navUserAgent.indexOf("Android") != -1 && !(navUserAgent.indexOf("Mobile") != -1) || navUserAgent.indexOf("Silk") != -1) && (navUserAgent.indexOf("iPod") != -1 || navUserAgent.indexOf("iPhone") != -1 || navUserAgent.indexOf("Android") != -1 || navUserAgent.indexOf("IEMobile") != -1) ? 2 : navUserAgent.indexOf("iPad") != -1 || navUserAgent.indexOf("Android") != -1 && !(navUserAgent.indexOf("Mobile") != -1) || navUserAgent.indexOf("Silk") != -1 ? 1 : 0);
  var Wd = a => {
    isPropInObject({
      display: "none"
    }, (b, c) => {
      a.style.setProperty(c, b, "important");
    });
  };
  let Xd = [];
  const Yd = () => {
    const a = Xd;
    Xd = [];
    for (const b of a) try {
      b();
    } catch {}
  };
  function Zd() {
    var a = K($d).B(ae.g, ae.defaultValue);
    var b = window.document;
    if (a.length && b.head) {
      for (const c of a) if (c && b.head) {
        a = Md("META");
        b.head.appendChild(a);
        a.httpEquiv = "origin-trial";
        a.content = c;
      }
    }
  }
  var be = a => jd(a, {
    ka: () => {}
  });
  var de = a => {
    if (ce.readyState === "complete" || ce.readyState === "interactive") {
      Xd.push(a);
      if (Xd.length == 1) {
        if (window.Promise) {
          Promise.resolve().then(Yd);
        } else if (window.setImmediate) {
          setImmediate(Yd);
        } else {
          setTimeout(Yd, 0);
        }
      }
    } else {
      ce.addEventListener("DOMContentLoaded", a);
    }
  };
  function Md(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  function ee(a, b, c) {
    if (typeof a.addEventListener === "function") {
      a.addEventListener(b, c, false);
    }
  }
  function fe(a, b, c) {
    return typeof a.removeEventListener === "function" ? (a.removeEventListener(b, c, false), true) : false;
  }
  function ge(a, b, c = null, d = false, e = false) {
    he(a, b, c, d, e);
  }
  function he(a, b, c, d, e = false) {
    if (!a.google_image_requests) {
      a.google_image_requests = [];
    }
    const f = Md("IMG", a.document);
    if (c || d) {
      const g = h => {
        if (c) {
          c(h);
        }
        if (d) {
          h = a.google_image_requests;
          const k = Ia(h, f);
          if (k >= 0) {
            Array.prototype.splice.call(h, k, 1);
          }
        }
        fe(f, "load", g);
        fe(f, "error", g);
      };
      ee(f, "load", g);
      ee(f, "error", g);
    }
    if (e) {
      f.attributionSrc = "";
    }
    f.src = b;
    a.google_image_requests.push(f);
  }
  function ie(a, b) {
    let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
    isPropInObject(a, (d, e) => {
      if (d || d === 0) {
        c += `&${e}=${encodeURIComponent(String(d))}`;
      }
    });
    je(c);
  }
  function je(a) {
    if (window.fetch) {
      window.fetch(a, {
        keepalive: true,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors"
      });
    } else {
      ge(window, a, undefined, false, false);
    }
  }
  let ke = null;
  var le = (a, b = []) => {
    let c = false;
    if (!self.google_logging_queue) {
      c = true;
      self.google_logging_queue = [];
    }
    self.google_logging_queue.push([a, b]);
    if (a = c) {
      if (ke == null) {
        ke = false;
        try {
          const d = Jd(self.top) ? self.top : null;
          if (d && d.location.hash.indexOf("google_logging") !== -1) {
            ke = true;
          }
        } catch (d) {}
      }
      a = ke;
    }
    if (a) {
      Ld(self.document, createPolicyScriptObject`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`);
    }
  };
  function me(a, b) {
    this.width = a;
    this.height = b;
  }
  me.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  me.prototype.isEmpty = function () {
    return !(this.width * this.height);
  };
  me.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  me.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  me.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  me.prototype.scale = function (a, b) {
    this.width *= a;
    this.height *= typeof b === "number" ? b : a;
    return this;
  };
  function ne(a = self) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b) {
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch {}
    }
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function oe(a = ne()) {
    return a ? Jd(a.master) ? a.master : null : null;
  }
  function pe(a, b) {
    b = String(b);
    if (a.contentType === "application/xhtml+xml") {
      b = b.toLowerCase();
    }
    return a.createElement(b);
  }
  function qe(a) {
    this.g = a || self.document || document;
  }
  qe.prototype.contains = function (a, b) {
    return a && b ? a == b || a.contains(b) : false;
  };
  var re = a => {
    a = oe(ne(a)) || a;
    a.google_unique_id = (a.google_unique_id || 0) + 1;
    return a.google_unique_id;
  };
  var se = a => {
    a = a.google_unique_id;
    return typeof a === "number" ? a : 0;
  };
  var te = a => {
    if (!a) {
      return "";
    }
    a = a.toLowerCase();
    if (a.substring(0, 3) != "ca-") {
      a = "ca-" + a;
    }
    return a;
  };
  var ve = class {
    constructor(a, b) {
      this.error = a;
      this.meta = {};
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
    }
  };
  function ye(a) {
    let b = a.toString();
    if (a.name && b.indexOf(a.name) == -1) {
      b += ": " + a.name;
    }
    if (a.message && b.indexOf(a.message) == -1) {
      b += ": " + a.message;
    }
    if (a.stack) {
      a: {
        a = a.stack;
        var c = b;
        try {
          if (a.indexOf(c) == -1) {
            a = c + "\n" + a;
          }
          let d;
          for (; a != d;) {
            d = a;
            a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
          }
          b = a.replace(RegExp("\n *", "g"), "\n");
          break a;
        } catch (d) {
          b = c;
          break a;
        }
        b = undefined;
      }
    }
    return b;
  }
  const ze = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
  var Ae = class {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
  };
  var Be = class {
    constructor(a, b, c) {
      this.url = a;
      this.l = b;
      this.g = !!c;
      this.depth = null;
    }
  };
  let Ce = null;
  function De() {
    if (Ce === null) {
      Ce = "";
      try {
        let b = "";
        try {
          b = window.top.location.hash;
        } catch (c) {
          b = window.location.hash;
        }
        if (b) {
          const c = b.match(/\bdeid=([\d,]+)/);
          Ce = c ? c[1] : "";
        }
      } catch (b) {}
    }
    return Ce;
  }
  function Ee() {
    const a = self.performance;
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Fe() {
    const a = self.performance;
    return a && a.now ? a.now() : null;
  }
  var Ge = class {
    constructor(a, b) {
      var c = Fe() || Ee();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = undefined;
      this.uniqueId = Math.random();
    }
  };
  const He = self.performance;
  const Ie = !!(He && He.mark && He.measure && He.clearMarks);
  const Je = ld(() => {
    var a;
    if (a = Ie) {
      a = De();
      a = !!a.indexOf && a.indexOf("1337") >= 0;
    }
    return a;
  });
  function Ke(a) {
    if (a && He && Je()) {
      He.clearMarks(`goog_${a.label}_${a.uniqueId}_start`);
      He.clearMarks(`goog_${a.label}_${a.uniqueId}_end`);
    }
  }
  function Le(a) {
    a.g = false;
    if (a.i !== a.j.google_js_reporting_queue) {
      if (Je()) {
        var b = a.i;
        const c = b.length;
        b = typeof b === "string" ? b.split("") : b;
        for (let d = 0; d < c; d++) {
          if (d in b) {
            Ke.call(undefined, b[d]);
          }
        }
      }
      a.i.length = 0;
    }
  }
  var Me = class {
    constructor(a) {
      this.i = [];
      this.j = a || self;
      let b = null;
      if (a) {
        a.google_js_reporting_queue = a.google_js_reporting_queue || [];
        this.i = a.google_js_reporting_queue;
        b = a.google_measure_js_timing;
      }
      this.g = Je() || (b != null ? b : Math.random() < 1);
    }
    start(a, b) {
      if (!this.g) {
        return null;
      }
      a = new Ge(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      if (He && Je()) {
        He.mark(b);
      }
      return a;
    }
    end(a) {
      if (this.g && typeof a.value === "number") {
        a.duration = (Fe() || Ee()) - a.value;
        if (He && Je()) {
          He.mark(`goog_${a.label}_${a.uniqueId}_end`);
        }
        if (!(!this.g || this.i.length > 2048)) {
          this.i.push(a);
        }
      }
    }
  };
  function Ne(a, b) {
    const c = {
      a: b
    };
    return [c];
  }
  function Oe(a, b, c, d, e) {
    const f = [];
    isPropInObject(a, (g, h) => {
      if (g = Pe(g, b, c, d, e)) {
        f.push(`${h}=${g}`);
      }
    });
    return f.join(b);
  }
  function Pe(a, b, c, d, e) {
    if (a == null) {
      return "";
    }
    b = b || "&";
    c = c || ",$";
    if (typeof c === "string") {
      c = c.split("");
    }
    if (a instanceof Array) {
      if (!d) {
        d = 0;
      }
      if (d < c.length) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
          f.push(Pe(a[g], b, c, d + 1, e));
        }
        return f.join(c[d]);
      }
    } else if (typeof a === "object") {
      if (!e) {
        e = 0;
      }
      return e < 2 ? encodeURIComponent(Oe(a, b, c, d, e + 1)) : "...";
    }
    return encodeURIComponent(String(a));
  }
  function Qe(a) {
    let b = 1;
    for (const c in a.i) if (c.length > b) {
      b = c.length;
    }
    return 3997 - b - a.j.length - 1;
  }
  function Re(a, b, c) {
    b = "https://" + b + c;
    let d = Qe(a) - c.length;
    if (d < 0) {
      return "";
    }
    a.g.sort((f, g) => f - g);
    c = null;
    let e = "";
    for (let f = 0; f < a.g.length; f++) {
      const g = a.g[f];
      const h = a.i[g];
      for (let k = 0; k < h.length; k++) {
        if (!d) {
          c = c == null ? g : c;
          break;
        }
        let n = Oe(h[k], a.j, ",$");
        if (n) {
          n = e + n;
          if (d >= n.length) {
            d -= n.length;
            b += n;
            e = a.j;
            break;
          }
          c = c == null ? g : c;
        }
      }
    }
    a = "";
    if (c != null) {
      a = `${e}${"trn"}=${c}`;
    }
    return b + a;
  }
  var Se = class {
    constructor() {
      this.j = "&";
      this.i = {};
      this.u = 0;
      this.g = [];
    }
  };
  var Ve = class {
    constructor(a = null) {
      this.G = Te;
      this.j = a;
      this.i = null;
      this.C = false;
      this.D = this.I;
    }
    J(a) {
      this.D = a;
    }
    B(a) {
      this.i = a;
    }
    Y(a) {
      this.C = a;
    }
    g(a, b, c) {
      let d;
      let e;
      try {
        if (this.j && this.j.g) {
          e = this.j.start(a.toString(), 3);
          d = b();
          this.j.end(e);
        } else {
          d = b();
        }
      } catch (f) {
        b = true;
        try {
          Ke(e);
          b = this.D(a, new ve(f, {
            message: ye(f)
          }), undefined, c);
        } catch (g) {
          this.I(217, g);
        }
        if (b) {
          window.console?.error?.(f);
        } else {
          throw f;
        }
      }
      return d;
    }
    u(a, b) {
      return (...c) => this.g(a, () => b.apply(undefined, c));
    }
    I(a, b, c, d, e) {
      e = e || "jserror";
      let f = undefined;
      try {
        const ab = new Se();
        var g = ab;
        g.g.push(1);
        g.i[1] = Ne("context", a);
        if (!!!(b.error && b.meta && b.id)) {
          b = new ve(b, {
            message: ye(b)
          });
        }
        g = b;
        if (g.msg) {
          b = ab;
          var h = g.msg.substring(0, 512);
          b.g.push(2);
          b.i[2] = Ne("msg", h);
        }
        var k = g.meta || {};
        h = k;
        if (this.i) {
          try {
            this.i(h);
          } catch (X) {}
        }
        if (d) {
          try {
            d(h);
          } catch (X) {}
        }
        d = ab;
        k = [k];
        d.g.push(3);
        d.i[3] = k;
        var n;
        if (!(n = p)) {
          d = self;
          k = [];
          h = null;
          do {
            var l = d;
            if (Jd(l)) {
              var m = l.location.href;
              h = l.document && l.document.referrer || null;
            } else {
              m = h;
              h = null;
            }
            k.push(new Be(m || "", l));
            try {
              d = l.parent;
            } catch (X) {
              d = null;
            }
          } while (d && l !== d);
          let X = 0;
          for (let Jg = k.length - 1; X <= Jg; ++X) {
            k[X].depth = Jg - X;
          }
          l = self;
          if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length === k.length - 1) {
            for (m = 1; m < k.length; ++m) {
              const X = k[m];
              if (!X.url) {
                X.url = l.location.ancestorOrigins[m - 1] || "";
                X.g = true;
              }
            }
          }
          n = k;
        }
        var p = n;
        let Zc = new Be(self.location.href, self, false);
        n = null;
        const xe = p.length - 1;
        for (l = xe; l >= 0; --l) {
          var v = p[l];
          if (!n && ze.test(v.url)) {
            n = v;
          }
          if (v.url && !v.g) {
            Zc = v;
            break;
          }
        }
        v = null;
        const Dk = p.length && p[xe].url;
        if (Zc.depth !== 0 && Dk) {
          v = p[xe];
        }
        f = new Ae(Zc, v);
        if (f.i) {
          p = ab;
          var t = f.i.url || "";
          p.g.push(4);
          p.i[4] = Ne("top", t);
        }
        var x = {
          url: f.g.url || ""
        };
        if (f.g.url) {
          const X = f.g.url.match(Dd);
          var H = X[1];
          var M = X[3];
          var Ra = X[4];
          t = "";
          if (H) {
            t += H + ":";
          }
          if (M) {
            t += "//";
            t += M;
            if (Ra) {
              t += ":" + Ra;
            }
          }
          var Sa = t;
        } else {
          Sa = "";
        }
        H = ab;
        x = [x, {
          url: Sa
        }];
        H.g.push(5);
        H.i[5] = x;
        Ue(this.G, e, ab, this.C, c);
      } catch (ab) {
        try {
          Ue(this.G, e, {
            context: "ecmserr",
            rctx: a,
            msg: ye(ab),
            url: f?.g.url ?? ""
          }, this.C, c);
        } catch (Zc) {}
      }
      return true;
    }
    na(a, b) {
      b.catch(c => {
        c = c ? c : "unknown rejection";
        this.I(a, c instanceof Error ? c : Error(c), undefined, this.i || undefined);
      });
    }
  };
  var We = class extends J {};
  var Xe = [2, 3, 4];
  var Ye = class extends J {};
  var Ze = [3, 4, 5];
  var $e = [6, 7];
  var af = class extends J {};
  var bf = [4, 5];
  function cf(a, b) {
    var c = B(a, Ye, 2, 4);
    if (!c.length) {
      return df(a, b);
    }
    a = (y(a.A, 1) == null ? y(a.A, 1) : Number.isFinite(y(a.A, 1)) ? y(a.A, 1) | 0 : undefined) ?? 0;
    if (a === 1) {
      c = cf(c[0], b);
      return c.success ? {
        success: true,
        value: !c.value
      } : c;
    }
    c = Ka(c, d => cf(d, b));
    switch (a) {
      case 2:
        return c.find(d => d.success && !d.value) ?? c.find(d => !d.success) ?? {
          success: true,
          value: true
        };
      case 3:
        return c.find(d => d.success && d.value) ?? c.find(d => !d.success) ?? {
          success: true,
          value: false
        };
      default:
        return {
          success: false,
          O: 3
        };
    }
  }
  function df(a, b) {
    var c = Dc(a, Ze);
    a: {
      switch (c) {
        case 3:
          var d = (y(a.A, Dc(a, Ze) === 3 ? 3 : -1) == null ? y(a.A, Dc(a, Ze) === 3 ? 3 : -1) : Number.isFinite(y(a.A, Dc(a, Ze) === 3 ? 3 : -1)) ? y(a.A, Dc(a, Ze) === 3 ? 3 : -1) | 0 : undefined) ?? 0;
          break a;
        case 4:
          d = (y(a.A, Dc(a, Ze) === 4 ? 4 : -1) == null ? y(a.A, Dc(a, Ze) === 4 ? 4 : -1) : Number.isFinite(y(a.A, Dc(a, Ze) === 4 ? 4 : -1)) ? y(a.A, Dc(a, Ze) === 4 ? 4 : -1) | 0 : undefined) ?? 0;
          break a;
        case 5:
          d = (y(a.A, Dc(a, Ze) === 5 ? 5 : -1) == null ? y(a.A, Dc(a, Ze) === 5 ? 5 : -1) : Number.isFinite(y(a.A, Dc(a, Ze) === 5 ? 5 : -1)) ? y(a.A, Dc(a, Ze) === 5 ? 5 : -1) | 0 : undefined) ?? 0;
          break a;
      }
      d = undefined;
    }
    if (!d) {
      return {
        success: false,
        O: 2
      };
    }
    b = (b = b[c]) && b[d];
    if (!b) {
      return {
        success: false,
        property: d,
        da: c,
        O: 1
      };
    }
    let e;
    try {
      var f = rc(a, 8, Zb, 4);
      e = b(...f);
    } catch (g) {
      return {
        success: false,
        property: d,
        da: c,
        O: 2
      };
    }
    f = (y(a.A, 1) == null ? y(a.A, 1) : Number.isFinite(y(a.A, 1)) ? y(a.A, 1) | 0 : undefined) ?? 0;
    if (f === 4) {
      return {
        success: true,
        value: !!e
      };
    }
    if (f === 5) {
      return {
        success: true,
        value: e != null
      };
    }
    if (f === 12) {
      a = (y(a.A, Dc(a, $e) === 7 ? 7 : -1) == null || typeof y(a.A, Dc(a, $e) === 7 ? 7 : -1) === "string" ? y(a.A, Dc(a, $e) === 7 ? 7 : -1) : undefined) ?? "";
    } else {
      a: {
        switch (c) {
          case 4:
            a = y(a.A, Dc(a, $e) === 6 ? 6 : -1, undefined, Jb) ?? 0;
            break a;
          case 5:
            a = (y(a.A, Dc(a, $e) === 7 ? 7 : -1) == null || typeof y(a.A, Dc(a, $e) === 7 ? 7 : -1) === "string" ? y(a.A, Dc(a, $e) === 7 ? 7 : -1) : undefined) ?? "";
            break a;
        }
        a = undefined;
      }
    }
    if (a == null) {
      return {
        success: false,
        property: d,
        da: c,
        O: 3
      };
    }
    if (f === 6) {
      return {
        success: true,
        value: e === a
      };
    }
    if (f === 9) {
      return {
        success: true,
        value: e != null && parseString_ExtractInt(String(e), a) === 0
      };
    }
    if (e == null) {
      return {
        success: false,
        property: d,
        da: c,
        O: 4
      };
    }
    switch (f) {
      case 7:
        c = e < a;
        break;
      case 8:
        c = e > a;
        break;
      case 12:
        c = typeof a === "string" && typeof e === "string" && new RegExp(a).test(e);
        break;
      case 10:
        c = e != null && parseString_ExtractInt(String(e), a) === -1;
        break;
      case 11:
        c = e != null && parseString_ExtractInt(String(e), a) === 1;
        break;
      default:
        return {
          success: false,
          O: 3
        };
    }
    return {
      success: true,
      value: c
    };
  }
  var gf = class extends J {};
  var hf = class extends J {
    getValue() {
      return A(this, gf, 2);
    }
  };
  var jf = class extends J {};
  var kf = dd(jf);
  var lf = [1, 2, 3, 6, 7, 8];
  var mf = class extends J {};
  function nf(a, b) {
    try {
      const c = d => [{
        [d.Ca]: d.Aa
      }];
      return JSON.stringify([a.filter(d => d.la).map(c), w(b), a.filter(d => !d.la).map(c)]);
    } catch (c) {
      of(c, b);
      return "";
    }
  }
  function of(a, b) {
    try {
      ie({
        m: ye(a instanceof Error ? a : Error(String(a))),
        b: ((y(b.A, 1) == null ? y(b.A, 1) : Number.isFinite(y(b.A, 1)) ? y(b.A, 1) | 0 : undefined) ?? 0) || null,
        v: ((y(b.A, 2) == null || typeof y(b.A, 2) === "string" ? y(b.A, 2) : undefined) ?? "") || null
      }, "rcs_internal");
    } catch (c) {}
  }
  var pf = class {
    constructor(a, b) {
      var c = new mf();
      a = yc(c, 1, a == null ? a : Nb(a), 0);
      b = yc(a, 2, Yb(b), "");
      this.j = ad(b);
    }
  };
  var qf = class extends J {
    getWidth() {
      return Qb(y(this.A, 3)) ?? 0;
    }
    getHeight() {
      return Qb(y(this.A, 4)) ?? 0;
    }
  };
  var rf = class extends J {};
  var uf = class extends J {
    getWidth() {
      return Lc(this, 1) ?? mc;
    }
    getHeight() {
      return Lc(this, 2) ?? mc;
    }
  };
  var vf = class extends J {};
  var wf = class extends J {};
  var xf = class extends J {
    getValue() {
      return (y(this.A, 1) == null ? y(this.A, 1) : Number.isFinite(y(this.A, 1)) ? y(this.A, 1) | 0 : undefined) ?? 0;
    }
  };
  var yf = class extends J {
    getContentUrl() {
      return (y(this.A, 4) == null || typeof y(this.A, 4) === "string" ? y(this.A, 4) : undefined) ?? "";
    }
  };
  var zf = class extends J {};
  var Bf = class extends J {};
  var Cf = class extends J {
    getContentUrl() {
      return (y(this.A, 1) == null || typeof y(this.A, 1) === "string" ? y(this.A, 1) : undefined) ?? "";
    }
  };
  var Df = class extends J {};
  function Ef(a) {
    var b = new Ff();
    return yc(b, 1, a == null ? a : Nb(a), 0);
  }
  var Ff = class extends J {};
  var Gf = class extends J {};
  var Hf = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  var If = class extends J {};
  var Lf = class extends J {};
  var Mf = class extends J {};
  var Nf = [1, 2];
  var Tf = class extends J {};
  var Uf = class extends J {};
  var Vf = [1, 2, 3, 4, 6];
  var Wf = class extends J {};
  function Xf(a) {
    var b = new Yf();
    return Ic(b, 4, Zf, a);
  }
  var Yf = class extends J {
    getTagSessionCorrelator() {
      return Lc(this, 2) ?? mc;
    }
  };
  var Zf = [4, 5, 7, 8, 9];
  var $f = class extends J {};
  function ag() {
    var a = bg();
    a = jc(a);
    return yc(a, 1, Yb("m202504290101"), "");
  }
  var dg = class extends J {};
  var eg = class extends J {};
  var fg = class extends J {
    getTagSessionCorrelator() {
      return Lc(this, 1) ?? mc;
    }
  };
  var gg = class extends J {};
  var hg = [1, 7];
  var ig = [4, 6, 8];
  class jg extends pf {
    constructor() {
      super(...arguments);
    }
  }
  function kg(a, ...b) {
    lg(a, ...b.map(c => ({
      la: true,
      Ca: 3,
      Aa: w(c)
    })));
  }
  function mg(a, ...b) {
    lg(a, ...b.map(c => ({
      la: true,
      Ca: 4,
      Aa: w(c)
    })));
  }
  function ng(a, ...b) {
    lg(a, ...b.map(c => ({
      la: true,
      Ca: 7,
      Aa: w(c)
    })));
  }
  var og = class extends jg {};
  function pg(a, b) {
    globalThis.fetch(a, {
      method: "POST",
      body: b,
      keepalive: b.length < 65536,
      credentials: "omit",
      mode: "no-cors",
      redirect: "follow"
    }).catch(() => {});
  }
  function lg(a, ...b) {
    try {
      if (a.D && nf(a.g.concat(b), a.j).length >= 65536) {
        qg(a);
      }
      if (a.u && !a.B) {
        a.B = true;
        rg(a.u, () => {
          qg(a);
        });
      }
      a.g.push(...b);
      if (a.g.length >= a.C) {
        qg(a);
      }
      if (a.g.length && a.i === null) {
        a.i = setTimeout(() => {
          qg(a);
        }, a.J);
      }
    } catch (c) {
      of(c, a.j);
    }
  }
  function qg(a) {
    if (a.i !== null) {
      clearTimeout(a.i);
      a.i = null;
    }
    if (a.g.length) {
      var b = nf(a.g, a.j);
      a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.g = [];
    }
  }
  var sg = class extends og {
    constructor(a, b, c, d, e, f) {
      super(a, b);
      this.G = pg;
      this.J = c;
      this.C = d;
      this.D = e;
      this.u = f;
      this.g = [];
      this.i = null;
      this.B = false;
    }
  };
  var tg = class extends sg {
    constructor(a, b, c = 1E3, d = 100, e = false, f) {
      super(a, b, c, d, e && true, f);
    }
  };
  function ug(a, b) {
    var c = Date.now();
    c = Number.isFinite(c) ? Math.round(c) : 0;
    b = yc(b, 1, c == null ? c : Sb(c), "0");
    c = be(window);
    b = yc(b, 2, c == null ? c : Sb(c), "0");
    return yc(b, 6, a.B == null ? a.B : Sb(a.B), "0");
  }
  function vg(a, b, c, d, e, f) {
    if (a.j) {
      var g = yc(yc(new Lf(), 1, b == null ? b : Nb(b), 0), 2, c == null ? c : Nb(c), 0);
      b = yc(Jc(Hc(Jc(xc(new Tf(), 4, d, Pb), 5, e), 1, g), 2, a.g.slice()), 6, f == null ? f : Nb(f), 0);
      b = Xf(b);
      mg(a.i, ug(a, b));
      if (f === 1 || f === 3 || f === 4 && !a.g.some(h => ((y(h.A, 1) == null ? y(h.A, 1) : Number.isFinite(y(h.A, 1)) ? y(h.A, 1) | 0 : undefined) ?? 0) === ((y(g.A, 1) == null ? y(g.A, 1) : Number.isFinite(y(g.A, 1)) ? y(g.A, 1) | 0 : undefined) ?? 0) && ((y(h.A, 2) == null ? y(h.A, 2) : Number.isFinite(y(h.A, 2)) ? y(h.A, 2) | 0 : undefined) ?? 0) === c)) {
        a.g.push(g);
        if (a.g.length > 100) {
          a.g.shift();
        }
      }
    }
  }
  function wg(a, b, c, d) {
    if (a.j) {
      var e = new If();
      b = nc(e, 1, b == null ? b : Pb(b));
      c = nc(b, 2, c == null ? c : Pb(c));
      d = nc(c, 3, d == null ? d : Nb(d));
      c = new Yf();
      d = Ic(c, 8, Zf, d);
      mg(a.i, ug(a, d));
    }
  }
  function xg(a, b, c, d, e) {
    if (a.j) {
      var f = new af();
      b = Hc(f, 1, b);
      c = nc(b, 2, c == null ? c : Nb(c));
      d = nc(c, 3, d == null ? d : Pb(d));
      if (e.da === undefined) {
        zc(d, 4, bf, e.O == null ? e.O : Nb(e.O));
      } else {
        switch (e.da) {
          case 3:
            c = new We();
            c = zc(c, 2, Xe, e.property == null ? e.property : Nb(e.property));
            e = nc(c, 1, e.O == null ? e.O : Nb(e.O));
            Ic(d, 5, bf, e);
            break;
          case 4:
            c = new We();
            c = zc(c, 3, Xe, e.property == null ? e.property : Nb(e.property));
            e = nc(c, 1, e.O == null ? e.O : Nb(e.O));
            Ic(d, 5, bf, e);
            break;
          case 5:
            c = new We();
            c = zc(c, 4, Xe, e.property == null ? e.property : Nb(e.property));
            e = nc(c, 1, e.O == null ? e.O : Nb(e.O));
            Ic(d, 5, bf, e);
        }
      }
      e = new Yf();
      e = Ic(e, 9, Zf, d);
      mg(a.i, ug(a, e));
    }
  }
  var yg = class {
    constructor(a, b, c, d = new tg(6, "unknown", b)) {
      this.B = a;
      this.u = c;
      this.i = d;
      this.g = [];
      this.j = a > 0 && Od() < 1 / a;
    }
  };
  var K = a => {
    var b = "za";
    if (a.za && a.hasOwnProperty(b)) {
      return a.za;
    }
    b = new a();
    return a.za = b;
  };
  var zg = class {
    constructor() {
      this.N = {
        3: {},
        4: {},
        5: {}
      };
    }
  };
  var Ag = /^true$/.test("false");
  function Bg(a, b) {
    switch (b) {
      case 1:
        return (y(a.A, Dc(a, lf) === 1 ? 1 : -1) == null ? y(a.A, Dc(a, lf) === 1 ? 1 : -1) : Number.isFinite(y(a.A, Dc(a, lf) === 1 ? 1 : -1)) ? y(a.A, Dc(a, lf) === 1 ? 1 : -1) | 0 : undefined) ?? 0;
      case 2:
        return (y(a.A, Dc(a, lf) === 2 ? 2 : -1) == null ? y(a.A, Dc(a, lf) === 2 ? 2 : -1) : Number.isFinite(y(a.A, Dc(a, lf) === 2 ? 2 : -1)) ? y(a.A, Dc(a, lf) === 2 ? 2 : -1) | 0 : undefined) ?? 0;
      case 3:
        return (y(a.A, Dc(a, lf) === 3 ? 3 : -1) == null ? y(a.A, Dc(a, lf) === 3 ? 3 : -1) : Number.isFinite(y(a.A, Dc(a, lf) === 3 ? 3 : -1)) ? y(a.A, Dc(a, lf) === 3 ? 3 : -1) | 0 : undefined) ?? 0;
      case 6:
        return (y(a.A, Dc(a, lf) === 6 ? 6 : -1) == null ? y(a.A, Dc(a, lf) === 6 ? 6 : -1) : Number.isFinite(y(a.A, Dc(a, lf) === 6 ? 6 : -1)) ? y(a.A, Dc(a, lf) === 6 ? 6 : -1) | 0 : undefined) ?? 0;
      case 8:
        return (y(a.A, Dc(a, lf) === 8 ? 8 : -1) == null ? y(a.A, Dc(a, lf) === 8 ? 8 : -1) : Number.isFinite(y(a.A, Dc(a, lf) === 8 ? 8 : -1)) ? y(a.A, Dc(a, lf) === 8 ? 8 : -1) | 0 : undefined) ?? 0;
      default:
        return null;
    }
  }
  function Cg(a, b) {
    if (!a) {
      return null;
    }
    switch (b) {
      case 1:
        return Mc(a, 1) ?? false;
      case 7:
        return (y(a.A, 3) == null || typeof y(a.A, 3) === "string" ? y(a.A, 3) : undefined) ?? "";
      case 2:
        return y(a.A, 2, undefined, Jb) ?? 0;
      case 3:
        return (y(a.A, 3) == null || typeof y(a.A, 3) === "string" ? y(a.A, 3) : undefined) ?? "";
      case 6:
        return rc(a, 4, Zb, 4);
      case 8:
        return rc(a, 4, Zb, 4);
      default:
        return null;
    }
  }
  const Dg = ld(() => {
    if (!Ag) {
      return {};
    }
    try {
      try {
        var b = window.sessionStorage.getItem("GGDFSSK");
      } catch {
        b = null;
      }
      if (b) {
        return JSON.parse(b);
      }
    } catch {}
    return {};
  });
  function Eg(a, b, c, d = 0) {
    K(Fg).j[d] = K(Fg).j[d]?.add(b) ?? new Set().add(b);
    const e = Dg();
    if (e[b] != null) {
      return e[b];
    }
    b = Gg(d)[b];
    if (!b) {
      return c;
    }
    b = kf(JSON.stringify(b));
    b = Hg(b);
    a = Cg(b, a);
    return a != null ? a : c;
  }
  function Hg(a) {
    const b = K(zg).N;
    if (b && Dc(a, lf) !== 8) {
      const c = Ma(B(a, hf, 5, 4), d => {
        d = A(d, Ye, 1) ? b ? cf(A(d, Ye, 1), b) : {
          success: false,
          O: 1
        } : {
          success: true,
          value: true
        };
        return d.success && d.value;
      });
      if (c) {
        return c.getValue() ?? null;
      }
    }
    return A(a, gf, 4) ?? null;
  }
  class Fg {
    constructor() {
      this.i = {};
      this.u = [];
      this.j = {};
      this.g = new Map();
    }
  }
  function Ig(a, b = false, c) {
    return !!Eg(1, a, b, c);
  }
  function Kg(a, b = 0, c) {
    a = Number(Eg(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function Lg(a, b = "", c) {
    a = Eg(3, a, b, c);
    return typeof a === "string" ? a : b;
  }
  function Mg(a, b = [], c) {
    a = Eg(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Ng(a, b = [], c) {
    a = Eg(8, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Gg(a) {
    return K(Fg).i[a] || (K(Fg).i[a] = {});
  }
  function Og(a, b) {
    const c = Gg(b);
    isPropInObject(a, (d, e) => {
      if (c[e]) {
        const g = kf(JSON.stringify(d));
        if ((y(g.A, Dc(g, lf) === 8 ? 8 : -1) == null ? y(g.A, Dc(g, lf) === 8 ? 8 : -1) : Number.isFinite(y(g.A, Dc(g, lf) === 8 ? 8 : -1)) ? y(g.A, Dc(g, lf) === 8 ? 8 : -1) | 0 : undefined) != null) {
          var f = kf(JSON.stringify(c[e]));
          d = Ec(g, gf, 4);
          f = rc(Fc(f, gf, 4), 4, Zb, 4);
          Kc(d, f);
        }
        c[e] = w(g);
      } else {
        c[e] = d;
      }
    });
  }
  function Pg(a, b, c, d, e = false) {
    var f = [];
    var g = [];
    for (const m of b) {
      b = Gg(m);
      for (const p of a) {
        var h = Dc(p, lf);
        const v = Bg(p, h);
        if (v) {
          a: {
            var k = v;
            var n = h;
            var l = K(Fg).g.get(m)?.get(v)?.slice(0) ?? [];
            const t = new Uf();
            switch (n) {
              case 1:
                zc(t, 1, Vf, k == null ? k : Nb(k));
                break;
              case 2:
                zc(t, 2, Vf, k == null ? k : Nb(k));
                break;
              case 3:
                zc(t, 3, Vf, k == null ? k : Nb(k));
                break;
              case 6:
                zc(t, 4, Vf, k == null ? k : Nb(k));
                break;
              case 8:
                zc(t, 6, Vf, k == null ? k : Nb(k));
                break;
              default:
                k = undefined;
                break a;
            }
            xc(t, 5, l, Pb);
            k = t;
          }
          if (k && K(Fg).j[m]?.has(v)) {
            f.push(k);
          }
          if (h === 8 && b[v]) {
            k = kf(JSON.stringify(b[v]));
            h = Ec(p, gf, 4);
            k = rc(Fc(k, gf, 4), 4, Zb, 4);
            Kc(h, k);
          } else if (k && K(Fg).g.get(m)?.has(v)) {
            g.push(k);
          }
          if (!e) {
            h = v;
            k = m;
            n = d;
            l = K(Fg);
            if (!l.g.has(k)) {
              l.g.set(k, new Map());
            }
            if (!l.g.get(k).has(h)) {
              l.g.get(k).set(h, []);
            }
            if (n) {
              l.g.get(k).get(h).push(n);
            }
          }
          b[v] = w(p);
        }
      }
    }
    if (f.length || g.length) {
      a = d ?? undefined;
      if (c.j && c.u) {
        d = new Wf();
        f = Jc(d, 2, f);
        g = Jc(f, 3, g);
        if (a) {
          yc(g, 1, a == null ? a : Pb(a), 0);
        }
        f = new Yf();
        g = Ic(f, 7, Zf, g);
        mg(c.i, ug(c, g));
      }
    }
  }
  function Qg(a, b) {
    b = Gg(b);
    for (const c of a) {
      a = kf(JSON.stringify(c));
      const d = Dc(a, lf);
      if (a = Bg(a, d)) {
        if (!b[a]) {
          b[a] = c;
        }
      }
    }
  }
  function Rg() {
    return Object.keys(K(Fg).i).map(a => Number(a));
  }
  function Sg(a) {
    if (!K(Fg).u.includes(a)) {
      Og(Gg(4), a);
    }
  }
  function N(a, b, c) {
    if (!c.hasOwnProperty(a)) {
      Object.defineProperty(c, String(a), {
        value: b
      });
    }
  }
  function Ug(a) {
    N(5, Ig, a);
    N(6, Kg, a);
    N(7, Lg, a);
    N(8, Mg, a);
    N(17, Ng, a);
    N(13, Qg, a);
    N(15, Sg, a);
  }
  function Vg(a) {
    N(4, b => {
      K(zg).N = b;
    }, a);
    N(9, (b, c) => {
      var d = K(zg);
      if (d.N[3][b] == null) {
        d.N[3][b] = c;
      }
    }, a);
    N(10, (b, c) => {
      var d = K(zg);
      if (d.N[4][b] == null) {
        d.N[4][b] = c;
      }
    }, a);
    N(11, (b, c) => {
      var d = K(zg);
      if (d.N[5][b] == null) {
        d.N[5][b] = c;
      }
    }, a);
    N(14, b => {
      var c = K(zg);
      for (const d of [3, 4, 5]) Object.assign(c.N[d], b[d]);
    }, a);
  }
  function Wg(a) {
    if (!a.hasOwnProperty("init-done")) {
      Object.defineProperty(a, "init-done", {
        value: true
      });
    }
  }
  function Xg(a, b, c) {
    a.j = b[a] || (() => {});
    a.u = (d, e) => (b[a] || (() => []))(d, c, e);
    a.g = () => (b[a] || (() => []))(c);
    a.i = d => {
      (b[a] || (() => {}))(d, c);
    };
  }
  class Yg {
    j() {}
    i() {}
    u() {
      return [];
    }
    g() {
      return [];
    }
  }
  function Ue(a, b, c, d = false, e) {
    if ((d ? a.g : Math.random()) < (e || .01)) {
      try {
        let f;
        if (c instanceof Se) {
          f = c;
        } else {
          f = new Se();
          isPropInObject(c, (h, k) => {
            var n = f;
            const l = n.u++;
            h = Ne(k, h);
            n.g.push(l);
            n.i[l] = h;
          });
        }
        const g = Re(f, a.domain, a.path + b + "&");
        if (g) {
          ge(self, g);
        }
      } catch (f) {}
    }
  }
  function Zg(a, b) {
    if (b >= 0 && b <= 1) {
      a.g = b;
    }
  }
  var $g = class {
    constructor() {
      this.domain = "pagead2.googlesyndication.com";
      this.path = "/pagead/gen_204?id=";
      this.g = Math.random();
    }
  };
  let Te;
  let ah;
  const bh = new Me(window);
  (function (a) {
    Te = a ?? new $g();
    if (typeof window.google_srt !== "number") {
      window.google_srt = Math.random();
    }
    Zg(Te, window.google_srt);
    ah = new Ve(bh);
    ah.B(() => {});
    ah.Y(true);
    if (window.document.readyState === "complete") {
      if (!window.google_measure_js_timing) {
        Le(bh);
      }
    } else if (bh.g) {
      ee(window, "load", () => {
        if (!window.google_measure_js_timing) {
          Le(bh);
        }
      });
    }
  })();
  let ch = new Date().getTime();
  var dh = {
    Yb: 0,
    Xb: 1,
    Ub: 2,
    Pb: 3,
    Vb: 4,
    Qb: 5,
    Wb: 6,
    Sb: 7,
    Tb: 8,
    Ob: 9,
    Rb: 10,
    Zb: 11
  };
  var eh = {
    bc: 0,
    dc: 1,
    ac: 2
  };
  function fh(a) {
    if (a.g != 0) {
      throw Error("Already resolved/rejected.");
    }
  }
  var ih = class {
    constructor() {
      this.i = new gh(this);
      this.g = 0;
    }
    resolve(a) {
      fh(this);
      this.g = 1;
      this.u = a;
      hh(this.i);
    }
    reject(a) {
      fh(this);
      this.g = 2;
      this.j = a;
      hh(this.i);
    }
  };
  function hh(a) {
    switch (a.g.g) {
      case 0:
        break;
      case 1:
        if (a.i) {
          a.i(a.g.u);
        }
        break;
      case 2:
        if (a.j) {
          a.j(a.g.j);
        }
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var gh = class {
    constructor(a) {
      this.g = a;
    }
    then(a, b) {
      if (this.i) {
        throw Error("Then functions already set.");
      }
      this.i = a;
      this.j = b;
      hh(this);
    }
  };
  var jh = class {
    constructor(a) {
      this.g = a.slice(0);
    }
    forEach(a) {
      this.g.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new jh(Ja(this.g, a));
    }
    apply(a) {
      return new jh(a(this.g.slice(0)));
    }
    sort(a) {
      return new jh(this.g.slice(0).sort(a));
    }
    get(a) {
      return this.g[a];
    }
    add(a) {
      const b = this.g.slice(0);
      b.push(a);
      return new jh(b);
    }
  };
  function kh(a, b) {
    const c = [];
    const d = a.length;
    for (let e = 0; e < d; e++) {
      c.push(a[e]);
    }
    c.forEach(b, undefined);
  }
  var mh = class {
    constructor() {
      this.g = {};
      this.i = {};
    }
    set(a, b) {
      const c = a instanceof Object ? String(la(a)) : a + "";
      this.g[c] = b;
      this.i[c] = a;
    }
    get(a, b) {
      a = a instanceof Object ? String(la(a)) : a + "";
      return this.g[a] !== undefined ? this.g[a] : b;
    }
    clear() {
      this.g = {};
      this.i = {};
    }
  };
  function qh(a) {
    try {
      return new oh({
        value: a()
      }, null);
    } catch (b) {
      return new oh(null, b);
    }
  }
  function sh(a, b) {
    if (a.g != null) {
      b(a.getValue());
    }
    return a;
  }
  function th(a, b) {
    if (!(a.g != null)) {
      b(a.i);
    }
    return a;
  }
  var oh = class {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
    getValue() {
      return this.g.value;
    }
    map(a) {
      return this.g != null ? (a = a(this.getValue()), a instanceof oh ? a : new oh({
        value: a
      }, null)) : this;
    }
  };
  var uh = class {
    constructor(a) {
      this.g = new mh();
      if (a) {
        for (let b = 0; b < a.length; ++b) {
          this.add(a[b]);
        }
      }
    }
    add(a) {
      this.g.set(a, true);
    }
    contains(a) {
      return this.g.g[a instanceof Object ? String(la(a)) : a + ""] !== undefined;
    }
  };
  var vh = class {
    constructor() {
      this.g = new mh();
    }
    set(a, b) {
      let c = this.g.get(a);
      if (!c) {
        c = new uh();
        this.g.set(a, c);
      }
      c.add(b);
    }
  };
  var wh = class extends J {
    getId() {
      return y(this.A, 3) == null || typeof y(this.A, 3) === "string" ? y(this.A, 3) : undefined;
    }
  };
  var xh = class {
    constructor({
      lb: a,
      fc: b,
      tc: c,
      Fb: d
    }) {
      this.g = b;
      this.u = new jh(a || []);
      this.j = d;
      this.i = c;
    }
  };
  const zh = a => {
    const b = [];
    const c = a.u;
    if (c && c.g.length) {
      b.push({
        ba: "a",
        ca: yh(c)
      });
    }
    if (a.g != null) {
      b.push({
        ba: "as",
        ca: a.g
      });
    }
    if (a.i != null) {
      b.push({
        ba: "i",
        ca: String(a.i)
      });
    }
    if (a.j != null) {
      b.push({
        ba: "rp",
        ca: String(a.j)
      });
    }
    b.sort(function (d, e) {
      return d.ba.localeCompare(e.ba);
    });
    b.unshift({
      ba: "t",
      ca: "aa"
    });
    return b;
  };
  const yh = a => {
    a = a.g.slice(0).map(Ah);
    a = JSON.stringify(a);
    return Qd(a);
  };
  const Ah = a => {
    const b = {};
    if ((y(a.A, 7) == null || typeof y(a.A, 7) === "string" ? y(a.A, 7) : undefined) != null) {
      b.q = y(a.A, 7) == null || typeof y(a.A, 7) === "string" ? y(a.A, 7) : undefined;
    }
    if (Qb(y(a.A, 2)) != null) {
      b.o = Qb(y(a.A, 2));
    }
    if (Qb(y(a.A, 5)) != null) {
      b.p = Qb(y(a.A, 5));
    }
    return b;
  };
  var Ch = class extends J {
    setLocation(a) {
      return nc(this, 1, a == null ? a : Nb(a));
    }
  };
  function Dh(a) {
    const b = [].slice.call(arguments).filter(kd(e => e === null));
    if (!b.length) {
      return null;
    }
    let c = [];
    let d = {};
    b.forEach(e => {
      c = c.concat(e.Ta || []);
      d = Object.assign(d, e.ab);
    });
    return new Eh(c, d);
  }
  function Fh(a) {
    switch (a) {
      case 1:
        return new Eh(null, {
          google_ad_semantic_area: "mc"
        });
      case 2:
        return new Eh(null, {
          google_ad_semantic_area: "h"
        });
      case 3:
        return new Eh(null, {
          google_ad_semantic_area: "f"
        });
      case 4:
        return new Eh(null, {
          google_ad_semantic_area: "s"
        });
      default:
        return null;
    }
  }
  function Gh(a) {
    if (a == null) {
      var b = null;
    } else {
      b = Eh;
      var c = zh(a);
      a = [];
      for (let d of c) {
        c = String(d.ca);
        a.push(d.ba + "." + (c.length <= 20 ? c : c.slice(0, 19) + "_"));
      }
      b = new b(null, {
        google_placement_id: a.join("~")
      });
    }
    return b;
  }
  var Eh = class {
    constructor(a, b) {
      this.Ta = a;
      this.ab = b;
    }
  };
  var Hh = new Eh(["google-auto-placed"], {
    google_reactive_ad_format: 40,
    google_tag_origin: "qs"
  });
  var Ih = dd(class extends J {});
  var Lh = class extends J {};
  var Mh = class extends J {};
  var Nh = class extends J {};
  function Oh(a) {
    if (a.nodeType != 1) {
      var b = false;
    } else if (b = a.tagName == "INS") {
      a: {
        b = ["adsbygoogle-placeholder"];
        var c = a.className ? a.className.split(/\s+/) : [];
        a = {};
        for (let d = 0; d < c.length; ++d) {
          a[c[d]] = true;
        }
        for (c = 0; c < b.length; ++c) {
          if (!a[b[c]]) {
            b = false;
            break a;
          }
        }
        b = true;
      }
    }
    return b;
  }
  function Ph(a, b, c) {
    switch (c) {
      case 0:
        if (b.parentNode) {
          b.parentNode.insertBefore(a, b);
        }
        break;
      case 3:
        if (c = b.parentNode) {
          let d = b.nextSibling;
          if (d && d.parentNode != c) {
            for (; d && d.nodeType == 8;) {
              d = d.nextSibling;
            }
          }
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    if (Oh(b)) {
      b.setAttribute("data-init-display", b.style.display);
      b.style.display = "block";
    }
  }
  var O = class {
    constructor(a, b = false) {
      this.g = a;
      this.defaultValue = b;
    }
  };
  var P = class {
    constructor(a, b = 0) {
      this.g = a;
      this.defaultValue = b;
    }
  };
  var Qh = class {
    constructor(a, b = []) {
      this.g = a;
      this.defaultValue = b;
    }
  };
  var Rh = new P(1359);
  var Sh = new P(1358);
  var Th = new O(1360);
  var Uh = new P(1357);
  var Vh = new O(1345);
  var Wh = new P(1130, 100);
  var Xh = new P(1340, .2);
  var Yh = new P(1338, .3);
  var Zh = new P(1336, 1);
  var $h = new P(1339, .3);
  var ai = new O(1337);
  var bi = new class {
    constructor(a, b = "") {
      this.g = a;
      this.defaultValue = b;
    }
  }(14);
  var ci = new O(1342);
  var di = new O(1344);
  var ei = new P(1343, 300);
  var fi = new O(1384);
  var gi = new O(316);
  var hi = new O(313);
  var ii = new O(369);
  var ji = new O(1318, true);
  var ki = new O(626390500);
  var li = new P(717888911);
  var mi = new Qh(635821288, ["29_18", "30_19"]);
  var ni = new Qh(683929765);
  var oi = new O(506914611);
  var pi = new O(750577535);
  var qi = new P(717888910, .7);
  var ri = new P(643258048, .15);
  var si = new P(643258049, .16);
  var ti = new P(717888912, .7);
  var ui = new P(748662193, 8);
  var vi = new O(711741274);
  var wi = new O(45650663);
  var xi = new P(684147711, -1);
  var yi = new P(684147712, -1);
  var zi = new O(662101537);
  var Ai = new P(1079, 5);
  var Bi = new O(10013);
  var Ci = new O(750586557);
  var ae = new class {
    constructor(a, b = []) {
      this.g = a;
      this.defaultValue = b;
    }
  }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]);
  var Di = new O(84);
  var $d = class {
    constructor() {
      const a = {};
      this.j = (b, c) => a[b] != null ? a[b] : c;
      this.u = (b, c) => a[b] != null ? a[b] : c;
      this.i = (b, c) => a[b] != null ? a[b] : c;
      this.B = (b, c) => a[b] != null ? a[b] : c;
      this.g = (b, c) => a[b] != null ? c.concat(a[b]) : c;
      this.C = () => {};
    }
  };
  function Ei(a, b) {
    const c = e => {
      e = e.hasOwnProperty("google-ama-order-assurance") ? e["google-ama-order-assurance"] : null;
      return e == null ? false : 0 < e;
    };
    const d = e => {
      e = e.hasOwnProperty("google-ama-order-assurance") ? e["google-ama-order-assurance"] : null;
      return e == null ? false : 0 > e;
    };
    switch (b) {
      case 0:
        return {
          init: a.previousSibling && c(a.previousSibling) ? a.previousSibling : null,
          ga: e => e.previousSibling && c(e.previousSibling) ? e.previousSibling : null,
          ma: 0
        };
      case 2:
        return {
          init: a.lastChild && c(a.lastChild) ? a.lastChild : null,
          ga: e => e.previousSibling && c(e.previousSibling) ? e.previousSibling : null,
          ma: 0
        };
      case 3:
        return {
          init: a.nextSibling && d(a.nextSibling) ? a.nextSibling : null,
          ga: e => e.nextSibling && d(e.nextSibling) ? e.nextSibling : null,
          ma: 3
        };
      case 1:
        return {
          init: a.firstChild && d(a.firstChild) ? a.firstChild : null,
          ga: e => e.nextSibling && d(e.nextSibling) ? e.nextSibling : null,
          ma: 3
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  var Hi = {
    rectangle: 1,
    horizontal: 2,
    vertical: 4
  };
  var Ii = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
    full_page: 6,
    side_rails: 7
  };
  function Ji(a) {
    a = a.document;
    let b = {};
    if (a) {
      b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
    }
    return b || {};
  }
  function Ki(a, b) {
    do {
      const c = b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
      if (c && c.position == "fixed") {
        return false;
      }
    } while (a = a.parentElement);
    return true;
  }
  function Li(a, b) {
    var c = ["width", "height"];
    for (let e = 0; e < c.length; e++) {
      const f = "google_ad_" + c[e];
      if (!b.hasOwnProperty(f)) {
        var d = Ud(a[c[e]]);
        d = d === null ? null : Math.round(d);
        if (d != null) {
          b[f] = d;
        }
      }
    }
  }
  function Ni(a, b) {
    return (a = Oi(a, b)) ? a.y : 0;
  }
  function Oi(a, b) {
    try {
      const c = b.document.documentElement.getBoundingClientRect();
      const d = a.getBoundingClientRect();
      return {
        x: d.left - c.left,
        y: d.top - c.top
      };
    } catch (c) {
      return null;
    }
  }
  function Pi(a, b, c, d, e) {
    if (a !== a.top) {
      return (Jd(a.top) ? a.top : null) ? 3 : 16;
    }
    if (!((Ji(a).clientWidth ?? undefined) < 488)) {
      return 4;
    }
    if (!(a.innerHeight >= a.innerWidth)) {
      return 5;
    }
    const f = Ji(a).clientWidth ?? undefined;
    if (!f || (f - c) / f > d) {
      a = 6;
    } else {
      if (c = e.google_full_width_responsive !== "true") {
        a: {
          c = b.parentElement;
          for (b = Ji(a).clientWidth ?? undefined; c; c = c.parentElement) {
            if ((d = a.getComputedStyle ? a.getComputedStyle(c, null) : c.currentStyle) && (e = Ud(d.width)) && !(e >= b) && d.overflow !== "visible") {
              c = true;
              break a;
            }
          }
          c = false;
        }
      }
      a = c ? 7 : true;
    }
    return a;
  }
  function Qi(a, b, c, d) {
    const e = Pi(b, c, a, K($d).u($h.g, $h.defaultValue), d);
    if (e !== true) {
      a = e;
    } else if (d.google_full_width_responsive === "true" || Ki(c, b)) {
      b = Ji(b).clientWidth ?? undefined;
      a = b - a;
      a = b && a >= 0 ? true : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10;
    } else {
      a = 9;
    }
    return a;
  }
  function Ri(a, b, c) {
    a = a.style;
    if (b === "rtl") {
      a.marginRight = c;
    } else {
      a.marginLeft = c;
    }
  }
  function Si(a, b) {
    if (b.nodeType === 3) {
      return /\S/.test(b.data);
    }
    if (b.nodeType === 1) {
      if (/^(script|style)$/i.test(b.nodeName)) {
        return false;
      }
      let c;
      try {
        c = a.getComputedStyle ? a.getComputedStyle(b, null) : b.currentStyle;
      } catch (d) {}
      return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"));
    }
    return false;
  }
  function Ti(a, b, c) {
    a = Oi(b, a);
    return c === "rtl" ? -a.x : a.x;
  }
  function Ui(a, b) {
    var c;
    c = (c = b.parentElement) ? (c = a.getComputedStyle ? a.getComputedStyle(c, null) : c.currentStyle) ? c.direction : "" : "";
    if (c) {
      var d = b.style;
      d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
      d.borderSpacing = d.padding = "0";
      Ri(b, c, "0px");
      d.width = `${Ji(a).clientWidth ?? undefined}px`;
      if (Ti(a, b, c) !== 0) {
        Ri(b, c, "0px");
        var e = Ti(a, b, c);
        Ri(b, c, `${-1 * e}px`);
        a = Ti(a, b, c);
        if (a !== 0 && a !== e) {
          Ri(b, c, `${e / (a - e) * e}px`);
        }
      }
      d.zIndex = "30";
    }
  }
  function Vi(a, b, c) {
    let d;
    return a.style && !!a.style[c] && Ud(a.style[c]) || (d = b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle) && !!d[c] && Ud(d[c]) || null;
  }
  function Wi(a, b) {
    const c = se(a) === 0;
    return b && c ? Math.max(250, 2 * Ji(a).clientHeight / 3) : 250;
  }
  function Xi(a, b) {
    let c;
    return a.style && a.style.zIndex || (c = b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle) && c.zIndex || null;
  }
  function Yi(a) {
    return b => b.g <= a;
  }
  function Zi(a, b, c, d) {
    const e = a && Ni(c, b) < Ji(b).clientHeight - 100;
    const f = Wi(b, d);
    return g => !(e && g.height() >= f);
  }
  function aj(a) {
    return b => b.height() <= a;
  }
  function bj(a, b) {
    var c = Vi(b, a, "height");
    if (c) {
      return c;
    }
    var d = b.style.height;
    b.style.height = "inherit";
    c = Vi(b, a, "height");
    b.style.height = d;
    if (c) {
      return c;
    }
    c = Infinity;
    do {
      if (d = b.style && Ud(b.style.height)) {
        c = Math.min(c, d);
      }
      if (d = Vi(b, a, "maxHeight")) {
        c = Math.min(c, d);
      }
    } while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
    return c;
  }
  var cj = {
    google_ad_channel: true,
    google_ad_client: true,
    google_ad_host: true,
    google_ad_host_channel: true,
    google_adtest: true,
    google_tag_for_child_directed_treatment: true,
    google_tag_for_under_age_of_consent: true,
    google_tag_partner: true,
    google_restrict_data_processing: true,
    google_page_url: true,
    google_debug_params: true,
    google_adbreak_test: true,
    google_ad_frequency_hint: true,
    google_admob_interstitial_slot: true,
    google_admob_rewarded_slot: true,
    google_admob_ads_only: true,
    google_ad_start_delay_hint: true,
    google_max_ad_content_rating: true,
    google_traffic_source: true,
    google_overlays: true,
    google_privacy_treatments: true,
    google_special_category_data: true,
    google_ad_intent_query: true,
    google_ad_intent_qetid: true,
    google_ad_intent_eids: true,
    google_ad_intents_format: true
  };
  const dj = RegExp("(^| )adsbygoogle($| )");
  function ej(a, b) {
    for (let c = 0; c < b.length; c++) {
      const d = b[c];
      const e = Cd(d.property);
      a[e] = d.value;
    }
  }
  var fj = class extends J {
    g() {
      return Mc(this, 23);
    }
  };
  var gj = class extends J {
    g() {
      return Lc(this, 1) ?? undefined;
    }
  };
  var hj = class extends J {};
  var ij = class extends J {};
  var jj = class extends J {};
  var kj = class extends J {};
  var lj = class extends J {
    getName() {
      return y(this.A, 4) == null || typeof y(this.A, 4) === "string" ? y(this.A, 4) : undefined;
    }
  };
  var mj = [1, 2, 3];
  var nj = class extends J {};
  var oj = class extends J {};
  var qj = class extends J {
    g() {
      return A(this, oj, Dc(this, pj) === 2 ? 2 : -1);
    }
  };
  var pj = [1, 2];
  var rj = class extends J {
    g() {
      return A(this, qj, 3);
    }
  };
  var sj = class extends J {};
  var tj = dd(sj);
  function uj(a) {
    const b = [];
    kh(a.getElementsByTagName("p"), function (c) {
      if (vj(c) >= 100) {
        b.push(c);
      }
    });
    return b;
  }
  function vj(a) {
    if (a.nodeType == 3) {
      return a.length;
    }
    if (a.nodeType != 1 || a.tagName == "SCRIPT") {
      return 0;
    }
    let b = 0;
    kh(a.childNodes, function (c) {
      b += vj(c);
    });
    return b;
  }
  function xj(a, b) {
    if (a.g == null) {
      return b;
    }
    switch (a.g) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.g);
    }
  }
  function yj(a, b) {
    var c = [];
    try {
      c = b.querySelectorAll(a.u);
    } catch (d) {}
    if (!c.length) {
      return [];
    }
    b = Oa(c);
    b = xj(a, b);
    if (typeof a.i === "number") {
      c = a.i;
      if (c < 0) {
        c += b.length;
      }
      b = c >= 0 && c < b.length ? [b[c]] : [];
    }
    if (typeof a.j === "number") {
      c = [];
      for (let d = 0; d < b.length; d++) {
        const e = uj(b[d]);
        let f = a.j;
        if (f < 0) {
          f += e.length;
        }
        if (f >= 0 && f < e.length) {
          c.push(e[f]);
        }
      }
      b = c;
    }
    return b;
  }
  var zj = class {
    constructor(query, occIndex, pgraghIndex, ignoreFlag) {
      this.u = Query;
      this.i = occIndex;
      this.j = pgraphIndex;
      this.g = ignoreFlag;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.u,
        occurrenceIndex: this.i,
        paragraphIndex: this.j,
        ignoreMode: this.g
      });
    }
  };
  var Aj = class {
    constructor() {
      this.i = createPolicyScriptObject`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
    }
    I(a, b, c, d) {
      c ?? (c = 0.01);
      d ?? (d = "jserror");
      if (Math.random() > c) {
        return false;
      }
      if (!!!(b.error && b.meta && b.id)) {
        b = new ve(b, {
          context: a,
          id: d
        });
      }
      self.google_js_errors = self.google_js_errors || [];
      self.google_js_errors.push(b);
      if (!self.error_rep_loaded) {
        Ld(self.document, this.i);
        self.error_rep_loaded = true;
      }
      return false;
    }
    g(a, b) {
      try {
        return b();
      } catch (c) {
        if (!this.I(a, c, 0.01, "jserror")) {
          throw c;
        }
      }
    }
    u(a, b) {
      return (...c) => this.g(a, () => b.apply(undefined, c));
    }
    na(a, b) {
      b.catch(c => {
        c = c ? c : "unknown rejection";
        this.I(a, c instanceof Error ? c : Error(c), undefined);
      });
    }
  };
  function propagateGReportingQueue(a, b) {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || new Array();
    if (b.length < 2048) {
      b.push(a);
    }
  }
  function Cj(a, b, c, targetScope, e = false) {
    const rootScope = targetScope || window;
    const isMicrotaskAvailable = typeof queueMicrotask !== "undefined";
    return function (...h) {
      if (e && isMicrotaskAvailable) {
        queueMicrotask(() => {
          rootScope.google_rum_task_id_counter = rootScope.google_rum_task_id_counter || 1;
          rootScope.google_rum_task_id_counter += 1;
        });
      }
      const k = Fe();
      let n;
      let l = 3;
      try {
        n = b.apply(this, h);
      } catch (m) {
        l = 13;
        if (!c) {
          throw m;
        }
        c(a, m);
      } finally {
        if (rootScope.google_measure_js_timing && k) {
          propagateGReportingQueue({
            label: a.toString(),
            value: k,
            duration: (Fe() || 0) - k,
            type: l,
            ...(e && isMicrotaskAvailable && {
              taskId: rootScope.google_rum_task_id_counter = rootScope.google_rum_task_id_counter || 1
            })
          }, rootScope);
        }
      }
      return n;
    };
  }
  function Dj(a, b) {
    return Cj(a, b, (c, d) => {
      new Aj().I(c, d);
    }, undefined, false);
  }
  function Fj(a) {
    if (!a) {
      return null;
    }
    var b = y(a.A, 7) == null || typeof y(a.A, 7) === "string" ? y(a.A, 7) : undefined;
    if ((y(a.A, 1) == null || typeof y(a.A, 1) === "string" ? y(a.A, 1) : undefined) || a.getId() || rc(a, 4, Zb, 4).length > 0) {
      var c = a.getId();
      var d = y(a.A, 1) == null || typeof y(a.A, 1) === "string" ? y(a.A, 1) : undefined;
      var e = rc(a, 4, Zb, 4);
      b = Qb(y(a.A, 2));
      var f = Qb(y(a.A, 5));
      a = (y(a.A, 6) == null ? y(a.A, 6) : Number.isFinite(y(a.A, 6)) ? y(a.A, 6) | 0 : undefined) == null ? y(a.A, 6) == null ? y(a.A, 6) : Number.isFinite(y(a.A, 6)) ? y(a.A, 6) | 0 : undefined : Hj[a];
      let g = "";
      if (d) {
        g += d;
      }
      if (c) {
        g += "#" + (c.length == 0 || isNaN(c[0]) ? c : "\\" + (30 + parseInt(c[0], 10)) + " " + c.substring(1));
      }
      if (e) {
        for (c = 0; c < e.length; c++) {
          g += "." + (e[c].length == 0 || isNaN(e[c][0]) ? e[c] : "\\" + (30 + parseInt(e[c][0], 10)) + " " + e[c].substring(1));
        }
      }
      b = (e = g) ? new zj(e, b, f, a) : null;
    } else {
      b = b ? new zj(b, Qb(y(a.A, 2)), Qb(y(a.A, 5)), (y(a.A, 6) == null ? y(a.A, 6) : Number.isFinite(y(a.A, 6)) ? y(a.A, 6) | 0 : undefined) == null ? y(a.A, 6) == null ? y(a.A, 6) : Number.isFinite(y(a.A, 6)) ? y(a.A, 6) | 0 : undefined : Hj[a]) : null;
    }
    return b;
  }
  const Hj = {
    1: 1,
    2: 2,
    3: 3,
    0: 0
  };
  const Ij = {
    1: 0,
    2: 1,
    3: 2,
    4: 3
  };
  function Kj(a) {
    a = a.google_ama_state = a.google_ama_state || {};
    return a.optimization = a.optimization || {};
  }
  var Lj = a => {
    switch (y(a.A, 8) == null ? y(a.A, 8) : Number.isFinite(y(a.A, 8)) ? y(a.A, 8) | 0 : undefined) {
      case 1:
      case 2:
        if (a == null) {
          var b = null;
        } else {
          b = A(a, wh, 1);
          if (b == null) {
            b = null;
          } else {
            a = y(a.A, 2) == null ? y(a.A, 2) : Number.isFinite(y(a.A, 2)) ? y(a.A, 2) | 0 : undefined;
            b = a == null ? null : new xh({
              lb: [b],
              Fb: a
            });
          }
        }
        return b != null ? new oh({
          value: b
        }, null) : new oh(null, Error("Missing dimension when creating placement id"));
      case 3:
        return new oh(null, Error("Missing dimension when creating placement id"));
      default:
        b = "Invalid type: " + (y(a.A, 8) == null ? y(a.A, 8) : Number.isFinite(y(a.A, 8)) ? y(a.A, 8) | 0 : undefined);
        return new oh(null, Error(b));
    }
  };
  var Mj = (a, b) => {
    const c = [];
    let d = a;
    for (a = () => {
      c.push({
        anchor: d.anchor,
        position: d.position
      });
      return d.anchor == b.anchor && d.position == b.position;
    }; d;) {
      switch (d.position) {
        case 1:
          if (a()) {
            return c;
          }
          d.position = 2;
        case 2:
          if (a()) {
            return c;
          }
          if (d.anchor.firstChild) {
            d = {
              anchor: d.anchor.firstChild,
              position: 1
            };
            continue;
          } else {
            d.position = 3;
          }
        case 3:
          if (a()) {
            return c;
          }
          d.position = 4;
        case 4:
          if (a()) {
            return c;
          }
      }
      for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
        d = {
          anchor: d.anchor.parentNode,
          position: 3
        };
        if (a()) {
          return c;
        }
        d.position = 4;
        if (a()) {
          return c;
        }
      }
      if (d && d.anchor.nextSibling) {
        d = {
          anchor: d.anchor.nextSibling,
          position: 1
        };
      } else {
        d = null;
      }
    }
    return c;
  };
  function Nj(a, b) {
    const c = new vh();
    const d = new uh();
    b.forEach(e => {
      if (A(e, jj, Dc(e, mj) === 1 ? 1 : -1)) {
        e = A(e, jj, Dc(e, mj) === 1 ? 1 : -1);
        if (A(e, Lh, 1) && A(A(e, Lh, 1), wh, 1) && A(e, Lh, 2) && A(A(e, Lh, 2), wh, 1)) {
          const g = Oj(a, A(A(e, Lh, 1), wh, 1));
          const h = Oj(a, A(A(e, Lh, 2), wh, 1));
          if (g && h) {
            for (var f of Mj({
              anchor: g,
              position: y(A(e, Lh, 1).A, 2) == null ? y(A(e, Lh, 1).A, 2) : Number.isFinite(y(A(e, Lh, 1).A, 2)) ? y(A(e, Lh, 1).A, 2) | 0 : undefined
            }, {
              anchor: h,
              position: y(A(e, Lh, 2).A, 2) == null ? y(A(e, Lh, 2).A, 2) : Number.isFinite(y(A(e, Lh, 2).A, 2)) ? y(A(e, Lh, 2).A, 2) | 0 : undefined
            })) c.set(la(f.anchor), f.position);
          }
        }
        if (A(e, Lh, 3) && A(A(e, Lh, 3), wh, 1) && (f = Oj(a, A(A(e, Lh, 3), wh, 1)))) {
          c.set(la(f), y(A(e, Lh, 3).A, 2) == null ? y(A(e, Lh, 3).A, 2) : Number.isFinite(y(A(e, Lh, 3).A, 2)) ? y(A(e, Lh, 3).A, 2) | 0 : undefined);
        }
      } else if (A(e, kj, Dc(e, mj) === 2 ? 2 : -1)) {
        Pj(a, A(e, kj, Dc(e, mj) === 2 ? 2 : -1), c);
      } else if (A(e, ij, Dc(e, mj) === 3 ? 3 : -1)) {
        Qj(a, A(e, ij, Dc(e, mj) === 3 ? 3 : -1), d);
      }
    });
    return new Rj(c, d);
  }
  var Rj = class {
    constructor(a, b) {
      this.i = a;
      this.g = b;
    }
  };
  const Pj = (a, b, c) => {
    if (A(b, Lh, 2)) {
      b = A(b, Lh, 2);
      if (a = Oj(a, A(b, wh, 1))) {
        c.set(la(a), y(b.A, 2) == null ? y(b.A, 2) : Number.isFinite(y(b.A, 2)) ? y(b.A, 2) | 0 : undefined);
      }
    } else if (A(b, wh, 1) && (a = Sj(a, A(b, wh, 1)))) {
      a.forEach(d => {
        d = la(d);
        c.set(d, 1);
        c.set(d, 4);
        c.set(d, 2);
        c.set(d, 3);
      });
    }
  };
  const Qj = (a, b, c) => {
    if (A(b, wh, 1) && (a = Sj(a, A(b, wh, 1)))) {
      a.forEach(d => {
        c.add(la(d));
      });
    }
  };
  const Oj = (a, b) => (a = Sj(a, b)) && a.length > 0 ? a[0] : null;
  const Sj = (a, b) => (b = Fj(b)) ? yj(b, a) : null;
  var Tj = cd($f);
  var bg = cd(dg);
  function Vj(a, b, c, d, e) {
    c = c instanceof ve ? c.error : c;
    var f = new gg();
    const g = new fg();
    try {
      var h = be(window);
      yc(g, 1, h == null ? h : Sb(h), "0");
    } catch (p) {}
    try {
      var k = K(Yg).g();
      xc(g, 2, k, Pb);
    } catch (p) {}
    try {
      yc(g, 3, Yb(window.document.URL), "");
    } catch (p) {}
    h = Hc(f, 2, g);
    k = new eg();
    b = yc(k, 1, b == null ? b : Nb(b), 0);
    try {
      var n = typeof c?.name === "string" ? c.name : "Unknown error";
      yc(b, 2, Yb(n), "");
    } catch (p) {}
    try {
      var l = typeof c?.message === "string" ? c.message : "Caught ".concat(c);
      yc(b, 3, Yb(l), "");
    } catch (p) {}
    try {
      var m = typeof c?.stack === "string" ? c.stack : Error().stack;
      if (m) {
        xc(b, 4, m.split(/\n\s*/), Xb);
      }
    } catch (p) {}
    n = Ic(h, 1, hg, b);
    if (e) {
      l = 0;
      switch (e.errSrc) {
        case "LCC":
          l = 1;
          break;
        case "PVC":
          l = 2;
      }
      m = ag();
      b = typeof e.shv === "string" ? e.shv : undefined;
      m = yc(m, 2, Yb(b), "");
      l = yc(m, 6, l == null ? l : Nb(l), 0);
      m = Tj();
      m = jc(m);
      b = tb()(e.es) ? e.es : undefined;
      m = xc(m, 1, b, Pb);
      m = ad(m);
      l = Hc(l, 4, m);
      m = typeof e.client === "string" ? e.client : undefined;
      l = nc(l, 3, Yb(m));
      m = typeof e.slotname === "string" ? e.slotname : undefined;
      l = yc(l, 7, Yb(m), "");
      e = typeof e.tag_origin === "string" ? e.tag_origin : undefined;
      e = yc(l, 8, Yb(e), "");
      e = ad(e);
    } else {
      e = ad(ag());
    }
    e = Ic(n, 6, ig, e);
    d = yc(e, 5, (d ?? 1) == null ? d ?? 1 : Sb(d ?? 1), "0");
    kg(a, d);
  }
  var Xj = class {
    constructor() {
      this.g = Wj;
    }
  };
  function Wj() {
    return {
      Cb: id() + (id() & 2097151) * 4294967296,
      rb: Number.MAX_SAFE_INTEGER
    };
  }
  var ak = class {
    constructor(a = false) {
      this.D = Zj;
      this.C = a;
      this.G = Yj;
      this.i = null;
      this.j = this.I;
    }
    J(a) {
      this.j = a;
    }
    B(a) {
      this.i = a;
    }
    Y() {}
    g(a, b, c) {
      let d;
      try {
        d = b();
      } catch (e) {
        b = this.C;
        try {
          b = this.j(a, new ve(e, {
            message: ye(e)
          }), undefined, c);
        } catch (f) {
          this.I(217, f);
        }
        if (b) {
          window.console?.error?.(e);
        } else {
          throw e;
        }
      }
      return d;
    }
    u(a, b) {
      return (...c) => this.g(a, () => b.apply(undefined, c));
    }
    na(a, b) {
      b.catch(c => {
        c = c ? c : "unknown rejection";
        this.I(a, c instanceof Error ? c : Error(c), undefined, undefined);
      });
    }
    I(a, b, c, d) {
      try {
        const g = c === undefined ? 1 / this.G : c === 0 ? 0 : 1 / c;
        var e = new Xj().g();
        if (g > 0 && e.Cb * g <= e.rb) {
          var f = this.D;
          c = {};
          if (this.i) {
            try {
              this.i(c);
            } catch (h) {}
          }
          if (d) {
            try {
              d(c);
            } catch (h) {}
          }
          Vj(f, a, b, g, c);
        }
      } catch (g) {}
      return this.C;
    }
  };
  var T = class extends Error {
    constructor(a = "") {
      super();
      this.name = "TagError";
      this.message = a ? "adsbygoogle.push() error: " + a : "";
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, T);
      } else {
        this.stack = Error().stack || "";
      }
    }
  };
  let Zj;
  let bk;
  let ck;
  let dk;
  let Yj;
  const ek = new Me(self);
  function fk(a) {
    if (a != null) {
      self.google_measure_js_timing = a;
    }
    if (!self.google_measure_js_timing) {
      Le(ek);
    }
  }
  (function (a, b, c = true) {
    ({
      Eb: Yj,
      ub: ck
    } = gk());
    bk = a || new $g();
    Zg(bk, ck);
    Zj = b || new tg(2, "m202504290101", 1E3);
    dk = new ak(c);
    if (self.document.readyState === "complete") {
      fk();
    } else if (ek.g) {
      ee(self, "load", () => {
        fk();
      });
    }
  })();
  function jk(a, b) {
    dk.na(a, b);
  }
  function kk(a, b, c = .01) {
    const d = K(Yg).g();
    if (!b.eid && d.length) {
      b.eid = d.toString();
    }
    Ue(bk, a, b, true, c);
  }
  function lk(a, b, c = Yj, d, e) {
    return dk.I(a, b, c, d, e);
  }
  function mk(a, b, c = Yj, d, e) {
    return (!!(b.error && b.meta && b.id) ? b.msg || ye(b.error) : ye(b)).indexOf("TagError") === 0 ? ((!!(b.error && b.meta && b.id) ? b.error : b).pbr = true, false) : lk(a, b, c, d, e);
  }
  function gk() {
    let a;
    let b;
    if (typeof self.google_srt === "number") {
      b = self.google_srt;
      a = self.google_srt === 0 ? 1 : .01;
    } else {
      b = Math.random();
      a = .01;
    }
    return {
      Eb: a,
      ub: b
    };
  }
  var nk = class {
    constructor() {
      var a = Math.random;
      this.g = Math.floor(a() * 4503599627370496);
      this.i = 0;
    }
  };
  function ok(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b;) {
      if (pk(b)) {
        return true;
      }
      if (a.g.has(b)) {
        break;
      }
      c.push(b);
      b = b.parentElement;
    }
    c.forEach(d => a.g.add(d));
    return false;
  }
  function qk(a) {
    a = rk(a);
    return a.has("all") || a.has("after");
  }
  function sk(a) {
    a = rk(a);
    return a.has("all") || a.has("before");
  }
  function rk(a) {
    return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set();
  }
  function pk(a) {
    const b = rk(a);
    return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"));
  }
  var tk = class {
    constructor() {
      this.g = new Set();
      this.i = new nk();
    }
  };
  function uk(a, b) {
    if (!a) {
      return false;
    }
    a = b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
    if (!a) {
      return false;
    }
    a = a.cssFloat || a.styleFloat;
    return a == "left" || a == "right";
  }
  function vk(a) {
    for (a = a.previousSibling; a && a.nodeType != 1;) {
      a = a.previousSibling;
    }
    return a ? a : null;
  }
  function wk(a) {
    if (!!a.nextSibling || !!a.parentNode) {
      return wk(a.parentNode);
    }
  }
  function isApiReady(a) {
    a = a && a.googletag || window.googletag;
    return a && a.apiReady && a || undefined;
  }
  function Hk(a) {
    const gtagObject = isApiReady(a);
    return gtagObject ? Ja(Ka(gtagObject.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null;
  }
  function Ik(a) {
    const b = [];
    for (const c of a) {
      a = true;
      for (let d = 0; d < b.length; d++) {
        const e = b[d];
        if (e.contains(c)) {
          a = false;
          break;
        }
        if (c.contains(e)) {
          a = false;
          b[d] = c;
          break;
        }
      }
      if (a) {
        b.push(c);
      }
    }
    return b;
  }
  function Jk(a, b) {
    if (a.u) {
      return true;
    }
    a.u = true;
    const c = B(a.j, Nh, 1, 4);
    a.i = 0;
    const d = Kk(a.G);
    var e = a.g;
    var f;
    try {
      var g = (f = e.localStorage.getItem("google_ama_settings")) ? Ih(f) : null;
    } catch (v) {
      g = null;
    }
    f = g !== null && (Mc(g, 2) ?? false);
    g = e.google_ama_state = e.google_ama_state || {};
    if (f) {
      g.eatf = true;
      le(7, [true, 0, false]);
    }
    b: {
      var h = {
        wb: false,
        xb: false
      };
      var k = Oa(e.document.querySelectorAll(".google-auto-placed"));
      var n = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]"));
      var l = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
      var m = (Hk(e) || Oa(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Oa(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
      const v = Oa(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
      const t = Oa(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
      const x = Oa(e.document.querySelectorAll("div.googlepublisherpluginad"));
      const H = Oa(e.document.querySelectorAll("html > ins.adsbygoogle"));
      let M = [].concat(...Oa(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), ...Oa(e.document.querySelectorAll("body ins.adsbygoogle")));
      f = [];
      for (const [Ra, Sa] of [[h.nc, k], [h.wb, n], [h.rc, l], [h.oc, m], [h.sc, v], [h.mc, t], [h.qc, x], [h.xb, H]]) if (Ra === false) {
        f = f.concat(Sa);
      } else {
        M = M.concat(Sa);
      }
      h = Ik(M);
      f = Ik(f);
      h = h.slice(0);
      for (p of f) for (f = 0; f < h.length; f++) {
        if (p.contains(h[f]) || h[f].contains(p)) {
          h.splice(f, 1);
        }
      }
      var p = h;
      e = Ji(e).clientHeight;
      for (f = 0; f < p.length; f++) {
        if (!(p[f].getBoundingClientRect().top > e)) {
          e = true;
          break b;
        }
      }
      e = false;
    }
    e = e ? g.eatfAbg = true : false;
    if (e) {
      return true;
    }
    e = new uh([2]);
    for (g = 0; g < c.length; g++) {
      p = a;
      h = c[g];
      f = g;
      k = b;
      if (!(n = !A(h, Ch, 4))) {
        n = e;
        l = n.contains;
        m = A(h, Ch, 4);
        m = y(m.A, 1) == null ? y(m.A, 1) : Number.isFinite(y(m.A, 1)) ? y(m.A, 1) | 0 : undefined;
        n = !l.call(n, m);
      }
      if (n || (y(h.A, 8) == null ? y(h.A, 8) : Number.isFinite(y(h.A, 8)) ? y(h.A, 8) | 0 : undefined) !== 1 || !!(h && pc(h, Ch, 4) && d[y(A(h, Ch, 4).A, 2) == null ? y(A(h, Ch, 4).A, 2) : Number.isFinite(y(A(h, Ch, 4).A, 2)) ? y(A(h, Ch, 4).A, 2) | 0 : undefined])) {
        p = null;
      } else {
        p.i++;
        if (k = Mk(p, h, k, d)) {
          n = p.g.google_ama_state = p.g.google_ama_state || {};
          if (!n.numAutoAdsPlaced) {
            n.numAutoAdsPlaced = 0;
          }
          if (!(l = !A(h, wh, 1))) {
            h = A(h, wh, 1);
            l = (Qb(y(h.A, 5)) ?? undefined) == null;
          }
          if (!l) {
            if (n.numPostPlacementsPlaced) {
              n.numPostPlacementsPlaced++;
            } else {
              n.numPostPlacementsPlaced = 1;
            }
          }
          if (n.placed == null) {
            n.placed = [];
          }
          n.numAutoAdsPlaced++;
          n.placed.push({
            index: f,
            element: k.ea
          });
          le(7, [false, p.i, true]);
        }
        p = k;
      }
      if (p) {
        return true;
      }
    }
    le(7, [false, a.i, false]);
    return false;
  }
  function Mk(a, b, c, d) {
    if (!!(b && pc(b, Ch, 4) && d[y(A(b, Ch, 4).A, 2) == null ? y(A(b, Ch, 4).A, 2) : Number.isFinite(y(A(b, Ch, 4).A, 2)) ? y(A(b, Ch, 4).A, 2) | 0 : undefined]) || ((y(b.A, 8) == null ? y(b.A, 8) : Number.isFinite(y(b.A, 8)) ? y(b.A, 8) | 0 : undefined) ?? undefined) != 1) {
      return null;
    }
    d = A(b, wh, 1);
    if (!d) {
      return null;
    }
    d = Fj(d);
    if (!d) {
      return null;
    }
    d = yj(d, a.g.document);
    if (d.length == 0) {
      return null;
    }
    d = d[0];
    var e = y(b.A, 2) == null ? y(b.A, 2) : Number.isFinite(y(b.A, 2)) ? y(b.A, 2) | 0 : undefined;
    e = Ij[e];
    e = e === undefined ? null : e;
    var f;
    if (!(f = e == null)) {
      a: {
        f = a.g;
        switch (e) {
          case 0:
            f = uk(vk(d), f);
            break a;
          case 3:
            f = uk(d, f);
            break a;
          case 2:
            var g = d.lastChild;
            f = uk(g ? g.nodeType == 1 ? g : vk(g) : null, f);
            break a;
        }
        f = false;
      }
      if (c = !f && !(!c && e == 2 && !wk(d))) {
        c = e == 1 || e == 2 ? d : d.parentNode;
        c = !(c && !Oh(c) && c.offsetWidth <= 0);
      }
      f = !c;
    }
    if (!(c = f)) {
      c = a.C;
      f = y(b.A, 2) == null ? y(b.A, 2) : Number.isFinite(y(b.A, 2)) ? y(b.A, 2) | 0 : undefined;
      g = c.i;
      var h = la(d);
      g = g.g.get(h);
      if (!(g = g ? g.contains(f) : false)) {
        a: {
          if (c.g.contains(la(d))) {
            switch (f) {
              case 2:
              case 3:
                g = true;
                break a;
              default:
                g = false;
                break a;
            }
          }
          for (f = d.parentElement; f;) {
            if (c.g.contains(la(f))) {
              g = true;
              break a;
            }
            f = f.parentElement;
          }
          g = false;
        }
      }
      c = g;
    }
    if (!c) {
      c = a.D;
      g = y(b.A, 2) == null ? y(b.A, 2) : Number.isFinite(y(b.A, 2)) ? y(b.A, 2) | 0 : undefined;
      a: switch (g) {
        case 1:
          f = qk(d.previousElementSibling) || sk(d);
          break a;
        case 4:
          f = qk(d) || sk(d.nextElementSibling);
          break a;
        case 2:
          f = sk(d.firstElementChild);
          break a;
        case 3:
          f = qk(d.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + g);
      }
      g = ok(c, d, g);
      c = c.i;
      kk("ama_exclusion_zone", {
        typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
        cor: c.g,
        num: c.i++,
        dvc: Vd()
      }, .1);
      c = f || g;
    }
    if (c) {
      return null;
    }
    f = A(b, Mh, 3);
    c = {};
    if (f) {
      c.fb = y(f.A, 1) == null || typeof y(f.A, 1) === "string" ? y(f.A, 1) : undefined;
      c.Ra = y(f.A, 2) == null || typeof y(f.A, 2) === "string" ? y(f.A, 2) : undefined;
      c.pb = !!Mc(f, 3);
    }
    f = A(b, Ch, 4) && (y(A(b, Ch, 4).A, 2) == null ? y(A(b, Ch, 4).A, 2) : Number.isFinite(y(A(b, Ch, 4).A, 2)) ? y(A(b, Ch, 4).A, 2) | 0 : undefined) ? y(A(b, Ch, 4).A, 2) == null ? y(A(b, Ch, 4).A, 2) : Number.isFinite(y(A(b, Ch, 4).A, 2)) ? y(A(b, Ch, 4).A, 2) | 0 : undefined : null;
    f = Fh(f);
    g = Qb(y(b.A, 12)) != null ? Qb(y(b.A, 12)) : null;
    g = g == null ? null : new Eh(null, {
      google_ml_rank: g
    });
    b = Nk(a, b);
    b = Dh(a.B, f, g, b);
    f = a.g;
    a = a.J;
    h = f.document;
    var k = c.pb || false;
    g = pe(new qe(h).g, "DIV");
    const n = g.style;
    n.width = "100%";
    n.height = "auto";
    n.clear = k ? "both" : "none";
    k = g.style;
    k.textAlign = "center";
    if (c.Db) {
      ej(k, c.Db);
    }
    h = pe(new qe(h).g, "INS");
    k = h.style;
    k.display = "block";
    k.margin = "auto";
    k.backgroundColor = "transparent";
    if (c.fb) {
      k.marginTop = c.fb;
    }
    if (c.Ra) {
      k.marginBottom = c.Ra;
    }
    if (c.hb) {
      ej(k, c.hb);
    }
    g.appendChild(h);
    c = {
      xa: g,
      ea: h
    };
    c.ea.setAttribute("data-ad-format", "auto");
    g = [];
    if (h = b && b.Ta) {
      c.xa.className = h.join(" ");
    }
    h = c.ea;
    h.className = "adsbygoogle";
    h.setAttribute("data-ad-client", a);
    if (g.length) {
      h.setAttribute("data-ad-channel", g.join("+"));
    }
    a: {
      try {
        var l = c.xa;
        if (K($d).j(hi.g, hi.defaultValue)) {
          {
            const x = Ei(d, e);
            if (x.init) {
              var m = x.init;
              for (d = m; d = x.ga(d);) {
                m = d;
              }
              var p = {
                anchor: m,
                position: x.ma
              };
            } else {
              p = {
                anchor: d,
                position: e
              };
            }
          }
          l["google-ama-order-assurance"] = 0;
          Ph(l, p.anchor, p.position);
        } else {
          Ph(l, d, e);
        }
        b: {
          var v = c.ea;
          v.dataset.adsbygoogleStatus = "reserved";
          v.className += " adsbygoogle-noablate";
          l = {
            element: v
          };
          var t = b && b.ab;
          if (v.hasAttribute("data-pub-vars")) {
            try {
              t = JSON.parse(v.getAttribute("data-pub-vars"));
            } catch (x) {
              break b;
            }
            v.removeAttribute("data-pub-vars");
          }
          if (t) {
            l.params = t;
          }
          (f.adsbygoogle = f.adsbygoogle || []).push(l);
        }
      } catch (x) {
        if ((v = c.xa) && v.parentNode) {
          t = v.parentNode;
          t.removeChild(v);
          if (Oh(t)) {
            t.style.display = t.getAttribute("data-init-display") || "none";
          }
        }
        v = false;
        break a;
      }
      v = true;
    }
    return v ? c : null;
  }
  function Nk(a, b) {
    return th(Lj(b).map(Gh), c => {
      (a.g.google_ama_state = a.g.google_ama_state || {}).exception = c;
    }).g != null ? th(Lj(b).map(Gh), c => {
      (a.g.google_ama_state = a.g.google_ama_state || {}).exception = c;
    }).getValue() : null;
  }
  var Ok = class {
    constructor(a, b, c, d, e) {
      this.g = a;
      this.J = b;
      this.j = c;
      this.B = e || null;
      if (this.G = d) {
        a = a.document;
        d = B(d, lj, 5, 4);
        d = Nj(a, d);
      } else {
        d = Nj(a.document, []);
      }
      this.C = d;
      this.D = new tk();
      this.i = 0;
      this.u = false;
    }
  };
  function Kk(a) {
    const b = {};
    if (a) {
      rc(a, 6, Ob, 4).forEach(c => {
        b[c] = true;
      });
    }
    return b;
  }
  var Pk = dd(class extends J {});
  function Qk(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? qh(() => Pk(c)) : new oh({
      value: null
    }, null);
  }
  function Rk() {
    if (Sk) {
      return Sk;
    }
    var a = oe() || window;
    const b = a.google_persistent_state_async;
    return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Sk = b : a.google_persistent_state_async = Sk = new Tk();
  }
  function Wk(a, b, c) {
    b = Vk[a] || "google_ps_".concat(b);
    a = a.S;
    const d = a[b];
    return d === undefined ? (a[b] = c(), a[b]) : d;
  }
  function Xk(a, b, c) {
    return Wk(a, b, () => c);
  }
  var Tk = class {
    constructor() {
      this.S = {};
    }
  };
  var Sk = null;
  const Vk = {
    8: "google_prev_ad_formats_by_region",
    9: "google_prev_ad_slotnames_by_region"
  };
  function Yk(a) {
    this.g = a || {
      cookie: ""
    };
  }
  Yk.prototype.set = function (a, b, c) {
    let d;
    let e;
    let f;
    let g = false;
    let h;
    if (typeof c === "object") {
      h = c.wc;
      g = c.xc || false;
      f = c.domain || undefined;
      e = c.path || undefined;
      d = c.zb;
    }
    if (/[;=\s]/.test(a)) {
      throw Error("Invalid cookie name \"" + a + "\"");
    }
    if (/[;\r\n]/.test(b)) {
      throw Error("Invalid cookie value \"" + b + "\"");
    }
    if (d === undefined) {
      d = -1;
    }
    this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + d * 1E3).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "");
  };
  Yk.prototype.get = function (a, b) {
    const c = a + "=";
    const d = (this.g.cookie || "").split(";");
    let e = 0;
    for (let f; e < d.length; e++) {
      f = /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(d[e])[1];
      if (f.lastIndexOf(c, 0) == 0) {
        return f.slice(c.length);
      }
      if (f == a) {
        return "";
      }
    }
    return b;
  };
  Yk.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  Yk.prototype.clear = function () {
    var a = (this.g.cookie || "").split(";");
    const b = [];
    var c = [];
    let d;
    let e;
    for (let f = 0; f < a.length; f++) {
      e = /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a[f])[1];
      d = e.indexOf("=");
      if (d == -1) {
        b.push("");
        c.push(e);
      } else {
        b.push(e.substring(0, d));
        c.push(e.substring(d + 1));
      }
    }
    for (c = b.length - 1; c >= 0; c--) {
      a = b[c];
      this.get(a);
      this.set(a, "", {
        zb: 0,
        path: undefined,
        domain: undefined
      });
    }
  };
  function Zk(a, b = window) {
    if (Mc(a, 5) ?? false) {
      try {
        return b.localStorage;
      } catch {}
    }
    return null;
  }
  function $k(a) {
    var b = new al();
    return nc(b, 5, Kb(a));
  }
  var al = class extends J {};
  function bl() {
    this.B = this.B;
    this.i = this.i;
  }
  bl.prototype.B = false;
  bl.prototype.dispose = function () {
    if (!this.B) {
      this.B = true;
      this.D();
    }
  };
  bl.prototype[fa(Symbol, "dispose")] = function () {
    this.dispose();
  };
  function cl(a, b) {
    if (a.B) {
      b();
    } else {
      if (!a.i) {
        a.i = [];
      }
      a.i.push(b);
    }
  }
  bl.prototype.D = function () {
    if (this.i) {
      while (this.i.length) {
        this.i.shift()();
      }
    }
  };
  function dl(a) {
    if (a.addtlConsent !== undefined && typeof a.addtlConsent !== "string") {
      a.addtlConsent = undefined;
    }
    if (a.gdprApplies !== undefined && typeof a.gdprApplies !== "boolean") {
      a.gdprApplies = undefined;
    }
    return a.tcString !== undefined && typeof a.tcString !== "string" || a.listenerId !== undefined && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3;
  }
  function el(a) {
    if (a.gdprApplies === false) {
      return true;
    }
    if (a.internalErrorState === undefined) {
      a.internalErrorState = dl(a);
    }
    return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (ie({
      e: String(a.internalErrorState)
    }, "tcfe"), false) : true : !(a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete");
  }
  function fl(a) {
    if (a.g) {
      return a.g;
    }
    a: {
      let d = a.j;
      for (let e = 0; e < 50; ++e) {
        try {
          var b = !(!d.frames || !d.frames.__tcfapiLocator);
        } catch {
          b = false;
        }
        if (b) {
          b = d;
          break a;
        }
        b: {
          try {
            const f = d.parent;
            if (f && f != d) {
              var c = f;
              break b;
            }
          } catch {}
          c = null;
        }
        if (!(d = c)) {
          break;
        }
      }
      b = null;
    }
    a.g = b;
    return a.g;
  }
  function gl(a, b, c, d) {
    if (!c) {
      c = () => {};
    }
    var e = a.j;
    if (typeof e.__tcfapi === "function") {
      a = e.__tcfapi;
      a(b, 2, c, d);
    } else if (fl(a)) {
      hl(a);
      e = ++a.Y;
      a.C[e] = c;
      if (a.g) {
        a.g.postMessage({
          __tcfapiCall: {
            command: b,
            version: 2,
            callId: e,
            parameter: d
          }
        }, "*");
      }
    } else {
      c({}, false);
    }
  }
  function hl(a) {
    if (!a.u) {
      var b = c => {
        try {
          var d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
          a.C[d.callId](d.returnValue, d.success);
        } catch (e) {}
      };
      a.u = b;
      ee(a.j, "message", b);
    }
  }
  var il = class extends bl {
    constructor(a) {
      var b = {};
      super();
      this.g = null;
      this.C = {};
      this.Y = 0;
      this.u = null;
      this.j = a;
      this.J = b.eb ?? 500;
      this.G = b.ic ?? false;
    }
    D() {
      this.C = {};
      if (this.u) {
        fe(this.j, "message", this.u);
        delete this.u;
      }
      delete this.C;
      delete this.j;
      delete this.g;
      super.D();
    }
    addEventListener(a) {
      let b = {
        internalBlockOnErrors: this.G
      };
      const c = md(() => a(b));
      let d = 0;
      if (this.J !== -1) {
        d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.J);
      }
      const e = (f, g) => {
        clearTimeout(d);
        if (f) {
          b = f;
          b.internalErrorState = dl(b);
          b.internalBlockOnErrors = this.G;
          if (!(g && b.internalErrorState === 0)) {
            b.tcString = "tcunavailable";
            if (!g) {
              b.internalErrorState = 3;
            }
          }
        } else {
          b.tcString = "tcunavailable";
          b.internalErrorState = 3;
        }
        a(b);
      };
      try {
        gl(this, "addEventListener", e);
      } catch (f) {
        b.tcString = "tcunavailable";
        b.internalErrorState = 3;
        if (d) {
          clearTimeout(d);
          d = 0;
        }
        c();
      }
    }
    removeEventListener(a) {
      if (a && a.listenerId) {
        gl(this, "removeEventListener", null, a.listenerId);
      }
    }
  };
  var nl = ({
    l: a,
    aa: b,
    eb: c,
    ob: d,
    ha: e = false,
    ia: f = false
  }) => {
    b = jl({
      l: a,
      aa: b,
      ha: e,
      ia: f
    });
    if (b.g != null || b.i.message != "tcunav") {
      d(b);
    } else {
      Promise.race([pl(), ql(a, c)]).then(g => g.map(ll)).then(g => g.map(h => ml(a, h))).then(d);
    }
  };
  var jl = ({
    l: a,
    aa: b,
    ha: c = false,
    ia: d = false
  }) => {
    if (!ol({
      l: a,
      aa: b,
      ha: c,
      ia: d
    })) {
      return ml(a, $k(true));
    }
    b = Rk();
    return (b = Xk(b, 24)) ? ml(a, ll(b)) : new oh(null, Error("tcunav"));
  };
  function ol({
    l: a,
    aa: b,
    ha: c,
    ia: d
  }) {
    if (d = !d) {
      d = new il(a);
      d = typeof d.j.__tcfapi === "function" || fl(d) != null;
    }
    if (!d) {
      if (c = !c) {
        if (b) {
          a = Qk(a);
          if (a.g != null) {
            if ((a = a.getValue()) && (y(a.A, 1) == null ? y(a.A, 1) : Number.isFinite(y(a.A, 1)) ? y(a.A, 1) | 0 : undefined) != null) {
              a = (y(a.A, 1) == null ? y(a.A, 1) : Number.isFinite(y(a.A, 1)) ? y(a.A, 1) | 0 : undefined) ?? 0;
              b: switch (a) {
                case 1:
                  a = true;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: ".concat(a));
              }
            } else {
              a = false;
            }
          } else {
            lk(806, a.i);
            a = false;
          }
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return !!d;
  }
  function pl() {
    return new Promise(a => {
      var b = Rk();
      a = {
        resolve: a
      };
      const c = Xk(b, 25, []);
      c.push(a);
      b.S[Vk[a] || "google_ps_".concat(25)] = c;
    }).then(rl);
  }
  function ql(a, b) {
    return new Promise(c => {
      a.setTimeout(c, b, new oh(null, Error("tcto")));
    });
  }
  function rl(a) {
    return a ? new oh({
      value: a
    }, null) : new oh(null, Error("tcnull"));
  }
  function ll(a) {
    var b = {};
    if (el(a)) {
      if (a.gdprApplies === false) {
        a = true;
      } else if (a.tcString === "tcunavailable") {
        a = !b.Va;
      } else if ((b.Va || a.gdprApplies !== undefined || b.jc) && (b.Va || typeof a.tcString === "string" && a.tcString.length)) {
        b: {
          if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], b !== undefined)) {
            b = b["755"];
            break b;
          }
          b = undefined;
        }
        if (b === 0) {
          a = false;
        } else if (a.purpose && a.vendor) {
          b = a.vendor.consents;
          if ((b = !(!b || !b["755"])) && a.purposeOneTreatment && a.publisherCC === "CH") {
            a = true;
          } else {
            if (b) {
              a = a.purpose.consents;
              b = !(!a || !a["1"]);
            }
            a = b;
          }
        } else {
          a = true;
        }
      } else {
        a = true;
      }
    } else {
      a = false;
    }
    return $k(a);
  }
  function ml(a, b) {
    return (a = Zk(b, a)) ? new oh({
      value: a
    }, null) : new oh(null, Error("unav"));
  }
  var sl = class extends J {};
  var tl = class extends J {};
  var ul = class {
    constructor(a) {
      this.exception = a;
    }
  };
  function vl(a, b) {
    try {
      var c = a.i;
      var d = c.resolve;
      var e = a.g;
      e.g.google_ama_state = e.g.google_ama_state || {};
      B(e.j, Nh, 1, 4);
      d.call(c, new ul(b));
    } catch (f) {
      a.i.reject(f);
    }
  }
  var wl = class {
    constructor(a, b, c) {
      this.j = a;
      this.g = b;
      this.i = c;
    }
    start() {
      this.u();
    }
    u() {
      try {
        switch (this.j.document.readyState) {
          case "complete":
          case "interactive":
            Jk(this.g, true);
            vl(this);
            break;
          default:
            if (Jk(this.g, false)) {
              vl(this);
            } else {
              this.j.setTimeout(qa(this.u, this), 100);
            }
        }
      } catch (a) {
        vl(this, a);
      }
    }
  };
  var xl = class extends J {
    getVersion() {
      return Qb(y(this.A, 2)) ?? 0;
    }
  };
  function yl(a) {
    return Ta(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("");
  }
  function zl(a) {
    if (!/^[0-1]+$/.test(a)) {
      throw Error("Invalid input [".concat(a, "] not a bit string."));
    }
    return parseInt(a, 2);
  }
  function Al(a) {
    if (!/^[0-1]+$/.test(a)) {
      throw Error("Invalid input [".concat(a, "] not a bit string."));
    }
    const b = [1, 2, 3, 5];
    let c = 0;
    for (let d = 0; d < a.length - 1; d++) {
      if (b.length <= d) {
        b.push(b[d - 1] + b[d - 2]);
      }
      c += parseInt(a[d], 2) * b[d];
    }
    return c;
  }
  function Bl(a) {
    var b = yl(a);
    var c = zl(b.slice(0, 6));
    a = zl(b.slice(6, 12));
    var d = new xl();
    c = yc(d, 1, c == null ? c : Pb(c), 0);
    a = yc(c, 2, a == null ? a : Pb(a), 0);
    b = b.slice(12);
    c = zl(b.slice(0, 12));
    d = [];
    let e = b.slice(12).replace(/0+$/, "");
    for (let k = 0; k < c; k++) {
      if (e.length === 0) {
        throw Error("Found ".concat(k, " of ", c, " sections [", d, "] but reached end of input [", b, "]"));
      }
      var f = zl(e[0]) === 0;
      e = e.slice(1);
      var g = Cl(e, b);
      var h = d.length === 0 ? 0 : d[d.length - 1];
      h = Al(g) + h;
      e = e.slice(g.length);
      if (f) {
        d.push(h);
      } else {
        f = Cl(e, b);
        g = Al(f);
        for (let n = 0; n <= g; n++) {
          d.push(h + n);
        }
        e = e.slice(f.length);
      }
    }
    if (e.length > 0) {
      throw Error("Found ".concat(c, " sections [", d, "] but has remaining input [", e, "], entire input [", b, "]"));
    }
    return xc(a, 3, d, Pb);
  }
  function Cl(a, b) {
    const c = a.indexOf("11");
    if (c === -1) {
      throw Error("Expected section bitstring but not found in [".concat(a, "] part of [", b, "]"));
    }
    return a.slice(0, c + 2);
  }

  // Dl = "a".charCodeAt()

  var El = rd(dh);
  var Fl = rd(eh);
  function Gl() {
    var a = new Hl();
    return yc(a, 1, Sb(0), "0");
  }
  function Il(a) {
    var b = Number;
    {
      var c = y(a.A, 1);
      const d = typeof c;
      c = c == null ? c : d === "bigint" ? String(BigInt.asIntN(64, c)) : Mb(c) ? d === "string" ? Tb(c) : Wb(c) : undefined;
    }
    b = b(c ?? "0");
    a = Qb(y(a.A, 2)) ?? 0;
    return new Date(b * 1E3 + a / 1E6);
  }
  var Hl = class extends J {};
  function V(a, b) {
    if (a.g + b > a.i.length) {
      throw Error("Requested length ".concat(b, " is past end of string."));
    }
    const c = a.i.substring(a.g, a.g + b);
    a.g += b;
    return parseInt(c, 2);
  }
  function Jl(a) {
    let b = V(a, 12);
    const c = [];
    for (; b--;) {
      var d = !!V(a, 1) === true;
      var e = V(a, 16);
      if (d) {
        for (d = V(a, 16); e <= d; e++) {
          c.push(e);
        }
      } else {
        c.push(e);
      }
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function Kl(a, b, c) {
    const d = [];
    for (let e = 0; e < b; e++) {
      if (V(a, 1)) {
        const f = e + 1;
        if (c && c.indexOf(f) === -1) {
          throw Error("ID: ".concat(f, " is outside of allowed values!"));
        }
        d.push(f);
      }
    }
    return d;
  }
  function Ll(a) {
    const b = V(a, 16);
    return !!V(a, 1) === true ? (a = Jl(a), a.forEach(c => {
      if (c > b) {
        throw Error("ID ".concat(c, " is past MaxVendorId ", b, "!"));
      }
    }), a) : Kl(a, b);
  }
  var Ml = class {
    constructor(a) {
      if (/[^01]/.test(a)) {
        throw Error("Input bitstring ".concat(a, " is malformed!"));
      }
      this.i = a;
      this.g = 0;
    }
    skip(a) {
      this.g += a;
    }
  };
  var Ol = (a, b) => {
    try {
      var c = Ta(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
      const d = new Ml(c);
      c = {};
      c.tcString = a;
      c.gdprApplies = b;
      d.skip(78);
      c.cmpId = V(d, 12);
      c.cmpVersion = V(d, 12);
      d.skip(30);
      c.tcfPolicyVersion = V(d, 6);
      c.isServiceSpecific = !!V(d, 1);
      c.useNonStandardStacks = !!V(d, 1);
      c.specialFeatureOptins = Nl(Kl(d, 12, Fl), Fl);
      c.purpose = {
        consents: Nl(Kl(d, 24, El), El),
        legitimateInterests: Nl(Kl(d, 24, El), El)
      };
      c.purposeOneTreatment = !!V(d, 1);
      c.publisherCC = String.fromCharCode(97 + V(d, 6)) + String.fromCharCode(97 + V(d, 6));
      c.vendor = {
        consents: Nl(Ll(d), null),
        legitimateInterests: Nl(Ll(d), null)
      };
      return c;
    } catch (d) {
      return null;
    }
  };
  const Nl = (a, b) => {
    const c = {};
    if (Array.isArray(b) && b.length !== 0) {
      for (const d of b) c[d] = a.indexOf(d) !== -1;
    } else {
      for (const d of a) c[d] = true;
    }
    delete c[0];
    return c;
  };
  var Pl = class extends J {
    g() {
      return (y(this.A, 2) == null || typeof y(this.A, 2) === "string" ? y(this.A, 2) : undefined) != null;
    }
  };
  var Ql = class extends J {
    g() {
      return (y(this.A, 2) == null || typeof y(this.A, 2) === "string" ? y(this.A, 2) : undefined) != null;
    }
  };
  var Rl = class extends J {};
  var Sl = dd(class extends J {});
  function Tl(a) {
    a = Ul(a);
    try {
      var b = a ? Sl(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? A(b, Rl, 4) || null : null;
  }
  function Ul(a) {
    a = new Yk(a).get("FCCDCF", "");
    if (a) {
      if (a.startsWith("%")) {
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      } else {
        b = a;
      }
    } else {
      b = null;
    }
    return b;
  }
  rd(dh).map(a => Number(a));
  rd(eh).map(a => Number(a));
  function Vl(a) {
    if (!a.__tcfapiPostMessageReady) {
      Wl(new Xl(a));
    }
  }
  function Wl(a) {
    a.g = b => {
      const c = typeof b.data === "string";
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__tcfapiCall;
      if (e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener")) {
        0;
        a.l.__tcfapi(e.command, e.version, (f, g) => {
          const h = {
            __tcfapiReturn: e.command === "removeEventListener" ? {
              success: f,
              callId: e.callId
            } : {
              returnValue: f,
              success: g,
              callId: e.callId
            }
          };
          f = c ? JSON.stringify(h) : h;
          if (b.source && typeof b.source.postMessage === "function") {
            b.source.postMessage(f, b.origin);
          }
          return f;
        }, e.parameter);
      }
    };
    a.l.addEventListener("message", a.g);
    a.l.__tcfapiPostMessageReady = true;
  }
  var Xl = class {
    constructor(a) {
      this.l = a;
    }
  };
  function Yl(a) {
    if (!a.__uspapiPostMessageReady) {
      Zl(new $l(a));
    }
  }
  function Zl(a) {
    a.g = b => {
      const c = typeof b.data === "string";
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__uspapiCall;
      if (e && e.command === "getUSPData") {
        a.l.__uspapi(e.command, e.version, (f, g) => {
          const h = {
            __uspapiReturn: {
              returnValue: f,
              success: g,
              callId: e.callId
            }
          };
          f = c ? JSON.stringify(h) : h;
          if (b.source && typeof b.source.postMessage === "function") {
            b.source.postMessage(f, b.origin);
          }
          return f;
        });
      }
    };
    a.l.addEventListener("message", a.g);
    a.l.__uspapiPostMessageReady = true;
  }
  var $l = class {
    constructor(a) {
      this.l = a;
      this.g = null;
    }
  };
  var am = class extends J {};
  var bm = dd(class extends J {
    g() {
      return (y(this.A, 1) == null || typeof y(this.A, 1) === "string" ? y(this.A, 1) : undefined) != null;
    }
  });
  function cm(a, b) {
    function c(m) {
      if (m.length < 10) {
        return null;
      }
      var p = h(m.slice(0, 4));
      p = k(p);
      m = h(m.slice(6, 10));
      m = n(m);
      return "1".concat(p, m, "N");
    }
    function d(m) {
      if (m.length < 10) {
        return null;
      }
      var p = h(m.slice(0, 6));
      p = k(p);
      m = h(m.slice(6, 10));
      m = n(m);
      return "1".concat(p, m, "N");
    }
    function e(m) {
      if (m.length < 12) {
        return null;
      }
      var p = h(m.slice(0, 6));
      p = k(p);
      m = h(m.slice(8, 12));
      m = n(m);
      return "1".concat(p, m, "N");
    }
    function f(m) {
      if (m.length < 18) {
        return null;
      }
      var p = h(m.slice(0, 8));
      p = k(p);
      m = h(m.slice(12, 18));
      m = n(m);
      return "1".concat(p, m, "N");
    }
    function g(m) {
      if (m.length < 10) {
        return null;
      }
      var p = h(m.slice(0, 6));
      p = k(p);
      m = h(m.slice(6, 10));
      m = n(m);
      return "1".concat(p, m, "N");
    }
    function h(m) {
      const p = [];
      let v = 0;
      for (let t = 0; t < m.length / 2; t++) {
        p.push(zl(m.slice(v, v + 2)));
        v += 2;
      }
      return p;
    }
    function k(m) {
      return m.every(p => p === 1) ? "Y" : "N";
    }
    function n(m) {
      return m.some(p => p === 1) ? "Y" : "N";
    }
    if (a.length === 0) {
      return null;
    }
    a = a.split(".");
    if (a.length > 2) {
      return null;
    }
    a = yl(a[0]);
    const l = zl(a.slice(0, 6));
    a = a.slice(6);
    if (l !== 1) {
      return null;
    }
    switch (b) {
      case 8:
        return c(a);
      case 10:
      case 12:
      case 9:
        return d(a);
      case 11:
        return e(a);
      case 7:
        return f(a);
      case 13:
        return g(a);
      default:
        return null;
    }
  }
  function dm(a, b) {
    const c = a.document;
    const d = () => {
      if (!a.frames[b]) {
        if (c.body) {
          const e = Md("IFRAME", c);
          e.style.display = "none";
          e.style.width = "0px";
          e.style.height = "0px";
          e.style.border = "none";
          e.style.zIndex = "-1000";
          e.style.left = "-1000px";
          e.style.top = "-1000px";
          e.name = b;
          c.body.appendChild(e);
        } else {
          a.setTimeout(d, 5);
        }
      }
    };
    d();
  }
  function em(a) {
    if (a != null) {
      return a >= unsignedMinSafeInteger && a <= unsignedMaxSafeInteger ? Number(a) : String(a);
    }
  }
  function gm(a) {
    var b = K($d).j(wi.g, wi.defaultValue);
    if (!(window !== window.top || window.__uspapi || window.frames.__uspapiLocator)) {
      a = new hm(a, b);
      im(a);
      jm(a);
    }
  }
  function im(a) {
    if (!(!a.u || a.l.__uspapi || a.l.frames.__uspapiLocator)) {
      a.l.__uspapiManager = "fc";
      dm(a.l, "__uspapiLocator");
      ra("__uspapi", (b, c, d) => {
        if (typeof d === "function" && b === "getUSPData") {
          b = a.i && !(Mc(a.j, 3) ?? false);
          d({
            version: 1,
            uspString: b ? "1---" : a.u
          }, true);
        }
      }, a.l);
      Yl(a.l);
    }
  }
  function jm(a) {
    if (!(!a.tcString || a.l.__tcfapi || a.l.frames.__tcfapiLocator)) {
      a.l.__tcfapiManager = "fc";
      dm(a.l, "__tcfapiLocator");
      a.l.__tcfapiEventListeners = a.l.__tcfapiEventListeners || [];
      ra("__tcfapi", (b, c, d, e) => {
        if (typeof d === "function") {
          if (c && (c > 2.2 || c <= 1)) {
            d(null, false);
          } else {
            var f = a.l.__tcfapiEventListeners;
            c = a.i && !a.j.g();
            switch (b) {
              case "ping":
                d({
                  gdprApplies: !c,
                  cmpLoaded: true,
                  cmpStatus: "loaded",
                  displayStatus: "disabled",
                  apiVersion: "2.2",
                  cmpVersion: 2,
                  cmpId: 300
                });
                break;
              case "addEventListener":
                e = f.push(d);
                b = !c;
                --e;
                if (a.tcString) {
                  b = Ol(a.tcString, b);
                  b.addtlConsent = a.g != null ? a.g : undefined;
                  b.cmpStatus = "loaded";
                  b.eventStatus = "tcloaded";
                  if (e != null) {
                    b.listenerId = e;
                  }
                } else {
                  b = null;
                }
                d(b, true);
                break;
              case "removeEventListener":
                if (e !== undefined && f[e]) {
                  f[e] = null;
                  d(true);
                } else {
                  d(false);
                }
                break;
              case "getInAppTCData":
              case "getVendorList":
                d(null, false);
                break;
              case "getTCData":
                d(null, false);
            }
          }
        }
      }, a.l);
      Vl(a.l);
    }
  }
  function km(a) {
    if (!a?.g() || ((y(a.A, 1) == null || typeof y(a.A, 1) === "string" ? y(a.A, 1) : undefined) ?? "").length === 0 || B(a, am, 2, 4).length === 0) {
      return null;
    }
    const b = (y(a.A, 1) == null || typeof y(a.A, 1) === "string" ? y(a.A, 1) : undefined) ?? "";
    let c;
    try {
      var d = Bl(b.split("~")[0]);
      c = b.includes("~") ? b.split("~").slice(1) : [];
    } catch (e) {
      return null;
    }
    a = B(a, am, 2, 4).reduce((e, f) => {
      var g = pc(e, Hl, 2) ? A(e, Hl, 2) : Gl();
      g = Lc(g, 1) ?? mc;
      g = g >= unsignedMinSafeInteger && g <= unsignedMaxSafeInteger ? Number(g) : String(g);
      var h = pc(f, Hl, 2) ? A(f, Hl, 2) : Gl();
      h = Lc(h, 1) ?? mc;
      return g > (h >= unsignedMinSafeInteger && h <= unsignedMaxSafeInteger ? Number(h) : String(h)) ? e : f;
    });
    d = rc(d, 3, Qb, 4).indexOf(Qb(y(a.A, 1)) ?? 0);
    return d === -1 || d >= c.length ? null : {
      uspString: cm(c[d], Qb(y(a.A, 1)) ?? 0),
      wa: Il(pc(a, Hl, 2) ? A(a, Hl, 2) : Gl())
    };
  }
  function mm(a) {
    a = a.find(b => b && ((y(b.A, 1) == null ? y(b.A, 1) : Number.isFinite(y(b.A, 1)) ? y(b.A, 1) | 0 : undefined) ?? 0) === 13);
    if (a?.g()) {
      try {
        return bm((y(a.A, 2) == null || typeof y(a.A, 2) === "string" ? y(a.A, 2) : undefined) ?? "");
      } catch (b) {}
    }
    return null;
  }
  var hm = class {
    constructor(a, b) {
      var c = window;
      this.l = c;
      this.j = a;
      this.i = b;
      a = Ul(this.l.document);
      try {
        var d = a ? Sl(a) : null;
      } catch (e) {
        d = null;
      }
      if (a = d) {
        d = A(a, Ql, 5) || null;
        a = B(a, Pl, 7, 4);
        a = mm(a ?? []);
        d = {
          Sa: d,
          Ua: a
        };
      } else {
        d = {
          Sa: null,
          Ua: null
        };
      }
      a = d;
      d = km(a.Ua);
      a = a.Sa;
      if (a?.g() && ((y(a.A, 2) == null || typeof y(a.A, 2) === "string" ? y(a.A, 2) : undefined) ?? "").length !== 0) {
        b = pc(a, Hl, 1) ? A(a, Hl, 1) : Gl();
        a = {
          uspString: (y(a.A, 2) == null || typeof y(a.A, 2) === "string" ? y(a.A, 2) : undefined) ?? "",
          wa: Il(b)
        };
      } else {
        a = null;
      }
      this.u = a && d ? d.wa > a.wa ? d.uspString : a.uspString : a ? a.uspString : d ? d.uspString : null;
      this.tcString = (d = Tl(c.document)) && (y(d.A, 1) == null || typeof y(d.A, 1) === "string" ? y(d.A, 1) : undefined) != null ? (y(d.A, 1) == null || typeof y(d.A, 1) === "string" ? y(d.A, 1) : undefined) ?? "" : null;
      this.g = (c = Tl(c.document)) && (y(c.A, 2) == null || typeof y(c.A, 2) === "string" ? y(c.A, 2) : undefined) != null ? (y(c.A, 2) == null || typeof y(c.A, 2) === "string" ? y(c.A, 2) : undefined) ?? "" : null;
    }
  };
  const nm = {
    google_ad_channel: true,
    google_ad_host: true
  };
  function om(a, b) {
    if (a.location.href && a.location.href.substring) {
      b.url = a.location.href.substring(0, 200);
    }
    kk("ama", b, .01);
  }
  function pm(a) {
    const b = {};
    isPropInObject(nm, (c, d) => {
      if (d in a) {
        b[d] = a[d];
      }
    });
    return b;
  }
  function rm(a) {
    const b = /[a-zA-Z0-9._~-]/;
    const c = /%[89a-zA-Z]./;
    return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
      if (!d.match(c)) {
        const e = decodeURIComponent(d);
        if (e.match(b)) {
          return e;
        }
      }
      return d.toUpperCase();
    });
  }
  function sm(a) {
    let b = "";
    const c = /[/%?&=]/;
    for (let d = 0; d < a.length; ++d) {
      const e = a[d];
      b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
  }
  function tm(a) {
    a = rc(a, 2, Ob, 4);
    if (!a) {
      return false;
    }
    for (let b = 0; b < a.length; b++) {
      if (a[b] == 1) {
        return true;
      }
    }
    return false;
  }
  function um(a, b) {
    a = sm(rm(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
    const c = Qd(a);
    const d = vm(a);
    return b.find(e => {
      if (pc(e, hj, 7)) {
        var f = A(e, hj, 7);
        f = Rb(y(f.A, 1));
      } else {
        f = Rb(y(e.A, 1));
      }
      if (pc(e, hj, 7)) {
        e = A(e, hj, 7);
        e = y(e.A, 2) == null ? y(e.A, 2) : Number.isFinite(y(e.A, 2)) ? y(e.A, 2) | 0 : undefined;
      } else {
        e = 2;
      }
      if (typeof f !== "number") {
        return false;
      }
      switch (e) {
        case 1:
          return f == c;
        case 2:
          return d[f] || false;
      }
      return false;
    }) || null;
  }
  function vm(a) {
    const b = {};
    for (;;) {
      b[Qd(a)] = true;
      if (!a) {
        return b;
      }
      a = a.substring(0, a.lastIndexOf("/"));
    }
  }
  function wm(a) {
    a = a.google_ad_modifications = a.google_ad_modifications || {};
    const b = a.space_collapsing || "none";
    return a.remove_ads_by_default ? {
      Qa: true,
      Kb: b,
      ta: a.ablation_viewport_offset
    } : null;
  }
  function xm(a) {
    a = a.google_ad_modifications = a.google_ad_modifications || {};
    a.had_ads_ablation = true;
    a.remove_ads_by_default = true;
    a.space_collapsing = "slot";
    a.ablation_viewport_offset = 1;
  }
  function ym(a) {
    (window.google_ad_modifications = window.google_ad_modifications || {}).allow_second_reactive_tag = a;
  }
  function zm() {
    const a = window.google_ad_modifications = window.google_ad_modifications || {};
    if (!a.afg_slotcar_vars) {
      a.afg_slotcar_vars = {};
    }
    return a.afg_slotcar_vars;
  }
  const Cm = [2, 7, 1];
  function Dm(a, b, c, d = "") {
    return b === 1 && c && (Em(a, d, c)?.j() ?? false) ? true : Fm(a, d, e => La(B(e, ed, 2, 4), f => (y(f.A, 1) == null ? y(f.A, 1) : Number.isFinite(y(f.A, 1)) ? y(f.A, 1) | 0 : undefined) === b), K($d).j(Ci.g, Ci.defaultValue) ? !!A(c, Gm, 26)?.g() : Mc(c, 6) ?? false);
  }
  function Hm(a, b) {
    const c = (Jd(window.top) ? window.top : null) || window;
    return Im(c, a) ? true : Fm(window, "", d => La(rc(d, 3, Ob, 4), e => e === a), b);
  }
  function Im(a, b) {
    a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && Ia(a.split(","), b.toString()) >= 0;
  }
  function Fm(a, b, c, d) {
    a = (Jd(a.top) ? a.top : null) || a;
    const e = Jm(a, d);
    if (b) {
      b = te(String(b));
    }
    return qd(e, (f, g) => Object.prototype.hasOwnProperty.call(e, g) && (!b || b === g) && c(f));
  }
  function Jm(a, b) {
    a = Km(a, b);
    const c = {};
    isPropInObject(a, (d, e) => {
      try {
        const f = bd(fd, ec(d));
        c[e] = f;
      } catch (f) {}
    });
    return c;
  }
  function Km(a, b) {
    a = jl({
      l: a,
      aa: b
    });
    return a.g != null ? Lm(a.getValue()) : {};
  }
  function Lm(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) {
        return {};
      }
      const c = JSON.parse(b);
      return c !== Object(c) ? {} : pd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d));
    } catch (b) {
      return {};
    }
  }
  function Mm(a, b) {
    const c = [];
    a = (self.google_ad_modifications = self.google_ad_modifications || {})?.head_tag_slot_vars?.google_ad_host ?? self.document?.querySelector("meta[name=\"google-adsense-platform-account\"]")?.getAttribute("content") ?? null ? Cm : (a = Em(self, a, b)?.C()) ? [...rc(a, 3, Ob, 4)] : Cm;
    if (!a.includes(1)) {
      c.push(1);
    }
    if (!a.includes(2)) {
      c.push(2);
    }
    if (!a.includes(7)) {
      c.push(7);
    }
    return c;
  }
  function Em(a, b, c) {
    if (!b) {
      return null;
    }
    const d = A(c, Tp, Dc(c, Up) === 27 ? 27 : -1)?.D();
    a = A(c, Tp, Dc(c, Up) === 27 ? 27 : -1)?.g()?.g() === b && a.location.host && ((y(c.A, 17) == null || typeof y(c.A, 17) === "string" ? y(c.A, 17) : undefined) ?? "") === a.location.host;
    return d === b || a ? A(c, Tp, Dc(c, Up) === 27 ? 27 : -1) : null;
  }
  function Om(a, b, c, d) {
    Pm(new Qm(a, b, c, d));
  }
  function Pm(a) {
    const b = K($d).j(Ci.g, Ci.defaultValue) ? !!A(a.g, Gm, 26)?.g() : Mc(a.g, 6) ?? false;
    th(sh(jl({
      l: a.l,
      aa: b
    }), c => {
      Rm(a, c, true);
    }), () => {
      Sm(a);
    });
  }
  function Rm(a, b, c) {
    th(sh(Tm(b), d => {
      Um("ok");
      a.i(d, {
        fromLocalStorage: true
      });
    }), () => {
      var d = a.l;
      try {
        b.removeItem("google_ama_config");
      } catch (e) {
        om(d, {
          lserr: 1
        });
      }
      if (c) {
        Sm(a);
      } else {
        a.i(null, null);
      }
    });
  }
  function Sm(a) {
    th(sh(Vm(a), b => {
      a.i(b, {
        fromPABGSettings: true
      });
    }), () => {
      Wm(a);
    });
  }
  function Tm(a) {
    if (K($d).j(gi.g, gi.defaultValue)) {
      var b = null;
    } else {
      try {
        b = a.getItem("google_ama_config");
      } catch (d) {
        b = null;
      }
    }
    try {
      var c = b ? tj(b) : null;
    } catch (d) {
      c = null;
    }
    return (a = (a = c) ? (em(A(a, gj, 3)?.g()) ?? 0) > Date.now() ? a : null : null) ? new oh({
      value: a
    }, null) : new oh(null, Error("invlocst"));
  }
  function Vm(a) {
    if (((a.l.google_ad_modifications = a.l.google_ad_modifications || {})?.head_tag_slot_vars?.google_ad_host ?? a.l.document?.querySelector("meta[name=\"google-adsense-platform-account\"]")?.getAttribute("content") ?? null) && !(Mc(a.g, 22) ?? false)) {
      return new oh(null, Error("invtag"));
    }
    if (a = (a = Em(a.l, a.j, a.g)?.B()) && B(a, Nh, 1, 4).length > 0 ? a : null) {
      var b = new sj();
      var c = B(a, Nh, 1, 4);
      b = Jc(b, 1, c);
      a = B(a, nj, 2, 4);
      a = Jc(b, 7, a);
      a = new oh({
        value: a
      }, null);
    } else {
      a = new oh(null, Error("invtag"));
    }
    return a;
  }
  function Wm(a) {
    const b = K($d).j(Ci.g, Ci.defaultValue) ? !!A(a.g, Gm, 26)?.g() : Mc(a.g, 6) ?? false;
    nl({
      l: a.l,
      aa: b,
      eb: 50,
      ob: c => {
        Xm(a, c);
      }
    });
  }
  function Xm(a, b) {
    th(sh(b, c => {
      Rm(a, c, false);
    }), c => {
      Um(c.message);
      a.i(null, null);
    });
  }
  function Um(a) {
    kk("abg::amalserr", {
      status: a,
      guarding: "true",
      timeout: 50,
      rate: .01
    }, .01);
  }
  class Qm {
    constructor(a, b, c, d) {
      this.l = a;
      this.g = b;
      this.j = c;
      this.i = d;
    }
  }
  function Ym(a, b, c, d) {
    try {
      const f = um(a, B(c, nj, 7, 4));
      if (f && tm(f)) {
        if ((y(f.A, 4) == null || typeof y(f.A, 4) === "string" ? y(f.A, 4) : undefined) ?? undefined) {
          const h = new Eh(null, {
            google_package: (y(f.A, 4) == null || typeof y(f.A, 4) === "string" ? y(f.A, 4) : undefined) ?? undefined
          });
          d = Dh(d, h);
        }
        const g = new Ok(a, b, c, f, d);
        Cj(1E3, () => {
          const h = new ih();
          new wl(a, g, h).start();
          return h.i;
        }, undefined, a, true).apply().then(() => {
          om(a, {
            atf: 1
          });
        }, h => {
          (a.google_ama_state = a.google_ama_state || {}).exception = h;
          om(a, {
            atf: 0
          });
        });
      }
    } catch (f) {
      om(a, {
        atf: -1
      });
    }
  }
  function an(a, b) {
    if (!a) {
      return false;
    }
    a = a.hash;
    if (!a || !a.indexOf) {
      return false;
    }
    if (a.indexOf(b) != -1) {
      return true;
    }
    b = bn(b);
    return !!(b != "go" && a.indexOf(b) != -1);
  }
  function bn(a) {
    let b = "";
    isPropInObject(a.split("_"), c => {
      b += c.substr(0, 2);
    });
    return b;
  }
  var Gm = class extends J {
    g() {
      return Mc(this, 1) ?? false;
    }
    j() {
      return Mc(this, 2) ?? false;
    }
  };
  var cn = class extends J {
    g() {
      return (y(this.A, 3) == null || typeof y(this.A, 3) === "string" ? y(this.A, 3) : undefined) ?? "";
    }
  };
  var dn = class extends J {
    g() {
      return Fc(this, cn, 1);
    }
  };
  function en(a) {
    const b = new dn();
    var c = new cn();
    var d = Qb(y(a.A, 1)) ?? 0;
    c = nc(c, 1, d == null ? d : Pb(d));
    d = Qb(y(a.A, 18)) ?? 0;
    c = nc(c, 2, d == null ? d : Pb(d));
    d = (y(a.A, 2) == null || typeof y(a.A, 2) === "string" ? y(a.A, 2) : undefined) ?? "";
    c = nc(c, 3, Yb(d));
    d = K($d).j(Ci.g, Ci.defaultValue) ? !!A(a, Gm, 26)?.g() : Mc(a, 6) ?? false;
    c = nc(c, 4, Kb(d));
    d = Mc(a, 20) ?? false;
    c = nc(c, 5, Kb(d));
    d = Mc(a, 9) ?? false;
    c = nc(c, 6, Kb(d));
    d = K($d).j(Ci.g, Ci.defaultValue) ? !!A(a, Gm, 26)?.j() : Mc(a, 25) ?? false;
    c = nc(c, 7, Kb(d));
    d = (y(a.A, 8) == null || typeof y(a.A, 8) === "string" ? y(a.A, 8) : undefined) ?? "";
    c = nc(c, 8, Yb(d));
    d = (y(a.A, 3) == null || typeof y(a.A, 3) === "string" ? y(a.A, 3) : undefined) ?? "";
    c = nc(c, 9, Yb(d));
    a = A(a, Gm, 26);
    a = Hc(c, 10, a);
    Hc(b, 1, a);
    return b;
  }
  function fn() {
    const a = {};
    if (K($d).i(bi.g, bi.defaultValue)) {
      a.bust = K($d).i(bi.g, bi.defaultValue);
    }
    return a;
  }
  class gn {
    constructor() {
      this.promise = new Promise((a, b) => {
        this.resolve = a;
        this.reject = b;
      });
    }
  }
  function hn() {
    const {
      promise: a,
      resolve: b
    } = new gn();
    return {
      promise: a,
      resolve: b
    };
  }
  function jn(a = () => {}) {
    if (!self.google_llp) {
      self.google_llp = {};
    }
    const b = self.google_llp;
    let c = b[7];
    if (c) {
      return c;
    }
    c = hn();
    b[7] = c;
    a();
    return c;
  }
  function kn(a) {
    return jn(() => {
      Ld(self.document, a);
    }).promise;
  }

  /*
    Array.from({
      length: 11
    }, (a, b) => b / 10)
  */
  //  [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  function ln(a) {
    if (a.google_reactive_ads_global_state) {
      if (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null) {
        a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set();
      }
      if (a.google_reactive_ads_global_state.sideRailAvailableSpace == null) {
        a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map();
      }
      if (a.google_reactive_ads_global_state.sideRailPlasParam == null) {
        a.google_reactive_ads_global_state.sideRailPlasParam = new Map();
      }
      if (a.google_reactive_ads_global_state.sideRailMutationCallbacks == null) {
        a.google_reactive_ads_global_state.sideRailMutationCallbacks = [];
      }
    } else {
      a.google_reactive_ads_global_state = new mn();
    }
    return a.google_reactive_ads_global_state;
  }
  var mn = class {
    constructor() {
      this.wasPlaTagProcessed = false;
      this.wasReactiveAdConfigReceived = {};
      this.adCount = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledInAsfe = {};
      this.wasReactiveTagRequestSent = false;
      this.reactiveTypeDisabledByPublisher = {};
      this.tagSpecificState = {};
      this.messageValidationEnabled = false;
      this.floatingAdsStacking = {
        maxZIndexRestrictions: {},
        nextRestrictionId: 0,
        maxZIndexListeners: []
      };
      this.sideRailProcessedFixedElements = new Set();
      this.sideRailAvailableSpace = new Map();
      this.sideRailPlasParam = new Map();
      this.sideRailMutationCallbacks = [];
      this.clickTriggeredInterstitialMayBeDisplayed = false;
    }
  };
  /*
    var nn = class {
      constructor() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = [];
      }
    };
  */
  var on = a => {
    if (self.google_apltlad || a.google_ad_intent_query) {
      return null;
    }
    var b = a.google_loader_used !== "sd" && K($d).j(ji.g, ji.defaultValue) && (self.top == self ? 0 : Jd(self.top) ? 1 : 2) === 1;
    if (self !== self.top && !b || !a.google_ad_client) {
      return null;
    }
    self.google_apltlad = true;
    b = {
      enable_page_level_ads: {
        pltais: true
      },
      google_ad_client: a.google_ad_client
    };
    const c = b.enable_page_level_ads;
    isPropInObject(a, (d, e) => {
      if (cj[e] && e !== "google_ad_client") {
        c[e] = d;
      }
    });
    c.google_pgb_reactive = 7;
    c.asro = K($d).j(oi.g, oi.defaultValue);
    c.aihb = K($d).j(ki.g, ki.defaultValue);
    c.aifxl = K($d).g(mi.g, mi.defaultValue).length ? K($d).g(mi.g, mi.defaultValue).join("~") : undefined;
    if (K($d).u(ri.g, ri.defaultValue)) {
      c.aiapm = K($d).u(ri.g, ri.defaultValue);
    }
    if (K($d).u(si.g, si.defaultValue)) {
      c.aiapmi = K($d).u(si.g, si.defaultValue);
    }
    if (K($d).u(qi.g, qi.defaultValue)) {
      c.aiact = K($d).u(qi.g, qi.defaultValue);
    }
    if (K($d).u(li.g, li.defaultValue)) {
      c.aicct = K($d).u(li.g, li.defaultValue);
    }
    if (K($d).u(ti.g, ti.defaultValue)) {
      c.ailct = K($d).u(ti.g, ti.defaultValue);
    }
    if (K($d).u(ui.g, ui.defaultValue)) {
      c.aimart = K($d).u(ui.g, ui.defaultValue);
    }
    c.aiof = K($d).g(ni.g, ni.defaultValue).length ? K($d).g(ni.g, ni.defaultValue).join("~") : undefined;
    if ("google_ad_section" in a || "google_ad_region" in a) {
      c.google_ad_section = a.google_ad_section || a.google_ad_region;
    }
    return b;
  };
  function pn(a, b) {
    if (!(window.google_ad_modifications = window.google_ad_modifications || {}).ama_ran_on_page) {
      Cj(1001, () => {
        qn({
          g: a,
          i: b,
          l: self
        });
      }, undefined, self, true).apply();
    }
  }
  function qn(a) {
    Om(a.l, a.i, a.g.google_ad_client || "", (b, c) => {
      if (!(window.google_ad_modifications = window.google_ad_modifications || {}).ama_ran_on_page) {
        if (b) {
          sn(self, a.g, b, c);
        }
      }
    });
  }
  /*
    class rn {
      constructor(a, b) {
        this.l = self;
        this.g = a;
        this.i = b;
      }
    }
  */
  function sn(a, b, c, d) {
    if (d) {
      (a.google_ama_state = a.google_ama_state || {}).configSourceInAbg = d;
    }
    if (pc(c, rj, 24)) {
      d = Kj(a);
      d.availableAbg = true;
      d.ablationFromStorage = !!A(c, rj, 24)?.g()?.g();
    }
    if (ka(b.enable_page_level_ads) && b.enable_page_level_ads.google_pgb_reactive === 7) {
      if (!um(a, B(c, nj, 7, 4))) {
        kk("amaait", {
          value: "true"
        });
        return;
      }
      kk("amaait", {
        value: "false"
      });
    }
    (window.google_ad_modifications = window.google_ad_modifications || {}).ama_ran_on_page = true;
    if (A(c, fj, 15)?.g()) {
      (a.google_ad_modifications = a.google_ad_modifications || {}).enable_overlap_observer = true;
    }
    if (A(c, rj, 24)?.g()?.g()) {
      Kj(a).ablatingThisPageview = true;
      xm(a);
    }
    le(3, [w(c)]);
    b = pm(ka(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
    const f = Dh(Hh, new Eh(null, b));
    dk.g(782, () => {
      Ym(a, b.google_ad_client || "", c, f);
    }, undefined);
  }
  function tn(a, b) {
    a = a.document;
    var c = undefined;
    for (var d = 0; !c || a.getElementById(c + "_host");) {
      c = "aswift_" + d++;
    }
    a = c;
    c = Number(b.google_ad_width || 0);
    b = Number(b.google_ad_height || 0);
    d = document.createElement("div");
    d.id = a + "_host";
    const e = d.style;
    e.border = "none";
    e.height = `${b}px`;
    e.width = `${c}px`;
    e.margin = "0px";
    e.padding = "0px";
    e.position = "relative";
    e.visibility = "visible";
    e.backgroundColor = "transparent";
    e.display = "inline-block";
    return {
      vb: a,
      Nb: d
    };
  }
  function un({
    va: a,
    Ba: b
  }) {
    return a || (b === "dev" ? "dev" : "");
  }
  var wn = {
    "120x90": true,
    "160x90": true,
    "180x90": true,
    "200x90": true,
    "468x15": true,
    "728x15": true
  };
  function xn(a, b) {
    if (b == 15) {
      if (a >= 728) {
        return 728;
      }
      if (a >= 468) {
        return 468;
      }
    } else if (b == 90) {
      if (a >= 200) {
        return 200;
      }
      if (a >= 180) {
        return 180;
      }
      if (a >= 160) {
        return 160;
      }
      if (a >= 120) {
        return 120;
      }
    }
    return null;
  }
  var yn = class extends J {
    getVersion() {
      return (y(this.A, 2) == null || typeof y(this.A, 2) === "string" ? y(this.A, 2) : undefined) ?? "";
    }
  };
  var In = class extends J {};
  const Jn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function Kn() {
    var a = window;
    if (typeof a.navigator?.userAgentData?.getHighEntropyValues !== "function") {
      return null;
    }
    const b = a.google_tag_data ?? (a.google_tag_data = {});
    if (b.uach_promise) {
      return b.uach_promise;
    }
    a = a.navigator.userAgentData.getHighEntropyValues(Jn).then(c => {
      b.uach ?? (b.uach = c);
      return c;
    });
    return b.uach_promise = a;
  }
  function Ln(a) {
    return nc(Jc(nc(nc(nc(nc(nc(nc(nc(new In(), 3, Yb(a.architecture || "")), 9, Yb(a.bitness || "")), 7, Kb(a.mobile || false)), 4, Yb(a.model || "")), 1, Yb(a.platform || "")), 2, Yb(a.platformVersion || "")), 5, Yb(a.uaFullVersion || "")), 10, a.fullVersionList?.map(b => {
      var c = new yn();
      c = nc(c, 1, Yb(b.brand));
      return nc(c, 2, Yb(b.version));
    }) || []), 11, Kb(a.wow64 || false));
  }
  function Mn() {
    return Kn()?.then(a => Ln(a)) ?? null;
  }
  function Nn(a, b) {
    if (!b.google_ad_host) {
      if (a = a.document?.querySelector("meta[name=\"google-adsense-platform-account\"]")?.getAttribute("content") ?? null) {
        b.google_ad_host = a;
      }
    }
  }
  function On(a, b, c = "") {
    if (!window.google_sa_queue) {
      window.google_sa_queue = [];
      window.google_process_slots = dk.u(215, () => {
        Pn(window.google_sa_queue);
      });
      a = Qn(c, a, b);
      Ld(window.document, a);
    }
  }
  function Pn(a) {
    const b = a.shift();
    if (typeof b === "function") {
      dk.g(216, b, undefined);
    }
    if (a.length) {
      self.setTimeout(dk.u(215, () => {
        Pn(a);
      }), 0);
    }
  }
  function Rn(a, b) {
    a.google_sa_queue = a.google_sa_queue || [];
    if (a.google_sa_impl) {
      b();
    } else {
      a.google_sa_queue.push(b);
    }
  }
  function Qn(a, b, c) {
    var d = window;
    b = Mc(c, 4) ?? false ? b.Gb : b.Hb;
    a: {
      if (Mc(c, 4) ?? false) {
        if (a = a || (d.google_ad_client ? String(d.google_ad_client) : (d.google_ad_modifications = d.google_ad_modifications || {}).head_tag_slot_vars?.google_ad_client ?? d.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client") ?? "")) {
          b: {
            try {
              for (; d;) {
                if (d.location?.hostname) {
                  var e = d.location.hostname;
                  break b;
                }
                d = d.parent;
              }
            } catch (f) {}
            e = "";
          }
          e = {
            client: te(a),
            plah: e
          };
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      e = {};
    }
    e = {
      ...e,
      ...fn()
    };
    d = K($d).u(xi.g, xi.defaultValue);
    if (!(Mc(c, 4) ?? false) && [0, 1].includes(d)) {
      e.osttc = String(d);
    }
    return Hd(b, new Map(Object.entries(e)));
  }
  function Sn(a, b, c, d) {
    const {
      vb: e,
      Nb: f
    } = tn(a, b);
    c.appendChild(f);
    Tn(a, c, b);
    c = b.google_start_time ?? ch;
    const g = new Date().getTime();
    b.google_lrv = un({
      va: "m202504290101",
      Ba: (y(d.A, 2) == null || typeof y(d.A, 2) === "string" ? y(d.A, 2) : undefined) ?? ""
    });
    b.google_async_iframe_id = e;
    b.google_start_time = c;
    b.google_bpp = g > c ? g - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[e] = b;
    Rn(a, () => {
      var h = f;
      if (!h || !h.isConnected) {
        h = a.document.getElementById(String(b.google_async_iframe_id) + "_host");
        if (h == null) {
          throw Error("no_div");
        }
      }
      if (h = a.google_sa_impl({
        pubWin: a,
        vars: b,
        innerInsElement: h
      })) {
        jk(911, h);
      }
    });
  }
  function Tn(a, b, c) {
    var d = c.google_ad_output;
    var e = c.google_ad_format;
    var f = c.google_ad_width || 0;
    var g = c.google_ad_height || 0;
    if (!(e || d !== "html" && d != null)) {
      e = String(f).concat("x", g);
    }
    if (K($d).j(Bi.g, Bi.defaultValue)) {
      if (c.google_reactive_ad_format === 10) {
        e = "interstitial";
      } else if (c.google_reactive_ad_format === 11) {
        e = "rewarded";
      }
    }
    d = !c.google_ad_slot || c.google_override_format || !wn[c.google_ad_width + "x" + c.google_ad_height] && c.google_loader_used === "aa";
    e = e && d ? e.toLowerCase() : "";
    c.google_ad_format = e;
    if (typeof c.google_reactive_sra_index !== "number" || !c.google_ad_unit_key) {
      e = new Array(5);
      e[0] = c.google_ad_slot;
      e[1] = c.google_orig_ad_format || c.google_ad_format;
      e[2] = c.google_ad_type;
      e[3] = c.google_orig_ad_width || c.google_ad_width;
      e[4] = c.google_orig_ad_height || c.google_ad_height;
      d = new Array(25);
      f = 0;
      for (g = b; g && f < 25; g = g.parentNode, ++f) {
        if (g.nodeType === 9) {
          d[f] = "";
        } else {
          d[f] = g.id;
        }
      }
      if (d = d.join()) {
        e.push(d);
      }
      c.google_ad_unit_key = Qd(e.join(":")).toString();
      e = new Array();
      for (d = 0; b && d < 25; b = b.parentElement, ++d) {
        f = (f = b.nodeType !== 9 && b.id) ? "/" + f : "";
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = b.nodeName.toString().toLowerCase();
            const h = b.parentElement.childNodes;
            let k = 0;
            for (let n = 0; n < h.length; ++n) {
              const l = h[n];
              if (l.nodeName && l.nodeName.toString().toLowerCase() === g) {
                if (b === l) {
                  g = ".".concat(k);
                  break a;
                }
                ++k;
              }
            }
          }
          g = "";
        }
        e.push(String(b.nodeName && b.nodeName.toString().toLowerCase()).concat(f, g));
      }
      b = e.join() + ":";
      e = [];
      if (a) {
        try {
          let h = a.parent;
          for (d = 0; h && h !== a && d < 25; ++d) {
            const k = h.frames;
            for (f = 0; f < k.length; ++f) {
              if (a === k[f]) {
                e.push(f);
                break;
              }
            }
            a = h;
            h = a.parent;
          }
        } catch (h) {}
      }
      c.google_ad_dom_fingerprint = Qd(b + e.join()).toString();
    }
  }
  function Un() {
    var a = Jd(self.top) ? self.top : null;
    if (a) {
      a = ln(a);
      if (!a.tagSpecificState[1]) {
        a.tagSpecificState[1] = {
          debugCard: null,
          debugCardRequested: false
        };
      }
    }
  }
  function Vn() {
    const a = Mn();
    if (a != null) {
      a.then(b => {
        window.google_user_agent_client_hint = JSON.stringify(w(b));
      });
    }
    Zd();
  }
  var Wn = class {
    constructor(a, b) {
      this.g = a;
      this.u = b;
    }
    height() {
      return this.u;
    }
    i(a) {
      return a > K($d).u(ei.g, ei.defaultValue) && this.u > 300 ? this.g : Math.min(1200, Math.round(a));
    }
    j() {}
  };
  function Xn(a) {
    return b => !!(b.Z() & a);
  }
  var Y = class extends Wn {
    constructor(a, b, c, d = false) {
      super(a, b);
      this.C = c;
      this.B = d;
    }
    Z() {
      return this.C;
    }
    j(a, b, c) {
      c.style.height = String(this.height()).concat("px");
      b.rpe = true;
    }
  };
  const Yn = {
    image_stacked: 0.5235602094240838,
    image_sidebyside: 0.2617801047120419,
    mobile_banner_image_sidebyside: 0.2617801047120419,
    pub_control_image_stacked: 0.5235602094240838,
    pub_control_image_sidebyside: 0.2617801047120419,
    pub_control_image_card_stacked: 0.5235602094240838,
    pub_control_image_card_sidebyside: 0.267379679144385,
    pub_control_text: 0,
    pub_control_text_card: 0
  };
  const Zn = {
    image_stacked: 80,
    image_sidebyside: 0,
    mobile_banner_image_sidebyside: 0,
    pub_control_image_stacked: 80,
    pub_control_image_sidebyside: 0,
    pub_control_image_card_stacked: 85,
    pub_control_image_card_sidebyside: 0,
    pub_control_text: 80,
    pub_control_text_card: 80
  };
  const $n = {
    pub_control_image_stacked: 100,
    pub_control_image_sidebyside: 200,
    pub_control_image_card_stacked: 150,
    pub_control_image_card_sidebyside: 250,
    pub_control_text: 100,
    pub_control_text_card: 150
  };
  function ao(a) {
    var b = 0;
    if (a.R) {
      b++;
    }
    if (a.K) {
      b++;
    }
    if (a.L) {
      b++;
    }
    if (b < 3) {
      return {
        X: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
      };
    }
    b = a.R.split(",");
    const c = a.L.split(",");
    a = a.K.split(",");
    if (b.length !== c.length || b.length !== a.length) {
      return {
        X: "Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num=\"4,2\"\ndata-matched-content-columns-num=\"1,6\"\ndata-matched-content-ui-type=\"image_stacked,image_card_sidebyside\""
      };
    }
    if (b.length > 2) {
      return {
        X: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${"\n data-matched-content-rows-num=\"4,2\"\ndata-matched-content-columns-num=\"1,6\"\ndata-matched-content-ui-type=\"image_stacked,image_card_sidebyside\""}.`
      };
    }
    const d = [];
    const e = [];
    for (let g = 0; g < b.length; g++) {
      var f = Number(c[g]);
      if (Number.isNaN(f) || f === 0) {
        return {
          X: "Wrong value '".concat(c[g], "' for ", "data-matched-content-rows-num", ".")
        };
      }
      d.push(f);
      f = Number(a[g]);
      if (Number.isNaN(f) || f === 0) {
        return {
          X: "Wrong value '".concat(a[g], "' for ", "data-matched-content-columns-num", ".")
        };
      }
      e.push(f);
    }
    return {
      L: d,
      K: e,
      Xa: b
    };
  }
  function co(a, b, c, d) {
    b = Math.floor(((a - 8 * b - 8) / b * Yn[d] + Zn[d]) * c + 8 * c + 8);
    return a > 1500 ? {
      width: 0,
      height: 0,
      Ib: "Calculated slot width is too large: ".concat(a)
    } : b > 1500 ? {
      width: 0,
      height: 0,
      Ib: "Calculated slot height is too large: ".concat(b)
    } : {
      width: a,
      height: b
    };
  }
  function eo(a, b) {
    const c = a - 8 - 8;
    --b;
    return {
      width: a,
      height: Math.floor(c / 1.91 + 70) + Math.floor((c * 0.2617801047120419 + 0) * b + 8 * b + 8)
    };
  }
  var go = class {
    constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, n = null, l = null, m = null) {
      this.D = a;
      this.V = b;
      this.Z = c;
      this.g = d;
      this.G = e;
      this.F = f;
      this.P = g;
      this.u = h;
      this.B = k;
      this.i = n;
      this.j = l;
      this.C = m;
    }
    size() {
      return this.V;
    }
  };
  const ho = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
  var io = class extends Wn {
    i(a) {
      return Math.min(1200, Math.max(this.g, Math.round(a)));
    }
  };
  function jo(a, b) {
    ko(a, b);
    if (b.google_content_recommendation_ui_type === "pedestal") {
      return new go(9, new io(a, Math.floor(a * 2.189)));
    }
    if (K($d).j(Th.g, Th.defaultValue)) {
      var c = !(navUserAgent.indexOf("iPad") != -1 || navUserAgent.indexOf("Android") != -1 && !(navUserAgent.indexOf("Mobile") != -1) || navUserAgent.indexOf("Silk") != -1) && (navUserAgent.indexOf("iPod") != -1 || navUserAgent.indexOf("iPhone") != -1 || navUserAgent.indexOf("Android") != -1 || navUserAgent.indexOf("IEMobile") != -1);
      var d = K($d).u(Uh.g, Uh.defaultValue);
      var e = K($d).u(Sh.g, Sh.defaultValue);
      var f = K($d).u(Rh.g, Rh.defaultValue);
      if (a < 468) {
        if (c) {
          a = eo(a, d);
          d = {
            W: a.width,
            U: a.height,
            K: 1,
            L: d,
            R: "mobile_banner_image_sidebyside"
          };
        } else {
          a = co(a, 1, d, "image_sidebyside");
          d = {
            W: a.width,
            U: a.height,
            K: 1,
            L: d,
            R: "image_sidebyside"
          };
        }
      } else {
        d = a >= 1200 ? {
          width: 1200,
          height: 600
        } : a >= 850 ? {
          width: a,
          height: Math.floor(a * .5)
        } : a >= 550 ? {
          width: a,
          height: Math.floor(a * .6)
        } : a >= 468 ? {
          width: a,
          height: Math.floor(a * .7)
        } : {
          width: a,
          height: Math.floor(a * 3.44)
        };
        if (e === 1) {
          d.height = Math.floor(d.height * .5);
        }
        d = {
          W: d.width,
          U: d.height,
          K: f,
          L: e,
          R: "image_stacked"
        };
      }
    } else {
      d = !(navUserAgent.indexOf("iPad") != -1 || navUserAgent.indexOf("Android") != -1 && !(navUserAgent.indexOf("Mobile") != -1) || navUserAgent.indexOf("Silk") != -1) && (navUserAgent.indexOf("iPod") != -1 || navUserAgent.indexOf("iPhone") != -1 || navUserAgent.indexOf("Android") != -1 || navUserAgent.indexOf("IEMobile") != -1);
      if (a < 468) {
        if (d) {
          d = eo(a, 12);
          d = {
            W: d.width,
            U: d.height,
            K: 1,
            L: 12,
            R: "mobile_banner_image_sidebyside"
          };
        } else {
          d = a >= 1200 ? {
            width: 1200,
            height: 600
          } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
          } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
          } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
          } : {
            width: a,
            height: Math.floor(a * 3.44)
          };
          d = {
            W: d.width,
            U: d.height,
            K: 1,
            L: 13,
            R: "image_sidebyside"
          };
        }
      } else {
        d = a >= 1200 ? {
          width: 1200,
          height: 600
        } : a >= 850 ? {
          width: a,
          height: Math.floor(a * .5)
        } : a >= 550 ? {
          width: a,
          height: Math.floor(a * .6)
        } : a >= 468 ? {
          width: a,
          height: Math.floor(a * .7)
        } : {
          width: a,
          height: Math.floor(a * 3.44)
        };
        d = {
          W: d.width,
          U: d.height,
          K: 4,
          L: 2,
          R: "image_stacked"
        };
      }
    }
    lo(b, d);
    return new go(9, new io(d.W, d.U));
  }
  function mo(a, b) {
    ko(a, b);
    {
      const f = ao({
        L: b.google_content_recommendation_rows_num,
        K: b.google_content_recommendation_columns_num,
        R: b.google_content_recommendation_ui_type
      });
      if (f.X) {
        a = {
          W: 0,
          U: 0,
          K: 0,
          L: 0,
          R: "image_stacked",
          X: f.X
        };
      } else {
        var c = f.Xa.length === 2 && a >= 468 ? 1 : 0;
        var d = f.Xa[c];
        d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
        var e = $n[d];
        let g = f.K[c];
        for (; a / g < e && g > 1;) {
          g--;
        }
        e = g;
        c = f.L[c];
        a = co(a, e, c, d);
        a = {
          W: a.width,
          U: a.height,
          K: e,
          L: c,
          R: d
        };
      }
    }
    if (a.X) {
      throw new T(a.X);
    }
    lo(b, a);
    return new go(9, new io(a.W, a.U));
  }
  function ko(a, b) {
    if (a <= 0) {
      throw new T("Invalid responsive width from Matched Content slot ".concat(b.google_ad_slot, ": ", a, ". Please ensure to put this Matched Content slot into a non-zero width div container."));
    }
  }
  function lo(a, b) {
    a.google_content_recommendation_ui_type = b.R;
    a.google_content_recommendation_columns_num = b.K;
    a.google_content_recommendation_rows_num = b.L;
  }
  var no = class extends Wn {
    i() {
      return this.g;
    }
    j(a, b, c) {
      Ui(a, c);
      c.style.height = `${this.height()}px`;
      b.rpe = true;
    }
  };
  const oo = {
    "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
    "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
    "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
    "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
    "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
  };
  var po = class extends Wn {
    i() {
      return Math.min(1200, this.g);
    }
  };
  function qo(a, b, c, d, e) {
    var f = e.google_ad_layout || "image-top";
    if (f === "in-article") {
      var g = a;
      if (e.google_full_width_responsive === "false") {
        a = g;
      } else {
        a = Pi(b, c, g, K($d).u(Xh.g, Xh.defaultValue), e);
        if (a !== true) {
          e.gfwrnwer = a;
          a = g;
        } else if (a = Ji(b).clientWidth ?? undefined) {
          e.google_full_width_responsive_allowed = true;
          if (c.parentElement) {
            b: {
              g = c;
              for (let h = 0; h < 100 && g.parentElement; ++h) {
                const k = g.parentElement.childNodes;
                for (let n = 0; n < k.length; ++n) {
                  const l = k[n];
                  if (l !== g && Si(b, l)) {
                    break b;
                  }
                }
                g = g.parentElement;
                g.style.width = "100%";
                g.style.height = "auto";
              }
            }
            Ui(b, c);
          } else {
            a = g;
          }
        } else {
          a = g;
        }
      }
    }
    if (a < 250) {
      throw new T("Fluid responsive ads must be at least 250px wide: ".concat("availableWidth=", a));
    }
    a = Math.min(1200, Math.floor(a));
    if (d && f !== "in-article") {
      f = Math.ceil(d);
      if (f < 50) {
        throw new T("Fluid responsive ads must be at least 50px tall: ".concat("height=", f));
      }
      return new go(11, new Wn(a, f));
    }
    if (f !== "in-article" && (d = e.google_ad_layout_key)) {
      f = String(d);
      if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
        b = [];
        for (e = 0; e < d; e++) {
          b.push(parseInt(c[e], 36) / 1E3);
        }
      } else {
        b = null;
      }
      if (!b) {
        throw new T("Invalid data-ad-layout-key value: ".concat(f));
      }
      f = (a + -725) / 1E3;
      c = 0;
      d = 1;
      e = b.length;
      for (g = 0; g < e; g++) {
        c += b[g] * d;
        d *= f;
      }
      f = Math.ceil(c * 1E3 + 725 + 10);
      if (isNaN(f)) {
        throw new T("Invalid height: height=".concat(f));
      }
      if (f < 50) {
        throw new T("Fluid responsive ads must be at least 50px tall: height=".concat(f));
      }
      if (f > 1200) {
        throw new T("Fluid responsive ads must be at most 1200px tall: height=".concat(f));
      }
      return new go(11, new Wn(a, f));
    }
    d = oo[f];
    if (!d) {
      throw new T("Invalid data-ad-layout value: " + f);
    }
    c = Ni(c, b) < Ji(b).clientHeight - 100;
    b = Ji(b).clientWidth ?? undefined;
    b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
    return new go(11, f === "in-article" ? new po(a, b) : new Wn(a, b));
  }
  function ro(a) {
    return b => {
      for (let c = a.length - 1; c >= 0; --c) {
        if (!a[c](b)) {
          return false;
        }
      }
      return true;
    };
  }
  function so(a, b) {
    var c = to.slice(0);
    const d = c.length;
    let e = null;
    for (let f = 0; f < d; ++f) {
      const g = c[f];
      if (a(g)) {
        if (b == null || b(g)) {
          return g;
        }
        if (e === null) {
          e = g;
        }
      }
    }
    return e;
  }
  var Z = new Array(17);
  Z[0] = new Y(970, 90, 2);
  Z[1] = new Y(728, 90, 2);
  Z[2] = new Y(468, 60, 2);
  Z[3] = new Y(336, 280, 1);
  Z[4] = new Y(320, 100, 2);
  Z[5] = new Y(320, 50, 2);
  Z[6] = new Y(300, 600, 4);
  Z[7] = new Y(300, 250, 1);
  Z[8] = new Y(250, 250, 1);
  Z[9] = new Y(234, 60, 2);
  Z[10] = new Y(200, 200, 1);
  Z[11] = new Y(180, 150, 1);
  Z[12] = new Y(160, 600, 4);
  Z[13] = new Y(125, 125, 1);
  Z[14] = new Y(120, 600, 4);
  Z[15] = new Y(120, 240, 4);
  Z[16] = new Y(120, 120, 1, true);
  var to = new Array(17);
  to[0] = Z[6];
  to[1] = Z[12];
  to[2] = Z[3];
  to[3] = Z[0];
  to[4] = Z[7];
  to[5] = Z[14];
  to[6] = Z[1];
  to[7] = Z[8];
  to[8] = Z[10];
  to[9] = Z[4];
  to[10] = Z[15];
  to[11] = Z[2];
  to[12] = Z[11];
  to[13] = Z[5];
  to[14] = Z[13];
  to[15] = Z[9];
  to[16] = Z[16];
  function uo(a, b, c, d, e) {
    if (e.google_full_width_responsive === "false") {
      c = {
        H: a,
        F: 1
      };
    } else if (b === "autorelaxed" && e.google_full_width_responsive || b === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize) {
      b = Qi(a, c, d, e);
      c = b !== true ? {
        H: a,
        F: b
      } : {
        H: (Ji(c).clientWidth ?? undefined) || a,
        F: true
      };
    } else {
      c = {
        H: a,
        F: 2
      };
    }
    const {
      H: f,
      F: g
    } = c;
    return g !== true ? {
      H: a,
      F: g
    } : d.parentElement ? {
      H: f,
      F: g
    } : {
      H: a,
      F: g
    };
  }
  function wo(a, b, c, d, e) {
    const {
      H: f,
      F: g
    } = dk.g(247, () => uo(a, b, c, d, e), undefined);
    var h = g === true;
    const k = Ud(d.style.width);
    const n = Ud(d.style.height);
    const {
      V: l,
      P: m,
      Z: p,
      Wa: v
    } = xo(f, b, c, d, e, h);
    h = yo(b, p);
    var t;
    const x = (t = Vi(d, c, "marginLeft")) ? `${t}px` : "";
    const H = (t = Vi(d, c, "marginRight")) ? `${t}px` : "";
    t = Xi(d, c) || "";
    return new go(h, l, p, null, v, g, m, x, H, n, k, t);
  }
  function xo(a, b, c, d, e, f) {
    b = zo(c, a, b);
    let g;
    var h = false;
    let k = false;
    var n = (Ji(c).clientWidth ?? undefined) < 488;
    if (n) {
      g = Ki(d, c);
      var l = Ni(d, c) < Ji(c).clientHeight - 100;
      h = !l && g;
      k = l && g;
    }
    l = [Yi(a), Xn(b)];
    if (!K($d).j(ci.g, ci.defaultValue)) {
      l.push(Zi(n, c, d, k));
    }
    if (e.google_max_responsive_height != null) {
      l.push(aj(e.google_max_responsive_height));
    }
    n = [t => !t.B];
    if (h || k) {
      h = bj(c, d);
      n.push(aj(h));
    }
    const m = so(ro(l), ro(n));
    if (!m) {
      throw new T("No slot size for availableWidth=".concat(a));
    }
    const {
      V: p,
      P: v
    } = dk.g(248, () => {
      var t;
      a: if (f) {
        if (e.gfwrnh && (t = Ud(e.gfwrnh))) {
          t = {
            V: new no(a, t),
            P: true
          };
          break a;
        }
        t = K($d).u(Zh.g, Zh.defaultValue);
        t = t > 0 ? a / t : a / 1.2;
        if (e.google_resizing_allowed || e.google_full_width_responsive === "true") {
          var x = Infinity;
        } else {
          x = d;
          let M = Infinity;
          do {
            var H = Vi(x, c, "height");
            if (H) {
              M = Math.min(M, H);
            }
            if (H = Vi(x, c, "maxHeight")) {
              M = Math.min(M, H);
            }
          } while (x.parentElement && (x = x.parentElement) && x.tagName !== "HTML");
          x = M;
        }
        if (!(K($d).j(ai.g, ai.defaultValue) && x <= t * 2) && (x = Math.min(t, x), x < t * .5 || x < 100)) {
          x = t;
        }
        t = {
          V: new no(a, Math.floor(x)),
          P: x < t ? 102 : true
        };
      } else {
        t = {
          V: m,
          P: 100
        };
      }
      return t;
    }, undefined);
    return e.google_ad_layout === "in-article" ? {
      V: Ao(a, c, d, p, e),
      P: false,
      Z: b,
      Wa: g
    } : {
      V: p,
      P: v,
      Z: b,
      Wa: g
    };
  }
  function yo(a, b) {
    if (a === "auto") {
      return 1;
    }
    switch (b) {
      case 2:
        return 2;
      case 1:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      case 6:
        return 6;
      case 5:
        return 7;
      case 7:
        return 8;
      default:
        throw Error("bad mask");
    }
  }
  function zo(a, b, c) {
    if (c === "auto") {
      c = Math.min(1200, Ji(a).clientWidth ?? undefined);
      b = b / c <= .25 ? 4 : 3;
    } else {
      b = 0;
      for (const d in Hi) if (c.indexOf(d) !== -1) {
        b |= Hi[d];
      }
    }
    return b;
  }
  function Ao(a, b, c, d, e) {
    const f = e.google_ad_height || Vi(c, b, "height");
    b = qo(a, b, c, f, e).size();
    return b.g * b.height() > a * d.height() ? new Y(b.g, b.height(), 1) : d;
  }
  function Bo(a, b, c, d, e) {
    var f;
    if (f = Ji(b).clientWidth ?? undefined) {
      if ((Ji(b).clientWidth ?? undefined) < 488) {
        if (b.innerHeight >= b.innerWidth) {
          e.google_full_width_responsive_allowed = true;
          Ui(b, c);
          f = {
            H: f,
            F: true
          };
        } else {
          f = {
            H: a,
            F: 5
          };
        }
      } else {
        f = {
          H: a,
          F: 4
        };
      }
    } else {
      f = {
        H: a,
        F: 10
      };
    }
    const {
      H: g,
      F: h
    } = f;
    if (h !== true || a === g) {
      return new go(12, new Wn(a, d), null, null, true, h, 100);
    }
    const {
      V: k,
      P: n,
      Z: l
    } = xo(g, "auto", b, c, e, true);
    return new go(1, k, l, 2, true, h, n);
  }
  function Co(a) {
    const b = a.google_ad_format;
    if (b === "autorelaxed") {
      if (K($d).j(fi.g, fi.defaultValue)) {
        a.google_ad_format = "auto";
        return 1;
      }
      a: {
        if (a.google_content_recommendation_ui_type !== "pedestal") {
          for (const c of ho) if (a[c] != null) {
            a = true;
            break a;
          }
        }
        a = false;
      }
      return a ? 9 : 5;
    }
    if (b === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b)) {
      return 1;
    }
    if (b === "link") {
      return 4;
    }
    if (b === "fluid") {
      return a.google_ad_layout === "in-article" ? (Do(a), 1) : 8;
    }
    if (a.google_reactive_ad_format === 27) {
      Do(a);
      return 1;
    }
  }
  function Eo(a, b, c, d, e = false) {
    var f = b.offsetWidth || (c.google_ad_resize || e) && Vi(b, d, "width") || c.google_ad_width || 0;
    if (a === 4) {
      c.google_ad_format = "auto";
      a = 1;
    }
    e = (e = Fo(a, f, b, c, d)) ? e : wo(f, c.google_ad_format, d, b, c);
    e.size().j(d, c, b);
    if (e.Z != null) {
      c.google_responsive_formats = e.Z;
    }
    if (e.G != null) {
      c.google_safe_for_responsive_override = e.G;
    }
    if (e.F != null) {
      if (e.F === true) {
        c.google_full_width_responsive_allowed = true;
      } else {
        c.google_full_width_responsive_allowed = false;
        c.gfwrnwer = e.F;
      }
    }
    if (e.P != null && e.P !== true) {
      c.gfwrnher = e.P;
    }
    d = e.j || c.google_ad_width;
    if (d != null) {
      c.google_resizing_width = d;
    }
    d = e.i || c.google_ad_height;
    if (d != null) {
      c.google_resizing_height = d;
    }
    d = e.size().i(f);
    const g = e.size().height();
    c.google_ad_width = d;
    c.google_ad_height = g;
    var h = e.size();
    f = `${h.i(f)}x${h.height()}`;
    c.google_ad_format = f;
    c.google_responsive_auto_format = e.D;
    if (e.g != null) {
      c.armr = e.g;
    }
    c.google_ad_resizable = true;
    c.google_override_format = 1;
    c.google_loader_features_used = 128;
    if (e.F === true) {
      c.gfwrnh = `${e.size().height()}px`;
    }
    if (e.u != null) {
      c.gfwroml = e.u;
    }
    if (e.B != null) {
      c.gfwromr = e.B;
    }
    if (e.i != null) {
      c.gfwroh = e.i;
    }
    if (e.j != null) {
      c.gfwrow = e.j;
    }
    if (e.C != null) {
      c.gfwroz = e.C;
    }
    f = (Jd(window.top) ? window.top : null) || window;
    if (an(f.location, "google_responsive_dummy_ad") && (Ia([1, 2, 3, 4, 5, 6, 7, 8], e.D) >= 0 || e.g === 1) && e.g !== 2) {
      f = JSON.stringify({
        googMsgType: "adpnt",
        key_value: [{
          key: "qid",
          value: "DUMMY_AD"
        }]
      });
      c.dash = `<${"script"}>window.top.postMessage('${f}', '*'); 
          </${"script"}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`;
    }
    if (a !== 1) {
      a = e.size().height();
      b.style.height = `${a}px`;
    }
  }
  function Fo(a, b, c, d, e) {
    const f = d.google_ad_height || Vi(c, e, "height") || 0;
    switch (a) {
      case 5:
        const {
          H: g,
          F: h
        } = dk.g(247, () => uo(b, d.google_ad_format, e, c, d), undefined);
        if (h === true && b !== g) {
          Ui(e, c);
        }
        if (h === true) {
          d.google_full_width_responsive_allowed = true;
        } else {
          d.google_full_width_responsive_allowed = false;
          d.gfwrnwer = h;
        }
        return jo(g, d);
      case 9:
        return mo(b, d);
      case 8:
        return qo(b, e, c, f, d);
      case 10:
        return Bo(b, e, c, f, d);
    }
  }
  function Do(a) {
    a.google_ad_format = "auto";
    a.armr = 3;
  }
  function Go(a, b) {
    a.google_resizing_allowed = true;
    a.ovlp = true;
    a.google_ad_format = "auto";
    a.iaaso = true;
    a.armr = b;
  }
  function Ho(a, b) {
    var c = Jd(b.top) ? b.top : null;
    if (c) {
      c = Ji(c).clientWidth ?? undefined;
      const d = (b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle) || {};
      const e = d.direction;
      if (d.width === "0px" && d.cssFloat !== "none") {
        return -1;
      }
      if (e === "ltr" && c) {
        return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      }
      if (e === "rtl" && c) {
        a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right;
        return Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)));
      }
    }
    return -1;
  }
  function logGElementAttributes(a, b) {
    if (a.getAttribute("src")) {
      var c = a.getAttribute("src") || "";
      var d = Fd(c, "client");
      if (d) {
        b.google_ad_client = d;
      }
      if (c = Fd(c, "host")) {
        b.google_ad_host = c;
      }
    }
    for (var d of a.attributes) if (/data-/.test(d.name)) {
      a = /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(d.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"))[1];
      if (!b.hasOwnProperty(a)) {
        if (a == "google_reactive_ad_format") {
          c = isNaN(parseInt(d.value, 10)) ? 0 : parseInt(d.value, 10);
        } else {
          c = d.value;
        }
        if (c !== null) {
          b[a] = c;
        }
      }
    }
  }
  function Ko(a, b) {
    if (a = ne(a)) {
      switch (a.data && a.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    } else {
      return b.google_ad_intent_query ? 17 : 12;
    }
  }
  function Lo(a, b, c, d) {
    logGElementAttributes(a, b);
    if (c.document && c.document.body && !Co(b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
      var e = parseInt(a.style.width, 10);
      var f = Ho(a, c);
      if (f > 0 && e > f) {
        var g = parseInt(a.style.height, 10);
        e = !!wn[e + "x" + g];
        let h = f;
        if (e) {
          const k = xn(f, g);
          if (k) {
            h = k;
            b.google_ad_format = k + "x" + g + "_0ads_al";
          } else {
            throw new T("No slot size for availableWidth=" + f);
          }
        }
        b.google_ad_resize = true;
        b.google_ad_width = h;
        if (!e) {
          b.google_ad_format = null;
          b.google_override_format = true;
        }
        f = h;
        a.style.width = `${f}px`;
        Go(b, 4);
      }
    }
    if (K($d).j(Vh.g, Vh.defaultValue) || (Ji(c).clientWidth ?? undefined) < 488) {
      f = (Jd(c.top) ? c.top : null) || c;
      g = a.offsetWidth || Vi(a, c, "width") || b.google_ad_width || 0;
      e = b.google_ad_client;
      if (d = an(f.location, "google_responsive_slot_preview") || Dm(f, 1, d, e)) {
        b: if (b.google_reactive_ad_format || b.google_ad_resize || Co(b) || !((Sd.test(b.google_ad_width) || Rd.test(a.style.width)) && (Sd.test(b.google_ad_height) || Rd.test(a.style.height)))) {
          d = false;
        } else {
          for (d = a; d; d = d.parentElement) {
            f = c.getComputedStyle ? c.getComputedStyle(d, null) : d.currentStyle;
            if (!f) {
              b.gfwrnwer = 18;
              d = false;
              break b;
            }
            if (!(Ia(["static", "relative"], f.position) >= 0)) {
              b.gfwrnwer = 17;
              d = false;
              break b;
            }
          }
          if (!K($d).j(di.g, di.defaultValue) && (d = K($d).u(Yh.g, Yh.defaultValue), d = Pi(c, a, g, d, b), d !== true)) {
            b.gfwrnwer = d;
            d = false;
            break b;
          }
          d = !!(c === c.top);
        }
      }
      if (d) {
        Go(b, 1);
        d = true;
      } else {
        d = false;
      }
    } else {
      d = false;
    }
    if (g = Co(b)) {
      Eo(g, a, b, c, d);
    } else {
      if (!((Sd.test(b.google_ad_width) || Rd.test(a.style.width)) && (Sd.test(b.google_ad_height) || Rd.test(a.style.height)))) {
        if (d = c.getComputedStyle ? c.getComputedStyle(a, null) : a.currentStyle) {
          a.style.width = d.width;
          a.style.height = d.height;
          Li(d, b);
        }
        if (!b.google_ad_width) {
          b.google_ad_width = a.offsetWidth;
        }
        if (!b.google_ad_height) {
          b.google_ad_height = a.offsetHeight;
        }
        b.google_loader_features_used = 256;
        b.google_responsive_auto_format = Ko(c, b);
      } else {
        Li(a.style, b);
      }
      if (c.location && c.location.hash === "#gfwmrp" || b.google_responsive_auto_format === 12 && b.google_full_width_responsive === "true") {
        Eo(10, a, b, c, false);
      } else if (Math.random() < .01 && b.google_responsive_auto_format === 12) {
        a = Qi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b);
        if (a !== true) {
          b.efwr = false;
          b.gfwrnwer = a;
        } else {
          b.efwr = true;
        }
      }
    }
  }
  function Mo(a) {
    if (a === a.top) {
      return 0;
    }
    for (let b = a; b && b !== b.top && Jd(b); b = b.parent) {
      if (a.sf_) {
        return 2;
      }
      if (a.$sf) {
        return 3;
      }
      if (a.inGptIF) {
        return 4;
      }
      if (a.inDapIF) {
        return 5;
      }
    }
    return 1;
  }
  function No(a, b, c) {
    for (const f of b) a: {
      b = a;
      for (let g = 0; g < b.g.length; g++) {
        if (b.g[g].element.contains(f)) {
          b.g[g].labels.add(c);
          break a;
        }
        if (f.contains(b.g[g].element)) {
          b.g[g].element = f;
          b.g[g].labels.add(c);
          break a;
        }
      }
      b.g.push({
        element: f,
        labels: new Set([c])
      });
    }
  }
  class Oo {
    constructor() {
      this.g = [];
    }
    getSlots() {
      return this.g;
    }
  }
  function Po(a) {
    const b = {
      ec: Oa(a.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
      hc: Oa(a.document.querySelectorAll("body ins.adsbygoogle")),
      ib: Oa(a.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")),
      jb: Oa(a.document.querySelectorAll(".google-auto-placed")),
      kb: Oa(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
      sb: (Hk(a) || Oa(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Oa(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
      lc: Hk(a) || Oa(a.document.querySelectorAll("div[id^=div-gpt-ad]")),
      vc: Oa(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
      Bb: Oa(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
      kc: Oa(a.document.querySelectorAll("div.googlepublisherpluginad")),
      Mb: Oa(a.document.querySelectorAll("html > ins.adsbygoogle"))
    };
    const c = new Oo();
    No(c, b.ib, 1);
    No(c, b.jb, 2);
    No(c, b.sb, 3);
    No(c, b.Mb, 4);
    No(c, b.kb, 5);
    No(c, b.Bb, 6);
    return c.getSlots().map(d => {
      var e = new rf();
      var f = [...d.labels];
      e = xc(e, 1, f, Nb);
      d = d.element.getBoundingClientRect();
      f = new qf();
      f = nc(f, 1, d.left + a.scrollX == null ? d.left + a.scrollX : Pb(d.left + a.scrollX));
      f = nc(f, 2, d.top + a.scrollY == null ? d.top + a.scrollY : Pb(d.top + a.scrollY));
      f = nc(f, 3, d.width == null ? d.width : Pb(d.width));
      d = nc(f, 4, d.height == null ? d.height : Pb(d.height));
      d = ad(d);
      e = Hc(e, 2, d);
      return ad(e);
    }).sort((d, e) => {
      d = A(d, qf, 2);
      d = Qb(y(d.A, 2)) ?? 0;
      e = A(e, qf, 2);
      e = Qb(y(e.A, 2)) ?? 0;
      return d - e;
    });
  }
  function rg(a, b, c = 0) {
    if (!(a.g.size > 0)) {
      Qo(a);
    }
    c = Math.min(Math.max(0, c), 9);
    const d = a.g.get(c);
    if (d) {
      d.push(b);
    } else {
      a.g.set(c, [b]);
    }
  }
  function Ro(a, b, c, d) {
    ee(b, c, d);
    cl(a, () => fe(b, c, d));
  }
  function So(a, b) {
    if (a.j !== 1) {
      a.j = 1;
      if (a.g.size > 0) {
        To(a, b);
      }
    }
  }
  function Qo(a) {
    if (a.l.document.visibilityState) {
      Ro(a, a.l.document, "visibilitychange", b => {
        if (a.l.document.visibilityState === "hidden") {
          So(a, b);
        }
        if (a.l.document.visibilityState === "visible") {
          a.j = 0;
        }
      });
    } else if ("onpagehide" in a.l) {
      Ro(a, a.l, "pagehide", b => {
        So(a, b);
      });
      Ro(a, a.l, "pageshow", () => {
        a.j = 0;
      });
    } else {
      Ro(a, a.l, "beforeunload", b => {
        So(a, b);
      });
    }
  }
  function To(a, b) {
    for (let c = 9; c >= 0; c--) {
      a.g.get(c)?.forEach(d => {
        d(b);
      });
    }
  }
  var Uo = class extends bl {
    constructor(a) {
      super();
      this.l = a;
      this.j = 0;
      this.g = new Map();
    }
  };
  function Wo(a) {
    const b = a.g.pc;
    return b !== null && b !== 0 ? b : a.g.pc = be(a.l);
  }
  function Xo(a) {
    const b = a.g.wpc;
    return b !== null && b !== "" ? b : a.g.wpc = a.l.google_ad_client ? String(a.l.google_ad_client) : (a.l.google_ad_modifications = a.l.google_ad_modifications || {}).head_tag_slot_vars?.google_ad_client ?? a.l.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client") ?? "";
  }
  function Yo(a, b) {
    var c = new Gf();
    var d = Wo(a);
    c = yc(c, 1, d == null ? d : Sb(d), "0");
    d = Xo(a);
    c = yc(c, 2, Yb(d), "");
    c = yc(c, 3, a.g.sd == null ? a.g.sd : Sb(a.g.sd), "0");
    return yc(c, 7, Math.round(b || a.l.performance.now()) == null ? Math.round(b || a.l.performance.now()) : Sb(Math.round(b || a.l.performance.now())), "0");
  }
  function $o(a) {
    var b = K(ap);
    if (b.j) {
      var c = b.B;
      a(c);
      b.g.psi = w(c);
    }
  }
  function bp(a) {
    rg(a.u, () => {
      var b = Yo(a);
      b = Ic(b, 12, Hf, a.C);
      if (a.j && !a.g.le.includes(3)) {
        a.g.le.push(3);
        ng(a.i, b);
      }
    }, 9);
  }
  function cp(a) {
    const b = new Cf();
    rg(a.u, () => {
      Hc(b, 2, a.B);
      yc(b, 3, a.g.tar == null ? a.g.tar : Sb(a.g.tar), "0");
      var c = a.l;
      var d = new vf();
      var e = Po(c);
      d = Jc(d, 1, e);
      e = ad(nc(nc(new uf(), 1, (Ji(c).clientWidth ?? undefined) == null ? Ji(c).clientWidth ?? undefined : Sb(Ji(c).clientWidth ?? undefined)), 2, Ji(c).clientHeight == null ? Ji(c).clientHeight : Sb(Ji(c).clientHeight)));
      d = Hc(d, 2, e);
      c = ad(nc(nc(new uf(), 1, Ji(c).scrollWidth == null ? Ji(c).scrollWidth : Sb(Ji(c).scrollWidth)), 2, Ji(c).scrollHeight == null ? Ji(c).scrollHeight : Sb(Ji(c).scrollHeight)));
      c = Hc(d, 3, c);
      c = ad(c);
      Hc(b, 4, c);
      c = a.i;
      d = Yo(a);
      d = Ic(d, 8, Hf, b);
      ng(c, d);
    }, 9);
  }
  async function dp(a) {
    var b = K(ap);
    if (b.j && !b.g.le.includes(1)) {
      b.g.le.push(1);
      var c = b.l.performance.now();
      a;
      var d = new yf();
      a = yc(d, 5, Kb(a), false);
      d = nc(nc(new uf(), 1, Ji(b.l).scrollWidth == null ? Ji(b.l).scrollWidth : Sb(Ji(b.l).scrollWidth)), 2, Ji(b.l).scrollHeight == null ? Ji(b.l).scrollHeight : Sb(Ji(b.l).scrollHeight));
      a = Hc(a, 2, d);
      d = nc(nc(new uf(), 1, (Ji(b.l).clientWidth ?? undefined) == null ? Ji(b.l).clientWidth ?? undefined : Sb(Ji(b.l).clientWidth ?? undefined)), 2, Ji(b.l).clientHeight == null ? Ji(b.l).clientHeight : Sb(Ji(b.l).clientHeight));
      a = Hc(a, 1, d);
      for (var e = d = b.l; d && d != d.parent;) {
        d = d.parent;
        if (Jd(d)) {
          e = d;
        }
      }
      a = yc(a, 4, Yb(e.location.href), "");
      d = Mo(b.l);
      if (d !== 0) {
        e = new xf();
        d = nc(e, 1, d == null ? d : Nb(d));
        Hc(a, 3, d);
      }
      d = b.i;
      c = Yo(b, c);
      c = Ic(c, 4, Hf, a);
      ng(d, c);
      bp(b);
      cp(b);
    }
  }
  async function ep(a, b, c) {
    if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
      a.g.lgdp.push(Number(b));
      var d = a.l.performance.now();
      a;
      var e = a.i;
      a = Yo(a, d);
      d = new wf();
      b = yc(d, 1, b == null ? b : Nb(b), 0);
      c = xc(b, 2, c, Pb);
      c = Ic(a, 9, Hf, c);
      ng(e, c);
    }
  }
  async function fp(a, b) {
    a;
    var c = a.i;
    a = Yo(a);
    a = yc(a, 3, Sb(1), "0");
    b = Ic(a, 10, Hf, b);
    ng(c, b);
  }
  var ap = class {
    constructor(a, b) {
      this.l = oe() || window;
      this.u = b ?? new Uo(this.l);
      this.i = a ?? new tg(2, "m202504290101", 100, 100, true, this.u);
      this.g = Wk(Rk(), 33, () => {
        const c = K($d).u(Wh.g, Wh.defaultValue);
        return {
          sd: c,
          ssp: c > 0 && Od() < 1 / c,
          pc: null,
          wpc: null,
          cu: null,
          le: [],
          lgdp: [],
          psi: null,
          tar: 0,
          cc: null
        };
      });
    }
    get j() {
      return this.g.ssp;
    }
    get B() {
      return dk.g(1178, () => bd(Bf, ec(this.g.psi || [])), undefined) || new Bf();
    }
    get C() {
      return dk.g(1227, () => bd(Df, ec(this.g.cc || [])), undefined) || new Df();
    }
  };
  function gp() {
    return self.google_adtest === "on" || self.google_adbreak_test === "on" || window.location.host.endsWith("h5games.usercontent.goog") || window.location.host === "gamesnacks.com" ? window.document.querySelector("meta[name=\"h5-games-eids\"]")?.getAttribute("content")?.split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : [];
  }
  function testScriptSource(a) {
    var b = window.document;
    if (b.currentScript) {
      return b.currentScript instanceof HTMLScriptElement && a.test(b.currentScript.src) ? 0 : 1;
    }
    for (const c of b.scripts) if ((c instanceof HTMLScriptElement && a.test(c.src) ? 0 : 1) === 0) {
      return 0;
    }
    return 1;
  }
  function jp(a, b) {
    const c = K($d).j(Ci.g, Ci.defaultValue) ? !!A(b, Gm, 26)?.g() : Mc(b, 6) ?? false;
    return {
      3: {
        55: () => a === 0,
        23: d => Dm(window, Number(d), b),
        24: d => Hm(Number(d), c),
        61: () => c,
        63: () => c || ((y(b.A, 8) == null || typeof y(b.A, 8) === "string" ? y(b.A, 8) : undefined) ?? "") === ".google.ch"
      },
      4: {},
      5: {
        6: () => (y(b.A, 15) == null || typeof y(b.A, 15) === "string" ? y(b.A, 15) : undefined) ?? ""
      }
    };
  }
  function op(a, b) {
    try {
      const d = a.split(".");
      a = self;
      let e = 0;
      let f;
      for (; a != null && e < d.length; e++) {
        f = a;
        a = a[d[e]];
        if (typeof a === "function") {
          a = f[d[e]]();
        }
      }
      var c = a;
      if (typeof c === b) {
        return c;
      }
    } catch {}
  }
  var pp = {
    3: {
      8: a => {
        try {
          return (self[a] || null) != null;
        } catch {}
      },
      9: a => {
        try {
          var b = self[a] || null;
        } catch {
          return;
        }
        if (a = typeof b === "function") {
          b = b && b.toString && b.toString();
          a = typeof b === "string" && b.indexOf("[native code]") != -1;
        }
        return a;
      },
      10: () => window === window.top,
      6: a => Ia(K(Yg).g(), Number(a)) >= 0,
      27: a => {
        a = op(a, "boolean");
        return a !== undefined ? a : undefined;
      },
      60: a => {
        try {
          return !!self.document.querySelector(a);
        } catch {}
      },
      80: a => {
        try {
          return !!self.matchMedia(a).matches;
        } catch {}
      },
      69: a => !!self.document.featurePolicy?.features().includes(a),
      70: a => !!self.document.featurePolicy?.allowedFeatures().includes(a),
      79: a => {
        try {
          return !!self.navigator.protectedAudience?.queryFeatureSupport?.(a);
        } catch (c) {
          return false;
        }
      }
    },
    4: {
      3: () => Vd(),
      6: a => {
        a = op(a, "number");
        return a !== undefined ? a : undefined;
      }
    },
    5: {
      2: () => window.location.href,
      3: () => {
        try {
          return window.top.location.hash;
        } catch {
          return "";
        }
      },
      4: a => {
        a = op(a, "string");
        return a !== undefined ? a : undefined;
      },
      12: a => {
        try {
          const b = op(a, "string");
          if (b !== undefined) {
            return atob(b);
          }
        } catch (b) {}
      }
    }
  };
  var qp = class extends J {
    getId() {
      return Qb(y(this.A, 1)) ?? 0;
    }
  };
  var sp = class extends J {};
  var tp = class extends J {};
  var up = class extends J {
    g() {
      return Lc(this, 2) ?? mc;
    }
    j() {
      return Lc(this, 4) ?? mc;
    }
    u() {
      return Mc(this, 3) ?? false;
    }
  };
  var vp = class extends J {};
  function xp(a, b) {
    const c = new Map();
    for (const [f, g] of a[1].entries()) {
      var d = f;
      var e = g;
      const {
        bb: h,
        Ya: k,
        Za: n
      } = e[e.length - 1];
      c.set(d, h + k * n);
    }
    for (const f of b) for (const g of B(f, sp, 2, 4)) if (B(g, qp, 2, 4).length !== 0) {
      b = Rb(y(g.A, 8)) ?? 0;
      if (!(!((y(g.A, 4) == null ? y(g.A, 4) : Number.isFinite(y(g.A, 4)) ? y(g.A, 4) | 0 : undefined) ?? 0) || ((y(g.A, 13) == null ? y(g.A, 13) : Number.isFinite(y(g.A, 13)) ? y(g.A, 13) | 0 : undefined) ?? 0) || ((y(g.A, 14) == null ? y(g.A, 14) : Number.isFinite(y(g.A, 14)) ? y(g.A, 14) | 0 : undefined) ?? 0))) {
        b = c.get((y(g.A, 4) == null ? y(g.A, 4) : Number.isFinite(y(g.A, 4)) ? y(g.A, 4) | 0 : undefined) ?? 0) ?? 0;
        d = (Rb(y(g.A, 1)) ?? 0) * B(g, qp, 2, 4).length;
        c.set((y(g.A, 4) == null ? y(g.A, 4) : Number.isFinite(y(g.A, 4)) ? y(g.A, 4) | 0 : undefined) ?? 0, b + d);
      }
      d = [];
      for (e = 0; e < B(g, qp, 2, 4).length; e++) {
        const h = {
          bb: b,
          Ya: Rb(y(g.A, 1)) ?? 0,
          Za: B(g, qp, 2, 4).length,
          Ab: e,
          fa: (y(f.A, 1) == null ? y(f.A, 1) : Number.isFinite(y(f.A, 1)) ? y(f.A, 1) | 0 : undefined) ?? 0,
          oa: g,
          T: B(g, qp, 2, 4)[e]
        };
        d.push(h);
      }
      if (!(yp(a[2], (y(g.A, 10) == null ? y(g.A, 10) : Number.isFinite(y(g.A, 10)) ? y(g.A, 10) | 0 : undefined) ?? 0, d) || yp(a[1], (y(g.A, 4) == null ? y(g.A, 4) : Number.isFinite(y(g.A, 4)) ? y(g.A, 4) | 0 : undefined) ?? 0, d))) {
        yp(a[0], B(g, qp, 2, 4)[0].getId(), d);
      }
    }
    return a;
  }
  function yp(a, b, c) {
    if (!b) {
      return false;
    }
    if (!a.has(b)) {
      a.set(b, []);
    }
    a.get(b).push(...c);
    return true;
  }
  function zp(a = Od()) {
    return b => Qd(`${b} + ${a}`) % 1E3;
  }
  const Ap = [12, 13, 20];
  function Bp(a, b) {
    var c = K(zg).N;
    const d = A(b.oa, Ye, 3) ? c ? cf(A(b.oa, Ye, 3), c) : {
      success: false,
      O: 1
    } : {
      success: true,
      value: true
    };
    if (!d.success) {
      xg(a.M, A(b.oa, Ye, 3), b.fa, b.T.getId(), d);
      return false;
    }
    if (!d.value) {
      return false;
    }
    c = A(b.T, Ye, 3) ? c ? cf(A(b.T, Ye, 3), c) : {
      success: false,
      O: 1
    } : {
      success: true,
      value: true
    };
    return c.success ? !!c.value : (xg(a.M, A(b.T, Ye, 3), b.fa, b.T.getId(), c), false);
  }
  function Cp(a, b, c) {
    if (!a.g[c]) {
      a.g[c] = [];
    }
    a = a.g[c];
    if (!a.includes(b)) {
      a.push(b);
    }
  }
  function Dp(a, b, c, d) {
    const e = [];
    var f;
    if (f = b !== 9) {
      if (a.u[b]) {
        f = true;
      } else {
        a.u[b] = true;
        f = false;
      }
    }
    if (f) {
      vg(a.M, b, c, e, [], 4);
      return e;
    }
    f = Ap.includes(b);
    const g = [];
    const h = [];
    for (const m of [0, 1, 2]) for (const [p, v] of a.ja[m].entries()) {
      var k = p;
      var n = v;
      const t = new Mf();
      var l = n.filter(x => x.fa === b && a.i[x.T.getId()] && Bp(a, x));
      if (l.length) {
        for (const x of l) h.push(x.T);
      } else if (!a.ya && (m === 2 ? (l = d[1], zc(t, 2, Nf, k == null ? k : Nb(k))) : l = d[0], k = l?.(String(k)) ?? (m === 2 && ((y(n[0].oa.A, 11) == null ? y(n[0].oa.A, 11) : Number.isFinite(y(n[0].oa.A, 11)) ? y(n[0].oa.A, 11) | 0 : undefined) ?? 0) === 1 ? undefined : d[0](String(k))), k !== undefined)) {
        for (const x of n) {
          if (x.fa !== b) {
            continue;
          }
          n = k - x.bb;
          l = x.Ya;
          const H = x.Za;
          const M = x.Ab;
          if (!(n < 0 || n >= l * H || n % H !== M || !Bp(a, x))) {
            n = (y(x.oa.A, 13) == null ? y(x.oa.A, 13) : Number.isFinite(y(x.oa.A, 13)) ? y(x.oa.A, 13) | 0 : undefined) ?? 0;
            if (n !== 0 && n !== undefined) {
              l = a.j[String(n)];
              if (l !== undefined && l !== x.T.getId()) {
                wg(a.M, a.j[String(n)], x.T.getId(), n);
              } else {
                a.j[String(n)] = x.T.getId();
              }
            }
            h.push(x.T);
          }
        }
        if (Dc(t, Nf) !== 0) {
          yc(t, 3, k == null ? k : Pb(k), 0);
          g.push(t);
        }
      }
    }
    for (const m of h) {
      d = m.getId();
      e.push(d);
      Cp(a, d, f ? 4 : c);
      Pg(B(m, jf, 2, 4), f ? Rg() : [c], a.M, d);
    }
    vg(a.M, b, c, e, g, 1);
    return e;
  }
  function Ep(a, b) {
    b = b.map(c => new tp(c)).filter(c => !Ap.includes((y(c.A, 1) == null ? y(c.A, 1) : Number.isFinite(y(c.A, 1)) ? y(c.A, 1) | 0 : undefined) ?? 0));
    a.ja = xp(a.ja, b);
  }
  function Fp(a, b) {
    N(1, c => {
      a.i[c] = true;
    }, b);
    N(2, (c, d, e) => Dp(a, c, d, e), b);
    N(3, c => (a.g[c] || []).concat(a.g[4]), b);
    N(12, c => void Ep(a, c), b);
    N(16, (c, d) => void Cp(a, c, d), b);
  }
  var Gp = class {
    constructor(a, b, c, {
      ya: d = false,
      yc: e = []
    } = {}) {
      this.ja = a;
      this.M = c;
      this.u = {};
      this.ya = d;
      this.g = {
        [b]: [],
        4: []
      };
      this.i = {};
      this.j = {};
      if (a = De()) {
        a = a.split(",") || [];
        for (const f of a) if (a = Number(f)) {
          this.i[a] = true;
        }
      }
      for (const f of e) this.i[f] = true;
    }
  };
  function Hp(a, b) {
    a.g = b[a] || (() => {});
  }
  class Ip {
    constructor() {
      this.g = () => {};
    }
  }
  function Jp(a) {
    K(Ip).g(a);
  }
  function Kp({
    tb: a,
    N: b,
    config: c,
    mb: d = self.ggeac || (self.ggeac = {}),
    nb: e = 0,
    M: f = new yg(em(A(a, up, 5)?.g()) ?? 0, em(A(a, up, 5)?.j()) ?? 0, A(a, up, 5)?.u() ?? false),
    ja: g = xp({
      0: new Map(),
      1: new Map(),
      2: new Map()
    }, B(a, tp, 2, 2))
  }) {
    if (d.hasOwnProperty("init-done")) {
      (d[a] || (() => {}))(B(a, tp, 2, 4).map(h => w(h)));
      (d[a] || (() => {}))(B(a, jf, 1, 4).map(h => w(h)), e);
      if (b) {
        (d[a] || (() => {}))(b);
      }
      Lp(e, d);
    } else {
      Fp(new Gp(g, e, f, c), d);
      Ug(d);
      Vg(d);
      Wg(d);
      Lp(e, d);
      Pg(B(a, jf, 1, 2), [e], f, undefined, true);
      Ag = Ag || !(!c || !c.yb);
      Jp(pp);
      if (b) {
        Jp(b);
      }
    }
  }
  function Lp(a, b = self.ggeac || (self.ggeac = {})) {
    Xg(K(Yg), b, a);
    Mp(b, a);
    Hp(K(Ip), b);
    K($d).C();
  }
  function Mp(a, b) {
    const c = K($d);
    c.j = (d, e) => (a[a] || (() => false))(d, e, b);
    c.u = (d, e) => (a[a] || (() => 0))(d, e, b);
    c.i = (d, e) => (a[a] || (() => ""))(d, e, b);
    c.B = (d, e) => (a[a] || (() => []))(d, e, b);
    c.g = (d, e) => (a[a] || (() => []))(d, e, b);
    c.C = () => {
      (a[a] || (() => {}))(b);
    };
  }
  function Np(a, b) {
    b = {
      0: zp(be(b).toString())
    };
    b = K(Yg).u(a, b);
    a = ep(K(ap), a, b);
    ah.na(1085, a);
  }
  function Op(a, b, c) {
    var d = a.google_ad_modifications = a.google_ad_modifications || {};
    if (d.plle) {
      Lp(1, a.ggeac || (a.ggeac = {}));
    } else {
      d.plle = true;
      d = A(b, vp, 12);
      var e = Mc(b, 9) ?? false;
      Kp({
        tb: d,
        N: jp(c, b),
        config: {
          ya: e && !!a.google_disable_experiments,
          yb: e
        },
        mb: a.ggeac || (a.ggeac = {}),
        nb: 1
      });
      if (c = (y(b.A, 15) == null || typeof y(b.A, 15) === "string" ? y(b.A, 15) : undefined) ?? "") {
        c = Number(c);
        K(Yg).j(c);
      }
      for (const f of rc(b, 19, Qb, 4)) K(Yg).i(f);
      Np(12, a);
      Np(10, a);
      a = (Jd(a.top) ? a.top : null) || a;
      if (an(a.location, "google_mc_lab")) {
        K(Yg).i(44738307);
      }
    }
  }
  function Pp(a) {
    dk.B(b => {
      b.shv = String(a);
      b.mjsv = un({
        va: "m202504290101",
        Ba: a
      });
      const c = K(Yg).g();
      const d = gp();
      b.eid = c.concat(d).join(",");
    });
  }
  function Qp(a, b) {
    a = b?.g()?.g() || ((y(a.A, 2) == null || typeof y(a.A, 2) === "string" ? y(a.A, 2) : undefined) ?? "");
    Pp(a);
  }
  var Rp = {
    google_pause_ad_requests: true,
    google_user_agent_client_hint: true
  };
  var Sp = class extends J {
    g() {
      return (y(this.A, 1) == null || typeof y(this.A, 1) === "string" ? y(this.A, 1) : undefined) ?? "";
    }
    j() {
      return (y(this.A, 2) == null ? y(this.A, 2) : Number.isFinite(y(this.A, 2)) ? y(this.A, 2) | 0 : undefined) ?? 0;
    }
  };
  var Tp = class extends J {
    D() {
      return (y(this.A, 1) == null || typeof y(this.A, 1) === "string" ? y(this.A, 1) : undefined) ?? "";
    }
    g() {
      return A(this, Sp, 2);
    }
    j() {
      return Mc(this, 3) ?? false;
    }
    u() {
      return Mc(this, 4) ?? false;
    }
    B() {
      return A(this, sl, 5);
    }
    C() {
      return A(this, tl, 6);
    }
  };
  var Vp = class extends J {};
  var Up = [27, 28];
  function Wp(a) {
    try {
      if (!typeof a === "string") {
        throw Error(String(a));
      }
      if (a.length > 0) {
        return new Vp(JSON.parse(a));
      }
    } catch (c) {
      dk.I(838, c instanceof Error ? c : Error(String(c)));
    }
    return new Vp();
  }
  function Xp(a, b) {
    if (Mc(b, 22) ?? false) {
      return 7;
    }
    if (Mc(b, 16) ?? false) {
      return 6;
    }
    const c = A(b, Tp, Dc(b, Up) === 27 ? 27 : -1)?.g()?.g();
    b = A(b, Tp, Dc(b, Up) === 27 ? 27 : -1)?.g()?.j() ?? 0;
    a = c === a;
    switch (b) {
      case 1:
        return a ? 9 : 8;
      case 2:
        return a ? 11 : 10;
      case 3:
        return a ? 13 : 12;
    }
    return 1;
  }
  function Yp(a, b, c) {
    if (b.google_loader_used !== "sd") {
      b.abgtt = Xp(a, c);
    }
  }
  function Zp(a, b) {
    var c = new $p();
    try {
      const f = a.createElement("link");
      if (f.relList?.supports("compression-dictionary") && ((navUserAgent.indexOf("Chrome") != -1 || navUserAgent.indexOf("CriOS") != -1) && !(navUserAgent.indexOf("Edge") != -1) || navUserAgent.indexOf("Silk") != -1)) {
        if (b instanceof stringObject) {
          f.href = yd(b).toString();
          f.rel = "compression-dictionary";
        } else {
          if (Bd.indexOf("compression-dictionary") === -1) {
            throw Error("TrustedResourceUrl href attribute required with rel=\"compression-dictionary\"");
          }
          var e = zd.test(b) ? b : undefined;
          if (e !== undefined) {
            f.href = e;
            f.rel = "compression-dictionary";
          }
        }
        a.head.appendChild(f);
      }
    } catch (f) {
      c.ka({
        methodName: 1296,
        ua: f
      });
    }
  }
  var $p = class {
    constructor() {
      this.g = dk;
    }
    ka(a) {
      const b = a.ua;
      this.g.I(a.methodName ?? 0, b instanceof Error ? b : Error(String(b)));
    }
  };
  function bq(a) {
    ee(window, "message", b => {
      let c;
      try {
        c = JSON.parse(b.data);
      } catch (d) {
        return;
      }
      if (!(!c || c.googMsgType !== "sc-cnf")) {
        a(c, b);
      }
    });
  }
  function eq() {
    const a = new Set();
    const b = isApiReady();
    try {
      if (!b) {
        return a;
      }
      const c = b.pubads();
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch {}
    return a;
  }
  function fq(a) {
    a = a.id;
    return a != null && (eq().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"));
  }
  function gq(a, b, c) {
    if (!a.sources) {
      return false;
    }
    switch (hq(a)) {
      case 2:
        const d = iq(a);
        if (d) {
          return c.some(f => compareElementAreas(d, f));
        }
        break;
      case 1:
        const e = kq(a);
        if (e) {
          return b.some(f => compareElementAreas(e, f));
        }
    }
    return false;
  }
  function hq(a) {
    if (!a.sources) {
      return 0;
    }
    a = a.sources.filter(b => b.previousRect && b.currentRect);
    if (a.length >= 1) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) {
        return 2;
      }
      if (a.previousRect.top > a.currentRect.top) {
        return 1;
      }
    }
    return 0;
  }
  function kq(a) {
    return lq(a, b => b.currentRect);
  }
  function iq(a) {
    return lq(a, b => b.previousRect);
  }
  function lq(a, b) {
    return a.sources.reduce((c, d) => {
      d = b(d);
      return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d;
    }, null);
  }
  function compareElementAreas(a, b) {
    var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return c <= 0 || a <= 0 ? false : c * a * 100 / ((b.right - b.left) * (b.bottom - b.top)) >= 50;
  }
  function mq() {
    const a = Array.from(document.getElementsByTagName("iframe")).filter(fq);
    const b = [...eq()].map(c => document.getElementById(c)).filter(c => c !== null);
    nq = window.scrollX;
    oq = window.scrollY;
    return pq = [...a, ...b].map(c => c.getBoundingClientRect());
  }
  function qq() {
    var a = new rq();
    if (K($d).j(zi.g, zi.defaultValue)) {
      var b = window;
      if (!b.google_plmetrics && window.PerformanceObserver) {
        // Unnecessary Assignment: Object(b)[Member(google_plmetrics)] = true
        // b.google_plmetrics = true;
        b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
        if (a.gb.qb) {
          b.push("event");
        }
        for (const c of b) {
          b = {
            type: c,
            buffered: true
          };
          if (c === "event") {
            b.durationThreshold = 40;
          }
          measurePerformance(a).observe(b);
        }
        tq(a);
      }
    }
  }
  function uq(a, b) {
    const c = nq !== window.scrollX || oq !== window.scrollY ? [] : pq;
    const d = mq();
    for (const e of b.getEntries()) {
      b = e.entryType;
      switch (b) {
        case "layout-shift":
          vq(a, e, c, d);
          break;
        case "largest-contentful-paint":
          b = e;
          a.Ia = Math.floor(b.renderTime || b.loadTime);
          a.Ha = b.size;
          break;
        case "first-input":
          b = e;
          a.Ea = Number((b.processingStart - b.startTime).toFixed(3));
          a.Fa = true;
          if (!a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime))) {
            logInteractionLatency(a, e);
          }
          break;
        case "longtask":
          b = Math.max(0, e.duration - 50);
          a.C += b;
          a.J = Math.max(a.J, b);
          a.ra += 1;
          break;
        case "event":
          logInteractionLatency(a, e);
          break;
        default:
          Eb(b, undefined);
      }
    }
  }
  function measurePerformance(a) {
    if (!a.M) {
      a.M = new PerformanceObserver(Dj(640, b => {
        uq(a, b);
      }));
    }
    return a.M;
  }
  function tq(a) {
    const b = Dj(641, () => {
      if ((document.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5,
        "": 0
      }[document.visibilityState || document.webkitVisibilityState || document.mozVisibilityState || ""] ?? 0) === 2) {
        postAnalytics(a);
      }
    });
    const c = Dj(641, () => void postAnalytics(a));
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.Da = () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      measurePerformance(a).disconnect();
    };
  }
  function postAnalytics(a) {
    if (!a.La) {
      a.La = true;
      measurePerformance(a).takeRecords();
      var analyticsEndpoint = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      if (window.LayoutShift) {
        analyticsEndpoint += "&cls=".concat(a.D.toFixed(3));
        analyticsEndpoint += "&mls=".concat(a.Y.toFixed(3));
        analyticsEndpoint += a.qa == null ? "&nls=null" : "&nls=".concat(Math.floor(a.qa));
        if (window.LayoutShiftAttribution) {
          analyticsEndpoint += "&cas=".concat(a.B.toFixed(3));
          analyticsEndpoint += a.Ka == null ? "&nas=null" : "&nas=".concat(Math.floor(a.Ka));
          analyticsEndpoint += "&was=".concat(a.Pa.toFixed(3));
        }
        analyticsEndpoint += "&wls=".concat(a.sa.toFixed(3));
        analyticsEndpoint += "&tls=".concat(a.Oa.toFixed(3));
      }
      if (window.LargestContentfulPaint) {
        analyticsEndpoint += a.Ia == null ? "&lcp=null" : "&lcp=".concat(Math.floor(a.Ia));
        analyticsEndpoint += a.Ha == null ? "&lcps=null" : "&lcps=".concat(Math.floor(a.Ha));
      }
      if (window.PerformanceEventTiming && a.Fa) {
        analyticsEndpoint += a.Ea == null ? "&fid=null" : "&fid=".concat(Math.floor(a.Ea));
      }
      if (window.PerformanceLongTaskTiming) {
        analyticsEndpoint += a.C == null ? "&cbt=null" : "&cbt=".concat(Math.floor(a.C));
        analyticsEndpoint += a.J == null ? "&mbt=null" : "&mbt=".concat(Math.floor(a.J));
        analyticsEndpoint += a.ra == null ? "&nlt=null" : "&nlt=".concat(Math.floor(a.ra));
      }
      let d = 0;
      for (var c of document.getElementsByTagName("iframe")) if (fq(c)) {
        d++;
      }
      analyticsEndpoint += d == null ? "&nif=null" : "&nif=".concat(Math.floor(d));
      analyticsEndpoint += se(window) == null ? "&ifi=null" : "&ifi=".concat(Math.floor(se(window)));
      c = K(Yg).g();
      analyticsEndpoint += "&eid=".concat(encodeURIComponent(c.join()));
      analyticsEndpoint += "&top=".concat(self === self.top ? 1 : 0);
      analyticsEndpoint += a.Na ? "&qqid=".concat(encodeURIComponent(a.Na)) : be(self) == null ? "&pvsid=null" : "&pvsid=".concat(Math.floor(be(self)));
      if (window.googletag) {
        analyticsEndpoint += "&gpt=1";
      }
      c = Math.min(a.g.length - 1, Math.floor((a.M ? a.Ga : performance.interactionCount || 0) / 50));
      if (c >= 0) {
        c = a.g[c].latency;
        if (c >= 0) {
          analyticsEndpoint += c == null ? "&inp=null" : "&inp=".concat(Math.floor(c));
        }
      }
      window.fetch(analyticsEndpoint, {
        keepalive: true,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors"
      });
      a.Da();
    }
  }
  function vq(a, b, c, d) {
    if (!b.hadRecentInput) {
      a.D += Number(b.value);
      if (Number(b.value) > a.Y) {
        a.Y = Number(b.value);
      }
      a.qa += 1;
      if (c = gq(b, c, d)) {
        a.B += b.value;
        a.Ka++;
      }
      if (b.startTime - a.Ja > 5E3 || b.startTime - a.Ma > 1E3) {
        a.Ja = b.startTime;
        a.i = 0;
        a.j = 0;
      }
      a.Ma = b.startTime;
      a.i += b.value;
      if (c) {
        a.j += b.value;
      }
      if (a.i > a.sa) {
        a.sa = a.i;
        a.Pa = a.j;
        a.Oa = b.startTime + b.duration;
      }
    }
  }
  function logInteractionLatency(a, b) {
    yq(a, b);
    const c = a.g[a.g.length - 1];
    const d = a.G[b.interactionId];
    if (d || a.g.length < 10 || b.duration > c.latency) {
      if (d) {
        d.entries.push(b);
        d.latency = Math.max(d.latency, b.duration);
      } else {
        b = {
          id: b.interactionId,
          latency: b.duration,
          entries: [b]
        };
        a.G[b.id] = b;
        a.g.push(b);
      }
      a.g.sort((e, f) => f.latency - e.latency);
      a.g.splice(10).forEach(e => {
        delete a.G[e.id];
      });
    }
  }
  function yq(a, b) {
    if (b.interactionId) {
      a.pa = Math.min(a.pa, b.interactionId);
      a.u = Math.max(a.u, b.interactionId);
      a.Ga = a.u ? (a.u - a.pa) / 7 + 1 : 0;
    }
  }
  var rq = class {
    constructor() {
      this.j = this.i = this.qa = this.Y = this.D = 0;
      this.Ma = this.Ja = Number.NEGATIVE_INFINITY;
      this.g = [];
      this.G = {};
      this.Ga = 0;
      this.pa = Infinity;
      this.Ea = this.Ha = this.Ia = this.Ka = this.Pa = this.B = this.Oa = this.sa = this.u = 0;
      this.Fa = false;
      this.ra = this.J = this.C = 0;
      this.M = null;
      this.La = false;
      this.Da = () => {};
      const a = document.querySelector("[data-google-query-id]");
      this.Na = a ? a.getAttribute("data-google-query-id") : null;
      this.gb = {
        qb: true
      };
    }
  };
  var nq;
  var oq;
  var pq = [];
  let zq = null;
  const Aq = [];
  const Bq = new Map();
  let Cq = -1;
  function Eq(a, b, c) {
    a.dataset.adsbygoogleStatus = "done";
    Fq(a, b, c);
  }
  function Fq(a, b, c) {
    var e = b.google_reactive_ads_config;
    if (!e) {
      Lo(a, b, window, c);
    }
    Nn(window, b);
    if (!Gq(a, b, window)) {
      if (e) {
        e = e.page_level_pubvars || {};
        if ((window.google_ad_modifications = window.google_ad_modifications || {}).page_contains_reactive_tag && !(window.google_ad_modifications = window.google_ad_modifications || {}).allow_second_reactive_tag) {
          if (e.pltais) {
            ym(false);
            return;
          }
          throw new T("Only one 'enable_page_level_ads' allowed per page.");
        }
        (window.google_ad_modifications = window.google_ad_modifications || {}).page_contains_reactive_tag = true;
        ym(e.google_pgb_reactive === 7);
      }
      b.google_unique_id = re(window);
      isPropInObject(Rp, (f, g) => {
        b[g] = b[g] || window[g];
      });
      if (b.google_loader_used !== "sd") {
        b.google_loader_used = "aa";
      }
      b.google_reactive_tag_first = ((window.google_ad_modifications = window.google_ad_modifications || {}).first_tag_on_page || 0) === 1;
      dk.g(164, () => {
        Sn(window, b, a, c);
      }, undefined);
    }
  }
  function Gq(a, b, c) {
    var d = b.google_reactive_ads_config;
    var e = typeof a.className === "string" && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className);
    var f = wm(c);
    if (f && f.Qa && b.google_adtest !== "on" && !e) {
      e = Ni(a, c);
      const g = Ji(c).clientHeight;
      e = g === 0 ? null : e / g;
      if (!f.ta || f.ta && (e || 0) >= f.ta) {
        a.className += " adsbygoogle-ablated-ad-slot";
        c = c.google_sv_map = c.google_sv_map || {};
        d = la(a);
        b.google_element_uid = d;
        c[b.google_element_uid] = b;
        a.setAttribute("google_element_uid", String(d));
        if (f.Kb === "slot") {
          if (Td(a.getAttribute("width")) !== null) {
            a.setAttribute("width", "0");
          }
          if (Td(a.getAttribute("height")) !== null) {
            a.setAttribute("height", "0");
          }
          a.style.width = "0px";
          a.style.height = "0px";
        }
        return true;
      }
    }
    if ((f = c.getComputedStyle ? c.getComputedStyle(a, null) : a.currentStyle) && f.display === "none" && !(b.google_adtest === "on" || b.google_reactive_ad_format > 0 || d)) {
      if (c.document.createComment) {
        a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag"));
      }
      return true;
    }
    a = b.google_pgb_reactive == null || b.google_pgb_reactive === 3;
    return b.google_reactive_ad_format !== 1 && b.google_reactive_ad_format !== 8 || !a ? false : (self.console && self.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), true);
  }
  function Hq(a) {
    var b = document.getElementsByTagName("INS");
    let d = 0;
    for (let e = b[d]; d < b.length; e = b[++d]) {
      var c = e;
      if (dj.test(c.className) && c.dataset.adsbygoogleStatus !== "done" && c.dataset.adsbygoogleStatus !== "reserved" && (!a || e.id === a)) {
        return e;
      }
    }
    return null;
  }
  function Iq(a, b, c) {
    if (a && "shift" in a) {
      $o(e => {
        var f = Ec(e, zf, 3);
        if (!(y(f.A, 2, undefined, Jb) ?? 0)) {
          e = Ec(e, zf, 3);
          Uc(e, 2);
        }
      });
      for (var d = 20; a.length > 0 && d > 0;) {
        try {
          Jq(a.shift(), b, c);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
        --d;
      }
    }
  }
  function Kq() {
    const a = Md("INS");
    a.className = "adsbygoogle";
    a.className += " adsbygoogle-noablate";
    Wd(a);
    return a;
  }
  function Lq(a, b) {
    const c = {};
    const d = Mm(a.google_ad_client, b);
    isPropInObject(Ii, (g, h) => {
      if (a.enable_page_level_ads === false) {
        c[h] = false;
      } else if (a.hasOwnProperty(h)) {
        c[h] = a[h];
      } else if (d.includes(g)) {
        c[h] = false;
      }
    });
    if (ka(a.enable_page_level_ads)) {
      c.page_level_pubvars = a.enable_page_level_ads;
    }
    const e = Kq();
    document.body.appendChild(e);
    const f = {
      google_reactive_ads_config: c,
      google_ad_client: a.google_ad_client
    };
    f.google_pause_ad_requests = !!(window.google_ad_modifications = window.google_ad_modifications || {}).pause_ad_requests;
    Yp(Mq(a) || (window.google_ad_client ? String(window.google_ad_client) : (window.google_ad_modifications = window.google_ad_modifications || {}).head_tag_slot_vars?.google_ad_client ?? window.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client") ?? ""), f, b);
    Eq(e, f, b);
    $o(g => {
      var h = Ec(g, zf, 3);
      if (!(y(h.A, 6, undefined, Jb) ?? 0)) {
        g = Ec(g, zf, 3);
        Uc(g, 6);
      }
    });
  }
  function Nq(a, b) {
    ln(self).wasPlaTagProcessed = true;
    const c = () => {
      Lq(a, b);
    };
    const d = self.document;
    if (d.body || d.readyState === "complete" || d.readyState === "interactive") {
      Lq(a, b);
    } else {
      const e = md(dk.u(191, c));
      ee(d, "DOMContentLoaded", e);
      if (self.MutationObserver != null) {
        new self.MutationObserver((f, g) => {
          if (d.body) {
            e();
            g.disconnect();
          }
        }).observe(d, {
          childList: true,
          subtree: true
        });
      }
    }
  }
  function Jq(a, b, c) {
    const d = {};
    dk.g(165, () => {
      Oq(a, d, b, c);
    }, e => {
      e.client = e.client || d.google_ad_client || a.google_ad_client;
      e.slotname = e.slotname || d.google_ad_slot;
      e.tag_origin = e.tag_origin || d.google_tag_origin;
    });
  }
  function Pq(a) {
    delete a.google_checked_head;
    isPropInObject(a, (b, c) => {
      if (!cj[c]) {
        delete a[c];
        b = c.replace("google", "data").replace(/_/g, "-");
        self.console.warn("AdSense head tag doesn't support ".concat(b, " attribute."));
      }
    });
  }
  function Qq(a, b) {
    var c = window.document.querySelector("script[src*=\"/pagead/js/adsbygoogle.js?client=\"]:not([data-checked-head])") || window.document.querySelector("script[src*=\"/pagead/js/adsbygoogle_direct.js?client=\"]:not([data-checked-head])") || window.document.querySelector("script[src*=\"/pagead/js/adsbygoogle.js\"][data-ad-client]:not([data-checked-head])") || window.document.querySelector("script[src*=\"/pagead/js/adsbygoogle_direct.js\"][data-ad-client]:not([data-checked-head])");
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = window.google_ad_modifications = window.google_ad_modifications || {};
      if (d.head_tag_slot_vars) {
        validateGAdClientVariables(c);
      } else {
        $o(g => {
          g = Ec(g, zf, 3);
          yc(g, 7, Kb(true), false);
        });
        var e = {};
        logGElementAttributes(c, e);
        Pq(e);
        if (e.google_ad_intent_query) {
          e.google_responsive_auto_format = 17;
          if (K($d).j(pi.g, pi.defaultValue)) {
            e.google_reactive_ad_format = 42;
          }
        }
        var f = sd(e);
        d.head_tag_slot_vars = f;
        c = {
          google_ad_client: e.google_ad_client,
          enable_page_level_ads: e
        };
        if (e.google_ad_intent_query) {
          c.enable_ad_intent_display_ads = true;
        }
        if (e.google_overlays === "bottom") {
          c.overlays = {
            bottom: true
          };
        }
        delete e.google_overlays;
        if (!window.adsbygoogle) {
          window.adsbygoogle = [];
        }
        d = window.adsbygoogle;
        if (d.loaded) {
          d.push(c);
        } else if (d.splice) {
          d.splice(0, 0, c);
        }
        b = A(b, Tp, Dc(b, Up) === 27 ? 27 : -1)?.u();
        if (e.google_adbreak_test || b) {
          Sq(f, a);
        } else {
          bq(() => {
            Sq(f, a);
          });
        }
      }
    }
  }
  function validateGAdClientVariables(a) {
    const b = (window.google_ad_modifications = window.google_ad_modifications || {}).head_tag_slot_vars;
    const c = a.getAttribute("src") || "";
    if ((a = Fd(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) {
      throw new T("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }
  }
  function Tq(a) {
    if (typeof a === "object" && a != null) {
      if (typeof a.type === "string") {
        return 2;
      }
      if (typeof a.sound === "string" || typeof a.preloadAdBreaks === "string" || typeof a.h5AdsConfig === "object") {
        return 3;
      }
    }
    return 0;
  }
  function Oq(a, b, c, d) {
    if (a == null) {
      throw new T("push() called with no parameters.");
    }
    $o(f => {
      var g = Ec(f, zf, 3);
      if (!(y(g.A, 3, undefined, Jb) ?? 0)) {
        f = Ec(f, zf, 3);
        Uc(f, 3);
      }
    });
    var e = Tq(a);
    if (e !== 0) {
      d = zm();
      if (!d.first_slotcar_request_processing_time) {
        d.first_slotcar_request_processing_time = Date.now();
        d.adsbygoogle_execution_start_time = ch;
      }
      if (zq == null) {
        Uq(a);
        Aq.push(a);
      } else if (e === 3) {
        const f = zq;
        dk.g(787, () => {
          f.handleAdConfig(a);
        }, undefined);
      } else {
        jk(730, zq.handleAdBreak(a));
      }
    } else {
      ch = new Date().getTime();
      On(c, d, Mq(a));
      Vq();
      a: {
        if (!a.enable_ad_intent_display_ads && a.enable_page_level_ads != undefined) {
          if (typeof a.google_ad_client === "string") {
            e = true;
            break a;
          }
          throw new T("'google_ad_client' is missing from the tag config.");
        }
        e = false;
      }
      if (e) {
        $o(f => {
          var g = Ec(f, zf, 3);
          if (!(y(g.A, 4, undefined, Jb) ?? 0)) {
            f = Ec(f, zf, 3);
            Uc(f, 4);
          }
        });
        Wq(a, d);
      } else {
        if (e = a.params) {
          isPropInObject(e, (f, g) => {
            b[g] = f;
          });
        }
        if (b.google_ad_output === "js") {
          console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
        } else {
          Yp(Mq(a) || (window.google_ad_client ? String(window.google_ad_client) : (window.google_ad_modifications = window.google_ad_modifications || {}).head_tag_slot_vars?.google_ad_client ?? window.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client") ?? ""), b, d);
          e = Xq(b, a);
          logGElementAttributes(e, b);
          c = (self.google_ad_modifications = self.google_ad_modifications || {}).head_tag_slot_vars || {};
          isPropInObject(c, (f, g) => {
            if (!b.hasOwnProperty(g)) {
              b[g] = f;
            }
          });
          if (e.hasAttribute("data-require-head") && !(self.google_ad_modifications = self.google_ad_modifications || {}).head_tag_slot_vars) {
            throw new T("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
          }
          if (!b.google_ad_client) {
            throw new T("Ad client is missing from the slot.");
          }
          if (c = ((window.google_ad_modifications = window.google_ad_modifications || {}).first_tag_on_page || 0) === 0 && on(b)) {
            $o(f => {
              var g = Ec(f, zf, 3);
              if (!(y(g.A, 5, undefined, Jb) ?? 0)) {
                f = Ec(f, zf, 3);
                Uc(f, 5);
              }
            });
            Yq(c);
          }
          if (((window.google_ad_modifications = window.google_ad_modifications || {}).first_tag_on_page || 0) === 0) {
            (window.google_ad_modifications = window.google_ad_modifications || {}).first_tag_on_page = 2;
          }
          b.google_pause_ad_requests = !!(window.google_ad_modifications = window.google_ad_modifications || {}).pause_ad_requests;
          Eq(e, b, d);
        }
      }
    }
  }
  function Mq(a) {
    return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : "";
  }
  function Vq() {
    if (K($d).j(ii.g, ii.defaultValue)) {
      const a = wm(window);
      if (!(a && a.Qa)) {
        xm(window);
      }
    }
  }
  function Yq(a) {
    de(() => {
      if (!ln(self).wasPlaTagProcessed) {
        if (self.adsbygoogle) {
          self.adsbygoogle.push(a);
        }
      }
    });
  }
  function Wq(a, b) {
    if (((window.google_ad_modifications = window.google_ad_modifications || {}).first_tag_on_page || 0) === 0) {
      (window.google_ad_modifications = window.google_ad_modifications || {}).first_tag_on_page = 1;
    }
    if (a.tag_partner) {
      var c = a.tag_partner;
      const d = self.google_ad_modifications = self.google_ad_modifications || {};
      d.tag_partners = d.tag_partners || [];
      d.tag_partners.push(c);
    }
    pn(a, b);
    Nq(a, b);
  }
  function Xq(a, b) {
    if (a.google_ad_format === "rewarded") {
      if (a.google_ad_slot == null) {
        throw new T("Rewarded format does not have valid ad slot");
      }
      if (a.google_ad_loaded_callback == null) {
        throw new T("Rewarded format does not have ad loaded callback");
      }
      a.google_reactive_ad_format = 11;
      a.google_wrap_fullscreen_ad = true;
      a.google_video_play_muted = false;
      a.google_acr = a.google_ad_loaded_callback;
      delete a.google_ad_loaded_callback;
      delete a.google_ad_format;
    }
    var c = !!a.google_wrap_fullscreen_ad;
    if (c) {
      b = Kq();
      b.dataset.adsbygoogleStatus = "reserved";
      document.documentElement.appendChild(b);
    } else if (b = b.element) {
      if (!(dj.test(b.className) && b.dataset.adsbygoogleStatus !== "done") && (b.id ? b = Hq(b.id) : b = null, !b)) {
        throw new T("'element' has already been filled.");
      }
      if (!("innerHTML" in b)) {
        throw new T("'element' is not a good DOM element.");
      }
    } else {
      b = Hq();
      if (!b) {
        throw new T("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
      }
    }
    if (c) {
      c = window;
      try {
        const e = (c || window).document;
        const f = e.compatMode == "CSS1Compat" ? e.documentElement : e.body;
        var d = new me(f.clientWidth, f.clientHeight).round();
      } catch (e) {
        d = new me(-12245933, -12245933);
      }
      a.google_ad_height = d.height;
      a.google_ad_width = d.width;
      a.fsapi = true;
    }
    return b;
  }
  function Zq(a) {
    Rk().S[Vk[a] || "google_ps_".concat(26)] = !!Number(a);
  }
  function $q(a) {
    if (Number(a)) {
      (window.google_ad_modifications = window.google_ad_modifications || {}).pause_ad_requests = true;
    } else {
      (window.google_ad_modifications = window.google_ad_modifications || {}).pause_ad_requests = false;
      a = () => {
        if (!(window.google_ad_modifications = window.google_ad_modifications || {}).pause_ad_requests) {
          var b = {};
          let c;
          if (typeof window.CustomEvent === "function") {
            c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
          } else {
            c = document.createEvent("CustomEvent");
            c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
          }
          window.dispatchEvent(c);
        }
      };
      self.setTimeout(a, 0);
      self.setTimeout(a, 1E3);
    }
  }
  function ar(a) {
    if (a && a.call && typeof a === "function") {
      window.setTimeout(a, 0);
    }
  }
  function Sq(a, b) {
    const c = {
      ...fn()
    };
    const d = K($d).u(yi.g, yi.defaultValue);
    if ([0, 1].includes(d)) {
      c.osttc = `${d}`;
    }
    b = kn(Hd(b.Jb, new Map(Object.entries(c)))).then(e => {
      if (zq == null) {
        e.init(a);
        zq = e;
        br(e);
      }
    });
    jk(723, b);
    b.finally(() => {
      Aq.length = 0;
      kk("slotcar", {
        event: "api_ld",
        time: Date.now() - ch,
        time_pr: Date.now() - Cq
      });
      fp(K(ap), Ef(23));
    });
  }
  function br(a) {
    for (const [c, d] of Bq) {
      var b = c;
      if (d !== -1) {
        self.clearTimeout(d);
        Bq.delete(b);
      }
    }
    for (b = 0; b < Aq.length; b++) {
      if (Bq.has(b)) {
        continue;
      }
      const c = Aq[b];
      const d = Tq(c);
      dk.g(723, () => {
        if (d === 3) {
          a.handleAdConfig(c);
        } else if (d === 2) {
          jk(730, a.handleAdBreakBeforeReady(c));
        }
      }, undefined);
    }
  }
  function Uq(a) {
    var b = Aq.length;
    if (Tq(a) === 2 && a.type === "preroll" && a.adBreakDone != null) {
      var c = a.adBreakDone;
      if (Cq === -1) {
        Cq = Date.now();
      }
      var d = self.setTimeout(() => {
        try {
          c({
            breakType: "preroll",
            breakName: a.name,
            breakFormat: "preroll",
            breakStatus: "timeout"
          });
          Bq.set(b, -1);
          kk("slotcar", {
            event: "pr_to",
            source: "adsbygoogle"
          });
          fp(K(ap), Ef(22));
        } catch (e) {
          console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)));
        }
      }, K($d).u(Ai.g, Ai.defaultValue) * 1E3);
      Bq.set(b, d);
    }
  }
  (function (a, b, c) {
    var d = () => {};
    var c = function (a) {
      var b = (Qb(y(b.A, 1)) ?? 0) > 2012 ? "_fy".concat(Qb(y(b.A, 1)) ?? 0) : "";
      createPolicyScriptObject`data:text/javascript,//show_ads_impl_preview.js`;
      return {
        Jb: createPolicyScriptObject`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${b}.js`,
        Hb: createPolicyScriptObject`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${b}.js`,
        Gb: createPolicyScriptObject`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${b}.js`,
        Lb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle(_direct)?)\.js(?:[?#].*)?$/
      };
    };
    dk.J(mk);
    dk.g(166, () => {
      const e = new tg(2, a);
      try {
        Za(l => {
          Vj(e, 1191, l);
        });
      } catch (l) {}
      const f = Wp(b);
      var g = en(f);
      Qp(f, g);
      d();
      le(16, [1, w(f)]);
      var h = oe(ne(window)) || window;
      var k = un({
        va: a,
        Ba: (y(f.A, 2) == null || typeof y(f.A, 2) === "string" ? y(f.A, 2) : undefined) ?? ""
      });
      const n = c(k, f);
      k = window.document.currentScript === null ? 1 : testScriptSource(n.Lb);
      Op(h, f, k);
      if (K($d).j(vi.g, vi.defaultValue) && ((y(f.A, 29) == null || typeof y(f.A, 29) === "string" ? y(f.A, 29) : undefined) ?? "")) {
        Zp(h.document, createPolicyScriptObject`https://googleads.g.doubleclick.net/pagead/managed/dict/${(y(f.A, 29) == null || typeof y(f.A, 29) === "string" ? y(f.A, 29) : undefined) ?? ""}/adsbygoogle`);
      }
      $o(l => {
        var m = (Qb(y(l.A, 1)) ?? 0) + 1;
        yc(l, 1, m == null ? m : Pb(m), 0);
        if (window.top === window) {
          m = (Qb(y(l.A, 2)) ?? 0) + 1;
          yc(l, 2, m == null ? m : Pb(m), 0);
        }
        m = Ec(l, zf, 3);
        if (!(y(m.A, 1, undefined, Jb) ?? 0)) {
          l = Ec(l, zf, 3);
          Uc(l, 1);
        }
      });
      jk(1086, dp(k === 0));
      if (!(navUserAgent.indexOf("Trident") != -1 || navUserAgent.indexOf("MSIE") != -1) || parseString_ExtractInt(auditNavUA(), 11) >= 0) {
        fk(K($d).j(Di.g, Di.defaultValue));
        Vn();
        gm(Ec(f, Gm, 26));
        try {
          qq();
        } catch {}
        Un();
        Qq(n, f);
        h = window;
        k = h.adsbygoogle;
        if (!k || !k.loaded) {
          g = {
            push: l => {
              Jq(l, n, f);
            },
            loaded: true,
            pageState: JSON.stringify(w(g))
          };
          try {
            Object.defineProperty(g, "requestNonPersonalizedAds", {
              set: Zq
            });
            Object.defineProperty(g, "pauseAdRequests", {
              set: $q
            });
            Object.defineProperty(g, "onload", {
              set: ar
            });
          } catch {}
          if (k) {
            for (const l of ["requestNonPersonalizedAds", "pauseAdRequests"]) if (k[l] !== undefined) {
              g[l] = k[l];
            }
          }
          Iq(k, n, f);
          h.adsbygoogle = g;
          if (k) {
            g.onload = k.onload;
          }
        }
      }
    }, undefined);
  })("m202504290101", typeof sttc === "undefined" ? undefined : sttc);
}).call(this, /*REDACTED: contextPayload {Type: String, Format: JSON}*/);
