(this["webpackJsonpjobs-search"]=this["webpackJsonpjobs-search"]||[]).push([[0],{20:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);var c=e(2),o=e(1),i=e.n(o),s=e(12),a=e.n(s),u=(e(20),e(14)),r=e(13),j=e.n(r),b=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],i=n[1];Object(o.useEffect)((function(){s()}),[]);var s=function(){j.a.get("https://jobs.github.com/positions.json").then((function(t){i(t.data),console.log(t.data)})).catch((function(t){console.log(t)}))};return Object(c.jsx)("div",{children:e.map((function(t){return Object(c.jsx)("p",{children:t.title},t.id)}))})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,40)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,s=n.getTTFB;e(t),c(t),o(t),i(t),s(t)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),h()}},[[39,1,2]]]);
//# sourceMappingURL=main.c6727fdc.chunk.js.map