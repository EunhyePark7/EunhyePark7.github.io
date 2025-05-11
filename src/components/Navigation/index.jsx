import styled from 'styled-components';
import MenuItem from './MenuItem';

const Navigation = () => {
  return (
    <StyledNavigation>
      <MenuItem to="/" iconType="bs" iconName="BsHouseDoor">Home</MenuItem>
      <MenuItem to="/aboutMe" iconType="fa6" iconName="FaUser">AboutMe</MenuItem>
      <MenuItem to="/skill" iconType="ai" iconName="AiOutlineAppstoreAdd">Skill</MenuItem>
      <MenuItem to="/companyHistory" iconType="bs" iconName="BsBuilding">CompanyHistory</MenuItem>
      <MenuItem to="/dkbmc" iconType="fa6" iconName="FaSchool">Dkbmc</MenuItem>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
`;