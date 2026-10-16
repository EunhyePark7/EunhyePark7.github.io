# Park Eunhye Portfolio

유튜브 채널의 탐색 경험을 참고한 박은혜의 포트폴리오입니다. 소개, 보유 기술, 경력, 대표 프로젝트와 이력서를 담고 있습니다.

## 실행

프로젝트 폴더에서 실행합니다. Node.js 기준 버전은 .nvmrc의 v20.3.0이며, GitHub Actions는 Node.js 20으로 빌드합니다.

```sh
nvm install
nvm use
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
```

브라우저 주소: http://127.0.0.1:4173/

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4174
```

- build: dist에 배포 파일을 생성합니다.
- preview: 빌드 결과를 http://127.0.0.1:4174/ 에서 확인합니다.
- 원본 파일은 src와 public에서 수정하며, dist는 직접 수정하지 않습니다.

## 기술 구성

- React 18, Vite 4, React Router 7
- styled-components, SCSS, Framer Motion
- Zustand, react-icons, react-to-pdf
- 기존 마크업과 Styled 컴포넌트 패턴을 유지합니다.

## 페이지

| 주소 | 내용 |
| --- | --- |
| / | 채널 홈: 프로필, 플레이리스트, 대표 프로젝트, 검색·기술 필터 |
| /aboutMe | 소개와 협업 이야기 |
| /skill | Style & Markup / Component Architecture / UI & Collaboration |
| /work?view=career | 첫 번째 탭: 함께해 온 프로젝트들 |
| /work | 두 번째 탭: 대표 프로젝트 |
| /resume | 이력서와 PDF 다운로드 |
| /contact | 연락 페이지와 이메일 링크 |
| /selfIntroduction | 기존 자기소개서 준비 페이지 |
| 그 외 주소 | 404 페이지 |

## 주요 기능

- 홈에서 플레이리스트를 먼저 보여주고, 대표 프로젝트를 아래에 배치합니다.
- 홈 프로젝트 검색은 검색어 q와 기술 필터를 조합합니다.
- 경력/대표 프로젝트 탭, 프로젝트 해시와 검색어는 URL에 반영됩니다.
- 대표 프로젝트는 실제 PC·모바일 캡처, 디바이스 전환, 원본 확대, 실제 사이트 링크를 제공합니다.
- 프로필·사이드 메뉴, 밝은/어두운/시스템 테마와 기존 언어 설정을 제공합니다.
- 이력서 PDF는 이력서 페이지에서 생성합니다. 배포 전 개인정보를 확인하세요.
- /contact의 메일 링크는 사용자 이메일 앱을 엽니다. 링크 클릭만으로 이메일이 전송되지는 않습니다.

## 인터랙션

- 홈 배너는 처음 접힌 상태에서 자동으로 펼쳐집니다. 다시 접는 버튼은 없습니다.
- 홈의 플레이리스트·프로젝트 카드와 Skill 영역은 0.15초 간격으로 순차 등장하며, 각 카드의 등장 시간은 0.2초입니다.
- Skill 제목은 문장별로 올라오는 라인 리빌을 사용합니다. 두 문장의 강조 단어에는 밑줄이 순차적으로 그려집니다.
- About Me의 Hello, I'm Eunhye는 타이핑으로 등장하고, 완료 직후 별이 2.4초 주기로 회전합니다.
- 메인 프로필 별은 잠시 쉬었다가 회전하는 6초 주기 애니메이션입니다.
- 모션 감소 설정에서는 해당 진입·타이핑·별 회전 효과를 줄이거나 생략합니다.

## 디렉토리

```text
public/
├── favicon.ico
└── assets/
    ├── images/
    │   ├── profile.png
    │   ├── brand/
    │   └── thumbnails/
    ├── projects/
    ├── previews/
    ├── icons/
    ├── fonts/roboto/
    └── videos/
src/
├── assets/icons/
├── components/
│   ├── Company/
│   ├── ContextMenu/
│   └── Navigation/
├── pages/
│   ├── Home.jsx
│   ├── info/
│   ├── skill/
│   ├── work/
│   └── error/
├── constants/
│   ├── assets.js
│   ├── index.js
│   └── projects.js
├── hooks/
├── routes/
├── stores/
├── styles/
│   ├── main.scss
│   ├── _fonts.scss
│   ├── _reset.scss
│   ├── _variables.scss
│   └── _portfolio.scss
├── App.jsx
└── main.jsx
docs/
└── directory-structure.md
```

컴포넌트·페이지 폴더는 기존 구조를 유지합니다. 상세 자산 관리 규칙은 docs/directory-structure.md에 정리했습니다.

## 이미지·데이터 관리

| 대상 | 관리 위치 |
| --- | --- |
| 프로필·테마별 로고 경로 | src/constants/assets.js |
| 경력·메뉴·기존 썸네일/영상 경로 | src/constants/index.js |
| 대표 프로젝트 정보·실제 사이트 URL | src/constants/projects.js |
| 프로젝트 PC·모바일 PNG 원본 및 JPG 썸네일 | public/assets/projects/ |
| 프로필·로고·기존 콘텐츠 PNG | public/assets/images/ |
| 포트폴리오 검증 화면 PNG | public/assets/previews/ |
| 폰트 | public/assets/fonts/roboto/ |
| 영상 | public/assets/videos/ |
| 전체 페이지 스타일 | src/styles/_portfolio.scss |

- public/assets/images/profile.png는 /assets/images/profile.png로 참조합니다. 브라우저 URL에 public을 넣지 않습니다.
- 프로젝트 원본 goodrich-desktop.png의 썸네일은 goodrich-desktop-preview.jpg처럼 같은 폴더에 둡니다. ProjectPreview가 이 이름 규칙을 사용합니다.
- PNG 캡처 원본은 그대로 보존합니다. 카드에서는 JPG 미리보기를 사용합니다.
- SVG 기술 아이콘은 public/assets/icons, Icon 컴포넌트가 import하는 SVG는 src/assets/icons에 둡니다.
- 파일을 옮길 때 상수, JSX src, SCSS url도 함께 수정합니다.

## 배포·검증

```sh
npm run build
npm run deploy
```

- .github/workflows/deploy.yml은 main 브랜치 push 시 npm ci와 build를 실행하고 dist를 GitHub Pages에 배포합니다.
- Vite의 현재 base는 /입니다. 하위 경로에 배포할 때는 base와 라우터 경로를 함께 확인하세요.
- GitHub Pages에서 /aboutMe 같은 하위 주소를 직접 열거나 새로고침할 때는 SPA 폴백 구성을 별도로 확인하세요.
- 변경 후 홈·소개·기술·프로젝트·이력서의 이미지, 테마별 로고, 모바일 가로 넘침, PDF 다운로드를 확인합니다.
- 테스트 스크립트는 현재 등록되어 있지 않습니다. 빌드와 브라우저 확인을 기준으로 검증합니다.
- 기존 ESLint 설정은 CommonJS .eslintrc.js와 ESM 패키지 설정이 충돌하므로 별도 정리가 필요합니다.
- 기존 react-icons import 구조에 따른 큰 번들 및 Sass deprecated API 경고는 남아 있습니다.

## 최근 확인 (2026-10-16)

- 정리한 저장본의 npm run build 성공.
- 홈·소개·기술·대표 프로젝트·경력·이력서·연락 페이지: 이미지 로딩 및 PC 가로 넘침 확인.
- 이동한 이미지·로고·폰트·영상의 응답 경로 확인.
- 모바일 390px 홈: 프로필 정상 표시, 가로 넘침 없음.
- 원본 자산 33개: 이동 전후 파일 내용 동일.

## 연락처

- 이메일: eungkong333@gmail.com
- GitHub: https://github.com/EunhyePark7
