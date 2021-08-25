import styled from 'styled-components';

export const CardWrapper = styled.ul`
  display: grid;
  gap: 2rem;
  padding-bottom: 2rem;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
