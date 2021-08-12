import styled from 'styled-components';

export const RootWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.body};
`;

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;
