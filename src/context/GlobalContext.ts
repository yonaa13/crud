import { createContext, useContext } from 'react'
import { GlobalContent } from './types'

export const GlobalContext = createContext<GlobalContent>({
  products:[],
  setProducts:()=>{}
})

export const useGlobalContext = () => useContext(GlobalContext)
