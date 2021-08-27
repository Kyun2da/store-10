import styled from 'styled-components';

export const OrderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  ${({ theme }) => theme.fontSize.m}
  @media(max-width: ${({ theme }) => theme.media.phone - 1}px) {
    ${({ theme }) => theme.fontSize.s}
  }

  button.selected {
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.xl};
  }
`;
