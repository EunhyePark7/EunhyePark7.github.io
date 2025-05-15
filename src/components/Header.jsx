import useGlobalStore from '@/stores';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgLogo from '../assets/images/external-icon.svg';
import ContextMenu from './ContextMenu';
import Icon from './Icon';

const Header = () => {
  const toggleNav = useGlobalStore(state => state.toggleNav);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderContent>
          <StyledMenubutton onClick={toggleNav}>
            <Icon type="ai" iconName="AiOutlineMenu" />
          </StyledMenubutton>
          <StyledLogo to="/">
            <img src={ImgLogo} alt="logo" width="101" height="20" />
          </StyledLogo>
        </StyledHeaderContent>
        <StyledHeaderContent></StyledHeaderContent>
        <StyledHeaderContent>
          <ContextMenu />
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
  transition: transform 0.3s cubic-bezier(0.05, 0, 0, 1);
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
const StyledMenubutton = styled.button`
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
