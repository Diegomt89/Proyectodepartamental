// /src/App.js
import React from 'react';
import './App.css';
import StudentForm from './Componentes/StudentForm';
import StudentList from './Componentes/StudentList';
 
const App = () => {
  return (
    <div className="container">
      <h1>Calendario de actividades</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
};
 
export default App;