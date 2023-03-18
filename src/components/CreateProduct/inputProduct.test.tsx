import React ,{useState}from 'react';
import { render } from '@testing-library/react';
import { InputProduct } from "./InputProduct";

test('renders learn react link', () => {
  const [first, setfirst] = useState('')
  render(< InputProduct setValue={setfirst}/>);
  expect(true).toBe;
});
