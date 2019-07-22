import React from 'react';


const CustomSection = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default CustomSection;
