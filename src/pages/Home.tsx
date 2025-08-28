import {useEffect, useState } from 'react';

/* Components */ 
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

/* Sass */
import '../styles/Home.scss';

/* Data */
import data from '../data/logements.json';

type Card = {
    id: string;
    pictures: string[];
    title: string;
    location: string; 
    equipments: string[];
    rating: string;
}

const Home = () => {
    const [cards, setCards] = useState<Card[]> ([]);

    useEffect(() => {
        setCards(data);
    }, []);
    return (
        <>
            <Header /> 
 
            <main>
                <section id='Introduction'>
                    <h2>Trouvez votre logement idéal</h2>
                    <p>Découvrez des hébergements uniques et vivez comme un local partout dans le monde</p>
                </section>

                <section id="Card">
                    <div id='container'>  
                        {cards.map((card) => (
                            <Card 
                                key={card.id} 
                                id={card.id}
                                pictures={card.pictures}
                                title={card.title}
                                location={card.location}
                                equipments={card.equipments}
                                rating={card.rating}
                            />
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
            
        </>
    );
};

export default Home;