import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// lazy loading 적용
const Home = React.lazy(() => import('@/pages/Home'));
const AboutMe = React.lazy(() => import('@/pages/info/AboutMe'));
const Skill = React.lazy(() => import('@/pages/skill/Skill'));
const WorkExperience = React.lazy(() => import('@/pages/work/WorkExperience'));
const Dkbmc = React.lazy(() => import('@/pages/work/Dkbmc'));
const Pixdine = React.lazy(() => import('@/pages/work/Pixdine'));
const GoodRich = React.lazy(() => import('@/pages/work/GoodRich'));
const SelfIntroduction = React.lazy(() => import('@/pages/info/SelfIntroduction'));
const Error404 = React.lazy(() => import('@/pages/error/Error404'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/aboutMe',
    element: <AboutMe />,
  },
  {
    path: '/skill',
    element: <Skill />,
  },
  {
    path: '/work',
    element: <WorkExperience />,
  },
  {
    path: '/dkbmc',
    element: <Dkbmc />,
  },
  {
    path: '/pixdine',
    element: <Pixdine />,
  },
  {
    path: '/goodRich',
    element: <GoodRich />,
  },
  {
    path: '/selfIntroduction',
    element: <SelfIntroduction />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];

const router = createBrowserRouter(routes);

export default router;
