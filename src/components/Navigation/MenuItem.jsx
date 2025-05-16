import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';

const MenuItem = ({ to, iconType = 'ai', iconName, activeIconName, children, isCollapsed }) => {
  return (
    <StyledNavItem to={to} end>
      {({ isActive }) => (
        <>
          <StyledIconBox $collapsed={isCollapsed}>
            <Icon type={iconType} iconName={iconName} activeIconName={activeIconName} isActive={isActive} />
          </StyledIconBox>
          <StyledText $collapsed={isCollapsed}>{children}</StyledText>
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
  overflow: hidden;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--additive-background);
  }

  &.active,
  &[aria-current='page'] {
    background-color: var(--additive-background);
  }
`;

const StyledIconBox = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: ${({ $collapsed }) => ($collapsed ? '0' : '24px')};
  transition: margin 0.3s ease;
`;

const StyledText = styled.span`
  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
  visibility: ${({ $collapsed }) => ($collapsed ? 'hidden' : 'visible')};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  white-space: nowrap;
`;
