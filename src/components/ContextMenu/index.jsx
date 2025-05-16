import { SMALL_NAME } from '@/constants';
import useGlobalStore from '@/stores';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ContextPanelDefault from './ContextPanelDefault';
import ContextPanelLanguage from './ContextPanelLanguage';
import ContextPanelTheme from './ContextPanelTheme';
const ContextMenu = () => {
  const language = useGlobalStore(state => state.language);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [currentPanel, setCurrentPanel] = useState('default');
  const menuRef = useRef(null);
  const contextBtnRef = useRef(null);

  const handleContextBtnClick = () => {
    setIsMenuVisible(prev => !prev);
  };

  const handlePanelChange = panelName => {
    setCurrentPanel(panelName);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !contextBtnRef.current.contains(e.target)) {
        setIsMenuVisible(false);
        setCurrentPanel('default');
      }
    };
    document.addEventListener('click', handleClickOutside, { capture: true });
    return () => document.removeEventListener('click', handleClickOutside, { capture: true });
  }, []);

  return (
    <StyledContext>
      <StyledContextBtn ref={contextBtnRef} onClick={handleContextBtnClick}>
        {SMALL_NAME[language]}
      </StyledContextBtn>

      {isMenuVisible && (
        <StyledContextMenuPanel ref={menuRef}>
          {currentPanel === 'default' && <ContextPanelDefault onPanelChange={handlePanelChange} />}
          {currentPanel === 'theme' && <ContextPanelTheme onPanelChange={handlePanelChange} />}
          {currentPanel === 'language' && <ContextPanelLanguage onPanelChange={setCurrentPanel} />}
        </StyledContextMenuPanel>
      )}
    </StyledContext>
  );
};

export default ContextMenu;

const StyledContext = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 6px;
`;
const StyledContextBtn = styled.button`
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
  color: var(--white);
  overflow: hidden;
`;
const StyledContextMenuPanel = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 240px;
  background-color: var(--menu-backgound);
  border-radius: 12px;
  box-shadow: 0 2px 10px 0 var(--outline);
  z-index: 100;
`;
