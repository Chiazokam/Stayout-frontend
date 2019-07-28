import React from 'react';

const Hamburger = (props) => {
  const { clicked, className } = props;
  return (
    <div
      className={`menu-ham ${className}`}
      onClick={clicked}
      role='presentation'
    >
      <div className='hamburger' />
      <div className='hamburger' />
      <div className='hamburger' />
    </div>
  );
};

export default Hamburger;
