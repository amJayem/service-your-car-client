import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer';
import Header from '../Pages/Common/Header';
import {Toaster} from 'react-hot-toast';

const Main = () => {
    return (
        <div className='mx-10'>
            <Header/>
            <Outlet/>
            <Footer/>
            <Toaster/>
        </div>
    );
};

export default Main;