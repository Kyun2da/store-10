import styled from 'styled-components';

export const Banner = styled.div`
  padding: 8rem;
  text-align: center;
  ${({ theme }) => theme.fontSize.xxl};
  ${({ theme }) => theme.fontWeight.s};
  background-color: ${({ theme }) => theme.color.body};
  color: ${({ theme }) => theme.color['text-color']};
  border: 1px solid ${({ theme }) => theme.color.line};

  p {
    ${({ theme }) => theme.fontSize.m};
  }
`;
