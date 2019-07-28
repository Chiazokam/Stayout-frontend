import React from 'react';

const MobileHeader = (props) => {
  const { children, className } = props;

  return (
    <header className={className}>{children}</header>
  );
};

export default MobileHeader;
