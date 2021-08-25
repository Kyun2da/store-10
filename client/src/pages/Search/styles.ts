import styled from 'styled-components';

export const SearchWrapper = styled.div`
  width: 95%;
  max-width: ${({ theme }) => theme.media.pc}px;
  margin: 0 auto;
`;

export const SearchHeader = styled.div`
  font-family: BMDOHYEON;
  ${({ theme }) => theme.fontSize.xl}
  color: ${({ theme }) => theme.color['text-color']};
  margin: 2rem 0;
`;
