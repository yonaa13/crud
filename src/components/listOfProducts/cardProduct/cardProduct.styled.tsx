import styled from 'styled-components';

export const ContainerCard = styled.div`
  margin-top: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 380px;
  border: 3px solid red;
  border-radius: 50px;
  color: #124e9b;
  background-color: #8db8e7;
  overflow: hidden;
  font-weight:bold
`;
export const Img = styled.img`
  background-size: cover;
  width: 200px;
  height: 250px;
  border-bottom: 3px solid black;
`;
export const P = styled.p`
  padding: 0px;
  margin: 12px;
  text-transform: capitalize;
`;

