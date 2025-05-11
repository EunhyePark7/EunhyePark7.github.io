import * as aiIcon from 'react-icons/ai';
import * as bsIcon from 'react-icons/bs';
import * as fa6Icon from 'react-icons/fa6';
import styled from 'styled-components';

const Icon = ({ type = 'bs', bsIconName }) => {
  let IconComponent;

  if (type === 'ai') {
    IconComponent = aiIcon[bsIconName];
  } else if (type === 'fa6') {
    IconComponent = fa6Icon[bsIconName];
  } else {
    IconComponent = bsIcon[bsIconName];
  }

  return <StyledIcon>{IconComponent ? <IconComponent /> : 'Icon not found'}</StyledIcon>;
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
