import React, { useState, useEffect } from 'react';
import '../css/AgregarContacto.css';

// evento para agregar un contacto
const AgregarContacto = ({ onAgregar }) => {
  // Definición de varianles locales para manejar los datos del formulario y mensajes como alertas
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Esto limpia y manda un mensaje de confirmación automáticamente después de 3 segundos
  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => setMensaje(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  // Valida que la entrada del nombre contenga únicamente letras y espacios
  // la e significa eventos es la abreviacion 
  const handleNombreChange = (e) => {
    const valor = e.target.value;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(valor)) setNombre(valor);
  };

  // Valida que la entrada del apellido contenga únicamente letras y espacios
  const handleApellidoChange = (e) => {
    const valor = e.target.value;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(valor)) setApellido(valor);
  };

  // valida que solo acepte numero y le puse una mascara para el guion
  const handleTelefonoChange = (e) => {
    const valorLimpio = e.target.value.replace(/-/g, '');
    if (/^[0-9]*$/.test(valorLimpio) && valorLimpio.length <= 8) {
      let valorConFormato = valorLimpio;
      if (valorLimpio.length > 4) {
        valorConFormato = `${valorLimpio.slice(0, 4)}-${valorLimpio.slice(4)}`;
      }
      setTelefono(valorConFormato);
    }
  };

  // Gestiona el envío del formulario, valida campos obligatorios y ejecuta la función de guardado
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !apellido.trim() || telefono.length < 9) {
      alert("Por favor, completa todos los campos correctamente (en teléfono solo se permiten 8 números).");
      return;
    }

    onAgregar({ nombre, apellido, telefono });

    setMensaje("¡Contacto guardado!");
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  // Esto es para el html de Agregar Contacto
  return (
    <div className="formulario-contenedor">
      <h2 className="formulario-titulo">Nuevo Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-grupo">
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={handleNombreChange} placeholder="Ingrese un Nombre" />
        </div>
        <div className="campo-grupo">
          <label>Apellido:</label>
          <input type="text" value={apellido} onChange={handleApellidoChange} placeholder="Ingrese un Apellido" />
        </div>
        <div className="campo-grupo">
          <label>Teléfono:</label>
          <input type="text" value={telefono} onChange={handleTelefonoChange} placeholder="Formato 1234-5678" />
        </div>
        <button type="submit" className="boton-guardar">Guardar</button>
      </form>
      {mensaje && <div className="mensaje-exito">{mensaje}</div>}
    </div>
  );
};

export default AgregarContacto;