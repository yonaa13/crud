import { FC, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { Props } from '../../interfaces/interface';
import { Container, Button } from './Modal.Styled';
import { InputModal } from '../InputModal/InputModal';

export const Modal: FC<Props> = ({ id, click }) => {
  const { products, setProducts } = useGlobalContext();
  const [producName, setproducName] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  
  const handleClick = () => {
    const updatePro = products.map(prod => {
      if (prod.id === id) {
        return {
          ...prod,
          name: producName ? producName : prod.name,
          brand: brand ? brand : prod.brand,
          price: price ? price : prod.price,
        };
      }
      return prod;
    });

    setProducts(updatePro);
  };
  return (
    <Container click={click}>
      <InputModal placeholder='NameProduct' setValue={setproducName} />
      <InputModal placeholder='Brand' setValue={setBrand} />
      <InputModal
        inputType={'Number'}
        placeholder='Price'
        setValue={setPrice}
      />
      <Button type='submit' onClick={handleClick}>
        SAVE
      </Button>
    </Container>
  );
};
