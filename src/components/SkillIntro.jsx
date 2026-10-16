import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styled from 'styled-components';

const StyledSkillIntro = styled(motion.div)`
  min-width: 0;
`;

const StyledLineMask = styled.div`
  overflow: hidden;
  padding-bottom: 4px;
  margin-bottom: -4px;
`;

const StyledHeadingLine = styled(motion.div)`
  min-width: 0;
`;

const StyledEmphasis = styled.span`
  && {
    position: relative;
    display: inline-block;
    color: inherit;
  }
`;

const StyledUnderline = styled(motion.i)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform-origin: left;
`;

const SkillIntro = ({ eyebrow, firstLine, firstEmphasis, secondLine, emphasis, description }) => {
  const introRef = useRef(null);
  const inView = useInView(introRef, { once: true, amount: 0.2 });
  const reducedMotion = useReducedMotion();
  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: index => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const renderEmphasis = (content, emphasisText, index) => {
    const emphasisIndex = emphasisText ? content.lastIndexOf(emphasisText) : -1;
    if (emphasisIndex < 0) return content;
    return (
      <>
        {content.slice(0, emphasisIndex)}
        <StyledEmphasis>
          {emphasisText}
          <StyledUnderline
            aria-hidden="true"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { delay: reducedMotion ? 0 : 0.55 + index * 0.2, duration: reducedMotion ? 0 : 0.45 },
              },
            }}
          />
        </StyledEmphasis>
        {content.slice(emphasisIndex + emphasisText.length)}
      </>
    );
  };

  return (
    <StyledSkillIntro
      ref={introRef}
      className="toolkit-intro"
      initial={reducedMotion ? false : 'hidden'}
      animate={inView || reducedMotion ? 'visible' : 'hidden'}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h1>
        <StyledLineMask>
          <StyledHeadingLine custom={0} variants={lineVariants}>
            {renderEmphasis(firstLine, firstEmphasis, 0)}
          </StyledHeadingLine>
        </StyledLineMask>
        <StyledLineMask>
          <StyledHeadingLine custom={1} variants={lineVariants}>
            {renderEmphasis(secondLine, emphasis, 1)}
            <span>.</span>
          </StyledHeadingLine>
        </StyledLineMask>
      </h1>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 6 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: reducedMotion ? 0 : 0.65, duration: reducedMotion ? 0 : 0.4 },
          },
        }}
      >
        {description}
      </motion.p>
    </StyledSkillIntro>
  );
};

export default SkillIntro;
