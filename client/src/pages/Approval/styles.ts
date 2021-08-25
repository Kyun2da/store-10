import Checkbox from '@/components/Shared/Checkbox';
import styled from 'styled-components';

export const ApprovalContainer = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  display: flex;
  width: 60rem;
  flex-direction: column;
  text-align: center;
  margin: 4rem auto;

  h2 {
    margin-bottom: 2rem;
  }

  h5 {
    text-align: initial;
  }

  button {
    margin: 0 2rem;
  }
`;

export const ApprovalCheckBox = styled(Checkbox)`
  margin: 2rem 0;
`;

export const ApprovalBox = styled.div`
  color: ${({ theme }) => theme.color['text-color']};
  text-align: initial;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  white-space: pre;
  border: 1px solid ${({ theme }) => theme.color.line};
  height: 20rem;
  overflow-y: scroll;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
