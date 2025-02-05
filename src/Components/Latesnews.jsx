import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Latesnews = () => {
    return (
        <div className='flex items-center gap-5 p-4 bg-[#F3F3F3] mt-7.5'>
            <p className='text-white text-xl font-medium bg-[#D72050] px-6 py-2.5'>Latest</p>
            <Marquee pauseOnHover={true} className='cursor-pointer' speed={200}>
            <Link to={'/news'}><p className='text-[18px] font-semibold text-[#403F3F]'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link>
            </Marquee>
        </div>
    );
};

export default Latesnews;