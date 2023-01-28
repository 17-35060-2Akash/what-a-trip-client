import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div className='main-container'>
            <div className='main-second-layer'>
                <Header></Header>
                <Container>
                    <Outlet></Outlet>
                </Container>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;