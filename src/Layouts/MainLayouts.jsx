import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen justify-between '>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
        
    );
};

export default MainLayouts;