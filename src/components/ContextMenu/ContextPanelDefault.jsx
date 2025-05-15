import { DEVELOPER, FULL_NAME, LANGUAGE_SETTING, RESUME, SMALL_NAME, THEME_SETTING } from '@/constants';
import useGlobalStore from '@/stores';
import styled from 'styled-components';
import Icon from '../Icon';

const AvatarPanelDefault = ({ onPanelChange }) => {
  const language = useGlobalStore(state => state.language);
  const setLanguage = useGlobalStore(state => state.setLanguage);

  return (
    <StyledMenuPanel>
      <StyledTitle>
        <StyledAvatar>{SMALL_NAME[language]}</StyledAvatar>
        <span>
          {FULL_NAME[language]}
          <br />
          @UI{DEVELOPER[language]}
        </span>
      </StyledTitle>
      <StyledAvatarMenu>
        <StyledAvatarMenuItem>
          <StyledMenuIcon type="ai" iconName="AiTwotoneFileText" />
          <span>{RESUME[language]}</span>
        </StyledAvatarMenuItem>
        <StyledAvatarMenuItem onClick={() => onPanelChange('theme')}>
          <StyledMenuIcon type="ai" iconName="AiTwotoneSliders" />
          <span>{THEME_SETTING[language]}</span>
          <StyledArrowIcon type="ai" iconName="AiOutlineRight" />
        </StyledAvatarMenuItem>
        <StyledAvatarMenuItem onClick={() => onPanelChange('language')}>
          <StyledMenuIcon type="bs" iconName="BsType" />
          <span>{LANGUAGE_SETTING[language]}</span>
          <StyledArrowIcon type="ai" iconName="AiOutlineRight" />
        </StyledAvatarMenuItem>
      </StyledAvatarMenu>
    </StyledMenuPanel>
  );
};

export default AvatarPanelDefault;

const StyledMenuPanel = styled.div``;
const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--outline);
  button {
    margin: 0 16px 0 0;
    cursor: default;
  }
`;
const StyledAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-right: 16px;
  font-size: 14px;
  border-radius: 50%;
  background-color: #6719db;
  color: #fff;
  overflow: hidden;
`;
const StyledAvatarMenu = styled.div`
  padding: 8px 0;
`;
const StyledAvatarMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  cursor: pointer;
  line-height: 40px;
  &:hover {
    background-color: #f4f4f4;
  }
`;
const StyledMenuIcon = styled(Icon)`
  margin-right: 16px;
`;
const StyledArrowIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-left: auto;
`;
