import ModalCSS from '../css/components/Modal.module.scss';
import About from './about';
import Navigation from './navigation';
import { useLocation } from 'react-router-dom';


const Modal: React.FC = () => {
    const location = useLocation();

    return (
        <div className={ModalCSS.modal}>
            <div className={ModalCSS.modalContent}>
                {location.pathname === '/' && (
                    <div>
                        <h2>Hi there!</h2>
                        <p>I am a Rails and React developer looking for new opportunities and this is my page.</p>
                    </div>
                )}
                {location.pathname === '/about' && <About />}
                <Navigation />
            </div>
        </div>
    )
}

export default Modal;