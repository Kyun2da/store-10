import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  h1.title {
    ${({ theme }) => theme.fontSize.l};
    ${({ theme }) => theme.fontWeight.l};
    margin: 3rem 0;
  }
`;
