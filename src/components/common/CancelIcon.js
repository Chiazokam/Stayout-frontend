import React from 'react';
import cancel from '../../assets/images/cancel.svg';

const CancelIcon = (props) => {
  const { clicked } = props;

  return (
    <div>
      <img
        className='cancel-icon'
        onClick={clicked}
        src={cancel}
        alt='cancel'
        role='presentation'
      />
    </div>
  );
};

export default CancelIcon;
