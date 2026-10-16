import { PROFILE_IMAGE as Profile } from '@/constants/assets';
import AppLayout from '@/components/AppLayout';
import TypingHeading from '@/components/TypingHeading';
import ActionIcon from '@/components/ActionIcon';
import { Link } from 'react-router-dom';

const AboutMe = () => (
  <AppLayout>
    <div className="channel-page about-page">
      <div className="page-intro">
        <Link to="/" className="text-link">
          <ActionIcon name="back" /> 채널 홈
        </Link>
        <span className="eyebrow">BEHIND THE SCREENS</span>
      </div>
      <section className="about-hero">
        <div>
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <TypingHeading />
          <p>
            차곡차곡 쌓아온 경험과 함께,
            <br />
            즐겁게 성장 중인 개발자 박은혜입니다.
          </p>
          <div className="tag-row">
            {['탄탄한 기본기', '지속 성장', '밝은 에너지', '구조적 사고'].map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </div>
        <div className="about-portrait">
          <img src={Profile} alt="박은혜 프로필" />
          <span>
            Frontend Developer
            <br />& UI Publisher
          </span>
        </div>
      </section>
      <section className="about-story">
        <span className="eyebrow">MY WAY OF WORKING</span>
        <h2>
          코드도, 함께하는 사람도.
          <br />둘 다 소중하게 생각합니다.
        </h2>
        <div>
          <p>
            처음엔 눈앞의 마크업 한 줄이 전부였지만, 어느새 더 나은 구조를 고민하고 사용자 경험을 생각하게 되었습니다.
            다양한 서비스의 마크업과 프론트 개발을 경험하며, 기본기에 기반한 성장을 차곡차곡 쌓아왔습니다.
          </p>
          <p>
            협업에선 늘 열린 자세로 소통하며, ‘또 함께 일하고 싶은 사람’이라는 말을 들을 때 가장 큰 보람을 느낍니다.
            코드뿐 아니라 사람과의 관계도 개발의 일부라고 생각하기에, 즐겁게 일하고 함께 성장하는 순간들을 소중히
            여깁니다.
          </p>
          <p>작은 변화에서 배우고, 오늘보다 나은 내일의 나를 기대하며 지금 이 순간에도 꾸준히 성장 중입니다.</p>
        </div>
      </section>
      <section className="collaboration">
        <div>
          <span className="eyebrow">GET TO KNOW MY WORK</span>
          <h2>제가 만든 화면도 만나보세요</h2>
        </div>
        <Link to="/work" className="button button-primary">
          프로젝트 보기 <ActionIcon name="layers" />
        </Link>
      </section>
    </div>
  </AppLayout>
);

export default AboutMe;
