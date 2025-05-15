import { MENU } from '@/constants';
import useGlobalStore from '@/stores';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Navigation = () => {
  const language = useGlobalStore(state => state.language);
  const isNavCollapsed = useGlobalStore(state => state.isNavCollapsed);

  const { HOME, ABOUT_ME, SKILL, WORK_EXPERIENCE } = MENU;
  const navItems = [HOME, ABOUT_ME, SKILL, WORK_EXPERIENCE];

  return (
    <StyledNavigation collapsed={isNavCollapsed ? '72px' : '240px'} role="navigation" aria-label="Main Navigation">
      {navItems.map(({ name, to, iconType, iconName, activeIconName, key }) => (
        <MenuItem
          key={to}
          to={to}
          iconType={iconType}
          iconName={iconName}
          activeIconName={activeIconName}
          isCollapsed={isNavCollapsed}
        >
          {!isNavCollapsed && name[language]}
        </MenuItem>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav.withConfig({
  shouldForwardProp: prop => prop !== 'collapsed',
})`
  display: flex;
  flex-direction: column;
  width: ${props => props.collapsed};
  padding: 12px;
  background-color: white;
  transition: width 0.3s ease;
`;
