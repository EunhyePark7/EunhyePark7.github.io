import LogoDark from '@/assets/images/logo-dark.svg';
import LogoLight from '@/assets/images/logo-light.svg';
import { MENU } from '@/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import useGlobalStore from '@/stores';
import { media } from '@/styles/media';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';
import NavigationBottom from './NavigationBottom';
import NavigationItem from './NavigationItem';

const Navigation = () => {
  const language = useGlobalStore(state => state.language);
  const isNavCollapsed = useGlobalStore(state => state.isNavCollapsed);
  const isOverlayNavOpen = useGlobalStore(state => state.isOverlayNavOpen);
  const closeOverlayNav = useGlobalStore(state => state.closeOverlayNav);
  const theme = useGlobalStore(state => state.theme);
  const [isScrolled, setIsScrolled] = useState(false);

  const isOverlay = useMediaQuery(media.tablet);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isOverlay && !isOverlayNavOpen) {
    // return null;
  }

  const normalizedTheme = theme?.toLowerCase();
  const logoSrc = normalizedTheme === 'dark' ? LogoDark : LogoLight;

  const { HOME, ABOUT_ME, SKILL, WORK_EXPERIENCE, RESUME } = MENU;
  const navItems = [HOME, ABOUT_ME, SKILL, WORK_EXPERIENCE, RESUME];

  return (
    <>
      {/* {isOverlay && <StyledOverlayDimmed $visible={isOverlayNavOpen} onClick={closeOverlayNav} />} */}
      <StyledNavigation
        $collapsed={isNavCollapsed}
        $visible={isOverlayNavOpen}
        $scrolled={isScrolled}
        $overlay={isOverlay}
      >
        {isOverlay && (
          <StyledOverlayHeader>
            <StyledNavButton onClick={closeOverlayNav}>
              <Icon type="ai" iconName="AiOutlineMenu" />
            </StyledNavButton>
            <StyledLogo to="/">
              <img key={logoSrc} src={logoSrc} alt="logo" width="90" />
              <h1>Eunhye</h1>
            </StyledLogo>
          </StyledOverlayHeader>
        )}

        {navItems.map(({ name, to, iconType, iconName, activeIconName }) => (
          <NavigationItem
            key={to}
            to={to}
            iconType={iconType}
            iconName={iconName}
            activeIconName={activeIconName}
            isCollapsed={isNavCollapsed}
            isOverlay={isOverlay}
            onClick={isOverlay ? closeOverlayNav : undefined}
          >
            {name[language]}
          </NavigationItem>
        ))}

        <NavigationBottom isCollapsed={isNavCollapsed} language={language} />
      </StyledNavigation>
    </>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  position: ${({ $overlay }) => ($overlay ? 'fixed' : 'fixed')};
  top: ${({ $overlay }) => ($overlay ? '0' : '56px')};
  left: 0;
  width: ${({ $collapsed }) => ($collapsed ? '72px' : '240px')};
  height: ${({ $overlay }) => ($overlay ? '100%' : 'calc(100% - 56px)')};
  padding: ${({ $overlay }) => ($overlay ? '0' : '12px')};
  background-color: var(--default-background);
  box-shadow: ${({ $overlay }) => ($overlay ? '2px 0 12px rgba(0, 0, 0, 0.3)' : 'none')};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  transform: ${({ $overlay, $visible }) =>
    $overlay ? ($visible ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)'};
  z-index: 110;
`;

const StyledOverlayHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: sticky;
  top: 0;
  padding: 0 8px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--default-background);
  z-index: 110;
`;

const StyledNavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 18px 0;

  h1 {
    margin: 1px 0 0 3px;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;
