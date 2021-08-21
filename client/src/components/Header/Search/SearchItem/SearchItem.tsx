import { wonFormat } from '@/utils/helper';
import { ISearchData } from '@/types';
import * as React from 'react';
import * as S from './style';

type Prop = {
  searchValue: string;
  recentItems: string[];
  searchData: ISearchData[];
};

const SearchItem = ({ ...props }: Prop) => {
  const { searchValue, recentItems, searchData } = props;
  return (
    <>
      {!!searchValue ? (
        <>
          <S.RecentTitle>Elastic Search</S.RecentTitle>
          {searchData && (
            <S.SearchItemWrap>
              <S.SearchItemWrapper>
                {searchData.map((item, _) => (
                  <S.SearchItemList key={item['id']}>
                    <S.SearchItem>
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
