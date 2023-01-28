import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import './Hotels.css';

const Hotels = () => {
    const hotels = useLoaderData();
    const [place, setPlace] = useState({});
    const { map } = place;

    const { category_id } = hotels[0];
    const intCategoryId = parseInt(category_id);
    // console.log(intCategoryId);


    useEffect(() => {
        fetch(`https://what-a-trip-server.vercel.app/places/${intCategoryId}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, []);

    return (
        <div className='hotels-page d-flex flex-sm-column flex-md-row flex-lg-row justify-content-center align-items-center container'>
            <Row xs={1} md={1} lg={1} className='hotels-list-Container g-4 container-fluid text-end'>
                {
                    hotels.map((hotel, idx) => <Hotel
                        key={idx} hotel={hotel}></Hotel>)
                }
            </Row>
            <div className='map-container ms-4 container-fluid'>
                <iframe width="300" height="500" id="gmap_canvas" src={map} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </div>
    );
};

export default Hotels;