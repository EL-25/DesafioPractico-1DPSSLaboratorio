import React, { useState } from 'react';
import AgregarContacto from './Components/AgregarContacto';
import ContactList from './Components/ContactList'; 
//Cargamos los contactos del JSON (Punto 2 de la rúbrica)
import datosIniciales from './data/contactos.json';

function App() {
  // Estado global de la aplicación - Iniciamos con los datos del JSON
  const [contactos, setContactos] = useState(datosIniciales);

  // Función que el hijo 'AgregarContacto' llamará para guardar
  const agregarContactoALista = (nuevo) => {
    // Se agrega ID único y estado favorito en false por defecto
    setContactos([...contactos, { ...nuevo, id: Date.now(), favorito: false }]);
  };

  //Cambiar el estado de favorito (true/false)
  const toggleFavorito = (id) => {
    setContactos(contactos.map(c => 
      c.id === id ? { ...c, favorito: !c.favorito } : c
    ));
  };

  //Los favoritos aparecen siempre al inicio (Punto 5 rúbrica)
  const contactosOrdenados = [...contactos].sort((a, b) => b.favorito - a.favorito);

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Gestor de Contactos</h1>
      
      {/* Componente para agregar nuevos contactos */}
      <AgregarContacto onAgregar={agregarContactoALista} />
      
      <hr style={{ margin: '30px auto', maxWidth: '500px' }} />
      
      {/* Lista que muestra los contactos ordenados y maneja favoritos */}
      <ContactList 
        lista={contactosOrdenados} 
        onToggleFavorito={toggleFavorito} 
      />
    </div>
  );
}

export default App;
