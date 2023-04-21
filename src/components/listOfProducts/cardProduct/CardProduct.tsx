import { FC, useState } from 'react';
import { type Prop } from '../cardProduct/interface';
import { Modal } from '../../modal/modal';
import { HiOutlineX } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import {
  ContainerCard,
  Img,
  P,
  ContainerIconDelete,
  ContainerIconEdit,
} from './cardProduct.styled';
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

  const deleteCard = () => {
    const deleteProduct = products.filter(elem => elem.id !== ids);
    setProducts(deleteProduct);
  };
  const editCard = () => {
    setModal(!modal);
    setId(getId);
  };
  return (
    <>
      <ContainerCard>
        <Img src={img} />
        <ContainerIconDelete onClick={() => deleteCard()}>
          <HiOutlineX />
        </ContainerIconDelete>
        <ContainerIconEdit onClick={() => editCard()}>
          <FiEdit />
        </ContainerIconEdit>
        <P>Produc: {name}</P>
        <P>Brand: {brand}</P>
        <P>Price: ${price}</P>
        <Modal id={ids} click={modal} />
      </ContainerCard>
    </>
  );
};
