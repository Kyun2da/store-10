import styled from 'styled-components';

export const CategorySelector = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const Category = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.primary2};
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  stroke: ${({ theme }) => theme.color.primary3};
  fill: ${({ theme }) => theme.color.primary3};
  color: ${({ theme }) => theme.color.primary3};

  &:hover {
    opacity: 0.85;
  }

  &.selected {
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};

    svg {
      stroke: #fff;
      fill: #fff;
    }
  }
`;
