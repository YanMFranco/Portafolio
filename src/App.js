import './App.css';
import { Route, Routes } from "react-router-dom";
import Headers from './componentes/Headers';
import Inicio from './componentes/Inicio';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import Portada from './componentes/Portada';

function App() {
  return (
    <div className='App'>
      <Headers />
      <Routes>
        <Route path='/' element={<Portada />} />
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='/Proyectos' element={<Proyectos />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
    </div>

  );
}

export default App;
