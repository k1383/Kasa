import { Link } from 'react-router-dom';

/* Scss */
import '../styles/Header.scss'


const Header = () => (

    <header className='container'>
        <a href="/">Kasa</a>
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='#'>À propos</Link>
            <Link to='#'>Contact</Link>
        </nav>
    </header>

);

export default Header;