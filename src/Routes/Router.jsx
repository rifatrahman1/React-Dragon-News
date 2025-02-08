
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Category_news from '../Components/Category_news';
import Auth_layout from '../Layout/Auth_layout';
import Auth_login from '../Layout/Auth_login';
import Register from '../Layout/Register';
import Details from '../Pages/Details';
import Secure_route from './Secure_route';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/0'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <Category_news></Category_news>,
                loader: () => fetch('../news.json')
            },
            {
                path: '/about',
                element: <p>Hello About section</p>
            }
        ]
    },
    {
        path: '/auth',
        element: <Auth_layout></Auth_layout>,
        children: [
            {
                path: '/auth/login',
                element: <Auth_login></Auth_login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news_details/:id',
        element: <Secure_route>
            <Details></Details>
        </Secure_route>,
        loader: () => fetch('../news.json')
    }
    
])


export default Router;