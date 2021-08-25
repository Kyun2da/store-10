import styled from 'styled-components';

interface ICollapse {
  length: number;
  gaps?: string;
}

interface ICollapsePanel {
  height: number;
}

export const Collapse = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.4em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  user-select: none;
`;

export const CollapseHeader = styled.div<ICollapse>`
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ length, gaps }) =>
    gaps ? gaps : `repeat(${length}, 1fr)`};

  background-color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};
  color: #fff;
  padding: 2rem;
`;

export const CollapseBody = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};
`;

export const CollaspeRow = styled.div<ICollapse>`
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ length, gaps }) =>
    gaps ? gaps : `repeat(${length}, 1fr)`};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  padding: 2rem;
  color: ${({ theme }) => theme.color['text-color']};
  cursor: pointer;
  overflow: hidden;

  &.lock::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
    opacity: 0.9;
  }

  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    opacity: 0.85;
  }
`;

export const CollapseSubTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CollapsePanel = styled.div<ICollapsePanel>`
  display: flex;
  height: 0;
  position: relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  overflow: hidden;
  transition: height 0.25s ease-in-out;

  &.active {
    height: ${({ height }) => height ?? 0}px;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
  }
`;

export const CollapseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const CollapseDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  color: ${({ theme }) => theme.color['text-color']};

  svg {
    stroke: ${({ theme }) => theme.color['text-color']};
  }

  p {
    flex: 1;
  }

  pre {
    white-space: pre-wrap;
  }

  & + & {
    margin-top: 2rem;
  }
`;

export const Status = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StatusPoint = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;

  &.pending {
    background-color: ${({ theme }) => theme.color.placeholder};
  }

  &.completed {
    background-color: ${({ theme }) => theme.color.primary3};
  }
`;
