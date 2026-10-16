import ActionIcon from '@/components/ActionIcon';
import AppLayout from '@/components/AppLayout';
import ProjectPreview from '@/components/ProjectPreview';
import { WORK_HISTORY } from '@/constants';
import { PROJECTS } from '@/constants/projects';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const WorkExperience = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isCareerView = searchParams.get('view') === 'career';
  const selected = PROJECTS.find(project => project.id === location.hash.slice(1)) || PROJECTS[0];
  const [device, setDevice] = useState('desktop');
  const [company, setCompany] = useState(selected.companyId);
  const [isZoomed, setIsZoomed] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    setDevice('desktop');
    setCompany(
      WORK_HISTORY.some(item => item.id === location.hash.slice(1)) ? location.hash.slice(1) : selected.companyId,
    );
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selected.id, selected.companyId, location.hash]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isZoomed || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isZoomed]);
  const history = WORK_HISTORY.find(item => item.id === company);
  const companyPeriods = { goodrich: '2023.05 — 2025.04', pixdine: '2021.02 — 2023.05', dkbmc: '2016.11 — 2018.12' };
  return (
    <AppLayout>
      <div className="channel-page work-page">
        <div className="page-intro">
          <Link to="/" className="text-link">
            <ActionIcon name="back" /> 채널 홈
          </Link>
          <span className="eyebrow">{isCareerView ? 'WORK EXPERIENCE' : `SELECTED WORK / ${selected.number}`}</span>
        </div>
        <nav className="channel-tabs work-menu" aria-label="WorkExperience 메뉴">
          <Link to={`/work?view=career${location.hash}`} aria-current={isCareerView ? 'page' : undefined}>
            함께해 온 프로젝트들
          </Link>
          <Link to={`/work${location.hash}`} aria-current={!isCareerView ? 'page' : undefined}>
            대표 프로젝트
          </Link>
        </nav>
        {!isCareerView && (
          <div className="watch-layout">
            <article className="watch-main">
              <ProjectPreview project={selected} />
              <div className="watch-title">
                <div className="tag-row">
                  {selected.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h1>{selected.title}</h1>
                <p>{selected.subtitle}</p>
              </div>
              <div className="project-facts">
                <div>
                  <span>COMPANY</span>
                  <strong>{selected.company}</strong>
                </div>
                <div>
                  <span>PERIOD</span>
                  <strong>{selected.period}</strong>
                </div>
                <div>
                  <span>MY ROLE</span>
                  <strong>{selected.role}</strong>
                </div>
              </div>
              <section className="capture-section">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">A CLOSER LOOK</span>
                    <h2>실제 작업 화면</h2>
                  </div>
                  <StyledCaptureActions>
                    <a
                      href={selected.url}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${selected.title} 실제 사이트 보기 (새 탭)`}
                    >
                      실제 사이트 보기 <ActionIcon name="external" />
                    </a>
                    <button className="text-link" onClick={() => setIsZoomed(true)}>
                      원본 확대 <ActionIcon name="expand" />
                    </button>
                  </StyledCaptureActions>
                </div>
                <div className="device-tabs" role="group" aria-label="작업 화면 기기 선택">
                  <button
                    className={device === 'desktop' ? 'active' : ''}
                    aria-pressed={device === 'desktop'}
                    onClick={() => setDevice('desktop')}
                  >
                    PC 화면
                  </button>
                  <button
                    className={device === 'mobile' ? 'active' : ''}
                    aria-pressed={device === 'mobile'}
                    onClick={() => setDevice('mobile')}
                  >
                    모바일 화면
                  </button>
                  <span>아래로 스크롤하여 전체 화면을 확인하세요</span>
                </div>
                <div className={`capture-viewport ${device}`} tabIndex="0" aria-label="전체 작업 화면 스크롤 영역">
                  <img
                    src={selected[device]}
                    alt={`${selected.title} ${device === 'desktop' ? 'PC' : '모바일'} 전체 화면 캡처`}
                  />
                </div>
                <p className="capture-note">
                  실제 프로젝트 캡처입니다. 위 기간과 담당 역할은 기존 이력서의 기록을 기준으로 표시했습니다.
                </p>
              </section>
            </article>
            <aside className="watch-sidebar">
              <div className="sidebar-heading">
                <h2>작업 플레이리스트</h2>
                <span>3 projects</span>
              </div>
              {PROJECTS.map(project => (
                <Link
                  key={project.id}
                  to={`/work#${project.id}`}
                  className={`related-project${project.id === selected.id ? ' active' : ''}`}
                  aria-current={project.id === selected.id ? 'page' : undefined}
                >
                  <ProjectPreview project={project} compact />
                  <div>
                    <span className="eyebrow">
                      {project.number} / {project.tags[0]}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.period}</p>
                  </div>
                  <span className="related-arrow"><ActionIcon name="layers" /></span>
                </Link>
              ))}
              <div className="sidebar-contact">
                <span>좋은 작업은 좋은 대화에서.</span>
                <a href="mailto:eungkong333@gmail.com" className="button button-primary">
                  프로젝트 이야기하기 <ActionIcon name="chat" />
                </a>
              </div>
            </aside>
          </div>
        )}
        {isCareerView && (
          <section className="career-section career-menu-content">
            <div className="section-heading">
              <div>
                <span className="eyebrow">EXPERIENCE, LAYER BY LAYER</span>
                <h2>함께해 온 프로젝트들</h2>
              </div>
              <Link className="text-link" to="/resume">
                이력서 보기 <ActionIcon name="document" />
              </Link>
            </div>
            <div className="career-tabs" aria-label="회사별 경력">
              {WORK_HISTORY.map(item => (
                <button
                  key={item.id}
                  className={company === item.id ? 'active' : ''}
                  aria-pressed={company === item.id}
                  onClick={() => setCompany(item.id)}
                >
                  <strong>{item.company}</strong>
                  <span>{companyPeriods[item.id]}</span>
                </button>
              ))}
            </div>
            <div className="career-list">
              {history.projects.map((project, index) => (
                <article key={`${history.id}-${project.title}`}>
                  <span className="career-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description.join(' · ')}</p>
                  </div>
                  <time>{project.period}</time>
                </article>
              ))}
            </div>
          </section>
        )}
        {isZoomed && (
          <dialog
            ref={dialogRef}
            className="capture-dialog"
            aria-label="작업 화면 원본 확대"
            onCancel={() => setIsZoomed(false)}
            onClose={() => setIsZoomed(false)}
          >
            <div className="dialog-toolbar">
              <strong>
                {selected.title} · {device === 'desktop' ? 'PC' : '모바일'}
              </strong>
              <button autoFocus className="button button-secondary" onClick={() => setIsZoomed(false)}>
                닫기 ×
              </button>
            </div>
            <div className={`dialog-image ${device}`}>
              <img src={selected[device]} alt={`${selected.title} 원본 캡처`} />
            </div>
          </dialog>
        )}
      </div>
    </AppLayout>
  );
};

export default WorkExperience;

const StyledCaptureActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px 16px;
  a,
  button {
    white-space: nowrap;
  }
`;
