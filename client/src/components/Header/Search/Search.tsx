import { SearchSVG } from '@/assets/svgs';
import useRecentSearch from '@/hooks/useRecentSearch';
import client from '@/lib/api/client';
import { searchRealTimeData } from '@/lib/api/product/searchData';
import { ISearchData } from '@/types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import SearchItem from './SearchItem';
import * as S from './styles';

type IProps = {
  toggleOpen: () => void;
};

const Search = ({ ...props }: IProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [recentItems, setRecentItems] = useRecentSearch();
  const [searchData, setSearchDatas] = useState<ISearchData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const productSearch = useCallback(async (searchText: string) => {
    const data = await searchRealTimeData(searchText);
    if (data.length) {
      setSearchDatas(data);
    }
  }, []);
  // 한글 엔터 2번방지
  const inputKeypressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code == 'Enter') setRecentItems(searchValue);
    },
    [searchValue, setRecentItems]
  );

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
      productSearch(e.currentTarget.value);
    },
    [productSearch]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <S.SearchWrapper>
        <S.SearchBackDrop onClick={props.toggleOpen}></S.SearchBackDrop>
        <S.SearchContents>
          <S.SearchInputWrap>
            <S.SearchInput
              onChange={inputChangeHandler}
              onKeyPress={inputKeypressHandler}
              type="text"
              label="Standard"
              name="search"
              _ref={inputRef}
              placeholder="검색"
            />
            <SearchSVG />
          </S.SearchInputWrap>
          <SearchItem
            searchValue={searchValue}
            recentItems={recentItems}
            searchData={searchData}
          />
        </S.SearchContents>
      </S.SearchWrapper>
    </>
  );
};

export default Search;
