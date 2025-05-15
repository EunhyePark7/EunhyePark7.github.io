import { THEME, THEME_SETTING } from '@/constants';
import useGlobalStore from '@/stores';
import styled from 'styled-components';
import Icon from '../Icon';

const AvatarPanelTheme = ({ onPanelChange }) => {
  const language = useGlobalStore(state => state.language);
  const theme = useGlobalStore(state => state.theme);
  const setTheme = useGlobalStore(state => state.setTheme);

  const handleThemeChange = selectedTheme => {
    setTheme(selectedTheme);
  };

  return (
    <StyledThemePanel>
      <StyledTitle>
        <StyledBackButton onClick={() => onPanelChange('default')}>
          <StyledBackIcon type="ai" iconName="AiOutlineArrowLeft" />
        </StyledBackButton>
        <span>{THEME_SETTING[language]}</span>
      </StyledTitle>

      <StyledThemeList>
        <StyledThemeItem onClick={() => handleThemeChange(THEME.WHITE)} $active={theme === THEME.WHITE}>
          {language === THEME.WHITE && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
          <span>기본</span>
        </StyledThemeItem>
        <StyledThemeItem onClick={() => handleThemeChange(THEME.DARK)} $active={theme === THEME.DARK}>
          {language === THEME.DARK && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
          <span>다크</span>
        </StyledThemeItem>
        <StyledThemeItem onClick={() => handleThemeChange(THEME.SYSTEM)} $active={theme === THEME.SYSTEM}>
          {language === THEME.SYSTEM && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
          <span>시스템 설정</span>
        </StyledThemeItem>
      </StyledThemeList>
    </StyledThemePanel>
  );
};

export default AvatarPanelTheme;

const StyledThemePanel = styled.div``;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 49px;
  border-bottom: 1px solid var(--outline);
`;

const StyledBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 2px;
  margin: 0 4px;
  border-radius: 50%;
  &:hover {
    background-color: var(--outline);
  }
`;

const StyledBackIcon = styled(Icon)`
  width: 16px;
  height: 16px;
`;

const StyledThemeList = styled.ul`
  padding: 8px 0;
`;

const StyledThemeItem = styled.li.withConfig({
  shouldForwardProp: prop => prop !== '$active',
})`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0 16px 0 48px;
  cursor: pointer;
  line-height: 40px;
  &:hover {
    background-color: #f4f4f4;
  }
`;
const StyledCheckIcon = styled(Icon)`
  position: absolute;
  left: 16px;
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

// const StyledThemeItem = styled.div.withConfig({
//   shouldForwardProp: prop => prop !== '$active',
// })`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   height: 40px;
//   padding: 0 36px 0 16px;
//   cursor: pointer;
//   line-height: 40px;
//   background-color: ${({ $active }) => ($active ? '#f0e6ff' : 'transparent')};
//   color: ${({ $active }) => ($active ? '#6719db' : 'inherit')};
//   font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};

//   &:hover {
//     background-color: #f4f4f4;
//   }
// `;
