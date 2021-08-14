import styled from 'styled-components';

export const Main = styled.div`
  h1.product-title {
    color: ${({ theme }) => theme.color['text-color']};
    ${({ theme }) => theme.fontSize.l};
    margin: 2rem 0;
  }
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 10.5rem;
  right: 1rem;
  z-index: 9999999;
  padding: 1rem;
  background-color: #ededed;
  border-radius: 1rem;
  border: 1px solid #111;
`;
