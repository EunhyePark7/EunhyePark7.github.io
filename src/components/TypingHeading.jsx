import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import ProfileStar from '@/components/ProfileStar';

const FIRST_LINE = 'Hello,';
const SECOND_LINE = "I'm Eunhye";
const TOTAL_LENGTH = FIRST_LINE.length + SECOND_LINE.length;

const cursorBlink = keyframes`
  50% { opacity: 0; }
`;

const StyledTypingLine = styled.div`
  position: relative;
  white-space: pre;
  &::before {
    content: attr(data-text);
    visibility: hidden;
  }
`;

const StyledTypingText = styled.div`
  position: absolute;
  inset: 0;
  &::after {
    content: '';
    display: ${({ $cursor }) => ($cursor ? 'inline-block' : 'none')};
    width: 2px;
    height: 0.8em;
    margin-left: 4px;
    background: var(--accent);
    animation: ${cursorBlink} 0.7s step-end infinite;
  }
`;

const TypingHeading = () => {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const [characterCount, setCharacterCount] = useState(0);
  const visibleCount = reducedMotion ? TOTAL_LENGTH : characterCount;
  const complete = visibleCount === TOTAL_LENGTH;

  useEffect(() => {
    if (!inView || reducedMotion || characterCount >= TOTAL_LENGTH) return;
    const delay = characterCount === 0 ? 350 : characterCount === FIRST_LINE.length ? 280 : 85;
    const timer = window.setTimeout(() => setCharacterCount(count => count + 1), delay);
    return () => window.clearTimeout(timer);
  }, [inView, reducedMotion, characterCount]);

  return (
    <h1 ref={headingRef} aria-label="Hello, I'm Eunhye">
      <StyledTypingLine data-text={FIRST_LINE} aria-hidden="true">
        <StyledTypingText $cursor={!reducedMotion && visibleCount < FIRST_LINE.length}>
          {FIRST_LINE.slice(0, visibleCount)}
        </StyledTypingText>
      </StyledTypingLine>
      <StyledTypingLine data-text={`${SECOND_LINE} ✦`} aria-hidden="true">
        <StyledTypingText $cursor={!complete && visibleCount >= FIRST_LINE.length}>
          {SECOND_LINE.slice(0, Math.max(0, visibleCount - FIRST_LINE.length))}
          {complete && <ProfileStar immediate className="typing-star" spacing={8} />}
        </StyledTypingText>
      </StyledTypingLine>
    </h1>
  );
};

export default TypingHeading;
