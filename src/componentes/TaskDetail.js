import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTask(storedTasks[id]);
  }, [id]);

  if (!task) return <p>Tarea no encontrada</p>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Link to="/" className="btn btn-secondary">
        Volver
      </Link>
    </div>
  );
};

export default TaskDetail;
