/*eslint-disable no-unused-vars*/
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
           
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Container className='mx-auto w-50'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control required type="text" name="photo" placeholder="Your Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to='/terms'> terms and conditions.</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">Already have an account?  
                   <Link to="/login">  Login</Link>
                </Form.Text>
                <br />
                {/* <Form.Text className="text-danger">
                    Well never share your email with anyone else.
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    Well never share your email with anyone else.
                </Form.Text> */}
            </Form>
        </Container>

   );
};

export default Register;