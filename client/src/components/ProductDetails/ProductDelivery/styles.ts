import styled from 'styled-components';

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1.title {
    ${({ theme }) => theme.fontSize.l};
    ${({ theme }) => theme.fontWeight.l};
    margin: 3rem 0;
  }
`;

export const AlertMessage = styled.p`
  ${({ theme }) => theme.fontWeight.l};
  color: ${({ theme }) => theme.color.error};
`;
