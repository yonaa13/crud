import styled from 'styled-components';
import { Props } from '../../interfaces/interface';
export const Container = styled.div<Props>`
  display: ${({ click }) => (click ? 'flex' : 'none')};
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  position: absolute;
  background-color: red;
  padding-left: 40px;
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

export const P = styled.p`
color: #ffffffb6;
`;
export const Label = styled.label`
color: black;
`;
