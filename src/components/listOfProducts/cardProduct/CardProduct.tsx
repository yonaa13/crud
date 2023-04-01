import { FC, useState } from 'react';
import { type Prop } from '../cardProduct/interface';
import { Modal } from '../../modal/modal';
import { HiOutlineX } from 'react-icons/hi';
import { ContainerCard, Img, P, ContainerIcon } from './cardProduct.styled';
import { useGlobalContext } from '../../../context/GlobalContext';
export const CardProduct: FC<Prop> = ({
  id,
  name,
  brand,
  img,
  price,
  setValue,
}) => {
  const [ids, setId] = useState<number | undefined>(0);
  const [modal, setModal] = useState<boolean | undefined>(false);
  const { products, setProducts } = useGlobalContext();

  const getId = setValue;

  const handleClick = () => {
    setModal(!modal);
    setId(getId);
  };
  const deleteCard = () => {
    const deleteProduct = products.filter(elem => elem.id !== ids);
    setProducts(deleteProduct);
  };
  return (
    <>
      <ContainerCard onClick={() => handleClick()}>
        <Img src={img} />
        <ContainerIcon onClick={() => deleteCard()}>
          <HiOutlineX />
        </ContainerIcon>
        <P>Produc: {name}</P>
        <P>Brand: {brand}</P>
        <P>Price: ${price}</P>
        <Modal id={ids} click={modal} />
      </ContainerCard>
    </>
  );
};
