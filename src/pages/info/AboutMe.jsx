import AppLayout from '@/components/AppLayout';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  const visualLeftRef = useRef(null);
  const visualRightRef = useRef(null);
  const subLeftRef = useRef(null);
  const subRightRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;
    let offset = 0;

    const handleScroll = () => {
      offset = window.scrollY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          if (visualLeftRef.current) visualLeftRef.current.style.transform = `translateX(-${offset * 0.1}px)`;
          if (visualRightRef.current) visualRightRef.current.style.transform = `translateX(${offset * 0.3}px)`;
          if (subLeftRef.current) subLeftRef.current.style.transform = `translateX(-${offset * 0.5}px)`;
          if (subRightRef.current) subRightRef.current.style.transform = `translateX(${offset * 0.7}px)`;
          animationFrameId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AppLayout>
      {/* <PageTitle title="About Me" /> */}
      <StyledVisual>
        <StyledVisualInner>
          <StyledLineLeft ref={visualLeftRef}>Hello,</StyledLineLeft>
          <StyledLineRight ref={visualRightRef}>I'm Eunhye.</StyledLineRight>
          <StyledSubLine>
            <StyledLineLeft ref={subLeftRef}>Frontend</StyledLineLeft>
            <StyledLineRight ref={subRightRef}>Developer</StyledLineRight>
          </StyledSubLine>
        </StyledVisualInner>
      </StyledVisual>
      <StyledDetail>
        <StyledTitle>
          차곡차곡 쌓아온 경험과 함께,
          <br /> 즐겁게 성장 중인
          <br /> 개발자 박은혜입니다.
        </StyledTitle>
        <StyledContent>
          <p>
            처음엔 눈앞의 마크업 한 줄이 전부였지만,
            <br /> 어느새 더 나은 구조를 고민하고 사용자 경험을 생각하게 되었습니다.
            <br />
            Salesforce 디자인시스템부터 시작해 다양한 서비스의 퍼블리싱과 프론트개발을 경험하며, <br />
            기본기에 기반한 성장을 차곡차곡 쌓아왔습니다. <br />
            협업에선 늘 열린 자세로 소통하며,
            <br /> ‘또 함께 일하고 싶은 사람’이라는 말을 들을 때 가장 큰 보람을 느낍니다.
            <br />
            코드뿐 아니라 사람과의 관계도 개발의 일부라고 생각하기에,
            <br /> 즐겁게 일하고 함께 성장하는 순간들을 소중히 여깁니다.
            <br /> 작은 변화에서 배우고, 오늘보다 나은 내일의 나를 기대하며
            <br /> 지금 이 순간에도 꾸준히 성장하고 있는 개발자 박은혜입니다.
          </p>
        </StyledContent>
      </StyledDetail>
    </AppLayout>
  );
};

export default AboutMe;

const StyledVisual = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const StyledVisualInner = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 200px;
  transition: min-height 0.3s ease;
`;
const StyledLineLeft = styled.strong`
  display: block;
  font-size: 200px;
  font-weight: 700;
  line-height: 1;
  transform: translateX(0);
  transition: transform 0.3s ease;
`;
const StyledLineRight = styled(StyledLineLeft)`
  text-align: right;
  transition: transform 0.3s ease;
  word-break: keep-all;
  white-space: pre-line;
`;
const StyledSubLine = styled.div`
  max-width: 1000px;
  strong {
    font-size: 140px;
    font-weight: 400;
  }
`;
const StyledDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
const StyledTitle = styled.strong`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.5;
`;
const StyledContent = styled.div`
  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;
