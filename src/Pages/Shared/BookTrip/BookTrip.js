import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './BookTrip.css';

const BookTrip = () => {
    const place = useLoaderData();
    const { name, details, img, category_id } = place;
    return (
        <div className='booking-page-container d-flex flex-sm-column flex-md-row justify-content-center align-items-center'>
            <div className='text-white description-card'>
                <Card className="bg-dark text-white border-0 des-card-main">
                    <Card.Img src={img} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='fs-5 fw-normal pb-2'>{name}</Card.Title>
                        <Card.Text className='text-details'>
                            {details}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='booking-form'>
                <h2 className='text-white fs-3 fw-lighter'>Book Your Trip</h2>
                <Form className='text-white text-start'>
                    <Form.Group className="mb-3" controlId="formBasicOrigin">
                        <Form.Label className='text'>Origin</Form.Label>
                        <Form.Control className='py-1 fs-6' type="text" placeholder="Enter origin" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDestination">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control className='py-1 fs-6' type="text" placeholder="Enter Destination" />
                    </Form.Group>
                    <div className='d-flex'>
                        <Form.Group className="mb-3 me-1" controlId="formBasicPassword">
                            <Form.Label>From</Form.Label>
                            <Form.Control className='py-1 px-1 date-panel' type="date" />
                        </Form.Group>
                        <Form.Group className="mb-3 ms-1" controlId="formBasicPassword">
                            <Form.Label>To</Form.Label>
                            <Form.Control className='py-1 px-1 date-panel' type="date" />
                        </Form.Group>
                    </div>

                    <Button variant="warning" type="submit" className='w-100 mt-4'>
                        <Link to={`/hotels/${category_id}`}>Start Booking</Link>
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default BookTrip;