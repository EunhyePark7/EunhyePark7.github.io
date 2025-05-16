import AppLayout from '@/components/AppLayout';
import PageTitle from '@/components/PageTitle';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Skill = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'jQuery',
    'TypeScript',
    'ReactJs',
    'NextJs',
    'VueJs',
    'StyledComponent',
    'TailwindCSS',
    'Git',
    'Photoshop',
    'XD',
    'Figma',
    'Zeplin',
  ];

  const repeatedSkills = [...skills, ...skills];

  return (
    <AppLayout>
      <PageTitle title="Skills" />
      <StyledDetail>
        <StyledVisual onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <StyledVisualLine>
            <StyledTrack $direction="right" $isHovered={isHovered}>
              {repeatedSkills.map((skill, index) => (
                <StyledSkillItem key={`top-${index}`}>
                  <StyledSkillIcon>
                    <img src={`/assets/icons/${skill.toLowerCase()}.svg`} alt={skill} />
                  </StyledSkillIcon>
                  {skill}
                </StyledSkillItem>
              ))}
            </StyledTrack>
          </StyledVisualLine>
          <StyledVisualLine>
            <StyledTrack $direction="left" $isHovered={isHovered}>
              {repeatedSkills.map((skill, index) => (
                <StyledSkillItem key={`bottom-${index}`}>
                  <StyledSkillIcon>
                    <img src={`/assets/icons/${skill.toLowerCase()}.svg`} alt={skill} />
                  </StyledSkillIcon>
                  {skill}
                </StyledSkillItem>
              ))}
            </StyledTrack>
          </StyledVisualLine>
        </StyledVisual>
      </StyledDetail>
    </AppLayout>
  );
};

export default Skill;

const moveLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const moveRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const StyledDetail = styled.div``;

const StyledVisual = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  overflow: hidden;
`;

const StyledVisualLine = styled.div`
  width: 100%;
  white-space: nowrap;
`;

const StyledSkillItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-right: 50px;
  font-size: 62px;
  font-weight: 400;
  letter-spacing: -2px;
`;

const StyledTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${({ $direction }) => ($direction === 'left' ? moveLeft : moveRight)} 30s linear infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);

  animation-play-state: ${({ $isHovered }) => ($isHovered ? 'paused' : 'running')};

  &:hover ${StyledSkillItem} {
    opacity: 0.3;
    filter: blur(3px);
    transition: all 0.3s ease;
  }

  &:hover ${StyledSkillItem}:hover {
    opacity: 1;
    filter: none;
  }
`;

const StyledSkillIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
