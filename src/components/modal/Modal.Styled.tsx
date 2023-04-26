import styled from 'styled-components';
import { Props } from '../../interfaces/interface';
export const Container = styled.div<Props>`
  display: ${({ click }) => (click ? 'flex' : 'none')};
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  position: absolute;
  background-color: red;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: black;
  animation: modal ${({ click }) => (click ? '4s' : '0s')};
  @keyframes modal {
    0% {
      height: 100px;
    }
    30% {
      height: 400px;
      opacity: 0.4;
    }
    40% {
      height: 405px;
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  margin-top: 35px;
  right: 43%;
  width: 100%;
  background-color: #c10c0c;
  font-size: large;
  border-radius: 50px;
  border-top: none;
  color: #ffffff;
`;
