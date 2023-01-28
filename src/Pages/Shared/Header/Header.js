import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo1 from '../../../images/logo123.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
const Header = () => {
    return (

        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="" variant="dark" sticky='top'>
            <Container className='d-flex flex-row justify-content-between'>
                <Navbar.Brand><Link className='title-logo' to='/'>
                    <Image src={logo1} style={{ width: '90px' }} className='pb-2 ms-4'></Image>
                </Link></Navbar.Brand>

                <Form className="d-flex mx-1 px-5 w-50 searchbar">
                    <Form.Control
                        type="search"
                        placeholder="Search Destination"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success px-3">Search</Button>
                </Form>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggler-btn' />
                <Navbar.Collapse id="responsive-navbar-nav" className='text-white'>
                    <Nav className="top-bar-menu">
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div>
                            <Link to='/destination'>Destination</Link>
                        </div>
                        <div>
                            <Link to='/blog'>Blog</Link>
                        </div>
                        <div>
                            <Link to='/contacts'>Contact</Link>
                        </div>
                    </Nav>

                </Navbar.Collapse>

                <Nav className='d-flex flex-row align-items-center'>
                    {/* <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='user-name'>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Link className='login-logout-link' to='/login'>Login</Link>
                                        <Link className='login-logout-link' to='/register'>Register</Link>
                                    </>
                            }
                        </> */}
                    <Link to='/'>
                        {/*  {
                                user?.photoURL ?
                                    <Image
                                        src={user?.photoURL}
                                        roundedCircle
                                        style={{ height: '40px' }}></Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            } */}


                    </Link>
                    <Nav.Link>
                        {/* {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} variant='danger'>Logout</Button>
                                    </>
                                    :
                                    <></>
                            } */}
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
};

export default Header;