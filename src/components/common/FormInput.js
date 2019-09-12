import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

const FormInput = (props) => {
  const {
    label, type, name, placeholder, labelFor, className, addonText, value, onChange, disabled
  } = props;

  return (
    <FormGroup>
      <InputGroup>
        <Label for={labelFor}>{label}</Label>
        <Input
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {addonText && (
        <InputGroupAddon addonType='append'>
          <InputGroupText>{addonText}</InputGroupText>
        </InputGroupAddon>
        )}
      </InputGroup>
    </FormGroup>
  );
};

export default FormInput;
