import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '@/styles/media';

const ChannelBanner = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const reducedMotion = useReducedMotion();
  const bannerRef = useRef(null);
  const autoOpenTimerRef = useRef(null);
  const isVisible = useInView(bannerRef);
  useEffect(() => {
    autoOpenTimerRef.current = window.setTimeout(
      () => setIsCollapsed(false),
      reducedMotion ? 0 : 650,
    );
    return () => window.clearTimeout(autoOpenTimerRef.current);
  }, [reducedMotion]);
  return (
    <StyledBanner ref={bannerRef} $collapsed={isCollapsed} $moving={isVisible && !reducedMotion}>
      <StyledBannerLabel>DESIGN IN MIND. DETAIL IN CODE.</StyledBannerLabel>
      <AnimatePresence initial={false}>
        {!isCollapsed && (
          <StyledBannerContent
            id="channel-banner-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <StyledCopy
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.45 }}
            >
              <h1>
                작은 디테일이,
                <br />
                좋은 경험이 되도록<span>.</span>
              </h1>
              <p>Frontend Developer & UI Publisher</p>
            </StyledCopy>
            <StyledArtwork aria-hidden="true">
              <StyledOrbit $direction={-1} />
              <StyledOrbit $direction={1} />
              <StyledPlay>▶</StyledPlay>
              <StyledSignature>
                Made with care
                <br />
                <b>by Eunhye.</b>
              </StyledSignature>
            </StyledArtwork>
          </StyledBannerContent>
        )}
      </AnimatePresence>
    </StyledBanner>
  );
};

export default ChannelBanner;

const floatPlay = keyframes`
  0%, 100% { transform: translateY(0) rotate(-12deg); }
  50% { transform: translateY(-5px) rotate(-8deg); }
`;
const driftOrbit = keyframes`
  0%, 100% { transform: rotate(-25deg); }
  50% { transform: rotate(-13deg); }
`;
const StyledBanner = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  padding: ${({ $collapsed }) => ($collapsed ? '18px 28px' : '23px 28px')};
  background: #25232e;
  color: #f6f3ff;
  animation-play-state: ${({ $moving }) => ($moving ? 'running' : 'paused')};
  transition: padding 0.3s ease;
  @media ${media.mobile} {
    padding: 20px;
  }
`;
const StyledBannerLabel = styled.span`
  display: block;
  color: #bcb0d2;
  letter-spacing: 1.5px;
  font-size: 8px;
  line-height: 1.5;
  @media ${media.mobile} {
    font-size: 7px;
  }
`;
const StyledBannerContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden;
  @media ${media.mobile} {
    gap: 8px;
  }
`;
const StyledCopy = styled(motion.div)`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  padding: 12px 0 3px;
  h1 {
    font-size: clamp(26px, 2.5vw, 36px);
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -1.4px;
  }
  h1 span {
    color: #c5b0f6;
  }
  p {
    margin-top: 12px;
    font-size: 10px;
    color: #b8b2c6;
  }
  @media ${media.mobile} {
    h1 {
      font-size: clamp(18px, 5.1vw, 27px);
      letter-spacing: -1px;
    }
    p {
      max-width: 175px;
      font-size: 8px;
      line-height: 1.6;
    }
  }
`;
const StyledArtwork = styled.div`
  position: relative;
  width: 215px;
  height: 125px;
  flex-shrink: 0;
  animation-play-state: inherit;
  @media ${media.mobile} {
    width: 68px;
    height: 85px;
  }
`;
const StyledOrbit = styled.span`
  position: absolute;
  inset: 25px 15px;
  border: 1px solid #dbccfc44;
  border-radius: 50%;
  animation: ${driftOrbit} 14s ease-in-out infinite;
  animation-direction: ${({ $direction }) => ($direction === 1 ? 'reverse' : 'normal')};
  animation-play-state: inherit;
  &:nth-child(2) {
    rotate: 50deg;
  }
  @media ${media.mobile} {
    inset: 24px 6px;
  }
`;
const StyledPlay = styled.span`
  position: absolute;
  top: 35px;
  left: 72px;
  width: 65px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, #dfd2fa, #ae8de0);
  color: #363044;
  font-size: 25px;
  animation: ${floatPlay} 6s ease-in-out infinite;
  animation-play-state: inherit;
  @media ${media.mobile} {
    top: 26px;
    left: 17px;
    width: 37px;
    height: 34px;
    border-radius: 10px;
    font-size: 15px;
  }
`;
const StyledSignature = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 9px;
  color: #cdc3dc;
  b {
    font-weight: 500;
    color: #f4eeff;
    font-size: 15px;
  }
  @media ${media.mobile} {
    display: none;
  }
`;
