import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import * as S from './styles';

interface IPagination {
  count: number;
  handleOnClickPage: (idx: number) => void;
}

const Pagination = ({ count, handleOnClickPage }: IPagination) => {
  const pages = new Array(count).fill('');
  const [selected, setSelected] = useState(0);

  const handleOnClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const idx = target.dataset.idx;

    if (idx) {
      setSelected(+idx);
      handleOnClickPage(+idx);
    }
  };

  return (
    <S.Pagination>
      {pages.map((_, idx) => (
        <S.EachPage
          onClick={(e) => handleOnClick(e)}
          className={selected === idx ? 'selected' : ''}
          data-idx={idx}
          key={nanoid()}
        >
          {idx + 1}
        </S.EachPage>
      ))}
    </S.Pagination>
  );
};

export default Pagination;
