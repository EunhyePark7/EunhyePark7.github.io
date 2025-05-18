import AppLayout from '@/components/AppLayout';
import { media } from '@/styles/media';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { WORK_HISTORY } from '../../constants/index';

const WorkExperience = () => {
  const [activeCompany, setActiveCompany] = useState('goodrich');
  const [animateKey, setAnimateKey] = useState(0);

  const handleItemClick = id => {
    window.location.hash = `#${id}`;
    setActiveCompany(id);
    setAnimateKey(prev => prev + 1); // 클릭할 때마다 키 변경 -> 애니메이션 재실행
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && WORK_HISTORY.some(({ id }) => id === hash)) {
      setActiveCompany(hash);
    }
  }, []);

  return (
    <AppLayout>
      <>
        <StyledHistoryBar>
          <ol>
            {WORK_HISTORY.map(({ id, company }, idx) => (
              <li key={id}>
                <StyledItemBox
                  key={`${id}-${animateKey}`}
                  className={idx % 2 === 0 ? 'fly-in-up' : 'fly-in-down'} // 홀수: 아래서 위로, 짝수: 위에서 아래로
                  $isActive={activeCompany === id}
                  onClick={() => handleItemClick(id)}
                  $offset={idx === 1 ? -69 : 10}
                >
                  <strong>{company}</strong>
                  <span>
                    {company === '굿리치'
                      ? '2023.05 ~ 2025.04'
                      : company === '픽스다인웨이메이커'
                        ? '2021.02 ~ 2023.05'
                        : '2016.11 ~ 2018.12'}
                  </span>
                </StyledItemBox>
              </li>
            ))}
          </ol>
          <StyledHistoryProgress>
            <span></span>
          </StyledHistoryProgress>
        </StyledHistoryBar>

        <StyledHistory>
          {WORK_HISTORY.find(({ id }) => id === activeCompany)?.projects.map((project, index) => (
            <StyledHistoryItem key={`${index}-${Date.now()}`} $delay={index * 0.2} className="fly-in">
              <strong>{project.title}</strong>
              <span>{project.period}</span>
              <p>
                {project.description.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </StyledHistoryItem>
          ))}
        </StyledHistory>
      </>
    </AppLayout>
  );
};

export default WorkExperience;

const flyIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-300px, 100px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
`;
const flyInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const flyInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const StyledHistoryBar = styled.div`
  position: relative;
  max-width: 70%;
  width: 100%;
  margin: 80px auto;
  ol {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 80%;
    height: 100%;
    margin: auto;
    z-index: 1;
    li {
      position: relative;
      display: inline-flex;
      align-self: center;

      &:after {
        content: '';
        position: absolute;
        top: -7px;
        width: 14px;
        height: 14px;
        border: 3px solid #6719db;
        border-radius: 50%;
        background-color: var(--default-background);
        box-sizing: border-box;
      }
      &:nth-child(2) > div {
        top: -69px;
      }
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    right: 0;
    border-radius: 50%;
    background-color: #6719db;
    width: 6px;
    height: 6px;
  }
  &:after {
    left: 0;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 6px solid #6719db;
  }
  @media ${media.mobile} {
    max-width: none;
  }
`;

const StyledItemBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ $offset }) => $offset || 10}px;
  padding: 10px 14px;
  border-radius: 20px;
  border: ${({ $isActive }) => ($isActive ? '1px solid #6719db' : '1px solid var(--outline)')};
  box-shadow: 3px 0 7px var(--additive-background);
  white-space: nowrap;
  transform: translateX(-45%);
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
  strong {
    font-size: 15px;
    font-weight: 600;
  }
  span {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 300;
  }
`;

const StyledHistoryProgress = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--outline);
  transform: translateY(-50%);
`;

const StyledHistory = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 20px;
  padding: 60px 0;
  margin: 0 auto;
  li {
    flex: 1 1 calc((100% - 40px) / 3);
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: calc((100% - 40px) / 3);
    padding: 20px;
    border-radius: 20px;
    background-color: var(--white);
    border: 1px solid var(--outline);
    box-shadow: 3px 0 7px var(--additive-background);
    strong {
      font-size: 16px;
      font-weight: 600;
    }
    span {
      font-weight: 300;
    }
    p {
      line-height: 1.15;
    }
  }
  @media ${media.tablet} {
    padding: 40px 0;
    li {
      flex: 1 1 calc((100% - 40px) / 2);
      max-width: calc((100% - 40px) / 2);
    }
  }
  @media ${media.mobile} {
    padding: 30px 0;
    li {
      flex: 1 1 100%;
      max-width: none;
      width: 100%;
    }
  }
`;

const StyledHistoryItem = styled.li`
  flex: 1 1 calc((100% - 40px) / 3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: calc((100% - 40px) / 3);
  padding: 20px;
  border-radius: 20px;
  background-color: var(--white);
  border: 1px solid var(--outline);
  box-shadow: 3px 0 7px var(--additive-background);
  &:hover {
    border: 1px solid var(--icon-disabled);
  }
  &.fly-in {
    animation: ${flyIn} 0.5s ease forwards;
    animation-delay: ${({ $delay }) => $delay}s;
    opacity: 0;
  }
  strong {
    font-size: 16px;
    font-weight: 600;
  }
  span {
    font-weight: 300;
  }
  p {
    line-height: 1.15;
  }
`;
