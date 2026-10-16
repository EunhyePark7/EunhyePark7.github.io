import{r,j as e,L as h}from"./index-b480a157.js";import{m as y,d as j,A as E,b as x,P as f}from"./AppLayout-711147b2.js";import{P as T}from"./ProfileStar-de07795b.js";import{d as v,c as w}from"./use-in-view-0deef6cb.js";const n="Hello,",o="I'm Eunhye",c=n.length+o.length,I=y`
  50% { opacity: 0; }
`,m=j.div`
  position: relative;
  white-space: pre;
  &::before {
    content: attr(data-text);
    visibility: hidden;
  }
`,p=j.div`
  position: absolute;
  inset: 0;
  &::after {
    content: '';
    display: ${({$cursor:s})=>s?"inline-block":"none"};
    width: 2px;
    height: 0.8em;
    margin-left: 4px;
    background: var(--accent);
    animation: ${I} 0.7s step-end infinite;
  }
`,L=()=>{const s=r.useRef(null),l=v(s,{once:!0,amount:.3}),a=w(),[t,u]=r.useState(0),i=a?c:t,d=i===c;return r.useEffect(()=>{if(!l||a||t>=c)return;const b=t===0?350:t===n.length?280:85,N=window.setTimeout(()=>u(g=>g+1),b);return()=>window.clearTimeout(N)},[l,a,t]),e.jsxs("h1",{ref:s,"aria-label":"Hello, I'm Eunhye",children:[e.jsx(m,{"data-text":n,"aria-hidden":"true",children:e.jsx(p,{$cursor:!a&&i<n.length,children:n.slice(0,i)})}),e.jsx(m,{"data-text":`${o} ✦`,"aria-hidden":"true",children:e.jsxs(p,{$cursor:!d&&i>=n.length,children:[o.slice(0,Math.max(0,i-n.length)),d&&e.jsx(T,{immediate:!0,className:"typing-star",spacing:8})]})})]})},S=()=>e.jsx(E,{children:e.jsxs("div",{className:"channel-page about-page",children:[e.jsxs("div",{className:"page-intro",children:[e.jsxs(h,{to:"/",className:"text-link",children:[e.jsx(x,{name:"back"})," 채널 홈"]}),e.jsx("span",{className:"eyebrow",children:"BEHIND THE SCREENS"})]}),e.jsxs("section",{className:"about-hero",children:[e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"A LITTLE ABOUT ME"}),e.jsx(L,{}),e.jsxs("p",{children:["차곡차곡 쌓아온 경험과 함께,",e.jsx("br",{}),"즐겁게 성장 중인 개발자 박은혜입니다."]}),e.jsx("div",{className:"tag-row",children:["탄탄한 기본기","지속 성장","밝은 에너지","구조적 사고"].map(s=>e.jsx("span",{children:s},s))})]}),e.jsxs("div",{className:"about-portrait",children:[e.jsx("img",{src:f,alt:"박은혜 프로필"}),e.jsxs("span",{children:["Frontend Developer",e.jsx("br",{}),"& UI Publisher"]})]})]}),e.jsxs("section",{className:"about-story",children:[e.jsx("span",{className:"eyebrow",children:"MY WAY OF WORKING"}),e.jsxs("h2",{children:["코드도, 함께하는 사람도.",e.jsx("br",{}),"둘 다 소중하게 생각합니다."]}),e.jsxs("div",{children:[e.jsx("p",{children:"처음엔 눈앞의 마크업 한 줄이 전부였지만, 어느새 더 나은 구조를 고민하고 사용자 경험을 생각하게 되었습니다. 다양한 서비스의 마크업과 프론트 개발을 경험하며, 기본기에 기반한 성장을 차곡차곡 쌓아왔습니다."}),e.jsx("p",{children:"협업에선 늘 열린 자세로 소통하며, ‘또 함께 일하고 싶은 사람’이라는 말을 들을 때 가장 큰 보람을 느낍니다. 코드뿐 아니라 사람과의 관계도 개발의 일부라고 생각하기에, 즐겁게 일하고 함께 성장하는 순간들을 소중히 여깁니다."}),e.jsx("p",{children:"작은 변화에서 배우고, 오늘보다 나은 내일의 나를 기대하며 지금 이 순간에도 꾸준히 성장 중입니다."})]})]}),e.jsxs("section",{className:"collaboration",children:[e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"GET TO KNOW MY WORK"}),e.jsx("h2",{children:"제가 만든 화면도 만나보세요"})]}),e.jsxs(h,{to:"/work",className:"button button-primary",children:["프로젝트 보기 ",e.jsx(x,{name:"layers"})]})]})]})});export{S as default};
