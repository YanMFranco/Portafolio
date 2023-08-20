import './css/Proyectos.css';
import climapp from './img/clima.jpg';
import todolist from './img/todolist.jpg';
import memoram from './img/memoram.png';
import raya from './img/raya.png';
import { Link } from 'react-router-dom';

const Proyectos = () => {
    return (
        <div className='Proyectos-container'>
            <div className="item1">
                <p className='introduccion'>Como desarrollador Full Stack, he estado comprometido en desafiar mis habilidades y ampliar mi conocimiento día a día.
                    Me he sumergido en proyectos que abarcan tanto el desarrollo del front-end como del back-end,
                    buscando siempre superar mis límites y ofrecer soluciones sólidas y eficientes.
                </p>
            </div>
            <div className="item2">
                <div className='Desplazamiento'>
                    <div>
                        <Link to="/Inicio" >
                            <p className="flecha">↑</p>
                        </Link >
                    </div>

                    <div>
                        <Link to={"/Contacto"} >
                            <p className="flecha">↓</p>
                        </Link >
                    </div>

                </div>
            </div>
            <div className="item3">
                <div>
                    <h2>Clima App</h2>
                    <Link to={"https://clima-app-production.up.railway.app/"}><img src={climapp} alt="Clima app" className="img-Proyectos" /></Link>
                </div>
                <div>
                    <h2>Todo list</h2>
                    <Link to={"https://todo-list-react-production.up.railway.app/"}><img src={todolist} alt="Todo list" className="img-Proyectos" /></Link>
                </div>
                <div>
                    <h2>Juego memoram</h2>
                    <Link to={"https://juego-memoram-react-production.up.railway.app/"}><img src={memoram} alt="Juego memoram" className="img-Proyectos" /></Link>
                </div>
                <div>
                    <h2>Juego en raya</h2>
                    <Link to={"https://juego-en-raya-production.up.railway.app/"}><img src={raya} alt="Juego en raya" className="img-Proyectos" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Proyectos;
