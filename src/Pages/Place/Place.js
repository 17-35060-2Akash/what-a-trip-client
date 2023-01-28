import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Place.css';

const Place = ({ place, handleShowDetails }) => {
    const { name, img } = place;
    return (
        <Col>
            <Card onMouseEnter={() => handleShowDetails(place)} className="bg-dark text-white border border-0 rounded-4 destination-card">
                <Card.Img src={img} alt="Card image" className='img-bg' />
                <Card.ImgOverlay className='card-writings'>
                    <Card.Title className='card-text fs-3'>{name}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Place;