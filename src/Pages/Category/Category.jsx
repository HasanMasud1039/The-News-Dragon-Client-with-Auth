/*eslint-disable no-unused-vars*/
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard';

const Category = () => {
    const {id} = useParams();
    // console.log(id);
    const categoryNews = useLoaderData();
    return (
        <div>
            {id && <h1>This is Category {categoryNews.length}</h1>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;