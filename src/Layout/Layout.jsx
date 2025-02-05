import React from 'react';
import Header from './Header';
import Latesnews from '../Components/Latesnews';
import Navbar from '../Components/Navbar';
import Aside_left from '../Components/Aside_left';

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
            <main className='grid grid-cols-12 gap-4 mt-20'>
                <aside className='col-span-3'>
                    <Aside_left></Aside_left>
                </aside>
                <main className='col-span-6'>middle content layout</main>
                <aside className='col-span-3'>right aside layout</aside>
            </main>
        </div>
    );
};

export default Layout;