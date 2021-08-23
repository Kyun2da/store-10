import styled from 'styled-components';

export const OrderSummaryWrapper = styled.section`
  margin-top: 3.5rem;
  width: 100%;
  button {
    width: 100%;
    margin-top: 2rem;
    min-height: 5rem;
  }
  position: sticky;
  position: -webkit-sticky;
  top: 8.5rem;
`;

export const OrderSummary = styled.dl`
  border: 1px solid ${({ theme }) => theme.color.body};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color['off-white']};
  padding: 1rem 2rem;
  overflow: hidden;

  h5 {
    padding-bottom: 1rem;
  }
`;

export const OrderSummaryRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  dt {
    ${({ theme }) => theme.fontSize.m}
    ${({ theme }) => theme.fontWeight.m}
  }
  dd {
    ${({ theme }) => theme.fontSize.m}
    ${({ theme }) => theme.fontWeight.l}
    &.red {
      color: ${({ theme }) => theme.color.error};
    }
  }

  &:last-child {
    margin: 3rem 0;
    dt {
      ${({ theme }) => theme.fontSize.m}
      ${({ theme }) => theme.fontWeight.l}
    }
    dd {
      ${({ theme }) => theme.fontSize.l}
      ${({ theme }) => theme.fontWeight.xl}
      color: ${({ theme }) => theme.color.primary}
    }
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;
