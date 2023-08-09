import './css/Contacto.css';
import github from './img/github.png';
import facebook from './img/facebook.png';
import linklind from './img/linkelend.png';
import gmail from './img/gmail.png';
import tel from './img/tel.png';
import { Link } from 'react-router-dom';

const Contacto = () => {
    return (
        <div className='contactame'>
            <Link  to="/Proyectos" className="flechaArriba">
                ↑
            </Link >
            <h1>Contactame...</h1>
            <div className='redesSociales'>
                <p>Ponte en contacto conmigo a través de las redes sociales o el correo electrónico.</p>
                <ul>
                    <li><img src={github} alt="logo Github" className="logoContacto" /><a href="https://github.com/YanMFranco" className="github">GitHub</a></li>
                    <li><img src={facebook} alt="logo facebook" className="logoContacto" /><a href="https://www.facebook.com/ymorenohe/" className="facebook">Facebook</a></li>
                    <li><img src={linklind} alt="logo linkelind" className="logoContacto" /><a href="https://www.linkedin.com/in/yan-franco-moreno-henao-83b957247/" className="linkedin">LinkedIn</a></li>
                    <li><img src={gmail} alt="logo gmail" className="logoContacto" />Morenofranco77@gmail.com</li>
                    <li><img src={tel} alt="logo telefono" className="logoContacto" />(+57) 3218968485</li>
                </ul>
            </div>
        </div>
    )
}

export default Contacto;