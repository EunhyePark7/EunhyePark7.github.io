import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// lazy loading 적용
const Home = React.lazy(() => import('@/pages/Home'));
const AboutMe = React.lazy(() => import('@/pages/info/AboutMe'));
const Skill = React.lazy(() => import('@/pages/skill/Skill'));
const WorkExperience = React.lazy(() => import('@/pages/work/WorkExperience'));
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
