import styled from 'styled-components';

export const Error = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  font-family: 'BMDOHYEON', sans-serif;

  .error-text {
    ${({ theme }) => theme.fontSize.xl};
    ${({ theme }) => theme.fontWeight.xl};
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 2rem;
`;
