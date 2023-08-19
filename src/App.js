import './App.css';
import { Route, Routes } from "react-router-dom";
import Headers from './componentes/Headers';
import Inicio from './componentes/Inicio';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import Portada from './componentes/Portada';
import Prueba from './componentes/Prueba';

function App() {
  return (
    <div className='App'>
      <Headers />
      <Routes>
        <Route exact path='/' element={<Portada />} />
        <Route exact path='/Inicio' element={<Inicio />} />
        <Route exact path='/Proyectos' element={<Proyectos />} />
        <Route exact path='/Contacto' element={<Contacto />} />
        <Route exact path='/Prueba' element={<Prueba />} />
      </Routes>
    </div>

  );
}

export default App;
