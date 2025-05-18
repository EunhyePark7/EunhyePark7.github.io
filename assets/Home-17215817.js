import{R as v,L as p,N as T,j as a,M as O}from"./index-6c7884e7.js";import{A,d}from"./AppLayout-24f1cb70.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var h=function(){return h=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},h.apply(this,arguments)};function S(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r}var c="",f=null,m=null,w=null;function b(){c="",f!==null&&f.disconnect(),m!==null&&(window.clearTimeout(m),m=null)}function g(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],r=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||r.includes(t.tagName)&&t.hasAttribute("href")}function x(){var t=null;if(c==="#")t=document.body;else{var e=c.replace("#","");t=document.getElementById(e),t===null&&c==="#top"&&(t=document.body)}if(t!==null){w(t);var r=t.getAttribute("tabindex");return r===null&&!g(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),r===null&&!g(t)&&(t.blur(),t.removeAttribute("tabindex")),b(),!0}return!1}function k(t){window.setTimeout(function(){x()===!1&&(f===null&&(f=new MutationObserver(x)),f.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){b()},t||1e4))},0)}function E(t){return v.forwardRef(function(e,r){var n="";typeof e.to=="string"&&e.to.includes("#")?n="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(n=e.to.hash);var o={};t===T&&(o.isActive=function(i,l){return i&&i.isExact&&l.hash===n});function u(i){b(),c=e.elementId?"#"+e.elementId:n,e.onClick&&e.onClick(i),c!==""&&!i.defaultPrevented&&i.button===0&&(!e.target||e.target==="_self")&&!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&(w=e.scroll||function(l){return e.smooth?l.scrollIntoView({behavior:"smooth"}):l.scrollIntoView()},k(e.timeout))}var s=S(e,["scroll","smooth","timeout","elementId"]);return v.createElement(t,h({},o,s,{onClick:u,ref:r}),e.children)})}var L=E(p);E(T);const U=()=>{const{ABOUT_ME:t,SKILL:e,COMPANY:r,RESUME:n}=O,o=[t,e,r.dkbmc,r.pixdine,r.goodrich,n],u=s=>{if(!s)return a.jsx(_,{});const i=s.split(".").pop(),l=`/assets/contents/${s}`;return i==="mp4"?a.jsx(M,{src:l,muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):a.jsx(R,{src:l,alt:"thumbnail"})};return a.jsx(A,{children:a.jsx(P,{children:o.map(({contentName:s,to:i,thumbnail:l},N)=>{const I=i.includes("#");return a.jsx(C,{children:I?a.jsxs(L,{smooth:!0,to:i,children:[u(l),a.jsx(j,{children:s})]}):a.jsxs(p,{to:i,"aria-label":`Go to ${s} page`,children:[u(l),a.jsx(j,{children:s})]})},i)})})})},P=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`,C=d.div`
  display: flex;
  flex-direction: column;
`,y=`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  object-fit: cover;
  background-color: var(--outline);
`,_=d.div`
  ${y}
`,R=d.img`
  ${y}
`,M=d.video`
  ${y}
`,j=d.strong`
  display: block;
  padding: 0 10px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;export{U as default};
