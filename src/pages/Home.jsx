import AppLayout from '@/components/AppLayout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * 메인 페이지
 */
const contentItems = [
  { id: 1, title: 'AboutMe', to: '/AboutMe' },
  { id: 2, title: 'Skill', to: '/Skill' },
  { id: 3, title: 'Dkbmc', to: '/Dkbmc' },
  { id: 4, title: 'Pixdine', to: '/Pixdine' },
  { id: 5, title: 'GoodRich', to: '/GoodRich' },
];

const Home = () => {
  return (
    <AppLayout>
      <StyledContentList>
        {contentItems.map(({ id, title, to }) => (
          <StyledContentItem key={id}>
            <Link to={to} aria-label={`Go to ${title} page`}>
              <StyledItemThumbnail />
              <StyledItemTitle>{title}</StyledItemTitle>
            </Link>
          </StyledContentItem>
        ))}
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
