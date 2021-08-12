import styled from 'styled-components';

export const RootWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.body};
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
