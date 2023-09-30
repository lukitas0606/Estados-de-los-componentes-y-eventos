import React from 'react';
import BootstrapAlert from 'react-bootstrap/Alert';

function CustomAlert({ message, variant }) {
  return (
    <BootstrapAlert variant={variant}>
      {message}
    </BootstrapAlert>
  );
}

export default CustomAlert;