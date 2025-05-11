import styled from 'styled-components';
import Icon from './Icon';
import ImgLogo from '../assets/images/external-icon.svg';
import { Link } from 'react-router-dom';
import AvatarBtn from './AvatarBtn';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderContent>
          <StyledMenu>
            <Icon type="ai" bsIconName="AiOutlineMenu" />
          </StyledMenu>
          <StyledLogo to="/">
            <img src={ImgLogo} alt="logo" width="101" height="20" />
          </StyledLogo>
        </StyledHeaderContent>
        <StyledHeaderContent>

        </StyledHeaderContent>
        <StyledHeaderContent>
          <AvatarBtn />
        </StyledHeaderContent>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  z-index: 100;
  transform: translateY(0);
  transition: transform .3s cubic-bezier(.05,0,0,1);
`; 
const StyledHeaderContainer = styled.div`
  height: 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledMenu = styled.button`
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  &:hover {
    background-color: var(--outline);
  }
`;
const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 18px 14px 18px 16px;
`;