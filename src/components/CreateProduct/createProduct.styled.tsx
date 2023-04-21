import styled from 'styled-components';
export const Container = styled.div`
  background-image: url(http://localhost:3000/limpieza.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;
export const ContainerInputs = styled.div`
  box-sizing: border-box;
  background: black;
  opacity: 0.8;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-width: fit-content;
  max-width: 40%;
  gap: 25px;
  font-weight: bold;
  border-radius: 30px;
  z-index: 1000;
  overflow: hidden;
  padding: 3px;
  ::before {
    content: '';
    position: absolute;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff
    );
    top: 0;
    left: -10%;
    width: 10%;
    height: 5px;
    transform-origin:top left;
    animation: animate 3s  infinite;
    z-index: -1;
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
    top: 0;
    left: 0;
    width: 10%;
    height: 5px;
    transform-origin:top left;
    animation: animate 3s infinite;
    animation-delay:1s;
    z-index: -1;
  }
  @keyframes animate {
    0% {
      transform: translate(1000%, 0%);
    }
    100% {
      transform: translate(-100%, 0%);
    }
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  height: 27px;
  color: white;
  font-size: larger;
  font-family: 'Times New Roman', Times, serif;
  border-radius: 50px;
  background-color: #3636c5;
  cursor: pointer;
`;
export const H1 = styled.h1`
  color: wheat;
  font-family: 'Times New Roman', Times, serif;
  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;
export const P = styled.p`
  color: wheat;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  right: 0px;
  cursor: pointer;
`;
