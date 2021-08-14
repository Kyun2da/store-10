import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem;
  font-size: 2rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid black;

  ::placeholder {
    color: #c1c5c5;
  }

  &:focus {
    border-bottom: 1px solid #2ac1bc;
  }
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
