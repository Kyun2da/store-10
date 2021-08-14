import styled from 'styled-components';

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  color: ${({ theme }) => theme.color['text-color']};
  margin-bottom: 5rem;
`;

export const ProductThumbnail = styled.img`
  width: 40%;
  object-fit: cover;
`;

export const ProductOrder = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  h1.title {
    ${({ theme }) => theme.fontSize.xl};
    ${({ theme }) => theme.fontWeight.xl};
  }
`;

export const ProductDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductDetail = styled.div`
  display: flex;
  gap: 2rem;

  h3.detail-tag {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.l};
  }

  .detail-content {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};
  }
`;

export const OrderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.background};

  .product-name {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.s};
  }

  .price {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.l};
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

export const PriceBar = styled.div`
  display: flex;
  justify-content: space-between;

  .price-tag {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.l};
  }
  .price-sum {
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontSize.xxl};
    ${({ theme }) => theme.fontWeight.xl};
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  button {
    padding: 1.5rem 3rem;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 1rem;
    cursor: pointer;

    &.purchase {
      ${({ theme }) => theme.fontSize.l}
      ${({ theme }) => theme.fontWeight.xl}
    }

    svg {
      stroke: ${({ theme }) => theme.color['text-color']};
      color: ${({ theme }) => theme.color['text-color']};
    }

    &.cart svg {
      fill: ${({ theme }) => theme.color['text-color']};
    }

    &:hover {
      opacity: 0.75;
    }
  }
`;
