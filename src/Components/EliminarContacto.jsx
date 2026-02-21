import React, {useState, useEffect} from "react";
import '../css/EliminarContacto.css';

// evento para eliminar un contacto
const EliminarContacto = ({ onEliminar }) => {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Edwin', apellido: 'Leiva', telefono: '7663-4979' },
    { id: 2, nombre: 'Anderson', apellido: 'Morán', telefono: '7907-4825' },
    { id: 3, nombre: 'Kevin', apellido: 'Aguilar', telefono: '7492-2370' },
  ]);

  const [mensaje, setMensaje] = useState('');

  const eliminarContacto = (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este contacto?");

    if (confirmacion) {
        setContactos(contactos.filter(contacto => contacto.id !== id));
        setMensaje("¡Contacto eliminado!");

        setTimeout(() => {
            setMensaje('');
        }, 3000);
    }
    };
    return (
        <div className="Contenedor">
        <h2 className="Titulo">Lista de Contactos</h2>
        {mensaje && <div className="mensaje">{mensaje}</div>}
        {contactos.length === 0 ? (
            <p className="vacio">No hay contactos para mostrar.</p>
        ):(
            <ul className="lista">
                {contactos.map(contacto => (
                    <li key={contacto.id} className="contacto">
                        <span>{contacto.nombre} {contacto.apellido} - {contacto.telefono}</span>
                        <button className="eliminar" onClick={() => eliminarContacto(contacto.id)}>Eliminar</button>
                        </li>
                ))}
            </ul> 
        )}
        </div>
    );
};

export default EliminarContacto;