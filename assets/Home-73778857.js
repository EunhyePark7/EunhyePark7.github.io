import{r as i,j as e,u as U,W as B,L as g}from"./index-b480a157.js";import{m as L,d as y,a as b,A as F,P as W,b as j}from"./AppLayout-711147b2.js";import{P as K}from"./ProfileStar-de07795b.js";import{R as E}from"./MotionDetail-1496d5a3.js";import{M as G,i as Y,u as O,P as _,a as J,b as V,L as X,m as z,c as q,d as Q}from"./use-in-view-0deef6cb.js";import{P as Z,a as ee}from"./projects-2b91a820.js";class se extends i.Component{getSnapshotBeforeUpdate(o){const n=this.props.childRef.current;if(n&&o.isPresent&&!this.props.isPresent){const a=n.offsetParent,c=Y(a)&&a.offsetWidth||0,r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft,r.right=c-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ne({children:t,isPresent:o,anchorX:n}){const a=i.useId(),c=i.useRef(null),r=i.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:x}=i.useContext(G);return i.useInsertionEffect(()=>{const{width:s,height:l,top:v,left:d,right:u}=r.current;if(o||!c.current||!s||!l)return;const m=n==="left"?`left: ${d}`:`right: ${u}`;c.current.dataset.motionPopId=a;const p=document.createElement("style");return x&&(p.nonce=x),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            ${m}px !important;
            top: ${v}px !important;
          }
        `),()=>{document.head.contains(p)&&document.head.removeChild(p)}},[o]),e.jsx(se,{isPresent:o,childRef:c,sizeRef:r,children:i.cloneElement(t,{ref:c})})}const te=({children:t,initial:o,isPresent:n,onExitComplete:a,custom:c,presenceAffectsLayout:r,mode:x,anchorX:s})=>{const l=O(ie),v=i.useId();let d=!0,u=i.useMemo(()=>(d=!1,{id:v,initial:o,isPresent:n,custom:c,onExitComplete:m=>{l.set(m,!0);for(const p of l.values())if(!p)return;a&&a()},register:m=>(l.set(m,!1),()=>l.delete(m))}),[n,l,a]);return r&&d&&(u={...u}),i.useMemo(()=>{l.forEach((m,p)=>l.set(p,!1))},[n]),i.useEffect(()=>{!n&&!l.size&&a&&a()},[n]),x==="popLayout"&&(t=e.jsx(ne,{isPresent:n,anchorX:s,children:t})),e.jsx(_.Provider,{value:u,children:t})};function ie(){return new Map}const k=t=>t.key||"";function M(t){const o=[];return i.Children.forEach(t,n=>{i.isValidElement(n)&&o.push(n)}),o}const ae=({children:t,custom:o,initial:n=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:r="sync",propagate:x=!1,anchorX:s="left"})=>{const[l,v]=J(x),d=i.useMemo(()=>M(t),[t]),u=x&&!l?[]:d.map(k),m=i.useRef(!0),p=i.useRef(d),w=O(()=>new Map),[A,H]=i.useState(d),[N,S]=i.useState(d);V(()=>{m.current=!1,p.current=d;for(let f=0;f<N.length;f++){const h=k(N[f]);u.includes(h)?w.delete(h):w.get(h)!==!0&&w.set(h,!1)}},[N,u.length,u.join("-")]);const $=[];if(d!==A){let f=[...d];for(let h=0;h<N.length;h++){const C=N[h],R=k(C);u.includes(R)||(f.splice(h,0,C),$.push(C))}return r==="wait"&&$.length&&(f=$),S(M(f)),H(d),null}const{forceRender:P}=i.useContext(X);return e.jsx(e.Fragment,{children:N.map(f=>{const h=k(f),C=x&&!l?!1:d===N||u.includes(h),R=()=>{if(w.has(h))w.set(h,!0);else return;let I=!0;w.forEach(D=>{D||(I=!1)}),I&&(P==null||P(),S(p.current),x&&(v==null||v()),a&&a())};return e.jsx(te,{isPresent:C,initial:!m.current||n?void 0:!1,custom:o,presenceAffectsLayout:c,mode:r,onExitComplete:C?void 0:R,anchorX:s,children:f},h)})})},re=()=>{const[t,o]=i.useState(!0),n=q(),a=i.useRef(null),c=i.useRef(null),r=Q(a);return i.useEffect(()=>(c.current=window.setTimeout(()=>o(!1),n?0:650),()=>window.clearTimeout(c.current)),[n]),e.jsxs(ce,{ref:a,$collapsed:t,$moving:r&&!n,children:[e.jsx(de,{children:"DESIGN IN MIND. DETAIL IN CODE."}),e.jsx(ae,{initial:!1,children:!t&&e.jsxs(he,{id:"channel-banner-content",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:n?0:.6,ease:[.22,1,.36,1]},children:[e.jsxs(pe,{initial:n?!1:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:n?0:.45},children:[e.jsxs("h1",{children:["작은 디테일이,",e.jsx("br",{}),"좋은 경험이 되도록",e.jsx("span",{children:"."})]}),e.jsx("p",{children:"Frontend Developer & UI Publisher"})]}),e.jsxs(xe,{"aria-hidden":"true",children:[e.jsx(T,{$direction:-1}),e.jsx(T,{$direction:1}),e.jsx(ue,{children:"▶"}),e.jsxs(me,{children:["Made with care",e.jsx("br",{}),e.jsx("b",{children:"by Eunhye."})]})]})]})})]})},le=L`
  0%, 100% { transform: translateY(0) rotate(-12deg); }
  50% { transform: translateY(-5px) rotate(-8deg); }
`,oe=L`
  0%, 100% { transform: rotate(-25deg); }
  50% { transform: rotate(-13deg); }
`,ce=y.section`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  padding: ${({$collapsed:t})=>t?"18px 28px":"23px 28px"};
  background: #25232e;
  color: #f6f3ff;
  animation-play-state: ${({$moving:t})=>t?"running":"paused"};
  transition: padding 0.3s ease;
  @media ${b.mobile} {
    padding: 20px;
  }
`,de=y.span`
  display: block;
  color: #bcb0d2;
  letter-spacing: 1.5px;
  font-size: 8px;
  line-height: 1.5;
  @media ${b.mobile} {
    font-size: 7px;
  }
`,he=y(z.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden;
  @media ${b.mobile} {
    gap: 8px;
  }
`,pe=y(z.div)`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  padding: 12px 0 3px;
  h1 {
    font-size: clamp(26px, 2.5vw, 36px);
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -1.4px;
  }
  h1 span {
    color: #c5b0f6;
  }
  p {
    margin-top: 12px;
    font-size: 10px;
    color: #b8b2c6;
  }
  @media ${b.mobile} {
    h1 {
      font-size: clamp(18px, 5.1vw, 27px);
      letter-spacing: -1px;
    }
    p {
      max-width: 175px;
      font-size: 8px;
      line-height: 1.6;
    }
  }
`,xe=y.div`
  position: relative;
  width: 215px;
  height: 125px;
  flex-shrink: 0;
  animation-play-state: inherit;
  @media ${b.mobile} {
    width: 68px;
    height: 85px;
  }
`,T=y.span`
  position: absolute;
  inset: 25px 15px;
  border: 1px solid #dbccfc44;
  border-radius: 50%;
  animation: ${oe} 14s ease-in-out infinite;
  animation-direction: ${({$direction:t})=>t===1?"reverse":"normal"};
  animation-play-state: inherit;
  &:nth-child(2) {
    rotate: 50deg;
  }
  @media ${b.mobile} {
    inset: 24px 6px;
  }
`,ue=y.span`
  position: absolute;
  top: 35px;
  left: 72px;
  width: 65px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, #dfd2fa, #ae8de0);
  color: #363044;
  font-size: 25px;
  animation: ${le} 6s ease-in-out infinite;
  animation-play-state: inherit;
  @media ${b.mobile} {
    top: 26px;
    left: 17px;
    width: 37px;
    height: 34px;
    border-radius: 10px;
    font-size: 15px;
  }
`,me=y.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 9px;
  color: #cdc3dc;
  b {
    font-weight: 500;
    color: #f4eeff;
    font-size: 15px;
  }
  @media ${b.mobile} {
    display: none;
  }
`,fe=["전체","React","Next.js","Markup"],we=()=>{var x;const[t,o]=i.useState("전체"),[n]=U(),a=((x=n.get("q"))==null?void 0:x.trim())||"",c=Z.filter(s=>(t==="전체"||s.tags.includes(t))&&`${s.title} ${s.company} ${s.tags.join(" ")}`.toLowerCase().includes(a.toLowerCase())),r=B.reduce((s,l)=>s+l.projects.length,0);return e.jsx(F,{children:e.jsxs("div",{className:"channel-page",children:[e.jsx(re,{}),e.jsxs("section",{className:"channel-profile",children:[e.jsx("div",{className:"channel-avatar",children:e.jsx("img",{src:W,alt:"박은혜 프로필"})}),e.jsxs("div",{className:"channel-description",children:[e.jsxs("h2",{children:["Eunhye Park ",e.jsx(K,{})]}),e.jsxs("p",{className:"channel-handle",children:["@eunhyepark ",e.jsx("span",{children:"·"})," 프론트엔드 개발자 & UI 퍼블리셔"]}),e.jsxs("p",{className:"channel-bio",children:["탄탄한 마크업부터 사용자 경험을 생각하는 UI까지.",e.jsx("br",{className:"mobile-only"})," 차곡차곡 쌓아온 작업을 소개합니다."]}),e.jsxs(g,{to:"/aboutMe",className:"text-link",children:["조금 더 알아보기 ",e.jsx(j,{name:"user"})]})]}),e.jsxs("div",{className:"channel-actions",children:[e.jsxs(g,{to:"/resume",className:"button button-primary",children:["이력서 보기 ",e.jsx(j,{name:"document"})]}),e.jsxs("a",{href:"mailto:eungkong333@gmail.com",className:"button button-secondary",children:["연락하기 ",e.jsx(j,{name:"mail"})]})]})]}),e.jsxs("nav",{className:"channel-tabs","aria-label":"채널 메뉴",children:[e.jsx(g,{to:"/","aria-current":"page",children:"홈"}),e.jsx(g,{to:"/work",children:"프로젝트"}),e.jsx(g,{to:"/skill",children:"보유 기술"}),e.jsx(g,{to:"/aboutMe",children:"소개"}),e.jsxs("span",{className:"channel-tab-note",children:[r,"개의 프로젝트 경험"]})]}),e.jsxs("section",{className:"playlist-section","aria-labelledby":"playlist-heading",children:[e.jsx("div",{className:"section-heading",children:e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"MORE ABOUT THIS CHANNEL"}),e.jsx("h2",{id:"playlist-heading",children:"은혜를 알아가는 플레이리스트"})]})}),e.jsxs("div",{className:"playlist-grid",children:[e.jsxs(E,{as:"link",index:0,interval:.15,duration:.2,to:"/aboutMe",className:"playlist-card",children:[e.jsxs("div",{className:"playlist-cover about-cover",children:[e.jsx("span",{children:"01 / ABOUT"}),e.jsxs("strong",{children:["Hello,",e.jsx("br",{}),"I'm Eunhye",e.jsx("span",{children:"✦"})]}),e.jsx("span",{className:"playlist-icon",children:e.jsx(j,{name:"user"})})]}),e.jsx("h3",{children:"코드 너머의 저를 소개합니다"}),e.jsx("p",{children:"함께 일하는 태도와 성장 이야기"})]}),e.jsxs(E,{as:"link",index:1,interval:.15,duration:.2,to:"/skill",className:"playlist-card",children:[e.jsxs("div",{className:"playlist-cover skills-cover",children:[e.jsx("span",{children:"02 / TOOLKIT"}),e.jsx("div",{className:"skill-cover-icons",children:["reactjs","javascript","scss"].map(s=>e.jsx("img",{src:`/assets/icons/${s}.svg`,alt:""},s))}),e.jsx("strong",{children:"My creative toolkit."}),e.jsx("span",{className:"playlist-icon",children:e.jsx(j,{name:"code"})})]}),e.jsx("h3",{children:"아이디어를 화면으로 만드는 기술"}),e.jsx("p",{children:"Markup · Styling · Frontend"})]}),e.jsxs(E,{as:"link",index:2,interval:.15,duration:.2,to:"/resume",className:"playlist-card",children:[e.jsxs("div",{className:"playlist-cover resume-cover",children:[e.jsx("span",{children:"03 / JOURNEY"}),e.jsxs("strong",{children:["Experience,",e.jsx("br",{}),"layer by layer."]}),e.jsxs("div",{className:"resume-lines","aria-hidden":"true",children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]}),e.jsx("span",{className:"playlist-icon",children:e.jsx(j,{name:"briefcase"})})]}),e.jsx("h3",{children:"차곡차곡 쌓아온 커리어"}),e.jsx("p",{children:"경력과 이력서 한눈에 보기"})]})]})]}),e.jsxs("section",{className:"selected-section","aria-labelledby":"selected-heading",children:[e.jsxs("div",{className:"section-heading",children:[e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"THE WORK, NOT JUST THE WORDS"}),e.jsxs("h2",{id:"selected-heading",children:["대표 프로젝트 ",e.jsx("span",{className:"heading-count",children:"03"})]})]}),e.jsxs(g,{to:"/work?view=career",className:"text-link",children:["모든 경력 보기 ",e.jsx(j,{name:"briefcase"})]})]}),e.jsxs("div",{className:"filter-row","aria-label":"프로젝트 기술 필터",children:[fe.map(s=>e.jsx("button",{className:`filter-chip${t===s?" active":""}`,"aria-pressed":t===s,onClick:()=>o(s),children:s},s)),a&&e.jsxs(g,{to:"/",className:"search-clear",children:["“",a,"” 검색 해제 ×"]})]}),e.jsx("div",{className:"project-grid","aria-live":"polite",children:c.map((s,l)=>e.jsxs(E,{as:"link",index:l,interval:.15,duration:.2,to:`/work#${s.id}`,className:"project-card",children:[e.jsx(ee,{project:s,compact:!0}),e.jsxs("div",{className:"card-description",children:[e.jsx("span",{className:`company-avatar tone-${s.tone}`,children:s.companyId==="goodrich"?"G":"H"}),e.jsxs("div",{children:[e.jsx("h3",{children:s.title}),e.jsxs("p",{children:[s.role," ",e.jsx("span",{children:"·"})," ",s.tags[0]]}),e.jsx("p",{className:"card-period",children:s.period})]}),e.jsx("span",{className:"card-arrow","aria-hidden":"true",children:e.jsx(j,{name:"layers"})})]})]},s.id))},`${t}-${a}`),c.length===0&&e.jsxs("div",{className:"empty-state",children:[e.jsx("h3",{children:"일치하는 프로젝트가 없어요."}),e.jsx("p",{children:"검색어 또는 기술 필터를 변경해 주세요."}),e.jsx("button",{className:"button button-secondary",onClick:()=>o("전체"),children:"전체 기술 보기"})]})]}),e.jsxs("section",{className:"collaboration",children:[e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"LET'S MAKE THE NEXT CHAPTER"}),e.jsxs("h2",{children:["다음 좋은 작업은,",e.jsx("br",{className:"mobile-only"})," 함께 만들어요"]}),e.jsx("p",{children:"작업에 대한 이야기, 새로운 기회, 가벼운 인사도 환영합니다."})]}),e.jsxs("a",{href:"mailto:eungkong333@gmail.com",className:"button button-primary",children:["함께 이야기하기 ",e.jsx(j,{name:"chat"})]})]}),e.jsxs("footer",{className:"channel-footer",children:[e.jsxs("span",{children:["© ",new Date().getFullYear()," Eunhye Park"]}),e.jsx("span",{children:"Thoughtfully designed. Carefully built."}),e.jsxs("a",{href:"https://github.com/EunhyePark7",target:"_blank",rel:"noreferrer",children:["GitHub ",e.jsx(j,{name:"github"})]})]})]})})};export{we as default};
