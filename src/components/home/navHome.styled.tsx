import styled from 'styled-components';

export const Container = styled.div`
  background-color: #124e9b;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  width: 100%;
  position: fixed;
  z-index: 1000;
`;
export const ContainerHome = styled.div`
  background-image: url(http://localhost:3000/productosLimpieza.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

export const Icon = styled.div`
  font-size: 2em;
  color: palevioletred;
`;
export const Li = styled.li`
  list-style: none;
  text-decoration: none;
  cursor: pointer;
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 24%;
  padding: 2px;
  cursor: pointer;
`;
export const PrductImput = styled.input`
  width: 50%;
  height: 20px;
  color: white;
  border: none;
  border-bottom: 2px greenyellow dashed;
  border-radius: 20px;
  background-color: transparent;
  font-size: 18px;
  padding-left: 14px;
  text-transform: capitalize;
  :focus {
    outline: none;
  }
  ::placeholder {
    padding-inline-start: 40%;
  }
`;
