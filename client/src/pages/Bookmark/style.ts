import styled from 'styled-components';
import Title from '@/components/Shared/Title';
import Button from '@/components/Shared/Button';
import Checkbox from '@/components/Shared/Checkbox';
import Thung from '@/components/Thung';

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

export const AllCheckBox = styled(Checkbox)`
  width: 12rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
  border: none;
  line-height: inherit;
  justify-content: space-between;
  ${({ theme }) => theme.fontSize.m};
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #ececec;
  }
`;

export const BookmarkThung = styled(Thung)`
  width: 40rem;
  margin: auto;
`;
