import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ModalComponent = (props) => {
  const { className, children, isModalOpen } = props;
  return (
    <Modal
      isOpen={isModalOpen}
      className={className}
    >
      <ModalBody>
        {children}
      </ModalBody>
    </Modal>
  );
};

export default ModalComponent;
