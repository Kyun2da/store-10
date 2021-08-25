import styled from 'styled-components';

export const Notice = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 3rem;
  }
`;
