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
  width: ${({ $collapsed }) => ($collapsed ? 'calc(100% - 80px)' : 'calc(100% - 240px)')};
  padding: 12px 40px 70px;
  margin-left: ${({ $collapsed }) => ($collapsed ? '80px' : '240px')};
  transition: margin-left 0.3s ease;
  @media ${media.tablet} {
    margin-left: 0;
    padding: 20px 20px 60px;
    overflow-x: hidden;
  }
`;
