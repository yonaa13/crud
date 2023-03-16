import { createContext, useContext } from 'react'
import { Product } from '../mock/apiProduct'
import { GlobalContent } from './types'

export const GlobalContext = createContext<GlobalContent>({
  products:Product,
  setProducts:()=>Product
})

export const useGlobalContext = () => useContext(GlobalContext)
