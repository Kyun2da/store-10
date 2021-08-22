import styled from 'styled-components';
import Checkbox from '@/components/Shared/Checkbox';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';

export const PostcodeWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  > div {
    flex: 1;
    margin-left: 2rem;
    > input {
      margin-top: 0;
    }
  }

  button {
    border-radius: 10px;
    ${({ theme }) => theme.fontSize.m}
  }
`;

export const DefaultAddrssCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.color['text-color']};
  margin-right: auto;
`;

export const DuamPostWrapper = styled(ModalLayout)``;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border-radius: 0.4rem;
  }
  &:nth-child(2) {
    margin-top: 1.2rem;
  }
  &:nth-child(3) {
    margin-top: 1.2rem;
  }
  &:nth-child(4) {
    margin-top: 0.8rem;
  }
  &:nth-child(5) {
    margin-top: 0.8rem;
  }
  &:nth-child(6) {
    margin-top: 1.5rem;
  }
`;

export const FormRowName = styled.span`
  flex: 0 0 8rem;
  color: ${({ theme }) => theme.color['text-color']};
  ${({ theme }) => theme.fontWeight.m};
`;

export const FormFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding-top: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.color['border-gray']};
`;
