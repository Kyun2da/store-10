import Card from '@/components/Card';
import CardWrapper from '@/components/CardWrapper';
import { notify } from '@/components/Shared/Toastify';
import Thung from '@/components/Thung';
import {
  useDeleteDetailBookmark,
  useGetDetailBookmarkProducts,
} from '@/hooks/queries/bookmark';
import { Redirect } from '@/lib/Router';
import { userState } from '@/recoil/user';
import { IBookmarkProduct } from '@/types';
import React, { Dispatch, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

const renderProducts = (
  isLoading: boolean,
  data: IBookmarkProduct[] | undefined,
  checkBoxDisplay: boolean,
  setCheckedList: Dispatch<number[]>,
  checkedList: number[]
) => {
  if (isLoading || !data) {
    return <div></div>;
  }

  return data.map((product: IBookmarkProduct) => (
    <Card
      key={product.productId}
      linkId={product.productId}
      bgColor="primary"
      src={product.image}
      title={product.title}
      price={product.price}
      bottomDisplay={false}
      checkBoxDisplay={checkBoxDisplay}
      setCheckedList={setCheckedList}
      checkedList={checkedList}
    />
  ));
};

const Bookmark = () => {
  const [isEdit, setIsEdit] = useState(true);
  const { isLoading, data } = useGetDetailBookmarkProducts();
  const { mutate } = useDeleteDetailBookmark();
  const [user] = useRecoilState(userState);
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const toggleIsEdit = (val: boolean) => {
    setIsEdit(val);
  };

  const removeBookmarkItems = useCallback(() => {
    if (checkedList.length === 0) {
      notify('error', '삭제할 상품을 한개 이상 선택해주세요!');
    } else {
      mutate(checkedList);
      setCheckedList([]);
    }
  }, [checkedList, mutate]);

  if (!user) return <Redirect to="/" />;

  return (
    <S.BookmarkContainer>
      <S.BookmarkTitle level={3}>찜 목록</S.BookmarkTitle>
      <S.ButtonContainer>
        {data?.length ? (
          isEdit ? (
            <S.EditButton
              type="button"
              color="primary"
              size="Small"
              onClick={() => {
                toggleIsEdit(false);
              }}
            >
              편집
            </S.EditButton>
          ) : (
            <>
              <S.EditButton
                type="button"
                color="red"
                size="Small"
                onClick={removeBookmarkItems}
              >
                삭제
              </S.EditButton>
              <S.EditButton
                type="button"
                color="primary"
                size="Small"
                onClick={() => {
                  toggleIsEdit(true);
                }}
              >
                취소
              </S.EditButton>
            </>
          )
        ) : null}
      </S.ButtonContainer>
      <S.CardContainer>
        {data?.length ? (
          <CardWrapper col={4}>
            {renderProducts(
              isLoading,
              data,
              !isEdit,
              setCheckedList,
              checkedList
            )}
          </CardWrapper>
        ) : (
          <Thung title="찜한 상품이 없습니다! 맘에 드는 상품을 찜해보세요." />
        )}
      </S.CardContainer>
    </S.BookmarkContainer>
  );
};

export default Bookmark;
