import styled from 'styled-components';
import Navigation from './Navigation';

const MainContent = ({ children }) => {
  return (
    <StyledMainContainer>
      <Navigation />
      <StyledMainWrap>{children}</StyledMainWrap>
    </StyledMainContainer>
  );
};

export default MainContent;

const StyledMainContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;
const StyledMainWrap = styled.main`
  flex: 1;
  padding: 12px 20px;
`;
