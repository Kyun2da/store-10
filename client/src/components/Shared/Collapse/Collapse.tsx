import { AnswerSVG, QuestionSVG } from '@/assets/svgs';
import React, { useEffect, useState } from 'react';
import * as S from './styles';

interface ICollapse {
  headers: {
    name: string;
    value: string;
  }[];
  items: Record<string, string | number>[];
  gaps?: string; // '1fr 2fr 1fr 1fr 1fr'
}

const Collapse = ({ headers, items, gaps }: ICollapse) => {
  const count = items.length;
  const [isActive, setIsActive] = useState<string[]>([]);

  const handleClickOnItem = (index: number) => {
    const nextState = new Array(count).fill(1).map((_, idx) => {
      return index === idx ? `collapse-item-${idx}` : '';
    });
    setIsActive(nextState);
  };

  useEffect(() => {
    const initialState = new Array(count).fill(1).map(() => {
      return ``;
    });
    setIsActive(initialState);
  }, [count]);

  console.log(isActive);

  return (
    <S.Collapse>
      <S.CollapseHeader gaps={gaps} length={headers.length}>
        {headers.map((header) => (
          <p key={header.value}>{header.name}</p>
        ))}
      </S.CollapseHeader>
      <S.CollapseBody>
        {items.map((item, idx) => (
          <>
            <S.CollaspeRow
              gaps={gaps}
              length={headers.length}
              key={item.id}
              onClick={() => handleClickOnItem(idx)}
            >
              {headers.map((header) => (
                <p key={header.value}>{item[header.value]}</p>
              ))}
            </S.CollaspeRow>
            <S.CollapsePanel
              className={
                isActive[idx] === `collapse-item-${idx}` ? 'active' : ''
              }
            >
              <S.CollapseDetails>
                <QuestionSVG />
                <p>{item.content}</p>
              </S.CollapseDetails>

              <S.CollapseDetails>
                <AnswerSVG />
                <p>
                  {item.answer
                    ? item.answer
                    : '답변 대기중입니다... 조금만 기다려주세요!'}
                </p>
              </S.CollapseDetails>
            </S.CollapsePanel>
          </>
        ))}
      </S.CollapseBody>
    </S.Collapse>
  );
};

export default Collapse;
