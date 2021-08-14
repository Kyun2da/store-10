import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  VFC,
} from 'react';
import * as S from './styles';

interface ContextProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export interface TabContextProps {
  children?: React.ReactNode;
}

export const Context = createContext<ContextProps>({
  value: 0,
  setValue: () => {},
});

const TabContext: VFC<TabContextProps> = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <Context.Provider value={{ value, setValue }}>
      <S.Tab>{children}</S.Tab>
    </Context.Provider>
  );
};

export default TabContext;
