import { Dispatch, SetStateAction } from 'react';

export interface Props {
  label?: string;
  inputType?: string;
  placeholder?:string
  setValue: Dispatch<SetStateAction<string>> | ((value: string) => void);
}
