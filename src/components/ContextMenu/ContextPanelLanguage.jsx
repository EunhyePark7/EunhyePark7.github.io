import { LANGUAGE, LANGUAGE_SETTING } from '@/constants';
import useGlobalStore from '@/stores';
import styled from 'styled-components';
import Icon from '../Icon';

const AvatarPanelLanguage = ({ onPanelChange }) => {
  const language = useGlobalStore(state => state.language);
  const setLanguage = useGlobalStore(state => state.setLanguage);

  return (
    <StyledLanguagePanel>
      <StyledTitle>
        <StyledBackButton onClick={() => onPanelChange('default')}>
          <StyledBackIcon type="ai" iconName="AiOutlineArrowLeft" />
        </StyledBackButton>
        <span>{LANGUAGE_SETTING[language]}</span>
      </StyledTitle>

      <StyledLanguageList>
        <StyledLanguageItem onClick={() => setLanguage(LANGUAGE.EN)}>
          {language === LANGUAGE.EN && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
          <span>Eunglish</span>
        </StyledLanguageItem>
        <StyledLanguageItem onClick={() => setLanguage(LANGUAGE.KR)}>
          {language === LANGUAGE.KR && <StyledCheckIcon type="ai" iconName="AiOutlineCheck" />}
          <span>한국어</span>
        </StyledLanguageItem>
      </StyledLanguageList>
    </StyledLanguagePanel>
  );
};

export default AvatarPanelLanguage;

const StyledLanguagePanel = styled.div``;

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

const StyledLanguageList = styled.div`
  padding: 8px 0;
`;
const StyledLanguageItem = styled.div`
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
