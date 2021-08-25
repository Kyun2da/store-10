import styled from 'styled-components';

interface CardWrapperProps {
  col: number;
}

export const CardWrapper = styled.ul<CardWrapperProps>`
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
