import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold'>Login With</h2>
            <div className='mt-5'>
            <button className='w-full cursor-pointer flex py-2 rounded-lg justify-center items-center gap-2 text-sky-400 text-xl border-2 border-sky-500'><FaGoogle /> <p>Login with Google</p></button>
            <button className='w-full mt-3 cursor-pointer flex py-2 rounded-lg justify-center items-center gap-2 text-xl border-2 border-black'><FaGithub /> <p>Login with Github</p></button>
            </div>
        </div>
    );
};

export default Login;