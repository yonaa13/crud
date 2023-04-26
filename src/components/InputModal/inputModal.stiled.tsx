import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 25px;
  margin-top: 12px;
  padding-left: 15px;
`;
export const Label = styled.label`
  font-size: 1rem;
`;
export const Input = styled.input`
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  font-size: 0.8em;
  font-weight: bold;
  color: #ffffff;

  ::placeholder {
    color: #ffffff8c;
    text-align: start;
  }
  :focus {
    outline: none;
  }
`;
