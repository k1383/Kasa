/* Icons */
import { CiLocationOn } from "react-icons/ci"; // Location  <CiLocationOn />
import { FaStar } from "react-icons/fa";  // <FaStar className="IconsStar"/>
// import { FaRegStar } from "react-icons/fa";  // <FaRegStar className="IconsStar"/>

import { Link } from "react-router-dom";

/* Scss */
import "../styles/Card.scss";

type CardProps = {
    id: string;
    pictures: string[];
    title: string;
    location: string;  
    tags: string[];
    rating: string;
};

const rating5 = [<FaStar className="IconsStar"/>,<FaStar className="IconsStar"/>,<FaStar className="IconsStar"/>,<FaStar className="IconsStar"/>,<FaStar className="IconsStar"/>]

const Card: React.FC<CardProps> = ({pictures, title, location, tags, rating, id}) => (

    <Link to={`/Details/${id}`}> 

        <article>
            <img src={pictures[0]} alt={title} />
            <div id="info">
                <h3>{title}</h3>
                <div id="location">
                    <span><CiLocationOn  id="IconLocation"/> </span>
                    <p>{location}</p>
                </div>
                <div id="tags">
                    <p>{tags[0]}</p>
                    <p>{tags[1]}</p>
                </div>
                <div id="rating">
                    <span>{rating5}</span>
                    <p>{rating}</p>
                </div>
            </div>
        </article>

    </Link>    

);

export default Card;