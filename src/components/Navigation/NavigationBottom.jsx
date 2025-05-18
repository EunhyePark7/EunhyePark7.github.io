import { MENU } from '@/constants';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';

const bottomNavItems = [MENU.CONTACT];

const NavigationBottom = ({ isCollapsed, language }) => {
  return (
    <StyledWrap>
      <StyledDivider />
      {bottomNavItems.map(({ name, to, iconType, iconName, activeIconName }) => (
        <NavigationItem
          key={to}
          to={to}
          iconType={iconType}
          iconName={iconName}
          activeIconName={activeIconName}
          isCollapsed={isCollapsed}
        >
          {name[language]}
        </NavigationItem>
      ))}
    </StyledWrap>
  );
};

export default NavigationBottom;

const StyledWrap = styled.div`
  margin-top: auto;
  padding-top: 12px;
`;

const StyledDivider = styled.div`
  height: 1px;
  background-color: var(--outline);
  margin-bottom: 12px;
`;
