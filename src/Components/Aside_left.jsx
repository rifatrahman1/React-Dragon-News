import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Aside_left = () => {
    const [categories, set_categories] = useState([]);
    useEffect(() => {
        fetch ('./category.json')
        .then((res) => res.json())
        .then((data) => {
            set_categories(data);
        })
    }, [])
    // {
    //     "id": "1",
    //     "name": "Breaking News",
    //     "category": "breaking-news"
    // },
    return (
        <div className='flex flex-col'>
            {
                categories.map((category) => <NavLink className={({isActive}) => isActive ? 'bg-orange-400' : 'bg-sky-400'} key={category.id} category={category}></NavLink>)
            }
        </div>
    );
};

export default Aside_left;