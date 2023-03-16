import React, { FC } from 'react';
import { NavProp } from './interface';
import { Icon, Li, Ul, Container, PrductImput } from './navHome.styled';
import { useNavigate } from 'react-router-dom';

export const NavHome: FC<NavProp> = ({
  iconLefth,
  iconRigth,
  setValue,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Icon>{iconLefth}</Icon>
      </div>
      <PrductImput
        placeholder='Buscar'
        onChange={(e: { target: { value: string } }) =>
          setValue(e.target.value)
        }
      />
      <Ul>
        <Icon>{iconRigth}</Icon>
        <Li onClick={() => navigate('*')}>Cargar Producto</Li>
      </Ul>
    </Container>
  );
};
