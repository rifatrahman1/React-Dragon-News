import React, { useContext } from 'react';
import { Auth_Context } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const Secure_route = ({children}) => {
    const {user, loading} = useContext(Auth_Context);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return (
       <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default Secure_route;