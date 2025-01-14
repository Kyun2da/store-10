import styled from 'styled-components';

interface CardWrapperProps {
  col: number;
}

export const CardWrapper = styled.ul<CardWrapperProps>`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${({ col }) => col}, 1fr);
`;
