/*eslint-disable no-unused-vars*/
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams, useLoaderData } from 'react-router-dom';
import EditorsInside from '../EditorsInside';

const News = () => {
    const { id } = useParams();
    const news = useLoaderData();
    console.log(id);
    console.log(news);
    const { _id, title, details, image_url, category_id } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>

                        <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInside></EditorsInside>
        </div>
    );
};

export default News;