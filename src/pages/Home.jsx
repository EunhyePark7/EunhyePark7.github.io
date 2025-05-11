import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Icon from '@/components/Icon';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/**
 * 메인 페이지
 */

const Home = () => {
  return (
    <StyledApp>
      <Header />
      <MainContent />
    </StyledApp>
  );
};

export default Home;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const StyledNavLink = styled(NavLink)`
  display: block; 
  margin: 10px 0;
  `