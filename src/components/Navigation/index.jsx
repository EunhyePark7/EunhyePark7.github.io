import { MENU } from '@/constants';
import useGlobalStore from '@/stores';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { navItems } from './constants';

const Navigation = () => {
  const language = useGlobalStore(state => state.language);
  const isNavCollapsed = useGlobalStore(state => state.isNavCollapsed);

  return (
    <StyledNavigation collapsed={isNavCollapsed ? '72px' : '240px'} role="navigation" aria-label="Main Navigation">
      {navItems.map(({ to, iconType, iconName, activeIconName, labelKey }) => (
        <MenuItem
          key={to}
          to={to}
          iconType={iconType}
          iconName={iconName}
          activeIconName={activeIconName}
          isCollapsed={isNavCollapsed}
        >
          {!isNavCollapsed && MENU[labelKey][language]}
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
