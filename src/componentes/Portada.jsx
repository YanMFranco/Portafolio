import { Link } from 'react-router-dom';
import './css/Portada.css';

const Portada = () => {
    return (
        <div className="Portada-container">
            <div className='item1'>
                <h2 className="neon-title">Bienvenid@ a mi portafolio</h2>
            </div>
            <div className='item2'>
                <Link to={"/Inicio"} className="flechaAbajo">
                    <p>↓</p>
                </Link >
            </div>
            <div className='item3'>
                <div className='bienvenido'>
                    <p >¡Hola! Soy Yan Franco Moreno Henao, y este es mi portafolio. Aquí puedes conocer más sobre mí y mis proyectos, acompañame...</p>
                </div>

            </div>
        </div>
    )
}

export default Portada;