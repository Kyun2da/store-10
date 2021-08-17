import styled, { css } from 'styled-components';
import { ITextarea } from './Textarea';
import { IInput, IInputContainer, IInputLabel } from './Input';

export const InputContainer = styled.div<IInputContainer>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
`;

export const Label = styled.label<IInputLabel>`
  position: absolute;
  background-color: transparent;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  font-size: 1.8rem;
  cursor: text;
  transform: translate(12px, 12px) scale(1);
  line-height: 2rem;

  ${({ label, error }) => {
    if (label === 'Standard' || label === 'Outlined') {
      return css`
        color: ${({ theme }) =>
          error ? theme.color.error : theme.color.placeholder};
      `;
    } else if (label === 'Filled') {
      return css`
        color: ${({ theme }) => theme.color['off-white']};
      `;
    }
  }}

  &.focusing {
    transform: translate(6px, -20px) scale(0.75);
    transform-origin: top left;
    ${({ error }) => {
      return css`
        color: ${({ theme }) => (error ? theme.color.error : '#2ac1bc')};
      `;
    }}
  }
`;

export const Input = styled.input<IInput>`
  padding: 1rem;
  font-size: 1.8rem;
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 46px;

  ${({ label, labelName, error }) => {
    if (label === 'Standard') {
      return css`
        border-bottom: ${({ theme }) =>
          error ? `1px solid ${theme.color.error}` : '1px solid black'};
        &:focus {
          border-bottom: ${({ theme }) =>
            error ? `2px solid ${theme.color.error}` : '1px solid #2ac1bc'};
        }

        &::placeholder {
          color: ${({ theme }) =>
            labelName ? 'transparent' : theme.color.placeholder};
        }

        &.focusing {
          &::placeholder {
            color: ${({ theme }) => theme.color.placeholder};
          }
        }
      `;
    } else if (label === 'Outlined') {
      return css`
        border: ${({ theme }) =>
          error ? `1px solid ${theme.color.error}` : '1px solid #c1c5c5'};
        border-radius: 10px;
        background-color: white;
        &:focus {
          border: ${({ theme }) =>
            error ? `2px solid ${theme.color.error}` : '1px solid #2ac1bc'};
          outline: none;
        }

        &::placeholder {
          color: ${({ theme }) =>
            labelName ? 'transparent' : theme.color.placeholder};
        }

        &.focusing {
          &::placeholder {
            color: ${({ theme }) => theme.color.placeholder};
          }
        }
      `;
    } else if (label === 'Filled') {
      return css`
        border: ${({ theme }) =>
          error ? `1px solid ${theme.color.error}` : 'none'};
        border-radius: 10px;
        background-color: #c1c5c5;
        &:focus {
          border: ${({ theme }) =>
            error ? `2px solid ${theme.color.error}` : '1px solid #2ac1bc'};
          outline: none;
        }

        &::placeholder {
          color: ${({ theme }) =>
            labelName ? 'transparent' : theme.color['off-white']};
        }

        &.focusing {
          &::placeholder {
            color: ${({ theme }) => theme.color['off-white']};
          }
        }
      `;
    }
  }}
`;

export const ErrorText = styled.div`
  color: red;
  position: absolute;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
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

export const Textarea = styled.textarea<ITextarea>`
  font-family: 'Noto Sans', sans-serif;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
  height: 15rem;
  padding: 2rem;
  min-height: 6rem;
  max-height: 20rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  resize: ${({ resize }) => resize};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }

  &::-webkit-input-placeholder {
    font-family: 'Noto Sans', sans-serif;
  }
`;

export const FileInputButton = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px dashed #aaa;
  cursor: pointer;

  .helper-text {
    color: #adadad;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const PreviewWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;

  img {
    object-fit: cover;
    width: 20%;
    border-radius: 2rem;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 1rem;
  text-align: right;
  color: ${({ theme }) => theme.color.error};
`;
