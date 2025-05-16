import { LANGUAGE, LANGUAGE_LABELS, LANGUAGE_SETTING } from '@/constants';
import useGlobalStore from '@/stores';
import styled from 'styled-components';
import Icon from '../Icon';

const ContextPanelLanguage = ({ onPanelChange }) => {
  const language = useGlobalStore(state => state.language);
  const setLanguage = useGlobalStore(state => state.setLanguage);

  const handleLanguageChange = selectedLanguage => {
    if (selectedLanguage !== language) {
      setLanguage(selectedLanguage);
    }
  };

  return (
    <StyledLanguagePanel>
      <StyledTitle>
        <StyledBackButton onClick={() => onPanelChange('default')}>
          <StyledBackIcon type="ai" iconName="AiOutlineArrowLeft" />
        </StyledBackButton>
        <StyledTitleLabel>{LANGUAGE_SETTING[language]}</StyledTitleLabel>
      </StyledTitle>

      <StyledLanguageList>
        <StyledLanguageItem onClick={() => handleLanguageChange(LANGUAGE.EN)} $active={language === LANGUAGE.EN}>
          {language === LANGUAGE.EN && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
          <span>{LANGUAGE_LABELS.EN[language]}</span>
        </StyledLanguageItem>

        <StyledLanguageItem onClick={() => handleLanguageChange(LANGUAGE.KR)} $active={language === LANGUAGE.KR}>
          {language === LANGUAGE.KR && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
          <span>{LANGUAGE_LABELS.KR[language]}</span>
        </StyledLanguageItem>
      </StyledLanguageList>
    </StyledLanguagePanel>
  );
};

export default ContextPanelLanguage;

const StyledLanguagePanel = styled.div``;

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
  margin: 0 4px;
  padding: 2px;
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

const StyledTitleLabel = styled.span``;

const StyledLanguageList = styled.ul`
  padding: 8px 0;
  margin: 0;
  list-style: none;
`;

const StyledLanguageItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px 0 48px;
  cursor: pointer;
  line-height: 40px;
  background-color: var(--menu-background);
  &:hover {
    background-color: var(--additive-background);
  }
`;

const StyledCheckIcon = styled(Icon)`
  position: absolute;
  left: 16px;
  width: 16px;
  height: 16px;
`;
