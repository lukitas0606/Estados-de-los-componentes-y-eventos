import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CustomAlert from './Alert';

function Formulario({ showAlert }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        confirmarContraseña: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!formData.nombre || !formData.email || !formData.contraseña || !formData.confirmarContraseña) {
          showAlert('danger', 'Por favor, completa todos los campos.');
          return;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          showAlert('danger', 'El formato del correo electrónico no es válido.');
          return;
        }
      
        if (formData.contraseña !== formData.confirmarContraseña) {
          showAlert('danger', 'Las contraseñas no coinciden.');
          return;
        }
      
        // Simulación de envío exitoso, aquí puedes enviar los datos al servidor
        setTimeout(() => {
          showAlert('success', 'Registro exitoso.');
          // También puedes limpiar el formulario si es necesario
          setFormData({
            nombre: '',
            email: '',
            contraseña: '',
            confirmarContraseña: '',
          });
        }, 1000);
      };
      

    return (
        <Form onSubmit={handleSubmit}>
            {error && <CustomAlert variant="danger" message={error} />}
            {success && <CustomAlert variant="success" message={success} />}
            <Form.Floating className="mb-4">
                <Form.Control
                    id="floatingInputCustomNombre"
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />Nombre
            </Form.Floating>
            <Form.Floating className="mb-4">
                <Form.Control
                    id="floatingInputCustomEmail"
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />Email
            </Form.Floating>
            <Form.Floating className="mb-4">
                <Form.Control
                    id="floatingInputCustomContraseña"
                    type="password"
                    placeholder="Password"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                />Contraseña
            </Form.Floating>
            <Form.Floating className="mb-4">
                <Form.Control
                    id="floatingInputCustomConfirmarContraseña"
                    type="password"
                    placeholder="Confirmar Contraseña"
                    name="confirmarContraseña"
                    value={formData.confirmarContraseña}
                    onChange={handleChange}
                />Confirmar Contraseña
            </Form.Floating>
            <button type="submit" className="btn btn-danger">Registrarse</button>
        </Form>
    );
}

export default Formulario;