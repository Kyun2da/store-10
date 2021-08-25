import styled from 'styled-components';

export const MyQuestions = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};
  color: ${({ theme }) => theme.color['text-color']};
`;
