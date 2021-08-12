import { useCallback, useState } from 'react';

//최근 검색어 5개 가져오기
const useRecentSearch = (): [string[], (value: string) => void] => {
  const storage: string | null = localStorage.getItem('recentItems');
  const items = storage ? (JSON.parse(storage) as string[]) : [];

  const [recentItems, setRecentItems] = useState(items);

  const recentItemHandler = useCallback(
    (value: string) => {
      //동일한 검색어가 있을경우 return
      if (recentItems.includes(value)) return;
      const itemsArr = [value, ...recentItems.slice(0, 9)];
      localStorage.setItem('recentItems', JSON.stringify(itemsArr));
      setRecentItems(itemsArr);
    },
    [recentItems]
  );

  return [recentItems, recentItemHandler];
};

export default useRecentSearch;
