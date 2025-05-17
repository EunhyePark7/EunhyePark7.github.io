import{R as g,L as w,N as O,j as a,M as E}from"./index-a3ef3e8f.js";import{A as I,d as f}from"./AppLayout-8983164c.js";/*! *****************************************************************************
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
***************************************************************************** */var h=function(){return h=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},h.apply(this,arguments)};function T(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}var s="",u=null,d=null,A=null;function m(){s="",u!==null&&u.disconnect(),d!==null&&(window.clearTimeout(d),d=null)}function v(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],r=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||r.includes(t.tagName)&&t.hasAttribute("href")}function y(){var t=null;if(s==="#")t=document.body;else{var e=s.replace("#","");t=document.getElementById(e),t===null&&s==="#top"&&(t=document.body)}if(t!==null){A(t);var r=t.getAttribute("tabindex");return r===null&&!v(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),r===null&&!v(t)&&(t.blur(),t.removeAttribute("tabindex")),m(),!0}return!1}function p(t){window.setTimeout(function(){y()===!1&&(u===null&&(u=new MutationObserver(y)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),d=window.setTimeout(function(){m()},t||1e4))},0)}function k(t){return g.forwardRef(function(e,r){var n="";typeof e.to=="string"&&e.to.includes("#")?n="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(n=e.to.hash);var i={};t===O&&(i.isActive=function(l,c){return l&&l.isExact&&c.hash===n});function o(l){m(),s=e.elementId?"#"+e.elementId:n,e.onClick&&e.onClick(l),s!==""&&!l.defaultPrevented&&l.button===0&&(!e.target||e.target==="_self")&&!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&(A=e.scroll||function(c){return e.smooth?c.scrollIntoView({behavior:"smooth"}):c.scrollIntoView()},p(e.timeout))}var b=T(e,["scroll","smooth","timeout","elementId"]);return g.createElement(t,h({},i,b,{onClick:o,ref:r}),e.children)})}var L=k(w);k(O);const N=()=>{const{ABOUT_ME:t,SKILL:e,COMPANY:r}=E,n=[t,e,r.dkbmc,r.pixdine,r.goodrich];return a.jsx(I,{children:a.jsx(S,{children:n.map(({contentName:i,to:o},b)=>{const l=o.includes("#");return a.jsx(P,{children:l?a.jsxs(L,{smooth:!0,to:o,children:[a.jsx(x,{}),a.jsx(j,{children:i})]}):a.jsxs(w,{to:o,"aria-label":`Go to ${i} page`,children:[a.jsx(x,{}),a.jsx(j,{children:i})]})},o)})})})},S=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`,P=f.div`
  display: flex;
  flex-direction: column;
`,x=f.div`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 12px;
  background-color: var(--outline);
`,j=f.strong`
  display: block;
  padding: 0 10px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;export{N as default};
