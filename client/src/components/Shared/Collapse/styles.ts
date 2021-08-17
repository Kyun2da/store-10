import styled from 'styled-components';

interface ICollapse {
  length: number;
  gaps?: string;
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
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ length, gaps }) =>
    gaps ? gaps : `repeat(${length}, 1fr)`};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  padding: 2rem;
  color: ${({ theme }) => theme.color['text-color']};
  cursor: pointer;

  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    opacity: 0.85;
  }
`;

export const CollapsePanel = styled.div`
  display: flex;
  height: 0;
  position: relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  overflow: hidden;

  &.active {
    display: flex;
    height: 100%;
    padding: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
  }
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
