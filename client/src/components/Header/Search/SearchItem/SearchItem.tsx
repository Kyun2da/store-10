import { wonFormat } from '@/utils/helper';
import { ISearchData } from '@/types';
import React from 'react';
import * as S from './style';
import { useHistory } from '@/lib/Router';
import { useCallback } from 'react';
import Card from '@/components/Card';

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
        />
      </div>
    ));

  return (
    <>
      {!!searchValue ? (
        <>
          <S.RecentTitle>Elastic Search</S.RecentTitle>
          {searchData && (
            <S.SearchItemWrap>
              <S.SearchItemWrapper>{renderProducts()}</S.SearchItemWrapper>
            </S.SearchItemWrap>
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
