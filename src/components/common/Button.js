import React from 'react';
import { Row, Col } from 'reactstrap';


const Button = (props) => {
  const { className, children } = props;

  return (
    <button
      className={className}
      type='submit'
    >
      {children}
    </button>
  );
};

export default Button;
