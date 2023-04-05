import React, { useState } from 'react';
import { Props } from '../interfaces/interface';
import { Product } from '../mock/apiProduct'
import { GlobalContext } from './GlobalContext';
export const ContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Props[]>(Product);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
