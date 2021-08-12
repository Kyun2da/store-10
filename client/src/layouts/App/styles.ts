import styled from 'styled-components';

export const RootWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.body};
`;

export const Container = styled.div`
  max-width: 1050px;
  margin: auto;
`;
