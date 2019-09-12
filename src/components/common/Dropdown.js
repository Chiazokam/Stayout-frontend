import React from 'react';
import { Link } from 'react-router-dom';
import makeLowerCase from '../../utils';

const Dropdown = (props) => {
  const { className, menu } = props;

  return (
    <nav className={`dropdown ${className}`}>
      <ul>
        {menu.map(menuItem => (
          <li key={makeLowerCase(menuItem)}>
            {menuItem === 'Sign in' || menuItem === 'Sign up'
              ? menuItem
              : <Link to={`/${makeLowerCase(menuItem)}`}>{menuItem}</Link>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
