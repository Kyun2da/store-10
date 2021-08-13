import styled from 'styled-components';

export const ShoppingCartHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.body};
  padding: 0 2rem;
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    ${({ theme }) => theme.fontSize.m};
    &:hover {
      opacity: 0.4;
    }
  }
`;

export const ShoppingCartList = styled.ul`
  padding: 1.2rem 2rem;
`;
