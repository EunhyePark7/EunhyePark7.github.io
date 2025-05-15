import * as aiIcon from 'react-icons/ai';
import * as bsIcon from 'react-icons/bs';
import * as fa6Icon from 'react-icons/fa6';
import styled from 'styled-components';

const Icon = ({ type = 'ai', iconName, activeIconName = '', className = '', isActive = false }) => {
  const icons = {
    ai: aiIcon,
    bs: bsIcon,
    fa6: fa6Icon,
  };

  const IconComponent = icons[type]?.[iconName];
  const ActiveIconComponent = icons[type]?.[activeIconName];

  return (
    <StyledIcon className={className}>
      {isActive && ActiveIconComponent ? <ActiveIconComponent /> : <IconComponent />}
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--text-primary);
  }
`;
