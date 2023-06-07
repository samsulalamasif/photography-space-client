import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="md:min-h-[calc(100vh-100px)]">
                <Outlet></Outlet>
            </div>
            <ScrollRestoration></ScrollRestoration>
            <Footer></Footer>
        </div>
    );
};

export default Main;