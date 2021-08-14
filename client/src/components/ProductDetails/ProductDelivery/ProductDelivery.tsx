import React from 'react';
import * as S from './styles';

const ProductDelivery = () => {
  return (
    <S.DeliveryInfo>
      <h1 className="title">배송안내</h1>
      <ul className="delivery-notice">
        <li className="notice-item">배송사 : CJ 대한통운</li>
        <li className="notice-item">
          배송비 : 2,500원 (3만원 이상 구매 시 무료배송)
        </li>
        <li className="notice-item">
          배송기간 : 오후 2시 이전 결제완료시 당일 출고 (영업일 기준)
        </li>
      </ul>
      <S.AlertMessage>
        단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수
        있는 점 양해 부탁드립니다.
      </S.AlertMessage>
      <S.AlertMessage>
        도서, 산간 일부지역은 배송비가 추가될 수 있습니다.{' '}
      </S.AlertMessage>
    </S.DeliveryInfo>
  );
};

export default ProductDelivery;
