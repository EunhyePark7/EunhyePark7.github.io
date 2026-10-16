import { PROFILE_IMAGE as Profile } from '@/constants/assets';
import ProfileStar from '@/components/ProfileStar';
import Reveal from '@/components/MotionDetail';
import AppLayout from '@/components/AppLayout';
import ChannelBanner from '@/components/ChannelBanner';
import ActionIcon from '@/components/ActionIcon';
import ProjectPreview from '@/components/ProjectPreview';
import { WORK_HISTORY } from '@/constants';
import { PROJECTS } from '@/constants/projects';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const FILTERS = ['전체', 'React', 'Next.js', 'Markup'];

const Home = () => {
  const [filter, setFilter] = useState('전체');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() || '';
  const projects = PROJECTS.filter(
    project =>
      (filter === '전체' || project.tags.includes(filter)) &&
      `${project.title} ${project.company} ${project.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()),
  );
  const projectCount = WORK_HISTORY.reduce((total, company) => total + company.projects.length, 0);

  return (
    <AppLayout>
      <div className="channel-page">
        <ChannelBanner />
        <section className="channel-profile">
          <div className="channel-avatar">
            <img src={Profile} alt="박은혜 프로필" />
          </div>
          <div className="channel-description">
            <h2>
              Eunhye Park <ProfileStar />
            </h2>
            <p className="channel-handle">
              @eunhyepark <span>·</span> 프론트엔드 개발자 & UI 퍼블리셔
            </p>
            <p className="channel-bio">
              탄탄한 마크업부터 사용자 경험을 생각하는 UI까지.
              <br className="mobile-only" /> 차곡차곡 쌓아온 작업을 소개합니다.
            </p>
            <Link to="/aboutMe" className="text-link">
              조금 더 알아보기 <ActionIcon name="user" />
            </Link>
          </div>
          <div className="channel-actions">
            <Link to="/resume" className="button button-primary">
              이력서 보기 <ActionIcon name="document" />
            </Link>
            <a href="mailto:eungkong333@gmail.com" className="button button-secondary">
              연락하기 <ActionIcon name="mail" />
            </a>
          </div>
        </section>
        <nav className="channel-tabs" aria-label="채널 메뉴">
          <Link to="/" aria-current="page">
            홈
          </Link>
          <Link to="/work">프로젝트</Link>
          <Link to="/skill">보유 기술</Link>
          <Link to="/aboutMe">소개</Link>
          <span className="channel-tab-note">{projectCount}개의 프로젝트 경험</span>
        </nav>
        <section className="playlist-section" aria-labelledby="playlist-heading">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MORE ABOUT THIS CHANNEL</span>
              <h2 id="playlist-heading">은혜를 알아가는 플레이리스트</h2>
            </div>
          </div>
          <div className="playlist-grid">
            <Reveal as="link" index={0} interval={0.15} duration={0.2} to="/aboutMe" className="playlist-card">
              <div className="playlist-cover about-cover">
                <span>01 / ABOUT</span>
                <strong>
                  Hello,
                  <br />
                  I'm Eunhye<span>✦</span>
                </strong>
                <span className="playlist-icon">
                  <ActionIcon name="user" />
                </span>
              </div>
              <h3>코드 너머의 저를 소개합니다</h3>
              <p>함께 일하는 태도와 성장 이야기</p>
            </Reveal>
            <Reveal as="link" index={1} interval={0.15} duration={0.2} to="/skill" className="playlist-card">
              <div className="playlist-cover skills-cover">
                <span>02 / TOOLKIT</span>
                <div className="skill-cover-icons">
                  {['reactjs', 'javascript', 'scss'].map(skill => (
                    <img key={skill} src={`/assets/icons/${skill}.svg`} alt="" />
                  ))}
                </div>
                <strong>My creative toolkit.</strong>
                <span className="playlist-icon">
                  <ActionIcon name="code" />
                </span>
              </div>
              <h3>아이디어를 화면으로 만드는 기술</h3>
              <p>Markup · Styling · Frontend</p>
            </Reveal>
            <Reveal as="link" index={2} interval={0.15} duration={0.2} to="/resume" className="playlist-card">
              <div className="playlist-cover resume-cover">
                <span>03 / JOURNEY</span>
                <strong>
                  Experience,
                  <br />
                  layer by layer.
                </strong>
                <div className="resume-lines" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="playlist-icon">
                  <ActionIcon name="briefcase" />
                </span>
              </div>
              <h3>차곡차곡 쌓아온 커리어</h3>
              <p>경력과 이력서 한눈에 보기</p>
            </Reveal>
          </div>
        </section>
        <section className="selected-section" aria-labelledby="selected-heading">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE WORK, NOT JUST THE WORDS</span>
              <h2 id="selected-heading">
                대표 프로젝트 <span className="heading-count">03</span>
              </h2>
            </div>
            <Link to="/work?view=career" className="text-link">
              모든 경력 보기 <ActionIcon name="briefcase" />
            </Link>
          </div>
          <div className="filter-row" aria-label="프로젝트 기술 필터">
            {FILTERS.map(item => (
              <button
                key={item}
                className={`filter-chip${filter === item ? ' active' : ''}`}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
            {query && (
              <Link to="/" className="search-clear">
                “{query}” 검색 해제 ×
              </Link>
            )}
          </div>
          <div key={`${filter}-${query}`} className="project-grid" aria-live="polite">
            {projects.map((project, index) => (
              <Reveal
                as="link"
                index={index}
                interval={0.15}
                duration={0.2}
                key={project.id}
                to={`/work#${project.id}`}
                className="project-card"
              >
                <ProjectPreview project={project} compact />
                <div className="card-description">
                  <span className={`company-avatar tone-${project.tone}`}>
                    {project.companyId === 'goodrich' ? 'G' : 'H'}
                  </span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>
                      {project.role} <span>·</span> {project.tags[0]}
                    </p>
                    <p className="card-period">{project.period}</p>
                  </div>
                  <span className="card-arrow" aria-hidden="true">
                    <ActionIcon name="layers" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          {projects.length === 0 && (
            <div className="empty-state">
              <h3>일치하는 프로젝트가 없어요.</h3>
              <p>검색어 또는 기술 필터를 변경해 주세요.</p>
              <button className="button button-secondary" onClick={() => setFilter('전체')}>
                전체 기술 보기
              </button>
            </div>
          )}
        </section>
        <section className="collaboration">
          <div>
            <span className="eyebrow">LET'S MAKE THE NEXT CHAPTER</span>
            <h2>
              다음 좋은 작업은,
              <br className="mobile-only" /> 함께 만들어요
            </h2>
            <p>작업에 대한 이야기, 새로운 기회, 가벼운 인사도 환영합니다.</p>
          </div>
          <a href="mailto:eungkong333@gmail.com" className="button button-primary">
            함께 이야기하기 <ActionIcon name="chat" />
          </a>
        </section>
        <footer className="channel-footer">
          <span>© {new Date().getFullYear()} Eunhye Park</span>
          <span>Thoughtfully designed. Carefully built.</span>
          <a href="https://github.com/EunhyePark7" target="_blank" rel="noreferrer">
            GitHub <ActionIcon name="github" />
          </a>
        </footer>
      </div>
    </AppLayout>
  );
};

export default Home;
