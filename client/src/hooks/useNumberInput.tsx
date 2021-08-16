import { useCallback, useState } from 'react';

const useNumberInput = (initalValue?: number) => {
  const [value, setValue] = useState(initalValue ?? 0);

  const handleClickOnPlus = useCallback(
    () => setValue((value) => value + 1),
    [value]
  );

  // TODO: 모든 NumberInput의 값을 1 이하로 관리하는 것이 없는지 확인 필요
  const handleClickOnMinus = useCallback(() => {
    if (value === 1) return;
    setValue((value) => value - 1);
  }, [value]);

  return [value, handleClickOnMinus, handleClickOnPlus] as const;
};

export default useNumberInput;
