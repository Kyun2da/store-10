import { useCallback, useState } from 'react';

const usePagination = (limit: number) => {
  const [offset, setOffset] = useState(0);

  const handleOnClickPage = useCallback(
    (idx: number) => {
      setOffset(+idx * limit);
    },
    [limit]
  );

  return [offset, handleOnClickPage] as const;
};

export default usePagination;
