/*eslint-disable no-unused-vars*/
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>

            <div>
                <h4>Find us on</h4>
                <ListGroup className='p-2'>
                    <ListGroup.Item><FaFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />  Instagram</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin />  LinkedIn</ListGroup.Item>
                    <ListGroup.Item><FaYoutube />  Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='background' >
                <div><img src={bg} alt="" /></div>
                <div className='text'>
                    <h2 className='py-4'>Create an Amazing Newspaper</h2>
                    <p className='py-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;