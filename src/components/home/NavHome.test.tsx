import React,{useState} from 'react';
import { render } from '@testing-library/react';
import { NavHome } from "./NavHome";
test('renders learn react link', () => {
    const [first, setfirst] = useState('')
  render(<NavHome setValue={setfirst}/>);
  expect(true).toBe;
});
