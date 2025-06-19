import{R as v,L as E,N as A,j as a,M as L}from"./index-8af6bd99.js";import{A as P,d as h,m as x}from"./AppLayout-90408eec.js";/*! *****************************************************************************
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
***************************************************************************** */var g=function(){return g=Object.assign||function(e){for(var r,n=1,l=arguments.length;n<l;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},g.apply(this,arguments)};function S(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(t);l<n.length;l++)e.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(r[n[l]]=t[n[l]]);return r}var u="",d=null,m=null,O=null;function b(){u="",d!==null&&d.disconnect(),m!==null&&(window.clearTimeout(m),m=null)}function y(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],r=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||r.includes(t.tagName)&&t.hasAttribute("href")}function p(){var t=null;if(u==="#")t=document.body;else{var e=u.replace("#","");t=document.getElementById(e),t===null&&u==="#top"&&(t=document.body)}if(t!==null){O(t);var r=t.getAttribute("tabindex");return r===null&&!y(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),r===null&&!y(t)&&(t.blur(),t.removeAttribute("tabindex")),b(),!0}return!1}function R(t){window.setTimeout(function(){p()===!1&&(d===null&&(d=new MutationObserver(p)),d.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){b()},t||1e4))},0)}function I(t){return v.forwardRef(function(e,r){var n="";typeof e.to=="string"&&e.to.includes("#")?n="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(n=e.to.hash);var l={};t===A&&(l.isActive=function(i,o){return i&&i.isExact&&o.hash===n});function s(i){b(),u=e.elementId?"#"+e.elementId:n,e.onClick&&e.onClick(i),u!==""&&!i.defaultPrevented&&i.button===0&&(!e.target||e.target==="_self")&&!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&(O=e.scroll||function(o){return e.smooth?o.scrollIntoView({behavior:"smooth"}):o.scrollIntoView()},R(e.timeout))}var f=S(e,["scroll","smooth","timeout","elementId"]);return v.createElement(t,g({},l,f,{onClick:s,ref:r}),e.children)})}var _=I(E);I(A);const H=()=>{const{ABOUT_ME:t,SKILL:e,COMPANY:r,RESUME:n,PREPARING:l}=L,s=[t,e,r.dkbmc,r.pixdine,r.goodrich,l,n],f=i=>{const o=i.split(".").pop(),c=`/assets/contents/${i}`;return o==="mp4"?a.jsx("video",{src:c,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"metadata"}):a.jsx("img",{src:c,alt:"thumbnail",loading:"lazy"})};return a.jsx(P,{children:a.jsx(C,{children:s.map(({contentName:i,to:o,thumbnail:c},T)=>{const k=o&&o.includes("#");return a.jsx(N,{children:k?a.jsxs(_,{smooth:!0,to:o,children:[a.jsx(j,{children:f(c)}),a.jsx(w,{children:i})]}):a.jsxs(E,{to:o,"aria-label":`Go to ${i} page`,children:[a.jsx(j,{children:f(c)}),a.jsx(w,{children:i})]})},`${o}_${T}`)})})})},C=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
  @media ${x.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
  }
  @media ${x.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px 20px;
  }
`,N=h.div`
  display: flex;
  flex-direction: column;
`,j=h.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  border: 1px solid var(--outline);
  object-fit: cover;
  overflow: hidden;
  video,
  img {
    width: 100%;
  }
`,w=h.strong`
  display: block;
  padding: 0 10px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;export{H as default};
