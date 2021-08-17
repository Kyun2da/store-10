import styled from 'styled-components';
import { IForm } from './Form';

export const Form = styled.form<IForm>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}rem;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .category-selection {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .each-category {
      padding: 2rem;
      border-radius: 2rem;
      background-color: ${({ theme }) => theme.color.primary2};
      display: flex;
      align-items: center;
      gap: 1.5rem;
      width: 30%;
      cursor: pointer;

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
    }
  }
`;
