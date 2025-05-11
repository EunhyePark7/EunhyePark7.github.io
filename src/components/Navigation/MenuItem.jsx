import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon';

const MenuItem = ({ to, iconType, iconName, children }) => {
  return (
    <StyledNavItem to={to}>
      <Icon type={iconType} bsIconName={iconName} />
      <span>{children}</span>
    </StyledNavItem>
  );
};

export default MenuItem;

const StyledNavItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-item: center;
  
  &:hover {
    background-color: var(--additive-background);
    border-radius: 10px;
  }
`;