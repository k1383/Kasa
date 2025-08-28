import { CiLocationOn } from "react-icons/ci"; // Location <CiLocationOn />
// import { FaArrowLeft } from "react-icons/fa"; // Arrow left <FaArrowLeft />
// import { FaArrowRight } from "react-icons/fa"; // Arrow right <FaArrowRight />

/* Scss */
import '../styles/Details.scss';

type CarouselProps = {
    pictures: string[];
    title: string;
    location: string; 
    equipments: string[];
    host: {
        name: string;
        picture: string;
    };
}

const Carousel: React.FC<CarouselProps> = ({pictures, title, location, equipments, host}) => (
    <section id="Details">
        <div>
            <article >
                <img src={pictures[0]} alt={title} />
                <h1>{title}</h1>
                <p><CiLocationOn  id="location"/> {location}</p>
                <div id="equipments">
                    <p>{equipments}</p>
                </div>
                <div id="Info-people">
                <img id="people" src={host.picture} alt={host.name} />
                    <p>{host.name}</p> 
                </div>
            </article>
        </div>
    </section>
);

export default Carousel;