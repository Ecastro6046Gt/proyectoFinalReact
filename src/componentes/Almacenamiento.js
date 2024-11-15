import React, { useEffect, useState } from 'react';

export const Almacenamiento = () => {
    const [nombre, setNombre] = useState('');
    const [guardados, setGuardados] = useState([]);
  
    useEffect(() => {
      const nombresGuardados = JSON.parse(localStorage.getItem('nombresReact')) || [];
      setGuardados(nombresGuardados);
    }, []);
  
    const handleChange = (e) => {
      setNombre(e.target.value);
    };
  
    const guardarNombre = () => {
      if (nombre.trim() === '') return;
  
      const nombresGuardados = JSON.parse(localStorage.getItem('nombresReact')) || [];
  
      const nuevoArreglo = [...nombresGuardados, nombre];
  
      localStorage.setItem('nombresReact', JSON.stringify(nuevoArreglo));
  
      setGuardados(nuevoArreglo);
      setNombre('');
    };
  
    return (
      <div>
        <h1>Guardar en localStorage</h1>
        <input
          type='text'
          value={nombre}
          onChange={handleChange}
          placeholder='Ingrese un nombre'
        />
        <button onClick={guardarNombre}>Guardar</button>
  
        <h2>Nombres guardados:</h2>
        <ul>
          {guardados.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };