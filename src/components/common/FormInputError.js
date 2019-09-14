import React from 'react';

const FormInputError = (props) => {
  const { children } = props;
  return (
    <p className='error'>
      {children}
    </p>
  );
};

export default FormInputError;
