import React from 'react';
import "./homepage.css";
import Cities from "../Cities/Cities";
import Header from '../Header/Header';
import CurrentCity from '../CurrentCity/CurrentCity';

const Homepage = () => {
    return (
        <div >
            <Header />
            <div className=" container-sm box-homepage">
                <Cities />
                <CurrentCity />
            </div>
        </div>
    );
};

export default Homepage;
