import { THEME, THEME_LABELS, THEME_SETTING } from '@/constants';
import useGlobalStore from '@/stores';
import styled from 'styled-components';
import Icon from '../Icon';

const ContextPanelTheme = ({ onPanelChange }) => {
  const language = useGlobalStore(state => state.language);
  const theme = useGlobalStore(state => state.theme);
  const setTheme = useGlobalStore(state => state.setTheme);

  const handleThemeChange = selectedTheme => {
    if (selectedTheme !== theme) {
      setTheme(selectedTheme);
    }
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
        {Object.entries(THEME).map(([key, value]) => (
          <StyledThemeItem key={value} onClick={() => handleThemeChange(value)} $active={theme === value}>
            {theme === value && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
            <span>{THEME_LABELS[key][language]}</span>
          </StyledThemeItem>
        ))}
      </StyledThemeList>
    </StyledThemePanel>
  );
};

export default ContextPanelTheme;

const StyledThemePanel = styled.div``;

const StyledTitle = styled.div`
  display: flex;
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
  cursor: pointer;
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
  margin: 0;
  list-style: none;
`;

const StyledThemeItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px 0 48px;
  cursor: pointer;
  line-height: 40px;
  background-color: var(--menu-backgound);
  &:hover {
    background-color: var(--additive-background);
  }
`;

const StyledCheckIcon = styled(Icon)`
  position: absolute;
  left: 16px;
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;
