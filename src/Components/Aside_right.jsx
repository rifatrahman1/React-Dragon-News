import React from 'react';
import Login from './Login';
import Find from './Find';
import Zone from './Zone';

const Aside_right = () => {
    return (
        <div className=''>
            <Login></Login>
            <Find></Find>
            <Zone></Zone>
        </div>
    );
};

export default Aside_right;