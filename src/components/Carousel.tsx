import { CiLocationOn } from "react-icons/ci"; // Location <CiLocationOn />
import { FaArrowLeft } from "react-icons/fa"; // Arrow left <FaArrowLeft />
import { FaArrowRight } from "react-icons/fa"; // Arrow right <FaArrowRight />
import { useState } from "react";

/* Scss */
import "../styles/Details.scss";

type CarouselProps = {
  pictures: string[];
  title: string;
  location: string;
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
};

const Carousel: React.FC<CarouselProps> = ({pictures,title,location,tags,host}) => {
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <section id="Details">
      <div>
        <article>
          <span onClick={prevSlide}><FaArrowLeft className="prev"/></span><img src={pictures[currentIndex]} alt={title}/><span onClick={nextSlide}><FaArrowRight className="next"/></span>
          <div id="Info">
            <h2>{title}</h2>
            <p><CiLocationOn id="location" /> {location}</p>
            <div id="tags">
              <p>{tags[0]}</p>
              <p>{tags[1]}</p>
            </div>
            <div id="Info-people">
              <img id="people" src={host.picture} alt={host.name} />
              <p>{host.name}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Carousel;