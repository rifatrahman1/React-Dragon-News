import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Aside_right from '../Components/Aside_right';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Details = () => {
    const [news, set_news] = useState(null);
    const data = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        if (data && id) {
            const details_news = data.find((news) => news._id === id);
            set_news(details_news);
        }
    }, [data, id]);

    if (!news) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
            </header>
            <div className=' my-10 text-xl font-semibold'>
                <p>Dragon News</p>
            </div>
            <section className='grid grid-cols-12 gap-6 '>
                <div className='border-2 border-gray-400 rounded-lg col-span-9 p-7.5'>
                    <img src={news?.image_url} alt={news?.title} className="w-full" />
                    <h2 className='mt-5 text-[25px] font-bold'>{news?.title}</h2>
                    <p className='text-[#706F6F] text-[18px] mt-3'>{news?.details}</p>
                    <Link to={'/category/0'}><button className='cursor-pointer flex items-center text-xl font-medium text-white px-6 py-2.5 gap-3 bg-[#D72050] mt-8'><span><FaArrowLeft /></span>All News in this Category</button></Link>
                </div>
                <aside className='col-span-3'>
                    <Aside_right></Aside_right>
                </aside>
            </section>
        </div>
    );
};

export default Details;
