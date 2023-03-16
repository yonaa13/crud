import styled from 'styled-components';

export const ContainerList = styled.div`
  
  width:100%;
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
