import AppLayout from '@/components/AppLayout';
import { MENU } from '@/constants';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

/**
 * 메인 페이지
 */
const Home = () => {
  const { ABOUT_ME, SKILL, COMPANY } = MENU;
  const contentItems = [ABOUT_ME, SKILL, COMPANY.dkbmc, COMPANY.pixdine, COMPANY.goodrich];
  return (
    <AppLayout>
      <StyledContentList>
        {contentItems.map(({ contentName, to }, index) => {
          const hasHash = to.includes('#');

          return (
            <StyledContentItem key={to}>
              {hasHash ? (
                <HashLink smooth to={to}>
                  <StyledItemThumbnail />
                  <StyledItemTitle>{contentName}</StyledItemTitle>
                </HashLink>
              ) : (
                <Link to={to} aria-label={`Go to ${contentName} page`}>
                  <StyledItemThumbnail />
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

const StyledItemThumbnail = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 12px;
  background-color: var(--outline);
`;
const StyledItemTitle = styled.strong`
  display: block;
  padding: 0 10px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;
