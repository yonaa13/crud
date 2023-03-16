import React from 'react';
import { ContainerHome } from '../components/home/navHome.styled';
import { ListOfProducts } from '../components/listOfProducts/listProduct/ListOfProducts';
export const Home = () => {
  
  return (
    <ContainerHome>  
      <ListOfProducts />
    </ContainerHome>
  );
};
