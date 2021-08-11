import styled from 'styled-components';

export const Table = styled.table`
  width: 90%;
  margin: 120px auto;
  border-radius: 0.4em;
  overflow: hidden;
  ${({ theme }) => theme.fontSize.s};
  ${({ theme }) => theme.fontWeight.s};
  border-collapse: collapse;
  font-size: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TableRow = styled.tr`
  &.table-header {
    color: ${({ theme }) => theme.color['off-white']};
    background-color: ${({ theme }) => theme.color.primary};
  }
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }
`;
export const TableHeader = styled.th`
  padding: 1.2rem;
`;

export const TableData = styled.td`
  text-align: center;
  padding: 1.2rem;
  ${({ theme }) => theme.fontWeight.s};
`;
