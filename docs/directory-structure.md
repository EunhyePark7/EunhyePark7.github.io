# 디렉토리 및 정적 자산 관리

PNG 이미지와 로고·영상·폰트를 public/assets에 모으고, SCSS는 src/styles로 통합했습니다. 기존 React, styled-components, SCSS, Framer Motion 패턴과 페이지 URL은 유지합니다.

```text
EunhyePark7-portfolio-redesign/
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       │   ├── profile.png
│       │   ├── brand/          # 테마별 로고
│       │   └── thumbnails/     # 소개·회사 썸네일
│       ├── projects/           # 프로젝트 PC·모바일 원본 및 미리보기
│       ├── previews/           # 포트폴리오 화면 검증 캡처
│       ├── icons/              # 기술 스택 SVG 아이콘
│       ├── fonts/roboto/       # 폰트 파일
│       └── videos/             # 기존 소개 영상
├── src/
│   ├── assets/icons/           # Icon 컴포넌트가 import하는 SVG
│   ├── components/             # 공통 UI·애니메이션 및 기존 컴포넌트
│   ├── pages/                  # Home 및 info/skill/work/error 페이지
│   ├── constants/              # 데이터·메뉴·정적 이미지 경로
│   ├── hooks/
│   ├── routes/
│   ├── stores/
│   ├── styles/                 # main/fonts/reset/variables/portfolio SCSS
│   ├── App.jsx
│   └── main.jsx
├── docs/
│   └── directory-structure.md
├── .github/
├── .vscode/
├── README.md
├── package.json
├── package-lock.json
└── vite.config.js
```

## 경로 사용

- public 폴더명은 브라우저 URL에 포함하지 않습니다. 예: public/assets/images/profile.png → /assets/images/profile.png.
- 프로필과 테마별 로고는 src/constants/assets.js에서 경로를 관리합니다.
- 프로젝트 캡처와 JPG 썸네일은 public/assets/projects에 함께 보관합니다. src/constants/projects.js의 desktop/mobile 값과 ProjectPreview의 -preview.jpg 규칙을 유지합니다.
- 메뉴 썸네일과 영상 경로는 src/constants/index.js의 thumbnail 값에서 관리합니다.
- 폰트는 src/styles/_fonts.scss에서 /assets/fonts/roboto/... 경로로 불러옵니다.
- SVG 기술 아이콘은 public/assets/icons, 코드에서 import하는 기존 SVG는 src/assets/icons에 둡니다.
- 화면 검증 PNG는 public/assets/previews에 보관합니다. 실제 서비스 이미지와 구분하고, 원본 캡처는 삭제하거나 압축하지 않습니다.
- src/styles/main.scss가 fonts, reset, portfolio를 로딩하고 reset이 variables를 로딩합니다.
- dist와 node_modules는 생성 파일입니다. 소스 수정은 src와 public에서 하며 dist는 npm run build로 다시 생성합니다.

## 실행과 확인

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
npm run build
```

이미지를 옮길 때는 사용하는 상수, JSX src, SCSS url을 함께 수정합니다. 홈·소개·이력서의 프로필, 테마별 로고, 기술 아이콘, 프로젝트 원본/썸네일을 확인하세요.
