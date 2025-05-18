import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AboutMeTop = () => {
  const visualLeftRef = useRef(null);
  const visualRightRef = useRef(null);
  const subLeftRef = useRef(null);
  const subRightRef = useRef(null);

  useEffect(() => {
    const left = visualLeftRef.current;
    const right = visualRightRef.current;
    const subLeft = subLeftRef.current;
    const subRight = subRightRef.current;

    if (left && right && subLeft && subRight) {
      left.style.opacity = '0';
      right.style.opacity = '0';
      subLeft.style.opacity = '0';
      subRight.style.opacity = '0';

      left.style.transform = 'translateX(-100px)';
      right.style.transform = 'translateX(100px)';
      subLeft.style.transform = 'translateX(-100px)';
      subRight.style.transform = 'translateX(100px)';

      setTimeout(() => {
        left.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        right.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        subLeft.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        subRight.style.transition = 'transform 0.8s ease, opacity 0.8s ease';

        left.style.opacity = '1';
        right.style.opacity = '1';
        subLeft.style.opacity = '1';
        subRight.style.opacity = '1';

        left.style.transform = 'translateX(0)';
        right.style.transform = 'translateX(0)';
        subLeft.style.transform = 'translateX(0)';
        subRight.style.transform = 'translateX(0)';
      }, 300);
    }
  }, []);

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
  );
};

export default AboutMeTop;

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
    font-weight: 300;
  }
`;
