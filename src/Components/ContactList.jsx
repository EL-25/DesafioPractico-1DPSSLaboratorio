import React from 'react';
import Contact from './Contact';

function ContactList({ lista, onToggleFavorito, onEliminar }) {
  // Si no hay contactos, mostramos un mensaje sencillo
  if (lista.length === 0) {
    return <p style={{ textAlign: 'center' }}>No hay contactos guardados.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '0 auto' }}>
      
      {/*Usamos .map para recorrer la lista y mostrar cada contacto */}
      {lista.map((contacto) => (
        <Contact 
          key={contacto.id} 
          item={contacto} 
          onToggle={onToggleFavorito} 
          onBorrar={onEliminar}
        />
      ))}
      
    </div>
  );
}

export default ContactList;
