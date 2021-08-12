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
