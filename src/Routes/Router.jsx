
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Category_news from '../Components/Category_news';

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
    }
])


export default Router;