import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Find = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-xl font-semibold'>Find Us On</h1>
            <div className="join flex join-vertical mt-5 ">
  <button className="btn join-item bg-white gap-3 justify-start font-medium text-[16px] text-[#706F6F] p-4.5 py-7"><p className='px-2 py-2 rounded-full bg-[#F3F3F3]'><FaFacebook className='text-xl'/></p> Facebook</button>
  <button className="btn join-item bg-white gap-3 justify-start font-medium text-[16px] text-[#706F6F] p-4.5 py-7"><p className='px-2 py-2 rounded-full bg-[#F3F3F3]'><FaTwitter className='text-xl'/></p> Twitter</button>
  <button className="btn join-item bg-white gap-3 justify-start font-medium text-[16px] text-[#706F6F] p-4.5 py-7"><p className='px-2 py-2 rounded-full bg-[#F3F3F3]'><FaInstagram className='text-xl'/></p> Instagram</button>
</div>
        </div>
    );
};

export default Find;