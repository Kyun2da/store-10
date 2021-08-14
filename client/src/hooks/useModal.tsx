import { useState } from 'react';

export const useModal = (defaultState: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleModal };
};
