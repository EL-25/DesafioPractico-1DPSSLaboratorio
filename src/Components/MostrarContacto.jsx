import React, { useEffect } from 'react';
import '../css/MostrarContacto.css';

const MostrarContactos = ({ lista }) => {
  
  // Esto es para hacer la lista y que se muestren los contactos
  useEffect(() => {
    if (lista.length > 0) {
      console.log("La lista se ha actualizado. Total:", lista.length);
    }
  }, [lista]);

  return (
    <div className="lista-contenedor">
      <h2 className="lista-titulo">Contactos Registrados</h2>
      {lista.length === 0 ? (
        <p className="lista-vacia">No hay contactos aún.</p>
      ) : (
        <div className="grid-contactos">
          {lista.map((contacto, index) => (
            <div key={index} className="tarjeta-contacto">
              {/* Proceso de extracción de iniciales utilizando el primer carácter de los strings nombre y apellido */}
              <div className="avatar">{contacto.nombre[0]}{contacto.apellido[0]}</div>
              <div className="info">
                {/* Concatenación de variables para mostrar el nombre completo y el telefono */}
                <p className="nombre-completo">{contacto.nombre} {contacto.apellido}</p>
                <p className="tel-numero">Teléfono {contacto.telefono}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MostrarContactos;