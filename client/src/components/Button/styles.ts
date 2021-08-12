import styled, { css } from 'styled-components';
import { IButtonProps } from './Button';

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.3s;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: black;

  ${(props) => {
    if (props.size === 'Large') {
      return css`
        font-size: 3rem;
        padding: 1rem 2rem;
      `;
    } else if (props.size === 'Small') {
      return css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;
    } else {
      return css`
        font-size: 2rem;
        padding: 1rem 2rem;
      `;
    }
  }}

  ${(props) => {
    if (props.color === 'primary') {
      return css`
        background-color: ${props.theme.color.primary};
        &:hover {
          background-color: ${props.theme.color.primary3};
        }
        &:active {
          background: ${props.theme.color.primary3};
        }
      `;
    } else if (props.color === 'black') {
      return css`
        &:hover {
          background-color: black;
        }
        &:active {
          background: black;
        }
      `;
    } else if (props.color === 'white') {
      return css`
        color: black;
        border: 1px solid black;
        background-color: white;
        &:hover {
          background-color: #ececec;
        }
        &:active {
          background-color: #ececec;
        }
      `;
    }
  }};
`;
