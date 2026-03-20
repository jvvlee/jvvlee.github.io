import NavigationCSS from '../css/components/Navigation.module.scss';
import { Link, useLocation } from 'react-router-dom';

const Modal: React.FC = () => {
    const location = useLocation();

    return (
        <div className={NavigationCSS.links}>
            {location.pathname !== '/' && <Link to='/'>Back</Link>}

            {location.pathname === '/' && <Link to='/about'>About</Link>}
            {location.pathname === '/' && <a href="">Resume</a>}
            {location.pathname === '/' && <a href="https://www.linkedin.com/in/jonathanl33" target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
    )
}

export default Modal;