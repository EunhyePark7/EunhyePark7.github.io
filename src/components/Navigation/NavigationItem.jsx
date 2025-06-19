import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';

const NavigationItem = ({
  to,
  iconType = 'ai',
  iconName,
  activeIconName,
  children,
  isCollapsed,
  isOverlay = '',
  onClick,
}) => {
  return (
    <StyledNavItem to={to} end $overlay={isOverlay} onClick={onClick}>
      {({ isActive }) => (
        <>
          <StyledIconBox $collapsed={isCollapsed} $overlay={isOverlay} title={isCollapsed ? children : ''}>
            <Icon type={iconType} iconName={iconName} activeIconName={activeIconName} isActive={isActive} />
          </StyledIconBox>
          <StyledText $collapsed={isCollapsed} $overlay={isOverlay}>
            {children}
          </StyledText>
        </>
      )}
    </StyledNavItem>
  );
};

export default NavigationItem;

const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;

  color: inherit;
  border-radius: ${({ $overlay }) => ($overlay ? '0' : '10px')};
  text-decoration: none;
  // overflow: hidden;
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
