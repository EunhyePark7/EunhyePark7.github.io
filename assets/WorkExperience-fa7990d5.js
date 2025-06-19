import{r as s,W as n,j as t}from"./index-8af6bd99.js";import{A as g,a as d,d as e,m as l}from"./AppLayout-90408eec.js";const S=()=>{var x;const[a,p]=s.useState("goodrich"),[c,h]=s.useState(0),f=o=>{window.location.hash=`#${o}`,p(o),h(i=>i+1)};return s.useEffect(()=>{const o=window.location.hash.substring(1);o&&n.some(({id:i})=>i===o)&&p(o)},[]),t.jsx(g,{children:t.jsxs(t.Fragment,{children:[t.jsxs(u,{children:[t.jsx("ol",{children:n.map(({id:o,company:i},r)=>t.jsx("li",{children:t.jsxs(w,{className:r%2===0?"fly-in-up":"fly-in-down",$isActive:a===o,onClick:()=>f(o),$offset:r===1?-69:10,children:[t.jsx("strong",{children:i}),t.jsx("span",{children:i==="굿리치"?"2023.05 ~ 2025.04":i==="픽스다인웨이메이커"?"2021.02 ~ 2023.05":"2016.11 ~ 2018.12"})]},`${o}-${c}`)},o))}),t.jsx(y,{children:t.jsx("span",{})})]}),t.jsx(v,{children:(x=n.find(({id:o})=>o===a))==null?void 0:x.projects.map((o,i)=>t.jsxs(j,{$delay:i*.2,className:"fly-in",children:[t.jsx("strong",{children:o.title}),t.jsx("span",{children:o.period}),t.jsx("p",{children:o.description.map((r,m)=>t.jsxs("span",{children:[r,t.jsx("br",{})]},m))})]},`${i}-${Date.now()}`))})]})})},b=d`
  0% {
    opacity: 0;
    transform: translate(-300px, 100px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
`;d`
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;d`
  0% {
    opacity: 0;
    transform: translateY(-50px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;const u=e.div`
  position: relative;
  max-width: 70%;
  width: 100%;
  margin: 80px auto;
  ol {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 80%;
    height: 100%;
    margin: auto;
    z-index: 1;
    li {
      position: relative;
      display: inline-flex;
      align-self: center;

      &:after {
        content: '';
        position: absolute;
        top: -7px;
        width: 14px;
        height: 14px;
        border: 3px solid #6719db;
        border-radius: 50%;
        background-color: var(--default-background);
        box-sizing: border-box;
      }
      &:nth-child(2) > div {
        top: -69px;
      }
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    right: 0;
    border-radius: 50%;
    background-color: #6719db;
    width: 6px;
    height: 6px;
  }
  &:after {
    left: 0;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 6px solid #6719db;
  }
  @media ${l.mobile} {
    max-width: none;
  }
`,w=e.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({$offset:a})=>a||10}px;
  padding: 10px 14px;
  border-radius: 20px;
  border: ${({$isActive:a})=>a?"1px solid #6719db":"1px solid var(--outline)"};
  box-shadow: 3px 0 7px var(--additive-background);
  white-space: nowrap;
  transform: translateX(-45%);
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
  strong {
    font-size: 15px;
    font-weight: 600;
  }
  span {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 300;
  }
`,y=e.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--outline);
  transform: translateY(-50%);
`,v=e.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 20px;
  padding: 60px 0;
  margin: 0 auto;
  li {
    flex: 1 1 calc((100% - 40px) / 3);
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: calc((100% - 40px) / 3);
    padding: 20px;
    border-radius: 20px;
    background-color: var(--white);
    border: 1px solid var(--outline);
    box-shadow: 3px 0 7px var(--additive-background);
    strong {
      font-size: 16px;
      font-weight: 600;
    }
    span {
      font-weight: 300;
    }
    p {
      line-height: 1.15;
    }
  }
  @media ${l.tablet} {
    padding: 40px 0;
    li {
      flex: 1 1 calc((100% - 40px) / 2);
      max-width: calc((100% - 40px) / 2);
    }
  }
  @media ${l.mobile} {
    padding: 30px 0;
    li {
      flex: 1 1 100%;
      max-width: none;
      width: 100%;
    }
  }
`,j=e.li`
  flex: 1 1 calc((100% - 40px) / 3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: calc((100% - 40px) / 3);
  padding: 20px;
  border-radius: 20px;
  background-color: var(--white);
  border: 1px solid var(--outline);
  box-shadow: 3px 0 7px var(--additive-background);
  &:hover {
    border: 1px solid var(--icon-disabled);
  }
  &.fly-in {
    animation: ${b} 0.5s ease forwards;
    animation-delay: ${({$delay:a})=>a}s;
    opacity: 0;
  }
  strong {
    font-size: 16px;
    font-weight: 600;
  }
  span {
    font-weight: 300;
  }
  p {
    line-height: 1.15;
  }
`;export{S as default};
