import styled from 'styled-components';
import ModalLayout from '../ModalLayout';

export const MissionLayout = styled(ModalLayout)`
  text-align: center;
`;

export const MissionList = styled.ul`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  margin: 0 auto;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color['text-color']};
`;

export const Mission = styled.li`
  color: #c1c5c5;
  margin-bottom: 1rem;
  ${({ theme }) => theme.fontSize.l}
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  svg {
    width: 2em;
    height: 2em;
    stroke-width: 1.5px;
    stroke: #c1c5c5;
  }

  &.complete {
    color: ${({ theme }) => theme.color.primary};

    svg {
      stroke: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const MissionStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${({ theme }) => theme.fontSize.l}
  color: ${({ theme }) => theme.color['text-color']};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
