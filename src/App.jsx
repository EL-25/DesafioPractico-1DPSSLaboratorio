import React, { useState } from 'react';
import AgregarContacto from './Components/AgregarContacto';
import MostrarContactos from './Components/MostrarContacto';

function App() {
  // Estado global de la aplicación
  const [contactos, setContactos] = useState([]);

  // Función que el hijo 'AgregarContacto' llamará para guardar
  const agregarContactoALista = (nuevo) => {
    setContactos([...contactos, nuevo]);
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Gestor de Contactos</h1>
      <AgregarContacto onAgregar={agregarContactoALista} />
      <hr style={{ margin: '30px auto', maxWidth: '500px' }} />
      <MostrarContactos lista={contactos} />
    </div>
  );
}

export default App;