import { useParams } from 'react-router-dom';

/* Components */ 
import Header from "../components/Header";
import Carousel from '../components/Carousel';
import Footer from "../components/Footer";

/* Data */
import data from '../data/logements.json'



type Carousel = {
    id: string;
    pictures: string[];
    title: string;
    location: string; 
    equipments: string[];
    host: {
        name: string;
        picture: string;
    };
}

const Detail = () => {
    
    const { id } = useParams();
    const carousel = data.find(item => item.id === id);
    
    return (
        
        <>
            <Header />

            <main> 
                <Carousel
                    pictures={carousel.pictures}
                    title={carousel.title}
                    location={carousel.location}
                    equipments={carousel.equipments}
                    host={carousel.host}
                /> 
            </main>

            <Footer />
        </>
    );
};

export default Detail;