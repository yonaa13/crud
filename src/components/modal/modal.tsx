import  {FC} from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import {Props} from '../../interfaces/interface'
import {Container,P,Label} from './Modal.Styled'

export const Modal: FC<Props> = ({ id,click }) => {
  const { products } = useGlobalContext();
  const producto = products.filter(elem => elem.id === id)
  const prod = producto[0]
  return (
    <Container click={click}>
        <P> <Label>Nombre :</Label> {prod?.name}</P>
        <P><Label>Marca :</Label> {prod?.brand}</P>
        <P><Label>Precio :</Label> {prod?.price}</P>
        <P><Label>IdProducto :</Label> {prod?.id}</P>
      </Container>
  );
};
