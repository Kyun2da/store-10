import { ISearchData } from '@/types';
import React, { useEffect } from 'react';
import * as S from './style';
import { useCallback } from 'react';
import Card from '@/components/Card';
import { useRecoilState } from 'recoil';
import { useGetBookmarkIds } from '@/hooks/queries/bookmark';
import { userState } from '@/recoil/user';

type Prop = {
  searchValue: string;
  recentItems: string[];
  searchData: ISearchData[];
  toggleOpen: () => void;
  addRecentSearch: (value: string) => void;
};

const SearchItem = ({ ...props }: Prop) => {
  const { searchValue, toggleOpen, addRecentSearch, recentItems, searchData } =
    props;
  const [user] = useRecoilState(userState);
  const { data: bookmarkIdList, remove } = useGetBookmarkIds(!!user);

  useEffect(() => {
    if (!user) {
      remove();
    }
  }, [user, remove]);

  const selectItem = useCallback(() => {
    toggleOpen();
    addRecentSearch(searchValue);
  }, [addRecentSearch, searchValue, toggleOpen]);

  const renderProducts = () =>
    searchData.map((product: ISearchData) => (
      <div key={'search_' + product.id} onClick={selectItem}>
        <Card
          linkId={product.id}
          discount={product.discount}
          bgColor="primary"
          src={product.image}
          price={product.price}
          title={product.title}
          bookmarkList={bookmarkIdList}
        />
      </div>
    ));

  return (
    <>
      {!!searchValue ? (
        <>
          <S.RecentTitle>Elastic Search</S.RecentTitle>
          {searchData && (
            <S.SearchItemWrapper>{renderProducts()}</S.SearchItemWrapper>
          )}
        </>
      ) : (
        <>
          <S.RecentTitle>최근 검색어</S.RecentTitle>
          {recentItems && (
            <S.RecentSearchUl>
              {recentItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </S.RecentSearchUl>
          )}
        </>
      )}
    </>
  );
};

export default SearchItem;
