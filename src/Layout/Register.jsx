
import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Form, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';
import { Auth_Context } from '../Provider/AuthProvider';

const Register = () => {
    const {create_user, set_user, sign_out} = useContext(Auth_Context);
    const [error, set_error] = useState({});

    const handle_submit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            set_error({...error, name: 'must be more then 5 cheracter longer..'})
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo, email, password);

        create_user(email, password)
        .then((result) => {
            const user = result.user
            set_user(user)
        })
        .catch((error) => {
            console.log('ERROR', error);
        })
    }
    return (
<div>
<header className='pt-5 '>
    <Navbar></Navbar>
</header>
<div className='bg-white w-[760px] mx-auto p-20 mt-28 rounded-lg'>
    <h1 className='text-center text-[35px] font-semibold'><span className='text-red-500'>Register</span> your account</h1>
    <div className="border-t text-gray-400 mt-12"></div>
    <div className='mt-12 space-y-6'>
    <form onSubmit={handle_submit}>
    <div>
        <p className='text-xl font-semibold'>Your Name</p>
        <input className='bg-[#F3F3F3] text-[#9F9F9F] p-5 rounded-lg w-full mt-4' type="text" name="name" placeholder='Enter your name' id="" />
        {
            error.name && <p className='text-red-500'>{error.name}</p>
        }
    </div>
    <div>
        <p className='text-xl font-semibold'>Photo URL</p>
        <input className='bg-[#F3F3F3] text-[#9F9F9F] p-5 rounded-lg w-full mt-4' type="text" name="photo" placeholder='Enter your photo url' id="" />
    </div>
    <div>
        <p className='text-xl font-semibold'>Email address</p>
        <input className='bg-[#F3F3F3] text-[#9F9F9F] p-5 rounded-lg w-full mt-4' type="email" name="email" placeholder='Enter your email address' id="" />
    </div>
    <div className='mt-6'>
        <p className='text-xl font-semibold'>Password</p>
        <input className='bg-[#F3F3F3] text-[#9F9F9F] p-5 rounded-lg w-full mt-4' type="password" name="password" placeholder='Enter your password' id="" />
    </div>
    <div className='flex items-center'>
        <input className='w-10' type="checkbox" name="checkbox" id="" />
        <p className='font-semibold text-[#706F6F]'>Accept Term & Conditions</p>
    </div>
    <button className='text-white cursor-pointer bg-black rounded-lg mt-7.5 text-xl font-semibold w-full py-4.5'>Register</button>
    </form>
    <p className='font-semibold mt-7.5 text-[#706F6F] text-center'>Already Have An Account ? <Link to={'/auth/login'} className='text-red-500'>Login</Link></p>
    </div>
</div>
</div>
    );
};

export default Register;