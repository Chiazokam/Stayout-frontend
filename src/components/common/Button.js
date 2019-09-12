import React from 'react';

const Button = (props) => {
  const { className, children, clicked } = props;

  return (
    <button
      onClick={clicked}
      className={`button ${className}`}
      type='submit'
    >
      {children}
    </button>
  );
};

export default Button;
