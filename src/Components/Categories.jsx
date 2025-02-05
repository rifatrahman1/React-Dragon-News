import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Categories = () => {
    const [categories, set_categories] = useState([]);
    const locaton = useLocation();
    useEffect(() => {
        fetch ('/category.json')
        .then(res => res.json())
        .then((data) => {
            set_categories(data);
        })
    }, [])
    return (
        <div>
            <h1 className='text-xl font-semibold'>All Caterogy</h1>
            <div className='flex flex-col gap-3 mt-5'>
            {
                categories.map((category) => <NavLink  to={`/category/${category.id}`} className={({isActive}) => isActive || (category.id === '0' && locaton.pathname === '/') ? 'text-xl font-semibold px-12.5 py-4.5 rounded-[5px] bg-[#E7E7E7] text-[#403F3F]' : 'px-12.5 py-4.5 text-xl font-bold text-[#9F9F9F]'} key={category.id} category={category}>{category.name}</NavLink>)
            }
        </div>
        </div>
    );
};

export default Categories;