import styled from 'styled-components';

export const LabelButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
  background: none;
  border: none;
  outline: none;
  ${({ theme }) => theme.fontSize.m};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 'none' : '0.4')};
  }
`;
