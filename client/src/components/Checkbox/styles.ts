import styled from 'styled-components';

export const Checkbox = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  user-select: none;
  align-items: center;

  input {
    position: absolute;
    visibility: hidden;
    width: 0;
    height: 0;
    &:checked ~ span {
      background: ${({ theme }) => theme.color.primary};
      svg {
        path {
          stroke: ${({ theme }) => theme.color['off-white']};
        }
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.color['off-white']};
    border: 2px solid ${({ theme }) => theme.color.primary};
    margin-right: 6px;
    svg {
      path {
        stroke: ${({ theme }) => theme.color.primary};
        stroke-width: 3px;
      }
    }
  }
`;
