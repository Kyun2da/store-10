import React, { useCallback, useState } from 'react';
import { SearchSVG } from '@/assets/svgs';
import * as S from './styles';
import useRecentSearch from '@/hooks/useRecentSearch';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [recentItems, setRecentItems] = useRecentSearch();

  // 한글 엔터 2번방지
  const inputKeypressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code == 'Enter') setRecentItems(searchValue);
    },
    [searchValue, setRecentItems]
  );

  const inputHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
    },
    [setSearchValue]
  );

  return (
    <S.Search>
      <SearchSVG onClick={() => setRecentItems(searchValue)} />
      <input
        onInput={inputHandler}
        onKeyPress={inputKeypressHandler}
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      <S.SearchList className="search-list">
        {!!searchValue ? (
          <>
            <S.RecentTitle>Elastic Search</S.RecentTitle>
            <ul></ul>
          </>
        ) : (
          <>
            <S.RecentTitle>최근 검색어</S.RecentTitle>
            {recentItems && (
              <ul>
                {recentItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </S.SearchList>
    </S.Search>
  );
};

export default Search;
