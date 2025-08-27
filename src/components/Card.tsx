import { CiLocationOn } from "react-icons/ci"; // Location <CiLocationOn />

/* Scss */
import "../styles/Card.scss";

type CardProps = {
    pictures: string[];
    title: string;
    location: string; 
    equipments: string[];
    rating: string;
};

const Card: React.FC<CardProps> = ({pictures, title, location, equipments, rating}) => (

    <a href="../pages/Details.tsx">  
        <article>
            <img src={pictures[0]} alt={title} />
            <div id="Info">
                <h3>{title}</h3>
                <p><CiLocationOn  id="location"/> {location}</p>
                <div id="equipments">
                    <p>{equipments}</p> 
                </div>
                <p>{rating}</p>
                
            </div>
        </article>
    </a>

);

export default Card;