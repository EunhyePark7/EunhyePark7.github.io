import ImgProfile from '@/assets/images/profile.png';
import AboutMeTop from '@/components/AboutMeTop';
import AppLayout from '@/components/AppLayout';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutMe = () => {
  const keywords = ['탄탄한 기본기 ✨', '🌱 지속 성장', '🌞 밝은 에너지', '구조적 사고 🧬'];

  return (
    <AppLayout>
      <AboutMeTop />

      <StyledDetail>
        <MotionProfile
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <StyledImg>
            <img src={ImgProfile} alt="profile" width={140} />
          </StyledImg>

          <StyledTitle>
            차곡차곡 쌓아온 경험과 함께,
            <br /> 즐겁게 성장 중인
            <br /> 개발자 <span>박은혜</span> 입니다.
          </StyledTitle>

          <StyledKeywordList>
            {keywords.map((text, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: 0.5 + i * 0.2,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {text}
              </motion.span>
            ))}
          </StyledKeywordList>
        </MotionProfile>

        <MotionContent
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            처음엔 눈앞의 마크업 한 줄이 전부였지만,
            <br /> 어느새 더 나은 구조를 고민하고 사용자 경험을 생각하게 되었습니다.
            <br />
            다양한 서비스의 마크업과 프론트 개발을 경험하며, <br />
            기본기에 기반한 성장을 차곡차곡 쌓아왔습니다. <br />
            <br />
            협업에선 늘 열린 자세로 소통하며,
            <br /> ‘또 함께 일하고 싶은 사람’이라는 말을 들을 때 가장 큰 보람을 느낍니다.
            <br />
            <br />
            코드뿐 아니라 사람과의 관계도 개발의 일부라고 생각하기에,
            <br /> 즐겁게 일하고 함께 성장하는 순간들을 소중히 여깁니다.
            <br />
            <br /> 작은 변화에서 배우고, 오늘보다 나은 내일의 나를 기대하며
            <br /> 지금 이 순간에도 꾸준히 성장 중 입니다.
          </p>
        </MotionContent>
      </StyledDetail>
    </AppLayout>
  );
};

export default AboutMe;

const StyledDetail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: calc(100vh - 200px);
  margin: 100px 0 0;
`;

const MotionProfile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 60px;
`;

const MotionContent = styled(motion.div)`
  max-width: 600px;
  p {
    font-size: 20px;
    line-height: 1.6;
  }
`;

const StyledImg = styled.span`
  img {
    vertical-align: middle;
    object-fit: cover;
  }
`;

const StyledTitle = styled.strong`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  span {
    position: relative;
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 7px;
      background-color: rgba(255, 168, 215, 0.8);
      bottom: 5px;
      left: 0;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
      transform: scaleX(1);
      z-index: -1;
    }
  }
`;

const StyledKeywordList = styled.div`
  span {
    position: absolute;
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 20px;
    background-color: var(--white);
    border: 1px solid var(--outline);
    box-shadow: 3px 0 7px var(--additive-background);
    white-space: nowrap;

    &:nth-child(1) {
      top: -40px;
      left: 60px;
    }
    &:nth-child(2) {
      top: 12px;
      right: 40px;
    }
    &:nth-child(3) {
      top: 85px;
      left: 10px;
    }
    &:nth-child(4) {
      top: 157px;
      right: 43px;
    }
  }
`;
