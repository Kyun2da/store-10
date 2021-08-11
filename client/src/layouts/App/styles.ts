import styled from 'styled-components';

export const RootWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.body};
  max-width: 1200px;
  margin: auto;
`;
