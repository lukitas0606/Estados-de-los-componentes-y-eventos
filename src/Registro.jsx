import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import CustomAlert from './Alert';

function Registro() {
  const [alert, setAlert] = useState({ variant: '', message: '' });

  const showAlert = (variant, message) => {
    setAlert({ variant, message });
  };

  return (
    <div>
      <h1>Crea una cuenta</h1>
      <SocialButton />
      <p>O usa tu email para registrarte</p>
      <Formulario showAlert={showAlert} />
      {alert.variant && <CustomAlert variant={alert.variant} message={alert.message} />}
    </div>
  );
}
export default Registro;