import React, { useState } from 'react';
import './App.css';
import Registro from './Registro';
import CustomAlert from './Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const showAlert = (message, variant) => {
    setAlertMessage(message);
    setAlertVariant(variant);
  };

  return (
    <div>
      <Registro showAlert={showAlert} />
      {alertMessage && (
        <CustomAlert message={alertMessage} variant={alertVariant} />
      )}
    </div>
  );
}

export default App;