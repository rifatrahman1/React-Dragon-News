import React from 'react';
import swimming from '../assets/swimming.png';
import classs from '../assets/class.png';
import bg from '../assets/bg.png'
import play from '../assets/playground.png'

const Zone = () => {
    return (
        <div className='bg-[#F3F3F3] mt-5 px-3'>
            <h2 className='text-xl font-semibold pt-5 '>Q-Zone</h2>
            <div className=' justify-center flex flex-col space-y-6 mt-4'>
                <img src={swimming} alt="" />
                <img src={classs} alt="" />
                <img src={play} alt="" />
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Zone;