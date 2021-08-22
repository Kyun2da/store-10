import React, { Dispatch } from 'react';
import * as S from './styles';
import {
  HeartSVG as HeartButton,
  CartSVG as ShoppingCart,
} from '@/assets/svgs';
import { Link } from '@/lib/Router';
import { wonFormat } from '@/utils/helper';

interface CardProps {
  bgColor: 'error' | 'primary'; // category 식으로 리스트화 (enum 등..) 필요
  linkId: number;
  discount?: number;
  src?: string;
  title: string;
  price: number;
  bottomDisplay?: boolean;
  checkBoxDisplay?: boolean;
  setCheckedList?: Dispatch<number[]>;
  checkedList?: number[];
}

const Card = ({
  bgColor,
  linkId,
  discount,
  src,
  title,
  price,
  bottomDisplay = true,
  checkBoxDisplay = false,
  setCheckedList,
  checkedList,
}: CardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('a 링크 이동 이벤트를 막자요');
  };

  const isChecked = !!checkedList?.find((checkedId) => checkedId === linkId);

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && setCheckedList && checkedList) {
      setCheckedList([...checkedList, linkId]);
    } else if (setCheckedList && checkedList) {
      setCheckedList(checkedList.filter((chekcedId) => chekcedId !== linkId));
    }
  };

  return (
    <Link to={`/detail/${linkId}`}>
      <S.Card>
        <S.Liner bgColor={bgColor} />
        <S.ThumbnailWrapper>
          {!checkBoxDisplay || (
            <S.CardCheckbox onChange={onChangeCheckbox} checked={isChecked} />
          )}
          {discount && <S.NameTag>{discount}%</S.NameTag>}
          <img src={src} alt="상품 섬네일 이미지" />
          {!bottomDisplay || (
            <S.BottomBar onClick={handleClick}>
              <S.ButtonArea>
                <HeartButton witdh={24} height={24} />
              </S.ButtonArea>
              <S.ButtonArea>
                <ShoppingCart witdh={24} height={24} />
              </S.ButtonArea>
            </S.BottomBar>
          )}
        </S.ThumbnailWrapper>

        <S.ProductDetails>
          <h1 className="title">{title}</h1>
          {!bottomDisplay || (
            <span className="price-tag">{wonFormat(price)}</span>
          )}
        </S.ProductDetails>
      </S.Card>
    </Link>
  );
};

export default Card;
