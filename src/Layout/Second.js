import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../SharedComponents/HeaderNav';

const Second = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Second;