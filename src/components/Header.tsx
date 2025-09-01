import { Link } from 'react-router-dom';

/* Icons */
import { CiMenuFries } from "react-icons/ci"; // BugerMenu  <CiMenuFries />


/* Scss */
import '../styles/Header.scss'


const Header = () => (

    <header className='container'>
        <a href="/">Kasa</a>
        <CiMenuFries id='Bugermenu'/>
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='#'>À propos</Link>
            <Link to='#'>Contact</Link>
        </nav>
    </header>

);

export default Header;