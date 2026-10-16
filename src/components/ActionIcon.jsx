import {
  BsArrowsFullscreen,
  BsBoxArrowUpRight,
  BsBriefcase,
  BsChatDots,
  BsCheck2,
  BsChevronDown,
  BsChevronLeft,
  BsClipboard,
  BsCodeSlash,
  BsDisplay,
  BsEnvelope,
  BsFileEarmarkText,
  BsGithub,
  BsLayers,
  BsPerson,
  BsPlayFill,
  BsTelephone,
  BsX,
} from 'react-icons/bs';
import styled from 'styled-components';

const ICONS = {
  document: BsFileEarmarkText,
  chat: BsChatDots,
  mail: BsEnvelope,
  user: BsPerson,
  code: BsCodeSlash,
  briefcase: BsBriefcase,
  layers: BsLayers,
  github: BsGithub,
  phone: BsTelephone,
  external: BsBoxArrowUpRight,
  expand: BsArrowsFullscreen,
  display: BsDisplay,
  play: BsPlayFill,
  back: BsChevronLeft,
  chevron: BsChevronDown,
  close: BsX,
  copy: BsClipboard,
  check: BsCheck2,
};

const ActionIcon = ({ name, className = '', size = 16 }) => {
  const IconComponent = ICONS[name];
  if (!IconComponent) return null;
  return (
    <StyledActionIcon className={`action-icon ${className}`.trim()} $size={size} aria-hidden="true">
      <IconComponent focusable="false" />
    </StyledActionIcon>
  );
};

export default ActionIcon;

const StyledActionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
  vertical-align: -0.15em;
  margin-inline: 2px;
  color: inherit;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
