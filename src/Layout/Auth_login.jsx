import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Auth_Context } from '../Provider/AuthProvider';

const Auth_login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [error, set_error] = useState({});
    const {user_login, set_user} = useContext(Auth_Context)
    const login_submit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        user_login(email, password)
        .then((result) => {
            const user = result.user;
            set_user(user);
            navigate(location?.state ? location.state : '/');
        })
        .catch((err) => {
            set_error({...error, login:err.code})
        })
        location.pathname === '/'
    }
    return (
        <div>
        <header className='pt-5 '>
            <Navbar></Navbar>
        </header>
        <div className='bg-white w-[760px] mx-auto p-20 mt-28 rounded-lg'>
            <h1 className='text-center text-[35px] font-semibold'><span className='text-red-500'>Login</span> your account</h1>
            <div className="border-t text-gray-400 mt-12"></div>
            <form onSubmit={login_submit}>
            <div className='mt-12'>
            <div>
                <p className='text-xl font-semibold'>Email address</p>
                <input className='bg-[#F3F3F3] text-[#9F9F9F] p-5 rounded-lg w-full mt-4' type="email" name="email" placeholder='Enter your email address' id="" />
            </div>
            <div className='mt-6'>
                <p className='text-xl font-semibold'>Password</p>
                <input className='bg-[#F3F3F3] text-[#9F9F9F] p-5 rounded-lg w-full mt-4' type="password" name="password" placeholder='Enter your password' id="" />
                {
                error && <p className='text-red-500'>{error.login}</p> 
            }
            </div>
            <button className='text-white bg-black cursor-pointer rounded-lg mt-7.5 text-xl font-semibold w-full py-4.5'>Login</button>
            
            <p className='font-semibold mt-7.5 text-[#706F6F] text-center'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-red-500'>Register</Link></p>
            </div>
            </form>
        </div>
    </div>
    );
};

export default Auth_login;