import React, { FC } from 'react';
import { Props } from '../../../interfaces/interface';
import { ContainerCard, Img,P } from './cardProduct.styled';
export const CardProduct: FC<Props> = ({ name,brand, img,price }) => {
  
  return (
    <ContainerCard >
      <Img src={img} />
      <P>Produc: {name}</P>
      <P>Brand: {brand}</P>
      <P>Price: ${price}</P>
    </ContainerCard>
  );
};
