import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newTask = { title, description };
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    navigate('/');
  };

  return (
    <div>
      <h1>Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Guardar Tarea
        </button>
      </form>
    </div>
  );
};

export default NewTask;
