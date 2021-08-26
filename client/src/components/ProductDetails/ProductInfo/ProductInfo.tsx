import React, { useCallback } from 'react';
import * as S from '../styles';
import { HeartSVG, CartSVG } from '@/assets/svgs';
import { NumberInput } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import useNumberInput from '@/hooks/useNumberInput';
import { calculateDiscount, wonFormat } from '@/utils/helper';
import { usePostCart } from '@/hooks/queries/cart';
import { useGetProductById } from '@/hooks/queries/product';
import { useParams } from '@/lib/Router';
import thumbnailsParser from '@/utils/thumbnailsParser';
import ProductThumbnails from './../ProductThumbnails/ProductThumbnails';
import { usePostOrder } from '@/hooks/queries/order';
import { useRecoilValue } from 'recoil';
import { userState } from '@/recoil/user';
import { notify } from '@/components/Shared/Toastify';
import {
  useAddBookmark,
  useDeleteBookmark,
  useGetBookmarkIds,
} from '@/hooks/queries/bookmark';
import { ShoppingCartModal } from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';

const ProductInfo = () => {
  const { id } = useParams().params;

  const { data, isLoading, error } = useGetProductById(id);
  const { mutate: cartMutate } = usePostCart();
  const { mutate: orderMutate } = usePostOrder();
  const user = useRecoilValue(userState);
  const { mutate: addMutate } = useAddBookmark();
  const { mutate: deleteMutate } = useDeleteBookmark();
  const [openModal, toggleModal] = useModal(false);

  const [value, handleOnChnage, handleClickOnMinus, handleClickOnPlus] =
    useNumberInput(1);
  const onClickCart = () => {
    cartMutate(
      {
        count: value,
        productId: id,
      },
      {
        onSuccess() {
          toggleModal();
        },
      }
    );
  };

  const { data: bookmarkIdList } = useGetBookmarkIds(!!user);

  const isHeartChecked = !!bookmarkIdList?.find(
    (checkedId) => checkedId === Number(id)
  );

  const heartBtnOnClick = useCallback(() => {
    if (!user) notify('error', '로그인이 필요합니다!');
    else if (isHeartChecked) {
      deleteMutate([Number(id)]);
    } else {
      addMutate(Number(id));
    }
  }, [addMutate, deleteMutate, isHeartChecked, id, user]);

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요~
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !data) {
    return <div>loading</div>;
  }

  const { details, thumbnails } = data;
  const { title, price, discount } = details;
  const [thumbDetails, thumbOrigins, thumbThumbnails] =
    thumbnailsParser(thumbnails);

  const realPrice = calculateDiscount({ price, discount });

  return (
    <S.ProductInfo>
      <ProductThumbnails
        thumbDetails={thumbDetails}
        thumbOrigins={thumbOrigins}
        thumbThumbnails={thumbThumbnails}
      />
      <S.ProductOrder>
        <Title level={3}>{title}</Title>
        <S.ProductDetailArea>
          <S.ProductDetail>
            <Title level={5}>판매가격</Title>
            {!!discount && <span className="price original">{price}원 </span>}
            <span className="detail-content">{wonFormat(realPrice)}</span>
            {!!discount && (
              <span className="price discount">{discount}% 할인</span>
            )}
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
            handleOnChnage={handleOnChnage}
            value={value}
            handleClickOnMinus={handleClickOnMinus}
            handleClickOnPlus={handleClickOnPlus}
          />
          <p className="price">{wonFormat(realPrice)}</p>
        </S.OrderBar>

        <S.Divider />

        <S.PriceBar>
          <Title level={5}>총 합계금액</Title>
          <span className="price-sum">{wonFormat(realPrice * value)}</span>
        </S.PriceBar>

        {/* LINK 이동 및 버튼 클릭 핸들러 구현해야함 */}
        <S.ButtonArea>
          <button className="heart" onClick={heartBtnOnClick}>
            <HeartSVG
              width={25}
              height={25}
              fill={isHeartChecked ? 'red' : 'none'}
            />
          </button>
          <button onClick={onClickCart} className="cart">
            <CartSVG width={25} height={25} />
          </button>
          <button
            className="purchase"
            onClick={() =>
              orderMutate({
                products: [{ id: +id, count: value }],
                addressId: null,
                deliveryRequestMessage: '',
                status: 'created',
              })
            }
          >
            바로구매
          </button>
        </S.ButtonArea>
      </S.ProductOrder>
      {openModal && <ShoppingCartModal toggleModal={toggleModal} />}
    </S.ProductInfo>
  );
};

export default ProductInfo;
