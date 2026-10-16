import useGlobalStore from '@/stores';
import { media } from '@/styles/media';
import styled from 'styled-components';
import Navigation from './Navigation';

const MainContainer = ({ children }) => {
  const isNavCollapsed = useGlobalStore(state => state.isNavCollapsed);

  return (
    <StyledMainContainer>
      <Navigation />
      <StyledMainWrap $collapsed={isNavCollapsed}>{children}</StyledMainWrap>
    </StyledMainContainer>
  );
};

export default MainContainer;

const StyledMainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 56px;
`;

const StyledMainWrap = styled.main`
  flex: 1;
  min-width: 0;
  width: ${({ $collapsed }) => ($collapsed ? 'calc(100% - 80px)' : 'calc(100% - 240px)')};
  padding: 24px 36px 32px;
  margin-left: ${({ $collapsed }) => ($collapsed ? '80px' : '240px')};
  transition: margin-left 0.3s ease;
  @media ${media.tablet} {
    width: 100%;
    margin-left: 0;
    padding: 20px 24px 32px;
    overflow-x: hidden;
  }
  @media ${media.mobile} {
    padding: 16px 16px 24px;
  }
`;
