import styled from 'styled-components';

export const MyReviews = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.m}
  ${({ theme }) => theme.fontWeight.s}
`;
