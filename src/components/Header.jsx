import useGlobalStore from '@/stores';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoDark from '../assets/images/logo-dark.svg';
import LogoLight from '../assets/images/logo-light.svg';
import ContextMenu from './ContextMenu';
import Icon from './Icon';

const Header = () => {
  const toggleNav = useGlobalStore(state => state.toggleNav);
  const theme = useGlobalStore(state => state.theme);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const normalizedTheme = theme?.toLowerCase();
  const logoSrc = normalizedTheme === 'dark' ? LogoDark : LogoLight;

  return (
    <StyledHeader $scrolled={isScrolled}>
      <StyledHeaderContainer>
        <StyledHeaderContent>
          <StyledMenubutton onClick={toggleNav}>
            <Icon type="ai" iconName="AiOutlineMenu" />
          </StyledMenubutton>
          <StyledLogo to="/">
            <img key={logoSrc} src={logoSrc} alt="logo" width="101" height="20" />
            <h1>Eunhye</h1>
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
  position: fixed;
  width: 100%;
  background-color: ${({ $scrolled }) => ($scrolled ? 'var(--overlay-background)' : 'var(--default-background)')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'saturate(180%) blur(8px)' : 'none')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 1px 10px var(--additive-background)' : 'none')};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;
  z-index: 100;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
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

  h1 {
    margin: 2px 0 0 8px;
    font-size: 20px;
    font-weight: 500;
  }
`;
