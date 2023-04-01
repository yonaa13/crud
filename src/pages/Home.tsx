import { ContainerHome } from '../components/home/navHome.styled';
import { ListOfProducts } from '../components/listOfProducts/listProduct/ListOfProducts';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Home = () => {
  
  return (
    <ContainerHome> 
      <ListOfProducts /> 
    </ContainerHome>
  );
};
