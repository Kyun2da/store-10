import styled from 'styled-components';
import Title from '@/components/Shared/Title';
import Button from '@/components/Shared/Button';

export const BookmarkContainer = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  display: flex;
  flex-direction: column;
  max-width: 1050px;
  width: 100%;
  margin: 5rem auto;
`;

export const BookmarkTitle = styled(Title)`
  margin-bottom: 5rem;
  text-align: center;
`;

export const CardContainer = styled.div`
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditButton = styled(Button)`
  width: 8.5rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
  border: none;
  line-height: inherit;
  justify-content: space-between;
  ${({ theme }) => theme.fontSize.m};

  &.red {
    color: ${({ theme }) => theme.color.error};
  }
`;
