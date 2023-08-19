import './css/Headers.css'
import logoReact from './img/reactLogo.png'
import logoSql from './img/sqllogo.png'
import logoJava from './img/javascriptlogo.png'
import logoNode from './img/njLogo.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Headers = () => {

    const location = useLocation();

    return (
        <div className="Headers-container">
            <div className='item1'>
                <img src={logoNode} alt="Logo React" className="logos" />
                <img src={logoReact} alt="Logo React" className="logos" />
                <img src={logoSql} alt="Logo React" className="logos" />
                <img src={logoJava} alt="Logo React" className="logos" />
            </div>
            <div className='item2'>
                <li className={location.pathname === '/Inicio' ? 'active' : ''}><Link to={"/Inicio"}>Inicio</Link ></li>
                <li className={location.pathname === '/Proyectos' ? 'active' : ''}><Link to={"/Proyectos"}>Proyectos</Link ></li>
                <li className={location.pathname === '/Contacto' ? 'active' : ''}><Link to={"/Contacto"}>Contacto</Link ></li></div>
        </div>

    )

}

export default Headers;