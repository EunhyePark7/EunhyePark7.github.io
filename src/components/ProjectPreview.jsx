import ActionIcon from '@/components/ActionIcon';
const ProjectPreview = ({ project, compact = false }) => (
  <div className={`project-preview tone-${project.tone}${compact ? ' compact' : ''}`}>
    <div className="preview-caption">
      <span>{project.label}</span>
      <span>{project.number} / SELECTED WORK</span>
    </div>
    <div className="device-composition">
      <div className="desktop-device">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>{project.company}</span>
        </div>
        <div className="desktop-screen">
          <img
            src={project.desktop.replace('.png', '-preview.jpg')}
            alt={`${project.title} PC 실제 작업 화면`}
            loading="lazy"
          />
        </div>
      </div>
      <div className="mobile-device">
        <div className="phone-island" />
        <img
          src={project.mobile.replace('.png', '-preview.jpg')}
          alt={`${project.title} 모바일 실제 작업 화면`}
          loading="lazy"
        />
      </div>
    </div>
    <div className="preview-bottom">
      <span>{project.tags[0]}</span>
      <span>DESKTOP + MOBILE <ActionIcon name="display" size={10} /></span>
    </div>
    {compact && (
      <span className="preview-play" aria-hidden="true">
        <ActionIcon name="play" size={18} />
      </span>
    )}
  </div>
);

export default ProjectPreview;
