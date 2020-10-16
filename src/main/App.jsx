import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Menu from '../template/Menu';
import Routes from './Routes';
import Footer from '../template/Footer';

export default props =>(
    <div className="container">
        <Menu />
        <Routes />
        <Footer />
    </div>
)