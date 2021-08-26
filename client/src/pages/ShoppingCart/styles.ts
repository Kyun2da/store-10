import styled from 'styled-components';

export const ShoppingCart = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    flex-direction: column;
  }
  > div {
    flex: 1;
  }
`;

export const ShoppingCartAside = styled.aside`
  position: relative;
  flex: 0 1 38.5rem;
  padding-right: 2rem;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    display: none;
  }
`;

export const ShoppingCartFooter = styled.footer`
  padding: 0 2rem 2rem 2rem;
  div {
    margin-top: 0;
  }
  @media (min-width: ${({ theme }) => theme.media.tablet}px) {
    display: none;
  }
`;
