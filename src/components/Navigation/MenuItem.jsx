import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';

const MenuItem = ({ to, iconType = 'ai', iconName, activeIconName, children, isCollapsed }) => {
  return (
    <StyledNavItem to={to} end>
      {({ isActive }) => (
        <>
          <StyledIcon type={iconType} iconName={isActive ? activeIconName : iconName} isActive={isActive} />
          {!isCollapsed && <span>{children}</span>}
        </>
      )}
    </StyledNavItem>
  );
};

export default MenuItem;

const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  color: inherit;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
  &.active,
  &[aria-current='page'] {
    background-color: var(--additive-background);
  }
`;
const StyledIcon = styled(Icon)`
  margin-right: 24px;
`;
