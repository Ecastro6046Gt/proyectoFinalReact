import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home';
import { Articulos } from './componentes/Articulo';
import NewTask from './componentes/NewTask';
import TaskDetail from './componentes/TaskDetail';
import { RouterPrincipal } from './Routers/RouterPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
