import { AnswerSVG, QuestionSVG } from '@/assets/svgs';
import React, { createRef, Fragment, useEffect, useState } from 'react';
import * as S from './styles';

interface ICollapse {
  headers: {
    name: string;
    value: string;
  }[];
  items: Record<string, string | number>[];
  gaps?: string; // '1fr 2fr 1fr 1fr 1fr'
  forNotice?: boolean; // only for Notice page
}

const Collapse = ({ headers, items, gaps, forNotice }: ICollapse) => {
  const count = items.length;
  const initialState = new Array(count).fill(1).map(() => ``);
  const [isActive, setIsActive] = useState<string[]>(initialState);
  const [height, setHeight] = useState(0);
  const [refs, setRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);

  const handleClickOnItem = (index: number) => {
    const nextState = new Array(count).fill(1).map((_, idx) => {
      return index === idx ? `collapse-item-${idx}` : '';
    });

    isActive[index] ? setIsActive(initialState) : setIsActive(nextState);
    setHeight(refs[index].current?.clientHeight ?? 0);
  };

  useEffect(() => {
    setRefs((refs) =>
      Array(count)
        .fill(0)
        .map((_, i) => refs[i] || createRef())
    );
  }, [count]);

  return (
    <S.Collapse>
      <S.CollapseHeader gaps={gaps} length={headers.length}>
        {headers.map((header) => (
          <p key={header.value}>{header.name}</p>
        ))}
      </S.CollapseHeader>
      <S.CollapseBody>
        {items.map((item, idx) => (
          <Fragment key={item.id}>
            <S.CollaspeRow
              gaps={gaps}
              length={headers.length}
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
              height={height}
            >
              {forNotice ? (
                <S.CollapseContent ref={refs[idx]}>
                  <S.CollapseDetails>
                    <pre>{item.content}</pre>
                  </S.CollapseDetails>
                </S.CollapseContent>
              ) : (
                <S.CollapseContent ref={refs[idx]}>
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
                </S.CollapseContent>
              )}
            </S.CollapsePanel>
          </Fragment>
        ))}
      </S.CollapseBody>
    </S.Collapse>
  );
};

export default Collapse;
