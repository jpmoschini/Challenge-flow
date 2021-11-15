import React from 'react';
import "./homepage.css";
import Cities from "../Cities/Cities";
import Header from '../Header/Header';
import CurrentCity from '../CurrentCity/CurrentCity';

const Homepage = () => {
    return (
        <>
            <Header />
            <div className=" box">
                <Cities />
                <CurrentCity />
            </div>
        </>
    );
};

export default Homepage;
