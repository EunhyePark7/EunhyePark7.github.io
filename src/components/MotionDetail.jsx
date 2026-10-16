import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRevealSection = styled(motion.section)`
  min-width: 0;
`;
const StyledRevealArticle = styled(motion.article)`
  min-width: 0;
`;
const StyledRevealDiv = styled(motion.div)`
  min-width: 0;
`;
const StyledRevealLink = styled(motion.create(Link))`
  position: relative;
  &:hover .playlist-icon,
  &:focus-visible .playlist-icon,
  &:hover .card-arrow,
  &:focus-visible .card-arrow {
    transform: translate(2px, -2px);
    color: var(--accent);
  }
  .playlist-icon,
  .card-arrow {
    transition:
      transform 0.2s ease,
      color 0.2s ease;
  }
  &&:hover .playlist-cover {
    transform: none;
  }
`;

const ELEMENTS = {
  section: StyledRevealSection,
  article: StyledRevealArticle,
  div: StyledRevealDiv,
  link: StyledRevealLink,
};

const Reveal = ({ as = 'section', index = 0, interval = 0.07, duration = 0.38, children, ...props }) => {
  const reducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const Element = ELEMENTS[as];
  return (
    <Element
      {...props}
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      animate={controls}
      onViewportEnter={() => controls.start({ opacity: 1, y: 0 })}
      onFocusCapture={() => controls.set({ opacity: 1, y: 0 })}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : Math.min(index, 6) * interval,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={as === 'link' && !reducedMotion ? { y: -3 } : undefined}
      whileTap={as === 'link' && !reducedMotion ? { scale: 0.99 } : undefined}
    >
      {children}
    </Element>
  );
};

export default Reveal;

export const StyledSelection = styled(motion.span)`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--text-primary);
  z-index: -1;
  pointer-events: none;
`;

export const StyledFilterButton = styled.button`
  position: relative;
  isolation: isolate;
  &&.active {
    background: transparent;
  }
`;

export const StyledMenuLink = styled(Link)`
  position: relative;
  &&[aria-current]::after {
    display: none;
  }
`;

export const StyledMenuUnderline = styled(motion.span)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 2px;
  background: var(--text-primary);
`;
