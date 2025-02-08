import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth_layout = () => {
    return (
        <div className='bg-[#F3F3F3] min-h-screen'>
            <div className=' container mx-auto'>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Auth_layout;