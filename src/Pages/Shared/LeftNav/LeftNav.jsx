/*eslint-disable no-unused-vars*/
import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
        .catch(error => console.log(error))
    },[])
    // console.log(categories);

    return (
        <div>
            <div>
                <h2>All Category</h2>
                <Button variant="secondary">National News</Button>
                <div className='p-2 m-2 text-decoration-none '>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link to={`/category/${category.id}`} className='p-2 text-secondary text-decoration-none' >{category.name}</Link>
                        </p>
                    
                        
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default LeftNav;