import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Navbar from './components/Navbar';

const Routes = (children: any) => {
    return (
        <BrowserRouter>
            <Navbar />
            <Route component={Home} path="/" exact />
            <Route component={Tutorial} path="/tutorial" />
        </BrowserRouter>
    )
}

export default Routes;