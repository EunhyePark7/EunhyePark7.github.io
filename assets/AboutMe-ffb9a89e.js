import{r,j as e}from"./index-a3ef3e8f.js";import{A as x,d as t}from"./AppLayout-8983164c.js";const w=()=>{const i=r.useRef(null),l=r.useRef(null),o=r.useRef(null),a=r.useRef(null);return r.useEffect(()=>{let n=null,s=0;const f=()=>{s=window.scrollY,n||(n=requestAnimationFrame(()=>{i.current&&(i.current.style.transform=`translateX(-${s*.1}px)`),l.current&&(l.current.style.transform=`translateX(${s*.3}px)`),o.current&&(o.current.style.transform=`translateX(-${s*.5}px)`),a.current&&(a.current.style.transform=`translateX(${s*.7}px)`),n=null}))};return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f),n&&cancelAnimationFrame(n)}},[]),e.jsxs(x,{children:[e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(c,{ref:i,children:"Hello,"}),e.jsx(d,{ref:l,children:"I'm Eunhye."}),e.jsxs(p,{children:[e.jsx(c,{ref:o,children:"Frontend"}),e.jsx(d,{ref:a,children:"Developer"})]})]})}),e.jsxs(j,{children:[e.jsxs(m,{children:["차곡차곡 쌓아온 경험과 함께,",e.jsx("br",{})," 즐겁게 성장 중인",e.jsx("br",{})," 개발자 박은혜입니다."]}),e.jsx(y,{children:e.jsxs("p",{children:["처음엔 눈앞의 마크업 한 줄이 전부였지만,",e.jsx("br",{})," 어느새 더 나은 구조를 고민하고 사용자 경험을 생각하게 되었습니다.",e.jsx("br",{}),"Salesforce 디자인시스템부터 시작해 다양한 서비스의 퍼블리싱과 프론트개발을 경험하며, ",e.jsx("br",{}),"기본기에 기반한 성장을 차곡차곡 쌓아왔습니다. ",e.jsx("br",{}),"협업에선 늘 열린 자세로 소통하며,",e.jsx("br",{})," ‘또 함께 일하고 싶은 사람’이라는 말을 들을 때 가장 큰 보람을 느낍니다.",e.jsx("br",{}),"코드뿐 아니라 사람과의 관계도 개발의 일부라고 생각하기에,",e.jsx("br",{})," 즐겁게 일하고 함께 성장하는 순간들을 소중히 여깁니다.",e.jsx("br",{})," 작은 변화에서 배우고, 오늘보다 나은 내일의 나를 기대하며",e.jsx("br",{})," 지금 이 순간에도 꾸준히 성장하고 있는 개발자 박은혜입니다."]})})]})]})},h=t.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,u=t.div`
  width: 100%;
  max-width: 1400px;
  min-height: 200px;
  transition: min-height 0.3s ease;
`,c=t.strong`
  display: block;
  font-size: 200px;
  font-weight: 700;
  line-height: 1;
  transform: translateX(0);
  transition: transform 0.3s ease;
`,d=t(c)`
  text-align: right;
  transition: transform 0.3s ease;
  word-break: keep-all;
  white-space: pre-line;
`,p=t.div`
  max-width: 1000px;
  strong {
    font-size: 140px;
    font-weight: 400;
  }
`,j=t.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`,m=t.strong`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.5;
`,y=t.div`
  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;export{w as default};
