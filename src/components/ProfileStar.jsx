import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styled from 'styled-components';

const StyledProfileStar = styled(motion.span)`
  display: inline-block;
  transform-origin: center;
  && {
    padding-left: 0;
    margin-left: ${({ $spacing }) => $spacing}px;
  }
`;

const ProfileStar = ({ immediate = false, className = 'name-star', spacing = 3 }) => {
  const starRef = useRef(null);
  const inView = useInView(starRef);
  const reducedMotion = useReducedMotion();
  const animated = inView && !reducedMotion;

  return (
    <StyledProfileStar
      ref={starRef}
      className={className}
      $spacing={spacing}
      aria-hidden="true"
      animate={
        animated
          ? {
              rotate: immediate ? [0, 180, 360] : [0, 0, 180, 360],
              scale: immediate ? [1, 1.12, 1] : [1, 1, 1.12, 1],
            }
          : { rotate: 0, scale: 1 }
      }
      transition={
        animated
          ? {
              duration: immediate ? 2.4 : 6,
              times: immediate ? [0, 0.5, 1] : [0, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : { duration: 0 }
      }
    >
      ✦
    </StyledProfileStar>
  );
};

export default ProfileStar;
