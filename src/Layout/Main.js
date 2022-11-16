import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import HeaderNav from '../Components/HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;