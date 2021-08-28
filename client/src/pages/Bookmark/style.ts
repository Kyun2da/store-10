import styled from 'styled-components';
import Title from '@/components/Shared/Title';
import Button from '@/components/Shared/Button';
import Checkbox from '@/components/Shared/Checkbox';
import Thung from '@/components/Thung';
import { Close2 } from '@/assets/svgs';

export const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookmarkTitle = styled(Title)`
  ${({ theme }) => theme.fontSize.l};
  font-family: 'BMDOHYEON', sans-serif;
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
  color: ${({ theme }) => theme.color['text-color']};
  background-color: ${({ theme }) => theme.color['reverse-text-color']};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export const BookmarkThung = styled(Thung)`
  width: 40rem;
  margin: auto;
`;

export const BookmarkClose = styled(Close2)`
  fill: ${({ theme }) => theme.color['text-color']};
`;
