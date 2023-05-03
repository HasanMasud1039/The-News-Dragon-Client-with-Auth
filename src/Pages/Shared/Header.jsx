/*eslint-disable no-unused-vars*/
import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM DD, YYYY ")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className=" mx-2 text-danger" speed={80} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;