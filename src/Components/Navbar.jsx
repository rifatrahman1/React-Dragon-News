import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userr from '../assets/user.png'
import { Auth_Context } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, sign_out} = useContext(Auth_Context);
    return (
        <div className='flex justify-between items-center mt-5'>
            <div>{user?.email}</div>
            <div className='flex space-x-5 items-center text-[18px] text-[#706F6F]'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/carear'}>Carear</Link>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-[41px]' src={userr} alt="" />
                {
                    user && user?.email ? <button onClick={sign_out} className='cursor-pointer text-xl px-11 py-3 bg-[#403F3F] text-white'>Logout</button> : <Link to={'/auth/login'}><button className='cursor-pointer text-xl px-11 py-3 bg-[#403F3F] text-white'>Login</button></Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;