import{s as k,r as x,u as E,h as _,d as m,j as d,i as b,v as p,w as $,f as g,a as q,g as w,c as D,G as L,F as P,N as M,l as Z,m as O,A as V,n as H}from"./scheduler.1839fe44.js";import{S as y,i as S,b as F,d as N,m as T,a as j,t as z,e as B}from"./index.9a9a87ad.js";import{e as I}from"./each.821dfe5c.js";import{h as W,c as U}from"./theme.752db845.js";import{s as G}from"./share.9bc64642.js";function X(t){let e,a;return{c(){e=x("svg"),a=x("path"),this.h()},l(n){e=E(n,"svg",{fill:!0,xmlns:!0,height:!0,width:!0});var s=_(e);a=E(s,"path",{d:!0}),_(a).forEach(m),s.forEach(m),this.h()},h(){d(a,"d","M12 20q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm0-6q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-6q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z"),d(e,"fill",t[0]),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"height","24"),d(e,"width","24")},m(n,s){b(n,e,s),p(e,a)},p(n,[s]){s&1&&d(e,"fill",n[0])},i:$,o:$,d(n){n&&m(e)}}}function Y(t,e,a){let{color:n="black"}=e;return t.$$set=s=>{"color"in s&&a(0,n=s.color)},[n]}class ee extends y{constructor(e){super(),S(this,e,Y,X,k,{color:0})}}function te(t){let e,a;return{c(){e=x("svg"),a=x("path"),this.h()},l(n){e=E(n,"svg",{fill:!0,xmlns:!0,height:!0,viewBox:!0,width:!0});var s=_(e);a=E(s,"path",{d:!0}),_(a).forEach(m),s.forEach(m),this.h()},h(){d(a,"d","M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"),d(e,"fill",t[0]),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"height","24"),d(e,"viewBox","0 -960 960 960"),d(e,"width","24")},m(n,s){b(n,e,s),p(e,a)},p(n,[s]){s&1&&d(e,"fill",n[0])},i:$,o:$,d(n){n&&m(e)}}}function ne(t,e,a){let{color:n="black"}=e;return t.$$set=s=>{"color"in s&&a(0,n=s.color)},[n]}class re extends y{constructor(e){super(),S(this,e,ne,te,k,{color:0})}}function C(t,e,a){const n=t.slice();return n[5]=e[a],n}function Q(t){let e,a,n=t[5]+"",s,l,h;function c(){return t[3](t[5])}return{c(){e=g("li"),a=g("a"),s=Z(n)},l(r){e=w(r,"LI",{});var o=_(e);a=w(o,"A",{});var u=_(a);s=O(u,n),u.forEach(m),o.forEach(m)},m(r,o){b(r,e,o),p(e,a),p(a,s),l||(h=V(a,"click",c),l=!0)},p(r,o){t=r,o&1&&n!==(n=t[5]+"")&&H(s,n)},d(r){r&&m(e),l=!1,h()}}}function oe(t){let e,a,n,s,l,h;n=new ee({props:{color:t[1]}});let c=I(t[0]),r=[];for(let o=0;o<c.length;o+=1)r[o]=Q(C(t,c,o));return{c(){e=g("div"),a=g("div"),F(n.$$.fragment),s=q(),l=g("ul");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=w(o,"DIV",{class:!0});var u=_(e);a=w(u,"DIV",{tabindex:!0,class:!0});var i=_(a);N(n.$$.fragment,i),i.forEach(m),s=D(u),l=w(u,"UL",{tabindex:!0,class:!0});var f=_(l);for(let v=0;v<r.length;v+=1)r[v].l(f);f.forEach(m),u.forEach(m),this.h()},h(){d(a,"tabindex","0"),d(a,"class","dy-btn dy-btn-ghost p-1"),d(l,"tabindex","0"),d(l,"class","dy-dropdown-content dy-menu shadow bg-base-100 z-10"),d(e,"class","dy-dropdown dy-dropdown-bottom dy-dropdown-end")},m(o,u){b(o,e,u),p(e,a),T(n,a,null),p(e,s),p(e,l);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(l,null);h=!0},p(o,[u]){const i={};if(u&2&&(i.color=o[1]),n.$set(i),u&5){c=I(o[0]);let f;for(f=0;f<c.length;f+=1){const v=C(o,c,f);r[f]?r[f].p(v,u):(r[f]=Q(v),r[f].c(),r[f].m(l,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=c.length}},i(o){h||(j(n.$$.fragment,o),h=!0)},o(o){z(n.$$.fragment,o),h=!1},d(o){o&&m(e),B(n),L(r,o)}}}function ae(t,e,a){let n;P(t,W,r=>a(1,n=r));const s=M();let{actions:l=[""]}=e;function h(r){s("menuaction",{text:r}),document.activeElement.blur()}const c=r=>h(r);return t.$$set=r=>{"actions"in r&&a(0,l=r.actions)},[l,n,h,c]}class we extends y{constructor(e){super(),S(this,e,ae,oe,k,{actions:0})}}function A(t,e,a){const n=t.slice();return n[4]=e[a],n}function R(t){let e,a,n=t[4]+"",s,l,h;function c(){return t[2](t[4])}return{c(){e=g("li"),a=g("a"),s=Z(n)},l(r){e=w(r,"LI",{});var o=_(e);a=w(o,"A",{});var u=_(a);s=O(u,n),u.forEach(m),o.forEach(m)},m(r,o){b(r,e,o),p(e,a),p(a,s),l||(h=V(a,"click",c),l=!0)},p(r,o){t=r,o&1&&n!==(n=t[4]+"")&&H(s,n)},d(r){r&&m(e),l=!1,h()}}}function se(t){let e,a,n,s,l,h;n=new re({props:{color:"white"}});let c=I(t[0]),r=[];for(let o=0;o<c.length;o+=1)r[o]=R(A(t,c,o));return{c(){e=g("div"),a=g("div"),F(n.$$.fragment),s=q(),l=g("ul");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=w(o,"DIV",{class:!0});var u=_(e);a=w(u,"DIV",{tabindex:!0,class:!0});var i=_(a);N(n.$$.fragment,i),i.forEach(m),s=D(u),l=w(u,"UL",{tabindex:!0,class:!0});var f=_(l);for(let v=0;v<r.length;v+=1)r[v].l(f);f.forEach(m),u.forEach(m),this.h()},h(){d(a,"tabindex","0"),d(a,"class","dy-btn dy-btn-ghost p-1"),d(l,"tabindex","0"),d(l,"class","dy-dropdown-content dy-menu shadow bg-base-100 z-10"),d(e,"class","dy-dropdown dy-dropdown-bottom dy-dropdown-end")},m(o,u){b(o,e,u),p(e,a),T(n,a,null),p(e,s),p(e,l);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(l,null);h=!0},p(o,[u]){if(u&3){c=I(o[0]);let i;for(i=0;i<c.length;i+=1){const f=A(o,c,i);r[i]?r[i].p(f,u):(r[i]=R(f),r[i].c(),r[i].m(l,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=c.length}},i(o){h||(j(n.$$.fragment,o),h=!0)},o(o){z(n.$$.fragment,o),h=!1},d(o){o&&m(e),B(n),L(r,o)}}}function le(t,e,a){const n=M();let{actions:s=[""]}=e;function l(c){n("menuaction",{text:c}),document.activeElement.blur()}const h=c=>l(c);return t.$$set=c=>{"actions"in c&&a(0,s=c.actions)},[s,l,h]}class be extends y{constructor(e){super(),S(this,e,le,se,k,{actions:0})}}const ie=1,ce=2,ue=3;function de(t,e){return t.bookIndex>e.bookIndex?1:t.bookIndex<e.bookIndex?-1:parseInt(t.chapter)>parseInt(e.chapter)?1:parseInt(t.chapter)<parseInt(e.chapter)?-1:parseInt(t.verse)>parseInt(e.verse)?1:-1}function fe(t,e){return t.date<e.date?1:-1}function he(t,e){return t.penColor>e.penColor?1:t.penColor<e.penColor?-1:t.date<e.date?1:-1}function xe(t,e){return e===ce?t.toSorted(de):e===ie?t.toSorted(fe):e===ue?t.toSorted(he):t}const J="annotations.txt";function K(){let t="";return t+=U.name+`
`,t}async function Ee(t){let e=t.reference+`
`+t.text;await G(K(),e,J)}async function $e(t){let e=U.name+`

`+t.map(a=>`${a.reference}
${a.text}`).join(`

`);await G(K(),e,J,!0)}export{we as C,be as S,ie as a,ce as b,$e as c,ue as d,Ee as s,xe as t};
