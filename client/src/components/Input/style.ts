import styled, { css } from 'styled-components';
import { IInput } from './Input';

export const Input = styled.input<IInput>`
  padding: 1rem;
  font-size: 1.8rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid black;

  ${({ label }) => {
    if (label === 'Standard') {
      return css`
        &:focus {
          border-bottom: 1px solid #2ac1bc;
        }

        ::placeholder {
          color: #c1c5c5;
        }
      `;
    } else if (label === 'Outlined') {
      return css`
        border: 1px solid #c1c5c5;
        border-radius: 10px;
        background-color: white;
        &:focus {
          border: 1px solid #2ac1bc;
          outline: none;
        }

        ::placeholder {
          color: #c1c5c5;
        }
      `;
    } else if (label === 'Filled') {
      return css`
        border: none;
        border-radius: 10px;
        background-color: #c1c5c5;
        &:focus {
          border: 1px solid #2ac1bc;
          outline: none;
        }

        ::placeholder {
          color: white;
        }
      `;
    }
  }}
`;

export const NumberInputArea = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

export const AdjustButton = styled.button`
  width: 2.5rem;
  border-left: 1px solid ${({ theme }) => theme.color.line};
  border-right: 1px solid ${({ theme }) => theme.color.line};
  ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color['text-color']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NumberInput = styled.input`
  appearance: textfield;
  padding: 0.5rem 1.5rem;
  width: 5rem;
  outline: none;
  border: none;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
