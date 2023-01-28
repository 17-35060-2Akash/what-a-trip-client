import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaStar } from 'react-icons/fa';
import './Hotel.css';

const Hotel = ({ hotel }) => {
    const { name, image, categoryname, beds, ratings, price } = hotel;
    return (
        <Col>
            <Card className="bg-dark text-white border-0" style={{ width: '18rem', height: '10rem' }}>
                <Card.Img src={image} alt="Card image" className='hotel-image' />
                <Card.ImgOverlay className='card-font-changer' style={{ fontSize: '12px' }}>
                    <Card.Title className='text-on-card'>{name}</Card.Title>
                    <Card.Text className=''>
                        <span className='fw-semibold text-on-card px-2'><span>{categoryname}</span> Room </span>
                    </Card.Text>
                    <Card.Text>
                        <span className='text-on-card px-2'>{beds} with central Ac and balcony</span>
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center text-on-card px-2'>
                        <div className='fs-5 d-flex flex-row justify-content-center align-items-center '>
                            <span className=''>
                                <FaStar className='text-warning'></FaStar> <span> {ratings} (10)</span>
                            </span>
                        </div>
                        <div>
                            <span className='fs-4 '>{price}$ /night</span>
                        </div>
                    </div>

                </Card.ImgOverlay>
            </Card >
        </Col >
    );
};

export default Hotel;

