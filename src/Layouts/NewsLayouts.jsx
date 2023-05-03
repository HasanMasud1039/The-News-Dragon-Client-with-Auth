/*eslint-disable no-unused-vars*/
import React from 'react';
import Header from '../Pages/Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import Footer from '../Pages/Shared/Footer';

const NewsLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
    ;
};

export default NewsLayouts;