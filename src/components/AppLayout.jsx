import Header from '@/components/Header';
import MainContainer from '@/components/MainContainer';
import { MENU } from '@/constants';
import useGlobalStore from '@/stores';
import { media } from '@/styles/media';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  const location = useLocation();
  const setPageHistory = useGlobalStore(state => state.setPageHistory);
  const isOverlayNavOpen = useGlobalStore(state => state.isOverlayNavOpen);
  const closeOverlayNav = useGlobalStore(state => state.closeOverlayNav);

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
      <StyledOverlayDimmed $visible={isOverlayNavOpen} onClick={closeOverlayNav} />
    </StyledApp>
  );
};

export default AppLayout;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
`;
const StyledOverlayDimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
  z-index: 105;

  @media ${media.tablet} {
    display: block;
  }

  ${({ $visible }) =>
    $visible &&
    `
      opacity: 1;
      pointer-events: auto;
  `}
`;
