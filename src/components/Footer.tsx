/* Scss */
import '../styles/Footer.scss'

const Footer = () => (

    <footer>
        <div className='container'>
            <article>
                <h4>À propos de Kasa</h4>
                <p>Notre histoire</p>
                <p>Équipe</p>
                <p>Carrières</p>
                <p>Presse</p>
            </article>
            <article>
                <h4>Support</h4>
                <p>Centre d'aide</p>
                <p>Nous contacter</p>
                <p>Signaler un problème</p>
                <p>Page 404</p>
            </article>
            <article>
                <h4>Légal</h4>
                <p>Conditions d'utilisation</p>
                <p>Politique de confidentialité</p>
                <p>Mention légales</p>
                <p>Cookies</p>
            </article>
        </div>
        <p id='Copyright'>© 2024 Kasa. Tous droits réservés.</p>
    </footer>

);

export default Footer;