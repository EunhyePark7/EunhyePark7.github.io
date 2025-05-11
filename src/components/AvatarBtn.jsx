import styled from 'styled-components';
import Icon from './Icon';

const AvatarBtn = () => {
  return (
    <StyledAvatar>
      <StyledAvatarBtn>은혜</StyledAvatarBtn>
    </StyledAvatar>
  );
};

export default AvatarBtn;

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 6px;
`;
const StyledAvatarBtn = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 0 8px;
  border-radius: 50%;
  background-color: #6719db; 
  color: #fff;
  overflow: hidden;
`;