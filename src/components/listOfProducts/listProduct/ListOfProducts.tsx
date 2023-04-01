import { useState } from 'react';
import { CardProduct } from '../cardProduct/CardProduct';
import { ContainerList, H1 } from './listOfProduct.styled';
import { RiChatNewFill } from 'react-icons/ri';
import { FaProductHunt } from 'react-icons/fa';
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
      dato.name?.toLowerCase().includes(inputData.toLocaleLowerCase())
    );
  }

  return (
    <>
      <NavHome
        iconLefth={<FaProductHunt />}
        iconRigth={<RiChatNewFill />}
        setValue={setInputData}
        value={inputData}
      />
      <H1>Lista de Productos</H1>
      <ContainerList>
        {result.map(elem => {
          return (
            <CardProduct
              setValue={elem.id}
              id={elem.id}
              key={elem.id}
              img={elem.img}
              brand={elem.brand}
              name={elem.name}
              price={elem.price}
            />
          );
        })}
      </ContainerList>
    </>
  );
};
