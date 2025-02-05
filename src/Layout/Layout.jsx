import React from 'react';
import Header from './Header';
import Latesnews from '../Components/Latesnews';
import Navbar from '../Components/Navbar';
import Aside_right from '../Components/Aside_right';
import Categories from '../Components/Categories';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
            </header>
            <section >
                <Latesnews></Latesnews>
            </section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 gap-7 mt-20'>
                <aside className='col-span-3'>
                    <Categories></Categories>
                </aside>
                <main className='col-span-6'>
                    <Outlet></Outlet>
                </main>
                <aside className='col-span-3'>
                    <Aside_right></Aside_right>
                </aside>
            </main>
        </div>
    );
};

export default Layout;