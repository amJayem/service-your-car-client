import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer';
import Header from '../Pages/Common/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;