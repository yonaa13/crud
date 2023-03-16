import React, { useState } from 'react'
import { Props } from "./interface";
import { GlobalContext } from './GlobalContext'
export const ContextProvider = ({children}:any) => {
  const [products, setProducts] = useState<Props[]>([])
 
  return (
    <GlobalContext.Provider value={{
      products,
      setProducts
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
