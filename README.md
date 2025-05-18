# 🧑‍💻 Park Eunhye Portfolio

박은혜의 포트폴리오 웹사이트입니다.

## 🌐 GitHub

- [https://github.com/EunhyePark7/EunhyePark7.github.io](https://github.com/EunhyePark7/EunhyePark7.github.io)

## 🚀 GitHub Page

- [https://eunhyepark7.github.io/](https://eunhyepark7.github.io/)

## 📦 Getting Started

```bash
git clone https://github.com/EunhyePark7/EunhyePark7.github.io.git
cd EunhyePark7.github.io
nvm install
nvm use
npm install
npm run dev
```

## 📘 Environment

- Node.js: v20.3.0
- npm: 9.6.7
  > `package.json`의 `engines` 필드에서 버전을 강제하고 있으며, 버전이 다를 경우 설치 또는 실행 시 경고가 발생할 수 있습니다.

## 🛠 Tech Stack

- **Frontend**: Vite, React, React Router, zustand
- **Style**: SCSS, styled-component, react-icon
- **Tooling**: Git, GitHub Pages, ESLint, Prettier

## 📂 Deployment

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

- local 배포

```bash
npm run build
npm run deploy
```

- Github Action 자동 배포
  [https://github.com/EunhyePark7/EunhyePark7.github.io/blob/main/.github/workflows/deploy.yml](https://github.com/EunhyePark7/EunhyePark7.github.io/blob/main/.github/workflows/deploy.yml)

## 🗂️ Project Structure

```
my-project/
├── .github/
│ └── workflows/
│ │ └── delpoy.yml
├── .vscode/
│ └── setting.json
├── public/
│ ├── assets/
│ └── icons/
├── src/
│ ├── assets/
│ │ ├── styles/
│ │ │ ├── main.scss
│ │ │ └── variables.scss
│ │ ├── images/
│ │ ├── icons/
│ │ └── fonts/
│ ├── components/
│ │ ├── Company/
│ │ │ ├── Dkbmc.jsx
│ │ │ ├── GoodRich.jsx
│ │ │ └── Pixdine.jsx
│ │ ├── ContextMenu/
│ │ │ ├── ContextPanelDefault.jsx
│ │ │ ├── ContextPanelLanguage.jsx
│ │ │ ├── ContextPanelTheme.jsx
│ │ │ └── index.jsx
│ │ ├── Navigation/
│ │ │ ├── NavigationBottom.jsx
│ │ │ ├── NavigationItem.jsx
│ │ │ └── index.jsx
│ │ ├── AboutMeTop.jsx
│ │ ├── AppLayout.jsx
│ │ ├── ContactFormModal.jsx
│ │ ├── Header.jsx
│ │ ├── Icon.jsx
│ │ ├── MainContainer.jsx
│ │ ├── PageTitle.jsx
│ │ └── ThemeProvider.jsx
│ ├── pages/
│ │ ├── error/
│ │ │ └── Error404.jsx
│ │ ├── info/
│ │ │ ├── AboutMe.jsx
│ │ │ ├── Contact.jsx
│ │ │ ├── Resume.jsx
│ │ │ └── SelfIntroduction.jsx
│ │ ├── skill/
│ │ │ └── Skill.jsx
│ │ ├── work/
│ │ │ └── WorkExperience.jsx
│ │ └── Home.jsx
│ ├── constants/
│ │ └── index.jsx
│ ├── routes/
│ │ └── index.jsx
│ ├── stores/
│ │ └── index.jsx
│ ├── styles/
│ │ └── main.scss
│ ├── App.jsx
│ └── main.jsx
├── .env
├── .eslintrc.js
├── .gitignore
├── .nvmrc
├── .prettierrc
├── babel.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 📬 Contact

궁금한 점은 아래 이메일로 연락 주세요.

- 이메일: eungkong333@gmail.com
- GitHub: [@EunhyePark7](https://github.com/EunhyePark7)
