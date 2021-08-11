import React from 'react';
import * as S from './styles';

interface ITableProps {
  headers: {
    name: string;
    value: string;
  }[];
  items: Record<string, string | number>[];
}

const Table = ({ headers, items }: ITableProps) => {
  return (
    <S.Table>
      <thead>
        <S.TableRow className="table-header">
          {headers.map((col) => (
            <S.TableHeader key={col.value}>{col.name}</S.TableHeader>
          ))}
        </S.TableRow>
      </thead>

      <tbody>
        {items.map((item) => (
          <S.TableRow key={item.id}>
            {headers.map((col) => (
              <S.TableData key={col.value}>{item[col.value]}</S.TableData>
            ))}
          </S.TableRow>
        ))}
      </tbody>
    </S.Table>
  );
};

export default Table;
