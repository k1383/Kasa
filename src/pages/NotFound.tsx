import { Link } from 'react-router-dom';

/* Sccs */
import '../styles/NotFound.scss';

const NotFound = () => {
    return (
        <>
            <section id='NotFound'>
                <h1>404 Not Found</h1>
                <p>La page que vous cherchez n’existe pas</p>
                <Link id='Accueil' to='/'>Accueil</Link>
            </section>
        </>
    )
};

export default NotFound;