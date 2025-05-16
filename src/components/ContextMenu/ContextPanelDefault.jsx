import { DEVELOPER, FULL_NAME, LANGUAGE_SETTING, RESUME, SMALL_NAME, THEME_SETTING } from '@/constants';
import useGlobalStore from '@/stores';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';

const ContextPanelDefault = ({ onPanelChange }) => {
  const language = useGlobalStore(state => state.language);

  return (
    <StyledMenuPanel>
      <StyledTitle>
        <StyledUser>{SMALL_NAME[language]}</StyledUser>
        <span>
          {FULL_NAME[language]}
          <br />
          @UI{DEVELOPER[language]}
        </span>
      </StyledTitle>

      <StyledMenu>
        <Link to="/resume">
          <StyledMenuItem>
            <StyledMenuIcon type="ai" iconName="AiOutlineFileText" />
            <span>{RESUME[language]}</span>
          </StyledMenuItem>
        </Link>

        <StyledMenuItem onClick={() => onPanelChange('theme')}>
          <StyledMenuIcon type="ai" iconName="AiTwotoneSliders" />
          <span>{THEME_SETTING[language]}</span>
          <StyledArrowIcon type="ai" iconName="AiOutlineRight" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => onPanelChange('language')}>
          <StyledMenuIcon type="bs" iconName="BsType" />
          <span>{LANGUAGE_SETTING[language]}</span>
          <StyledArrowIcon type="ai" iconName="AiOutlineRight" />
        </StyledMenuItem>
      </StyledMenu>
    </StyledMenuPanel>
  );
};

export default ContextPanelDefault;

const StyledMenuPanel = styled.div``;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--outline);

  button {
    margin-right: 16px;
    cursor: default;
  }
`;

const StyledUser = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 16px;
  font-size: 14px;
  border-radius: 50%;
  background-color: #6719db;
  color: var(--white);
  overflow: hidden;
`;

const StyledMenu = styled.div`
  padding: 8px 0;
`;

const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  cursor: pointer;
  line-height: 40px;

  &:hover {
    background-color: var(--additive-background);
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
