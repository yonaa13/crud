import React, { FC } from 'react';
import { Props } from './interface';
import { Form, Input, Label } from './inputModal.stiled';
export const InputModal: FC<Props> = ({
  label,
  inputType = 'text',
  setValue,
  placeholder,
}) => {
  return (
    <Form>
      <Label>{label}</Label>
      <Input
        maxLength={13}
        type={inputType}
        placeholder={placeholder}
        onChange={(e: { target: { value: string } }) =>
          setValue(e.target.value)
        }
      />
    </Form>
  );
};
