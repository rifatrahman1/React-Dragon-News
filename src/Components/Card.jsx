import React from 'react';
import { FaRegBookmark, FaRegShareSquare, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ card }) => {
    console.log('object', card);
    const { title, author, published_date, thumbnail_url, details, total_view, rating, image_url } = card;
    
    return (
        <div className="bg-white shadow-md rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <h3 className="text-sm font-semibold">{author.name}</h3>
                        <p className="text-xs text-gray-500">{card.title ? card.title.split(" ")[0] : "No Title"}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-600">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaRegShareSquare className="cursor-pointer" />
                </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            
            <div className=''>
            <img src={image_url} alt={title} className=" rounded-lg" />
            </div>
            
            <p className="text-gray-600 font-semibold">
                {details.length > 200 ? details.slice(0, 200) + '...' : details}
                <span className="text-red-500 cursor-pointer"> Read More</span>
            </p>

            <div className="flex justify-between items-center pt-2 border-t">
                <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-gray-700 font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
