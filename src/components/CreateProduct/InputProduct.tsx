import React, { FC } from 'react';
import { PropsInput } from './interfaceInput';
import {
  ContainerInput,
  ContainerIcon,
  Label,
  Input,
} from './inputProduct.styled';
export const InputProduct: FC<PropsInput> = ({
  icon,
  inputType = 'text',
  label,
  placeholder,
  setValue,
}) => {
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        onChange={(e: { target: { value: string } }) =>
          setValue(e.target.value)
        }
      />
      <ContainerIcon>{icon} </ContainerIcon>
    </ContainerInput>
  );
};
