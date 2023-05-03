/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='p-4 text-center text-black'>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat blanditiis mollitia, alias ab eum unde, numquam praesentium assumenda iste omnis, tenetur consectetur? Enim, numquam fugit. Vel expedita voluptatem possimus laudantium?</p>
            <br />
            <p>Go Back to <Link to='/register'> Register</Link></p>
        </div>
    );
};

export default Terms;