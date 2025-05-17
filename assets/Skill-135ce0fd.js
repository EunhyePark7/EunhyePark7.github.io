import{r as m,j as t}from"./index-a3ef3e8f.js";import{A as h,m as a,d as n}from"./AppLayout-8983164c.js";const b=()=>{const[i,r]=m.useState(!1),l=["HTML","CSS","SCSS","JavaScript","jQuery","TypeScript","ReactJs","NextJs","VueJs","StyledComponent","TailwindCSS","Git","Photoshop","XD","Figma","Zeplin"],c=[...l,...l];return t.jsx(h,{children:t.jsxs(y,{children:[t.jsxs(w,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[t.jsx(d,{children:t.jsx(p,{$direction:"right",$isHovered:i,children:c.map((e,s)=>t.jsxs(o,{children:[t.jsx(x,{children:t.jsx("img",{src:`/assets/icons/${e.toLowerCase()}.svg`,alt:e})}),e]},`top-${s}`))})}),t.jsx(d,{children:t.jsx(p,{$direction:"left",$isHovered:i,children:c.map((e,s)=>t.jsxs(o,{children:[t.jsx(x,{children:t.jsx("img",{src:`/assets/icons/${e.toLowerCase()}.svg`,alt:e})}),e]},`bottom-${s}`))})})]}),t.jsx(u,{children:t.jsx(j,{children:[{title:"🏆 Style & Markup",content:`웹표준, 웹접근성, 크로스브라우징을 고려한 마크업을 기본으로, 다양한 디바이스에 대응하는 반응형 웹 구축에
                능숙합니다. 시맨틱 기반의 마크업 기반으로 CSS 가이드 작성, 컴포넌트 중심 설계까지
                폭넓은 퍼블리싱 경험을 갖추고 있으며, SCSS, BEM 방식, 유틸리티 퍼스트 클래스 등 다양한 스타일 설계
                패턴을 적용해 왔습니다.`},{title:"📦 Component Architecture",content:`유지보수성과 확장성을 고려한 컴포넌트 단위 개발에 집중합니다. Vue, React, Next.js 환경에서 UI 컴포넌트를
                설계하고 개발해왔으며, 복잡한 상태 관리나 로직 분리를 고민하며 점점 더 나은 구조를 찾아갑니다.
                Styled-components, Tailwind CSS, Atomic Design 등을 활용해 프로젝트에 최적화된 컴포넌트 아키텍처를
                구현해 왔습니다.`},{title:"💡 Performance Optimization",content:`페이지 로딩 속도, 렌더링 최적화, 불필요한 리렌더링 방지 등 사용자 경험에 직접 영향을 주는 퍼포먼스
                개선에 꾸준히 관심을 가지고 있습니다. React의 memo, lazy, suspense, 코드 스플리팅 기법 등을 활용해
                성능을 개선하고, 사용자에게 더 빠른 경험을 제공합니다.`},{title:"✨ UI/UX Design",content:`사용자 중심의 인터페이스를 지향하며, 실제 사용성을 고려한 디자인을 구현합니다. Figma, Zeplin, Photoshop,
                AdobeXD 등의 협업 툴을 능숙하게 다루며, 디자인 가이드 기반의 일관된 UI 구현 및 디자인 시스템 구축 경험이
                있습니다. 마이크로 인터랙션, 레이아웃 설계, 콘텐츠 구조 정리에 이르기까지 사용자의 입장에서 생각하며
                디테일을 완성합니다.`}].map((e,s)=>t.jsxs(v,{index:s,children:[t.jsx("strong",{children:e.title}),t.jsx("p",{children:e.content})]},s))})})]})})},f=a`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,g=a`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`,S=a`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,y=n.div``,u=n.section``,j=n.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin-top: 60px;
`,v=n.li`
  padding: 30px;
  border: 1px solid var(--outline);
  border-radius: 20px;
  box-shadow: 3px 0 7px rgb(108 108 108 / 10%);
  opacity: 0;
  animation: ${S} 0.6s ease-out forwards;
  animation-delay: ${({index:i})=>i*.3}s;

  strong {
    font-size: 20px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 20px;
  }
`,w=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px 0;
`,d=n.div`
  width: 100%;
  white-space: nowrap;
`,o=n.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-right: 60px;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: -6px;
`,p=n.div`
  display: flex;
  width: max-content;
  animation: ${({$direction:i})=>i==="left"?f:g} 30s linear infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);

  animation-play-state: ${({$isHovered:i})=>i?"paused":"running"};

  &:hover ${o} {
    opacity: 0.3;
    filter: blur(3px);
    transition: all 0.3s ease;
  }

  &:hover ${o}:hover {
    opacity: 1;
    filter: none;
  }
`,x=n.span`
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;export{b as default};
