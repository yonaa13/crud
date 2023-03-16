import styled from 'styled-components';

export const ContainerList = styled.div`
background-image:url(http://localhost:3000/productosLimpieza.jpg );
  background-size:cover;
  width:100%;
  height:100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  
  @media  (max-width:670px  ) {
    grid-template-columns:1fr 1fr
  }
  @media  (max-width:535px  ) {
    grid-template-columns:1fr
  }
`;
