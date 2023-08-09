import './css/Inicio.css';
import imagenFranco from './img/Franco.jpg';
import { Link } from 'react-router-dom';
import SobreMi from './SobreMi';
import { useState } from 'react';

const Inicio = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            {!modalVisible && (<section id="inicio" className='container-p'>
                <Link to="/" className="flechaArriba">
                    ↑
                </Link >
                <div className='InicioC'>
                    <div className='ContenidoI'>
                        <img src={imagenFranco} alt="Yan Franco" className="profile-image" />
                        <p>Soy un desarrollador full stack altamente motivado y con experiencia en proyectos cortos.
                            Busco unirme a una empresa innovadora donde pueda aplicar y mejorar mis habilidades de programación y desarrollo web.
                            Estoy dispuesto a trabajar arduamente para adquirir nuevas habilidades y conocimientos en el campo de la tecnología.
                            Mi objetivo a corto plazo es trabajar en proyectos desafiantes para obtener experiencia laboral y contribuir al crecimiento de la empresa.
                            A largo plazo, aspiro a convertirse en un desarrollador experto y valorado, liderando proyectos exitosos y ofreciendo soluciones innovadoras a los clientes.
                            Estoy emocionado por trabajar en un entorno que valore la innovación y el trabajo en equipo y estoy dispuesto a contribuir con una actitud positiva y pasión por la tecnología.
                        </p>
                    </div>
                    <div>
                        <button className='boton' onClick={handleOpenModal}>Conoce mis experiencias!</button>
                    </div>
                </div>

                <Link to={"/Proyectos"} className="flechaAbajo">
                    ↓
                </Link >
            </section>)}

            {modalVisible && (
                <div className="modal-overlay">
                    <SobreMi onClose={handleCloseModal} />
                </div>
            )}
        </div>
    )
}

export default Inicio;