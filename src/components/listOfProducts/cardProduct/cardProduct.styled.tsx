import styled from 'styled-components';

export const ContainerCard = styled.div`
  box-sizing: border-box;
  margin-top: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 380px;
  padding: 2px;
  border-radius: 50px;
  color: black;
  background: #8db8e7;
  z-index: 1;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  ::before {
    content: '';
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff
    );
    position: absolute;
    top: -50%;
    left: -50%;
    width: 480px;
    height: 420px;
    transform-origin: bottom right;
    animation: animate 6s infinite;
    z-index: -3;
  }
  ::after {
    content: '';
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #ff2770,
      #ff2770,
      #ff2770
    );
    position: absolute;
    top: -50%;
    left: -50%;
    width: 480px;
    height: 420px;
    transform-origin: bottom right;
    animation: animate 6s infinite;
    animation-delay: -3s;
    z-index: -1;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Img = styled.img`
  background-size: cover;
  width: 200px;
  height: 250px;
  border-radius: 50px 50px 10px 10px;
`;
export const P = styled.p`
  padding: 0px;
  margin: 12px;
  text-transform: capitalize;
`;
export const ContainerIconDelete = styled.div`
  position: absolute;
  right:5%;
  top: 6%;
  font-size:2rem;
  z-index: 10;
  cursor:pointer;
`;
export const ContainerIconEdit = styled.div`
  position: absolute;
  left:5%;
  top: 6%;
  font-size:2rem;
  z-index: 10;
  cursor:pointer;
`;
