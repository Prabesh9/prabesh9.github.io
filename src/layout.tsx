import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from "./components/sidebar";
import Router from './route/router';

const Layout : () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <SideBar/>
            <main>
                <Router/>
            </main>
        </BrowserRouter>
    );
}

export default Layout;
