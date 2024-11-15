import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Link to="/new-task" className="btn btn-primary mb-3">
        Agregar Tarea
      </Link>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <Link to={`/task/${index}`} key={index} className="list-group-item">
            {task.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;