import React from 'react';
import Swal from 'sweetalert2';

function Contact({ item, onToggle, onBorrar }) {
  
  //Alerta para agregar/quitar favoritos
  const manejarFavorito = () => {
    const titulo = item.favorito ? '¿Quitar de favoritos?' : '¿Agregar a favoritos?';
    const texto = item.favorito ? 'El contacto volverá a su posición original.' : 'Este contacto aparecerá al inicio de la lista.';

    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#fbc02d',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onToggle(item.id);
      }
    });
  };

  // Alerta para eliminar contacto
  const manejarEliminar = () => {
    Swal.fire({
      title: '¿Eliminar contacto?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onBorrar(item.id);
      }
    });
  };

  // Estilo condicional para resaltar el favorito (Punto 5 Rúbrica)
  const estiloFavorito = {
    backgroundColor: item.favorito ? '#fff9c4' : 'white', // Fondo amarillo suave si es favorito
    border: item.favorito ? '2px solid #fbc02d' : '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '10px'
  };

  return (
    <div style={estiloFavorito}>
      <div>
        {/* Información requerida por la rúbrica */}
        <h3 style={{ margin: 0 }}>{item.nombre} {item.apellido}</h3>
        <p style={{ margin: '5px 0', color: '#666' }}>📞 {item.telefono}</p>
        
        {/* Identificador visual (Punto 5 de la rúbrica) */}
        {item.favorito && (
          <span style={{ color: '#fbc02d', fontWeight: 'bold', fontSize: '0.9rem' }}>
            ⭐ Seleccionado como favorito
          </span>
        )}
      </div>

      <div>
        {/*Botón de favoritos */}
        <button 
          onClick={manejarFavorito}
          style={{ 
            cursor: 'pointer', 
            padding: '8px 15px', 
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: item.favorito ? '#fbc02d' : '#f8f9fa'
          }}
        >
          {item.favorito ? 'Quitar Favorito' : '⭐ Hacer Favorito'}
        </button>
        <button
          onClick={manejarEliminar}
          style={{
            cursor: 'pointer',
            padding: '8px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#e53935',
            color: 'white'
          }}
        >
          🗑 Eliminar
        </button>
      </div>
    </div>
  );
}

export default Contact;

