import React from 'react';
import * as S from '../styles';
import { HeartSVG, CartSVG } from '@/assets/svgs';
import { NumberInput } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import useNumberInput from '@/hooks/useNumberInput';
import wonFormat from '@/utils/wonFormat';
import { usePostCart } from '@/hooks/queries/cart';
import { useGetProductById } from '@/hooks/queries/product';
import { useParams } from '@/lib/Router';

const ProductInfo = () => {
  const { id } = useParams().params;

  const { data } = useGetProductById(
    (id as number) < 60000 ? 66310 : (id as number) // 임시조치입니다 -- 신경 쓰지 마세효
  );

  const { success, message, result } = data ?? {};

  const [value, handleClickOnMinus, handleClickOnPlus] = useNumberInput(1);
  const { mutate } = usePostCart();

  const onClickCart = () => {
    mutate({
      count: value,
      // TODO: 데이터 연동 후 임시 ID 삭제
      productId: 66310,
    });
  };

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요
  if (!success) {
    return <div>{message}</div>;
  }

  if (result === undefined) {
    return null;
  }

  const { title, price } = result.details;
  const thumbnail = result.thumbnails.filter(
    (thumb) => thumb.type === 'detail'
  );
  console.log(result.thumbnails);

  return (
    <S.ProductInfo>
      <S.ProductThumbnail
        src={`https:` + thumbnail[0].url}
        alt="상품 섬네일 이미지"
      />
      <S.ProductOrder>
        <Title level={3}>{title}</Title>
        <S.ProductDetailArea>
          <S.ProductDetail>
            <Title level={5}>판매가격</Title>
            <span className="detail-content">{wonFormat(price)}</span>
          </S.ProductDetail>
          <S.ProductDetail>
            <Title level={5}>배송정보</Title>
            <span className="detail-content">
              2,500원 (3만원 이상 구매시 무료)
            </span>
          </S.ProductDetail>
          <S.ProductDetail>
            <Title level={5}>배송마감</Title>
            <span className="detail-content">오후 2시 당일배송마감</span>
          </S.ProductDetail>
        </S.ProductDetailArea>

        <S.OrderBar>
          <p className="product-name">{title}</p>
          <NumberInput
            type="number"
            name="price-count"
            min={1}
            value={value}
            handleClickOnMinus={handleClickOnMinus}
            handleClickOnPlus={handleClickOnPlus}
          />
          <p className="price">{wonFormat(price)}</p>
        </S.OrderBar>

        <S.Divider />

        <S.PriceBar>
          <Title level={5}>총 합계금액</Title>
          <span className="price-sum">{wonFormat(+price * value)}</span>
        </S.PriceBar>

        {/* LINK 이동 및 버튼 클릭 핸들러 구현해야함 */}
        <S.ButtonArea>
          <button className="heart">
            <HeartSVG width={25} height={25} />
          </button>
          <button onClick={onClickCart} className="cart">
            <CartSVG width={25} height={25} />
          </button>
          <button className="purchase">바로구매</button>
        </S.ButtonArea>
      </S.ProductOrder>
    </S.ProductInfo>
  );
};

export default ProductInfo;
