import AppLayout from '@/components/AppLayout';
import { MENU } from '@/constants';
import { media } from '@/styles/media';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

/**
 * 메인 페이지
 */
const Home = () => {
  const { ABOUT_ME, SKILL, COMPANY, RESUME, PREPARING } = MENU;
  const contentItems = [ABOUT_ME, SKILL, COMPANY.dkbmc, COMPANY.pixdine, COMPANY.goodrich, PREPARING, RESUME];

  const renderThumbnail = thumbnail => {
    // if (!thumbnail) return <StyledItemThumbnail />;

    const ext = thumbnail.split('.').pop();
    const src = `/assets/contents/${thumbnail}`;

    if (ext === 'mp4') {
      return (
        // metadata 먼저 로드해서 최적화
        <video src={src} muted autoPlay loop playsInline preload="metadata" />
      );
    }

    // lazy 로딩 최적화
    return <img src={src} alt="thumbnail" loading="lazy" />;
  };

  return (
    <AppLayout>
      <StyledContentList>
        {contentItems.map(({ contentName, to, thumbnail }, index) => {
          const hasHash = to && to.includes('#');

          return (
            <StyledContentItem key={`${to}_${index}`}>
              {hasHash ? (
                <HashLink smooth to={to}>
                  <StyledThumbnail>{renderThumbnail(thumbnail)}</StyledThumbnail>
                  <StyledItemTitle>{contentName}</StyledItemTitle>
                </HashLink>
              ) : (
                <Link to={to} aria-label={`Go to ${contentName} page`}>
                  <StyledThumbnail>{renderThumbnail(thumbnail)}</StyledThumbnail>
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
  @media ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
  }
  @media ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px 20px;
  }
`;

const StyledContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  border: 1px solid var(--outline);
  object-fit: cover;
  overflow: hidden;
  video,
  img {
    width: 100%;
  }
`;

const StyledItemTitle = styled.strong`
  display: block;
  padding: 0 10px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;
