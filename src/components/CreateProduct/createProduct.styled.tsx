import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(8, 16, 85, 1) 33%,
    rgba(114, 149, 175, 1) 96%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
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
`;
export const P = styled.p`
  color: wheat;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  right: 0px;
  cursor: pointer;
  ;
`;
