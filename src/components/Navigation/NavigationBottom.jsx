// NavigationBottom.tsx
import { CONTACT_ME } from '@/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import useGlobalStore from '@/stores';
import { media } from '@/styles/media';
import { useState } from 'react';
import styled from 'styled-components';
import ContactFormModal from '../ContactFormModal';
import Icon from '../Icon';

const NavigationBottom = () => {
  const language = useGlobalStore(state => state.language);
  const isCollapsed = useGlobalStore(state => state.isNavCollapsed);
  const isOverlay = useMediaQuery(media.tablet);

  const [isModalOpen, setModalOpen] = useState(false);

  const openGithub = () => {
    window.open('https://github.com/EunhyePark7/EunhyePark7.github.io');
  };

  return (
    <StyledWrap>
      <StyledDivider />

      <StyledItem $overlay={isOverlay} onClick={() => setModalOpen(true)}>
        <StyledIconBox
          $collapsed={isCollapsed}
          $overlay={isOverlay}
          title={isCollapsed ? CONTACT_ME.CONTACT.name[language] : ''}
        >
          <Icon
            type={CONTACT_ME.CONTACT.iconType}
            iconName={CONTACT_ME.CONTACT.iconName}
            activeIconName={CONTACT_ME.CONTACT.activeIconName}
          />
        </StyledIconBox>
        <StyledText $collapsed={isCollapsed} $overlay={isOverlay}>
          {CONTACT_ME.CONTACT.name[language]}
        </StyledText>
      </StyledItem>

      <StyledItem $overlay={isOverlay} onClick={openGithub}>
        <StyledIconBox
          $collapsed={isCollapsed}
          $overlay={isOverlay}
          title={isCollapsed ? CONTACT_ME.GITHUB.name[language] : ''}
        >
          <Icon
            type={CONTACT_ME.GITHUB.iconType}
            iconName={CONTACT_ME.GITHUB.iconName}
            activeIconName={CONTACT_ME.GITHUB.activeIconName}
          />
        </StyledIconBox>
        <StyledText $collapsed={isCollapsed} $overlay={isOverlay}>
          {CONTACT_ME.GITHUB.name[language]}
        </StyledText>
      </StyledItem>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
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

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  color: inherit;
  border-radius: ${({ $overlay }) => ($overlay ? '0' : '10px')};
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  cursor: pointer;

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
