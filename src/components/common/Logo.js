import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  const { className } = props;

  return (
    <Link to='/'><h3 className={className}>Stayout.com</h3></Link>
  );
};

export default Logo;
