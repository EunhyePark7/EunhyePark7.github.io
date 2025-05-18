import AppLayout from '@/components/AppLayout';
import { MENU } from '@/constants';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

/**
 * 메인 페이지
 */
const Home = () => {
  const { ABOUT_ME, SKILL, COMPANY, RESUME } = MENU;
  const contentItems = [ABOUT_ME, SKILL, COMPANY.dkbmc, COMPANY.pixdine, COMPANY.goodrich, RESUME];

  const renderThumbnail = thumbnail => {
    if (!thumbnail) return <StyledItemThumbnail />;
    const ext = thumbnail.split('.').pop();
    const src = `/assets/contents/${thumbnail}`;

    if (ext === 'mp4') {
      return <StyledVideoThumbnail src={src} muted autoPlay loop playsInline />;
    }

    return <StyledImageThumbnail src={src} alt="thumbnail" />;
  };

  return (
    <AppLayout>
      <StyledContentList>
        {contentItems.map(({ contentName, to, thumbnail }, index) => {
          const hasHash = to.includes('#');

          return (
            <StyledContentItem key={to}>
              {hasHash ? (
                <HashLink smooth to={to}>
                  {renderThumbnail(thumbnail)}
                  <StyledItemTitle>{contentName}</StyledItemTitle>
                </HashLink>
              ) : (
                <Link to={to} aria-label={`Go to ${contentName} page`}>
                  {renderThumbnail(thumbnail)}
                  <StyledItemTitle>{contentName}</StyledItemTitle>
                </Link>
              )}
            </StyledContentItem>
          );
        })}
      </StyledContentList>
    </AppLayout>
  );
};

export default Home;

const StyledContentList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`;

const StyledContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const BaseThumbnailStyle = `
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  object-fit: cover;
  background-color: var(--outline);
`;

const StyledItemThumbnail = styled.div`
  ${BaseThumbnailStyle}
`;

const StyledImageThumbnail = styled.img`
  ${BaseThumbnailStyle}
`;

const StyledVideoThumbnail = styled.video`
  ${BaseThumbnailStyle}
`;

const StyledItemTitle = styled.strong`
  display: block;
  padding: 0 10px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;
