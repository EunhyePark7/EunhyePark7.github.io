import Header from '@/components/Header';
import MainContainer from '@/components/MainContainer';
import { MENU } from '@/constants';
import useGlobalStore from '@/stores';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  const location = useLocation();
  const setPageHistory = useGlobalStore(state => state.setPageHistory);

  useEffect(() => {
    const getPageAlias = pathname => {
      switch (pathname) {
        case '/':
          return MENU.HOME?.EN;
        case '/aboutMe':
          return MENU.ABOUT_ME?.EN;
        case '/skill':
          return MENU.SKILL?.EN;
        case '/work':
          return MENU.WORK_EXPERIENCE?.EN;
        // Error404 페이지는 히스토리에 추가하지 않을 수도 있습니다.
        default:
          return null;
      }
    };

    // TODO 추후 다녀간 페이지 작업 필요
    const pageAlias = getPageAlias(location.pathname);
    if (pageAlias) {
      setPageHistory(pageAlias);
    }
  }, [location, setPageHistory]);

  return (
    <StyledApp>
      <Header />
      <MainContainer>{children}</MainContainer>
    </StyledApp>
  );
};

export default AppLayout;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
