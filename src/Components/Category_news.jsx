import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Category_news = () => {
    const [categories, set_categories] = useState([]);
    const category_news = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        if (!id || id === '0') {
            set_categories(category_news);
        } else {
            const news_filter = category_news?.filter((news) => news.category_id === id);
            set_categories(news_filter);
        }
    }, [id, category_news]);

    return (
        <div>
            <h2>Dragon News Home - {id}</h2>
            <div className='space-y-8'>
            {
                categories.map((card) => <Card key={card._id} card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Category_news;
