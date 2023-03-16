import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import {
  Container,
  Input,
  H1,
  P,
} from '../components/CreateProduct/createProduct.styled';
import { InputProduct } from '../components/CreateProduct/InputProduct';
import { FaPencilAlt } from 'react-icons/fa';

export const CreateProduct = () => {
  const [name, setName] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [file, setFile] = useState<string>('');
  const { products,setProducts } = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = () => {
    const newProduct = {
      id: Math.floor(Math.random() * 999999),
      img: file,
      name: name.toLowerCase(),
      brand: brand,
      price: price,
    };
    products.push(newProduct);
setProducts([newProduct])
  };
  return (
    <Container>
      <H1>Introduce el nuevo producto</H1>
      <InputProduct
        icon={<FaPencilAlt />}
        label={'Img'}
        inputType={'file'}
        setValue={setFile}
      />
      <InputProduct
        icon={<FaPencilAlt />}
        label={'Name'}
        placeholder={'Introduce el nombre'}
        setValue={setName}
      />
      <InputProduct
        icon={<FaPencilAlt />}
        label={'Brand'}
        placeholder={'Introduce la Marca'}
        setValue={setBrand}
      />

      <InputProduct
        icon={<FaPencilAlt />}
        label={'Price'}
        inputType={'number'}
        placeholder={'Introduce el precio'}
        setValue={setPrice}
      />

      <Input type='submit' onClick={handleClick} />
      <P onClick={() => navigate('/')}>IrAHome</P>
    </Container>
  );
};
