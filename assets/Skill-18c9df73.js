import{r as g,j as s,L as x}from"./index-b480a157.js";import{d as t,A as I,b as j}from"./AppLayout-711147b2.js";import{R as u}from"./MotionDetail-1496d5a3.js";import{m as r,d as w,c as R}from"./use-in-view-0deef6cb.js";const E=t(r.div)`
  min-width: 0;
`,b=t.div`
  overflow: hidden;
  padding-bottom: 4px;
  margin-bottom: -4px;
`,v=t(r.div)`
  min-width: 0;
`,T=t.span`
  && {
    position: relative;
    display: inline-block;
    color: inherit;
  }
`,L=t(r.i)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform-origin: left;
`,O=({eyebrow:e,firstLine:o,firstEmphasis:a,secondLine:d,emphasis:S,description:k})=>{const h=g.useRef(null),f=w(h,{once:!0,amount:.2}),i=R(),p={hidden:{y:"110%",opacity:0},visible:n=>({y:0,opacity:1,transition:{duration:i?0:.6,delay:i?0:n*.2,ease:[.22,1,.36,1]}})},m=(n,l,N)=>{const c=l?n.lastIndexOf(l):-1;return c<0?n:s.jsxs(s.Fragment,{children:[n.slice(0,c),s.jsxs(T,{children:[l,s.jsx(L,{"aria-hidden":"true",variants:{hidden:{scaleX:0},visible:{scaleX:1,transition:{delay:i?0:.55+N*.2,duration:i?0:.45}}}})]}),n.slice(c+l.length)]})};return s.jsxs(E,{ref:h,className:"toolkit-intro",initial:i?!1:"hidden",animate:f||i?"visible":"hidden",children:[s.jsx("span",{className:"eyebrow",children:e}),s.jsxs("h1",{children:[s.jsx(b,{children:s.jsx(v,{custom:0,variants:p,children:m(o,a,0)})}),s.jsx(b,{children:s.jsxs(v,{custom:1,variants:p,children:[m(d,S,1),s.jsx("span",{children:"."})]})})]}),s.jsx(r.p,{variants:{hidden:{opacity:0,y:6},visible:{opacity:1,y:0,transition:{delay:i?0:.65,duration:i?0:.4}}},children:k})]})},y=[{title:"Style & Markup",number:"01",description:"웹표준, 웹접근성, 크로스브라우징을 고려한 시맨틱 마크업과 반응형 화면 구현. SCSS와 다양한 스타일 설계 패턴으로 일관된 UI를 만듭니다.",skills:[["HTML","html"],["CSS","css"],["SCSS","scss"],["Tailwind CSS","tailwindcss"]]},{title:"Component Architecture",number:"02",description:"유지보수성과 확장성을 고려하는 컴포넌트 단위 개발. React, Vue, Next.js 환경에서 UI를 구현하고 상태와 로직의 구조를 고민합니다.",skills:[["React","reactjs"],["Next.js","nextjs"],["Vue","vuejs"],["JavaScript","javascript"],["TypeScript","typescript"]]},{title:"UI & Collaboration",number:"03",description:"디자인 가이드를 화면으로 옮기는 디테일과 열린 소통. 디자인 협업 도구를 활용해 사용자의 입장에서 인터페이스를 완성합니다.",skills:[["Figma","figma"],["Zeplin","zeplin"],["Photoshop","photoshop"],["Adobe XD","xd"],["Git","git"]]}],V=()=>s.jsx(I,{children:s.jsxs("div",{className:"channel-page toolkit-page",children:[s.jsxs("div",{className:"page-intro",children:[s.jsxs(x,{to:"/",className:"text-link",children:[s.jsx(j,{name:"back"})," 채널 홈"]}),s.jsx("span",{className:"eyebrow",children:"MY CREATIVE TOOLKIT"})]}),s.jsx(O,{eyebrow:"FROM IDEAS TO INTERFACES",firstLine:"아이디어를 화면으로.",firstEmphasis:"화면으로",secondLine:"디테일을 경험으로",emphasis:"경험으로",description:"화면을 만들고, 구조를 고민하고, 함께 더 나은 결과를 만듭니다."}),s.jsx("div",{className:"toolkit-groups",children:y.map((e,o)=>s.jsxs(u,{index:o,interval:.15,duration:.2,className:"toolkit-group",children:[s.jsx("span",{className:"toolkit-number",children:e.number}),s.jsxs("div",{children:[s.jsx("h2",{children:e.title}),s.jsx("p",{children:e.description}),s.jsx("div",{className:"toolkit-skills",children:e.skills.map(([a,d])=>s.jsxs("span",{children:[s.jsx("img",{src:`/assets/icons/${d}.svg`,alt:""}),a]},a))})]})]},e.number))}),s.jsxs(u,{index:y.length,interval:.15,duration:.2,className:"collaboration",children:[s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"PUTTING THE TOOLKIT TO WORK"}),s.jsx("h2",{children:"기술은 실제 작업에서 빛납니다"})]}),s.jsxs(x,{to:"/work",className:"button button-primary",children:["작업 살펴보기 ",s.jsx(j,{name:"display"})]})]})]})});export{V as default};
