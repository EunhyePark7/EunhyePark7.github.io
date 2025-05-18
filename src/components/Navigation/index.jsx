import { MENU } from '@/constants';
import useGlobalStore from '@/stores';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavigationBottom from './NavigationBottom';
import NavigationItem from './NavigationItem';

const Navigation = () => {
  const language = useGlobalStore(state => state.language);
  const isNavCollapsed = useGlobalStore(state => state.isNavCollapsed);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { HOME, ABOUT_ME, SKILL, WORK_EXPERIENCE, RESUME } = MENU;
  const navItems = [HOME, ABOUT_ME, SKILL, WORK_EXPERIENCE, RESUME];

  return (
    <StyledNavigation $collapsed={isNavCollapsed} $scrolled={isScrolled} role="navigation" aria-label="Main Navigation">
      {navItems.map(({ name, to, iconType, iconName, activeIconName }) => (
        <NavigationItem
          key={to}
          to={to}
          iconType={iconType}
          iconName={iconName}
          activeIconName={activeIconName}
          isCollapsed={isNavCollapsed}
        >
          {name[language]}
        </NavigationItem>
      ))}

      <NavigationBottom />
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 56px;
  left: 0;
  width: ${({ $collapsed }) => ($collapsed ? '72px' : '240px')};
  height: calc(100% - 56px);
  padding: 12px;
  background-color: ${({ $scrolled }) => ($scrolled ? 'var(--overlay-background)' : 'var(--default-background)')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'saturate(180%) blur(8px)' : 'none')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 1px 10px var(--additive-background)' : 'none')};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease,
    width 0.3s ease;
  z-index: 99;
`;
