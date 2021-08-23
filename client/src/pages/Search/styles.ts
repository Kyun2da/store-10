import styled from 'styled-components';
import Thung from '@/components/Thung';

export const SearchWrapper = styled.div`
  width: 95%;
  max-width: 1050px;
  margin: 0 auto;
`;

export const SearchHeader = styled.div`
  font-family: BMDOHYEON;
  ${({ theme }) => theme.fontSize.xl}
  color: ${({ theme }) => theme.color['text-color']};
  margin: 2rem 0;
`;
