import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ArticleCard.css'

const ArticleCard = ({ place }) => {
    // console.log(place);
    const { name, details, id } = place;
    return (
        <div>
            <div className='article-card text-start pe-4' style={{ width: '12rem', height: '20rem' }}>
                <h2 className='display-6 '>{name}</h2>
                <p className='my-3 mt-3'>{details}</p>
                <Button className='px-5 mt-2 booking-btn' variant='warning'>
                    <Link to={`/book/${id}`}>Booking</Link>
                </Button>
            </div>
        </div>
    );
};

export default ArticleCard;


