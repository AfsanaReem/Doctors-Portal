import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';
import HeaderNav from '../SharedComponents/HeaderNav';

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