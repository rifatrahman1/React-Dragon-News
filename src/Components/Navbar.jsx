import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div></div>
            <div className='flex space-x-5 items-center text-[18px] text-[#706F6F]'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/carear'}>Carear</Link>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-[41px]' src={user} alt="" />
                <Link><button className='text-xl px-11 py-3 bg-[#403F3F] text-white'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;