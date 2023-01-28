import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard';
import Place from '../Place/Place';
import './Home.css';

const Home = () => {
    const [place, setPlace] = useState({});
    const defaultPlaceId = 1;

    useEffect(() => {
        fetch(`https://what-a-trip-server.vercel.app/places/${defaultPlaceId}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, []);

    const places = useLoaderData();
    // console.log(places);
    const handleShowDetails = (place) => {
        setPlace(place);
    }



    return (
        <div className='home-conatiner text-white mt-5'>
            <div className="article-container">
                <ArticleCard place={place}></ArticleCard>
            </div>
            <div className="booking-trips-container">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        places.map(place => <Place
                            key={place.id}
                            place={place}
                            handleShowDetails={handleShowDetails}></Place>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;