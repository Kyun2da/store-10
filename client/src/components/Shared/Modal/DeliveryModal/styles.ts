import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    padding-top: 2rem;
  }
  span {
    ${({ theme }) => theme.fontWeight.xl};
    ${({ theme }) => theme.fontSize.l};
    padding: 3rem;
    line-height: 3.2rem;
  }
`;
