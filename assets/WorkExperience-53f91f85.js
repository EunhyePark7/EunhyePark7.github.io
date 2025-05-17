import{r as l,j as i}from"./index-6bb58d81.js";import{A as a,d as o}from"./AppLayout-4b61caad.js";const m=()=>{var s;const e=[{company:"굿리치",projects:[{title:"굿리치 기업홈페이지 리뉴얼",period:"2024.12~2025.03",description:["UI 및 프론트 개발","ReactJs 전환"]},{title:"굿리치앱 마이크로사이트 리뉴얼",period:"2024.01~2024.05",description:["UI 및 프론트 개발","NextJs 전환"]},{title:"굿리치금융캠퍼스 구축",period:"2023.10~2024.05",description:["UI 및 프론트 개발"]},{title:"굿리치x국가대표선수협회 자선골프대회 이벤트페이지 구축",period:"2023.09~2023.10",description:["UI 및 프론트 개발"]},{title:"굿리치스마일보장분석 페이지 리뉴얼",period:"2023.07~2023.09",description:["UI 및 프론트 개발"]},{title:"굿리치x캐시노트 이벤트페이지 구축",period:"2023.05~2023.06",description:["UI 및 프론트 개발"]},{title:"굿리치앱 웹뷰페이지 운영",period:"2023.05~ (상시 운영)",description:["UI 및 프론트 개발"]},{title:"굿리치 마케팅사이트 운영",period:"2023.05~ (상시 운영)",description:["UI 및 프론트 개발"]},{title:"굿리치 기업사이트, 앱 마이크로사이트 운영",period:"2023.05~ (상시 운영)",description:["UI 및 프론트 개발"]}]},{company:"픽스다인웨이메이커",projects:[{title:"신한은행 쏠 앱 퇴직연금파트 구축",period:"2023.01~2023.05",description:["마크업 개발"]},{title:"삼성 SDS 생산관리시스템 구축",period:"2022.06~2022.12",description:["VueJs 기반 마크업 개발"]},{title:"현대커머셜 홈페이지 리뉴얼",period:"2021.12~2022.05",description:["마크업 개발"]},{title:"KCB 기업신용사이트 bizground 구축",period:"2021.06~2021.12",description:["마크업 개발 / PL"]},{title:"신라면세점 온라인몰 운영",period:"2021.03~2021.05",description:["마크업 개발"]},{title:"KCB 개인신용사이트 OkName 구축",period:"2021.02~2021.03",description:["마크업 개발 / PL"]}]},{company:"DKBMC",projects:[{title:"자사 기업홈페이지 리뉴얼",period:"2018.01~2018.03",description:["디자인 및 마크업 개발"]},{title:"에뛰드 사내 커뮤니티 플랫폼 운영",period:"2018.01~2018.10",description:["디자인 및 마크업 개발"]},{title:"Lightning UI Template 플러그인 개발",period:"2018.01~2018.12",description:["js플러그인 개발","가이드 페이지 개발"]},{title:"올림푸스 영업지원 플랫폼 개발",period:"2017.10~2018.02",description:["디자인 및 마크업 개발"]},{title:"SK Lubricant Global Partner Portal 프로젝트",period:"2017.08~2018.08",description:["디자인 및 마크업 개발"]},{title:"샘소나이트 온라인몰 구축 및 운영",period:"2017.05~2017.07",description:["디자인 및 마크업 개발"]},{title:"CJ 제일제당 CRM 시스템 구축",period:"2017.01~2017.09",description:["디자인 및 마크업 개발"]},{title:"에뛰드 사내 커뮤니티 플랫폼 구축",period:"2017.01~2017.04",description:["디자인 및 마크업 개발"]},{title:"샘소나이트 커머스사이트 리뉴얼",period:"2016.11~2017.01",description:["디자인 및 마크업 개발"]}]}],[d,n]=l.useState("굿리치");return i.jsx(a,{children:i.jsxs(i.Fragment,{children:[i.jsxs(c,{children:[i.jsx("ol",{children:e.map(({company:t},r)=>i.jsx("li",{children:i.jsxs(x,{$isActive:d===t,onClick:()=>n(t),$offset:r===1?-69:10,children:[i.jsx("strong",{children:t}),i.jsx("span",{children:t==="굿리치"?"2023.05 ~ 2025.04":t==="픽스다인웨이메이커"?"2021.02 ~ 2023.05":"2016.11 ~ 2018.12"})]})},t))}),i.jsx(h,{children:i.jsx("span",{})})]}),i.jsx(g,{children:(s=e.find(({company:t})=>t===d))==null?void 0:s.projects.map((t,r)=>i.jsxs("li",{children:[i.jsx("strong",{children:t.title}),i.jsx("span",{children:t.period}),i.jsx("p",{children:t.description.map((p,b)=>i.jsxs(i.Fragment,{children:[p,i.jsx("br",{})]}))})]},r))})]})})},c=o.div`
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
`,x=o.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({$offset:e})=>e||10}px;
  padding: 10px 14px;
  border-radius: 20px;
  border: ${({$isActive:e})=>e?"1px solid #6719db":"1px solid var(--outline)"};
  box-shadow: 3px 0 7px var(--additive-background);
  white-space: nowrap;
  transform: translateX(-30%);
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
`,h=o.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--outline);
  transform: translateY(-50%);
`,g=o.ul`
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
`;export{m as default};
