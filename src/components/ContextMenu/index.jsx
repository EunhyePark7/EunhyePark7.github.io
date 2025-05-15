import { SMALL_NAME } from '@/constants';
import useGlobalStore from '@/stores';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AvatarPanelDefault from './ContextPanelDefault';
import AvatarPanelLanguage from './ContextPanelLanguage';
import AvatarPanelTheme from './ContextPanelTheme';
const AvatarMenu = () => {
  // store
  const language = useGlobalStore(state => state.language);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [currentPanel, setCurrentPanel] = useState('default');
  const menuRef = useRef(null);
  const avatarBtnRef = useRef(null);

  const handleAvatarBtnClick = () => {
    setIsMenuVisible(prev => !prev);
  };

  const handlePanelChange = panelName => {
    setCurrentPanel(panelName);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !avatarBtnRef.current.contains(e.target)) {
        setIsMenuVisible(false);
        setCurrentPanel('default');
      }
    };
    document.addEventListener('click', handleClickOutside, { capture: true });
    return () => document.removeEventListener('click', handleClickOutside, { capture: true });
  }, []);

  return (
    <StyledAvatar>
      <StyledAvatarBtn ref={avatarBtnRef} onClick={handleAvatarBtnClick}>
        {SMALL_NAME[language]}
      </StyledAvatarBtn>

      {isMenuVisible && (
        <StyledAvatarMenuPanel ref={menuRef}>
          {currentPanel === 'default' && <AvatarPanelDefault onPanelChange={handlePanelChange} />}
          {currentPanel === 'theme' && <AvatarPanelTheme onPanelChange={handlePanelChange} />}
          {currentPanel === 'language' && <AvatarPanelLanguage onPanelChange={setCurrentPanel} />}
        </StyledAvatarMenuPanel>
      )}
    </StyledAvatar>
  );
};

export default AvatarMenu;

const StyledAvatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 6px;
`;
const StyledAvatarBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 0 8px;
  font-size: 14px;
  border-radius: 50%;
  background-color: #6719db;
  color: #fff;
  overflow: hidden;
`;
const StyledAvatarMenuPanel = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 240px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 32px 0 var(--outline);
  backdrop-filter: blur(8px);
  // overflow-x: hidden !important;
  z-index: 100;
`;
