import { Link } from 'react-router-dom';
import './css/Portada.css';

const Portada = () => {
    return (
        <div className='Pprincipal'>
            <div>
                <h2 className="neon-title">Bienvenid@ a mi portafolio</h2>
            </div>
            <div className='bienvenido'>
                <p>¡Hola! Soy Yan Franco Moreno Henao, y este es mi portafolio. Aquí puedes conocer más sobre mí y mis proyectos, acompañame...</p>
            </div>
            <Link to={"/Inicio"} className="flechaAbajo">
                ↓
            </Link >
        </div>
    )
}

export default Portada;