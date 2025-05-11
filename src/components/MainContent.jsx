import styled from 'styled-components';
import Navigation from './Navigation';

const MainContent = () => {
  return (
    <StyledMainContent>
      <Navigation />
      
    </StyledMainContent>
  );
};

export default MainContent;

const StyledMainContent = styled.main`
  display: flex;
  flex-grow: 1;
`;