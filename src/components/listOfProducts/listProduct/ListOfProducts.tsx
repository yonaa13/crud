import React, { useState } from 'react';
import { CardProduct } from '../cardProduct/CardProduct';
import { ContainerList } from './listOfProduct.styled';
import { FaProductHunt, RiChatNewFill } from 'react-icons/all';
import { useGlobalContext } from '../../../context/GlobalContext';
import { NavHome } from '../../home/NavHome';
export const ListOfProducts = () => {
  const { products } = useGlobalContext();
  const [inputData, setInputData] = useState('');
  let result = [];
  if (!inputData) {
    result = products;
  } else {
    result = products.filter(dato =>
      dato.name.toLowerCase().includes(inputData.toLocaleLowerCase())
    );
  }

  return (
    <ContainerList>
      <>
        <NavHome
          iconLefth={<FaProductHunt />}
          iconRigth={<RiChatNewFill />}
          setValue={setInputData}
          value={inputData}
        />
        {result.map(elem => {
          return (
            <CardProduct
              key={elem.id}
              img={elem.img}
              brand={elem.brand}
              name={elem.name}
              price={elem.price}
            />
          );
        })}
      </>
    </ContainerList>
  );
};
