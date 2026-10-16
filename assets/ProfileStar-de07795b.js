import{r as i,j as c}from"./index-b480a157.js";import{d}from"./AppLayout-711147b2.js";import{m as l,d as f,c as p}from"./use-in-view-0deef6cb.js";const u=d(l.span)`
  display: inline-block;
  transform-origin: center;
  && {
    padding-left: 0;
    margin-left: ${({$spacing:t})=>t}px;
  }
`,R=({immediate:t=!1,className:r="name-star",spacing:a=3})=>{const e=i.useRef(null),s=f(e),o=p(),n=s&&!o;return c.jsx(u,{ref:e,className:r,$spacing:a,"aria-hidden":"true",animate:n?{rotate:t?[0,180,360]:[0,0,180,360],scale:t?[1,1.12,1]:[1,1,1.12,1]}:{rotate:0,scale:1},transition:n?{duration:t?2.4:6,times:t?[0,.5,1]:[0,.6,.8,1],repeat:1/0,ease:"easeInOut"}:{duration:0},children:"✦"})};export{R as P};
