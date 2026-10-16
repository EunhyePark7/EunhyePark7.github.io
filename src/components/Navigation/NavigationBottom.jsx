import { CONTACT_ME } from '@/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import useGlobalStore from '@/stores';
import { media } from '@/styles/media';
import styled from 'styled-components';
import Icon from '../Icon';

const NavigationBottom = () => {
  const language = useGlobalStore(state => state.language);
  const isCollapsed = useGlobalStore(state => state.isNavCollapsed);
  const isOverlay = useMediaQuery(media.tablet);
  const items = [
    { ...CONTACT_ME.CONTACT, href: 'mailto:eungkong333@gmail.com' },
    { ...CONTACT_ME.GITHUB, href: 'https://github.com/EunhyePark7', external: true },
  ];
  return (
    <StyledWrap>
      {items.map(item => (
        <StyledItem
          key={item.href}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          aria-label={item.name[language]}
          $collapsed={isCollapsed && !isOverlay}
        >
          <Icon type={item.iconType} iconName={item.iconName} activeIconName={item.activeIconName} />
          <span>{item.name[language]}</span>
        </StyledItem>
      ))}
    </StyledWrap>
  );
};

export default NavigationBottom;

const StyledWrap = styled.div`
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--outline);
`;
const StyledItem = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 40px;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 12px;
  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
  span {
    display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline')};
  }
  &:hover {
    background: var(--surface);
  }
`;
