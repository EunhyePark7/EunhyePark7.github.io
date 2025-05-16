import styled from 'styled-components';

const PageTitle = ({ title, description = '' }) => {
  return (
    <StyledPageTitle>
      <StyledTitle>{title}</StyledTitle>
      {description && <StyledDescription>{description}</StyledDescription>}
    </StyledPageTitle>
  );
};

export default PageTitle;

const StyledPageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 36px;
`;
const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
`;
const StyledDescription = styled.p`
  font-size: 14px;
`;
