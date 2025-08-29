import { useParams } from 'react-router-dom';

/* Components */ 
import Header from "../components/Header";
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Footer from "../components/Footer";

/* Data */
import data from '../data/logements.json'



type Carousel = {
    id: string;
    pictures: string[];
    title: string;
    location: string; 
    tags: string[];
    host: {
        name: string;
        picture: string;
    };
}

type Collapse = {
    description: string;
    equipments: string[];
}


const Detail = () => {
    
    const { id } = useParams();
    const carousel = data.find(item => item.id === id)!;
    const collapse = data.find(item => item.id === id)!;
    
    return (
        
        <>
            <Header />

            <main> 

                <Carousel
                    pictures={carousel.pictures}
                    title={carousel.title}
                    location={carousel.location}
                    tags={carousel.tags}
                    host={carousel.host}
                /> 

                <Collapse 
                    description={collapse.description}
                    equipments={collapse.equipments}
                />

            </main>

            <Footer />
        </>
    );
};

export default Detail;