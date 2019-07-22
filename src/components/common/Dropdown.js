import React, { Component } from 'react';

const Dropdown = (props) => {
  const { className, menu } = props;
  return (
    <nav className={`dropdown ${className}`}>
      <ul>
        {menu.map(menuItem => (
          <li key={menuItem}>
            {menuItem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
