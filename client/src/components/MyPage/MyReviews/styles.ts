import styled from 'styled-components';

export const MyReviews = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};
  color: ${({ theme }) => theme.color['text-color']};
`;

export const MyReviewsItem = styled.div`
  display: flex;
  gap: 2rem;

  & + & {
    margin-top: 3rem;
  }
`;

export const ThumbnailArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductThumbnail = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 3rem;
`;

export const LinkButton = styled.button`
  padding: 1rem;
  width: 100%;
  color: #fff;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.primary};

  &:hover {
    opacity: 0.75;
  }
`;

export const ReviewTitleArea = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.55;
    }
  }
`;
