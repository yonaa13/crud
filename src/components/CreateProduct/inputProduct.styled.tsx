import styled from 'styled-components';
import { PropsInput } from './interfaceInput';

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 40%;
  min-width: 250px;
  margin: 2px;
  padding: 2px;
`;
export const ContainerIcon = styled.div`
  margin: 0px 4px;
  color: blue;
`;
export const Input = styled.input`
  width: 100%;
  min-width: 200px;
  outline: none;
  border: none;
  color: white;
  text-transform: capitalize;
  border-radius: 50px;
  border-bottom: 3px dashed #16cc13;
  background-color: transparent;
  padding-left: 20px;
  ::placeholder {
    padding-left: 18px;
    opacity: 0.8;
  }
`;
export const Label = styled.label`
  font-size: large;
  color: wheat;
  font-weight: bold;
  padding: 0px 4px;
`;
