(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(5),i=t.n(r),s=(t(10),t(3)),j=t(2),u=(t(11),t(12),t(0));function d(c){var e=c.card,t=c.handlechoice,n=c.flipped,a=c.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:"/img/cover.jpg",onClick:function(){a||t(e)},alt:"cover"})]})})}var o=[{src:"/img/black-panther.jpg",matched:!1},{src:"/img/m416.jpg",matched:!1},{src:"/img/iron.jpg",matched:!1},{src:"/img/spider.jpg",matched:!1},{src:"/img/captain-marvel.jpg",matched:!1},{src:"/img/thor.jpg",matched:!1}];var m=function(){var c=Object(n.useState)([]),e=Object(j.a)(c,2),t=e[0],a=e[1],r=Object(n.useState)(0),i=Object(j.a)(r,2),m=i[0],l=i[1],b=Object(n.useState)(null),f=Object(j.a)(b,2),h=f[0],O=f[1],p=Object(n.useState)(null),g=Object(j.a)(p,2),v=g[0],x=g[1],N=Object(n.useState)(!1),k=Object(j.a)(N,2),S=k[0],y=k[1],M=function(){var c=[].concat(o,o).sort((function(){return Math.random()-.5})).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));a(c),O(null),x(null),l(0)},w=function(c){h?x(c):O(c)};Object(n.useEffect)((function(){h&&v&&(y(!0),h.src===v.src?(a((function(c){return c.map((function(c){return c.src===h.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),E()):setTimeout((function(){return E()}),1e3))}),[h,v]);var E=function(){O(null),x(null),l((function(c){return c+1})),y(!1)};return Object(n.useEffect)((function(){M()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Memory Game"}),Object(u.jsx)("button",{onClick:M,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(u.jsx)(d,{card:c,handlechoice:w,flipped:c===h||c===v||c.matched,disabled:S},c.id)}))}),Object(u.jsxs)("p",{children:["Turns : ",m]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.96fa45d9.chunk.js.map