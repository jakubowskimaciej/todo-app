import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { Wrapper } from './FormField.styles';

const FormField = ({ label, id, name, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} type={type} id={id} {...props} autoComplete="off" />
    </Wrapper>
  );
};

export default FormField;
