import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 220px;
`;

export const ContainerList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 911px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 709px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const H1 = styled.h1`
  margin: 0%;
  display: flex;
  justify-content: center;
  padding: 100px 0px 20px 0px;
  position: relative;
  color: white;
  text-shadow: #0d14cd 3px 2px 3px;
  border-bottom: 3px dashed #0d14cd;
`;
