import { wonFormat } from '@/utils/helper';
import { ISearchData } from '@/types';
import React from 'react';
import * as S from './style';
import { useHistory } from '@/lib/Router';
import { useCallback } from 'react';

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
  const { historyPush } = useHistory();
  const selectItem = useCallback(
    (id: number) => {
      toggleOpen();
      addRecentSearch(searchValue);
      historyPush(`/detail/${id}`);
    },
    [searchValue]
  );

  return (
    <>
      {!!searchValue ? (
        <>
          <S.RecentTitle>Elastic Search</S.RecentTitle>
          {searchData && (
            <S.SearchItemWrap>
              <S.SearchItemWrapper>
                {searchData.map((item, _) => (
                  <S.SearchItemList key={'search_' + item['id']}>
                    <S.SearchItem onClick={() => selectItem(item['id'])}>
                      <img src={item['image']} alt="search_image" />
                      <S.SearchItemInfo>
                        <S.SearchItemTitle>{item['title']}</S.SearchItemTitle>
                        <S.SearchItemPrice>
                          {wonFormat(item['price'])}
                        </S.SearchItemPrice>
                      </S.SearchItemInfo>
                    </S.SearchItem>
                  </S.SearchItemList>
                ))}
              </S.SearchItemWrapper>
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
