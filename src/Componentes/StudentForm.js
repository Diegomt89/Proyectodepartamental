import React, { useState } from 'react';
import { db } from '../configuracionfirebase/firebase';
import '../App.css';

const StudentForm = () => {
  const [Recordatorio, setRecordatorio] = useState('');
  const [lastRecordatorio, setLastRecordatorio] = useState('');
  const [Fecha, setFecha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('Recordatorio').doc('Calendario').set({
        Recordatorio: Recordatorio,
        Descripcion: lastRecordatorio,
        Fecha: new Date(Fecha) // Guardar la fecha como un objeto Date
      });
      alert('Datos guardados exitosamente!');
    } catch (error) {
      console.error('Error al guardar los datos: ', error);
      alert('Error al guardar los datos.');
    }

    // Limpiar los campos del formulario
    setRecordatorio('');
    setLastRecordatorio('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recordatorio:</label>
        <input
          type="text"
          value={Recordatorio}
          onChange={(e) => setRecordatorio(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripcion:</label>
        <input
          type="text"
          value={lastRecordatorio}
          onChange={(e) => setLastRecordatorio(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          value={Fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default StudentForm;