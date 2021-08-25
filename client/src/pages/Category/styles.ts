import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  width: 95%;
  max-width: 1050px;
  margin: 0 auto;
`;

export const CategoryHeader = styled.div`
  font-family: BMDOHYEON;
  ${({ theme }) => theme.fontSize.xl}
  color: ${({ theme }) => theme.color['text-color']};
  margin: 2rem 0;
`;

export const CardLoader = styled.div`
  background: red;
  width: 100%;
  height: 300px;
`;
