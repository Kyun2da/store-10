import styled from 'styled-components';

export const OrderContainer = styled.section`
  background-color: ${({ theme }) => theme.color['off-white']};
  display: flex;
  width: 100%;
  padding-top: 6rem;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    flex-direction: column;
  }
  > div {
    flex: 1;
  }
  border-radius: 1.2rem;
`;

export const OrderAside = styled.aside`
  position: relative;
  flex: 0 1 38.5rem;
  padding-right: 2rem;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    display: none;
  }
`;

export const OrderFooter = styled.footer`
  padding: 0 2rem 2rem 2rem;
  div {
    margin-top: 0;
  }
  @media (min-width: ${({ theme }) => theme.media.tablet}px) {
    display: none;
  }
`;

export const Order = styled.div`
  flex: 1;
  padding: 3.2rem;
`;

export const OrderHeader = styled.header``;
