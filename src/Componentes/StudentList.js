// /src/componentes/StudentList.js
import React, { useEffect, useState } from 'react';
import { db } from '../configuracionfirebase/firebase';
import '../App.css';

const StudentList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('Registro').get();
        const reservationsData = snapshot.docs.map(doc => ({
          ...doc.data(),
          Fecha: doc.data().Fecha.toDate() // Convertir timestamp a Date
        }));
        setReservations(reservationsData);
      } catch (error) {
        console.error('Error al obtener los datos: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Actividades Guardadas</h2>
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              <p><strong>Registro:</strong> {reservation.Registro}</p>
              <p><strong>Descripcion:</strong> {reservation.Descripcion}</p>
              <p><strong>Fecha:</strong> {reservation.Fecha.toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;