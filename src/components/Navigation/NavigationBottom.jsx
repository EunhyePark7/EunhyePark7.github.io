// NavigationBottom.tsx
import { CONTACT_ME } from '@/constants';
import useGlobalStore from '@/stores';
import { useState } from 'react';
import styled from 'styled-components';

import ContactFormModal from '../ContactFormModal';
import NavigationItem from './NavigationItem';

const NavigationBottom = () => {
  const language = useGlobalStore(state => state.language);
  const isNavCollapsed = useGlobalStore(state => state.isNavCollapsed);
  const [isModalOpen, setModalOpen] = useState(false);

  const openGithub = () => {
    window.open('https://github.com/EunhyePark7/EunhyePark7.github.io');
  };

  return (
    <StyledWrap>
      <StyledDivider />
      <div onClick={() => setModalOpen(true)}>
        <NavigationItem
          iconType={CONTACT_ME.CONTACT.iconType}
          iconName={CONTACT_ME.CONTACT.iconName}
          activeIconName={CONTACT_ME.CONTACT.activeIconName}
          isCollapsed={isNavCollapsed}
        >
          {CONTACT_ME.CONTACT.name[language]}
        </NavigationItem>
      </div>
      <div onClick={openGithub}>
        <NavigationItem
          iconType={CONTACT_ME.GITHUB.iconType}
          iconName={CONTACT_ME.GITHUB.iconName}
          activeIconName={CONTACT_ME.GITHUB.activeIconName}
          isCollapsed={isNavCollapsed}
        >
          {CONTACT_ME.GITHUB.name[language]}
        </NavigationItem>
      </div>

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
