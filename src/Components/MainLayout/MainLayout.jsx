import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;