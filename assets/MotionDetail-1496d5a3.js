import{L as p,j as m}from"./index-b480a157.js";import{d as e}from"./AppLayout-711147b2.js";import{e as f,s as d,u as h,b as y,m as s,c as b}from"./use-in-view-0deef6cb.js";function x(t){t.values.forEach(o=>o.stop())}function u(t,o){[...o].reverse().forEach(n=>{const a=t.getVariant(n);a&&d(t,a),t.variantChildren&&t.variantChildren.forEach(i=>{u(i,o)})})}function w(t,o){if(Array.isArray(o))return u(t,o);if(typeof o=="string")return u(t,[o]);d(t,o)}function g(){const t=new Set,o={subscribe(r){return t.add(r),()=>void t.delete(r)},start(r,n){const a=[];return t.forEach(i=>{a.push(f(i,r,{transitionOverride:n}))}),Promise.all(a)},set(r){return t.forEach(n=>{w(n,r)})},stop(){t.forEach(r=>{x(r)})},mount(){return()=>{o.stop()}}};return o}function k(){const t=h(g);return y(t.mount,[]),t}const E=e(s.section)`
  min-width: 0;
`,R=e(s.article)`
  min-width: 0;
`,S=e(s.div)`
  min-width: 0;
`,C=e(s.create(p))`
  position: relative;
  &:hover .playlist-icon,
  &:focus-visible .playlist-icon,
  &:hover .card-arrow,
  &:focus-visible .card-arrow {
    transform: translate(2px, -2px);
    color: var(--accent);
  }
  .playlist-icon,
  .card-arrow {
    transition:
      transform 0.2s ease,
      color 0.2s ease;
  }
  &&:hover .playlist-cover {
    transform: none;
  }
`,L={section:E,article:R,div:S,link:C},j=({as:t="section",index:o=0,interval:r=.07,duration:n=.38,children:a,...i})=>{const c=b(),l=k(),v=L[t];return m.jsx(v,{...i,initial:c?!1:{opacity:0,y:12},animate:l,onViewportEnter:()=>l.start({opacity:1,y:0}),onFocusCapture:()=>l.set({opacity:1,y:0}),viewport:{once:!0,amount:.08},transition:{duration:c?0:n,delay:c?0:Math.min(o,6)*r,ease:[.22,1,.36,1]},whileHover:t==="link"&&!c?{y:-3}:void 0,whileTap:t==="link"&&!c?{scale:.99}:void 0,children:a})};e(s.span)`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--text-primary);
  z-index: -1;
  pointer-events: none;
`;e.button`
  position: relative;
  isolation: isolate;
  &&.active {
    background: transparent;
  }
`;e(p)`
  position: relative;
  &&[aria-current]::after {
    display: none;
  }
`;e(s.span)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 2px;
  background: var(--text-primary);
`;export{j as R};
